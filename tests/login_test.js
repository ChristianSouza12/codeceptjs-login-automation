Feature('login');

Scenario('Login com sucesso',  ({ I }) => {

    I.amOnPage("http://automationpratice.com.br/");
    I.click('Login')
    I.fillField('#user','teste@teste.com')
    I.fillField('#password','123456')
    I.click('#btnLogin')
    I.waitForText('Login realizado',5)

}) // .tag('@Sucesso') // Usar a tag para rodar esse cenário específico.

Scenario('Tentando Logar digitando apenas o e-mail',  ({ I }) => {

    I.amOnPage("http://automationpratice.com.br/");
    I.click('Login')
    I.fillField('#user','teste@teste.com')
    I.click('#btnLogin')
    I.waitForText('Senha inválida.',5)


});

Scenario('Tentando logar sem digitar e-mail e senha',  ({ I }) => {

    I.amOnPage("http://automationpratice.com.br/");
    I.click('Login')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.',5)

});

Scenario('Tentando Logar digitando apenas a senha',  ({ I }) => {

    I.amOnPage("http://automationpratice.com.br/");
    I.click('Login')
    I.fillField('#password','123456')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.',5)

});

Scenario('Email inválido formatado incorretamente',  ({ I }) => {

    I.amOnPage("http://automationpratice.com.br/");
    I.click('Login')
    I.fillField('#user','testeteste.com')
    I.fillField('#password','123456')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.',5)

});

Scenario('Senha incorreta',  ({ I }) => {

    I.amOnPage("http://automationpratice.com.br/");
    I.click('Login')
    I.fillField('#user','teste@teste.com')
    I.fillField('#password','12345')
    I.click('#btnLogin')
    I.waitForText('Senha inválida.',5)

});

Scenario('Campos preenchidos com espaços em branco',  ({ I }) => {

    I.amOnPage("http://automationpratice.com.br/");
    I.click('Login')
    I.fillField('#user','      ')
    I.fillField('#password','     ')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.',5)

});

Scenario('E-mail válido e senha vazia',  ({ I }) => {

    I.amOnPage("http://automationpratice.com.br/");
    I.click('Login')
    I.fillField('#user','teste@teste.com')
    I.fillField('#password','')
    I.click('#btnLogin')
    I.waitForText('Senha inválida.',5)

});


Scenario('Link “Ainda não tem conta?” redireciona corretamente',  ({ I }) => {

    I.amOnPage("http://automationpratice.com.br/login");
    I.click('#createAccount');
    I.waitForText('Cadastro de usuário',5)

});

Scenario('Campo de e-mail sensível a letras maiúsculas/minúsculas',  ({ I }) => {

    I.amOnPage("http://automationpratice.com.br/");
    I.click('Login')
    I.fillField('#user','TESTE@TESTE.COM')
    I.fillField('#password','123456')
    I.click('#btnLogin')
    I.waitForText('Login realizado',5)

});

Scenario('Validação de força mínima da senha',  ({ I }) => {

    I.amOnPage("http://automationpratice.com.br/");
    I.click('Login')
    I.fillField('#user','teste@teste.com')
    I.fillField('#password','123')
    I.click('#btnLogin')
    I.waitForText('Senha inválida.',5)

});