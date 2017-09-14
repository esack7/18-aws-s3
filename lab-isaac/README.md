# Lab 18: CF-gram and AWS

## About

This lab assignment is a Nodejs backend API app.  It takes http POST calls to sign up a user and and GET calls to sign a user in.  It also takes http POST, GET, PUT, and DELETE to add and modify galleries. It also takes http POST, GET, PUT, and DELETE to add and photos sent to AWS buckets. The user, gallery, and photo database is MongoDB.  The urls are ```api/signup```, ```api/signin```, ```api/gallery``` and ```api/photo```.  Jest is used for testing and a test sweet is dedicated to testing POST, GET, PUT, and DELETE calls.

## Installation

To install this app, you need to have Nodejs installed on your system.  MongoDB needs to also be installed and running on you system.  Clone this repo and navigate to ```18-aws-s3/lab-isaac``` and then ```npm install``` will install all necessary packages via npm. You must create a .env file in the lab-isaac folder setting the following variables:
```
MONGODB_URI='mongodb://localhost/database-name'
PORT=9999
APP_SECRET='a secret code'
AWS_BUCKET='bucket-name'
AWS_ACCESS_KEY_ID='aws acess key id'
AWS_SECRET_ACCESS_KEY='aws secret access key'

```

## Run Application

To run this application you have the following 3 options:  ```npm run start``` to run in Node, ```npm run start:watch``` to run with Node Monitor, or ```npm run start:debug``` runs in with Node Monitor and shows debug statements to track program flow.
