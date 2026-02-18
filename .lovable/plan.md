
## Alteração do Subtítulo no Hero Section

### O que será alterado

Apenas uma linha de texto no arquivo `src/components/HeroSection.tsx`, no parágrafo de subtítulo localizado abaixo do título principal.

**Texto atual:**
> "Construímos estratégias que levam empresas a outro patamar. Com dados, criatividade e uma metodologia que já gerou mais de ."

**Texto novo:**
> "Construímos estratégias que levam empresas a outro nível. Com dados, criatividade e uma metodologia que transforma ideias em resultados sólidos no universo digital"

### Arquivo a ser editado

- `src/components/HeroSection.tsx` — substituição do conteúdo do parágrafo `<p>` do subtítulo, mantendo a estilização atual (`text-slate-400`, destaque em `text-white font-medium` para "dados, criatividade").

### Technical Details

O trecho atual tem um `<span>` destacando "dados, criatividade". A nova versão manterá esse destaque visual nas mesmas palavras, ajustando apenas o restante do texto ao redor.
