Different versions of react and react-router mounting on different DOM nodes, along with properly long-term cached production code

### install
```bash
yarn
```
### dev
```bash
npm run dev
```
### build for production
```bash
npm run build
```
### clean out all node_modules
```bash
npm run clean
```
### notes
```json
"postinstall": "find ./packages/* -name package.json -maxdepth 2 -execdir yarn \\;",
"clean": "find . -name package.json -maxdepth 3 -execdir rm -fr node_modules npm-debug.log yarn.lock \\;",
```

### if you want to checkout reason
https://github.com/reasonvienna/dev-setup
