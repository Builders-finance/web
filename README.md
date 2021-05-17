# Builders Finance (Angular)

<p align="center">
 <a href="https://platformbuilders.io">
    <img src="https://github.com/Builders-finance/server/blob/master/builder.png" alt="Logo" width="200" height="200">
 </a>
</p>

## Descrição do Projeto
<p align="center">Este é um projeto em Angular 2+ (v. 11) base para servir de padrão e depósito de funcionalidades e utillidades reaproveitáveis.</p>

<h4 align="center"> 
	🚧  Em construção...  🚧
</h4>

## ✍ Features 

### Área externa (não logada): 
- [x] Home
- [x] Cadastro de usuário
- [x] Autenticação (login) de usuário

### Área Interna (logada):
- [x] Home
- [x] Lista e gráficos de despesas agrupadas por categorias.
- [x] Lista e gráfico de despesas por categoria. 
- [x] Cadastro de despesas
- [x] Logout


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

## 🎲  Executar

```bash
# Clone este repositório
$ git clone <https://github.com/Builders-finance/web.git>
# Vá para a pasta server
$ cd web
# Instale as dependências
$ npm install
$ ng serve
# O serviço inciará na porta:4200 - acesse <http://localhost:4200>
```

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Angular](https://angular.io/)
- [Angular Cli](https://angular.io/cli)

## 🔥 Pacotes Externos

- @angular/material - Framework baseado no Google Material para padronização de layout e componentes.
- @angular/material-moment-adapter - Para utilizar o componente MatDatePicker com o momentjs.
- @fortawesome/angular-fontawesome - Pacote oficial do FontAwesome para Angular
- @ng-bootstrap/ng-bootstrap e bootstrap - Framework bootstrap e seus componentes já em diretivas.
PS.: Deve-se atentar que o bootstrap está no projeto apenas para uso de suas "facilidades", como as grids, helpers, fexbox, etc. Nunca jamais misturar componentesde
de interface do Material com Bootstrap.
- chart.js - Pacote para geração dos gráficos.
- moment - Pacote para uso e manipulação de datas.
- ngx-mask - Pacote para facilitar a exibição de campos com formatação.
- ngx-spinner - Pacote utilizado para gerar o loading UNIVERSAL do sistema. Ao requisitar qualquer página HTTP ele é exibido automáticamente pelo interceptor.

## 🤝  Compartilháveis

1) Validators: Todos os validadores customizáveis devem ser reutilizáveis e inseridos na pasta: shared/validators. 
  Hoje existem: 
    - CNPJValidator e CPFValidator - Validar se um CNPJ/CPF são válidos. 
    Como usar:

    ```
      this.form = this.formBuilder.group({
      id: [null],
      cnpj: [null, [Validators.required, cnpjValidator]]
      });
    ```

    ou diretamente no componente:
    ```
    constructor(private cpfCnpjValidator: CpfCnpjValidator) { }

    ngOnInit() {
      console.log(this.cpfCnpjValidator.validateCPF('00331948151'))
    }
    ```
    PS.: Lembrando que o validator retorna TRUE, se inválido.

  - CompareTwoFieldsValidator - Utilizado para comparar dois campos em um formulário.

  ```
  this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    }, {validator: [compareTwoFieldsValidator('password', 'passwordConfirm')]});
  ```
  PS.: Lembrando que esse validator deve ser usado no grupo do formulário, pois ele pegará o CONTROL do formulário e não apenas de um campo.

2) Services
  - AutoCompleteService - Serviço criado para utilizar o componente MatAutoComplete, ele utiliza um padrão para realizar as montagens e buscas do componente.
  Exemplo de como usar: *'./internal/components/new-expense/new-expense-component.ts'*
  - HttpService - este serviço foi criado com o untuito de "sobrescrever" os métodos HTTP (get, post, put e delete) do HttpClient, qualquer coisa que precise ser feita "antes" das requisições poderemos fazer nesta classe. Ela é um dos serviços que fazem parte de um rol para que seja reaproveitado uma grande quantidade de códigos.
  
3) Interceptors
  Foram criados 2 interceptors:
  - HttpRequestInterceptor: é executado em todas as requisições HTTP, onde "automaticamente" são injetados (e removidos, na conclusão) os Loading das páginas. Evitando que em todo service tivessemos algo do tipo: this.loading = true e this.loading = false e um monte de código dentro dos templates.

  - HttpErrorInterceptor: é executado em todas as requisições HTTP, mas neste caso este "observa" os erros retornados. Quando uma mensagem é recuperada do retorno, o sistema monta o componente de TOAST e exibe o erro na tela. 

4) Pipes
  Pré-processamentos que precisam ser feitos antes dos dados serem exibidos em tela. 
  - FirstLastName: No menu superior, onde deveria ser exibido o nome do usuário, formatamos o nome para utilizar apenas o primeiro e o último nome do usuári. Como usar: {{user.name | firstLastName}}
  - groupBy: Na lista de despesas por categoria, existia um requisito de mostrar todas as despesas agrupadas por DATA, esta PIPE pode ser utilizada para retornar o array agrupado por uma chave. E também pode ser retornado o totalizador. Ex.: *ngFor="let grp of array | groupBy: 'chaveAgrupadora':'chaveTotalizadora'"

5) Guard

As rotas internas são "protegidas" por um guard que verifica que existe token válido para um usuário, se não tiver o usuário é redirecionado para o login.

6) Módulos compartilhados

Alguns módulos do sistemas são reutilizáveis, as fonts do FontAwesome devem ser importadas uma a uma para uso no sistema, a ideia é ter um módulo com as fontes usadas e importar em um único módulo todas as fontes. Mas é claro que se no seu módulo for utilizado apenas uma font, não será necessário importar o módulo inteiro.

O mesmo acontece para os componentes do AngularMaterial, que devem ser importados a medida que serão utilizados.

### Estrutura:

```
|-- external
  |-- [+] components
    |-- component1.component .|html|scss|spec|.ts
    |-- component2.component .|html|scss|spec|.ts
  |-- [+] pages
      |-- page1
          |-- page1.component .|html|scss|spec|.ts
          |-- page1.service.ts
          |-- page1.module.ts
          |-- page1.routes.ts
|-- external.module.ts

|-- internal
  |-- [+] components
    |-- component1.component .|html|scss|spec|.ts
    |-- component2.component .|html|scss|spec|.ts
  |-- [+] pages
      |-- page1
          |-- page1.component .|html|scss|spec|.ts
          |-- page1.service.ts
          |-- page1.module.ts
          |-- page1.routes.ts
  |-- internal.module.ts

|-- shared
  |-- [+] components
  |-- [+] mocks
  |-- [+] models
  |-- [+] directives
  |-- [+] pipes
  |-- [+] services
  |-- [+] validators
  |-- shared.module.ts

|-- app.module.ts
|-- app.component.ts
```
