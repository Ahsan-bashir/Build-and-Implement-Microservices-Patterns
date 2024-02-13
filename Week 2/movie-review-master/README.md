
# Practice Statement

Services often collaborate to handle the requests. Consequently, they must use an inter-process communication protocol. Deciding on how microservices communicate with one another is one of the most fundamental decisions to make when implementing a system based on the microservice architecture. ​

In this Sprint, you will work with Synchronous communication. 
​Build a Microservices for User, Movie, Movie Reviews using ExpressJS to manage the Movie details and reviews. The reviews can be given by a user. 

# Task

Create three microservices for User, Movie, and Movie Reviews. ​

The user will contain the username, email, etc. ​

The movie will contain details of movies like movie name, director name, movie review, etc. ​

Movie Review will contain the userID, movie, and other details regarding the Movie. ​

All three services will run on their ports. ​

Use MongoDB to store the User, Movie, and Movie Review details. ​

Use axios for connecting the services.


# Instructions

 1.Download and unzip the boilerplate code.
 
 2.Run the command npm install to install the dependencies.
 
 3.Open the boilerplate code in VSCode to develop the assignment solution.
 
 4.Write the logic in **.js** file present in **src** folder
 
 5.Run the test scripts available under src/test by giving the npm run test command in the terminal to test locally.
 
 6.Refactor the solution to ensure all test cases are passing.

 7.Test all REST end points on **POSTMAN**
 
 8.Zip the solution code with the name same as the assignment name.
 
 9.Upload the zipped solution for submission.


 
















# Practice Exercise 1: Microservices Communication


## Running the code
1. Run the `npm install` command to install dependencies
3. Write the logic for the application in the **.js** file in the **src/Movie**, **src/MovieReviews**
   and **src/Users** folder
4. Do not modify the index.js, Model files
5. Do not modify test file .
6. Execute the `npm start` command to start the application
7. Test all REST end points on **POSTMAN**

## Testing the application
1. Execute the test cases using the `npm test` command
