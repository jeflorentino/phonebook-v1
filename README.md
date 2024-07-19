# Phonebook Project

This is a full-stack phonebook application implemented as a Single Page Application (SPA) using React and Tailwind CSS for the frontend, and Ruby on Rails for the backend.

## Features

- Add, update, delete, and view contacts
- Filter contacts by name, phone number or notes
- Add notes to each contact
- Responsive design
- Error handling and validation

## Technologies Used

- Frontend: React, Tailwind CSS
- Backend: Ruby on Rails
- Database: PostgreSQL

## Setup Instructions

### Prerequisites

- Ruby (version 3.2.2)
- Rails (version 7.0.8.4)
- PostgreSQL
- Node.js

## Initial settings to run the project

### Clone the repository:

   ```bash
   git clone https://github.com/jeflorentino/phonebook-v1.git
   cd phonebook-v1
   ```

### Backend Setup

1. **Install dependencies:**

   ```bash
   cd phonebook-backend
   bundle install
   ```

2. **Configure the database:**

    Copy the `.env.example` file to `.env` and edit it with your PostgreSQL credentials:

    ```bash
    cp .env.example .env
    ```

    Edit `.env`:

    ```bash
    DATABASE_USERNAME=your_database_username
    DATABASE_PASSWORD=your_database_password
    ```

3. **Create and migrate the database:**

    ```bash
    rails db:create
    rails db:migrate
    ```

4. **Start the Rails server:**

    The backend server will run on http://localhost:3000 by default.

    ```bash
    rails server
    ```

### Frontend Setup

1. **Install dependencies:**

   ```bash
   cd ../phonebook-frontend
   npm install
   ```

2. **Start the React development server:**

    The frontend server can run on http://localhost:3001

    ```bash
    npm start
    ```

## Running Tests

### Backend Tests

1. **Run backend tests:**

```bash
cd phonebook-backend
rails test
```

### Frontend Tests

1. **Run frontend tests:**

```bash
cd ../phonebook-frontend
npm test
```


## Using the Application

1. **Open the Application in Your Browser:**

- Frontend: http://localhost:3001
- Backend API: http://localhost:3000


2. **Adding a Contact:**

    Use the form on the main page to add a new contact by entering the name, phone number, and optional notes.
Click the "Adicionar" button to save the contact.

3. **Viewing Contacts:**

    All saved contacts are displayed in a list on the main page. In "Últimos adicionados" can show the 6 last added contacts. Use the search bar to filter contacts by name, phone number and note. 

4. **Updating a Contact:**

    Click on a contact's entry in the list or on a recently added contact to update it. The form will automatically fill in with the contact information.
Update the contact information on the form and click “Atualizar”.

5. **Deleting a Contact:**

    Click the "Deletar" button next to a contact's entry in the list to remove the contact.

