
const { I } = inject()


class LoginPage {
    fields = {
        email:"#user",
        password:"#password",
        loginButton : "#btnLogin"

    }
    acessPage(){
        I.amOnPage("/login")
    }
    fillEmail(email){
        I.fillField(this.fields.email , email)
    }
    fillPassword(password){
        I.fillField(this.fields.password , password)
    }
    submit(){
        I.click(this.fields.loginButton)
    }
    login(email,password){
        this.fillEmail(email)
        this.fillPassword(password)
        this.submit()
    }
    seeSuccess(){
        I.waitForText("Login realizado", 5)
    }
    seeErrorEmail(){
        I.waitForText("E-mail inválido.", 5)
    }
    seeErrorPassword(){
        I.waitForText("Senha inválida.",5 )
    }
}
module.exports = new LoginPage()