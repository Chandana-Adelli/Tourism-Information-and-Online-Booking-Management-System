# 🏔️ Hill Explorer – Tourism Information and Online Booking Management System

A web-based tourism platform developed using Angular that allows users to explore popular hill stations in India, view detailed destination information, book hotels and tours, and complete a simulated payment flow.

## 🌄 Project Overview

**Hill Explorer** is a tourism and online booking web application designed to provide users with an easy and interactive way to discover hill stations across India.

The application provides destination exploration, detailed place information, hotel booking, tour booking, user authentication, contact services, feedback submission, and a payment workflow.

## ✨ Features

### 🏠 Home Page
- Attractive hero section
- Hill station introduction
- Popular destinations
- Traveler reviews
- Contact information

### 🌍 Destinations
- Explore multiple hill stations across India
- Search destinations
- Filter by category
- Sort destinations by popularity and rating
- Sort destinations by price
- Pagination
- Destination cards with ratings and visitor information

### 📍 Place Details
- Detailed destination information
- Destination images
- Location map
- Package price
- Hotel price per night
- Direct hotel booking option

### 🏨 Hotel Booking
- Select check-in and check-out dates
- Select number of rooms
- Select adults and children
- Choose room type
  - Standard Room
  - Deluxe Room
  - Suite
- Automatic booking summary
- Dynamic total price
- Continue to payment

### 🎒 Tour Booking
- Select destination
- Display tour price
- Enter traveler details
- Enter email and phone number
- Select travel date
- Select adults and children
- Automatic traveler count
- Continue to payment

### 💳 Payment
- Booking amount display
- Selected room information
- UPI payment option
- QR code payment option
- Payment completion button
- Booking confirmation page

> Note: The payment functionality in this project is implemented as a demonstration/simulation and is not connected to a real payment gateway.

### 🔐 User Authentication
- Sign Up page
- Sign In page
- Username and password fields
- User registration form

### 📞 Contact
- Contact form
- Email and mobile details
- Location map
- Message submission confirmation

### ⭐ Feedback
- User feedback form
- Rating selection
- Feedback submission
- Thank-you confirmation

## 🛠️ Technologies Used

### Frontend
- Angular
- TypeScript
- HTML5
- CSS3

### Development Tools
- Angular CLI
- Visual Studio Code
- Git
- GitHub

## 📂 Project Structure

```text
Tourism-Information-and-Online-Booking-Management-System/
│
├── src/
│   ├── app/
│   │   ├── home/
│   │   ├── destinations/
│   │   ├── place-details/
│   │   ├── navbar/
│   │   ├── contact/
│   │   ├── feedback/
│   │   ├── signin/
│   │   ├── signup/
│   │   ├── payment/
│   │   ├── success/
│   │   └── pages/
│   │       ├── book-hotel/
│   │       └── book-tour/
│   │
│   ├── assets/
│   │   └── images/
│   │
│   ├── index.html
│   ├── main.ts
│   └── styles.css
│
├── angular.json
├── package.json
├── tsconfig.json
└── README.md