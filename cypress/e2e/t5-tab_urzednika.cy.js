/// <reference types="cypress" />

describe("'Dla urzednika' tab", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("a#officials-tab").click();
    cy.get("a#officials-tab").should("have.class", "active");
  });

  it("Checking if 'Dla urzednika' tab contains other tabs", () => {
    const expectedLabels = [
      "Sprawy publiczne",
      "Dokumenty urzędowe",
      "Postępowania",
      "Systemy informatyczne",
      "Dotacje i dofinansowania",
      "Nieruchomości i środowisko",
      "Pozostałe sprawy",
    ];

    expectedLabels.forEach((label) => {
      cy.contains("span", label).should("exist");
    });
  });

  it("Redirection to the 'Sprawy publiczne' tab", () => {
    cy.get('a[href="/web/gov/uslugi-dla-urzednika/#sprawy-publiczne"]').click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-urzednika/#sprawy-publiczne"
    );
  });

  it("Redirection to the 'Dokumenty urzedowe' tab", () => {
    cy.get(
      'a[href="/web/gov/uslugi-dla-urzednika/#dokumenty-urzedowe"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-urzednika/#dokumenty-urzedowe"
    );
  });

  it("Redirection to the 'Postepowania' tab", () => {
    cy.get('a[href="/web/gov/uslugi-dla-urzednika/#postepowania"]').click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-urzednika/#postepowania"
    );
  });

  it("Redirection to the 'Systemy informatyczne' tab", () => {
    cy.get(
      'a[href="/web/gov/uslugi-dla-urzednika/#systemy-informatyczne"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-urzednika/#systemy-informatyczne"
    );
  });

  it("Redirection to the 'Dotacje i dofinansowania' tab", () => {
    cy.get(
      'a[href="/web/gov/uslugi-dla-urzednika/#dotacje-i-dofinansowania"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-urzednika/#dotacje-i-dofinansowania"
    );
  });

  it("Redirection to the 'Nieruchomosci i srodowisko' tab", () => {
    cy.get(
      'a[href="/web/gov/uslugi-dla-urzednika/#nieruchomosci-i-srodowisko"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-urzednika/#nieruchomosci-i-srodowisko"
    );
  });

  it("Redirection to the 'Pozostale sprawy' tab", () => {
    cy.get('a[href="/web/gov/uslugi-dla-urzednika/#pozostale-sprawy"]').click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-urzednika/#pozostale-sprawy"
    );
  });
});
