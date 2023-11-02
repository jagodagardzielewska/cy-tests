/// <reference types="cypress" />

describe("'Dla przedsiebiorcy' tab", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("a#business-tab").click();
    cy.get("a#business-tab").should("have.class", "active");
  });

  it("Redirection to the 'Tarcza antykryzysowa' tab", () => {
    cy.get(
      'a[href="https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#tarcza-antykryzysowa"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#tarcza-antykryzysowa"
    );
  });

  it("Redirection to the 'Zakladanie firmy' tab", () => {
    cy.get(
      'a[href="https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#zakladanie-firmy"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#zakladanie-firmy"
    );
  });

  it("Redirection to the 'Rozwoj firmy' tab", () => {
    cy.get(
      'a[href="https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#rozwoj-firmy"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#rozwoj-firmy"
    );
  });

  it("Redirection to the 'Pracownicy w firmie' tab", () => {
    cy.get(
      'a[href="https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#pracownicy-w-firmie"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#pracownicy-w-firmie"
    );
  });

  it("Redirection to the 'Podatki i ksiegowosc' tab", () => {
    cy.get(
      'a[href="https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#podatki-i-ksiegowosc"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#podatki-i-ksiegowosc"
    );
  });

  it("Redirection to the 'Ubezpieczenia spoleczne' tab", () => {
    cy.get(
      'a[href="https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#ubezpieczenia-spoleczne"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#ubezpieczenia-spoleczne"
    );
  });

  it("Redirection to the 'Sprawy urzedowe' tab", () => {
    cy.get(
      'a[href="https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#sprawy-urzedowe"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#sprawy-urzedowe"
    );
  });

  it("Redirection to the 'Obowiazki przedsiebiorcy' tab", () => {
    cy.get(
      'a[href="https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#obowiazki-przedsiebiorcy"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#obowiazki-przedsiebiorcy"
    );
  });

  it("Redirection to the 'Zwolnienia, koncesje, rejestry' tab", () => {
    cy.get(
      'a[href="https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#zezwolenia-koncesje-rejestry"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#zezwolenia-koncesje-rejestry"
    );
  });

  it("Redirection to the 'Uprawnienia zawodowe' tab", () => {
    cy.get(
      'a[href="https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#uprawnienia-zawodowe"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#uprawnienia-zawodowe"
    );
  });

  it("Redirection to the 'Zmiany w firmie' tab", () => {
    cy.get(
      'a[href="https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#zmiany-w-firmie"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#zmiany-w-firmie"
    );
  });

  it("Redirection to the 'Zawieszenie i wznowienie' tab", () => {
    cy.get(
      'a[href="https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#zawieszenie-i-wznowienie"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#zawieszenie-i-wznowienie"
    );
  });

  it("Redirection to the 'Zamykanie firmy' tab", () => {
    cy.get(
      'a[href="https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#zamykanie-firmy"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#zamykanie-firmy"
    );
  });

  it("Redirection to the 'Sprzedaz i marketing' tab", () => {
    cy.get(
      'a[href="https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#sprzedaz-i-marketing"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#sprzedaz-i-marketing"
    );
  });

  it("Redirection to the 'Kontrahenci i klienci' tab", () => {
    cy.get(
      'a[href="https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#kontrahenci-i-klienci"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#kontrahenci-i-klienci"
    );
  });

  it("Redirection to the 'Handel zagraniczny' tab", () => {
    cy.get(
      'a[href="https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#handel-zagraniczny"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#handel-zagraniczny"
    );
  });

  it("Redirection to the 'Prowadzenie biznesu w UE' tab", () => {
    cy.get(
      'a[href="https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#prowadzenie-biznesu-w-ue"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#prowadzenie-biznesu-w-ue"
    );
  });

  it("Redirection to the 'Inwestycje budowlane' tab", () => {
    cy.get(
      'a[href="https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#inwestycje-budowlane"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#inwestycje-budowlane"
    );
  });

  it("Redirection to the 'Cudzoziemcy w Polsce' tab", () => {
    cy.get(
      'a[href="https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#cudzoziemcy-w-polsce"]'
    ).click();
    cy.url().should(
      "eq",
      "https://www.gov.pl/web/gov/uslugi-dla-przedsiebiorcy/#cudzoziemcy-w-polsce"
    );
  });
});
