# GitHub Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish the static student well-being guide on GitHub Pages, with automatic deployments from `main`.

**Architecture:** A GitHub Actions workflow stages only website files and deploys the staging directory with the official Pages actions. Repository documentation explains the Pages source setting and expected URL.

**Tech Stack:** GitHub Actions, GitHub Pages, static HTML/CSS/JavaScript, Node.js built-in test runner.

**Spec:** `docs/superpowers/specs/2026-11-24-github-pages-design.md`

## Global Constraints

- Keep the site static; do not introduce a build tool, server, or data collection.
- Deploy the existing HTML pages, stylesheet, survey script, and local font assets.
- Do not publish repository-only materials such as tests, design notes, or development logs as website content.
- Do not change the site's content, visual design, or domain configuration.
- GitHub repository Pages settings must select **GitHub Actions** as the build and deployment source.

## Review Focus

- A push to a branch other than `main` must not publish the site; verify the workflow trigger is restricted to `main`.
- A manual dispatch must be available; verify `workflow_dispatch` is present.
- The Pages artifact must include all root HTML pages, `styles.css`, `survey.js`, and `assets/`, but exclude tests and repository notes; inspect the staged file list.
- The Pages deploy job must have `pages: write` and `id-token: write`; verify workflow permissions.
- Repeated deployments must not race; verify the workflow uses a shared concurrency group without canceling an in-progress deploy.

---

### Task 1: Configure and document GitHub Pages deployment

**Files:**
- Create: `.github/workflows/deploy-pages.yml`
- Create: `tests/deployment.test.mjs`
- Modify: `README.md`

**Interfaces:**
- Consumes: the existing root HTML pages, `styles.css`, `survey.js`, and `assets/`.
- Produces: a Pages artifact containing only those website files, deployed to the GitHub Pages environment.

- [ ] **Step 1: Write a failing deployment configuration test**

Add a test in `tests/deployment.test.mjs` asserting that the Pages workflow is restricted to `main` pushes plus manual dispatch, has the required deployment permissions and serialized concurrency, and uploads a staged artifact populated only from the site files.

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test tests/deployment.test.mjs`
Expected: FAIL because `.github/workflows/deploy-pages.yml` does not exist yet.

- [ ] **Step 3: Add a workflow for pushes to `main` and manual dispatch**

Use `actions/checkout@v4`, `actions/configure-pages@v5`, `actions/upload-pages-artifact@v3`, and `actions/deploy-pages@v4`. Grant `contents: read`, `pages: write`, and `id-token: write`. Serialize deployments with a `pages` concurrency group and `cancel-in-progress: false`.

- [ ] **Step 4: Stage only website files before upload**

Copy all root `*.html` files, `styles.css`, `survey.js`, and the `assets/` directory into `_site/`; upload `_site/` as the Pages artifact.

- [ ] **Step 5: Document setup and the published address**

Update `README.md` with the repository Pages URL (`https://andrei-petrescu.github.io/english-pbl-2026/`), note that Pages must use the GitHub Actions source, and explain that pushes to `main` deploy automatically.

- [ ] **Step 6: Run tests and inspect the publish artifact**

Run `node --test`. Stage the same website files into a temporary directory, verify all expected site files and local fonts are present, and verify repository-only files such as `tests/`, `README.md`, and `DESIGN.md` are absent.

- [ ] **Step 7: Publish the workflow to `main`**

Commit the workflow, test, README update, approved design, and plan, then push to `origin main`. Confirm the GitHub Actions deployment completes after Pages is configured to use GitHub Actions, and check the published URL.
