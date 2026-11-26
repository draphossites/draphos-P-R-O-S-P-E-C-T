# Draphos Prospect 7.0 — Live AI

1. Publique index.html, app.js e style.css na raiz do GitHub Pages.
2. Crie sua chave pessoal em https://console.groq.com/keys. Confira o plano e os preços da busca web em https://groq.com/pricing antes de usar. Gratuidade não garantida para a ferramenta de navegação.
3. Cole a chave no campo do site, informe segmento e cidade, selecione o modelo e clique em Pesquisar empresas. Não publique a chave no repositório. A chave fica apenas na página e é enviada à API Groq. Use este app pessoalmente, em uma página confiável sem scripts de terceiros. Para uso compartilhado, prefira um backend autenticado com segredo protegido.
4. Os resultados com URLs de fontes são importados diretamente na tabela. Revise todos os dados e fontes, pois a IA pode errar. WhatsApp abre mensagem para revisão e envio manual.
5. O segundo modelo é tentado em falhas recuperáveis ou ausência de contatos novos. Ambos usam a mesma conta Groq e podem compartilhar limites. Não há promessa de contornar limites.

A integração segue https://console.groq.com/docs/tool-use/built-in-tools/browser-search (GPT-OSS 120B e 20B com browser_search obrigatório). Não usa Google Maps nem redireciona a chats. A API pode recusar chamadas diretas do navegador por CORS ou permissões; nesse caso será necessário backend. Não foi testada com credencial real. Mantém dados locais da versão 6 no mesmo domínio/origem. Exporte CSV antes de atualizar.
