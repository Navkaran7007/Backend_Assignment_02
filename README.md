## Project Overview
This API provides a backend system for  Branches and Employees. 
It includes full CRUD operations, validation using Joi, routing using Express, 
and OpenAPI documentation.


## Installation Instructions:
1.Clone the Repository
git clone https://github.com/Navkaran7007/Backend_Assignment_02

2. Install Dependencies
npm install

3. Run the server
npm start
4.Your API will start at:
http://localhost:3000/api/v1/employee


## API Request Examples
POST Request
fetch("http://localhost:3000/api/v1/employees", {
  method: "POST",
  body: JSON.stringify(
  { name: "Nav", 
    position: "Manager", 
    email: "Nav@gmail.com" 
  })
});

GET Request
http://localhost:3000/api/v1/employees

Link to Public Documentation:
https://navkaran7007.github.io/Backend_Assignment_02/


## Local Documentation Access
./docs/index.html


## Security Documentation

###  CORS Configuration

I chose Environment-Based CORS Configuration beacuse during development, 
 relaxed security can be tested easily from different ports and tools like Postman.

## Helmet 

I chose Environment-Based helmet Configuration  beacuse 
during development, strict security headers can interfere with debugging tools and testing. 