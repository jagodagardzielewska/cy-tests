/// <reference types="cypress" />

describe("Search engine functionality", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Searching entered data (by ENTER) and verifying results", () => {
    cy.get("#query").type("test{enter}", { delay: 300 });
    cy.get(".result-list ul").should("exist");
    cy.get(".result-list ul").should("have.length.gte", 1);
    cy.get(".result-list ul li").each(($result) => {
      cy.wrap($result).should("include.text", "test");
    });
  });

  it("Searching entered data (by search button) and verifying results", () => {
    cy.get("#query").type("test", { delay: 300 });
    cy.get('button[type="submit"]').click();
    cy.get(".result-list ul").should("exist");
    cy.get(".result-list ul").should("have.length.gte", 1);
    cy.get(".result-list ul li").each(($result) => {
      cy.wrap($result).should("include.text", "test");
    });
  });
});
