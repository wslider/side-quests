# side-quests

A side project exploring the benefits of **Side Quests**.  
My goal is to gain valuable experience points while learning the basics of Vue... on the side.

## Languages and Frameworks

- Vue 3 (Composition API)
- JavaScript
- HTML & CSS

## Project Structure

```text
side-quests/
├── sideQuests/                  # Main Vite + Vue project folder
│   ├── public/                  # Static assets (e.g. favicon.ico, images)
│   ├── src/                     # Source code
│   │   ├── components/          # Reusable layout components
│   │   │   ├── AppHeader.vue
│   │   │   ├── AppNav.vue
│   │   │   ├── AppMain.vue
│   │   │   ├── AppAside.vue
│   │   │   └── AppFooter.vue
│   │   ├── App.vue              # Root component (layout shell)
│   │   └── main.js              # Entry point (mounts App.vue)
│   ├── index.html               # App entry point (with <div id="app">)
│   ├── vite.config.js           # Vite configuration
│   ├── package.json             # Dependencies & scripts
│   ├── eslint.config.js         # Linting rules
│   ├── .gitignore
│   ├── .prettierrc.json
│   ├── .editorconfig
│   ├── .gitattributes
│   ├── jsconfig.json
│   └── README.md
└── README.md                    # Repository-level readme