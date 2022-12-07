# Calorie Clash
**Group 101:**
- *Frontend Developers:* Gloria Li (glorial4), Sai Dasari (saisd2)
- *Backend Developers:* Warren Li (warrenl2), Ben Guan (bg16)

## Table of Contents
- [Introduction](#introduction)
- [Technical Architecture](#technical_architecture)
- [Required Downloads](#required_downloads)
- [How to Run](#how_to_run)

## Introduction <a name="introduction"></a>

Staying healthy and working out are sometimes things that can be hard to find the motivation for. 

Calorie Clash will help track calories burned by a registered user and find and match individuals as “rivals” based on fitness level and activity to bolster fitness competition and comradery where many can’t find it. Users can also view a leaderboard of top 10 calorie burners out of all users to find some extra motivation as well. 

While there are many fitness tracker programs available, Calorie Clash’s rival system adds an additional rivals system to the mix for additional fitness motivation and the ability to build fitness camaraderie between people all across the world. 


## Technical Architecture <a name="technical_architecture"></a>

![Technical Architecture Diagram](/repository/TechArchitecture.png)

### Backend (Django) Features
- Leaderboard (Ben)

Insert description and how it connects to other parts here.

- User Profile Storage (Ben/Warren)

Insert description and how it connects to other parts here.

- User Profile Manager (edit/get/check/create) (Ben/Warren)

Insert description and how it connects to other parts here.

- Rival Matching Algorithm (Warren)

Insert description and how it connects to other parts here.

### Frontend (React) Features
- Leaderboard (Gloria/Sai/Ben)

A page that shows the leaderboard of the top 10 calorie burners out of all users in a table. 
Gets the leaderboard from the leaderboard api on the backend. 
Also shows user's current stats if they're logged in. 

- Login/logout (Sai/Gloria)

Logs the user in based on a username and password that is checked for matches in the backend's user profile check. 
The user's UID is returned from the backend's user profile check if the login is successful and the UID is stored in local storage in the frontend for future get requests for the backend. If the user profile check fails, an error is shown.

Logs the user out by clearing the local storage so the user's UID is no longer stored. 

(Note: Does not have the functionality to change user password at the moment)

- Signup (Gloria)

Form for signing up as a user. Takes in username, first and last name, email, password, and password confirmation.
Certain password restrictions are enforced (8 character min, 1 upper and lowercase letter, 1 special character, and 1 digit).

If the information passes all password checks on the frontend, the data is sent to the backend's user profile creation api to
create a profile and the user's UID is returned from the backend and stored in the frontend's local storage if the profile was successfully created. The user profile page will open then after a success message.

If there is a matching username already in existance, the backend will throw an error that the frontend will display and it will stay on the signup form.

- Profile Page (Gloria/Sai)

Shows the user's current information (first name, last name, pronouns, weight, height (ft), height (in), workout preferences,
and calories burned). Gets this information from the backend's user profile get/edit api using the uid that was stored in local
storage, if logged in.

If there is not UID stored, the page redirects to the login page. 

Also, has buttons that link to the edit profile form and log calories form. 

- Navigation Bar (Sai)

Navigation bar at the top of the page that links to the get started, home, leaderboard, profile, rival, and login/logout page.
Shows login/logout depending on if a user UID is stored (logged in) or not (logged out).

- Log Calories (Gloria/Sai)

Form that the user can use to log calories. Links to an external calorie calculator as a resource if necessary. Can only input
integers 0 or greater for number of calories burned.
Once the form is submitted, the information is sent to the backend where the user profile is edited to account for the new
amount of calories logged and the profile page is opened after a success message shows.

- Edit Profile (Gloria)

Form that the user can use to change their user information (first name, last name, pronouns, weight, height (ft), height (in), 
and workout preferences). Using the stored user UID, sends this infomration to the backend's specific user profile edit/get api
to update the information stored. The profile page is opened after a success message shows.

- Rival Page (Sai)

Similar to the user profile page but instead of the user's information it's the user's rival information. Gets the user's rival
UID by using the user's stored UID to get the user's profile from the backend which has the rival's UID. Then, with the rival's
UID, the rival's profile information from the backend's user profile get/edit api is stored and displayed. 

- Getting Started Page (Sai)

Tutorial page that explains how to use the Calorie Clash.

- Home Page (Gloria)

Introduction page that explains what Calorie Clash is and its purpose.

## Required Downloads <a name="required_downloads"></a>

### For the Django Backend:
- Django
- Python
- Django Rest Framework
- Django Cors Headers

Python download: [Python.org](https://www.python.org/)

Once python is installed, the other programs/additions can be downloaded via the code below:

```
pip install django
pip install djangorestframework
pip install django-cors-headers
```

### For the React Frontend:
- Node.js (version 14 or later)
- Npm (version 5.6 or later)
- React Router DOM

Node.js download: [Node.js](https://nodejs.org/en/)

Download commands for other components:
```
npm install -g npm
npm i react-router-dom
```

Checking versions:
```
node -v
npm -v
```

## How to Run <a name="how_to_run"></a>

To run Calorie-Clash, you need to run both the backend and frontend servers (instructions below).


### Django Backend:
1. Navigate into the folder, backend/django-test:
```
cd backend/django-test
```
2. Run the command
```
python manage.py runserver
```

### React Frontend
1. Navigate into the folder, frontend/calorie-clash
```
cd frontend/calorie-clash
```
2. Run the command,
```
npm start
```

