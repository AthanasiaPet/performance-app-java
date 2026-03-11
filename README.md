# Show & Reservation Management System (Java Console App) 

A Java console application designed to manage theatrical and musical performances, customer records, and ticket reservations. This project was developed as part of my Master's studies at University of West Attica, focusing on Object-Oriented Programming (OOP) principles.

##  Key Features
* **Performance Management:** Complete CRUD operations (Create, Read, Update, Delete) for theatrical and musical events.
* **Customer Registry:** Efficient management of customer profiles and data.
* **Smart Reservation System:** Specialized booking logic for different types of shows.
* **Statistics & Reporting:** Real-time tracking of ticket sales and seat availability for every performance.

##  Architecture & Project Structure
The application is built with a clean separation of concerns, organized into two primary packages:

### 1. `model` (Business Logic)
This package contains the core entities and data handlers:
* **Inheritance Hierarchy:** A base `Performance` class with specialized `TheatricalPerformance` and `MusicalPerformance` subclasses.
* **Reservation Logic:** A base `Reservation` class with specialized `TheatricalReservation` and `MusicalReservation` implementations.
* **Entity Modeling:** A `Customer` class for user data.
* **Data Management:** Dedicated manager classes (`PerformanceManager`, `ReservationManager`, `CustomerManager`) to handle data flow and business rules.

### 2. `console` (User Interface)
* **Main Entry Point:** Contains the `MainP` class.
* **User Experience:** Implements the interactive menu system and application flow.

##  Tech Stack & Concepts
* **Language:** Java
* **Programming Paradigm:** Object-Oriented Programming (Inheritance, Polymorphism, Encapsulation, Abstraction).
* **Architecture:** Manager-Pattern for data handling.

##  How to Run
1. Clone the repository: `git clone [your-repo-url]`
2. Navigate to the `src` directory.
3. Compile
