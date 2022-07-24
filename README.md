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

- visit http://localhost:3000 on your browser to start make booking

<hr>

#### Screenshots

    - Landing: Get all appointments)
<img width="600" alt="1 Landing 2022-07-24 at 8 26 59 PM" src="https://user-images.githubusercontent.com/41196218/180647958-fd8493c0-16ff-4f41-bb34-5d685f5cda69.png">

    - View Appointment details
<img width="600" alt="2 View 2022-07-24 at 8 26 48 PM" src="https://user-images.githubusercontent.com/41196218/180647960-aaaed3ce-236c-4692-a4de-5948c81d5302.png">

    - New appointment 1
<img width="600" alt="3 New 2022-07-24 at 8 24 52 PM" src="https://user-images.githubusercontent.com/41196218/180647965-611f5af7-1945-4a26-bb49-93dccc1c8e82.png">

<img width="600" alt="4 Edit 2022-07-24 at 8 25 20 PM" src="https://user-images.githubusercontent.com/41196218/180647962-6de94657-bd9c-4dcc-a8a3-8d43bbc96286.png">


    - Edit appointment
<img width="600" alt="Screen Shot 2022-07-24 at 9 09 13 PM" src="https://user-images.githubusercontent.com/41196218/180648508-1dc8aad4-01e8-4168-b186-6a74221c13e2.png">


## NOTES:

- No authentication implemented yet in this project
- only simple field validation on frontend
- no time overlap checking in between every booking of appointment 


