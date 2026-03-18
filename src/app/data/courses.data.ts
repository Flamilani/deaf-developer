export interface Lesson {
  id: number;
  slug: string;
  title: string;
  duration: string;
  completed: boolean;
  videoUrl?: string;
  description?: string;
}

export interface CourseModule {
  id: number;
  title: string;
  workload: string;
  professor: string;
  lessons: Lesson[];
  isOpen: boolean;
}

export interface CourseData {
  id: number;
  title: string;
  subtitle: string;
  totalWorkload: string;
  totalLessons: number;
  professors: string[];
  level: string;
  category: string;
  icon: string;
  price: string;
  description: string;
  introVideoUrl?: string;
  generalObjective: string;
  specificObjectives: string[];
  methodology: string;
  resources: string[];
  evaluationCriteria: string[];
  expectedResults: string[];
  finalConsiderations: string;
  inclusion: string;
  modules: CourseModule[];
}

export const LOGICA_PROGRAMACAO_LIBRAS: CourseData = {
  id: 1,
  title: 'Lógica de Programação com Libras',
  subtitle: 'Lógica de Programação em LIBRAS',
  totalWorkload: '60h',
  totalLessons: 42,
  professors: ['Ms. Joaquim Amado', 'Luiz Henrique', 'Flávio Milani'],
  level: 'Iniciante',
  category: 'Desenvolvimento',
  icon: '🧠',
  price: 'Teste',
  description:
    'Aprenda os conceitos básicos de algoritmos, variáveis e estruturas de repetição de forma totalmente visual, com suporte em Língua Brasileira de Sinais.',
  introVideoUrl: '',
  generalObjective:
    'Promover o compartilhamento de conhecimento e a aprendizagem entre alunos surdos, possibilitando o aprendizado da lógica de programação. Por meio desse estudo, os alunos podem compreender conceitos fundamentais, desenvolver o raciocínio lógico e adquirir conhecimentos importantes para o processo de aprendizagem. Além disso, busca-se demonstrar a importância da lógica na programação, especialmente no entendimento do conceito de algoritmo, favorecendo o desenvolvimento intelectual e educacional dos estudantes.',
  specificObjectives: [
    'Compreender os fundamentos da lógica de programação e sua importância na resolução de problemas.',
    'Entender o conceito de algoritmo e sua aplicação em situações do cotidiano.',
    'Identificar e aplicar a estrutura básica de algoritmos: entrada, processamento e saída de dados.',
    'Utilizar diferentes formas de representação de algoritmos, como pseudocódigo, fluxogramas e linguagem natural estruturada.',
    'Compreender o conceito de variáveis, bem como declarar e utilizar diferentes tipos de dados (inteiro, real, texto e lógico).',
    'Aplicar operadores aritméticos, relacionais e lógicos na construção de algoritmos.',
    'Desenvolver soluções utilizando estruturas condicionais para tomada de decisão.',
    'Utilizar estruturas de repetição para automatizar processos e resolver problemas de forma eficiente.',
    'Compreender o uso de vetores e matrizes para organização e manipulação de dados.',
    'Aplicar conceitos de funções e procedimentos para modularização e organização do código.',
    'Identificar erros em algoritmos e aplicar técnicas de teste e depuração.',
    'Desenvolver o pensamento computacional por meio da prática de resolução de problemas.',
    'Aplicar os conhecimentos adquiridos em diferentes linguagens de programação.',
  ],
  methodology:
    'A metodologia do curso está baseada em uma abordagem teórico-prática, visando facilitar a compreensão dos conceitos e promover o desenvolvimento do raciocínio lógico de forma progressiva e eficiente. Serão apresentadas explicações teóricas utilizando linguagem clara, exemplos do cotidiano e recursos visuais, além de atividades práticas como construção de algoritmos, elaboração de pseudocódigos e desenvolvimento de fluxogramas. O curso também fará uso de recursos tecnológicos e vídeos com suporte em LIBRAS, garantindo inclusão e acessibilidade.',
  resources: [
    'Computador ou dispositivo móvel (celular)',
    'Software de programação adequado ao nível do curso',
    'Vídeos educativos com suporte em LIBRAS',
    'Materiais didáticos em formato PDF',
  ],
  evaluationCriteria: [
    'Realização de exercícios práticos relacionados aos conteúdos estudados',
    'Participação nas atividades propostas durante as aulas',
    'Desenvolvimento de um projeto final, no qual o aluno deverá aplicar os conhecimentos adquiridos ao longo do curso',
  ],
  expectedResults: [
    'Compreender os conceitos fundamentais da lógica de programação',
    'Desenvolver algoritmos para a resolução de problemas',
    'Elaborar pseudocódigos e fluxogramas de forma clara e estruturada',
    'Aplicar estruturas de decisão e repetição na construção de soluções',
    'Utilizar variáveis, tipos de dados e operadores de maneira adequada',
    'Resolver problemas utilizando raciocínio lógico e pensamento computacional',
    'Identificar e corrigir erros em algoritmos',
    'Aplicar os conhecimentos adquiridos em diferentes linguagens de programação, como Python, Java e JavaScript',
    'Desenvolver autonomia no processo de aprendizagem e na busca por soluções tecnológicas',
  ],
  finalConsiderations:
    'O curso de Lógica de Programação apresenta uma base essencial para o desenvolvimento de habilidades na área de tecnologia, permitindo ao aluno compreender e aplicar conceitos fundamentais na resolução de problemas. A proposta do curso é proporcionar não apenas o conhecimento teórico, mas também a prática necessária para que o aluno desenvolva autonomia e segurança ao iniciar na área de programação.',
  inclusion:
    'O curso será desenvolvido com foco na inclusão, garantindo que todos os alunos tenham acesso ao conteúdo de forma clara e eficaz, especialmente pessoas surdas. Serão utilizados recursos acessíveis, como vídeos com suporte em LIBRAS e materiais visuais, facilitando a compreensão dos conteúdos apresentados.',
  modules: [
    {
      id: 1,
      title: 'Módulo 1 – Introdução à Lógica de Programação',
      workload: '6h',
      professor: 'Ms. Joaquim Amado',
      isOpen: true,
      lessons: [
        {
          id: 1,
          slug: 'o-que-e-logica-de-programacao',
          title: 'O que é Lógica de Programação?',
          duration: '18:00',
          completed: false,
          description:
            'Introdução ao conceito de lógica e sua importância no desenvolvimento de sistemas tecnológicos.',
        },
        {
          id: 2,
          slug: 'importancia-da-logica-na-tecnologia',
          title: 'Importância da Lógica na Tecnologia',
          duration: '15:00',
          completed: false,
          description:
            'Como a lógica de programação é a base de todos os sistemas computacionais modernos.',
        },
        {
          id: 3,
          slug: 'conceito-de-algoritmo',
          title: 'Conceito de Algoritmo',
          duration: '20:00',
          completed: false,
          description:
            'Definição de algoritmo como sequência finita de passos lógicos para solucionar um problema.',
        },
        {
          id: 4,
          slug: 'algoritmos-no-cotidiano',
          title: 'Algoritmos no Cotidiano',
          duration: '15:00',
          completed: false,
          description:
            'Exemplos práticos de algoritmos presentes no dia a dia, como receitas e rotinas.',
        },
        {
          id: 5,
          slug: 'pensamento-computacional',
          title: 'Pensamento Computacional',
          duration: '20:00',
          completed: false,
          description:
            'Desenvolvimento do raciocínio lógico e estruturado para resolução de problemas.',
        },
        {
          id: 6,
          slug: 'atividade-criando-algoritmos-simples',
          title: 'Atividade Prática: Criando Algoritmos Simples',
          duration: '32:00',
          completed: false,
          description:
            'Exercícios de raciocínio lógico e criação de algoritmos, como o de fazer um sanduíche.',
        },
      ],
    },
    {
      id: 2,
      title: 'Módulo 2 – Representação de Algoritmos',
      workload: '6h',
      professor: 'Ms. Joaquim Amado',
      isOpen: false,
      lessons: [
        {
          id: 7,
          slug: 'linguagem-natural-estruturada',
          title: 'Linguagem Natural Estruturada',
          duration: '20:00',
          completed: false,
          description:
            'Como expressar algoritmos de forma organizada usando a linguagem do dia a dia.',
        },
        {
          id: 8,
          slug: 'pseudocodigo',
          title: 'Pseudocódigo',
          duration: '25:00',
          completed: false,
          description:
            'Aprenda a escrever pseudocódigo para descrever algoritmos antes da implementação.',
        },
        {
          id: 9,
          slug: 'fluxograma-conceito-e-sintaxe',
          title: 'Fluxograma: Conceito e Sintaxe',
          duration: '20:00',
          completed: false,
          description:
            'Representação gráfica de algoritmos por meio de símbolos padronizados.',
        },
        {
          id: 10,
          slug: 'simbolos-do-fluxograma',
          title: 'Símbolos do Fluxograma',
          duration: '15:00',
          completed: false,
          description:
            'Conheça os principais símbolos usados em fluxogramas: início, decisão, processo e fim.',
        },
        {
          id: 11,
          slug: 'atividade-do-fluxograma-ao-pseudocodigo',
          title: 'Atividade Prática: Do Fluxograma ao Pseudocódigo',
          duration: '40:00',
          completed: false,
          description:
            'Exercício de criação de fluxogramas e sua conversão para pseudocódigo.',
        },
      ],
    },
    {
      id: 3,
      title: 'Módulo 3 – Variáveis e Tipos de Dados',
      workload: '8h',
      professor: 'Ms. Joaquim Amado',
      isOpen: false,
      lessons: [
        {
          id: 12,
          slug: 'conceito-de-variavel',
          title: 'Conceito de Variável',
          duration: '20:00',
          completed: false,
          description:
            'O que são variáveis e como elas armazenam informações durante a execução de um programa.',
        },
        {
          id: 13,
          slug: 'declaracao-e-utilizacao-de-variaveis',
          title: 'Declaração e Utilização de Variáveis',
          duration: '25:00',
          completed: false,
          description:
            'Como declarar variáveis corretamente e utilizá-las em diferentes contextos.',
        },
        {
          id: 14,
          slug: 'tipo-de-dado-inteiro',
          title: 'Tipo de Dado: Inteiro',
          duration: '15:00',
          completed: false,
          description:
            'Números inteiros positivos e negativos sem parte decimal.',
        },
        {
          id: 15,
          slug: 'tipo-de-dado-real',
          title: 'Tipo de Dado: Real',
          duration: '15:00',
          completed: false,
          description: 'Números com parte decimal (ponto flutuante).',
        },
        {
          id: 16,
          slug: 'tipo-de-dado-texto-string',
          title: 'Tipo de Dado: Texto (String)',
          duration: '15:00',
          completed: false,
          description:
            'Sequências de caracteres para armazenar palavras e frases.',
        },
        {
          id: 17,
          slug: 'tipo-de-dado-logico-booleano',
          title: 'Tipo de Dado: Lógico (Booleano)',
          duration: '15:00',
          completed: false,
          description:
            'Valores verdadeiro ou falso, essenciais para tomada de decisão.',
        },
        {
          id: 18,
          slug: 'atividade-entrada-saida-e-calculos-simples',
          title: 'Atividade Prática: Entrada, Saída e Cálculos Simples',
          duration: '35:00',
          completed: false,
          description:
            'Exercícios de leitura e escrita de dados com diferentes tipos de variáveis.',
        },
      ],
    },
    {
      id: 4,
      title: 'Módulo 4 – Operadores',
      workload: '6h',
      professor: 'Luiz Henrique',
      isOpen: false,
      lessons: [
        {
          id: 19,
          slug: 'operadores-aritmeticos',
          title: 'Operadores Aritméticos',
          duration: '25:00',
          completed: false,
          description:
            'Adição, subtração, multiplicação, divisão e módulo para realização de cálculos.',
        },
        {
          id: 20,
          slug: 'operadores-relacionais',
          title: 'Operadores Relacionais',
          duration: '25:00',
          completed: false,
          description:
            'Comparação entre valores: igual, diferente, maior, menor, maior ou igual, menor ou igual.',
        },
        {
          id: 21,
          slug: 'operadores-logicos',
          title: 'Operadores Lógicos',
          duration: '20:00',
          completed: false,
          description:
            'E (AND), OU (OR) e NÃO (NOT) para avaliar condições compostas.',
        },
        {
          id: 22,
          slug: 'atividade-calculo-de-media-e-comparacoes',
          title: 'Atividade Prática: Cálculo de Média e Comparações',
          duration: '50:00',
          completed: false,
          description:
            'Exercícios de cálculo de média e comparação de números usando operadores.',
        },
      ],
    },
    {
      id: 5,
      title: 'Módulo 5 – Estruturas Condicionais',
      workload: '10h',
      professor: 'Luiz Henrique',
      isOpen: false,
      lessons: [
        {
          id: 23,
          slug: 'conceito-de-tomada-de-decisao',
          title: 'Conceito de Tomada de Decisão',
          duration: '20:00',
          completed: false,
          description:
            'Como os programas tomam decisões com base em condições estabelecidas.',
        },
        {
          id: 24,
          slug: 'estrutura-se-if',
          title: 'Estrutura SE (if)',
          duration: '25:00',
          completed: false,
          description:
            'Execute um bloco de código somente se uma condição for verdadeira.',
        },
        {
          id: 25,
          slug: 'estrutura-se-senao-if-else',
          title: 'Estrutura SE...SENÃO (if/else)',
          duration: '25:00',
          completed: false,
          description:
            'Defina ações alternativas quando a condição principal não for atendida.',
        },
        {
          id: 26,
          slug: 'condicoes-multiplas-else-if',
          title: 'Condições Múltiplas (else if)',
          duration: '25:00',
          completed: false,
          description:
            'Encadeamento de condições para tratar múltiplos cenários.',
        },
        {
          id: 27,
          slug: 'estrutura-multipla-escolha-switch-case',
          title: 'Estrutura de Múltipla Escolha (switch/case)',
          duration: '25:00',
          completed: false,
          description:
            'Selecione entre várias alternativas de forma clara e organizada.',
        },
        {
          id: 28,
          slug: 'atividade-numero-par-ou-impar',
          title: 'Atividade Prática: Número Par ou Ímpar',
          duration: '30:00',
          completed: false,
          description:
            'Desenvolva um algoritmo para identificar se um número é par ou ímpar.',
        },
        {
          id: 29,
          slug: 'atividade-aprovacao-de-aluno',
          title: 'Atividade Prática: Aprovação de Aluno',
          duration: '30:00',
          completed: false,
          description:
            'Crie um algoritmo para verificar aprovação ou reprovação com base na média.',
        },
      ],
    },
    {
      id: 6,
      title: 'Módulo 6 – Estruturas de Repetição',
      workload: '10h',
      professor: 'Luiz Henrique (4h) / Flávio Milani (6h)',
      isOpen: false,
      lessons: [
        {
          id: 30,
          slug: 'estrutura-enquanto-while',
          title: 'Estrutura ENQUANTO (while)',
          duration: '30:00',
          completed: false,
          description:
            'Repita um bloco de código enquanto uma condição for verdadeira.',
        },
        {
          id: 31,
          slug: 'estrutura-para-for',
          title: 'Estrutura PARA (for)',
          duration: '30:00',
          completed: false,
          description:
            'Repita instruções um número determinado de vezes de forma controlada.',
        },
        {
          id: 32,
          slug: 'estrutura-repita-ate-do-while',
          title: 'Estrutura REPITA...ATÉ (do while)',
          duration: '30:00',
          completed: false,
          description:
            'Execute o bloco ao menos uma vez e repita até que a condição seja atendida.',
        },
        {
          id: 33,
          slug: 'atividade-contagem-e-soma',
          title: 'Atividade Prática: Contagem e Soma',
          duration: '40:00',
          completed: false,
          description:
            'Exercícios de contagem progressiva e soma de sequências numéricas.',
        },
        {
          id: 34,
          slug: 'atividade-tabuada',
          title: 'Atividade Prática: Tabuada',
          duration: '30:00',
          completed: false,
          description:
            'Crie um algoritmo para exibir a tabuada de qualquer número informado.',
        },
      ],
    },
    {
      id: 7,
      title: 'Módulo 7 – Vetores e Matrizes',
      workload: '8h',
      professor: 'Flávio Milani',
      isOpen: false,
      lessons: [
        {
          id: 35,
          slug: 'conceito-de-vetor',
          title: 'Conceito de Vetor',
          duration: '25:00',
          completed: false,
          description:
            'O que são vetores, como estruturas de dados unidimensionais para armazenar listas.',
        },
        {
          id: 36,
          slug: 'declaracao-e-utilizacao-de-vetores',
          title: 'Declaração e Utilização de Vetores',
          duration: '30:00',
          completed: false,
          description:
            'Como declarar, acessar e percorrer elementos de um vetor.',
        },
        {
          id: 37,
          slug: 'introducao-a-matrizes',
          title: 'Introdução a Matrizes',
          duration: '30:00',
          completed: false,
          description:
            'Organização de dados em tabelas bidimensionais (linhas e colunas).',
        },
        {
          id: 38,
          slug: 'percorrendo-dados-com-lacos',
          title: 'Percorrendo Dados com Laços',
          duration: '25:00',
          completed: false,
          description:
            'Combinação de vetores/matrizes com estruturas de repetição para processar dados.',
        },
        {
          id: 39,
          slug: 'atividade-lista-de-notas-e-media-com-vetor',
          title: 'Atividade Prática: Lista de Notas e Média com Vetor',
          duration: '50:00',
          completed: false,
          description:
            'Armazene notas de alunos em um vetor e calcule a média utilizando laços.',
        },
      ],
    },
    {
      id: 8,
      title: 'Módulo 8 – Funções e Procedimentos',
      workload: '4h',
      professor: 'Flávio Milani',
      isOpen: false,
      lessons: [
        {
          id: 40,
          slug: 'conceito-de-funcao-e-procedimento',
          title: 'Conceito de Função e Procedimento',
          duration: '25:00',
          completed: false,
          description:
            'Organização e modularização do código por meio de funções reutilizáveis.',
        },
        {
          id: 41,
          slug: 'parametros-e-retorno-de-valores',
          title: 'Parâmetros e Retorno de Valores',
          duration: '25:00',
          completed: false,
          description:
            'Como passar informações para funções e obter resultados de retorno.',
        },
        {
          id: 42,
          slug: 'atividade-funcao-de-media-e-verificacao',
          title: 'Atividade Prática: Função de Média e Verificação de Número',
          duration: '50:00',
          completed: false,
          description:
            'Implemente funções para calcular média e verificar características de um número.',
        },
      ],
    },
    {
      id: 9,
      title: 'Módulo 9 – Testes e Depuração',
      workload: '2h',
      professor: 'Flávio Milani',
      isOpen: false,
      lessons: [
        {
          id: 43,
          slug: 'identificacao-de-erros-bugs',
          title: 'Identificação de Erros (Bugs)',
          duration: '20:00',
          completed: false,
          description:
            'Como identificar e classificar erros de sintaxe, lógica e execução em algoritmos.',
        },
        {
          id: 44,
          slug: 'tecnicas-de-teste-de-algoritmos',
          title: 'Técnicas de Teste de Algoritmos',
          duration: '20:00',
          completed: false,
          description:
            'Estratégias para validar o comportamento correto de um programa.',
        },
        {
          id: 45,
          slug: 'boas-praticas-de-programacao',
          title: 'Boas Práticas de Programação',
          duration: '20:00',
          completed: false,
          description:
            'Legibilidade, comentários, nomeação de variáveis e organização do código.',
        },
      ],
    },
    {
      id: 10,
      title: 'Módulo 10 – Projeto Final',
      workload: '4h',
      professor: 'Flávio Milani',
      isOpen: false,
      lessons: [
        {
          id: 46,
          slug: 'apresentacao-do-projeto-final',
          title: 'Apresentação do Projeto Final',
          duration: '15:00',
          completed: false,
          description:
            'Orientações para desenvolvimento do projeto: sistema de média, calculadora ou cadastro simples.',
        },
        {
          id: 47,
          slug: 'desenvolvimento-guiado-sistema-de-media',
          title: 'Desenvolvimento Guiado: Sistema de Média',
          duration: '40:00',
          completed: false,
          description:
            'Construção de um sistema de cálculo de médias com aprovação/reprovação.',
        },
        {
          id: 48,
          slug: 'desenvolvimento-guiado-calculadora',
          title: 'Desenvolvimento Guiado: Calculadora',
          duration: '40:00',
          completed: false,
          description:
            'Implementação de uma calculadora com operações básicas.',
        },
        {
          id: 49,
          slug: 'apresentacao-e-revisao-final',
          title: 'Apresentação e Revisão Final',
          duration: '25:00',
          completed: false,
          description:
            'Revisão dos conceitos aprendidos e apresentação dos projetos desenvolvidos.',
        },
      ],
    },
  ],
};

export const COURSES_DATABASE: CourseData[] = [LOGICA_PROGRAMACAO_LIBRAS];
