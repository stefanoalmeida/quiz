const perguntas = [
    {
        pergunta: 'Selecione a alternativa que tem 3 tipos de materiais que são extraídos na natureza:',
        opcoes: ['casa, madeira, papel, vidro', 'madeira, plástico, papel, vidro', 'garrafa, casa, madeira, vidro'],
        correta: 'madeira, plástico, papel, vidro'
    },
    {
        pergunta: 'Qual o nome do material usado para fazer papel:',
        opcoes: ['sílica', 'celulose', 'ouro'],
        correta: 'celulose'
    },
    {
        pergunta: 'A celulose vem:',
        opcoes: ['dos metais que encontramos na natureza', 'da madeira de árvores como o eucalipto e o pinus', 'da madeira de árvores como a bananeira'],
        correta: 'da madeira de árvores como o eucalipto e o pinus'
    },
    {
        pergunta: 'Quais os metais mais comuns no nosso dia a dia?',
        opcoes: ['papel, alumínio, ferro', 'ferro, alumínio e cobre', 'madeira, ferro e cobre'],
        correta: 'ferro, alumínio e cobre'
    },
    {
        pergunta: 'Quais as propriedades dos metais?',
        opcoes: ['Formam fios, são recicláveis e não conseguem conduzir eletricidade', 'formam lâminas, conduzem calor e não são recicláveis ', 'São sólidos e apresentam brilho metálico, formam fios, são recicláveis e conduzem a eletricidade'],
        correta: 'São sólidos e apresentam brilho metálico, formam fios, são recicláveis e conduzem a eletricidade'
    },
    {
        pergunta: 'Os objetos violino e canoa são feitos de:',
        opcoes: ['Papel', 'Madeira', 'Metais', 'Vidros'],
        correta: 'Madeira'
    },
    {
        pergunta: 'Os objetos torneira e joias são feitos de:',
        opcoes: ['Papel', 'Madeira', 'Metais', 'Vidros'],
        correta: 'Metais'
    },
    {
        pergunta: 'Os objetos lâmpadas e janela do carro são feitos de:',
        opcoes: ['Papel', 'Madeira', 'Metais', 'Vidros'],
        correta: 'Vidros'
    },
    {
        pergunta: 'Os objetos caixa de papelão e sulfite são feitos de:',
        opcoes: ['Papel', 'Madeira', 'Metais', 'Vidros'],
        correta: 'Papel'
    },
    {
        pergunta: 'O papel é chamado de divisível porque ele pode ser:',
        opcoes: ['picado ou amassado', 'cortado ou amassado', 'picado ou cortado'],
        correta: 'picado ou cortado'
    },
    {
        pergunta: 'O papel é chamado de flexível porque ele pode ser: ',
        opcoes: ['dobrado ou amassado', 'cortado ou dobrado', 'picado ou cortado'],
        correta: 'dobrado ou amassado'
    },
    {
        pergunta: 'Como podemos diminuir a derrubada de árvores para produzir papel?',
        opcoes: ['usando tecidos', 'guardando os papéis usados', 'evitando o desperdício e reciclando papéis'],
        correta: 'evitando o desperdício e reciclando papéis'
    },
    {
        pergunta: 'Quando plantamos árvores em áreas desmatadas, estamos falando de:',
        opcoes: ['reciclagem', 'reflorestamento', 'desmatamento'],
        correta: 'reflorestamento'
    },
    {
        pergunta: 'O principal componente do vidro é a:',
        opcoes: ['sílica', 'celulose', 'ouro'],
        correta: 'sílica'
    },
    {
        pergunta: 'Qual o único material totalmente reciclável, que contribui para a preservação do meio ambiente?',
        opcoes: ['metais', 'papel', 'vidro'],
        correta: 'vidro'
    },
    {
        pergunta: 'Quais as propriedades do vidro:',
        opcoes: ['transparente, frágil, reciclável, impermeável e moldável', 'opaco, frágil, reciclável, permeável e moldável', 'transparente, não reciclável, impermeável e frágil'],
        correta: 'transparente, frágil, reciclável, impermeável e moldável'
    },
    {
        pergunta: 'A matéria prima do plástico vem:',
        opcoes: ['da sílica', 'do petróleo', 'da celulose'],
        correta: 'do petróleo'
    },
    {
        pergunta: 'Quais são as propriedades do plástico:',
        opcoes: ['pode ser transparente, não é reciclável, é moldável e flexível', 'pode ser transparente, é reciclável, é moldável e flexível', 'pode ser transparente, não é reciclável, nem moldável e nem flexível'],
        correta: 'pode ser transparente, é reciclável, é moldável e flexível'
    },
    {
        pergunta: 'Quais desses são exemplos de acidentes domésticos?',
        opcoes: ['fraturas, queimaduras, acidente de carro', 'acidente de moto, intoxicação, choque elétrico', 'intoxicação, choque elétrico, fraturas, queimaduras, cortes'],
        correta: 'intoxicação, choque elétrico, fraturas, queimaduras, cortes'
    },
    {
        pergunta: 'Se uma criança colocar a mão na panela que está no fogo, o que pode acontecer?',
        opcoes: ['queimadura', 'fratura', 'choque elétrico'],
        correta: 'queimadura'
    },
    {
        pergunta: 'Se o menino não obedecer a mamãe e descer a escada de skate, o que pode acontecer?',
        opcoes: ['queimadura', 'fratura', 'choque elétrico'],
        correta: 'fratura'
    },
    {
        pergunta: 'O bebê ficou sozinho na sala e colocou a mão na tomada, o que pode acontecer?',
        opcoes: ['queimadura', 'fratura', 'choque elétrico'],
        correta: 'choque elétrico'
    },
    {
        pergunta: 'Para evitar choques elétricos:',
        opcoes: ['colocar protetor nas tomadas, mudar a chave de temperatura do chuveiro quando estiver ligado', 'não deixar aparelhos elétricos contato com a água durante o seu funcionamento, soltar pipas próximos a rede elétrica', 'colocar protetor nas tomadas, não soltar pipas próximo a rede elétrica'],
        correta: 'colocar protetor nas tomadas, não soltar pipas próximo a rede elétrica'
    },
    {
        pergunta: 'Para evitar intoxicação:',
        opcoes: ['guardar produtos de limpeza longe das crianças', 'deixar os produtos de limpeza ao alcance das crianças', 'deixar os alimentos perto dos produtos de limpeza'],
        correta: 'guardar produtos de limpeza longe das crianças'
    },
    {
        pergunta: 'Para evitar queimaduras:',
        opcoes: ['não soltar fogos de artifício, manter as crianças longe do fogão, velas, fósforos', 'deixar o ferro de passar roupa perto de crianças', 'fazer comida com as crianças correndo perto do fogão'],
        correta: 'não soltar fogos de artifício, manter as crianças longe do fogão, velas, fósforos'
    },
];

