# 🚀 CodeceptJS Login Automation

Automação completa do fluxo de **Login** do site http://automationpratice.com.br da **Qazando**



---

## 📌 Tecnologias utilizadas

- **Node.js**
- **CodeceptJS**
- **Playwright**
- **JavaScript**
- **GitHub Actions (CI/CD)**
- **Allure Report**
- **Faker (geração de dados dinâmicos)**
- **NPM**

---

## 🎯 Objetivo do projeto

O objetivo desta automação é validar totalmente o fluxo de login da aplicação, garantindo:

  - Login com credenciais válidas
  - Validações de campos obrigatórios
  - Mensagens de erro
  - Comportamento da aplicação em cenários inválidos
  - Navegação entre páginas
  - Robustez contra entradas inválidas

---

## 🧪 Cenários Automatizados

Este projeto cobre os seguintes cenários:

- ✅  Login com sucesso  
- ❌ Login apenas com e-mail
- ❌ Login sem e-mail e senha
- ❌ Login apenas com senha
- ❌ E-mail inválido
- ❌ Senha incorreta
- ❌ Campos com espaços em branco
- ❌ Senha vazia
- 🔁 Redirecionamento para cadastro
- 🔤 E-mail em caixa alta ( case insensitive )
- 🔐 Validação de senha mínima


Esses cenários garantem uma cobertura sólida e realista do comportamento esperado do sistema.

---
##  Arquitetura do projeto
  - Page Object Pattern → separação de responsabilidades
  - Factory Pattern → geração de dados dinâmicos com Faker
  - Hooks (Before) → reaproveitamento de setup
  - Tags (@smoke, @negative, @regression) → execução inteligente dos testes


## ⚙️ Como rodar o projeto

1️⃣ Clonar o repositório
git clone https://github.com/ChristianSouza12/codeceptjs-login-automation.git

 2️⃣ Acessar a pasta
cd codeceptjs-login-automation

 3️⃣ Instalar dependências
npm install

 4️⃣ Instalar browsers do Playwright
npx playwright install

 5️⃣ Executar os testes
npx codeceptjs run --steps


## Execução por tags

 Rodar apenas testes críticos
npx codeceptjs run --grep @smoke

 Rodar cenários negativos
npx codeceptjs run --grep @negative



## 📊 Relatórios com Allure

 Gerar relatório
npx allure generate output/allure-results --clean

 Abrir relatório
npx allure open


## 👨‍💻 Autor

**Christian Souza**
QA em desenvolvimento | Automação | Testes Funcionais | JavaScript | CodeceptJS | Cypress

🔗 GitHub: https://github.com/ChristianSouza12

🔗 LinkedIn: https://www.linkedin.com/in/christian-souzaa/


