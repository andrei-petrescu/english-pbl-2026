import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import test from "node:test";

function createSurveyHarness() {
  assert.ok(existsSync("survey.js"), "survey.js should enable the safe demo");

  const fields = [{ disabled: true }, { disabled: true }];
  const button = { disabled: true };
  const status = {
    hidden: true,
    focused: false,
    focus() {
      this.focused = true;
    },
  };
  const form = {
    submitHandler: null,
    resetCount: 0,
    addEventListener(type, handler) {
      assert.equal(type, "submit");
      this.submitHandler = handler;
    },
    querySelectorAll(selector) {
      assert.equal(selector, "[data-survey-fields]");
      return fields;
    },
    querySelector(selector) {
      if (selector === "[data-survey-submit]") return button;
      if (selector === "[data-survey-status]") return status;
      return null;
    },
    reset() {
      this.resetCount += 1;
    },
  };
  const forbidden = () => {
    throw new Error("The survey must not use network or storage APIs");
  };

  runInNewContext(readFileSync("survey.js", "utf8"), {
    document: {
      querySelector(selector) {
        assert.equal(selector, "[data-survey-form]");
        return form;
      },
    },
    fetch: forbidden,
    XMLHttpRequest: forbidden,
    localStorage: { setItem: forbidden },
    sessionStorage: { setItem: forbidden },
  });

  return { fields, button, status, form };
}

test("survey controls enable only after the safe handler is installed", () => {
  const { fields, button, form } = createSurveyHarness();

  assert.equal(fields.every((field) => !field.disabled), true);
  assert.equal(button.disabled, false);
  assert.equal(typeof form.submitHandler, "function");
});

test("survey submission clears answers and announces that nothing was saved", () => {
  const { status, form } = createSurveyHarness();
  let prevented = false;

  form.submitHandler({
    preventDefault() {
      prevented = true;
    },
  });

  assert.equal(prevented, true);
  assert.equal(form.resetCount, 1);
  assert.equal(status.hidden, false);
  assert.equal(status.focused, true);
});

test("survey remains non-submittable without JavaScript", () => {
  const html = readFileSync("survey.html", "utf8");

  assert.match(html, /<form\b[^>]*data-survey-form/);
  assert.match(html, /data-survey-fields disabled/);
  assert.match(html, /data-survey-submit disabled/);
  assert.doesNotMatch(html.match(/<form\b[^>]*>/i)?.[0] ?? "", /\baction\s*=/i);
  assert.doesNotMatch(html.match(/<form\b[^>]*>/i)?.[0] ?? "", /method\s*=\s*["']post["']/i);
});
