/// <reference types="cypress" />

describe("'Dla obywatela' tab", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("a#citizens-tab").click();
    cy.get("a#citizens-tab").should("have.class", "active");
  });

  it("Checking if 'Dla obywatela' tab contains other tabs", () => {
    const expectedLabels = [
      "Dokumenty i dane osobowe",
      "Edukacja",
      "Kierowcy i pojazdy",
      "Meldunek i wybory",
      "Nieruchomości i środowisko",
      "Podatki",
      "Pomoc prawna",
      "Praca i biznes",
      "Rodzina i małżeństwo",
      "Wojsko i bezpieczeństwo",
      "Wyjazdy i wypoczynek",
      "Zasiłki i pomoc finansowa",
      "Zaświadczenia i odpisy",
      "Zdrowie i ubezpieczenia społeczne",
      "Cudzoziemiec w Polsce",
    ];

    expectedLabels.forEach((label) => {
      cy.contains("span", label).should("exist").and("be.visible");
    });
  });

  it("Redirection to the 'Dokumenty i dane osobowe' tab", () => {
    cy.get(
      'a[href="/web/gov/uslugi-dla-obywatela/#dokumenty-i-dane-osobowe"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-obywatela/#dokumenty-i-dane-osobowe"
    );
  });

  it("Redirection to the 'Edukacja' tab", () => {
    cy.get('a[href="/web/gov/uslugi-dla-obywatela/#edukacja"]').click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-obywatela/#edukacja"
    );
  });

  it("Redirection to the 'Kierowcy i pojazdy' tab", () => {
    cy.get(
      'a[href="/web/gov/uslugi-dla-obywatela/#kierowcy-i-pojazdy"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-obywatela/#kierowcy-i-pojazdy"
    );
  });

  it("Redirection to the 'Meldunek i wybory' tab", () => {
    cy.get(
      'a[href="/web/gov/uslugi-dla-obywatela/#meldunek-i-wybory"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-obywatela/#meldunek-i-wybory"
    );
  });

  it("Redirection to the 'Nieruchomosci i srodowisko' tab", () => {
    cy.get(
      'a[href="/web/gov/uslugi-dla-obywatela/#nieruchomosci-i-srodowiska"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-obywatela/#nieruchomosci-i-srodowiska"
    );
  });

  it("Redirection to the 'Podatki' tab", () => {
    cy.get('a[href="/web/gov/uslugi-dla-obywatela/#podatki"]').click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-obywatela/#podatki"
    );
  });

  it("Redirection to the 'Pomoc prawna' tab", () => {
    cy.get('a[href="/web/gov/uslugi-dla-obywatela/#pomoc-prawna"]').click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-obywatela/#pomoc-prawna"
    );
  });

  it("Redirection to the 'Praca i biznes' tab", () => {
    cy.get('a[href="/web/gov/uslugi-dla-obywatela/#praca-i-biznes"]').click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-obywatela/#praca-i-biznes"
    );
  });

  it("Redirection to the 'Rodzina i malzenstwo' tab", () => {
    cy.get(
      'a[href="/web/gov/uslugi-dla-obywatela/#rodzina-i-malzenstwo"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-obywatela/#rodzina-i-malzenstwo"
    );
  });

  it("Redirection to the 'Wojsko i bezpieczenstwo' tab", () => {
    cy.get(
      'a[href="/web/gov/uslugi-dla-obywatela/#wojsko-i-bezpieczenstwo"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-obywatela/#wojsko-i-bezpieczenstwo"
    );
  });

  it("Redirection to the 'Wyjazdy i wypoczynek' tab", () => {
    cy.get(
      'a[href="/web/gov/uslugi-dla-obywatela/#wyjazdy-i-wypoczynek"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-obywatela/#wyjazdy-i-wypoczynek"
    );
  });

  it("Redirection to the 'Zasilki i pomoc finansowa' tab", () => {
    cy.get(
      'a[href="/web/gov/uslugi-dla-obywatela/#zasilki-i-pomoc-finansowa"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-obywatela/#zasilki-i-pomoc-finansowa"
    );
  });

  it("Redirection to the 'Zaswiadczenia i odpisy' tab", () => {
    cy.get(
      'a[href="/web/gov/uslugi-dla-obywatela/#zaswiadczenia-i-odpisy"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-obywatela/#zaswiadczenia-i-odpisy"
    );
  });

  it("Redirection to the 'Zdrowie i ubezpieczenia spoleczne' tab", () => {
    cy.get(
      'a[href="/web/gov/uslugi-dla-obywatela/#zdrowie-i-ubezpieczenia-spoleczne"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-obywatela/#zdrowie-i-ubezpieczenia-spoleczne"
    );
  });

  it("Redirection to the 'Cudzoziemiec w Polsce' tab", () => {
    cy.get(
      'a[href="/web/gov/uslugi-dla-obywatela/#cudzoziemiec-w-polsce"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-obywatela/#cudzoziemiec-w-polsce"
    );
  });
});
