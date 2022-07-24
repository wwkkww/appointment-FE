### This is a Appointment Code Challenge project 

As part of the request services process, the customer will come to Sofax’s website to book an appointment with our in house designer. Given this business scenario, we need to come up with a module to handle in house designer appointment bookings.

#### REQUIREMENT
The following are the operation rules for Sofax Designer Department.

- 1. Operation hours for Sofax Designer Department are:
a. 9 am to 6 pm from Monday to Friday. ✅
b. Closed on Saturday and Sunday. ✅
- 2. Users need to book the appointment 2 business days in advance. ✅
- 3. Users are not allowed to book an appointment that is more than 3 weeks in advance. ✅

#### Technical Requirements
- 1. You need to show how both the backend and frontend handle the request.
a. Frontend form that allows users to book an appointment.
b. Backend API to manage appointments based on the operation rules.
- 2. The frontend should handle all responses from the backend API.
- 3. Responsive frontend design that caters for desktop and mobile views.
- 4. Clean code practice.

#### Deliverables
- 1. Source code of the appointment booking module.
- 2. A README document containing
a. all your assumptions
b. clear instruction on how to execute your code.
- 3. Host your source code at GitHub, GitLab, or any other source repository that is accessible by us.

#### Bonus
- 1. Implement a feature to cancel an existing appointment. ✅
- 2. Implement a feature to reschedule an existing appointment. ✅
- 3. Implement a feature to let users add a scheduled appointment to their calendar.

<hr>

## *SOLUTION:*
#### Running on local

To run this project locally, follow the steps below.

#### Prerequisites

You will need to have the following software installed:
* npm
* Git
* Nodejs
* Nestjs
* Sqlite


#### Step running the frontend

```bash
# on root folder

# installation
$ npm install

# run project in watch mode
$ npm start

```

- visit the localhost:3000 on your browser to start make booking


## NOTES:

- No authentication implemented yet in this project
- only simple field validation on frontend
- no time overlap checking in between every booking of appointment 


