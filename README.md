Teste Front-End Júnior — Econverse

Projeto desenvolvido para o teste técnico de Front-End Júnior da Econverse.

A proposta foi reproduzir a página inicial de um e-commerce a partir do layout fornecido no Figma, utilizando React, TypeScript e Sass. O projeto inclui vitrines de produtos carregados via JSON e um modal para visualizar os detalhes de cada produto.

Tecnologias

React

TypeScript

Vite

Sass (SCSS)

HTML e CSS

O que foi desenvolvido

Home seguindo o layout do Figma.

Header, banner principal e categorias.

Três vitrines de produtos com carrossel.

Consumo do JSON fornecido pela Econverse.

Modal com informações do produto selecionado.

Seções de parceiros, marcas, newsletter e footer.

Responsividade para desktop e mobile.

Os componentes foram separados por responsabilidade, com seus respectivos arquivos de estilo em SCSS.

O carrossel exibe quatro produtos por vez no desktop e um por vez no mobile, com navegação pelas setas.

Como executar

Para rodar o projeto, é necessário ter o Node.js e o npm instalados.

Clone o repositório:

git clone https://github.com/joaogeovani/teste-front-end-econverse.git

Entre na pasta e instale as dependências:

cd teste-front-end-econverse
npm install

Inicie o projeto:

npm run dev

Acesse o endereço informado pelo Vite no terminal, normalmente:

http://localhost:5173/

No Windows, caso o PowerShell bloqueie o comando npm, é possível utilizar npm.cmd run dev.

Build

Para compilar o projeto:

npm run build

O comando verifica o TypeScript e gera os arquivos de produção na pasta dist/.

Para visualizar a versão compilada localmente:

npm run preview

O Vite disponibiliza um endereço local para acessar a aplicação, normalmente:

http://localhost:4173/

Testes

Não foram configurados testes automatizados. Os testes foram realizados manualmente, verificando:

Responsividade em desktop e mobile.

Navegação entre os produtos nas vitrines.

Abertura e fechamento do modal.

Exibição das informações do produto selecionado.

Carregamento dos produtos durante o desenvolvimento.

Também foram executados os comandos npm run build e npm run preview para validar a compilação e a abertura da versão de produção.

Dados dos produtos

Os produtos são carregados a partir do JSON disponibilizado pela Econverse:

JSON de produtos

Para evitar problemas de CORS durante o desenvolvimento, utilizei um proxy configurado no Vite. As requisições feitas para /api/produtos.json são encaminhadas ao endereço original.

O proxy está configurado para o servidor de desenvolvimento (npm run dev). O comando npm run preview permite visualizar o build, mas não utiliza automaticamente essa configuração de proxy.

Estrutura do projeto

src/
├── assets/
├── components/
│   ├── Brands/
│   ├── Categories/
│   ├── Footer/
│   ├── Header/
│   ├── Hero/
│   ├── Newsletter/
│   ├── Partners/
│   ├── ProductCard/
│   ├── ProductModal/
│   └── Products/
├── App.tsx
├── index.css
└── main.tsx

Layout de referência

Figma — Teste Front-End Júnior

Versão

0.2.0

Autor

João Geovani de Camargo

GitHub
