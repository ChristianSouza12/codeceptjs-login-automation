const LoginPage = require("../pages/LoginPage")
const userFactory = require("../factories/userFactory")

Feature('login');

Before(({ I }) => {
    I.amOnPage("/")
    I.click("Login")
})

Scenario('Login com credenciais válidas devem ser realizada com sucesso!', ({ I }) => {

    LoginPage.login("teste@teste.com", "123456")
    LoginPage.seeSuccess()

}).tag('@login').tag('@smoke') // principal

Scenario('Login apenas com email deve exibir erro de senha obrigatória.', ({ I }) => {

    const user = userFactory.createUser()
    LoginPage.login(user.email,"")
    LoginPage.seeErrorPassword()

}).tag('@login').tag('@negative')

Scenario('Login sem email e sem senha deve exibir mensagem de email inválido.', ({ I }) => {

    I.waitForElement('#user', 5);
    LoginPage.login("" , "")
    LoginPage.seeErrorEmail()

}).tag('@login').tag('@negative')

Scenario('Login apenas com senha deve exibir mensagem de email inválido.', ({ I }) => {

    const user = userFactory.createUser()
    LoginPage.login("" , user.password)
    LoginPage.seeErrorEmail()

}).tag('@login').tag('@negative')

Scenario('Login com email em formato inválido deve exibir mensagem de email inválido.', ({ I }) => {

    const user = userFactory.createUser()
    LoginPage.login("testetes.com" , user.password)
    LoginPage.seeErrorEmail()

}).tag('@login').tag('@negative')

Scenario('Login com senha incorreta deve exibir mensagem de senha inválida', ({ I }) => {

    const user = userFactory.createUser()
    LoginPage.login(user.email, "12345")
    LoginPage.seeErrorPassword()

}).tag('@login').tag('@negative')

Scenario('Login com campos preenchidos com espaços deve exibir mensagem de email inválido.', ({ I }) => {

    LoginPage.login("           " , "        ")
    LoginPage.seeErrorEmail()

}).tag('@login').tag('@negative')

Scenario('Login com email válido e senha vazia deve exibir mensagem de senha inválida', ({ I }) => {

    const user = userFactory.createUser()
    LoginPage.login(user.email , "")
    LoginPage.seeErrorPassword()

}).tag('@login').tag('@negative')

Scenario('Clique em criar conta deve ser redirecionado para tela de cadastro', ({ I }) => {

    I.amOnPage("http://automationpratice.com.br/login");
    I.click('#createAccount');
    I.waitForText('Cadastro de usuário',5)

}).tag('@login').tag('@regression')

Scenario('Login com email em caixa alta deve ser aceito corretamente.', ({ I }) => {

    const uppercaseEmail = userFactory.createUppercaseEmail();
    LoginPage.login(uppercaseEmail, "123456");
    LoginPage.seeSuccess();

}).tag('@login').tag('@regression')

Scenario('Login com senha fraca deve exibir mensagem de senha inválida.', ({ I }) => {

    const user = userFactory.createUser()
    LoginPage.login(user.email, "123")
    LoginPage.seeErrorPassword()

}).tag('@login').tag('@negative')