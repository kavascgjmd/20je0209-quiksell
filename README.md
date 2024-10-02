# **Interactive Kanban Board Application**

This project is an interactive **Kanban board** application built with **React JS**, designed to interact with the provided API from [QuickSell](https://api.quicksell.co/v1/internal/frontend-assignment). The application allows users to group and sort tickets dynamically based on different criteria.

## **Features**

The application offers the following features:

1. **Dynamic Grouping Options**:
   - **By Status**: Group tickets based on their current status (e.g., open, in progress, closed).
   - **By User**: Group tickets based on the assigned user.
   - **By Priority**: Group tickets based on their priority level (e.g., high, medium, low).

2. **Sorting Options**:
   - **By Priority**: Sort tickets in descending order of priority.
   - **By Title**: Sort tickets in ascending order by their title.

3. **Responsive UI**:
   - The Kanban board dynamically updates when the user clicks the "display" button and selects a grouping option.

## **Tech Stack**

The following technologies were used to develop the application:

- **React**: For building the user interface.
- **CSS**: For styling the components.
- **Recoil**: For state management.
- **Axios**: For handling API requests.

## **Available Scripts**

In the project directory, you can run the following commands:

- `npm run dev`: Starts the development server.

## **Setup Instructions**

To set up and run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kavascgjmd/20je0209-quiksell
   
1. **Navigate to the project directory**:
   - Use the command line or terminal to change to the project folder where you cloned the repository.

2. **Install the necessary dependencies**:
   - Make sure you have Node.js and npm installed on your machine.
   - Run the following command to install all required dependencies:
     ```
     npm install
     ```

3. **Start the development server**:
   - After the installation is complete, you can run the following command to start the development server:
     ```
     npm run dev
     ```

Your application should now be running at `http://localhost:3000` or the specified port.
