# NodeJS Basics

This project explores the fundamentals of Node.js and creating simple HTTP servers using the native HTTP module and the Express framework. Each task below demonstrates a specific Node.js skill or feature.

## Tasks

### 0. Running Basic JavaScript with Node.js

**File:** `0-console.js`

This task involves creating a function named `displayMessage` in the `0-console.js` file that prints a given string to standard output (STDOUT).

**Usage Example:**

```javascript
const displayMessage = require('./0-console');

displayMessage("Hello NodeJS!");
```

**Expected Output:**

```
Hello NodeJS!
```

### 1. Using Process stdin

**File:** `1-stdin.js`

This task requires creating a program that runs via the command line. The program should:

- Display the message "Welcome to Holberton School, what is your name?" followed by a new line.
- Allow the user to input their name on a new line.
- Display "Your name is: INPUT" using the entered name.
- When the user exits the program, it should display "This important software is now closing" followed by a new line.

**Usage Examples:**

```bash
$ node 1-stdin.js
Welcome to Holberton School, what is your name?
Bob
Your name is: Bob
```

```bash
$ echo "John" | node 1-stdin.js
Welcome to Holberton School, what is your name?
Your name is: John
This important software is now closing
```

### 2. Reading a File Synchronously with Node.js

**File:** `2-read_file.js`

This task involves creating a `countStudents` function that reads the database file named `database.csv` synchronously. The function should:

- Accept a path as an argument.
- Attempt to read the database file synchronously.
- In case the database is unavailable, throw an error with the message "Cannot load the database."
- If the database is available, log the number of students in each field along with a list of corresponding first names.

**Usage Examples:**

```javascript
const countStudents = require('./2-read_file');

countStudents("nope.csv"); // Throws an error: Cannot load the database
```

```javascript
const countStudents = require('./2-read_file');

countStudents("database.csv");
```

**Expected Output:**

```
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
```

### 3. Reading a File Asynchronously with Node.js

**File:** `3-read_file_async.js`

This task is similar to the previous one but involves creating a `countStudents` function that reads the `database.csv` file asynchronously. The function should also return a Promise and handle errors appropriately.

### 4. Creating a Small HTTP Server Using Node's HTTP Module

**File:** `4-http.js`

In this task, you need to create a small HTTP server using Node's native HTTP module. The server should listen on port 1245 and display "Hello Holberton School!" in the page body for any endpoint as plain text.

### 5. Creating a More Complex HTTP Server Using Node's HTTP Module

**File:** `5-http.js`

This task involves creating a more complex HTTP server using Node's native HTTP module. The server should listen on port 1245 and return plain text. The expected behaviors are as follows:

- When the URL path is "/", it should display "Hello Holberton School!" in the page body.
- When the URL path is "/students", it should display "This is the list of our students" followed by the content from the `3-read_file_async.js` file (with and without the database). The name of the database should be passed as an argument to the file.

### 6. Creating a Small HTTP Server Using Express

**File:** `6-http_express.js`

In this task, you need to install Express and create a small HTTP server using the Express module. The server should listen on port 1245 and display "Hello Holberton School!" in the page body for the "/" endpoint as plain text.

### 7. Creating a More Complex HTTP Server Using Express

**File:** `7-http_express.js`

This task is similar to the previous one but involves creating a more complex HTTP server using the Express framework. The server should listen on port 1245 and return plain text based on the requested URL path. The expected behaviors are the same as in Task 5.

### 8. Organizing a Complex HTTP Server Using Express

**Folder:** `full_server`

This task involves organizing a complex HTTP server using Express. Here are the steps:

1. Organize the server's structure by creating two directories: `controllers` and `routes`.

2. Create a `utils.js` file containing a function named `readDatabase` for asynchronous database reading.

3. Write the `AppController` in `controllers/AppController.js`, including a

 static method `getHomepage` for displaying a welcome message.

4. Write the `StudentsController` in `controllers/StudentsController.js`, including two static methods: `getAllStudents` and `getAllStudentsByMajor` for handling student-related requests.

5. Write the routes in `routes/index.js` to link controllers to corresponding endpoints.

6. Write the server in `server.js` using Express and the defined routes. The server should use port 1245.

7. Update the `package.json` file to allow running the server from outside the `full_server` folder.

**Note:** Make sure to export the Express app at the end of `server.js`.

---

This README provides an overview of the tasks to be completed in the "NodeJS Basics" project. Each task focuses on specific aspects of Node.js and HTTP server creation. Follow the instructions for each task to successfully complete this project. Happy coding!
