# LoopBack API Project

This project is a simple REST API created using LoopBack, a popular Node.js framework for building APIs quickly and efficiently. Follow the steps below to install and set up the API on your local machine.

## Prerequisites
Node.js: Make sure Node.js (version 18 or later) is installed on your machine.
npm: The Node.js package manager is required to install dependencies.

## Installation
Install LoopBack CLI: Install the LoopBack command-line interface (CLI) globally to create and manage LoopBack projects.

```sh
npm install -g @loopback/cli
```

## Create a New LoopBack Application: Start by generating a new LoopBack application.

```sh
lb4 app
```
## Generate the Model:

```sh
lb4 model
```

Enter the following properties when prompted:

Model Name: Product
Properties:
name (type: string)
price (type: number)
description (type: string)

## Generate the REST API Endpoints

## Generate the Datasource

```sh
lb4 datasource
```

## Generate the Repository: Repositories connect models to data sources, allowing CRUD operations.

```sh
lb4 repository
```

## Select the Product model.
Generate the Controller: Controllers expose the repository methods via RESTful API endpoints.

```sh
lb4 controller
```

Select the Product model and choose the REST Controller template.
This automatically creates endpoints like:
GET /products – Retrieve all products
POST /products – Create a new product
GET /products/{id} – Retrieve a product by ID
PUT /products/{id} – Update a product by ID
DELETE /products/{id} – Delete a product by ID
Start the API Server
Run the Server:

```sh
npm start
```

The API will now be running at http://localhost:3000.

API Documentation: Access the API Explorer at http://localhost:3000/explorer to view and test the API endpoints interactively.

## Project Structure
/src/models: Contains the model definitions.
/src/controllers: Contains datasource.
/src/repositories: Contains repository definitions for CRUD operations.
/src/controllers: Contains controller files that define the REST API endpoints.
