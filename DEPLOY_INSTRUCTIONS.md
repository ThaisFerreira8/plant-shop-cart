# 🌐 Instruções de Deploy - PlantShop

## 📋 Pré-requisitos

1. Conta no GitHub
2. Conta no Netlify ou Vercel (gratuitas)
3. Git instalado no seu computador

## 🚀 Passo a Passo Completo

### 1. Preparar o Repositório GitHub

```bash
# Inicializar o repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit: PlantShop - Loja online de plantas"

# Conectar ao repositório remoto (substitua pela sua URL)
git remote add origin https://github.com/SEU-USUARIO/plant-shop-cart.git

# Fazer push para o GitHub
git branch -M main
git push -u origin main
```

### 2. Deploy no Netlify (Recomendado)

1. **Acesse**: [netlify.com](https://netlify.com)
2. **Clique em**: "New site from Git"
3. **Conecte**: Sua conta do GitHub
4. **Selecione**: Seu repositório `plant-shop-cart`
5. **Configure**:
   - Build command: `npm run build`
   - Publish directory: `build`
   - Node version: `18` (se solicitado)
6. **Clique em**: "Deploy site"
7. **Aguarde**: O deploy (2-3 minutos)
8. **Copie**: A URL gerada (ex: `https://amazing-plant-shop.netlify.app`)

### 3. Deploy no Vercel (Alternativa)

1. **Acesse**: [vercel.com](https://vercel.com)
2. **Clique em**: "Import Project"
3. **Conecte**: Sua conta do GitHub
4. **Selecione**: Seu repositório `plant-shop-cart`
5. **Clique em**: "Deploy"
6. **Aguarde**: O deploy (1-2 minutos)
7. **Copie**: A URL gerada (ex: `https://plant-shop-cart.vercel.app`)

## 🔗 URLs para o Projeto

Após o deploy, você terá:

- **Repositório GitHub**: `https://github.com/SEU-USUARIO/plant-shop-cart`
- **Site Live**: `https://seu-site.netlify.app` (ou .vercel.app)

## ✅ Verificação Final

Antes de enviar, teste:

1. **GitHub**: Repositório público e acessível
2. **Site**: Carrega corretamente em `https://`
3. **Funcionalidades**: 
   - Navegação entre páginas
   - Adicionar produtos ao carrinho
   - Gerenciar itens no carrinho
   - Responsividade em mobile

## 🎯 Informações para o Envio

**Título do projeto**: PlantShop - Loja Online de Plantas Domésticas

**URL do GitHub**: `https://github.com/SEU-USUARIO/plant-shop-cart`

**URL do Site**: `https://seu-site.netlify.app` (ou .vercel.app)

## 🆘 Solução de Problemas

### Erro de Build
- Verifique se todas as dependências estão no `package.json`
- Execute `npm run build` localmente para testar

### Site não carrega
- Verifique se a URL tem `https://`
- Aguarde alguns minutos para o DNS propagar

### Problemas com GitHub
- Certifique-se que o repositório é público
- Verifique se todos os arquivos foram commitados
