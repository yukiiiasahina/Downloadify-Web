``md
# **Downloadify**  

Este projeto permite que você baixe vídeos e áudios de diversas plataformas de forma rápida e eficiente.  

## 🛠️ Tecnologias Utilizadas  

- **Backend:** Python com Flask  
- **Frontend:** Next.js 14  
- **API:** Downloadify API  
- **UI:** Radix UI e Tailwind CSS  

## 📥 Como Usar  

1. **Clone o Repositório:**  
   ```bash
   git clone https://github.com/yukiiiasahina/Downloadify-Web.git
   ```

2. **Instale as Dependências:**  
   ```bash
   cd Downloadify-Web
   npm install
   ```

3. **Inicie o Servidor:**  
   ```bash
   npm run dev
   ```
   Acesse a aplicação em `http://localhost:3000`.  

## 🔑 Configurando sua API  

Para que o Downloadify funcione corretamente, você precisa fornecer sua própria chave de API no arquivo `page.tsx`.  

1. **Abra o arquivo `app/page.tsx`**  
2. **Substitua a variável de URL da API pelo seu endpoint**  

Exemplo:  

```tsx
const API_URL = "https://sua-api-aqui.com";
```

Se você quiser manter a chave de API segura, uma alternativa é usar variáveis de ambiente no Next.js. Basta criar um arquivo `.env.local` na raiz do projeto e adicionar:  

```env
NEXT_PUBLIC_API_URL=https://sua-api-aqui.com
```

Depois, no código, use:  

```tsx
const API_URL = process.env.NEXT_PUBLIC_API_URL;
```

Dessa forma, você evita expor informações sensíveis diretamente no código.  

## 🌐 Acesse Online  

Você pode acessar a versão online do Downloadify através do Vercel: [Downloadify Web](https://v0-new-project-lutganxo7ja-yukiiiasahinas-projects.vercel.app)  

## 🧩 Principais Dependências  

- [Next.js 14](https://nextjs.org/) – Framework para React  
- [React 18](https://react.dev/) – Biblioteca para construção de UI  
- [Tailwind CSS](https://tailwindcss.com/) – Estilização moderna  
- [Radix UI](https://www.radix-ui.com/) – Componentes acessíveis  
- [React Hook Form](https://react-hook-form.com/) – Gerenciamento de formulários  
- [Zod](https://zod.dev/) – Validação de schemas  

## 🧑‍💻 Contribuindo  

Contribuições são bem-vindas! Se você deseja contribuir, siga os passos abaixo:  

1. **Fork o Repositório:** Clique no botão "Fork" no canto superior direito.  
2. **Clone o Repositório Forkado:**  
   ```bash
   git clone https://github.com/seu-usuario/Downloadify-Web.git
   ```

3. **Crie uma Nova Branch:**  
   ```bash
   git checkout -b minha-feature
   ```

4. **Faça as Alterações Desejadas e Commit:**  
   ```bash
   git add .
   git commit -m "Descrição das alterações"
   ```

5. **Push para o Repositório Remoto:**  
   ```bash
   git push origin minha-feature
   ```

6. **Abra um Pull Request:** No GitHub, clique em "Compare & pull request" e siga as instruções.  

## 🚀 Problemas e Sugestões  

Caso encontre um problema ou tenha uma sugestão, sinta-se à vontade para abrir uma issue:  
🔗 [Issues](https://github.com/yukiiiasahina/Downloadify-Web/issues)  

## 📄 Licença  

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.  

## 📞 Contato  

Para mais informações ou dúvidas, entre em contato comigo:  

- **Nome:** Yuki  
- **Telegram:** [@yukiiiasahina](https://t.me/yukiiiasahina)  

Agradeço por visitar o Downloadify!  
```