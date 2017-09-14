# Lab 17: CF-gram and Bearer Auth

## About

This lab assignment is a Nodejs backend API app.  It takes http POST and GET calls to sign up a user and sign a user in.  It also takes http POST, GET, PUT, and DELETE to add and modify galleries. The user and gallery database is MongoDB.  The urls are ```api/signup```, ```api/signin```, ```api/gallery```.  Jest is used for testing and a test sweet is dedicated to testing POST, GET, PUT, and DELETE calls.

## Installation

To install this app, you need to have Nodejs installed on your system.  MongoDB needs to also be installed and running on you system.  Clone this repo and navigate to ```17-basic-auth/lab-isaac``` and then ```npm install``` will install all necessary packages via npm. You must create a .env file in the lab-isaac folder setting the following variables:
```
MONGODB_URI= 'mongodb://localhost/*yourDBname*'
APP_SECRET='*A Specific secret word*'
PORT = **SPECIFY A PORT**
```

## Run Application

To run this application you have the following 3 options:  ```npm run start```, ```npm run start:watch```, or ```npm run start:debug```.
