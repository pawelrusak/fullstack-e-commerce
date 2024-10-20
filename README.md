<h1 align="center">e-shop. - The e-commerce platform</h1>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./docs/assets/logo-light.svg" width="286" height="74">
    <img alt="e-shop" src="./docs/assets/logo-dark.svg" width="286" height="74">
  </picture>
  <br />
  <em>E-shop is a e-commerce platform to sell electronics goods online
  <br /> using TypeScript, MERN/MENN stack and other leading technologies.</em>
  <br />  
</p>

<p align="center">
  <img src="https://img.shields.io/github/last-commit/pawelrusak/fullstack-e-commerce?style=flat-square" alt="GitHub last commit" />&nbsp;
  <img src="https://img.shields.io/github/commit-activity/w/pawelrusak/fullstack-e-commerce?style=flat-square" alt="GitHub commit activity" />&nbsp;
  <img src="https://img.shields.io/github/license/pawelrusak/fullstack-e-commerce?style=flat-square" alt="GitHub License" />&nbsp;
  <br />
</p>

> [!WARNING]
> This project is currently being refactored. The main goals include:
>
> - [ ] Improving the UI library with a complete theme so that all colors and related elements come from one source.
> - [ ] Adding full end-to-end (e2e) tests (right now, only some integration tests are available).
> - [ ] Using a layered or hexagonal architecture for both the backend and frontend.
> - [ ] Refactoring the frontend to organize components better, using route groups for domain separation and splitting components into presentation and container types.
> - [ ] Changing the directory structure for libraries, like moving `libs/shared/types` to `libs/core/types` and `libs/shared/ui` to `libs/frontend/shared/ui`.
> - [ ] Applying SOLID principles where needed, such as using the Open/Closed Principle in [error-handler.ts](./apps/backend/src/middlewares/error-handler.ts) and the Interface Segregation Principle in [product.ts](./libs/shared/types/src/lib/product.ts).
> - [ ] Reorganizing the translation structure in the `i18n` library to match the "route groups" used in the `frontend` app.
>
> ...and more minor changes.

