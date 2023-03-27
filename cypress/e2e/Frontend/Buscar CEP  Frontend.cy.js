/// <reference types="cypress" />

describe("Buscar CEP no site dos Correios", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Buscar CEP Válido", () => {
    cy.get("#relaxation").clear().type("04387210");
    cy.get(
      '[style="order: 1"] > form > .campo > .bt-link-ic > .ic-busca-out'
    ).click();
    const cepEndereco = "04387-210";
    cy.RetornoBusca(cepEndereco);

    cy.get("h5").should("contain", "Resultado da Busca por Endereço ou CEP");
    cy.get('tbody > tr > [data-th="Logradouro/Nome"]').should(
      "contain",
      "Rua José Pompeu"
    );
    cy.get('tbody > tr > [data-th="Bairro/Distrito"]').should(
      "contain",
      "Cidade Domitila"
    );
    cy.get('tbody > tr > [data-th="Localidade/UF"]').should(
      "contain",
      "São Paulo/SP"
    );
    cy.get('tbody > tr > [data-th="CEP"]').should("contain", "04387-210");
    cy.get("#btn_nbusca").should("be.visible");
  });

  it("Buscar CEP Inválido", () => {
    cy.get("#relaxation").clear().type("20930‑041");
    cy.get(
      '[style="order: 1"] > form > .campo > .bt-link-ic > .ic-busca-out'
    ).click();
    const cepEndereco = "20930‑041";
    cy.RetornoBusca(cepEndereco);

    cy.get("#mensagem-resultado").should(
      "contain",
      "Não há dados a serem exibidos"
    );

    cy.get("#btn_nbusca").should("be.visible");
  });

  it("Buscar CEP Válido fora de São Paulo", () => {
    cy.get("#relaxation").clear().type("21515000");
    cy.get(
      '[style="order: 1"] > form > .campo > .bt-link-ic > .ic-busca-out'
    ).click();
    const cepEndereco = "21515000";
    cy.RetornoBusca(cepEndereco);

    cy.get("h5").should("contain", "Resultado da Busca por Endereço ou CEP");
    cy.get('tbody > tr > [data-th="Logradouro/Nome"]').should(
      "contain",
      "Avenida Brasil - de 20004 a 22326 - lado par"
    );
    cy.get('tbody > tr > [data-th="Bairro/Distrito"]').should(
      "contain",
      "Barros Filho"
    );
    cy.get('tbody > tr > [data-th="Localidade/UF"]').should(
      "contain",
      "Rio de Janeiro/RJ"
    );
    cy.get('tbody > tr > [data-th="CEP"]').should("contain", "21515-000");
    cy.get("#btn_nbusca").should("be.visible");
  });

  it("Buscar CEP Válido - Exemplo renderizando a nova aba na mesma página ", () => {
    cy.get(
      "#content > div.mais-acessados > div > div.card-destaque-normal.flex > div:nth-child(2) > form"
    )
      .should("have.attr", "action")
      .then((action) => {
        cy.visit(action);
        cy.get("#endereco").clear().type("04387-210");
        cy.get("#btn_pesquisar").click();
        cy.get("h5").should(
          "contain",
          "Resultado da Busca por Endereço ou CEP"
        );
        cy.get('tbody > tr > [data-th="Logradouro/Nome"]').should(
          "contain",
          "Rua José Pompeu"
        );
        cy.get('tbody > tr > [data-th="Bairro/Distrito"]').should(
          "contain",
          "Cidade Domitila"
        );
        cy.get('tbody > tr > [data-th="Localidade/UF"]').should(
          "contain",
          "São Paulo/SP"
        );
        cy.get('tbody > tr > [data-th="CEP"]').should("contain", "04387-210");
        cy.get("#btn_nbusca").should("be.visible");
      });
  });
});
