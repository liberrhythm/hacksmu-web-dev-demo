# Web Development Workshop: HackSMU 2020
This repository holds the materials and code for the intro to web development workshop @ HackSMU 2020. In this workshop, we will cover how to create a full-stack blog web application using the MERN stack - `MongoDB`, `Express`, `React`, and `Node.js`. 

For the sake of time, there is an incomplete (initial) version of the code, which we will use in the demo and build up to a completed project. The completed version is also included in this repository for anyone who wants to come back and take a look.

## Prerequisites
You must have the following things installed on your laptop prior to the workshop for the interactive coding portion:
* Node (check if you have this by running `node -v` in your command prompt)
* MongoDB Community Edition (see the following link on how to download for your specific OS: https://docs.mongodb.com/manual/administration/install-community/)

## Setup

### General
1. Clone the repository: `git clone https://github.com/liberrhythm/hacksmu-web-dev-demo.git`.
2. Use the incomplete (initial) project base: `cd initial`.

### Database
3. Run `mongod --config /usr/local/etc/mongod.conf --fork` to start MongoDB manually as a background process.
    * On MacOS, you may have some issues with missing directory `/data/db` or insufficient permissions. To fix this, use the following commands:
        - `sudo mkdir -p /System/Volumes/Data/data/db`
        - `sudo chown -R `id -un` /System/Volumes/Data/data/db`
        - `mongod --config /usr/local/etc/mongod.conf --fork --dbpath=/System/Volumes/Data/data/db`

CHECKPOINT: Run `ps -x | grep mongo` in a terminal. You should see a `mongod` process running if you did your database setup correctly!

### Backend
4. Go into the backend folder from the initial project base: `cd backend`.
5. Install all required packages and dependencies: `npm i`.
6. Start the backend server: `npm run start:dev`.

CHECKPOINT: You should see the message `Database successfully connected!` in the terminal running the backend server if you did your database and backend setup correctly!

### Frontend
7. Go into the frontend folder from the initial project base: `cd frontend`.
8. Install all required packages and dependencies: `npm i`.
9. Start the frontend server: `npm start`.

CHECKPOINT: You should see a `React App` tab with an empty blog application open on your default browser if you did your frontend setup correctly!

### Start Coding!
At this point, you are good to go for the workshop! See you there!