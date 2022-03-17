# Fixed Kuby Activities

All of the old Adobe Flash things are fixed with ruffle.rs, everything else just redirects to the old website.

## Building

### Requirements

- NodeJS 14+
- Yarn
- wget
- unzip

To download all of the required resources from the Wiley website, run

```bash
yarn build:scrape
```

To download and setup Ruffle, run

```bash
yarn build:ruffle
```

Otherwise, if you want to complete both of these steps at the same time just run

```bash
yarn build
```

## Support

Please leave bugs in the issues tab, or email me at danny@zolp.dev
