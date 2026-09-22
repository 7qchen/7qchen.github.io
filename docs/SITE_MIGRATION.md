# Personal site migration to al-folio v1

Migrated from the site's v0.16.3 template to `alshedivat/al-folio` main at
`2fec8d3a9c99450328cee59a6a6114e26055d86e`.
The original site is retained on the local `codex/pre-v1-migration` branch.

The site now uses upstream's pinned plugin gems, including `al_folio_core` 1.0.15,
and its current build/deployment configuration. Future runtime upgrades use gem
version updates instead of copying theme internals.

All personal pages, bibliography, news, data, photos, PDFs, and personalized
configuration values were preserved. Stale copied theme layouts, includes,
Sass, JavaScript, and icon assets were removed in favor of the gems.

Four intentional overrides are recorded in `.al-folio-overrides.yml`:

- `_layouts/about.liquid`: social links beneath the portrait.
- `_layouts/bib.liquid`: publication award badges.
- `_includes/news.liquid`: month/year news dates.
- `assets/css/main.scss`: cyan accent and compact profile social icons.

The social-link tooltip plugin remains site-owned. The Docker entry point keeps
local Gemfile.lock edits instead of resetting them during preview startup.

## Validation

```bash
npm ci
npm run lint:prettier
npm run lint:style-contract
docker compose up -d
docker compose exec -T jekyll env JEKYLL_ENV=production bundle exec jekyll build --destination /tmp/site-production
docker compose exec -T jekyll bundle exec al-folio upgrade audit
docker compose exec -T jekyll bundle exec al-folio upgrade overrides audit
docker compose exec -T jekyll bash test/integration_plugin_toggles.sh
docker compose exec -T jekyll bash test/integration_bootstrap_compat.sh
docker compose exec -T jekyll bash test/integration_upgrade_cli.sh
docker compose exec -T jekyll bash test/integration_css_minify.sh
```

These checks passed. Browser checks covered home, publications, misc, teaching,
service, and CV; all returned HTTP 200 with no broken images. The mobile homepage
has no horizontal overflow; its menu and dark-mode toggle work.

Upstream's comments, distill, and new-plugin integration tests depend on demo
posts intentionally absent from this site. Personal-site CI builds the real site
and audits overrides instead. Upstream demo screenshot comparison is restricted
to the upstream repository. Test sources are excluded from the generated site.

The upgrade audit reports zero blocking findings and one advisory about the
`data-toggle="popover"` marker inherited from upstream's bibliography template.
No unreviewed or stale overrides remain.
