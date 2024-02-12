Problem Statement – SHOWTIMETV

OTT – Over-the-top media is no longer the future of entertainment but is now the reality.
With over 50% of North Americans maintaining Netflix subscriptions, it is clear that consumers love OTT content. It is the most popular form of entertainment today across all age groups. All that a consumer needs to have a compatible hardware device enabled with a good internet connection.
An “over-the-top” media service is any online content provider that offers streaming media as a standalone product. An OTT conversation largely revolves around video-on-demand. 
Any application or service that provides a product over the internet while bypassing traditional media services is an OTT application.
Popular OTT applications for video streaming are Netflix, Amazon Video, YouTube, HBO, etc.
SHOWTIMETV streaming services are a subscription service that gives us commercial-free, on-demand access to SHOWTIMETV programs. The SHOWTIMETV streaming service is accessible to more that 70+ countries.

The SHOWTIMETV backend application needs to be implemented by creating all the required microservices which will allow to user to use the OTT platform smoothly.
Let us create multiple microservices for the application.
    1.	The user must first register with the application.
    2.	The user must login with credentials such as id, password.
    3.	The user can access the features provided by the like adding products, deleting products etc.
    4.	Create Discovery Service
    5.	Create API Gateway
    6.	Route all the service request through API Gateway



Instructions
1.	Download and unzip the boilerplate code.

2.	Run the command npm install to install the dependencies under following folder.
    a. UserMovieService
 
3.	Open the boilerplate code in VSCode to develop the solution. 

4.	Write the code in the following files
    a.	Goto database.js file under the config folder and implement the code of connecting with database

    b.	Goto movie.js file under the controller folder and implement the following code
        i.	Implement the code to get the movie details inside getMovie method.
        ii.	Implement the code to add the movie details inside addMovie method.
        iii.	Implement the code to delete the movie details inside deleteMovie method.

    c.	Goto user.js file under the controller folder and implement the following code
        i.	Implement the code to add the user details inside addUser method.

    d.	Goto movie.js file under the route folder and implement the following code
        i.	Implement the code to add the path of getMovie, addMovie and deleteMovie metods.

    e.	Goto user.js file under the route folder and implement the following code
        i.	Implement the code to add the path of addUser metod.

5.	Run the test scripts available under test folder by giving npm run test command in the terminal to test locally. 
6.	Refactor the solution to ensure all test cases are passing. 
7.	Zip the solution code with the name same as assignment name.

>>NOTE: Try to pass Mandatory test cases which are available in test files in order to get scores.