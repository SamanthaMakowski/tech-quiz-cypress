# Tech Quiz App with Cypress Testing

This project is a full-stack Python quiz application using a React frontend and Express/MongoDB backend. It also includes Cypress component testing for the React `Quiz` component.

## Features

- Fetches random quiz questions from MongoDB.
- Displays one question at a time with multiple answer options.
- Tracks and displays final score.
- Button to restart the quiz.
- Cypress tests for component rendering.

## Technologies Used

- React
- TypeScript
- Express.js
- MongoDB
- Cypress
- Bootstrap
- Vite

## Getting Started

### Backend Setup
1. Navigate to the server:
   ```bash
   cd starter-code-19/server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Seed the database:
   ```bash
   npx tsc && node dist/seeds/seed.js
   ```

4. Run the server:
   ```bash
   npm run dev
   ```

---

### Frontend Setup
1. Open a new terminal tab:
   ```bash
   cd starter-code-19/client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the client:
   ```bash
   npm run dev
   ```

4. Visit the app at:
   ```
   http://localhost:3001
   ```

---

### Cypress Test Runner
1. Open Cypress:
   ```bash
   npx cypress open --component
   ```

2. Select a browser and run the `Quiz.cy.jsx` test.

---

## Project Structure (Simplified)

```
starter-code-19/
├── client/         # React frontend
│   └── src/
│       └── components/Quiz.tsx
├── server/         # Express backend
│   └── src/
│       └── controllers, routes, models
│       └── seeds/seed.ts
├── cypress/
│   └── component/Quiz.cy.jsx
├── pythonQuestions.json
└── README.md
```

---

## Note on Incomplete Functionality

This project was developed under significant time constraints. As a result:

- The React app loads, but the questions do not render due to persistent proxy/database connection issues.
- Cypress test infrastructure is in place, but not fully validated due to the same backend issues.

The README, codebase, and all setup scripts are complete and documented to reflect the current progress.

## 📽 Demo Video (Loom)

Due to time constraints and backend issues, full functionality is not shown. However, here's a walkthrough of the working components and setup:

🔗 [Watch the Loom Demo](https://www.loom.com/share/963c4d39d16e4698921fb52247899e2d?sid=eb822640-27cb-482a-860e-d478f8b1cbde)

🔗 GitHub Repository: [Tech Quiz Cypress Project](https://github.com/SamanthaMakowski/tech-quiz-cypress)


---

## Author

Samantha Makowski
