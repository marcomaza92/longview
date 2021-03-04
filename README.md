# Longview - Visual control of the future

## Summary

Longview is a video player that allows you to consume a list of videos from an API.

It comes with all the standard media controls and some advanced controls that let you tweak the brightness and contrast.

## Install

Clone this repository and install the dependencies:

```
npm i
```

Start the dev server:

```
npm start
```

### Available commands

- `npm run lint`: runs ESLint and Stylelint in the entire code base
- `npm run format`: runs Prettier in the entire code base

## Tech Stack

- create-react-app
- React Router
- React Query
- React Context API
- React Hooks
- Typescript
- Jest
- SCSS Modules
- Material UI
- ESLint
- Stylelint
- Husky
- Prettier

## Functionalities

### Main

- Communicate components with any state manager
- Create a video player with `play/pause` and `volume` control
- Use and API endpoint to fetch the data

### Enhancements

- Add `next`, `previous`, `brigthness` and `contrast` controls
- Add `currentVideo` state to reflect in the UI
- Add `theme` and its toggler
- Add `Typescript` for safe typing and data handling
- Add `Atomic Design` convention to the code base
- Implement `React Query` to fetch with Context API
- Implement `React Router` so we can add pages in the future
- Implement `React Hooks` for better adaptability with functional components
- Implement `Sass` and `SCSS Modules` for better styling
- Implement native `CSS Grid` and `CSS Flexbox`
- Add `Material UI` to speed up component creation
- Add `ESLint` and `Stylelint` for better and concise code styling
- Add `Prettier` for faster DX
- Implement `Husky` and Git Hooks for safer commits
- Implement `Jest` for better coverage

## To-Do

- [ ] Add responsiveness to all the application
- [ ] Add better coverage to all the application
- [ ] Add state management for multiple `categories`