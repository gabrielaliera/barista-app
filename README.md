# On My Grind Exemplar Lab

## Overview

On My Grind is a quiz game for guessing the recipes of popular and unknown Starbucks drinks, built using React, Vite, HTML, JavaScript, and CSS.

### Gameplay

The game will generate a new drink order for you and ask you to compose it. You will have to memorize the drink recipes over time, selecting the correct option from four different categories: temperature, syrup flavor, milk type, and blended?. For example, if I receive a Hazelnut Oatmilk Latte, then my response should be hot, hazelnut, oat, no.

## Project Demo

🌐 [See the project deployed here!](https://quiet-macaron-ca013a.netlify.app/)

![demo for lab in gif form](readme_demo.gif)

## Setup

### Dependencies

* [Vite](https://www.npmjs.com/package/vite)
* [Vite React Plugin](https://www.npmjs.com/package/@vitejs/plugin-react)
* [React](https://www.npmjs.com/package/react)
* [React-DOM](https://www.npmjs.com/package/react-dom)

---

### Install Dependencies

Before installing dependiencies, you will need `node` and `npm` installed globally on your machine by installing [NodeJS](https://nodejs.org/en/download/) onto your machine.

To install the dependencies, run:

```sh
npm install
```

### Run On My Grind

Note: In the 'required features only' version of this lab, the choices for each drink will be radio buttons, however the current state of this repo includes the stretch features, where the input from the user is taken in text boxes where they type in the choice they want to guess. If you would like to use only the radio buttons for a demo, make the necessary changes in Components/recipeChoices.jsx, there are comments to tell you what you should comment and uncomment for the required and stretch features. (Tip: the CMD+/ on Mac or CTRL+/ on Windows is a great shortcut to mass comment or uncomment out code).

In the repo directory, run the following in your terminal:

```sh
npm run dev

```

Visit the web application in the browser

```console
http://localhost:5173/
```
<br/>

---

*Last Updated: March 2023*