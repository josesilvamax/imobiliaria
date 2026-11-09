# Fotos dos imóveis e da equipe

O catálogo inclui ilustrações para os imóveis sem foto. Crie os diretórios abaixo no mesmo nível de `html/` ao incluir suas imagens reais.

    imobiliaria/
    ├── html/
    └── images/
        ├── imoveis/
        └── equipe/

## Capas dos cards

Dentro do elemento `.card__photo`, insira a imagem antes do SVG e após o selo de destaque, quando houver.

    <img src="../images/imoveis/AN-0998-1-fachada.jpg"
         alt="Fachada do apartamento no Jardim das Flores"
         loading="lazy">

Mantenha a classe de fundo e o SVG. O CSS esconde a ilustração quando o card contém uma imagem.

## Galeria da ficha

Em `html/imovel.html`, adicione cada foto à sua `.dgallery__slide` e use o mesmo arquivo na miniatura correspondente. A foto grande precisa de uma descrição em `alt`. Na miniatura, use `alt=""`, pois o botão de rádio já identifica o ambiente. Preserve o vínculo entre o `id` do rádio e o atributo `for` da miniatura.

## Fotos da equipe

Em `html/sobre.html`, insira uma imagem em cada `.team__photo` e use um caminho como `../images/equipe/nome-sobrenome.jpg`. Forneça um texto alternativo quando a imagem trouxer informação além do nome exibido no card.

## Dicas para o site continuar rápido

- Formato: prefira **.webp** (menor e com ótima qualidade) ou .jpg comprimido.
- Tamanho: cards e miniaturas não precisam de mais que **800 px** de largura;
  a foto grande da galeria fica ótima com **1600 px** de largura.
- Peso: tente manter cada foto abaixo de **200 KB**. Ferramentas como
  squoosh.app ou tinypng.com fazem isso em segundos, sem instalar nada.
- Nomeie os arquivos sem espaços/acentos (use hífen), como nos exemplos
  acima — evita problemas de link quebrado em alguns servidores.
