# The 116th Initiative

This is the repository for the 116th initiative at Barnard College. If you're reading this and your name isn't Jonathan, congratulations! Somehow this project both succeded and was able to add multiple developers.
This READEME file is to describe the structure of the codebase and how to add future changes

## Merging changes

Aside from the intial creation of the repo, all changes should start on a new branch, i.e. not main. In order to merge you'll need a code review from a peer (You do have frieeds right? right???). 
When creating new branches, use the convention "initials/branch-description". 
e.g.
```JN/change-donate-button```
please try to keep the description to four words or less.

## Writing Tests

TBD

## Deployment

At the time of writing, this site is hosted using github pages (this could change). A thorough description of how pushing to main updates the site can be found here https://github.com/sitek94/vite-deploy-demo.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
