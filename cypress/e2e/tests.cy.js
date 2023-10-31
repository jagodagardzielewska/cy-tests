/// <reference types="cypress" />

describe("Basic functionalities - https://www.gov.pl", () => {
  it("Opening home page", () => {
    cy.visit("/");
  });
});
