/// <reference types="cypress" />

describe("Buscar CEP na API dos correios", () => {
  it("Buscar CEP Válido", () => {
    const cep = "01001000";
    cy.ConsultarCEP(cep).then((res) => {
      expect(res.status).to.be.eq(200);
      expect(res.body).not.be.null;
      expect(res.body.bairro).to.be.eq("Sé");
      expect(res.body.cep).to.be.eq("01001-000");
      expect(res.body.complemento).to.be.eq("lado ímpar");
      expect(res.body.ddd).to.be.eq("11");
      expect(res.body.gia).to.be.eq("1004");
      expect(res.body.ibge).to.be.eq("3550308");
      expect(res.body.localidade).to.be.eq("São Paulo");
      expect(res.body.logradouro).to.be.eq("Praça da Sé");
      expect(res.body.siafi).to.be.eq("7107");
      expect(res.body.uf).to.be.eq("SP");
    });
  });

  it("Buscar CEP Inválido", () => {
    const cep = "950100100";
    cy.ConsultarCEP(cep).then((res) => {
      expect(res.status).to.be.eq(400);
      expect(res.body).not.be.null;
    });
  });

  it("Buscar CEP Inexistente", () => {
    const cep = "99999999";
    cy.ConsultarCEP(cep).then((res) => {
      expect(res.status).to.be.eq(200);
      expect(res.body).not.be.null;
      expect(res.body.erro).to.be.eq("true");
    });
  });
});
