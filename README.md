# Agri Nexus v1.4

This project introduces the cream/olive/gold identity for the Agri Nexus reference interface, with a cleaner information hierarchy and a more reviewable v4 data structure.

## Highlights
- Original palette restored: cream, paper, olive, gold and section colors.
- At-a-glance summary cards on profile pages.
- Empty fields are collapsed behind a compact unavailable-fields summary.
- Study mode scaffolding for quick review cards and personal notes.
- Smarter search and A–Z index for active ingredients and pest navigation.
- Professional print/PDF output styling.
- Review and change tracking files included.

## Files
- `index.html` — main UI and app logic
- `db.js` — v1.4 reference dataset scaffold
- `CHANGELOG.md` — release notes
- `REVIEW.md` — review and evidence flags

## Version note
The data model is intentionally explicit about what is verified versus needs review. This is especially important for:
- missing pest biology and scouting fields
- fungal signs and disease-cycle details
- herbicide local names that should be confirmed by a specialist
- active ingredient family and unclassified group entries

The app keeps these entries as `null`/empty placeholders and marks them for review instead of pretending they are confirmed.
