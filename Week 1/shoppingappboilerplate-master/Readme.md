Problem Statement – SoppingApp

It is increasingly difficult for businesses to remain competitive in the retail. This is due to the high rental fees necessary to maintain a physical store and the difficulty of hiring lower-skilled sales assistants. In addition, consumers are increasingly shopping online on platforms such as Amazon, AliBaba etc. Even big companies as Reliance, Walmart, Apple have developed online shops and e-commerce apps, making the market even more competitive.

EBuy Group is the leading retailer. EBuy has decided to build a new and independent e-commerce app. Consider a shopping application that enables users to shop for products on any smart device. The application provides multiple features to all its registered users. The user needs to register with the application in order to access some of its features. The goal was to design an app that is seamless to use and interact with. 

Consider a shopping application that enables users to shop for products on any smart device. The application provides multiple features to all its registered users. The user needs to register with the application in order to access some of its features. Let us create multiple microservices for the application.
The user must first register with the application.
The user must login with credentials such as id, password.
The user can access the features provided by the like adding products, deleting products etc.

Instructions

1.	Download and unzip the boilerplate code.

2.	Run the command npm install to install the dependencies under following folder.
a.	 UserProductService

3.	Open the boilerplate code in VSCode to develop the solution. 

4.	Write the code in the following files
    a.	Goto database.js file under the config folder and implement the code of connecting with database
    b.	Goto product.js file under the controller folder and implement the following code
        i.	Implement the code to get the product details inside getProducts method.
        ii.	Implement the code to add the product details inside addProduct method.
        iii.	Implement the code to delete the product details inside deleteProduct method.

    c.	Goto user.js file under the controller folder and implement the following code
        i.	Implement the code to add the user details inside addUser method.

    d.	Goto product.js file under the route folder and implement the following code
        i.	Implement the code to add the path of getProducts, addProduct and deleteProduct metods.

    e.	Goto user.js file under the route folder and implement the following code
        i.	Implement the code to add the path of addUser metod.

5.	Run the test scripts available under src/test by giving npm run test command in the terminal to test locally. 
6.	Refactor the solution to ensure all test cases are passing. 
7.	Zip the solution code with the name same as assignment name.

>>NOTE: Try to pass Mandatory test cases which are available in test files in order to get scores.