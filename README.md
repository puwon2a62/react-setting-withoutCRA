# React setting withdout Create-React-App

CRA없이 react 초기 셋팅을 진행한 프로젝트입니다.

## 초기 설정

`npm init`
> `npm init -y` 로 실행하면 특별한 셋팅 없이 진행

`npm install typescript`

`npm install react react-dom`

`npm install parcel-bundler`

`npm install @types/react @types/react-dom --save-dev`

### 폴더 구조

```sh
├─ src
│  │  index.html
│  │  index.tsx
├─ README.md
├─ .gitignore
├─ tsconfig.json
├─ package.json
```
> `touch README.md`

> `touch .gitignote`

> `touch tsconfig.json`

> `mkdir src`

> `cd srd`

> `touch index.tsx`

> `touch index.html`


### .gitignore
```
/.cache
/node_modules
/dist
```

### index.tsx
```js
import React from 'react'
import { render } from 'react-dom'

render(<div>Hello ReactJS</div>, document.getElementById(
    "root"
) as HTMLElement)
```

### index.html
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>Parcel Example</title>
</head>
<body>
  <div id="root"></div>
  <script src="./index.tsx"></script>
</body>
</html>
```

### tsconfig.json
```json
{
    "compilerOptions": {
        "esModuleInterop": true,
        "jsx": "react",
        "module": "CommonJS",
        "strict": true,
        "target": "ES5",
        "outDir": "./dist"
    }
}
```

### package.json
```json
...
"script" : {
  "start": "parcel ./src/index.html",
  "build": "parcel build ./src/index.html"
}
...
```

`npm run start` 후에 http://localhost:1234 접속

## eslint 설정

`npx eslint --init`
> eslint 초기 설정

- How would you like to use ESLint?
  - **To check syntax and find problems**
- What type of modules does your project use?
  - **JavaScript modules (import/export)**
- Which framework does your project use?
  - **None of these**
- Does your project use TypeScript? (y/N)
  - **y**
- Where does your code run? (Press space to select, a to toggle all, i to invert selection)
  - **Node**
- What format do you want your config file to be in? (Use arrow keys)
  - **JSON**
- The config that you've selected requires the following dependencies:
  - **@typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest**
- Would you like to install them now with npm? (Y/n)
  - **Y**

`.eslintrc.json`
```json
{
  ...
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "parserOptions": {
    "project": "./tsconfig.json",
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "ignorePatterns": ["dist/", "node_modules/"]
  ...
}
```




```ts
const a:String = "aaa";
```
eslint 에러 발생 확인

## Prettier, StandardJS 설정

`npm install --save-dev eslint-config-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node`
> standardJS 설치

`npm install --save-dev --save-exact prettier`

`npm install --save-dev eslint-plugin-prettier eslint-config-prettier`
> eslint와 prettier의 옵션충돌이 나지않게 설치


### VSCode 설정
```json
{
    "workbench.colorTheme": "Default Dark+",
    "security.workspace.trust.untrustedFiles": "open",
    "git.ignoreMissingGitWarning": true,
    "explorer.confirmDelete": false,
    "javascript.format.enable": false,
    "editor.formatOnSave": true,
    "[javascript]": {
        "editor.formatOnSave": false
      },
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.alwaysShowStatus": true,
    "files.autoSave": "onFocusChange"
}
```

### .eslintrc.js 설정

기존의 `eslintrc.json`에서 `eslintrc.js`로 변경
```js
module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error'
  }
}
```

## styled-components, react-router, component, page 구조 설정

`npm install styled-components @types/styled-components --save-dev`

`npm install styled-reset --save-dev`

`npm install react-router-dom @types/react-router-dom --save-dev`

`npm install react-redux @types/react-redux --save-dev`

### 절대경로 설정

`tsconfig.json`

```json
{
    "compilerOptions": {
        "esModuleInterop": true,
        "jsx": "react",
        "module": "CommonJS",
        "strict": true,
        "target": "ES5",
        "baseUrl": ".",
        "paths": {
            "~*": [
                "src/*"
            ]
        }
    },
    "include": [
        "src"
    ],
    "exclude": [
        "node_modules"
    ]
}
```

### .eslintrc.js # import React from 'react' 에러 수정
```js
...
  rules: {
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error']
  }
...
```

### 폴더 구조
```sh
├─ src
├─ ├─ Application
├─ ├─ ├─ Styles
│  │  │  │  Style.tsx
│  │  │  │  theme.ts
│  │  │  │  themed-components.ts
│  │  │ Application.tsx
│  │  │ index.tsx
├─ ├─ Component
├─ ├─ ├─ TempComponent
│  │  │  │  TempComponent.tsx
│  │  │  │  index.tsx
├─ ├─ Pages
├─ ├─ ├─ MainPage
│  │  │  │  MainPage.tsx
│  │  │  │  index.tsx
├─ ├─ Router
│  │  │ Router.tsx
│  │  │ index.tsx
│  │  index.html
│  │  index.tsx
├─ README.md
├─ .gitignore
├─ tsconfig.json
├─ .eslintrc.js
├─ package.json
```
> 소스코드 github 참고
