
# Edupulse - A online platform where people can learn skills 

## Overview

Embark on a transformative learning experience with Edupulse, where the emphasis is on your personal and professional growth. This innovative online platform is designed to elevate skills through an intuitive and inclusive interface. Whether you're a teacher, administrator, or student, Edupulse provides a dynamic space where learning knows no bounds. Join us on a journey of knowledge, collaboration, and discovery.


## Live Site

Check out the live version of Edupulse at https://edupulse.vercel.app/

## Features

- **User Authentication**: Firebase authentication ensures a secure and hassle-free login experience for users.

- **Role-Based Dashboards**: Three distinct dashboards cater to teachers, administrators, and students, providing tailored experiences.

- **Seamless Course Experience**: Effortlessly enroll in courses and enjoy secure payment processing through Stripe, enhancing your learning journey.


- **Private Routes**: Certain sections of the website are restricted to authenticated users only, ensuring a secure and controlled environment.

- **Efficient Data Management**: Utilizes Tanstack Query for efficient data fetching and management, ensuring a seamless user experience.


- **Multi-Role Dashboards**:
  - *Teacher Dashboard*: Manage classes, track approval status. Teachers have the ability to update and delete their added courses. Additionally, teachers can submit new classes for approval by the admin.

  - *Admin Dashboard*: Accept/Reject teacher requests, manage user lists, and oversee requested classes for approval.

  - *Student Dashboard*: View enrolled classes, track learning progress, and access profile information.


## Security Measures

- Firebase Authentication ensures secure user sign-up and login.
- Token-based authentication (JWT) for secure data access.
- Axios interceptors for adding tokens to requests.


## Technologies Used

- **Frontend**:
  - React.js
  - Next.js
  - Material-UI
  - JavaScript


- **Backend**:
  - Express.js
  - MongoDB

- **Authentication**:
  - Firebase Authentication
  - JSON Web Token (JWT) for authorization


- **API Requests**:
  - Axios
  - Tanstack Query

- **Payment Processing**:
  - Stripe




## Contributions

Contributions are welcome! If you find any issues or have suggestions, please open an issue or submit a pull request.
