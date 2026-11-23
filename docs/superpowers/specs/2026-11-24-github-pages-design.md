# GitHub Pages Deployment Design

## Intent

Publish the existing student well-being guide as a static site on GitHub Pages, with future updates deployed automatically from `main`.

## Goals and boundaries

- Deploy the existing HTML pages, stylesheet, survey script, and local font assets.
- Keep the site static; do not introduce a build tool, server, or data collection.
- Do not publish repository-only materials such as tests, design notes, or development logs as website content.
- Do not change the site's content, visual design, or domain configuration.

## Approaches

- **GitHub Actions (selected):** a workflow stages only website files and deploys them to Pages on pushes to `main`, with a manual dispatch option. This makes deployments repeatable and visible in Actions.
- **Deploy from branch root:** configure Pages to serve the repository's `main` branch root. This is simpler, but would expose unrelated repository files alongside the site and gives less control over the published artifact.

Actions is preferred because it can publish only the website files while leaving repository materials out of the Pages artifact.

## Implementation

Add a GitHub Actions workflow that copies the root HTML pages, `styles.css`, `survey.js`, and `assets/` into a staging directory, then uploads and deploys that directory using GitHub Pages actions. Set the required Pages deployment permissions and serialize deployments. GitHub repository Pages settings must select **GitHub Actions** as the build and deployment source.

## Verification

Run the existing site tests and verify the workflow's staged file set and YAML structure. Once pushed and Pages is configured for Actions, verify the deployment result and published URL.
