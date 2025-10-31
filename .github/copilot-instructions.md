## Visão rápida (o que este projeto faz)

Este é um site front-end React + Vite (TypeScript) usando Tailwind + shadcn-ui.
É uma landing page composta por componentes em `src/components` e páginas em `src/pages`.

## Como ser produtivo aqui (comandos essenciais)

- Instalar dependências: `npm i` (ou use seu gerenciador preferido)
- Rodar em dev: `npm run dev` (Vite — servidor exposto em `::` na porta 8080, veja `vite.config.ts`)
- Build: `npm run build` (ou `npm run build:dev` para build de desenvolvimento)
- Preview build: `npm run preview`
- Lint: `npm run lint` (ESLint)

## Padrões e convenções do código — importantes para um agente

- Estrutura principal: componentes reutilizáveis em `src/components`, componentes UI low-level em `src/components/ui` (shadcn-style), hooks em `src/hooks`, utilitários em `src/lib`.
- Alias de import: use `@/` mapeado para `./src` (veja `tsconfig.json` e `vite.config.ts`). Ex: `import Header from "@/components/Header"`.
- Roteamento: `src/App.tsx` usa `react-router-dom`. Adicione rotas personalizadas antes da rota catch-all (`*`) — há um comentário explícito no arquivo.
- Estado assíncrono: `@tanstack/react-query` é usado (ex.: `QueryClientProvider` em `src/App.tsx`).
- Notificações: `sonner` e um `Toaster` customizado em `src/components/ui` — siga o padrão existente ao criar novos toasters/alerts.

## Integrações e pontos de atenção

- GTM/geolocalização: `src/pages/Index.tsx` chama `pushGeoLocationData()` de `src/lib/gtm.ts` no `useEffect` — preserve a chamada quando adicionar analytics.
- Máscaras/UTM: utilitários para telefone e UTM estão em `src/lib` (`phone-mask.ts`, `utm-tracker.ts`) — reutilize-os para formulários.

## Como adicionar um componente novo (exemplo prático)

1. Criar o arquivo em `src/components/MyComponent.tsx`.
2. Se for um componente UI baixo nível reutilizável, coloque em `src/components/ui/` seguindo o padrão dos arquivos já existentes.
3. Exporte o componente como `export default` e importe com alias: `import MyComponent from "@/components/MyComponent"`.
4. Para estilos, prefira classes Tailwind; veja `index.css` e `tailwind.config.ts`.

## Exemplos de onde olhar para padrões existentes

- Layout principal / rotas: `src/App.tsx`
- Landing page e ordem de seções: `src/pages/Index.tsx` (usa `Header`, `Hero`, `Footer`, `WhatsAppButton`)
- Biblioteca de componentes: `src/components/ui/*` (padroniza inputs, dialogs, toasts, etc.)
- Utilitários: `src/lib/*` (GTM, phone-mask, utm-tracker)

## Regras práticas para pull requests/edits automatizados

- Não remova o comentário em `src/App.tsx` sobre a ordem de rotas — ele evita que rotas personalizadas sejam silenciadas pelo catch-all.
- Mantenha as importações com alias `@/` quando possível.
- Rodar `npm run lint` localmente antes de abrir PRs automatizados.

Se algo não estiver claro ou você quiser que eu acrescente exemplos de templates de componentes/PR, diga qual parte quer detalhar e eu atualizo este arquivo.
