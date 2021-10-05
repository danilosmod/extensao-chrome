const interval = setInterval(() => {
    const div = document.querySelector("#menu");
    if(div) {
        clearInterval(interval)
    
        var myParent = div

//Create array of options to be added
var array = ["Selecione o motivo do cancelamento",
"Perda de formatação, matéria enviada através do editor de texto do Sistema Diário. Favor enviar a matéria como anexo, no formato RTF(Formato Rich Text).",
"Favor NÃO enviar a matéria dentro da caixa de texto do Word ou outro editor de texto.",
"Excesso de caixa alta (letra maiúscula). Favor enviar o mínimo de caixa alta.",
"O arquivo apresenta erros de caracteres (trucagem de dados). Favor revisar e enviar novamente.",
"Arquivo corrompido. Favor revisar e enviar novamente.",
"Balanço patrimonial deve ser enviado obrigatoriamente no formato PDF. Favor entrar no site: http://www.iof.mg.gov.br e verificar as Normas para Envio de Matérias.",
"Arquivo em formato de imagem (dentro de caixa de texto ou digitalizado). Favor digitar a matéria no word e enviar no formato RTF(Formato Rich Text).",
"Matéria contendo recursos automáticos. Favor NÃO utilizar recursos automáticos de editores de texto. Matérias enviadas para publicação devem ser digitadas utilizando somente o teclado.",
"Matéria Cancelada por motivos técnicos. Favor enviar novamente.",
"Favor retirar os recursos automáticos, como ##ATO, ##TEX, ##DAT, ##CAR, ##ASS, dentre outros.",
"Referência à lei no meio da matéria. Favor colocar a referência à lei ou decreto acima da matéria e somente uma vez.",
"Conteúdo dentro de tabela. Favor digitar a matéria no documento em branco do word e enviar no formato RTF(Formato Rich Text).",
"Perda de formatação. Matéria enviada em 3 colunas, Favor selecionar 4 colunas.",
"Favor colocar o nome do responsável pelo ato somente no final da matéria.",
"Conteúdo da matéria maior que a capacidade de carácter da caixa de texto. Favor enviar em PDF ou RTF fora da tabela.",
"Favor colocar o assunto da matéria em letras maiúsculas acima do conteúdo da matéria. Ex: EXTRATO DE CONTRATO/EXTRATO DE CONVÊNIO/AVISO DE LICITAÇÃO.",
"Favor retirar a identificação das matérias de expediente. Expediente não precisa vir identificado e sim com a assinatura do responsável pelo Ato abaixo da matéria.",
"Perda de formatação, favor retirar o papel timbrado e enviar apenas o conteúdo a ser publicado.",
"Matéria contendo erro ao abrir o arquivo. Favor digitar o conteúdo em um arquivo do word (novo - tamanho A4), sem determinar a largura e altura na régua. Favor retirar os símbolos de 'maior (&gt;)' e 'menor (&lt;)' dos endereços eletrônicos.",
"Favor retirar o nome do órgão, pois o mesmo tem vinheta.",
"Matéria com conteúdo oculto, favor enviar somente o conteúdo a ser publicado.",
"Devido ao Decreto nº:47.654 de 27 de maio de 2019, JUSTIFICATIVA DE GTE não possui necessidade de publicação no Diário Oficial.",
"Conforme* OFÍCIO SEGOV/GAB N° 144/2020 e INFORMATIVO SIOMG N° 03/2020, a partir do dia 18 de maio de 2020 esse(s) atos deverão ser tramitados somente por meio do Sistema de Processamento de Atos - SIPA.",
"Favor começar a matéria com o nome da Prefeitura ou Câmara, logo em seguida o assunto principal e abaixo o restante do conteúdo.<br> EX:<br> <strong> PREFEITURA MUNICIPAL DE XXX XXXXXX<br> EXTRATO DE CONTRATO Nº XX/xx.</strong> <br> Torna público o extrato de contrato Nº xxxxxx.<br>",
"Favor digitar o texto seguindo o padrão ortográfico correto, enviar somente letra maiúscula no início do texto e em nomes próprios.",
"Favor encaminhar a matéria identificando o órgão somente no primeiro extrato.",
"De acordo com o  Decreto Estadual n. 48.175/2021, todas as matérias de Órgãos Municipais devem começar identificada como o nome do órgão e logo em seguida o assunto principal .",
"Favor começar a matéria identificando como título, o nome da Câmara/Prefeitura em letra maiúscula e negrito, abaixo do título o assunto principal da matéria em letra maiúscula. EX: PREFEITURA MUNICIPAL DE XXXXXXXX - EXTRATO DE CONTRATO Nº XX/xx.",
"Favor retirar o artigo (A) antes do nome do órgão. Escrever o nome da Prefeitura ou câmara por extenso, em letra maiúscula e em negrito acima do conteúdo.",
"Favor começar a matéria identificando-a com o nome da EMPRESA/ÓRGÃO/PESSOA FÍSICA em letra maiúscula e negritada.",
"Favor retirar o artigo (A/O) antes do nome da EMPRESA/ÓRGÃO/PESSOA FÍSICA. Favor começar a matéria com o nome da EMPRESA/ÓRGÃO/PESSOA FÍSICA em letra maiúscula e negritada acima do conteúdo.",
"Favor colocar como título na matéria, quando pessoa física: TERMO DE COMPROMISSO ENTRE O IEF E XXXXXXX XXXXXXXX.",
"Favor começar a matéria identificando com o nome da COMARCA, exemplo: COMARCA DE BELO HORIZONTE, em letra maiúscula e negritada.",
"PDF fora dos padrões. Favor enviar o arquivo no formato RTF(Formato Rich Text).",
"Favor colocar o nome da EMPRESA em letra maiúscula e negrito.",
"PDF tem que ter no mínimo 10cm de altura. Favor enviar o arquivo no formato RTF.",
"Arquivo PDF tem que vir cercado por bordas que o delimitam. Favor corrigir.",
"A fonte padrão é TIMES NEW ROMAN, tamanho 6 e entrelinhas 6 ptos. Favor verificar o PDF e corrigir.",
"Favor enumerar as páginas no canto superior direito do arquivo dentro da borda. Exemplo (PDF de 5 págs.) 1/5, 2/5, etc.",
"Favor enviar o PDF cortado no tamanho exato (sem sangrias brancas), no tamanho e largura corretos.",
"De acordo com o  Decreto Estadual n. 48.175/2021, não serão mais aceitos PDF´s com largura de 19cm, favor formatar o PDF em 12,5cm (2 colunas) ou 25,5cm (4 colunas).",
"Arquivo PDF criado a partir de imagem ou bloqueado. Favor enviar o arquivo desbloqueado para conferência dos padrões.",
"Calha menor que 0,5cm. As colunas devem ser separadas por calhas de 0,5cm exato.",
"Favor colocar o nome da empresa no início da matéria, centralizado, respeitando as colunas.",
"O arquivo PDF precisa ter calha de 0,5cm exato separando cada coluna.",
"Favor dividir o texto corrido em 3 ou 4 colunas.",
"Texto com espaçamento entre caracteres condensado. O espaçamento tem que ser zero (0). Favor verificar todo o conteúdo do PDF.",
"Favor retirar todo o Itálico do texto.",
"Texto comprimido. Favor manter o espaçamento entre linhas de seis(6) pontos. Favor verificar todo o conteúdo do PDF.",
"PDF contendo sublinhado em bloco/linha inteira do texto. Favor usar o sublinhado somente para destacar uma palavra.",
"Texto comprimido. Favor enviar o pdf dentro dos padrões e enviar também no mesmo pedido o arquivo em rtf.",
"Texto comprimido. Favor manter as escalas dos caracteres em 100%. Favor verificar todo o conteúdo do PDF.",
""];

//Create and append select list
var escolha = document.createElement("select");
//escolha.id = "escolha";
//escolha.class = "escolha"
escolha.setAttribute("id","escolha")
escolha.setAttribute("class","escolha")
myParent.appendChild(escolha);

escolha.addEventListener("change",() => {
    const select = document.querySelector(".escolha")
    const textArea = document.querySelector(".text")

    textArea.value += " " + escolha.value + " Dúvidas, entrar em contato Via WhatsApp através dos telefones (31)3916-7008 / (31)3916-7400 / (31)3916-7094 / (31)3916-7084 ou por email: diario@governo.mg.gov.br.";
})

//Create and append the options
for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    
    if(i==0){
        option.setAttribute("selected","true");
        option.setAttribute("diasbled","disabled");
    }else if(i>0 && i<24){
        option.setAttribute("class","diversos");
    } else if(i >= 24 && i < 34){
        option.setAttribute("class","particulares");
    } else if(i>=34){
        option.setAttribute("class","pdf");
    }
    
    option.value = array[i];
    option.text = array[i];
    
    escolha.appendChild(option);
        }
    }
    
},1000)

