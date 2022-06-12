# MiniProjectAPI_MerchantService!

This repository contains the full code and documentation for E-Commerce as merchant_service's API

## Built With
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com)
* [Express-Validator](https://www.npmjs.com/package/express-validator)
* [Sequelize](https://sequelize.org)
* [Sequelize-cli](https://www.npmjs.com/package/sequelize-cli)
* [mysql2](https://www.npmjs.com/package/mysql2)
* [jsonwebtoken](https://jwt.io)
* [bcrypt](https://www.npmjs.com/package/bcrypt)

## System Workflow

* 0. User can register first at ./register
* 1. User must login with Username and Password at ./login
* 2. User get token authentication for get access to product at ./product
* 3. User can [CRUD](https://www.sumologic.com/glossary/crud/) the product

* noted: -User can delete accout by id but must login first and can delete at :/merchant/id 

## Register and create Product
register must be have format :

![Screen Shot 2022-06-12 at 21 10 43](https://user-images.githubusercontent.com/103507967/173234861-d9e2a428-0d61-48a2-9c88-c31873884f5b.png)

## Architecture
![Untitled Diagram drawio-8](https://user-images.githubusercontent.com/103507967/173234368-8e833bbf-8234-43eb-a383-dfb943316a7b.png)



## ERDiagram
![Untitled Diagram-Page-2 drawio-2](https://user-images.githubusercontent.com/103507967/173234725-5bce6332-c095-49da-8de6-27dac7c7abf5.png)
