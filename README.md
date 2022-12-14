# UserFront

O sistema tem como objetivo Cadastrar e Listar usuários
Abaixo segue uma descrição das ferramentas utilizadas e a usabilidade do sistema

## Banco de Dados

Postgres 12
Obs: É necessario criar um banco com nome de user. A tabela de usuário não é necessario pois o JPA se encarrega de criar automaticamente

## Back-End

Utilizado Spring Boot 3.0

Processo de importação
Clonar o projeto 
https://github.com/alenarciso/user-back.git
IDE utilizada Intellij
Importar
File - Open e selecionar a pasta do projeto
Em seguida, para que o projeto reconheça o gerenciador de dependência Maven
File - New - Project from existing source
Selecionar o projeto e clicar em ok
Na tela seguinte selecionar Maven e em seguida clicar em create
Aguardar carregar as dependencias e na sequencia executar clicando em Run na barra superior da IDE

## Front-End

Ter o node instalado
Versão utilizada v19.1.0

IDE utilizada VSCode
Processo de importação
Clonar o projeto 
https://github.com/alenarciso/user-front.git
Importar
Menu Arquivo - Importar pasta
selecionar o projeto
No terminado acessar a pasta do projeto e executar
npm install para instalaras dependencias
Em seguida npm start para iniciar a aplicação

Acessar a url localhor:4200

## Utilização do sistema

No menu lateral consta duas opções
Cadastrar Usuários e Listar Usuários.

Cadastrar Usuários
A tela contem os campos Nome, Sobrenome, Usuario, Senha, Email e Ativo.
Os campos Nome, Usuário e Senha são obrigatórios.
O campo data do registro é gerada automaticamente no momento da inserção

OBS: Não foi feito a validação dos campos Email e Telefone
     o campo Senha não foi criptografado

Ao clicar em salvar o sistema redirecionará para a tela de Lista de Usuário apresentando o novo registro.
Ao clicar em voltar o sistema redirecionará para a tela de Lista de Usuário

Listar Usuários
Apresenta um grid com os usuários cadastrados.
Para cada registro contém as opções de Excluir e Editar
Ao clicar em Excluir será exibido uma mensagem de confirmação.
Ao clicar em Editar a tela de Cadastro será chamada com os campos preenchidos permitindo a edição.

A parte superior possui opção de filtar usuários pelo Nome, Usuário ou Email.
Ao clicar em Filtrar os registros serão filtrados e mostrados no grid.

