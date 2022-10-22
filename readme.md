# Node Server with Express, and routes

Create app:

```cmd
npm init -y
```

Add module express

```cmd
npm i express
```

Create index.js

In dev, add nodemon module:

```cmd
npm i nodemon -D
```

For use, in package.json file, add "dev":"nodemon server" in

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev":"nodemon index"
  },
```

Run with **npm run dev**
```cmd
npm run dev
```

Add routes, create folder **routes**

Add route in index.js

Add repository, create folder **repository**

Create repsitory dummy demo-repository

Create repository api client using https://swapi.dev/api/

Add module axios

```cmd
npm i axios
```

Add route, add repository using axios and add route in index.js

Add folder util and add index.js file


