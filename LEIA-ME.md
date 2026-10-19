# Onde colocar as fotos dos imóveis

Este site usa dois lugares para fotos. Os dois já estão prontos para receber
imagens reais — o "ícone de casa" e os fundos coloridos são só um placeholder
que soma automaticamente quando não há foto.

    imobiliaria/
    └── images/
        ├── imoveis/   ← fotos das casas/apartamentos/salas (capa + galeria)
        └── equipe/    ← fotos dos corretores (página Sobre)


## 1. Foto de capa dos cards (Início, Comprar, Alugar)

Cada card de imóvel tem um bloco assim no HTML:

    <a href="imovel.html" class="card__photo ph-2">
      <span class="card__status">Destaque</span>
      <svg ...>ícone...</svg>
    </a>

Para colocar uma foto real, adicione uma tag <img> logo depois da
<span class="card__status"> (ou no lugar do ícone, se não houver status):

    <a href="imovel.html" class="card__photo ph-2">
      <span class="card__status">Destaque</span>
      <img src="images/imoveis/AN-0998-1-fachada.jpg" alt="Apartamento no Jardim das Flores">
      <svg ...>ícone...</svg>
    </a>

Não precisa apagar o <svg> nem a classe "ph-2" — o CSS já esconde o ícone
sozinho assim que existe uma <img> ali dentro, e a cor de fundo (ph-1 a ph-5)
continua servindo de reserva enquanto o arquivo da foto não existir.

Isso já foi feito como exemplo no card do "Apartamento 3 quartos, vista
livre" (Cód. AN-0998) na página inicial — veja o arquivo images/imoveis/
para o nome exato esperado.


## 2. Galeria da página de detalhe (imovel.html) — "os pontos da casa"

A página do imóvel mostra 5 fotos: 1 foto grande + 4 miniaturas clicáveis
(sem JavaScript — é feito com botões de rádio escondidos). Cada uma das 5
fotos aparece em DOIS lugares no HTML: uma vez em `.dgallery__main` (a foto
grande) e uma vez em `.dgallery__thumbs` (a miniatura pequena). Use a MESMA
imagem nos dois.

Sugestão de ordem/nome de arquivo (já aplicada no exemplo do site):

    AN-0998-1-fachada.jpg   → foto de capa / fachada
    AN-0998-2-sala.jpg      → sala de estar
    AN-0998-3-quarto.jpg    → quarto principal
    AN-0998-4-cozinha.jpg   → cozinha
    AN-0998-5-banheiro.jpg  → banheiro

Troque "AN-0998" pelo código de cada imóvel e os nomes dos cômodos pelo que
fizer sentido (quintal, área gourmet, escritório, vaga de garagem etc.).
Pode ter mais ou menos que 5 fotos — basta copiar o padrão de um dos 5 blocos
`.dgallery__slide` e do `.dgallery__thumbs label` correspondente, ajustando o
número (dg1, dg2, dg3...) e o `id`/`for` de cada um.


## 3. Fotos da equipe (página Sobre)

Mesmo princípio: dentro de cada `<div class="team__photo ph-X">`, adicione
uma <img src="images/equipe/nome-sobrenome.jpg" alt="Nome do corretor">
antes do <svg>. O ícone de pessoa some sozinho quando a foto existir.


## Dicas para o site continuar rápido

- Formato: prefira **.webp** (menor e com ótima qualidade) ou .jpg comprimido.
- Tamanho: cards e miniaturas não precisam de mais que **800 px** de largura;
  a foto grande da galeria fica ótima com **1600 px** de largura.
- Peso: tente manter cada foto abaixo de **200 KB**. Ferramentas como
  squoosh.app ou tinypng.com fazem isso em segundos, sem instalar nada.
- Nomeie os arquivos sem espaços/acentos (use hífen), como nos exemplos
  acima — evita problemas de link quebrado em alguns servidores.
