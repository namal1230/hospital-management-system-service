# Hospital Management System Service
● Student Name: Namal Dilmith Ruwanpathirana
<br><br>
● Student Number: 2301671058
<br><br>
● Slack Handle : namaldilmith2
<br><br>
● GCP Project ID : pro-edu-476313
<br><br>
url: http://34.100.245.183:9001/

<img width="696" height="1771" alt="Screenshot 2026-08-26 020422" src="https://github.com/user-attachments/assets/ef33bd06-8098-448e-acc5-498726a7aa2f" />

<img width="1017" height="1761" alt="Screenshot 2026-08-26 020445" src="https://github.com/user-attachments/assets/0b5eafff-363e-4502-9a30-97e79a2d966d" />

<img width="731" height="1757" alt="Screenshot 2026-08-26 020509" src="https://github.com/user-attachments/assets/30eb63e3-d8d1-4c16-ae7c-12688bbec7b6" />
<img width="652" height="846" alt="Screenshot 2026-08-26 020527" src="https://github.com/user-attachments/assets/d72f8423-0bd4-4a76-83f3-1e2b3ca43121" />


<img width="1191" height="1582" alt="Screenshot 2026-08-26 020135" src="https://github.com/user-attachments/assets/61bbf3ea-fa64-45ee-954d-3015fdc16991" />



A comprehensive backend service for managing hospital operations, patient records, appointments, and medical staff coordination.

## Features

- **Patient Management**: Create and manage patient profiles, medical histories, and records
- **Appointment Scheduling**: Schedule and track patient appointments with doctors
- **Staff Management**: Manage hospital staff, departments, and roles
- **Medical Records**: Secure storage and retrieval of patient medical information
- **Billing & Payments**: Track patient billing and payment processing
- **Notifications**: Alert system for appointments and important updates

## Tech Stack

- **Runtime**: Node.js / Java / Python (specify based on your implementation)
- **Database**: [Your Database - e.g., PostgreSQL, MySQL, MongoDB]
- **Framework**: [Your Framework - e.g., Express.js, Spring Boot, Django]
- **Authentication**: JWT-based authentication
- **API**: RESTful API

## Prerequisites

- Node.js (v14 or higher) or your runtime environment
- Database setup (PostgreSQL/MySQL/MongoDB)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/namal1230/hospital-management-system-service.git
cd hospital-management-system-service
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Configure your database connection in `.env`

5. Run database migrations:
```bash
npm run migrate
```

## Getting Started

### Start the development server:
```bash
npm run dev
```

The service will be available at `http://localhost:3000` (or your configured port).

### Build for production:
```bash
npm run build
npm run start
```

## API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Patient Endpoints
- `GET /api/patients` - Get all patients
- `GET /api/patients/:id` - Get patient by ID
- `POST /api/patients` - Create new patient
- `PUT /api/patients/:id` - Update patient
- `DELETE /api/patients/:id` - Delete patient

### Appointment Endpoints
- `GET /api/appointments` - Get all appointments
- `POST /api/appointments` - Schedule new appointment
- `PUT /api/appointments/:id` - Update appointment
- `DELETE /api/appointments/:id` - Cancel appointment

### Staff Endpoints
- `GET /api/staff` - Get all staff members
- `POST /api/staff` - Add new staff member
- `PUT /api/staff/:id` - Update staff information
- `DELETE /api/staff/:id` - Remove staff member

## Project Structure

```
hospital-management-system-service/
├── src/
│   ├── controllers/      # Request handlers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   ├── middleware/      # Custom middleware
│   ├── utils/           # Utility functions
│   └── config/          # Configuration files
├── tests/               # Test files
├── .env.example         # Environment variables template
├── package.json         # Dependencies
└── README.md            # This file
```

## Environment Variables

```
PORT=3000
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
NODE_ENV=development
```

## Testing

Run tests with:
```bash
npm test
```

Run tests with coverage:
```bash
npm run test:coverage
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@hospital-system.com or open an issue in the GitHub repository.

## Authors

- **Your Name** - Initial work - [GitHub Profile](https://github.com/namal1230)

## Acknowledgments

- Thanks to all contributors
- Community feedback and suggestions
