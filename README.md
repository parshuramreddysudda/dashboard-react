<!--  -->

<h1 align="center">Redux dashboard</h1>

### React + Redux codebase containing  (CRUD, RABC, Open Api V3, Amcharts etc) that 🌐 Hosted at: [https://dashboard-react-dun.vercel.app/].

<div align="center">
    <img src="React-Dashboard.gif" alt="Dashboard Gif File" width="100%">
</div>


<div align="center">

This is React project is based on [CRUD Model](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)  built with Redux, Prism , 
Material Design, amcharts and is equipped with RBAC.
</div>

## Prerequisites

All the packages are included in ```package.json``` file. So you can run the project with out any other dependencies.

## Getting Started

You can view a live demo over at   `` `Link Here` ``

To get the frontend running locally:

* Clone this repo
* `npm install` to install all req'd dependencies
* `npm start` to start the local server (this project uses npx create-react-app my-app)
* `npm run prism` to start serving the mock data for our project

React project would be running on port ```3000``` and our Prism would be working on ```4010``` port so make sure respective ports are free of any other process.

 ## Technological stack
 1. Prism Mock Server.
 2. React+Redux.
 3. SCSS, HTML, CSS, ES6.
 4. Material UI
 5. Amcharts
 6. Jest and Enzyme(Unit Testing,Component Testing, Contract testing)
 7. RBAC(Role Based Access Control)
  
 Prism Mock Server 
 =============

Prism is an  HTTP mock server that can mimic your API’s behavior as if you already built it. In this project Mock HTTP servers are generated from your OpenAPI v3 documents. I have  used Yaml configuration files to serve prism. You can check the files in  PrismFiles folder from Project Dir.

``npm run prism`` 

Helps to start the prism server. You can check the response from the execution script of the prism using [Postman](https://www.postman.com/) or any of your favorite  browner or API testing app.

<!-- All the files served to prism are written in yaml files. So please edit if you are aware about yaml (Only)-->

### Changing roles for administrator privileges.

Navigate to role.yaml file which is located at [Here](https://github.com/parshuramreddysudda/Redux-Dashboard/blob/master/PrismApi/ApiFiles/role.yaml) and change it to any of the below clients with the permissions provided.

* Client __READ UPDATE__
* Administrator __CREATE READ UPDATE DELETE__ 
* Executive __READ only for Dashboard and Overview Pages__
* READONLY __Only READ Permissions__

### For Detailed  Role operations take a look at below table.


| Permissions   | Dashboard | Overview | CRUD Pages             |
|---------------|-----------|----------|------------------------|
| Administrator | All       | All      | All                    | 
| Client          | Read      | Read     | Read & Update          | 
| Executive          | Read      | Read     | Read & Update & Create |  
| READONLY      | Read      | Read     | Read                   |

<br>


React + Redux
=============
React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library for building user interfaces or UI components. we are using React 16.13.1 in this project. 

### Getting started and Creating an App in React

**You’ll need to have Node 8.16.0 or Node 10.16.0 or later version on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

### npx

```sh
npx create-react-app my-app
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is a package runner tool that comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

### npm

```sh
npm init react-app my-app
```

_`npm init <initializer>` is available in npm 6+_

### Yarn

```sh
yarn create react-app my-app
you can create React project using below commands and follow up
```
Redux
=============
Redux is a predictable state container for JavaScript apps.
(Not to be confused with a WordPress framework – [Redux Framework](https://reduxframework.com/))

It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as [live code editing combined with a time traveling debugger](https://github.com/reduxjs/redux-devtools).


### Installation

```
npm install @reduxjs/toolkit react-redux
```

For more details, please see [the Installation docs page](https://redux.js.org/introduction/installation).


Checkout the basic usage or example  [here](https://redux.js.org/basics/example).

Material UI
=============
In a nutshell, Material-UI is an open-source project that features React components that implement Google's Material Design. It helps for faster and easier web development by making us of already builded React Components.

### Installation

Material-UI is available as an [npm package](https://www.npmjs.com/package/@material-ui/core).

 Amcharts 
=============

 Amcharts are the JavaScript / HTML5 charts and maps data-viz libraries for web sites and applications. They are the most advanced javascript  dataviz.

 ### Installation
amCharts 4 is available through a number of channels. Below we'll outline a few.

<br>
You can use our official npm package @amcharts/amcharts4 to grab V4 and install into your application. It will even grab all the required dependencies.

``` 
npm install @amcharts/amcharts4
```
Yarn
For those of you using Yarn, you can use its add command to install our official npm package:

```
yarn add @amcharts/amcharts4
```
For more information check out the demos by Amcharts [Here](https://www.amcharts.com/demos/)

 Jest 
=============

Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

## Installation and  Getting Started

<!-- copied from Getting Started docs, links updated to point to Jest website -->

Install Jest using [`yarn`](https://yarnpkg.com/en/package/jest):

```bash
yarn add --dev jest
```

Or [`npm`](https://www.npmjs.com/):

```bash
npm install --save-dev jest
```

Enzyme 
=============

Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output.
You can also manipulate, traverse, and in some ways simulate runtime given the output.
### Installation

RBAC
====
RBAC Stands for Role Based Access control. Its a type of authorization by which we can restrict the user to visit the pages which require authorization.

Look out the table above for the detailed Permissions for each user.
