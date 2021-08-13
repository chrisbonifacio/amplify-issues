describe("Sign In", () => {
  it("visits the site", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test-id="signin"]').within(() => {
      cy.get('input[name="username"]')
        .type("chris")
        .should("have.value", "chris");
      cy.get('input[name="password"]')
        .type("Hello123")
        .should("have.value", "Hello123");
      cy.get("button").click();
    });
  });
});
