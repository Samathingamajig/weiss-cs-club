# Weiss Computer Science Club Website

This the website for the Weiss Computer Science Club, built by the students of Weiss High School using [Astro](https://astro.build) and [React](https://reactjs.org).

## 💻 Contributing

Students in the club are welcome to contribute to this project. If you are not a member of the club or a student at Weiss, you are welcome to contribute as well (such as fixing typos), but please be aware that your contributions may not be merged.

### 📝 Adding a new student page

To make a new student page, create either a new file in `./src/pages/students` with your name (e.g. `./src/pages/students/JohnDoe.astro`) or create a folder with your name and an `index.astro` file inside (e.g. `./src/pages/students/JohnDoe/index.astro`). The file should contain the following:

```astro
---
// The layout adds the header, and eventually the footer, to the page.
import Layout from "../../layouts/Layout.astro"; // add a .. for each folder you're inside
---

<Layout title="John Doe's page">
  <h1>This is John Doe's page</h1>
  <p>Yee-haw</p>
</Layout>
```

If you've made a folder, you can add new pages to it by creating new files inside the folder (e.g. `./src/pages/students/JohnDoe/interests.astro`).

Make sure any images & static files you add are in the `./public` folder.

### ⚛️ Adding a new React component

To make a new React component, create a new file in `./src/components/YOUR_NAME` with your name (e.g. `./src/components/JohnDoe/Button.jsx`). If you're comfortable using (or want to learn) TypeScript, use the `.tsx` extension instead.

An example component:

```jsx
import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

Then inside of your Astro page, import the file in the header and use the component. Since Astro cares about reducing the amount of JavaScript sent to the browser, you have to explicitly tell it that something is reactive.

This will only render the component on the server at build time and will NOT be interactive on the client:

```astro
<Counter />
```

These will render the component on the server at build time and will be interactive on the client:

```astro
<!-- Immediately-visible UI elements that need to be interactive as soon as possible. -->
<Counter client:load />

<!-- Lower-priority UI elements that don’t need to be immediately interactive. -->
<Counter client:idle />

<!-- Low-priority UI elements that are either far down the page (“below the fold”) or so
resource-intensive to load that you would prefer not to load them at all
if the user never saw the element. -->
<Counter client:visible />
```

This will render the component on the client only:

```astro
<Counter client:only />
```

### 👑 Submitting a pull request

First, [fork the repository](https://github.com/Samathingamajig/weiss-cs-club/fork). Then, clone your fork and create a new branch for your changes (`git checkout -b MY_BRANCH_NAME` where `MY_BRANCH_NAME` can be anything you want). When you're done, push your changes to your fork and submit a pull request, which should show up as on option on GitHub. If you need more info, first try searching it on Google/DuckDuckGo and if that doesn't work, ask a club member for help.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

If you don't have NodeJS and npm installed:

- Windows: [Download the installer](https://nodejs.org/en/download/)
- Mac: [Install with Homebrew](https://brew.sh/) (`brew install node`)
- Linux: As a Linux user, you should know how to do this, but if you need it [go here I guess](https://nodejs.org/en/download/package-manager/)

## 👀 Astro?

Check out the [Astro documentation](https://docs.astro.build).
