<p align="center">
  <a href="#">

  </a>
  <p align="center">
   <img width="150" height="150" src="https://raw.githubusercontent.com/flumadev/tobuylist/65f00424510a9f3230365fd84e5c9323291b39f8/src/assets/logo.svg" alt="Logo">
  </p>
  <h1 align="center"><b>To buy list</b></h1>
  <p align="center">
  A shopping list from the future.
    <br />
    <a href="https://tobuylist.app"><strong>tobuylist.app »</strong></a>
    <br />
    <br />
    <b>Download for </b>
    macOS
    ·
    Windows
    ·
    Linux
    ·
    iOS
    ·
    watchOS
    ·
    Android
    <br />
or use online
    <i>~ Links will be added once a release is available. ~</i>
  </p>
    </p>
Tobuylist is an open source cross-platform for shareable shopping list.
<br/>
<br/>

> NOTE: To buy list is under active development, most of the listed features are still experimental and subject to
> change.

Combine your shopping lists into one database that you can organize and explore from any device.

Designed for people who love to shop. To buy list provides a free list
management experience like no other.

<p align="center">
  <img src="https://raw.githubusercontent.com/flumadev/tobuylist/master/src/assets/example.jpg" alt="App screenshot">
  <br />
  <br />
  <a href="https://www.gnu.org/licenses/agpl-3.0">
    <img src="https://img.shields.io/static/v1?label=Licence&message=AGPL%20v3&color=000" />
  </a>
  <img src="https://img.shields.io/static/v1?label=Stage&message=Alpha&color=2BB4AB" />
  <br />
</p>

# Motivation

As a computer enthusiast, I often find myself browsing through various websites looking for the latest and greatest
computer components and peripherals. However, keeping track of all the items that caught my eye proved to be a
challenging task. I would write down lists on a notepad or spreadsheet, only to lose track of them or forget to update
them later.

This frustration led me to create a solution: a shareable shopping list. By creating a website dedicated to tracking
accessories to buy, I could easily keep my lists organized and accessible from anywhere. Additionally, by
making the list shareable, I could collaborate with friends and family, allowing them to add their own suggestions and
feedback to the list.

Creating this website not only provided me with a valuable tool for tracking my purchases, but it also allowed me to
share my passion with others and build a sense of community around. Ultimately, the motivation behind
creating this website was to simplify the process of tracking what items I wanted to buy, while also fostering
a sense of collaboration and community among like-minded individuals.

# Developer guide

### Contributing

We welcome any contributions to this project, whether they be bug fixes, new features, documentation improvements, or
anything else. Here are the steps you'll need to take to contribute:

1. Check for any open issues in the repository that you want to address or improve.
2. Create a new branch to work on your changes using the command git checkout -b my-branch-name.
3. Make the necessary changes to the code.
4. Commit your changes with a clear and descriptive message.
5. Push your changes to the branch on your forked repository.

- Open a pull request (PR) to the original repository with a clear and concise description of the changes you made.
- make sure to use commitlint to make your commit messages follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) format.
- If you are working on an issue, make sure to include the issue number in the PR description.

### Documentation

All changes to the code must be accompanied by relevant documentation updates. Please make sure the documentation is
up-to-date before submitting your changes.

### Code Style
The code in this repository follows the style defined by Prettier with the following configurations:

```js
endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@/types/(.*)$",
    "^@/config/(.*)$",
    "^@/lib/(.*)$",
    "^@/components/(.*)$",
    "^@/styles/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
```

Before submitting a PR, please make sure your code adheres to these style configurations.
For this you can run `yarn format:write` in the root of the project.


### Communication
If you need help or have any questions, please open an issue in the repository.

# Architecture
The project is built with [Next.js](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/).
Using [shadcn](https://ui.shadcn.com/) components and [TailwindCSS](https://tailwindcss.com/) for utility classes.
[Prisma](https://www.prisma.io/) is used for database management, [planetscale](https://planetscale.com/) for database hosting and [next-auth](https://next-auth.js.org/) for authentication.

# Roadmap

- [ ] Create/Edit private lists
- [ ] Create/Make public lists
- [ ] Share list with others
- [ ] Share editable list with others
- [ ] Duplicate others list
- [ ] Bookmark list


