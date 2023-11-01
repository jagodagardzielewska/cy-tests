/// <reference types="cypress" />

describe("Launching website - https://www.gov.pl", () => {
  it("Opening home page", () => {
    cy.visit("/");
  });
});
