# Udacity-Udagram

This simple full stack project with CI/CD implementation 
## Description
The project is a full stack application for posting images and caption 
- Postgres database.
- Backend  Expressjs. 
-Frontend Angular.
 

## Usage of the existing app

The application is available on http://mybuckettest-udacity.s3-website-us-east-1.amazonaws.com/

## Build status
[Passed CircleCI build-deploy](https://app.circleci.com/pipelines/github/elbaruni/udagram/16/workflows/7eccc1f1-1217-4795-bb54-f5599b33bf5f)

## Requirements for local execution

### AWS account
First must create AWS account and set environment varibales to allow backend , aws cli and eb cli to access aws services. 

### Database
First create Postgres database and set required environment varibales to access it .

### s3 media bucket
we need to create s3 bucket for posts media. 

### ENV variables
For the backend app to work, following ENV variables have to be filled. 
```
POSTGRES_USERNAME
POSTGRES_PASSWORD
POSTGRES_DB
POSTGRES_PORT
PORT
POSTGRES_HOST
AWS_REGION
AWS_PROFILE
AWS_BUCKET
URL
JWT_SECRET
AWS_ACCESS_KEY
AWS_SECRET_ACCESS_KEY 
```

## Usage
### Backend
To use an API, frist you have to build and start the backend aplication. 
from root directory cd to udagram-api directory and run:

```
cd  udagram-api
npm run build
npm run start
```

### Frontend
To run a web application you have to build and start the frontend application. 
from root directory cd to udagram-frontend and run:

```
cd  udagram-frontend
npm run build
npm run start
```