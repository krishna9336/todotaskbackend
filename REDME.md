//First of all  run { npm i} to install the dependencies that were in package.json file

//start the sever ->npm run dev



Tool: POSTMAN // To Create a Todo Data

POST request : http://localhost:8000/api/v1/todos

body->raw->json //send data in this section to create a data in database

example: { "title":"demo":, "description": "demo 1" }

// TO Get All Records Of todos Data From Database

GET request : http://localhost:8000/api/v1/todos

// To update records of a particlar todo

PUT request : http://localhost:8000/api/v1/todos/id

// To delete records of a particlar todo

GET request : http://localhost:8000/api/v1/todo/id

