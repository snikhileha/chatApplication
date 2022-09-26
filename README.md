# Chat Application
   




This project is based on JavaScript, React & Note JS.This real time chat application convey the messages from one user to unother.
This page is responsive so you can access it through your mobile.



## Features

- Uses Express as the application Framework.
- Real-time communication between a client and a server using Socket.io.
- Login page to use application
- Responsive webpage.


## Tech Stack

**Client:** JavaScript, React, Note JS.

# Installation

### Running Locally

Make sure you have Node.js and npm install.

  1. Clone or Download the repository 
    <pre>git https://github.com/snikhileha/chatApplication.git
    $ cd cchat</pre>
  2. Install Dependencies
      <pre>npm install</pre>
 
  3. Start the Application
     <pre>node app.js</pre>
  Application runs from localhost:3000.
      
#### Run in development

Run the following commands to run the app in development with hot reloading:
```
npm start server
```
and in another terminal tab run:
```
npm run development
```
View the app running in development at

  
      
 ## Sockets
    
   Having an active connection opened between the client and the server so client can send and receive data. This allows             real-time communication using TCP sockets. This is made possible by Socket.io.

   The client starts by connecting to the server through a socket(maybe also assigned to a specific namespace). Once connections is successful, client and server can emit and listen to events. 





## Feedback

If you have any feedback, please reach out to us at snehajoshi1895@gmail.com
