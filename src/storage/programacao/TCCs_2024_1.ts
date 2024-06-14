enum enum_tcc {
  TCC1 = 1,
  TCC2
}

enum enum_titulacoes {
  DR = 1,
  ESP,
  MSC,
  POS_DR,
  ENG_AGRONOMA,
  ENG_AGRONOMO,
  GRAD,
  ARQ, 
  VAZIO
}


enum enum_cursos {  
  CIENCIA_DA_COMPUTACAO = 1,
  AGRONOMIA,
  CIENCIAS_AERONAUTICAS,
  ENGENHARIA_CIVIL,
  ENGENHARIA_DE_COMPUTACAO,
  ENGENHARIA_DE_CONTROLE_E_AUTOMACAO,
  ENGENHARIA_DE_PRODUCAO,
  ENGENHARIA_ELETRICA,
  ARQUITETURA_E_URBANISMO,
  DESIGN
}

const cursos : { [key in enum_cursos]: string } = {
  [enum_cursos.CIENCIA_DA_COMPUTACAO] : "Ciência da Computação",
  [enum_cursos.AGRONOMIA] : "Agronomia",
  [enum_cursos.CIENCIAS_AERONAUTICAS] : "Ciências Aeronáuticas",
  [enum_cursos.ENGENHARIA_CIVIL] : "Engenharia Civil",
  [enum_cursos.ENGENHARIA_DE_COMPUTACAO] : "Engenharia de Computação",
  [enum_cursos.ENGENHARIA_DE_CONTROLE_E_AUTOMACAO] : "Engenharia de Controle e Automação",
  [enum_cursos.ENGENHARIA_DE_PRODUCAO] : "Engenharia de Produção",
  [enum_cursos.ENGENHARIA_ELETRICA] : "Engenharia Elétrica",
  [enum_cursos.ARQUITETURA_E_URBANISMO] : "Arquitetura e Urbanismo",
  [enum_cursos.DESIGN] : "Design"
};

const titulacoes : { [key in enum_titulacoes]: string } = {
  [enum_titulacoes.DR] : "Dr(a).",
  [enum_titulacoes.ESP] : "Esp.",
  [enum_titulacoes.MSC] : "Msc.",
  [enum_titulacoes.POS_DR] : "Pós Dr(a).",
  [enum_titulacoes.ENG_AGRONOMA] : "Eng. Agrônoma",
  [enum_titulacoes.ENG_AGRONOMO] : "Eng. Agrônomo",
  [enum_titulacoes.GRAD] : "Grad.",
  [enum_titulacoes.ARQ] : "Arq.",
  [enum_titulacoes.VAZIO] : "",
}




