This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the dependencies `npm install` or `yarn install` and then run the development server:

```bash
npm run dev
# or
yarn dev
```

## Basic requirements

- Your preferred IDE / Code Editor
- NodeJS > 12
- Your preferred browser (tested on Chrome and Firefox)

## Folder structure

The components folder was designed usign Atomic design (atoms, molecules, organisms, templates). I also added some other folder that didn't fall under those categories: HOC (high order components, hooks and context). All the components under atoms, molecules, organisms and templates were designed in a way to not handle context-state or API logic in there (following Atomic Design principles and to make them flexible).

I created some custom hooks to handle API and state calls in a transparent way.

Other topic to consider is styling which was done in the vast majority using `styled-components` (less files and more inline with the new paradigm).

I used the NextJS server which has it's own router added so the pages are created under the special folder `pages` that has it's own structure (such as for param pages: `pages/person/[email].tsx`, not found page, etc.)

In order to maintain state I created two contexts:

- People context. In charge of maintaing the poeple information and editing it

The service folder contains the APIClient (Singleton like component) that contains every aspect and dependency for making API requests.

## Testing

In order to run the tests just run

```
yarn test
```

Testing is done using `react-testing-library` which is the current most used one as it approaches frontend testing the right way: **black box testing**. The coverage given to the project is low (it would need to be improved).

## Linting and formatting

The linting and formatting is done using eslint and prettier. They were configured following basic guidelines given by other companies (such as Airbnb).
