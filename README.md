# Caseonizate

Caseonizate is an AngularJS app that loads users, albums and photos from an [API](https://jsonplaceholder.typicode.com/) and display those contents on screen.

It's based on AngularJS and divided in components with modules, controllers and services.

## Deployment :hammer:


Install dependencies
```sh
$ npm install
```

Launch server
```sh
$ npm run dev
```

## Features

- Show employees list.
  - Employees can be filtered by name
- On click an employee, show his albums.
  - Albums can be filtered by title
- On click an album, show its photos.

## Built with :rocket:

- [AngularJS](https://angularjs.org/) - Front-end framework, v1.5.11 and ES6
- [AngularJS UI Router](https://ui-router.github.io/ng1/) - Routes module to load different views in app
- [Materialize](https://materializecss.com) + [Sass](https://sass-lang.com)- Just style
- [Webpack](https://webpack.js.org) - Bundle app
