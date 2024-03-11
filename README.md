# Manage Holiday plans

## Introduction

This is a card repository to organize your holidays, using your own API.

## Setup

Run ```npm i && npm start``` to start development server

Find the API in this repository ```https://github.com/DennerMoraes/API-Manage-holiday-plans```

Start the API using the  ```node server.js``` 

## Components

### EditModal

The EditModal component is a React component designed for editing card information. It presents a modal with input fields for various card details, allowing users to modify the information. It utilizes the ButtonPop component for the "Save Edit" button.

### CardList

The CardList component is a React component designed to display a list of cards, each representing an item of data. It provides functionality for editing, saving, canceling edits, and deleting cards. The component uses the EditModal component for handling edits.

### InsertCard

The InsertCard component is a React component designed to capture and insert new card information. It provides input fields for the title, description, date, local, and participants, along with a "Create Card" button. The component utilizes the ButtonPop component for styling and interaction.

### PdfGenerator

The PdfGenerator component is a React component responsible for generating a PDF document of the current webpage content. It utilizes the jsPDF library for PDF creation and html2canvas for capturing the HTML content as an image to be included in the PDF. The component presents a "Generate PDF" button using the ButtonPop component.

### PdfGenerator

The TitlePage component is a simple React component designed for displaying a title on a page. It takes a prop (content) to dynamically render the title content. The component utilizes the TitlePage.css stylesheet for styling.

## Hook

### useInsertCard

The useInsertCard hook is a custom React hook designed to manage the state of an insert card modal. It provides functions to open and close the modal, as well as a state variable to track its visibility.

## Pages

### CardPage

The CardPage component represents a page that displays a header, a title page, a list of cards, and an insert card modal. It utilizes various components, hooks, and API operations to manage card data and interactions.

## API Operations 

### Api

The provided set of functions encompasses the basic CRUD (Create, Read, Update, Delete) operations for interacting with an API. These operations are designed to fetch data, insert new data, update existing data, and delete data. The API base URL is defined as http://localhost:3001/api/data, and the functions utilize the Axios library for making HTTP requests.

### useApiOperations

The useApiOperations custom hook encapsulates state management and functions for performing CRUD operations (Create, Read, Update, Delete) on an API. It uses the provided API operations functions (fetchData, insertData, updateData, deleteData) to interact with the API. This hook is designed to be used in React components to manage card data.
