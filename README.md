# Âncora Imóveis

Site estático para apresentar imóveis à venda e para locação e encaminhar consultas ao WhatsApp.

## Rodar localmente

Abra `html/index.html` no navegador. O projeto usa HTML, CSS e JavaScript sem etapas de instalação ou build. Para publicar em um servidor estático, preserve os diretórios `html/`, `css/` e `script/` e use `html/index.html` como página inicial.

## Manter o catálogo

- Atualize o card e seu código em `html/comprar.html` ou `html/alugar.html`. O atributo `data-category` controla os filtros por tipo. Atualize as contagens dos filtros ao adicionar ou remover imóveis.
- Só o anúncio AN-0998 tem ficha própria. Ao cadastrar outro imóvel sem ficha, use um link de WhatsApp com o código correto na mensagem.
- Consulte o [guia de fotos](LEIA-ME.md) para adicionar arquivos reais.
- Revise o telefone, o número do WhatsApp em `script/main.js` e nos links HTML e os dados comerciais antes da publicação.

## Verificar alterações

1. Na página inicial, teste a busca de compra e locação com e sem uma categoria.
2. Nas listagens, confira se as contagens batem com os cards visíveis e se cada consulta contém o código do imóvel.
3. No anúncio e na ficha, preencha o formulário com dados fictícios e confira a mensagem preparada antes de enviá-la.
4. Em uma janela estreita, use Tab, Espaço e Escape para testar o menu. Na ficha, use as setas para trocar o item selecionado na galeria.
