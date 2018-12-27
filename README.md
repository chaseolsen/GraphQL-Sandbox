# GraphQL-Sandbox
I created this full-stack application to demonstrate the process of using GraphQL (Apollo) with a front-end (ReactJS) and back-end (NodeJs & MongoDB/Mlab). 

## IMPORTANT!
After cloning this project, navigate to server > app.js and change the 'mongoose.connect' string, further instructions will be included above it.

## Technologies Used

* ReactJS
* NodeJS
* Express (And express-graphql)
* GraphQL (Used Apollo for ReactJS integration)
* mLab (For database)



* Mongoose (For communication with mLab)

Here is basic file structure of project

    ├── client         # Front-End Application, such as ReactJs, and the integration of Apollo to communicate with GraphQL/Node Server
    ├── server         # Back-End Server, contains NodeJs and GraphQL. You can view the Schemas (for GraphQL) and models (for mLab)
    ├── server         # Ignore this, used to prevent pushing node_modules
    └── README.md


## How to Run Everything
(be sure node is installed, also use two terminals since I did not combine these the front and back)

1. Clone Project
```
git clone https://github.com/chaseolsen/GraphQL-Sandbox.git
```
2. Enter Project (Do this on both terminals)
```
cd GraphQL-Sandbox
```

3. Install Dependencies (Just on one terminal, doesn't matter)
```
npm install
```

4. Run Node Server (In one terminal)
```
cd server
```
```
node app
```

4. Run Front-end React Application (In the other terminal)
```
cd client
```
```
npm start
```

Done! Server is listening on Port 4000 and React Application is on Port 3000.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