> [!IMPORTANT]
> The project is at an early stage of development so many functions have not been added or are not work quite right yet.
> See the [Known issues](#known-issues) section for more information.
> You can view the UI components using Storybook, to do this go to the [Storybook](#storybook) section.

## Table of Contents

- [About The Project](#about-the-project)
  - [Tech stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Run Locally](#run-locally)
  - [Add sample data](#add-sample-data)
  - [Storybook](#storybook)
- [Known issues](#known-issues)
- [License](#license)

## About The Project

<p align="center">
  <img src="./docs/assets/screenshot/homepage-screenshot.png" alt="Project homepage with navbar, hero, values section and featured product section" />
  <br />
</p>

This project is a full-stack e-commerce platform designed to sell electronic goods online. It follows the <abbr title="Minimum Viable Product">MVP</abbr> development strategy, which means that initially, only the most relevant features are implemented to make the platform usable. Additional features will be added gradually in the future. The design is based on a paid [Figma project](https://www.creativefabrica.com/pl/product/e-shop-e-commerce-website-design-ui/) and adheres to a Pixel Perfect approach and incorporates <abbr title="Responsive Web Design">RWD</abbr> to ensure optimal work across all devices. As mentioned earlier, the use of an MVP approach is the primary reason why some elements from the Figma project are not currently included in the project. These elements will be implemented in future updates.

### Tech stack

> [!NOTE]
> Next.js includes its own server implementation that allows interaction with databases and more. However, I have chosen to use Express alongside Next.js because, in my opinion, Express is more scalable and powerful.

This project is developed using the <abbr title="MongoDB, Express.js, Next.js, and Node.js JavaScript software stack">MENN</abbr> stack. A common variant, the <abbr title="MongoDB, Express.js, React.js, and Node.js JavaScript software stack">MERN</abbr> stack, replaces React with Next.jsto enhance SEO optimization and accelerate project development. Key technologies employed in this project include:

- [Next.js](https://nextjs.org/) (a [React.js](https://reactjs.org/) framework)
- [TypeScript](https://www.typescriptlang.org/),
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/) (a ODM for [MongoDB](https://www.mongodb.com/))
- [Node.js](https://nodejs.org/)
- [Nx](https://nx.dev/)

In addition, the project uses technologies like (or will be):

- [Zod](https://zod.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [Styled Components](https://styled-components.com/)
- [Storybook](https://storybook.js.org/)
- [Base UI](https://mui.com/base-ui/) or [React Aria](https://react-spectrum.adobe.com/react-aria/) _(planned for future use)_
- [Radix UI](https://www.radix-ui.com/)
- [Downshift](https://www.downshift-js.com/) _(planned for future use)_
- [Stripe](https://stripe.com/) or [Paypal](https://www.paypal.com/) _(planned for future use)_
- [Jest](https://jestjs.io/)
- [MobX](https://mobx.js.org/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Cypress](https://www.cypress.io/)

## Getting Started

### Prerequisites

Before starting work on the project, ensure the following requirements are installed on your computer:

- [Node.js](https://nodejs.org/): Version 18 or higher
- [NPM](https://www.npmjs.com/): Version 18 or higher

You will also need to install [Git](https://github.com/git-guides/install-git) to clone the repository and you will need [MongoDB Connection Strings](https://www.mongodb.com/resources/products/fundamentals/mongodb-connection-string).

### Installation

Clone the project:

```bash
git clone https://github.com/pawelrusak/fullstack-e-commerce.git
```

Go to the project directory:

```bash
cd fullstack-e-commerce
```

Install dependencies:

```bash
npm ci
```

### Run Locally

After [installation](#installation), create a `./apps/backend/.env` file:

```bash
cp ./apps/backend/.env.example ./apps/backend/.env
```

Open the `./apps/backend/.env` file and add your [MongoDB Connection Strings](https://www.mongodb.com/resources/products/fundamentals/mongodb-connection-string) to the `DATABASE_URI` variable:

```bash
DATABASE_URI="your-mangodb-connection-string"
```

> [!TIP]
> You can add sample data to your app using _seeder_. Read more about it in the "[Add sample data](#add-sample-data)" section.

Start the server:

```bash
npm start
```

### Add sample data

To populate your application with sample data, use the provided seeder tool.

After [installation](#installation), create a `./tools/seed/.env` file:

```bash
cp ./tools/seed/.env.example ./tools/seed/.env
```

Open the `./tools/seed/.env` file and add your [MongoDB Connection Strings](https://www.mongodb.com/resources/products/fundamentals/mongodb-connection-string) to the `DATABASE_URI` variable:

```bash
DATABASE_URI="your-mangodb-connection-string"
```

Add sample data to your database:

```bash
npm run seed
```

### Storybook

After [installation](#installation), start the component explorer:

```bash
npx nx storybook ui
```

## Known issues

Below is a list of the most important known issues from a user and developer perspective:

- **Search Functionality**: Not yet implemented. [Downshift library](https://www.downshift-js.com/) or [Base UI autocomplete](https://mui.com/base-ui/react-autocomplete/) library will probably be used.
- **Navigation Hamburger Menu**: Not yet implemented.
- **SPA Routing**: Does not work as expected. Currently using JSX [Anchor Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) because the [Next.js Link component](https://nextjs.org/docs/pages/api-reference/components/link) throws an error when used with Styled-components. This issue is probably related to the NX UI library and will be fixed in future updates.
- **Storybook raw SVG Import error**: Storybook throws an error with [NX raw SVG imports](https://nx.dev/recipes/react/adding-assets-react#adding-svgs). The Storybook webpack configuration probably needs adjustment to handle SVG files properly. I currently use SVG-based components.
- **Asset Sources**: Missing the "[single source of truth](https://en.wikipedia.org/wiki/Single_source_of_truth)" for project assets.
- **Responsive Styles**: Styles for small devices need improvement (It work, but I am not satisfied with the final result).
- **Backend tests fails**: Need to remember to start the server (run: `npx nx serve backend`) before running the tests. Express server configuration must be exported and added to the tests setup - it will be fixed in future updates.
- **Missing link to cart**: The cart icon in the navbar is not yet linked to the cart page. You can visit cart page by typing `/cart` in the URL bar or use button "Buy now" on the product page.

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.
