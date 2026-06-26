# PlantShop - Loja Online de Plantas Domésticas

Um aplicativo de carrinho de compras moderno para uma loja online de plantas, desenvolvido com React e Redux.

## 🌱 Características

- **Página Inicial**: Design atrativo com imagem de fundo e informações da empresa
- **Catálogo de Produtos**: 6 plantas exclusivas organizadas em 3 categorias
- **Carrinho de Compras**: Funcionalidade completa de gerenciamento de itens
- **Interface Responsiva**: Otimizada para desktop, tablet e mobile
- **Gerenciamento de Estado**: Redux para controle eficiente do estado da aplicação

## 🛠️ Tecnologias Utilizadas

- **React 18**: Biblioteca principal para interface de usuário
- **Redux Toolkit**: Gerenciamento de estado global
- **React Router**: Navegação entre páginas
- **CSS3**: Estilização moderna com gradientes e animações

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/plant-shop-cart.git
cd plant-shop-cart
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm start
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 🚀 Deploy

### Opção 1: Netlify (Recomendado)

1. Faça push do código para o GitHub
2. Acesse [netlify.com](https://netlify.com)
3. Clique em "New site from Git"
4. Conecte sua conta do GitHub
5. Selecione seu repositório
6. Configure:
   - Build command: `npm run build`
   - Publish directory: `build`
7. Clique em "Deploy site"

### Opção 2: Vercel

1. Faça push do código para o GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "Import Project"
4. Conecte sua conta do GitHub
5. Selecione seu repositório
6. Clique em "Deploy"

### Opção 3: GitHub Pages

1. Instale o gh-pages: `npm install --save-dev gh-pages`
2. Adicione no package.json:
```json
"homepage": "https://seu-usuario.github.io/plant-shop-cart",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
3. Execute: `npm run deploy`

## 🚀 Funcionalidades

### Página Inicial
- ✅ Imagem de fundo atrativa
- ✅ Informações sobre a empresa
- ✅ Nome da empresa destacado
- ✅ Botão "Começar Compras" com navegação

### Página de Produtos
- ✅ 6 plantas domésticas exclusivas
- ✅ Organização em 3 categorias (Folhagens Grandes, Suculentas, Flores)
- ✅ Filtros por categoria
- ✅ Botões "Adicionar ao Carrinho" funcionais
- ✅ Desabilitação do botão após adicionar ao carrinho
- ✅ Atualização do contador do carrinho

### Cabeçalho
- ✅ Exibido em todas as páginas
- ✅ Ícone do carrinho com contador de itens
- ✅ Navegação entre páginas

### Página do Carrinho
- ✅ Exibição do número total de plantas
- ✅ Cálculo do custo total
- ✅ Informações detalhadas de cada item (imagem, nome, preço)
- ✅ Botões de aumento e diminuição de quantidade
- ✅ Botão de remoção de itens
- ✅ Botão de checkout (mensagem "Em breve")
- ✅ Botão "Continuar Comprando"

## 📱 Responsividade

O aplicativo é totalmente responsivo e funciona perfeitamente em:
- 🖥️ Desktop (1200px+)
- 📱 Tablet (768px - 1199px)
- 📱 Mobile (até 767px)

## 🎨 Design

- **Paleta de Cores**: Verde natural (#2d5a27) como cor principal
- **Tipografia**: Fontes do sistema para melhor performance
- **Animações**: Transições suaves e hover effects
- **Layout**: Grid e Flexbox para organização responsiva

## 📂 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.js
│   └── Header.css
├── pages/
│   ├── LandingPage.js
│   ├── LandingPage.css
│   ├── ProductsPage.js
│   ├── ProductsPage.css
│   ├── CartPage.js
│   └── CartPage.css
├── store/
│   ├── index.js
│   └── cartSlice.js
├── data/
│   └── plants.js
├── App.js
├── App.css
├── index.js
└── index.css
```

## 🔧 Scripts Disponíveis

- `npm start`: Inicia o servidor de desenvolvimento
- `npm build`: Cria build de produção
- `npm test`: Executa os testes
- `npm eject`: Ejecta da configuração do Create React App


