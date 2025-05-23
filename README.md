# Overview
There are in total of seven components. 
AddMember.jsx - Will render a form where you can submit a new member
AddTask.jsx - Will render a form where you can submit a new task
Board.jsx - Will render the three colums used new, in-progress and finished
Column.jsx - Will render each task as a TaskCard
Login.jsx - Will render a form to submit a login
SortFilter.jsx - Will render a select for sort and filter
TaskCard.jsx - Will render depending on what status the task has, render different information about the task
fireBaseConfig.js - Contains all configurations needed to connect to firebase database and authentication
functions.js - A module that contains functions needed to filter and sort tasks

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)


## Features
In this webb application you can add new team members by enter then name of the team member and selecting a role. A new task can also be added by entering title of task and selecting a role. When a new task has been added you can select which team member will be assigned to that task. When the task is finished you can mark it as finished. When the task is finished you can remove it from the board. 

## Tech Stack
- React
- Firebase Realtime Database
- Firebase Authentication
- Bootstrap

## Installation
1. Clone repository https://github.com/Kevin480199/JAVA24-AJS-slutprojekt-Kevin-Lu.git
2. Install dependencies
    npm install
    npm install react
    npm install react-dom
    npm install firebase
3. Run dev
    npm run dev

## Usage
To be able to use any of the functions on the scrumboard you will have to sign in email: kevinlu@gmail.com password: password. You cant add new user as of now. Add one team member by writing its name and selecting a role. If a team member can do multiple roles you have to manually add them one for each role. Create a task by giving it a title and a role. By doing so a new task will be created with a specific role but no team member will be assigned to it. You can filter by Frotnend, Backend, UX and team member. Sort by time and title or the task. 
Each task has different functions depending on what status it has. If it is just recently added it will have new as status. As a new task you can assign a team member only those who can do that kind of role can be selected. When a team member is assigned it will have status in-progress. When the task is finished you can mark it as finnished and it will have the status finnished. When finished you can delete it from firebase.

## Author
Kevin Lu