Setup Instructions:

1. Ensure all dependencies are installed. Please see package.json both in the root folder and client folder. Install accordingly via npm, yarn or your package manager of choice. 

2. Ensure the .env file is within the server folder. If cloning from GitHub it will be missing as it contains the DB security credentials. Otherwise it will be included in the submission/upload folder. 

3. Starting the server: Via the terminal navigate to the server folder and run the command "nodemon index.js"

4. Starting the client: Via the terminal navigate to the client folder and run the command "npm start"

5. Application should open on http://localhost:4000/employees/home

Usage Instructions:

1. Navigate to various activities via the navigation bar at the top.

2. View All Employees: 
    
    a. View a list of all database entries. Using the React Table package all data is dynamically   displayed and each column is able to be sorted or filtered or searched.

    b. From here you may select Delete to delete an entry. 

    c. You may also select Update to be taken to the Update page for that entry. 

3. Add an Employee:

    a. Simply enter all data here. All fields are required except for the photo field. Please note the upload photo field has a bug while uploading images of size greater than roughly 50kb. 

    b. No data validation is occuring for input.

4. Gallery:

    a. The idea here was to display all employee images with their titles in the thumbnail. Unfortunately I did not have enough time to fulfill this last feature. 

    b. All photos uploaded through the Add Employee page will dynamically appear here. Please excuse the messy visuals here. 

Production Environment Completion: 

In a production environment I would definitely add/fix the following features:

1. Data validation for input fields
2. Dropdowns for controlled input (Role, Department, State, Status)
3. Image upload that can handle larger images
4. Fix the visuals of the gallery

This was the first project I had to take in image data with React and upload it to MongoDB and then fetch and reconvert that data back to img form. Learning this took more time than anticipated and is the most unfinished / weakest part of the application. 







