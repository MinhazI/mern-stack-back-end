# Getting Started

This is a MERN stack API TypeScript and NodeJS. This backend is specifically done for CabbageApps by Minhaz Irphan.

Database used: MongoDB Atlas\
Port used: 3030

## Available API Methods

In the project directory, you can access the following POST, GET, PUT and DELETE methods:

### `/todos :GET`

This method is used get all the todo tasks from the database

### `/add :POST`

This method is used to add new tasks with the 'name' and the description of the new todo tasks

### `/edit/:id :PUT`

This method is used to edit and update any tasks that has already been added to the database. An `id` needs to be sent as a parameter. Example: To mark the task as complete

### `/delete/:id :DELETE`

This method is used to delete any tasks that has already been added to the database. An `id` needs to be sent as a parameter

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3030](http://localhost:303) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
