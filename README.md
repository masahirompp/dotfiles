# README

## Get Start

```sh
git clone https://github.com/masahirompp/dotfiles.git PROJECT_NAME
cd PROJECT_NAME

rm -Rf .git
git init

curl https://www.toptal.com/developers/gitignore/api/node,macos,visualstudiocode > .gitignore

npm init -y
yarn add @types/node dotenv ts-node typescript
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

touch .env

code .
```

## Tips

```sh
node -r dotenv/config -r ts-node/register ./src/script.ts
```
