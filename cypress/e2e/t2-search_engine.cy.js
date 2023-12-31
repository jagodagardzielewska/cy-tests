/// <reference types="cypress" />

describe("Search engine functionality", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Searching entered data (by ENTER) and verifying results", () => {
    cy.get("#query").type("test{enter}", { delay: 300 });
    cy.get(".result-list ul").should("exist").and("be.visible");
    cy.get(".result-list ul").should("have.length.gte", 1);
    cy.get(".result-list ul li").each(($result) => {
      cy.wrap($result).should("include.text", "test");
    });
  });

  it("Searching entered data (by search button) and verifying results", () => {
    cy.get("#query").type("test", { delay: 300 });
    cy.get('button[type="submit"]').click();
    cy.get(".result-list ul").should("exist").and("be.visible");
    cy.get(".result-list ul").should("have.length.gte", 1);
    cy.get(".result-list ul li").each(($result) => {
      cy.wrap($result).should("include.text", "test");
    });
  });

  it("Clearing entered data", () => {
    cy.get("#query").type("test", { delay: 300 });
    cy.get("#query").clear();
    cy.get("#query").should("have.value", "");
  });

  it("Searching with no data", () => {
    cy.get('button[type="submit"]').click();
    cy.get(".search__empty-state").should("exist").and("be.visible");
    cy.get(".search__empty-state p").should(
      "include.text",
      "Wpisz jedną frazę lub kilkaPrzegladaj listę wynikówZawęź listę wyników korzystając z filtrów"
    );
  });

  it("Searching for no results", () => {
    cy.get("#query").type("testtesttest", { delay: 300 });
    cy.get('button[type="submit"]').click();
    cy.get(".search-results__empty").should("exist").and("be.visible");
    cy.get(".search-results__empty p").should(
      "include.text",
      "Nie znaleziono wyników"
    );
  });
});
