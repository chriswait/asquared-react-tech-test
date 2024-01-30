# react-tech-test

Hey, ASquared! 👋 Thanks for the opportunity

I've written up some quick notes here on what I managed to get through in the suggested time limit.

Instead of dreaming up new features to add, I've mostly worked as though this codebase was about to undergo more development by a larger team. I've tried to set up good practices for automated testing, type checking, linting, formatting, data fetching, accessibility, responsive design etc, and provide strong examples for how further screens/features could be added.

I think if I had more time, I'd have adopted some kind of UI library to handle design tokens and give us components to customise. Currently, I'm using CSS for the basics + media queries, and JSS for per-component style.

## What I've Worked On

- Client-side Routing via react-router
  - Obviously overkill for a 2-page app...
  - but lets us do things like bookmark a detail screen for a beer without crashing the app
- Fuzzy searching
  - we use Fuse.js to support fuzzy searching over beer names & descriptions...
  - but very easy to extend this so we can fuzzy search over e.g food pairings
- Solid data management via react-query (caching, automatic retries)
- Visualising Loading states with a basic animation
- Error messages for API errors, with error user-friendly messages and a reload button
- Typescript for compile-time type error checking
  - I worked out a basic type for Beer based on the json responses
- Jest testing for Components, with code coverage
  - Add the "Coverage Gutters" VSCode extension, run `npm run test --coverage`
- A basic design
  - light/dark mode based on the user's OS preference
  - responsive layout (supports mobile devices down to viewport width of about 375)

## Code Quality

I've tried to follow good coding practice throughout:

- I'm checking for type errors at compile-time via typescript
- Everything is linted and formatted consistently. Works out of the box for VSCode developers.
- Variable names are descriptive, typically avoiding a bunch of magic numbers (except in JSS)
- We extract components wherever we're reusing UI across screens (e.g Loading Indicators, Error Messages)
- Complex functionality is commented in detail (e.g TruncatedLine's css rules)
- There is support for automated testing and a basic example
- Errors are handled and explained (failed API requests, empty search results)
- Project dependencies were checked for vulnerabilities (via `npm audit`)
