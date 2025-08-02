describe('Проверка авторизации', function () {

     it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/');

cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

        cy.get('#mail').type('german@dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click();

        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#messageHeader').should('be.visible');

        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

        })
})

describe('Восстановления пароля', function () {

     it('Забыли пароль и валидный емейл', function () {
        cy.visit('https://login.qa.studio/');

cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

        cy.get('#forgotEmailButton').click();
        cy.get('#forgotForm > .header').contains('Восстановите пароль');
        cy.get('#forgotForm > .header').should('be.visible');

        cy.get('#mailForgot').type('Puzin.96@mail.ru')
        cy.get('#restoreEmailButton').click();

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#messageHeader').should('be.visible');

        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

        })
})

describe('Проверка авторизации', function () {

     it('Верный логин и НЕверный пароль', function () {
        cy.visit('https://login.qa.studio/');

cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

        cy.get('#mail').type('german@dolnikov.ru')
        cy.get('#pass').type('Cool_Vadim')
        cy.get('#loginButton').click();

        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');

        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    
        })
})

describe('Проверка авторизации', function () {

     it('НЕверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');

cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

        cy.get('#mail').type('Cool_Vadim@man.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click();

        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');

        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    
        })
})

describe('Проверка авторизации', function () {

     it('Ввести логин без @', function () {
        cy.visit('https://login.qa.studio/');

cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

        cy.get('#mail').type('Cool_Vadimman.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click();

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#messageHeader').should('be.visible');

        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    
        })
})

describe('Проверка авторизации', function () {

     it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/');

cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

        cy.get('#mail').type('GerMan@Dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click();

        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#messageHeader').should('be.visible');

        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
        
        })
})