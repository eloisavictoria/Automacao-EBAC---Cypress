describe('DevFinance', () => {
it('Adicionar uma nova transação de entrada', () => {
    cy.visit('https://devfinance-agilizei.netlify.app/#')

    //get e contains. get usa o css
    cy.get('a[onclick*=open]').click()
    cy.get('#description').type('Freela')
    cy.get('#amount').type('12')
    cy.get('#date').type('2021-11-03')

    cy.contains('button', 'Salvar').click()//clicar no elemento button que tem escrito SALVAR

    cy.get('table tbody tr').should('have.length',1)//verificar quantas linhas tem na tabela. aqui estou dizendo que vou pegar a estrutura da tabela e falar que ela deveria ter X qtd de linhas

    cy.get('img[onclick*=remove]').click()
});    
});