let TCCs = [

  {
    title: "COMO O BUSINESS INTELLIGENCE PODE CONTRIBUIR NA PREVENÇÃO DE CONTRATOS COM RISCO EM ÓRGÃOS PÚBLICOS",
    titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
    orientador: "ANDRE LUIZ ALVES",
    estudantes: "Matheus Gomes dos Santos Araújo", //se tiver mais de 1, separar por ;
    warning: "", //deixe vazio
    date: "17/06",
    time: "09:00-10:30",
    place: "Auditório 1, área II",
    titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
    nomePrimeiroMembroBanca: "Vicente Paulo de Camargo",
    titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
    nomeSegundoMembroBanca: "Ronaldo Lopes de Oliveira",
    titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
    nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
    curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
    tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
},
{
  title: "PREDIÇÃO DO RISCO DE CRÉDITO EM INSTITUIÇÕES FINANCEIRAS UTILIZANDO MACHINE LEARNING",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  orientador: "ANIBAL SANTOS JUKEMURA",
  estudantes: "Guilherme Freire Magalhães", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "17/06",
  time: "21:15-22:00",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "LUCILIA GOMES RIBEIRO",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
},
{
  title: "CREFIDE: APLICAÇÃO WEB PARA GERENCIAMENTO DE FIDELIDADE COMERCIAL",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  orientador: "ANIBAL SANTOS JUKEMURA",
  estudantes: "LUIZ AUGUSTO VIEIRA BOSCO", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "17/06",
  time: "18:45-20:15",
  place: "Sala 401, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "CARMEN CECILIA CENTENO",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "VICENTE PAULO DE CAMARGO",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
},
{
  title: "Análise de motores da aviação de pequeno e médio porte e a sua influência na segurança de voo",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  orientador: "ANNA PAULA BECHEPECHE",
  estudantes: "Miguel Artur Aresi da Silva", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "17/06",
  time: "10:45-12:15",
  place: "Sala 401, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Salmen Chaquip Bukzem",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "Raul Francé Monteiro",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
},
{
  title: "Filosofia on condition: melhoria na confiabilidade e disponibilidade da frota",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  orientador: "RAUL FRANCE MONTEIRO",
  estudantes: "Isabella Sabino Batista", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "17/06",
  time: "07:15-08:45",
  place: "Sala 401, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Tammyse Araújo da Silva",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "Andreluiz da Silva Fernandes",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
},
{
  title: "Bem-estar emocional e fadiga: um estudo sobre os profissionais das linhas aéreas brasileiras",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  orientador: "RAUL FRANCE MONTEIRO",
  estudantes: "José Coimbra Freire Neto", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "17/06",
  time: "09:00-10:30",
  place: "Sala 401, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Nagi Hanna S. Costa",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "Tammyse Araújo da Silva",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
},
{
  title: "ANÁLISE DINÂMICA E DECISÃO DA EVOPATRANSPIRAÇÃO DAS PLANTAS DURANTE SEU CRESCIMENTO",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  orientador: "BRUNO QUIRINO DE OLIVEIRA",
  estudantes: "JULLIARD LEMOS PEREIRA FILHO; IAN BORGES DE ANDRADE AFONSO ARTIAGA", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "17/06",
  time: "11:30-12:15",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Antonio Marcos de Melo",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.ENGENHARIA_DE_CONTROLE_E_AUTOMACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
},
{
  title: "ANÁLISE PREDITIVA COM INTELIGENCIA ARTIFICAL PARA O CÁLCULO DE ETO DINÂMICO",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  orientador: "BRUNO QUIRINO DE OLIVEIRA",
  estudantes: "ERICK PEREIRA DE SOUZA; ROBERTO GERAIS FREITAS", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "17/06",
  time: "10:45-11:30",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Antonio Marcos de Melo",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.ENGENHARIA_DE_CONTROLE_E_AUTOMACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
},
{
  title: "Dimensionamento de Nobreak e Banco de Bateria",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  orientador: "BRUNO QUIRINO DE OLIVEIRA",
  estudantes: "Gabriel Caetano Montijo de Sousa", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "17/06",
  time: "09:45-10:30",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Antonio Marcos de Melo",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.ENGENHARIA_ELETRICA], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
},
{
  title: "AUTOMAÇÃO DE OPERAÇÕES EM UMA PEQUENA FÁBRICA DE FERTILIZANTES À BASE DE CÁLCIO: UM ESTUDO DE CASO",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  orientador: "BRUNO QUIRINO DE OLIVEIRA",
  estudantes: "LEONARDO ROCHA RODRIGUES", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "17/06",
  time: "07:15-08:45",
  place: "Sala 407, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Carlos Alberto Vasconcelos Bezerra",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "Antonio Marcos de Melo Medeiros",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.ENGENHARIA_DE_CONTROLE_E_AUTOMACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
},
{
  title: "SISTEMA DE MONITORAMENTO DISTRIBUÍDO E ANÁLISE DE DADOS EM AMBIENTES VIRTUAIS",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  orientador: "GILDENOR DE SOUZA AMORIM CAVALCANTE",
  estudantes: "Vinícius Rodrigues Ferreira e Silva", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "17/06",
  time: "21:15-22:00",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Solange da Silva",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
},
{
  title: "EFICIÊNCIA ENERGÉTICA EM TREINAMENTO DE MODELOS DE IA EM NUVEM",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  orientador: "GUSTAVO SIQUEIRA VINHAL",
  estudantes: "VITOR FRANÇA", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "17/06",
  time: "09:00-10:30",
  place: "Sala 402, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Carlos Alexandre Ferreira de Lima",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "Rafael Leal Martins",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
},
{
  title: "DEPLOY DE UMA APLICAÇÃO DE GESTÃO DE RESTAURANTE UTILIZANDO A PRÁTICA DE DEVOPS",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  orientador: "RAFAEL LEAL MARTINS",
  estudantes: "MATHEUS GUILHERME SOUZA SANTANA", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "17/06",
  time: "10:45-12:15",
  place: "Sala 403, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Olegário Correa da Silva Neto",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "Solange da Silva",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
},
{
  title: "USO DE INTELIGÊNCIA ARTIFICIAL PARA DIAGNÓSTICOS MÉDICOS",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  orientador: "SOLANGE DA SILVA",
  estudantes: "Daniel Pires Torres", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "17/06",
  time: "19:30-20:15",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.POS_DR], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Clarimar Jose Coelho",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
},
{
  title: "UM ESTUDO SOBRE SOLUÇÕES DE ATAQUES CIBERNÉTICO COM SIEM COM FOCO NA PLATAFORMA SPLUNK",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  orientador: "SOLANGE DA SILVA",
  estudantes: "MAILODI VIEIRA SABATH", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "17/06",
  time: "20:30-21:15",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Gildenor de Souza Amorim Cavalcante",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
},
{
  title: "Sistema construtivo utilizando tijolo de solo-cimento (tijolo ecológico), em casas residenciais - estudo de caso",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  orientador: "ADRIANE BORGES DE PAULA COUTO",
  estudantes: "Laura Soares Matos", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "18/06",
  time: "09:00-09:45",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Edson Nishi",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
},
{
  title: "Sistema construtivo utilizando tijolo de solo-cimento (tijolo ecológico), em casas residenciais - estudo de caso",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  orientador: "ADRIANE BORGES DE PAULA COUTO",
  estudantes: "Mariana Sousa Lôbo", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "18/06",
  time: "09:00-09:45",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Edson Nishi",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
},
{
  title: "Método executivo de casas populares no sistema de paredes de concreto",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  orientador: "ADRIANE BORGES DE PAULA COUTO",
  estudantes: "Natânny Bueno Almeida", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "18/06",
  time: "10:45-11:30",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Edson Nishi",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
},
{
  title: "Estudo mercadológico imobiliário, como auxílio à tomada de decisão do padrão construtivo de empreendimentos, na cidade de Goiânia",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  orientador: "ADRIANE BORGES DE PAULA COUTO",
  estudantes: "Pedro Victor Paula Silva", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "18/06",
  time: "07:15-08:45",
  place: "Auditório 2, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Manoel da Silva Álvares",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "Edson Nishi",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
},
{
  title: "ANÁLISE COMPARATIVA DOS MÉTODOS DE PROTENSÃO DO CONCRETO: PRÉ TENSÃO / PÓS TENSÃO",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  orientador: "PAULO JOSE MASCARENHAS RORIZ",
  estudantes: "CARLOS EDUARDO DE OLIVEIRA SEABRA", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "18/06",
  time: "13:30-14:15",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "EDSON NISHI",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
},
{
  title: "ANÁLISE COMPARATIVA DOS MÉTODOS DE PROTENSÃO DO CONCRETO: PRÉ TENSÃO / PÓS TENSÃO",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  orientador: "PAULO JOSE MASCARENHAS RORIZ",
  estudantes: "DAVI PRADO LUZ DE ARAÚJO", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "18/06",
  time: "13:30-14:15",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "EDSON NISHI",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
},
{
  title: "A REALIDADE EM CONSTANTE DEFORMIDADE: CIÊNCIA DE DADOS APLICADA A ANÁLISE DE FAKE NEWS NO BRASIL",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "ANDRE LUIZ ALVES",
  estudantes: "Gustavo Dias Martins",
  warning: "",
  date: "18/06",
  time: "09:00-10:30",
  place: "Auditório 3, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP],
  nomePrimeiroMembroBanca: "Nágela Bitar Lôbo",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "Fabricio Schlag",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "Websocket como solução para entrega de lances em tempo real em uma aplicação web de leilões",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "ANGELICA DA SILVA NUNES",
  estudantes: "ALUISIO LUCIO DOS SANTOS NETO",
  warning: "",
  date: "18/06",
  time: "20:30-22:00",
  place: "Sala 401, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Fernando Gonçalves Abadia",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "Rafael Leal Martins",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "PRINCIPAIS VANTAGENS DO REUSO DA ÁGUA DE LAVAGEM DOS FILTROS DA ETA MEIA PONTE, EM GOIÂNIA,NOS PERÍODOS DE ESTIAGEM.",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "PAULO JOSE MASCARENHAS RORIZ",
  estudantes: "GABRIEL ALVES CARVALHO NOMINATO",
  warning: "",
  date: "18/06",
  time: "11:30-12:15",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "VIVIANE VAZ MONTEIRO",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_CIVIL],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "AVALIAÇÃO DE TECNOLOGIA DE MONITORAMENTO ESTRUTURAL EM OBRAS DE GRANDE PORTE",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "PAULO JOSE MASCARENHAS RORIZ",
  estudantes: "GABRIEL FONSECA DE FREITAS",
  warning: "",
  date: "18/06",
  time: "14:15-15:00",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "EDSON NISHI",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_CIVIL],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "Como a Inteligência Artificial pode ajudar no Cenário Pós-cirúrgico",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "FABRICIO SCHLAG",
  estudantes: "BRUNO HENRIQUE DE OLIVEIRA CARDOSO",
  warning: "",
  date: "18/06",
  time: "09:00-09:45",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR],
  nomePrimeiroMembroBanca: "CARMEN CECILIA CENTENO",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR],
  nomeSegundoMembroBanca: "NILSON CARDOSO AMARAL",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "FERRAMENTAS PARA AUXILIAR BOAS PRÁTICAS NO DESENVOLVIMENTO ÁGIL DE SOFTWARE",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "FABRICIO SCHLAG",
  estudantes: "OCTAVIO DE COUTO SOARES",
  warning: "",
  date: "18/06",
  time: "14:15-15:00",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "JOSE RICARDO COSME LERIAS RIBEIRO",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR],
  nomeSegundoMembroBanca: "SOLANGE DA SILVA",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "ANÁLISE DE ATAQUES DE RANSOMWARE: IDENTIFICAÇÃO E MEDIDAS DE SEGURANÇA EFETIVAS",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "FERNANDO GONCALVES ABADIA",
  estudantes: "SAMUEL BERNARDES DE SOUZA",
  warning: "",
  date: "18/06",
  time: "20:30-22:00",
  place: "Sala 402, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Lucília Gomes Ribeiro",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "Rafael Leal Martins",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "PRINCIPAIS VANTAGENS DO REUSO DA ÁGUA DE LAVAGEM DOS FILTROS DA ETA MEIA PONTE, EM GOIÂNIA,NOS PERÍODOS DE ESTIAGEM.",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "PAULO JOSE MASCARENHAS RORIZ",
  estudantes: "Marcus Vinícius dos Santos",
  warning: "",
  date: "18/06",
  time: "11:30-12:15",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "VIVIANE VAZ MONTEIRO",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_CIVIL],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "RECONHECIMENTO FACIAL PARA SEGURANÇA RESIDENCIAL: ABORDAGENS COM REDES NEURAIS CONVOLUCIONAIS",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "RAFAEL LEAL MARTINS",
  estudantes: "AUGUSTO VAZ RODRIGUES",
  warning: "",
  date: "18/06",
  time: "09:00-10:30",
  place: "Sala 403, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Ana Flavia Marinho de Lima Garrote",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "Gustavo Siqueira Vinhal",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "MONITORAMENTO DE REDES DE COMPUTADORES UTILIZANDO GRAFANA",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR],
  orientador: "SOLANGE DA SILVA",
  estudantes: "GABRIEL DE CASTRO GONÇALVES",
  warning: "",
  date: "18/06",
  time: "10:45-12:15",
  place: "Sala 402, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR],
  nomePrimeiroMembroBanca: "Fabio Barbosa Rodrigues",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "Wilmar Oliveira de Queiroz",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "SEGURANÇA E PRIVACIDADE NO IOT EM AMBIENTES DE SAÚDE: AJUSTANDO AS PRÁTICAS À LGPD.",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR],
  orientador: "SOLANGE DA SILVA",
  estudantes: "MATHEUS RODRIGUES TENAGLIA",
  warning: "",
  date: "18/06",
  time: "18:45-20:15",
  place: "Sala 402, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Lucília Gomes Ribeiro",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "Aníbal dos Santos Jukemura",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "DESENVOLVIMENTO AMADOR DE JOGOS ATRAVÉS DA ENGENHARIA DE SOFTWARE",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR],
  orientador: "SOLANGE DA SILVA",
  estudantes: "NAEL BARRETO MARQUES",
  warning: "",
  date: "18/06",
  time: "09:00-09:45",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Fernando Gonçalves Abadia",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "Os impactos da implementação de drones em aeroportos",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR],
  orientador: "ANNA PAULA BECHEPECHE",
  estudantes: "Caio Fartolino da Silva",
  warning: "",
  date: "18/06",
  time: "07:15-08:45",
  place: "Sala 407, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP],
  nomePrimeiroMembroBanca: "Salmen Chaquip Bukzem",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "Paulo José Gonzaga Ribeiro",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "PERCEPÇÃO E APLICABILIDADE DOS JOGOS DE SIMULAÇÃO NO TREINAMENTO DE PILOTO PRIVADO E PILOTO COMERCIAL DE AVIÃO",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR],
  orientador: "ANNA PAULA BECHEPECHE",
  estudantes: "Igor Franklin Fernandes Santos",
  warning: "",
  date: "18/06",
  time: "09:00-10:30",
  place: "Sala 407, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP],
  nomePrimeiroMembroBanca: "Andreluiz da Silva Fernandes",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR],
  nomeSegundoMembroBanca: "Anna Paula Bechepeche",
  titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.ESP],
  nomeTerceitoMembroBanca: "Salmen Chaquip Bukzem",
  curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "Fatores contribuintes em acidentes aéreos brasileiros: um estudo sobre o segmento envolvido no transporte aeromédico e aspectos do desempenho humano",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "RAUL FRANCE MONTEIRO",
  estudantes: "José Alves de Menezes",
  warning: "",
  date: "18/06",
  time: "09:00-10:30",
  place: "Sala 401, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR],
  nomePrimeiroMembroBanca: "Nagi Hanna S. Costa",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP],
  nomeSegundoMembroBanca: "Tammyse Araújo da Silva",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "Narcisismo na aviação: relações de poder abusivo no cockpit",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "RAUL FRANCE MONTEIRO",
  estudantes: "Estênio Ramos Gomes",
  warning: "",
  date: "18/06",
  time: "10:45-12:15",
  place: "Sala 401, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR],
  nomePrimeiroMembroBanca: "Nagi Hanna S. Costa",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP],
  nomeSegundoMembroBanca: "Tammyse Araújo da Silva",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE DE GESTÃO NA VACINAÇÃO DE GADO",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "ANDRE LUIZ ALVES",
  estudantes: "André Duarte de Paula",
  warning: "",
  date: "19/06",
  time: "14:15-15:00",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Joriver Rodrigues Canêdo",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "PROGRAMA AUXILIAR DE COMPRAS TECNOLÓGICAS",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "ANDRE LUIZ ALVES",
  estudantes: "Paulo Henrique Leão de Oliveira",
  warning: "",
  date: "19/06",
  time: "15:15-16:00",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Joriver Rodrigues Canêdo",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "Desenvolvimento de robô para automação de investimentos na bolsa de valores utilizando indicadores técnicos",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "ANGELICA DA SILVA NUNES",
  estudantes: "CLAUDIO BERTINI BATISTA",
  warning: "",
  date: "19/06",
  time: "10:45-12:15",
  place: "Sala 401, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.POS_DR],
  nomePrimeiroMembroBanca: "Leonardo Guerra de Rezende Guedes",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP],
  nomeSegundoMembroBanca: "Anibal Vicente Vieira",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "Internet via satélite: um estudo sobre o Starlink",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "ANGELICA DA SILVA NUNES",
  estudantes: "Eduardo Pimenta Xavier Rodrigues Vaz",
  warning: "",
  date: "19/06",
  time: "09:45-10:30",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.POS_DR],
  nomePrimeiroMembroBanca: "Leonardo Guerra de Rezende Guedes",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "Marketing Digital: uso de ferramentas de programação na automação e otimização de campanhas no Facebook Ads",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "ANGELICA DA SILVA NUNES",
  estudantes: "Vinicius Ferreira de Souza",
  warning: "",
  date: "19/06",
  time: "09:00-09:45",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.POS_DR],
  nomePrimeiroMembroBanca: "Leonardo Guerra de Rezende Guedes",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "UM ESTUDO SOBRE GENERATIVE PRE-TRAINED TRANSFORMER (GPT)",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR],
  orientador: "FABIO BARBOSA RODRIGUES",
  estudantes: "MARCOS VINICIUS DE PAULA ALVES",
  warning: "",
  date: "19/06",
  time: "18:45-20:15",
  place: "Sala 401, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "MAX GONTIJO DE OLIVEIRA",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "Fernando Gonçalves Abadia",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "Comparativo de custo de uma casa residencial no Sistema Light Stell Frame (LSF), com o sistema de alvenaria convencional de bloco cerâmico",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "ADRIANE BORGES DE PAULA COUTO",
  estudantes: "Alexandre Rodrigues da Cunha Filho",
  warning: "",
  date: "19/06",
  time: "07:15-08:00",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Paulo José Mascarenhas Roriz",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_CIVIL],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "-",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "GUSTAVO SIQUEIRA VINHAL",
  estudantes: "DANIEL XAVIER RODRIGUES",
  warning: "",
  date: "19/06",
  time: "09:00-09:45",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Rafael Leal Martins",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "-",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "GUSTAVO SIQUEIRA VINHAL",
  estudantes: "MATHEUS ACACIO COSTA SILVA",
  warning: "",
  date: "19/06",
  time: "09:45-10:30",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Rafael Leal Martins",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "ChatGPT: uma análise da ferramenta no processo de desenvolvimento de software",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "LUCILIA GOMES RIBEIRO",
  estudantes: "Victor Junior Lisboa Costa",
  warning: "",
  date: "19/06",
  time: "20:30-22:00",
  place: "Online",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Fernando Gonçalves Abadia",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "Aníbal Santos Jukemura",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "Análise de Sobrevivência e Aprendizado de Máquina na Previsão do Tempo de Espera para Transplante Cardíaco: Uma Abordagem Otimizada",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR],
  orientador: "MARIA JOSE PEREIRA DANTAS",
  estudantes: "Eliseu Rodrigues Guimarães",
  warning: "",
  date: "19/06",
  time: "19:30-20:15",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR],
  nomePrimeiroMembroBanca: "José Elmo de Menezes",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "Comparativo de custo de uma casa residencial no Sistema Light Stell Frame (LSF), com o sistema de alvenaria convencional de bloco cerâmico",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "ADRIANE BORGES DE PAULA COUTO",
  estudantes: "Winder André da Silva Filho",
  warning: "",
  date: "19/06",
  time: "07:15-08:00",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Paulo José Mascarenhas Roriz",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_CIVIL],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "Inovações na Metodologia de Dimensionamento de Pavimentos Flexíveis de Rodovias: O Método MeDiNa",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR],
  orientador: "BENJAMIM JORGE RODRIGUES DOS SANTOS",
  estudantes: "Ana Beatriz Souza Souto",
  warning: "",
  date: "19/06",
  time: "18:45-20:15",
  place: "Auditório 2, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Paulo José Mascarenhas Roriz",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "EDSON NISHI",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_CIVIL],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "CONSIDERAÇÕES SOBRE A UTILIZAÇÃO DO MÉTODO DO HIDROGRAMA UNITÁRIO NA ESTIMATIVA DE VAZÕES DE PROJETO EM BACIAS HIDROGRÁFICAS",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR],
  orientador: "BENJAMIM JORGE RODRIGUES DOS SANTOS",
  estudantes: "PEDRO SIMÕES FERREIRA MIRANDA DE ANDRADE",
  warning: "",
  date: "19/06",
  time: "17:00-17:45",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "PAULO JOSÉ MASCARENHAS RORIZ",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_CIVIL],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "ESTUDO DE UMA PROVA DE CARGA ESTÁTICA EM FUNDAÇÕES DO TIPO ESTACA HÉLICE EM GOIÂNIA",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "FLAVIO RICARDO LEAL DA CUNHA",
  estudantes: "CAIRO CEZAR LIAH SCHMALTZ",
  warning: "",
  date: "19/06",
  time: "21:15-22:00",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "PAULO SÉRGIO DE OLIVEIRA RESENDE",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_CIVIL],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "ESTUDO DE UMA PROVA DE CARGA ESTÁTICA EM FUNDAÇÕES DO TIPO ESTACA HÉLICE EM GOIÂNIA",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "FLAVIO RICARDO LEAL DA CUNHA",
  estudantes: "FERNANDO DE MENDONÇA CAMPOS",
  warning: "",
  date: "19/06",
  time: "20:30-21:15",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "PAULO SÉRGIO DE OLIVEIRA RESENDE",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_CIVIL],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "ANÁLISE DA ESTABILIDADE E COBERTURA DE UM TALUDE",
  titulacaoOrientador: titulacoes[enum_titulacoes.POS_DR],
  orientador: "MARTA PEREIRA DA LUZ",
  estudantes: "Bruno da Silva Palhares; Maria Eduarda Oliveira da Silva",
  warning: "",
  date: "19/06",
  time: "20:30-22:00",
  place: "Auditório 2, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "RODRIGO MARTINEZ CASTRO",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "MURILO MEIRON DE PÁDUA",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_CIVIL],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "ANÁLISE DA VIABILIDADE DO EMPREGO DA ENERGIA FOTOVOLTAICA EM CANTEIROS DE OBRAS VERTICAIS",
  titulacaoOrientador: titulacoes[enum_titulacoes.POS_DR],
  orientador: "MARTA PEREIRA DA LUZ",
  estudantes: "VITOR MARCELO ALVES DA SILVA",
  warning: "",
  date: "19/06",
  time: "18:45-19:30",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Murilo Meiron de Pádua Soares",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_CIVIL],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "Análise da viabilidade do uso do tubulão a céu aberto",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "PAULO SERGIO DE OLIVEIRA RESENDE",
  estudantes: "ARTHUR SIMONTON ANDRADE DE JESUS; JOSÉ AUGUSTO FAUSTINO DE OLIVEIRA",
  warning: "",
  date: "19/06",
  time: "18:45-20:15",
  place: "Auditório 3, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR],
  nomePrimeiroMembroBanca: "Rodrigo Carvalho da Mata",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "Flávio Ricardo Leal da Cunha",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_CIVIL],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "PROPOSTA DE GESTÃO POR PROCESSOS NO SETOR DE COMPRAS DE UMA EMPRESA DO SISTEMA S",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "SANTIAGO MEIRELES ROCHA",
  estudantes: "LUIZ HENRIQUE BORGES",
  warning: "",
  date: "19/06",
  time: "07:15-08:45",
  place: "Sala 407, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Santiago Meireles Rocha",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "Vitor Hugo Martins e Resende",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_DE_PRODUCAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "APLICAÇÕES DE INTELIGÊNCIA ARTIFICIAL EM SISTEMAS DE CONTROLE INTELIGENTE",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR],
  orientador: "SOLANGE DA SILVA",
  estudantes: "GABRIEL ALVES CAROLA",
  warning: "",
  date: "19/06",
  time: "10:45-11:30",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Gustavo Siqueira Vinhal",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "ESTUDO DO FIREWALL FORTIGATE DA FORTINET PARA AUXILIAR NA SEGURANÇA DE DADOS DE UMA EMPRESA",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR],
  orientador: "SOLANGE DA SILVA",
  estudantes: "Wellington Soares de Moraes",
  warning: "",
  date: "19/06",
  time: "18:45-20:15",
  place: "Sala 402, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Gildenor de Souza Amorim Cavalcante",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "Anibal Santos Jukemura",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "Os pilotos de tripulação múltipla: inovação para formação por competência",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "RAUL FRANCE MONTEIRO",
  estudantes: "Murilo Medeiros Siqueira",
  warning: "",
  date: "19/06",
  time: "07:15-08:45",
  place: "Sala 401, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Salmem Chaquip Bukzen",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP],
  nomeSegundoMembroBanca: "Andreluiz da Silva Fernandes",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "O despacho de bagagem: uma análise do gerenciamento dos procedimentos de inspeção de segurança e manuseio",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "RAUL FRANCE MONTEIRO",
  estudantes: "Lucas Eduardo L. Costa",
  warning: "",
  date: "19/06",
  time: "09:00-10:30",
  place: "Sala 401, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Paulo Gonzaga Ribeiro",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP],
  nomeSegundoMembroBanca: "Tammyse Araújo da Silva",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "GARANTINDO A CONFORMIDADE COM A LGPD: ESTRATÉGIAS DE MASCARAMENTO E ANONIMIZAÇÃO DE DADOS PARA ADMINISTRADORES DE BANCO DE DADOS",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "ANDRE LUIZ ALVES",
  estudantes: "Gabriel de Araújo Alves",
  warning: "",
  date: "20/06",
  time: "14:15-15:00",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR],
  nomePrimeiroMembroBanca: "Vicente Paulo de Camargo",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "Ciência de Dados aplicada a incidentes aéreos",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "ANDRE LUIZ ALVES",
  estudantes: "Gustavo Machado da Silva Carvalho",
  warning: "",
  date: "20/06",
  time: "15:15-16:00",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Salmen Chaquip Buckzem",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "Desenvolvimento de uma ferramenta automatizada para avaliação do desempenho de fundos de investimentos no Brasil",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "ANGELICA DA SILVA NUNES",
  estudantes: "Uilton Pereira dos Santos Filho",
  warning: "",
  date: "20/06",
  time: "14:15-15:00",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP],
  nomePrimeiroMembroBanca: "Anibal Vicente Vieira",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "CLASSIFICAÇÃO E RECOMENDAÇÃO DE MÚSICAS BASEADOS EM INTELIGÊNCIA COMPUTACIONAL",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "GUSTAVO SIQUEIRA VINHAL",
  estudantes: "CARLOS HENRIQUE DE SOUZA SILVA",
  warning: "",
  date: "20/06",
  time: "07:15-08:45",
  place: "Sala 401, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Fernando Gonçalves Abadia",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "Rafael Leal Martins",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "ESTUDO DO ALGORITMO SIFT (SCALE INVARIANT FEATURE TRANSFORM)",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "GUSTAVO SIQUEIRA VINHAL",
  estudantes: "RÍVERSON DA COSTA SOUZA",
  warning: "",
  date: "20/06",
  time: "09:00-10:30",
  place: "Sala 401, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Rafael Leal Martins",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "Fernando Gonçalves Abadia",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "Do Eliza ou ChatGPT: história e evolução da Inteligência Artificial",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "LUCILIA GOMES RIBEIRO",
  estudantes: "Matheus Afonso Batista da Silva",
  warning: "",
  date: "20/06",
  time: "18:45-20:15",
  place: "Sala 401, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR],
  nomePrimeiroMembroBanca: "Solange da Silva",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "Fernando Gonçalves Abadia",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "Inovação em Completação de Dados Climáticos: Métodos Baseados em Vizinhos, Redes Neurais de Camadas Densas e Transformers",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR],
  orientador: "MARIA JOSE PEREIRA DANTAS",
  estudantes: "Norton Pereira Ricardo",
  warning: "",
  date: "20/06",
  time: "20:30-22:00",
  place: "Sala 401, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR],
  nomePrimeiroMembroBanca: "José Elmo de Menezes",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR],
  nomeSegundoMembroBanca: "Marta Pereira da Luz",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "ENGENHARIA SOCIAL NA SEGURANÇA DA INFORMAÇÃO",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR],
  orientador: "SOLANGE DA SILVA",
  estudantes: "LEONARDO DE MOURA ALVES",
  warning: "",
  date: "20/06",
  time: "10:45-12:15",
  place: "Sala 401, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Rafael Leal Martins",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "Fernando Gonçalves Abadia",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "Utilização de Mangá Sticker para o Ensino da Matemática em População Síndrome de Down.",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR],
  orientador: "TALLES MARCELO G DE A BARBOSA",
  estudantes: "DAYANA STEFANY COSTA PAMPLONA",
  warning: "",
  date: "20/06",
  time: "09:00-09:45",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR],
  nomePrimeiroMembroBanca: "José Olímpio Ferreira",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "Desenvolvimento de Circuitos para Obtenção e Análise do Potencial de Ação da Mimosa Pudica",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR],
  orientador: "TALLES MARCELO G DE A BARBOSA",
  estudantes: "JOÃO MARCOS ALVES ALEIXO MOREIRA",
  warning: "",
  date: "20/06",
  time: "11:30-12:15",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR],
  nomePrimeiroMembroBanca: "José Olímpio Ferreira",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "Avaliação e Customização de Plataformas de Propósito Geral para Operações em Telesaúde",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR],
  orientador: "TALLES MARCELO G DE A BARBOSA",
  estudantes: "RAFAEL DE MATOS ABE",
  warning: "",
  date: "20/06",
  time: "09:45-10:30",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR],
  nomePrimeiroMembroBanca: "José Olímpio Ferreira",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "Desenvolvimento de uma Rede de Sensores para Monitoramento Ambiental",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR],
  orientador: "TALLES MARCELO G DE A BARBOSA",
  estudantes: "RAFAEL CAMPOS ALMEIDA",
  warning: "",
  date: "20/06",
  time: "10:45-11:30",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR],
  nomePrimeiroMembroBanca: "José Olímpio Ferreira",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "ANÁLISE DO FLUXO DE PESSOAS EM GRANDES EMPRESAS",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "ANDRE LUIZ ALVES",
  estudantes: "Gustavo Cardoso Santana",
  warning: "",
  date: "21/06",
  time: "14:15-15:00",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Fabrício Schlag",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "Segurança no armazenamento de arquivos em nuvem: estudo de caso com o Microsoft Azure",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "ANGELICA DA SILVA NUNES",
  estudantes: "Rafael Oliveira Porfírio",
  warning: "",
  date: "21/06",
  time: "07:15-08:45",
  place: "Sala 401, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Wilmar Oliveira de Queiroz",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "Rafael Leal Martins",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "Gerência de redes com Zabbix em ambiente nuvem",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "ANGELICA DA SILVA NUNES",
  estudantes: "Pedro Henrique Ribeiro Dantas",
  warning: "",
  date: "21/06",
  time: "09:00-10:30",
  place: "Sala 401, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Wilmar Oliveira de Queiroz",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "Rafael Leal Martins",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "Segurança cibernética em redes sociais: simulação de ataque de engenharia social com chatbots e estratégias de contramedidas",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "ANGELICA DA SILVA NUNES",
  estudantes: "Ana Aline Dourado Machado Rocha",
  warning: "",
  date: "21/06",
  time: "10:45-12:15",
  place: "Sala 401, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Wilmar Oliveira de Queiroz",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "Rafael Leal Martins",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "USO DE FLUTTER, NODE.JS E CLEAN ARCHITECTURE NO DESENVOLVIMENTO DE UM SOFTWARE MOBILE PARA MONITORIA ACADÊMICA",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "ANIBAL SANTOS JUKEMURA",
  estudantes: "Wictor Oliveira e Souza",
  warning: "",
  date: "21/06",
  time: "18:45-20:15",
  place: "Sala 401, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Fernando Gonçalves Abadia",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR],
  nomeSegundoMembroBanca: "Solange da Silva",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "Análise de sistema fotovoltaico com uso de baterias através do software HOMER PRO.",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR],
  orientador: "CASSIO HIDEKI FUJISAWA",
  estudantes: "JOÃO VICTOR FREITAS VELASCO; VINICIUS DA SILVA CARVALHO",
  warning: "",
  date: "21/06",
  time: "09:00-09:45",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR],
  nomePrimeiroMembroBanca: "Cassio Hideki Fujisawa",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "Luis Fernando Pagotti",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_ELETRICA],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "Classificação de vinhos usando imagens hiperespectrais e k-vizinhos mais próximos",
  titulacaoOrientador: titulacoes[enum_titulacoes.POS_DR],
  orientador: "CLARIMAR JOSE COELHO",
  estudantes: "FERNANDO COSTA OLIVEIRA",
  warning: "",
  date: "21/06",
  time: "15:15-16:45",
  place: "Sala 401, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP],
  nomePrimeiroMembroBanca: "Walcy Santos Rezende Rios",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.POS_DR],
  nomeSegundoMembroBanca: "Rafael Viana de Carvalho",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "SkillMaster, Sistema de Avaliação de Competências em Engenharia de Software: Projeto e Prototipagem",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "FABRICIO SCHLAG",
  estudantes: "JHEOVANNY CAMPOS DE SOUZA",
  warning: "",
  date: "21/06",
  time: "09:00-10:30",
  place: "Sala 402, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "LUCILIA GOMES RIBEIRO",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "ANDRE LUIZ ALVES",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "FRAMEWORK PARA GERENCIAMENTO COMPLETO E PADRONIZAÇÃO DE PROJETOS NA GODOT ENGINE",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "FERNANDO GONCALVES ABADIA",
  estudantes: "LUCAS SILVA QUEIROZ",
  warning: "",
  date: "21/06",
  time: "20:30-22:00",
  place: "Sala 401, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Anibal Santos Jukemura",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR],
  nomeSegundoMembroBanca: "Carmen Cecília Centeno",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "-",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "GUSTAVO SIQUEIRA VINHAL",
  estudantes: "VINICIUS ELIAS DA SILVA",
  warning: "",
  date: "21/06",
  time: "10:45-12:15",
  place: "Sala 402, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Lucília Gomes Ribeiro",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR],
  nomeSegundoMembroBanca: "Fábio Barbosa Rodrigues",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "Aplicação de Random Forest para Identificação de Fraudes em Transações Financeiras",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR],
  orientador: "MARIA JOSE PEREIRA DANTAS",
  estudantes: "DAVI ARTHUR GOMES TELES",
  warning: "",
  date: "21/06",
  time: "19:30-20:15",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Rafael Leal Martins",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "Transporte para Exportação de Soja em Goiás: Desafios da Modelagem do Roteamento rodo-ferroviário usando abordagem de Coleta e Entrega simultâneas",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR],
  orientador: "MARIA JOSE PEREIRA DANTAS",
  estudantes: "Felipe Camilo Alves",
  warning: "",
  date: "21/06",
  time: "21:15-22:00",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Alexandre Ribeiro",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "-",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "GUSTAVO SIQUEIRA VINHAL",
  estudantes: "FERNANDO CARLOS BRANDÃO FILHO",
  warning: "",
  date: "22/06",
  time: "08:00-08:45",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Fernando Gonçalves Abadia",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "-",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "GUSTAVO SIQUEIRA VINHAL",
  estudantes: "LUCIANO APOLINÁRIO DE SIQUEIRA FILHO",
  warning: "",
  date: "22/06",
  time: "07:15-08:00",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Fernando Gonçalves Abadia",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "APLICAÇÃO DE REDES NEURAIS PARA PREVISÃO DE AÇÕES NO MERCADO FINANCEIRO",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "GUSTAVO SIQUEIRA VINHAL",
  estudantes: "HENRIQUE HONORATO CRUVINEL",
  warning: "",
  date: "22/06",
  time: "09:00-10:30",
  place: "Sala 401, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Lucília Gomes Ribeiro",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "Fernando Gonçalves Abadia",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "ANÁLISE DE TRÁFEGO DE WEBSITE UTILIZANDO POWERBI",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "GUSTAVO SIQUEIRA VINHAL",
  estudantes: "JOÃO VITOR FERREIRA DE MELO",
  warning: "",
  date: "22/06",
  time: "10:45-12:15",
  place: "Sala 401, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Lucília Gomes Ribeiro",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "Fernando Gonçalves Abadia",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "Innovative 4D Autoregressive Disentangled Network for Forecasting Mid-Range Weather",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR],
  orientador: "MARIA JOSE PEREIRA DANTAS",
  estudantes: "Salatiel Abraão Avelar Jordão",
  warning: "",
  date: "22/06",
  time: "09:00-09:45",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR],
  nomePrimeiroMembroBanca: "Clarimar José Coelho",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC1
},







  ]
  
  TCCs = TCCs.sort((a, b) => {
    if(a.date < b.date) return -1;
    if(a.date > b.date) return 1;
    if(a.time < b.time) return -1;
    if(a.time > b.time) return 1;
    if(a.title < b.title) return -1;
    if(a.title > b.title) return 1;
    return 0;
  });
  
  export const apresentacoes_TCC = [
  
    {
      tccs: TCCs,
    },
    
  ]