import Quiz from '../../starter-code-19/client/src/components/Quiz';
import { mount } from 'cypress/react';

const mockQuestions = [
  {
    _id: '1',
    question: 'What is 2 + 2?',
    answers: [
      { text: '3', isCorrect: false },
      { text: '4', isCorrect: true },
    ],
  },
];

describe('Quiz component', () => {
  it('starts quiz and displays a question', () => {
    cy.intercept('GET', '/api/questions/random', {
      statusCode: 200,
      body: mockQuestions,
    }).as('getQuestions');

    mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');
    cy.get('h2').should('contain', 'What is 2 + 2?');
  });

  it('allows answering a question and completes the quiz', () => {
    cy.intercept('GET', '/api/questions/random', {
      statusCode: 200,
      body: mockQuestions,
    }).as('getQuestions');

    mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');
    cy.get('button').contains('2').click();
    cy.contains('Quiz Completed').should('exist');
    cy.contains('Your score').should('exist');
  });
});
