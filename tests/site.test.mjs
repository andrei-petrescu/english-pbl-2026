import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const pages = [
  "index.html",
  "wellbeing.html",
  "resources.html",
  "support.html",
  "survey.html",
];

test("each guide page links to every destination and marks itself current", () => {
  for (const page of pages) {
    assert.ok(existsSync(page), `${page} should exist`);

    const html = readFileSync(page, "utf8");
    const navigation = html.match(
      /<nav\b[^>]*aria-label=["']Primary navigation["'][^>]*>([\s\S]*?)<\/nav>/i,
    );
    assert.ok(navigation, `${page} should have primary navigation`);

    const links = [...navigation[1].matchAll(/<a\b([^>]*)>/gi)].map(
      ([, attributes]) => ({
        href: attributes.match(/\bhref=["']([^"']+)["']/i)?.[1],
        current: attributes.match(/\baria-current=["']([^"']+)["']/i)?.[1],
      }),
    );

    assert.deepEqual(
      links.map(({ href }) => href).sort(),
      [...pages].sort(),
      `${page} should link to all guide pages`,
    );
    assert.equal(
      links.filter(({ href, current }) => href === page && current === "page")
        .length,
      1,
      `${page} should mark its own navigation link as current`,
    );
  }
});

test("each page places its running label after the main heading", () => {
  for (const page of pages) {
    const html = readFileSync(page, "utf8");
    const headingIndex = html.indexOf("<h1");
    const labelIndex = html.indexOf('class="edition-line"');

    assert.notEqual(headingIndex, -1, `${page} should have a main heading`);
    assert.notEqual(labelIndex, -1, `${page} should have a running label`);
    assert.ok(
      headingIndex < labelIndex,
      `${page} should place its running label after the main heading`,
    );
  }
});

test("page contents links target the sections they name", () => {
  const contents = {
    "wellbeing.html": [
      "school-pressure",
      "relationships",
      "change-and-uncertainty",
      "asking-for-help",
    ],
    "resources.html": [
      "adolescent-mental-health",
      "stress-guide",
      "talk-to-someone",
    ],
    "survey.html": ["privacy-heading", "needs-question", "impact-question"],
  };

  for (const [page, sectionIds] of Object.entries(contents)) {
    const html = readFileSync(page, "utf8");
    for (const id of sectionIds) {
      assert.match(html, new RegExp(`id="${id}"`), `${page} should define ${id}`);
      assert.match(html, new RegExp(`href="#${id}"`), `${page} should link to ${id}`);
    }
  }
});
