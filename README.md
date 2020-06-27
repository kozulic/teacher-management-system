# teacher-management-system

> Teacher Management System (TMS) is web application that helps teacher to manage personal classes and record student activity.

## Table of Contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Functionality](#functionality)

---

## Introduction

Teacher Management System helps teachers to organize their school classes. The goal of this app is to provide teachers freedom in 
organizing their professional work and digitalize their records. Teacher make custom classes and add students in each class. 
They can keep record about student grades, absences, notes or contact persons.

---

## Technologies

Project is divided in two separate sub projects (applications). **teacher-management-api** (backend) is RESTful API written in Node.js with
express framework. **teacher-management-app** (frontend) is written in Angular 8.

- **Backend**
    - Node.js
    - express 4
    - MongoDB
    - npm packages used: jsonwebtoken, mongoose, morgan, dotenv, cors, bcrypt
- **Frontend**
    - Angular 8
    - TypeScript
    - rxjs
    - Bootstrap

My goal was to follow good practices in writing code, organizing projects and following naming conventions. 
This [article](https://www.coreycleary.me/project-structure-for-an-express-rest-api-when-there-is-no-standard-way/) was my reference
in organizing RESTful API, and [this one](https://angular-folder-structure.readthedocs.io/en/latest/#) was for Angular app.

---

## Functionality

> Describing core functionality of application.

- **Authentication**
  - First, teacher has to create an account in order to use the app. Further, login with username and password.
  - Login and register functionality.
- **Class management**
  - Teacher can have any number of classes. Teacher can view, create, update and delete class. Group of students is assigned to class. 
- **Student management**
  - Students are organized in classes.
  - Teacher can view, create, update and delete students. Teacher manage records about student grades, absences, notes and contacts.

---
