## Ship pipeline
When code changes are ready to ship:
1. Commit and push code directly to GitHub.
2. Manually run `npm run deploy` after every change to build with `@opennextjs/cloudflare` and deploy to Cloudflare via `wrangler`.
3. Use Cloudflare CLI (`wrangler`) to check and verify if the deployment succeeded.

CRITICAL RULE: After every code change, manually run `npm run deploy`. No local testing on Mac or VPS. Push to GitHub and deploy via `npm run deploy`. All testing is done on Cloudflare.

## Codex (CODE-ONLY) role
Codex never deploys, pushes, or runs production builds. It only writes code. opencode free models own git commit, push, `npm run deploy`, Cloudflare verification, and docs. See CODEX.md for the full rules.

## Scratch directory scripts preservation policy
Do NOT delete any scripts, logs, or files created or present inside the `scratch/` directory. They must be kept intact as a matter of policy.

