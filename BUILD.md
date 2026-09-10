# Site build

The site is published as static HTML. Run the shared build step after creating
or generating pages:

```sh
python3 build.py
```

The build step recursively covers published HTML under the repository,
including root, `countries/`, `glossary/`, and `industries/` pages. It is
idempotent and ensures that every page has exactly one Buffsend form-tracking
script in its `<head>`.

To validate the output without changing files:

```sh
python3 build.py --check
```
