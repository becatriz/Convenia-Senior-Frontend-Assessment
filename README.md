<h1 align="center">Welcome to Barcontrol 🍺</h1>
<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000" />
  <img alt="Node version" src="https://img.shields.io/badge/node-16.17-green.svg?cacheSeconds=2592000" />
  <img alt="Social " src="https://img.shields.io/github/followers/becatriz?style=social" />
  <a href="https://codecov.io/gh/becatriz/Convenia-Senior-Frontend-Assessment" > 
 <img src="https://codecov.io/gh/becatriz/Convenia-Senior-Frontend-Assessment/branch/master/graph/badge.svg?token=T2PNN7TX7Y"/> 
 </a>
</p>

# Barcontrol

Project for a restaurant or bar to do the command control. Each item and order with their respective values are stored in memories to perform the necessary calculations and close the account.

## 🚀 Start

These instructions will allow you to get a copy of the project running on your local machine for development and testing purposes..

### 📋 Pre-requisites

Need to have installed [node](https://nodejs.org/en/) <br/>

```
^16.17 - node
```

### 🔧 Installation

It is recommended to use [yarn](https://yarnpkg.com/) to install packages, but you can use [npm](https://www.npmjs.com/)

```
yarn install

or

npm install
```

## ⚠️ CAUTION ⚠️

For a more secure execution of the system, it is important to raise the [GraphQL currency conversion API](https://gitlab.com/convenia/assessments/currency-conversion) on port `3000`. But has configuration mock server with mirage API, that's why sisytem won't break

## ⚙️ Running the tests

For the automated unit tests run

```
yarn test:unit

or

npm run test:unit
```

### 🔩 Analyze the unit tests

Unit tests check the consistency of base components of the system (UI components). They also test useful functions that are shared at various points in the application

```js
import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import AccordionUI from "../components-ui/AccordionUI.vue";

describe("AccordionUI", () => {
  it("Should renders properly for title", () => {
    const wrapper = mount(AccordionUI, { props: { title: "Bebidas" } });
    expect(wrapper.text()).toContain("Bebidas");
  });

  it("Should renders properly for title", () => {
    const wrapper = mount(AccordionUI, { props: { isOpen: true } });
    expect(wrapper.find("#summary-details").exists()).toBe(true);
  });

  it("Should renders slot List", () => {
    const wrapper = mount(AccordionUI, {
      props: {
        isOpen: true,
      },
      slots: {
        list: "<div>List</div>",
      },
    });
    expect(wrapper.html()).toContain("<div>List</div>");
  });
});
```

```js
import { describe, it, expect } from "vitest";
import { getFormattedHour, getFormattedDateWithHour } from "../formatDate";

describe("Format Date", () => {
  it("Should formatted Hour", () => {
    expect(getFormattedHour(new Date("2023-01-24T01:12:19.836Z"))).equals(
      "21:12",
    );
  });

  it("Should formatted Date with hour", () => {
    expect(
      getFormattedDateWithHour(new Date("2023-01-24T01:12:19.836Z")),
    ).equals("23/01/2023 21:12");
  });
});
```

## 📚 Running Storybook

Storybooks are for recording the behavior of UI components. Important documentation for compressing components.<br/>

For the storybook run

```
yarn storybook

or

npm run storybook
```

## 📦 Project run

Project will run on port `http://locahost:8080`. To run the project locally

```
yarn dev

or

npm run dev
```

## 🛠️ Technologies

- [Vue 3](https://vuejs.org/) - The Progressive JavaScript Framework
- [Vite](https://vitejs.dev/) - Build Project
- [TypeScript](https://www.typescriptlang.org/) - Code Base
- [Axios](https://axios-http.com/ptbr/docs/intro) - Request API Rest
- [MirageJS](https://miragejs.com/) - Mocke server API
- [Appolo Client](https://apollo.vuejs.org/guide/) - Request API GrapqhQL
- [Codegen](https://the-guild.dev/graphql/codegen) - Generate code from GraphQL schema
- [Pinia](https://pinia.vuejs.org/) - Store
- [SASS](https://sass-lang.com/) - Style SCSS
- [Storybook](https://storybook.js.org/) - DOCS components UI
- [Vue Test Utils](https://v1.test-utils.vuejs.org/) - Components Test Unit
- [ESLint](https://eslint.org/) - Code analyzer
- [Prettier](https://prettier.io/) - Prettier analyzer
- [Husky](https://www.npmjs.com/package/husky/) - Conventional commits prepare

## 📌 Versions

Used in the [Semantic Versioning](https://semver.org/) project and [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

## ✒️ Authors

- **Dev** - _Frontend Developer_ - [Rebeca Lopes](https://github.com/becatriz)
