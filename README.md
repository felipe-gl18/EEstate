# React + TypeScript + Vite

## How to run it

*npm run dev*

## Screenshots
<img width="1920" height="1080" alt="Captura de Tela (95)" src="https://github.com/user-attachments/assets/7d18e59f-cfde-489a-8c44-9408ce15bc95" />
<img width="1920" height="1080" alt="Captura de Tela (96)" src="https://github.com/user-attachments/assets/87655f9c-3288-4b87-b97c-7c137ae55f7c" />
<img width="1920" height="1080" alt="Captura de Tela (97)" src="https://github.com/user-attachments/assets/bb4fe3fc-3ab7-4fef-bff7-7e95d0c610d7" />
<img width="1920" height="1080" alt="Captura de Tela (98)" src="https://github.com/user-attachments/assets/f6170d2f-331c-4746-9090-e4fb06195231" />
<img width="1920" height="1080" alt="Captura de Tela (99)" src="https://github.com/user-attachments/assets/f4c12abc-feb5-4063-8357-8350745e2a5d" />
<img width="1920" height="1080" alt="Captura de Tela (100)" src="https://github.com/user-attachments/assets/f288babf-9b99-48b2-b905-e6c508cdb3c5" />









## This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
