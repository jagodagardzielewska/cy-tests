/// <reference types="cypress" />

describe("Basic funcionalities - https://www.gov.pl", () => {
  it("Opening home page", () => {
    cy.visit("/");
  });
});
