/// <reference types="Cypress" />

Cypress.Commands.add("ConsultarCEP", (cep) => {
  cy.request({
    method: "GET",
    url: `https://viacep.com.br/ws/${cep}/json/`,
    failOnStatusCode: false,
    headers: {
      "content-Type": "application/json",
    },
  });
});

Cypress.Commands.add("RetornoBusca", (cepEndereco) => {
  cy.visit("https://buscacepinter.correios.com.br/");
  cy.get("#endereco").type(cepEndereco);
  cy.get("#btn_pesquisar").click();
});
