# Teste Prático | Software Engineer - Frontend - Next.js

## Objetivo

Construir uma aplicação web simples que exiba uma lista de produtos consumindo uma API externa, com funcionalidades de pesquisa e filtragem.

## Pré-requisitos

Antes de começar, certifique-se de atender aos seguintes requisitos:

- Você instalou a versão mais recente do Node.js
- Você tem uma máquina com Windows, Linux ou MacOS

## Instalação

Para instalar o projeto, siga estas etapas:

1. Clone o repositório:

   ```sh
   git clone https://github.com/MoisesMed/MySide-Frontend-Teste.git
   ```

2. Navegue até o diretório do projeto:

   ```sh
   cd MySide-Frontend-Teste
   ```

3. Instale as dependências:
   ```sh
   npm install
   ```
   ou, se estiver usando `yarn`:
   ```sh
   yarn install
   ```

## Uso

Para usar o projeto, siga estas etapas:

1. Inicie o servidor de desenvolvimento:

   ```sh
   npm run dev
   ```

   ou, se estiver usando `yarn`:

   ```sh
   yarn dev
   ```

2. Abra seu navegador e acesse `http://localhost:3000`.

## Funcionalidades

1. **Exibição dos produtos**:

   - A página principal (`pages/index.js`) exibe a lista de produtos em um layout de grid.
   - Para cada produto, são exibidos a imagem, o nome, o preço e uma breve descrição.

2. **Pesquisa e filtragem**:

   - Barra de pesquisa para buscar produtos pelo nome.
   - Dropdown ou conjunto de checkboxes para filtrar os produtos por categoria.

3. **Detalhamento de Produto**:

   - Ao clicar em um produto, o usuário é levado para uma página de detalhes do produto (`pages/products/[id].js`), onde mais informações sobre o produto são exibidas (ex.: descrição completa, preço, categoria).

4. **Estilização**:

   - Utilização de CSS Modules ou Styled Components para estilizar a aplicação.
   - A aplicação é responsiva e oferece uma boa experiência de usuário tanto em desktop quanto em dispositivos móveis.

5. **Testes**:
   - Implementação de testes utilizando Jest e React Testing Library.

## Contato

Se você tiver alguma dúvida, entre em contato com `br.moises2605@gmail.com`.
