import { getGreeting } from '../support/app.po';

describe('pms-web', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to pms-web!');
  });
});
