/// <reference types="cypress" />

describe("'Dla rolnika' tab", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("a#farmer-tab").click();
    cy.get("a#farmer-tab").should("have.class", "active");
  });

  it("Checking if 'Dla rolnika' tab contains other tabs", () => {
    const expectedLabels = [
      "Wsparcie finansowe, dofinansowania do działalności",
      "Ubezpieczenia społeczne",
      "Zaświadczenia, zezwolenia i rejestry",
      "Uprawa roślin",
      "Hodowla zwierząt",
      "Nieruchomości i ziemia rolna",
    ];

    expectedLabels.forEach((label) => {
      cy.contains("span", label).should("exist");
    });
  });

  it("Redirection to the 'Wsparcie finansowe, dofinansowania do dzialalnosci' tab", () => {
    cy.get('a[href="/web/gov/uslugi-dla-rolnika/#wsparcie-finansowe"]').click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-rolnika/#wsparcie-finansowe"
    );
  });

  it("Redirection to the 'Ubezpieczenia spoleczne' tab", () => {
    cy.get(
      'a[href="/web/gov/uslugi-dla-rolnika/#ubezpieczenia-spoleczne"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-rolnika/#ubezpieczenia-spoleczne"
    );
  });

  it("Redirection to the 'Zaswiadczenia, zwolnienia i rejestry' tab", () => {
    cy.get('a[href="/web/gov/uslugi-dla-rolnika/#zaswiadczenia"]').click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-rolnika/#zaswiadczenia"
    );
  });

  it("Redirection to the 'Uprawa roslin' tab", () => {
    cy.get('a[href="/web/gov/uslugi-dla-rolnika/#uprawa-roslin"]').click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-rolnika/#uprawa-roslin"
    );
  });

  it("Redirection to the 'Hodowla zwierzat' tab", () => {
    cy.get('a[href="/web/gov/uslugi-dla-rolnika/#hodowla-zwierzat"]').click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-rolnika/#hodowla-zwierzat"
    );
  });

  it("Redirection to the 'Nieruchomosci i ziemia rolna' tab", () => {
    cy.get('a[href="/web/gov/uslugi-dla-rolnika/#obrot-ziemia"]').click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-rolnika/#obrot-ziemia"
    );
  });
});
