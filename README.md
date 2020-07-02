<!--  -->

<h1 align="center">Redux dashboard</h1>

### React + Redux codebase containing  (CRUD, RABC, Open Api V3, Amcharts etc) that adheres to the -- Link to be Updated --- spec and API.

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
* `npm run prism` to start serving the mock data for our project()

React project would be running on port ```3000``` and our Prism would be working on ```4010``` port so make sure respective ports are free of any other process.

 ## Prism Mock Server 

Prism is an  HTTP mock server that can mimic your API’s behavior as if you already built it. In this project Mock HTTP servers are generated from your OpenAPI v3 documents. I have  used Yaml configuration files to serve prism. You can check the files in ` `PrismFiles` ` folder from Project Dir.

``npm run prism`` 

Helps to start the prism server. You can check the responce from the execution script of the prism using [Postman](https://www.postman.com/) or any of your favourite  brower or API testing app.

<!-- All the files served to prism are written in yaml files. So please edit if you are awareo -->

### Changing roles for administrator previlages.

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

 
