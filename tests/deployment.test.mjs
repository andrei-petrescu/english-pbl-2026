import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const workflowPath = ".github/workflows/deploy-pages.yml";

test("GitHub Pages workflow deploys a minimal site artifact from main", () => {
  assert.ok(existsSync(workflowPath), `${workflowPath} should exist`);

  const workflow = readFileSync(workflowPath, "utf8");

  assert.match(workflow, /push:\s*\r?\n\s+branches:\s*\r?\n\s+- main/);
  assert.match(workflow, /workflow_dispatch:/);
  assert.match(
    workflow,
    /permissions:\s*\r?\n\s+contents:\s*read\s*\r?\n\s+pages:\s*write\s*\r?\n\s+id-token:\s*write/,
  );
  assert.match(
    workflow,
    /concurrency:\s*\r?\n\s+group:\s*pages\s*\r?\n\s+cancel-in-progress:\s*false/,
  );
  assert.match(workflow, /actions\/configure-pages@v5/);
  assert.match(workflow, /actions\/upload-pages-artifact@v3/);
  assert.match(workflow, /actions\/deploy-pages@v4/);
  assert.match(workflow, /cp\s+\*\.html\s+styles\.css\s+survey\.js\s+_site\//);
  assert.match(workflow, /cp\s+-R\s+assets\s+_site\/assets/);
  assert.match(workflow, /path:\s*_site\b/);
  assert.doesNotMatch(workflow, /cp\s+-R\s+\.\s+_site/);
});
