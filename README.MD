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

(insert technical architecture diagram)

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

Node.js download: [Node.js](https://nodejs.org/en/)

Npm download command:
```
npm install -g npm
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

