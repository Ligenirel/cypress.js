describe('Проверка покупки нового аватара для своего тренера', function () {

     it('Верный логин и верный пароль', function () {
         cy.visit('https://pokemonbattle.ru/');
        
         cy.get('#k_email').type('USER_LOGIN') 
         cy.get('#k_password').type('USER_PASSWORD') 
         cy.get('.MuiButton-root').click();

         cy.get('.header_card_trainer').click();

         cy.get('[data-qa="shop"]').click();

         cy.get(':nth-child(8) > .shop__button').click();

         cy.get('.card_number').type('4620869113632996');                     
         cy.get('.card_csv').type('125');                             
         cy.get('.card_date').type('1226');                           
         cy.get('.card_name').type('BAS');
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
         
         cy.get('.threeds_number').type('56456');                            
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();   
         cy.contains('Покупка прошла успешно').should('be.visible');
          
         cy.get('.style_1_base_link_blue').click();


        })
})