// 1. O BANCO DE DADOS DIRETO NO CÓDIGO (À prova de falhas)
// Adicione suas linhas copiando e colando este molde exato, mantendo o \n para pular linha.
const tabelaDados = [
    {
    "Item da Lista": "00.00",
    "Descrição do Item da Lista (LC 116/2003)": "Serviço não tributável",
    "CNAE": "0000-0/00 - Não Informado, 0111-3/01 - Cultivo de arroz, 0111-3/02 - Cultivo de milho, 0111-3/03 - Cultivo de trigo, 0111-3/99 - Cultivo de outros cereais não especificados anteriormente",
    "Local da Incidência": "Não incidência",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "01.01",
    "Descrição do Item da Lista (LC 116/2003)": "Análise e desenvolvimento de sistemas.",
    "CNAE": "6201-5/01 - Desenvolvimento de programas de computador sob encomenda",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "01.02",
    "Descrição do Item da Lista (LC 116/2003)": "Programação.",
    "CNAE": "6201-5/01 - Desenvolvimento de programas de computador sob encomenda",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "01.03",
    "Descrição do Item da Lista (LC 116/2003)": "Processamento, armazenamento ou hospedagem de dados, textos, imagens, vídeos, páginas eletrônicas, aplicativos e sistemas de informação, entre outros formatos, e congêneres.",
    "CNAE": "1830-0/03 - Reprodução de software em qualquer suporte, 6190-6/01 - Provedores de acesso às redes de comunicações, 6311-9/00 - Tratamento de dados, provedores de serviços de aplicação e serviços de hospedagem na internet",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "01.04",
    "Descrição do Item da Lista (LC 116/2003)": "Elaboração de programas de computadores, inclusive de jogos eletrônicos.",
    "CNAE": "6201-5/01 - Desenvolvimento de programas de computador sob encomenda, 6202-3/00 - Desenvolvimento e licenciamento de programas de computador customizáveis, 6203-1/00 - Desenvolvimento e licenciamento de programas de computador não-customizáveis",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "01.05",
    "Descrição do Item da Lista (LC 116/2003)": "Licenciamento ou cessão de direito de uso de programas de computação.",
    "CNAE": "6202-3/00 - Desenvolvimento e licenciamento de programas de computador customizáveis, 6203-1/00 - Desenvolvimento e licenciamento de programas de computador não-customizáveis",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "01.06",
    "Descrição do Item da Lista (LC 116/2003)": "Assessoria e consultoria em informática.",
    "CNAE": "6204-0/00 - Consultoria em tecnologia da informação",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "01.07",
    "Descrição do Item da Lista (LC 116/2003)": "Suporte técnico em informática, inclusive instalação, configuração e manutenção de programas de computação e bancos de dados.",
    "CNAE": "6209-1/00 - Suporte técnico, manutenção e outros serviços em tecnologia da informação",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "01.08",
    "Descrição do Item da Lista (LC 116/2003)": "Planejamento, confecção, manutenção e atualização de páginas eletrônicas.",
    "CNAE": "6201-5/01 - Desenvolvimento de programas de computador sob encomenda, 6319-4/00 - Portais, provedores de conteúdo e outros serviços de informação na internet",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "01.09",
    "Descrição do Item da Lista (LC 116/2003)": "Disponibilização, sem cessão definitiva, de conteúdos de áudio, vídeo, imagem e texto por meio da internet, respeitada a imuniada de livros, jornais e periódicos (exceto a distribuição de conteúdos pelas prestadoras de Serviço de Acesso Condicionado, de que trata a Lei nº 12.485, de 12 de setembro de 2011, sujeita ao ICMS).",
    "CNAE": "6319-4/00 - Portais, provedores de conteúdo e outros serviços de informação na internet",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "02.01",
    "Descrição do Item da Lista (LC 116/2003)": "Serviços de pesquisas e desenvolvimento de qualquer natureza.",
    "CNAE": "7210-0/00 - Pesquisa e desenvolvimento experimental em ciências físicas e naturais, 7220-7/00 - Pesquisa e desenvolvimento experimental em ciências sociais e humanas",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "03.02",
    "Descrição do Item da Lista (LC 116/2003)": "Cessão de direito de uso de marcas e de sinais de propaganda.",
    "CNAE": "7740-3/00 - Gestão de ativos intangíveis não-financeiros, 8299-7/99 - Outras atividades de serviços prestados principalmente às empresas não especificadas anteriormente",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "03.03",
    "Descrição do Item da Lista (LC 116/2003)": "Exploração de salões de festas, centro de convenções, escritórios virtuais, stands, quadras esportivas, estádios, auditórios, casas de espetáculos, parques de diversões, canchas e congêneres, para realização de eventos ou negócios de qualquer natureza",
    "CNAE": "8211-3/00 - Serviços combinados de escritório e apoio administrativo, 8230-0/02 - Casas de festas e eventos, 9003-5/00 - Gestão de espaços para artes cênicas, espetáculos e outras atividades artísticas, 9311-5/00 - Gestão de instalações de esportes, 9312-3/00 - Clubes sociais, esportivos e similares",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "03.04",
    "Descrição do Item da Lista (LC 116/2003)": "Locação, sublocação, arrendamento, direito de passagem ou permissão de uso, compartilhado ou não, de ferrovia, rodovia, postes, cabos, dutos e condutos de qualquer natureza.",
    "CNAE": "3514-0/00 - Distribuição de energia elétrica, 3520-4/02 - Distribuição de combustíveis gasosos por redes urbanas, 4911-6/00 - Transporte ferroviário de carga, 5221-4/00 - Concessionárias de rodovias, pontes, túneis e serviços relacionados",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "03.05",
    "Descrição do Item da Lista (LC 116/2003)": "Cessão de andaimes, palcos, coberturas e outras estruturas de uso temporário.",
    "CNAE": "4399-1/02 - Montagem e desmontagem de andaimes e outras estruturas temporárias, 4399-1/04 - Serviços de operação e fornecimento de equipamentos para transporte e elevação de cargas e pessoas para uso em obras, 7732-2/02 - Aluguel de andaimes, 7739-0/03 - Aluguel de palcos, coberturas e outras estruturas de uso temporário, exceto andaimes",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "04.01",
    "Descrição do Item da Lista (LC 116/2003)": "Medicina e biomedicina.",
    "CNAE": "8630-5/02 - Atividade médica ambulatorial com recursos para realização de exames complementares, 8630-5/03 - Atividade médica ambulatorial restrita a consultas, 8630-5/99 - Atividades de atenção ambulatorial não especificadas anteriormente",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "2,5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "04.02",
    "Descrição do Item da Lista (LC 116/2003)": "Análises clínicas, patologia, eletricidade médica, radioterapia, quimioterapia, ultra sonografia, ressonância magnética, radiologia, tomografia e congêneres.",
    "CNAE": "8640-2/01 - Laboratórios de anatomia patológica e citológica, 8640-2/02 - Laboratórios clínicos, 8640-2/04 - Serviços de tomografia, 8640-2/05 - Serviços de diagnóstico por imagem com uso de radiação ionizante, exceto tomografia, 8640-2/06 - Serviços de ressonância magnética",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "2,5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "04.03",
    "Descrição do Item da Lista (LC 116/2003)": "Hospitais, clínicas, laboratórios, sanatórios, manicômios, casas de saúde, prontos socorros, ambulatórios e congêneres.",
    "CNAE": "8610-1/01 - Atividades de atendimento hospitalar, exceto pronto-socorro e unidades para atendimento a urgências, 8610-1/02 - Atividades de atendimento em pronto-socorro e unidades hospitalares para atendimento a urgências, 8630-5/01 - Atividade médica ambulatorial com recursos para realização de procedimentos cirúrgicos, 8630-5/02 - Atividade médica ambulatorial com recursos para realização de exames complementares, 8630-5/06 - Serviços de vacinação e imunização humana",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "2,5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "04.04",
    "Descrição do Item da Lista (LC 116/2003)": "Instrumentação cirúrgica.",
    "CNAE": "8650-0/99 - Atividades de profissionais da área de saúde não especificadas anteriormente",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "2,5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "04.05",
    "Descrição do Item da Lista (LC 116/2003)": "Acupuntura.",
    "CNAE": "8690-9/01 - Atividades de práticas integrativas e complementares em saúde humana, 8690-9/03 - Atividades de acupuntura",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "2,5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "04.06",
    "Descrição do Item da Lista (LC 116/2003)": "Enfermagem, inclusive serviços auxiliares.",
    "CNAE": "8650-0/01 - Atividades de enfermagem",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "2,5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "04.07",
    "Descrição do Item da Lista (LC 116/2003)": "Serviços farmacêuticos",
    "CNAE": "4771-7/02 - Comércio varejista de produtos farmacêuticos, com manipulação de fórmulas, 4771-7/03 - Comércio varejista de produtos farmacêuticos homeopáticos",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "2,5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "04.08",
    "Descrição do Item da Lista (LC 116/2003)": "Terapia ocupacional, fisioterapia e fonoaudiologia.",
    "CNAE": "8650-0/04 - Atividades de fisioterapia, 8650-0/05 - Atividades de terapia ocupacional, 8650-0/06 - Atividades de fonoaudiologia",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "2,5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "04.09",
    "Descrição do Item da Lista (LC 116/2003)": "Terapias de qualquer espécie destinadas ao tratamento físico, orgânico e mental.",
    "CNAE": "8640-2/12 - Serviços de hemoterapia, 8640-2/99 - Atividades de serviços de complementação diagnóstica e terapêutica não especificadas anteriormente, 8650-0/07 - Atividades de terapia de nutrição enteral e parenteral, 8690-9/01 - Atividades de práticas integrativas e complementares em saúde humana, 8690-9/99 - Outras atividades de atenção à saúde humana não especificadas anteriormente",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "2,5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "04.10",
    "Descrição do Item da Lista (LC 116/2003)": "Nutrição.",
    "CNAE": "8650-0/02 - Atividades de profissionais da nutrição",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "2,5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "04.11",
    "Descrição do Item da Lista (LC 116/2003)": "Obstetrícia.",
    "CNAE": "8690-9/99 - Outras atividades de atenção à saúde humana não especificadas anteriormente",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "2,5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "04.12",
    "Descrição do Item da Lista (LC 116/2003)": "Odontologia.",
    "CNAE": "8630-5/04 - Atividade odontológica",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "2,5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "04.13",
    "Descrição do Item da Lista (LC 116/2003)": "Ortóptica.",
    "CNAE": "8650-0/99 - Atividades de profissionais da área de saúde não especificadas anteriormente",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "2,5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "04.14",
    "Descrição do Item da Lista (LC 116/2003)": "Próteses sob encomenda.",
    "CNAE": "3250-7/03 - Fabricação de aparelhos e utensílios para correção de defeitos físicos e aparelhos ortopédicos em geral sob encomenda, 3250-7/06 - Serviços de prótese dentária",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "2,5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "04.15",
    "Descrição do Item da Lista (LC 116/2003)": "Psicanálise.",
    "CNAE": "8650-0/03 - Atividades de psicologia e psicanálise",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "2,5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "04.16",
    "Descrição do Item da Lista (LC 116/2003)": "Psicologia.",
    "CNAE": "8650-0/03 - Atividades de psicologia e psicanálise",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "2,5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "04.17",
    "Descrição do Item da Lista (LC 116/2003)": "Casas de repouso e de recuperação, creches, asilos e congêneres.",
    "CNAE": "8711-5/01 - Clínicas e residências geriátricas, 8711-5/02 - Instituições de longa permanência para idosos, 8711-5/03 - Atividades de assistência a deficientes físicos, imunodeprimidos e convalescentes, 8711-5/04 - Centros de apoio a pacientes com câncer e com AIDS, 8711-5/05 - Condomínios residenciais para idosos",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "2,5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "04.18",
    "Descrição do Item da Lista (LC 116/2003)": "Inseminação artificial, fertilização in vitro e congêneres.",
    "CNAE": "8630-5/07 - Atividades de reprodução humana assistida",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "2,5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "04.19",
    "Descrição do Item da Lista (LC 116/2003)": "Bancos de sangue, leite, pele, olhos, óvulos, sêmen e congêneres.",
    "CNAE": "8630-5/07 - Atividades de reprodução humana assistida, 8640-2/12 - Serviços de hemoterapia, 8640-2/14 - Serviços de bancos de células e tecidos humanos, 8690-9/02 - Atividades de bancos de leite humano, 8690-9/99 - Outras atividades de atenção à saúde humana não especificadas anteriormente",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "2,5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "04.20",
    "Descrição do Item da Lista (LC 116/2003)": "Coleta de sangue, leite, tecidos, sêmen, órgãos e materiais biológicos de qualquer espécie.",
    "CNAE": "8640-2/02 - Laboratórios clínicos",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "2,5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "04.21",
    "Descrição do Item da Lista (LC 116/2003)": "Unidade de atendimento, assistência ou tratamento móvel e congêneres.",
    "CNAE": "8621-6/01 - UTI móvel, 8621-6/02 - Serviços móveis de atendimento a urgências, exceto por UTI móvel, 8622-4/00 - Serviços de remoção de pacientes, exceto os serviços móveis de atendimento a urgências, 8712-3/00 - Atividades de fornecimento de infra-estrutura de apoio e assistência a paciente no domicílio",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "2,5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "04.22",
    "Descrição do Item da Lista (LC 116/2003)": "Planos de medicina de grupo ou individual e convênios para prestação de assistência médica, hospitalar, odontológica e congêneres.",
    "CNAE": "6550-2/00 - Planos de saúde",
    "Local da Incidência": "❌Prestador\n✅Tomador\n❌Local",
    "Aliqutota": "2,5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "04.23",
    "Descrição do Item da Lista (LC 116/2003)": "Outros planos de saúde que se cumpram através de serviços de terceiros contratados, credenciados, cooperados ou apenas pagos pelo operador do plano mediante indicação do usuário.",
    "CNAE": "6550-2/00 - Planos de saúde",
    "Local da Incidência": "❌Prestador\n✅Tomador\n❌Local",
    "Aliqutota": "2,5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "05.01",
    "Descrição do Item da Lista (LC 116/2003)": "Medicina veterinária e zootecnia.",
    "CNAE": "7490-1/03 - Serviços de agronomia e de consultoria às atividades agrícolas e pecuárias, 7500-1/00 - Atividades veterinárias",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "05.02",
    "Descrição do Item da Lista (LC 116/2003)": "Hospitais, clínicas, ambulatórios, prontos socorros e congêneres, na área veterinária.",
    "CNAE": "7500-1/00 - Atividades veterinárias",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "05.03",
    "Descrição do Item da Lista (LC 116/2003)": "Laboratórios de análise na área veterinária.",
    "CNAE": "7500-1/00 - Atividades veterinárias",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "05.04",
    "Descrição do Item da Lista (LC 116/2003)": "Inseminação artificial, fertilização in vitro e congêneres.",
    "CNAE": "0162-8/01 - Serviço de inseminação artificial em animais",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "05.05",
    "Descrição do Item da Lista (LC 116/2003)": "Bancos de sangue e de órgãos e congêneres.",
    "CNAE": "7500-1/00 - Atividades veterinárias",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "05.06",
    "Descrição do Item da Lista (LC 116/2003)": "Coleta de sangue, leite, tecidos, sêmen, órgãos e materiais biológicos de qualquer espécie.",
    "CNAE": "7500-1/00 - Atividades veterinárias",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "05.07",
    "Descrição do Item da Lista (LC 116/2003)": "Unidade de atendimento, assistência ou tratamento móvel e congêneres.",
    "CNAE": "7500-1/00 - Atividades veterinárias",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "05.08",
    "Descrição do Item da Lista (LC 116/2003)": "Guarda, tratamento, amestramento, embelezamento, alojamento e congêneres.",
    "CNAE": "0162-8/02 - Serviço de tosquiamento de ovinos, 0162-8/03 - Serviço de manejo de animais, 8011-1/02 - Serviços de adestramento de cães de guarda, 9609-2/08 - Higiene e embelezamento de animais domésticos",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "05.09",
    "Descrição do Item da Lista (LC 116/2003)": "Planos de atendimento e assistência médico veterinária.",
    "CNAE": "6550-2/00 - Planos de saúde",
    "Local da Incidência": "❌Prestador\n✅Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "06.01",
    "Descrição do Item da Lista (LC 116/2003)": "Barbearia, cabeleireiros, manicuros, pedicuros e congêneres.",
    "CNAE": "8690-9/04 - Atividades de podologia, 9602-5/01 - Cabeleireiros, manicure e pedicure, 9602-5/02 - Atividades de Estética e outros serviços de cuidados com a beleza",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "06.02",
    "Descrição do Item da Lista (LC 116/2003)": "Esteticistas, tratamento de pele, depilação e congêneres.",
    "CNAE": "9602-5/02 - Atividades de Estética e outros serviços de cuidados com a beleza, 9609-2/06 - Serviços de tatuagem e colocação de piercing, 9609-2/99 - Outras atividades de serviços pessoais não especificadas anteriormente",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "06.03",
    "Descrição do Item da Lista (LC 116/2003)": "Banhos, duchas, sauna, massagens e congêneres.",
    "CNAE": "9609-2/05 - Atividades de sauna e banhos",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "06.04",
    "Descrição do Item da Lista (LC 116/2003)": "Ginástica, dança, esportes, natação, artes marciais e demais atividades físicas.",
    "CNAE": "8591-1/00 - Ensino de esportes, 8592-9/01 - Ensino de dança, 9312-3/00 - Clubes sociais, esportivos e similares, 9313-1/00 - Atividades de condicionamento físico",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "06.05",
    "Descrição do Item da Lista (LC 116/2003)": "Centros de emagrecimento, spa e congêneres.",
    "CNAE": "9609-2/08 - Higiene e embelezamento de animais domésticos",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "06.06",
    "Descrição do Item da Lista (LC 116/2003)": "Aplicação de tatuagens, piercings e congêneres.",
    "CNAE": "9609-2/06 - Serviços de tatuagem e colocação de piercing",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "07.01",
    "Descrição do Item da Lista (LC 116/2003)": "Engenharia, agronomia, agrimensura, arquitetura, geologia, urbanismo, paisagismo e congêneres.",
    "CNAE": "2391-5/01 - Britamento de pedras, exceto associado à extração, 7111-1/00 - Serviços de arquitetura, 7112-0/00 - Serviços de engenharia, 7119-7/01 - Serviços de cartografia, topografia e geodésia, 7119-7/02 - Atividades de estudos geológicos",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "07.02",
    "Descrição do Item da Lista (LC 116/2003)": "Execução, por administração, empreitada ou subempreitada, de obras de construção civil, hidráulica ou elétrica e de outras obras semelhantes, inclusive sondagem, perfuração de poços, escavação, drenagem e irrigação, terraplenagem, pavimentação, concretagem e a instalação e montagem de produtos, peças e equipamentos (exceto o fornecimento de mercadorias produzidas pelo prestador de serviços fora do local da prestação dos serviços, que fica sujeito ao ICMS). ",
    "CNAE": "2330-3/05 - Preparação de massa de concreto e argamassa para construção, 3321-0/00 - Instalação de máquinas e equipamentos industriais, 4120-4/00 - Construção de edifícios, 4211-1/01 - Construção de rodovias e ferrovias, 4211-1/02 - Pintura para sinalização em pistas rodoviárias e aeroportos",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "07.03",
    "Descrição do Item da Lista (LC 116/2003)": "Elaboração de planos diretores, estudos de viabilidade, estudos organizacionais e outros, relacionados com obras e serviços de engenharia; elaboração de anteprojetos, projetos básicos e projetos executivos para trabalhos de engenharia.",
    "CNAE": "7112-0/00 - Serviços de engenharia",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "07.04",
    "Descrição do Item da Lista (LC 116/2003)": "Demolição.",
    "CNAE": "4311-8/01 - Demolição de edifícios e outras estruturas",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "07.05",
    "Descrição do Item da Lista (LC 116/2003)": "Reparação, conservação e reforma de edifícios, estradas, pontes, portos e congêneres (exceto o fornecimento de mercadorias produzidas pelo prestador dos serviços, fora do local da prestação dos serviços, que fica sujeito ao ICMS).",
    "CNAE": "4120-4/00 - Construção de edifícios, 4211-1/01 - Construção de rodovias e ferrovias, 4211-1/02 - Pintura para sinalização em pistas rodoviárias e aeroportos, 4212-0/00 - Construção de obras-de-arte especiais, 4221-9/03 - Manutenção de redes de distribuição de energia elétrica",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "07.06",
    "Descrição do Item da Lista (LC 116/2003)": "Colocação e instalação de tapetes, carpetes, assoalhos, cortinas, revestimentos de parede, vidros, divisórias, placas de gesso e congêneres, com material fornecido pelo tomador do serviço.",
    "CNAE": "4330-4/02 - Instalação de portas, janelas, tetos, divisórias e armários embutidos de qualquer material, 4330-4/03 - Obras de acabamento em gesso e estuque, 4330-4/05 - Aplicação de revestimentos e de resinas em interiores e exteriores, 4330-4/99 - Outras obras de acabamento da construção",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "07.07",
    "Descrição do Item da Lista (LC 116/2003)": "Recuperação, raspagem, polimento e lustração de pisos e congêneres.",
    "CNAE": "4330-4/05 - Aplicação de revestimentos e de resinas em interiores e exteriores",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "07.08",
    "Descrição do Item da Lista (LC 116/2003)": "Calafetação.",
    "CNAE": "4329-1/05 - Tratamentos térmicos, acústicos ou de vibração, 4330-4/05 - Aplicação de revestimentos e de resinas em interiores e exteriores",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "07.09",
    "Descrição do Item da Lista (LC 116/2003)": "Varrição, coleta, remoção, incineração, tratamento, reciclagem, separação e destinação final de lixo, rejeitos e outros resíduos quaisquer.",
    "CNAE": "3811-4/00 - Coleta de resíduos não-perigosos, 3812-2/00 - Coleta de resíduos perigosos, 3821-1/00 - Tratamento e disposição de resíduos não-perigosos, 3822-0/00 - Tratamento e disposição de resíduos perigosos, 3831-9/01 - Recuperação de sucatas de alumínio\n",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "07.10",
    "Descrição do Item da Lista (LC 116/2003)": "Limpeza, manutenção e conservação de vias e logradouros públicos, imóveis, chaminés, piscinas, parques, jardins e congêneres.",
    "CNAE": "3702-9/00 - Atividades relacionadas a esgoto, exceto a gestão de redes, 8121-4/00 - Limpeza em prédios e em domicílios, 8129-0/00 - Atividades de limpeza não especificadas anteriormente, 9609-2/99 - Outras atividades de serviços pessoais não especificadas anteriormente, 9700-5/00 - Serviços domésticos",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "07.11",
    "Descrição do Item da Lista (LC 116/2003)": "Decoração e jardinagem, inclusive corte e poda de árvores.",
    "CNAE": "0161-0/02 - Serviço de poda de árvores para lavouras, 7410-2/02 - Design de interiores, 8130-3/00 - Atividades paisagísticas, 9700-5/00 - Serviços domésticos",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "07.12",
    "Descrição do Item da Lista (LC 116/2003)": "Controle e tratamento de efluentes de qualquer natureza e de agentes físicos, químicos e biolõgicos",
    "CNAE": "3600-6/01 - Captação, tratamento e distribuição de água, 3821-1/00 - Tratamento e disposição de resíduos não-perigosos, 3822-0/00 - Tratamento e disposição de resíduos perigosos",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "07.13",
    "Descrição do Item da Lista (LC 116/2003)": "Dedetização, desinfecção, desinsetização, imunização, higienização, desratização, pulverização e congêneres.",
    "CNAE": "0161-0/01 - Serviço de pulverização e controle de pragas agrícolas, 0162-8/99 - Atividades de apoio à pecuária não especificadas anteriormente, 8122-2/00 - Imunização e controle de pragas urbanas",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "07.16",
    "Descrição do Item da Lista (LC 116/2003)": "Florestamento, reflorestamento, semeadura, adubação, reparação de solo, plantio, silagem, colheita, corte e descascamento de árvores, silvicultura, exploração florestal e dos serviços congêneres indissociáveis da formação, manutenção e colheita de florestas, para quaisquer fins e por quaisquer meios.",
    "CNAE": "0161-0/02 - Serviço de poda de árvores para lavouras, 0161-0/03 - Serviço de preparação de terreno, cultivo e colheita, 0161-0/99 - Atividades de apoio à agricultura não especificadas anteriormente, 0220-9/01 - Extração de madeira em florestas nativas, 0220-9/06 - Conservação de florestas nativas",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "07.17",
    "Descrição do Item da Lista (LC 116/2003)": "Escoramento, contenção de encostas e serviços congêneres.",
    "CNAE": "4299-5/99 - Outras obras de engenharia civil não especificadas anteriormente",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "07.18",
    "Descrição do Item da Lista (LC 116/2003)": "Limpeza e dragagem de rios, portos, canais, baías, lagos, lagoas, represas, açudes e congêneres.",
    "CNAE": "3900-5/00 - Descontaminação e outros serviços de gestão de resíduos, 4291-0/00 - Obras portuárias, marítimas e fluviais",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "07.19",
    "Descrição do Item da Lista (LC 116/2003)": "Acompanhamento e fiscalização da execução de obras de engenharia, arquitetura e urbanismo.",
    "CNAE": "7112-0/00 - Serviços de engenharia",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "07.20",
    "Descrição do Item da Lista (LC 116/2003)": "Aerofotogrametria (inclusive interpretação), cartografia, mapeamento, levantamentos topográficos, batimétricos, geográficos, geodésicos, geológicos, geofísicos e congêneres.",
    "CNAE": "7119-7/01 - Serviços de cartografia, topografia e geodésia, 7119-7/02 - Atividades de estudos geológicos, 7119-7/99 - Atividades técnicas relacionadas à engenharia e arquitetura não especificadas anteriormente",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "07.21",
    "Descrição do Item da Lista (LC 116/2003)": "Pesquisa, perfuração, cimentação, mergulho, perfilagem, concretação, testemunhagem, pescaria, estimulação e outros serviços relacionados com a exploração e explotação de petróleo, gás natural e de outros recursos minerais.",
    "CNAE": "0910-6/00 - Atividades de apoio à extração de petróleo e gás natural, 0990-4/01 - Atividades de apoio à extração de minério de ferro, 0990-4/02 - Atividades de apoio à extração de minerais metálicos não-ferrosos, 0990-4/03 - Atividades de apoio à extração de minerais não-metálicos, 7490-1/02 - Escafandria e mergulho",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "07.22",
    "Descrição do Item da Lista (LC 116/2003)": "Nucleação e bombardeamento de nuvens e congêneres.",
    "CNAE": "7490-1/99 - Outras atividades profissionais, científicas e técnicas não especificadas anteriormente",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "08.01",
    "Descrição do Item da Lista (LC 116/2003)": "Ensino regular pré escolar, fundamental, médio e superior.",
    "CNAE": "8511-2/00 - Educação infantil - creche, 8512-1/00 - Educação infantil - pré-escola, 8513-9/00 - Ensino fundamental, 8520-1/00 - Ensino médio, 8531-7/00 - Educação superior - graduação",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "2,5%",
    "Condicionante": "Art. 132...\n§ 1º A redução de alíquota dos serviços enquadrados nos subitens 8.01 e 8.02, de que trata o caput deste artigo, fica condicionada à disponibilidade de recursos materiais às escolas públicas municipais.\n§ 2º Os recursos materiais, mencionadas no § 1º deste artigo, serão disponibilizados, conforme critérios estabelecidos em regulamento a ser editado pelo Chefe do Poder Executivo.\n"
  },
  {
    "Item da Lista": "08.02",
    "Descrição do Item da Lista (LC 116/2003)": "Instrução, treinamento, orientação pedagógica e educacional, avaliação de conhecimentos de qualquer natureza.",
    "CNAE": "8541-4/00 - Educação profissional de nível técnico, 8550-3/02 - Atividades de apoio à educação, exceto caixas escolares, 8592-9/02 - Ensino de artes cênicas, exceto dança, 8592-9/03 - Ensino de música, 8592-9/99 - Ensino de arte e cultura não especificado anteriormente",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "2,5%",
    "Condicionante": "Art. 132\n3º As instituições de ensino superior que implantarem, no âmbito do Município de Parauapebas, cursos relacionados à área da saúde, farão jus à alíquota de 3% (três por cento) do Imposto Sobre Serviços (ISS)."
  },
  {
    "Item da Lista": "09.01",
    "Descrição do Item da Lista (LC 116/2003)": "Hospedagem de qualquer natureza em hotéis, apart-service condominiais, flat, apart-hotéis, hotéis residência, residence-service, suite service, hotelaria marítima, motéis, pensões e congêneres; ocupação por temporada com fornecimento de serviço (o valor da alimentação e gorjeta, quando incluído no preço da diária, fica sujeito ao Imposto Sobre Serviços). ",
    "CNAE": "5510-8/01 - Hotéis, 5510-8/02 - Apart-hotéis, 5510-8/03 - Motéis, 5590-6/01 - Albergues, exceto assistenciais, 5590-6/02 - Campings",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "3%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "09.02",
    "Descrição do Item da Lista (LC 116/2003)": "Agenciamento, organização, promoção, intermediação e execução de programas de turismo, passeios, viagens, excursões, hospedagens e congêneres.",
    "CNAE": "4929-9/03 - Organização de excursões em veículos rodoviários próprios, municipal, 4929-9/04 - Organização de excursões em veículos rodoviários próprios, intermunicipal, interestadual e internacional, 7911-2/00 - Agências de viagens, 7912-1/00 - Operadores turísticos, 7990-2/00 - Serviços de reservas e outros serviços de turismo não especificados anteriormente",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "3%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "09.03",
    "Descrição do Item da Lista (LC 116/2003)": "Guias de turismo.",
    "CNAE": "7912-1/00 - Operadores turísticos",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "3%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "10.01",
    "Descrição do Item da Lista (LC 116/2003)": "Agenciamento, corretagem ou intermediação de câmbio, de seguros, de cartões de crédito, de planos de saúde e de planos de previdência privada.",
    "CNAE": "6612-6/03 - Corretoras de câmbio, 6622-3/00 - Corretores e agentes de seguros, de planos de previdência complementar e de saúde",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "10.02",
    "Descrição do Item da Lista (LC 116/2003)": "Agenciamento, corretagem ou intermediação de títulos em geral, valores mobiliários e contratos quaisquer.",
    "CNAE": "6612-6/01 - Corretoras de títulos e valores mobiliários, 6612-6/02 - Distribuidoras de títulos e valores mobiliários, 6612-6/04 - Corretoras de contratos de mercadorias, 6612-6/05 - Agentes de investimentos em aplicações financeiras, 6619-3/99 - Outras atividades auxiliares dos serviços financeiros não especificadas anteriormente",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "10.03",
    "Descrição do Item da Lista (LC 116/2003)": "Agenciamento, corretagem ou intermediação de direitos da propriedade industrial, artística ou literária.",
    "CNAE": "5811-5/00 - Edição de livros, 6022-5/02 - Atividades relacionadas à televisão por assinatura, exceto programadoras, 6911-7/03 - Agente de propriedade industrial, 7490-1/05 - Agenciamento de profissionais para atividades esportivas, culturais e artísticas",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "10.04",
    "Descrição do Item da Lista (LC 116/2003)": "Agenciamento, corretagem ou intermediação de contratos de arrendamento mercantil (leasing), de franquia (franchising) e de faturização (factoring).",
    "CNAE": "7490-1/04 - Atividades de intermediação e agenciamento de serviços e negócios em geral, exceto imobiliários",
    "Local da Incidência": "❌Prestador\n✅Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "10.05",
    "Descrição do Item da Lista (LC 116/2003)": "Agenciamento, corretagem ou intermediação de bens móveis ou imóveis, não abrangidos em outros itens ou subitens, inclusive aqueles realizados no âmbito de Bolsas de Mercadorias e Futuros, por quaisquer meios.",
    "CNAE": "4512-9/02 - Comércio sob consignação de veículos automotores, 4542-1/01 - Representantes comerciais e agentes do comércio de motocicletas e motonetas, peças e acessórios, 5250-8/03 - Agenciamento de cargas, exceto para o transporte marítimo, 6612-6/05 - Agentes de investimentos em aplicações financeiras, 6821-8/01 - Corretagem na compra e venda e avaliação de imóveis",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "10.06",
    "Descrição do Item da Lista (LC 116/2003)": "Agenciamento marítimo.",
    "CNAE": "5232-0/00 - Atividades de agenciamento marítimo",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "10.07",
    "Descrição do Item da Lista (LC 116/2003)": "Agenciamento de notícias.",
    "CNAE": "6391-7/00 - Agências de notícias",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "10.08",
    "Descrição do Item da Lista (LC 116/2003)": "Agenciamento de publicidade e propaganda, inclusive o agenciamento de veiculação por quaisquer meios.",
    "CNAE": "6010-1/00 - Atividades de rádio, 7312-2/00 - Agenciamento de espaços para publicidade, exceto em veículos de comunicação, 7490-1/04 - Atividades de intermediação e agenciamento de serviços e negócios em geral, exceto imobiliários",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "10.09",
    "Descrição do Item da Lista (LC 116/2003)": "Representação de qualquer natureza, inclusive comercial.",
    "CNAE": "4512-9/01 - Representantes comerciais e agentes do comércio de veículos automotores, 4512-9/02 - Comércio sob consignação de veículos automotores, 4530-7/06 - Representantes comerciais e agentes do comércio de peças e acessórios novos e usados para veículos automotores, 4542-1/01 - Representantes comerciais e agentes do comércio de motocicletas e motonetas, peças e acessórios, 4611-7/00 - Representantes comerciais e agentes do comércio de matérias-primas agrícolas e animais vivos",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "10.10",
    "Descrição do Item da Lista (LC 116/2003)": "Distribuição de bens de terceiros",
    "CNAE": "5913-8/00 - Distribuição cinematográfica, de vídeo e de programas de televisão, 7490-1/04 - Atividades de intermediação e agenciamento de serviços e negócios em geral, exceto imobiliários",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "11.01",
    "Descrição do Item da Lista (LC 116/2003)": "Guarda e estacionamento de veículos terrestres automotores, de aeronaves e de embarcações.",
    "CNAE": "5223-1/00 - Estacionamento de veículos, 5240-1/99 - Atividades auxiliares dos transportes aéreos, exceto operação dos aeroportos e campos de aterrissagem, 9329-8/99 - Outras atividades de recreação e lazer não especificadas anteriormente",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "11.02",
    "Descrição do Item da Lista (LC 116/2003)": "Vigilância, segurança ou monitoramento de bens, pessoas e semoventes.",
    "CNAE": "8011-1/01 - Atividades de vigilância e segurança privada, 8020-0/01 - Atividades de monitoramento de sistemas de segurança eletrônico",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "11.03",
    "Descrição do Item da Lista (LC 116/2003)": "Escolta, inclusive de veículos e cargas.",
    "CNAE": "5229-0/99 - Outras atividades auxiliares dos transportes terrestres não especificadas anteriormente",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "11.04",
    "Descrição do Item da Lista (LC 116/2003)": "Armazenamento, depósito, carga, descarga, arrumação e guarda de bens de qualquer espécie",
    "CNAE": "4930-2/04 - Transporte rodoviário de mudanças, 5211-7/01 - Armazéns gerais - emissão de warrant, 5211-7/02 - Guarda-móveis, 5211-7/99 - Depósitos de mercadorias para terceiros, exceto armazéns gerais e guarda-móveis, 5212-5/00 - Carga e descarga",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "12.01",
    "Descrição do Item da Lista (LC 116/2003)": "Espetáculos teatrais.",
    "CNAE": "9001-9/01 - Produção teatral, 9001-9/99 - Artes cênicas, espetáculos e atividades complementares não especificados anteriormente",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "12.02",
    "Descrição do Item da Lista (LC 116/2003)": "Exibições cinematográficas.",
    "CNAE": "5914-6/00 - Atividades de exibição cinematográfica",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "12.03",
    "Descrição do Item da Lista (LC 116/2003)": "Espetáculos circenses.",
    "CNAE": "9001-9/04 - Produção de espetáculos circenses, de marionetes e similares, 9001-9/99 - Artes cênicas, espetáculos e atividades complementares não especificados anteriormente",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "12.04",
    "Descrição do Item da Lista (LC 116/2003)": "Programas de auditório.",
    "CNAE": "9001-9/99 - Artes cênicas, espetáculos e atividades complementares não especificados anteriormente\n",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "12.05",
    "Descrição do Item da Lista (LC 116/2003)": "Parques de diversões, centros de lazer e congêneres.",
    "CNAE": "9001-9/99 - Artes cênicas, espetáculos e atividades complementares não especificados anteriormente, 9103-1/00 - Atividades de jardins botânicos, zoológicos, parques nacionais, reservas ecológicas e áreas de proteção ambiental, 9312-3/00 - Clubes sociais, esportivos e similares, 9321-2/00 - Parques de diversão e parques temáticos",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "12.06",
    "Descrição do Item da Lista (LC 116/2003)": "Boates, taxi dancing e congêneres",
    "CNAE": "9329-8/01 - Discotecas, danceterias, salões de dança e similares",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "12.07",
    "Descrição do Item da Lista (LC 116/2003)": "Shows, ballet, danças, desfiles, bailes, óperas, concertos, recitais, festivais e congêneres.",
    "CNAE": "9001-9/02 - Produção musical, 9001-9/03 - Produção de espetáculos de dança",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "12.08",
    "Descrição do Item da Lista (LC 116/2003)": "Feiras, exposições, congressos e congêneres.",
    "CNAE": "8230-0/01 - Serviços de organização de feiras, congressos, exposições e festas",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "12.09",
    "Descrição do Item da Lista (LC 116/2003)": "Bilhares, boliches e diversões eletrônicas ou não.",
    "CNAE": "9200-3/99 - Exploração de jogos de azar e apostas não especificados anteriormente, 9329-8/02 - Exploração de boliches, 9329-8/03 - Exploração de jogos de sinuca, bilhar e similares, 9329-8/04 - Exploração de jogos eletrônicos recreativos",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "12.10",
    "Descrição do Item da Lista (LC 116/2003)": "Corridas e competições de animais.",
    "CNAE": "9001-9/05 - Produção de espetáculos de rodeios, vaquejadas e similares, 9200-3/02 - Exploração de apostas em corridas de cavalos",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "12.11",
    "Descrição do Item da Lista (LC 116/2003)": "Competições esportivas ou de destreza física ou intelectual, com ou sem a participação do espectador.",
    "CNAE": "9319-1/01 - Produção e promoção de eventos esportivos, 9319-1/99 - Outras atividades esportivas não especificadas anteriormente",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "12.12",
    "Descrição do Item da Lista (LC 116/2003)": "Execução de música",
    "CNAE": "9001-9/02 - Produção musical",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "12.13",
    "Descrição do Item da Lista (LC 116/2003)": "Produção, mediante ou sem encomenda prévia, de eventos, espetáculos, entrevistas, shows, ballet, danças, desfiles, bailes, teatros, óperas, concertos, recitais, festivais e congêneres.",
    "CNAE": "5911-1/99 - Atividades de produção cinematográfica, de vídeos e de programas de televisão não especificadas anteriormente, 6021-7/00 - Atividades de televisão aberta, 9001-9/01 - Produção teatral, 9001-9/02 - Produção musical, 9001-9/03 - Produção de espetáculos de dança",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "12.14",
    "Descrição do Item da Lista (LC 116/2003)": "Fornecimento de música para ambientes fechados ou não, mediante transmissão por qualquer processo.",
    "CNAE": "9001-9/02 - Produção musical, 9001-9/06 - Atividades de sonorização e de iluminação",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "12.15",
    "Descrição do Item da Lista (LC 116/2003)": "Desfiles de blocos carnavalescos ou folclóricos, trios elétricos e congêneres.",
    "CNAE": "9001-9/02 - Produção musical, 9001-9/03 - Produção de espetáculos de dança, 9493-6/00 - Atividades de organizações associativas ligadas à cultura e à arte",
    "Local da Incidência": "",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "12.16",
    "Descrição do Item da Lista (LC 116/2003)": "Exibição de filmes, entrevistas, musicais, espetáculos, shows, concertos, desfiles, óperas, competições esportivas, de destreza intelectual ou congêneres.",
    "CNAE": "5914-6/00 - Atividades de exibição cinematográfica, 9001-9/02 - Produção musical",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "12.17",
    "Descrição do Item da Lista (LC 116/2003)": "Recreação e animação, inclusive em festas e eventos de qualquer natureza.",
    "CNAE": "9329-8/99 - Outras atividades de recreação e lazer não especificadas anteriormente\n",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "13.02",
    "Descrição do Item da Lista (LC 116/2003)": "Fonografia ou gravação de sons, inclusive trucagem, dublagem, mixagem e congêneres.",
    "CNAE": "1830-0/01 - Reprodução de som em qualquer suporte, 5912-0/01 - Serviços de dublagem, 5912-0/02 - Serviços de mixagem sonora em produção audiovisual, 5920-1/00 - Atividades de gravação de som e de edição de música",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "13.03",
    "Descrição do Item da Lista (LC 116/2003)": "Fotografia e cinematografia, inclusive revelação, ampliação, cópia, reprodução, trucagem e congêneres.",
    "CNAE": "1830-0/02 - Reprodução de vídeo em qualquer suporte, 5911-1/01 - Estúdios cinematográficos, 5912-0/99 - Atividades de pós-produção cinematográfica, de vídeos e de programas de televisão não especificadas anteriormente, 7420-0/01 - Atividades de produção de fotografias, exceto aérea e submarina, 7420-0/02 - Atividades de produção de fotografias aéreas e submarinas",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "13.04",
    "Descrição do Item da Lista (LC 116/2003)": "Reprografia, microfilmagem e digitalização.",
    "CNAE": "7420-0/05 - Serviços de microfilmagem, 8219-9/01 - Fotocópias",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "13.05",
    "Descrição do Item da Lista (LC 116/2003)": "Composição gráfica, fotocomposição, clicheria, zincografia, litografia, fotolitografia.",
    "CNAE": "1741-9/01 - Fabricação de formulários contínuos, 1811-3/01 - Impressão de jornais, 1811-3/02 - Impressão de livros, revistas e outras publicações periódicas, 1812-1/00 - Impressão de material de segurança, 1813-0/01 - Impressão de material para uso publicitário",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "14.01",
    "Descrição do Item da Lista (LC 116/2003)": "Lubrificação, limpeza, lustração, revisão, carga e recarga, conserto, restauração, blindagem, manutenção e conservação de máquinas, veículos, aparelhos, equipamentos, motores, elevadores ou de qualquer objeto (exceto peças e partes empregadas, que ficam sujeitas ao ICMS). ",
    "CNAE": "2930-1/03 - Fabricação de cabines, carrocerias e reboques para outros veículos automotores, exceto caminhões e ônibus, 3311-2/00 - Manutenção e reparação de tanques, reservatórios metálicos e caldeiras, exceto para veículos, 3312-1/02 - Manutenção e reparação de aparelhos e instrumentos de medida, teste e controle, 3312-1/03 - Manutenção e reparação de aparelhos eletromédicos e eletroterapêuticos e equipamentos de irradiação, 3312-1/04 - Manutenção e reparação de equipamentos e instrumentos ópticos",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "14.02",
    "Descrição do Item da Lista (LC 116/2003)": "Assistência técnica.",
    "CNAE": "3313-9/99 - Manutenção e reparação de máquinas, aparelhos e materiais elétricos não especificados anteriormente, 3314-7/15 - Manutenção e reparação de máquinas e equipamentos para uso na extração mineral, exceto na extração de petróleo, 3319-8/00 - Manutenção e reparação de equipamentos e produtos não especificados anteriormente, 4520-0/01 - Serviços de manutenção e reparação mecânica de veículos automotores, 4543-9/00 - Manutenção e reparação de motocicletas e motonetas",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "14.03",
    "Descrição do Item da Lista (LC 116/2003)": "Recondicionamento de motores (exceto peças e partes empregadas, que ficam sujeitas ao ICMS).",
    "CNAE": "2950-6/00 - Recondicionamento e recuperação de motores para veículos automotores",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "14.04",
    "Descrição do Item da Lista (LC 116/2003)": "Recauchutagem ou regeneração de pneus.",
    "CNAE": "2212-9/00 - Reforma de pneumáticos usados, 4520-0/06 - Serviços de borracharia para veículos automotores",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "14.05",
    "Descrição do Item da Lista (LC 116/2003)": "Restauração, recondicionamento, acondicionamento, pintura, beneficiamento, lavagem, secagem, tingimento, galvanoplastia, anodização, corte, recorte, polimento, plastificação e congêneres, de objetos quaisquer.",
    "CNAE": "1340-5/01 - Estamparia e texturização em fios, tecidos, artefatos têxteis e peças do vestuário, 1610-2/05 - Serviço de tratamento de madeira realizado sob contrato, 2391-5/01 - Britamento de pedras, exceto associado à extração, 2391-5/02 - Aparelhamento de pedras para construção, exceto associado à extração, 2391-5/03 - Aparelhamento de placas e execução de trabalhos em mármore, granito, ardósia e outras pedras",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "14.06",
    "Descrição do Item da Lista (LC 116/2003)": "Instalação e montagem de aparelhos, máquinas e equipamentos, inclusive montagem industrial, prestados ao usuário final, exclusivamente com material por ele fornecido.",
    "CNAE": "3321-0/00 - Instalação de máquinas e equipamentos industriais, 3329-5/99 - Instalação de outros equipamentos não especificados anteriormente, 4321-5/00 - Instalação e manutenção elétrica, 4322-3/02 - Instalação e manutenção de sistemas centrais de ar condicionado, de ventilação e refrigeração, 4322-3/03 - Instalações de sistema de prevenção contra incêndio",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "14.07",
    "Descrição do Item da Lista (LC 116/2003)": "Colocação de molduras e congêneres.",
    "CNAE": "1629-3/01 - Fabricação de artefatos diversos de madeira, exceto móveis, 4330-4/03 - Obras de acabamento em gesso e estuque",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "14.08",
    "Descrição do Item da Lista (LC 116/2003)": "Encadernação, gravação e douração de livros, revistas e congêneres.",
    "CNAE": "1822-9/99 - Serviços de acabamentos gráficos, exceto encadernação e plastificação",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "14.09",
    "Descrição do Item da Lista (LC 116/2003)": "Alfaiataria e costura, quando o material for fornecido pelo usuário final, exceto aviamento.",
    "CNAE": "1340-5/99 - Outros serviços de acabamento em fios, tecidos, artefatos têxteis e peças do vestuário, 1411-8/02 - Facção de roupas íntimas, 1412-6/02 - Confecção, sob medida, de peças do vestuário, exceto roupas íntimas, 1412-6/03 - Facção de peças do vestuário, exceto roupas íntimas, 1413-4/01 - Confecção de roupas profissionais, exceto sob medida",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "14.10",
    "Descrição do Item da Lista (LC 116/2003)": "Tinturaria e lavanderia.",
    "CNAE": "1340-5/02 - Alvejamento, tingimento e torção em fios, tecidos, artefatos têxteis e peças do vestuário, 1340-5/99 - Outros serviços de acabamento em fios, tecidos, artefatos têxteis e peças do vestuário, 9601-7/01 - Lavanderias, 9601-7/02 - Tinturarias, 9601-7/03 - Toalheiros",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "14.11",
    "Descrição do Item da Lista (LC 116/2003)": "Tapeçaria e reforma de estofamentos em geral.",
    "CNAE": "4520-0/08 - Serviços de capotaria, 9529-1/05 - Reparação de artigos do mobiliário",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "14.12",
    "Descrição do Item da Lista (LC 116/2003)": "Funilaria e lanternagem.",
    "CNAE": "4520-0/02 - Serviços de lanternagem ou funilaria e pintura de veículos automotores\n",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "14.13",
    "Descrição do Item da Lista (LC 116/2003)": "Carpintaria e serralheria.",
    "CNAE": "1622-6/99 - Fabricação de outros artigos de carpintaria para construção, 2399-1/01 - Decoração, lapidação, gravação, vitrificação e outros trabalhos em cerâmica, louça, vidro e cristal, 2512-8/00 - Fabricação de esquadrias de metal, 2542-0/00 - Fabricação de artigos de serralheria, exceto esquadrias, 2599-3/01 - Serviços de confecção de armações metálicas para a construção",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "14.14",
    "Descrição do Item da Lista (LC 116/2003)": "Guincho intramunicipal, guindate e içamento.",
    "CNAE": "4399-1/04 - Serviços de operação e fornecimento de equipamentos para transporte e elevação de cargas e pessoas para uso em obras, 5229-0/02 - Serviços de reboque de veículos",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "15.01",
    "Descrição do Item da Lista (LC 116/2003)": "Administração de fundos quaisquer, de consórcio, de cartão de crédito ou débito e congêneres, de carteira de clientes, de cheques pré-datados e congêneres.",
    "CNAE": "6421-2/00 - Bancos comerciais, 6422-1/00 - Bancos múltiplos, com carteira comercial, 6423-9/00 - Caixas econômicas, 6424-7/01 - Bancos cooperativos, 6424-7/02 - Cooperativas centrais de crédito",
    "Local da Incidência": "❌Prestador\n✅Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "15.02",
    "Descrição do Item da Lista (LC 116/2003)": "Abertura de contas em geral, inclusive conta-corrente, conta de investimentos e aplicação e caderneta de poupança, no País e no exterior, bem como a manutenção das referidas contas ativas e inativas.",
    "CNAE": "6421-2/00 - Bancos comerciais, 6422-1/00 - Bancos múltiplos, com carteira comercial, 6423-9/00 - Caixas econômicas, 6424-7/01 - Bancos cooperativos, 6424-7/03 - Cooperativas de crédito mútuo",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "15.03",
    "Descrição do Item da Lista (LC 116/2003)": "Locação e manutenção de cofres particulares, de terminais eletrônicos, de terminais de atendimento e de bens e equipamentos em geral. ",
    "CNAE": "6421-2/00 - Bancos comerciais, 6422-1/00 - Bancos múltiplos, com carteira comercial, 6423-9/00 - Caixas econômicas, 6424-7/01 - Bancos cooperativos, 6424-7/03 - Cooperativas de crédito mútuo",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "15.04",
    "Descrição do Item da Lista (LC 116/2003)": "Fornecimento ou emissão de atestados em geral, inclusive atestado de idoneidade, atestado de capacidade financeira e congêneres. ",
    "CNAE": "6421-2/00 - Bancos comerciais, 6422-1/00 - Bancos múltiplos, com carteira comercial, 6423-9/00 - Caixas econômicas, 6424-7/01 - Bancos cooperativos, 6424-7/03 - Cooperativas de crédito mútuo",
    "Local da Incidência": "",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "15.05",
    "Descrição do Item da Lista (LC 116/2003)": "Cadastro, elaboração de ficha cadastral, renovação cadastral e congêneres, inclusão ou exclusão no Cadastro de Emitentes de Cheques sem Fundos - CCF ou em quaisquer outros bancos cadastrais. ",
    "CNAE": "6421-2/00 - Bancos comerciais, 6422-1/00 - Bancos múltiplos, com carteira comercial, 6423-9/00 - Caixas econômicas, 6424-7/01 - Bancos cooperativos, 6424-7/03 - Cooperativas de crédito mútuo\n",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "15.06",
    "Descrição do Item da Lista (LC 116/2003)": "Emissão, reemissão e fornecimento de avisos, comprovantes e documentos em geral; abono de firmas; coleta e entrega de documentos, bens e valores; comunicação com outra agência ou com a administração central; licenciamento eletrônico de veículos; transferência de veículos; agenciamento fiduciário ou depositário; devolução de bens em custódia. ",
    "CNAE": "6421-2/00 - Bancos comerciais, 6422-1/00 - Bancos múltiplos, com carteira comercial, 6423-9/00 - Caixas econômicas, 6424-7/01 - Bancos cooperativos, 6424-7/03 - Cooperativas de crédito mútuo",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "15.07",
    "Descrição do Item da Lista (LC 116/2003)": "Acesso, movimentação, atendimento e consulta a contas em geral, por qualquer meio ou processo, inclusive por telefone, fac-símile, internet e telex, acesso a terminais de atendimento, inclusive vinte e quatro horas; acesso a outro banco e a rede compartilhada; fornecimento de saldo, extrato e demais informações relativas a contas em geral, por qualquer meio ou processo. ",
    "CNAE": "6421-2/00 - Bancos comerciais, 6422-1/00 - Bancos múltiplos, com carteira comercial, 6423-9/00 - Caixas econômicas, 6424-7/01 - Bancos cooperativos, 6424-7/03 - Cooperativas de crédito mútuo",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "15.08",
    "Descrição do Item da Lista (LC 116/2003)": "Emissão, reemissão, alteração, cessão, substituição, cancelamento e registro de contrato de crédito; estudo, análise e avaliação de operações de crédito; emissão, concessão, alteração ou contratação de aval, fiança, anuência e congêneres; serviços relativos à abertura de crédito, para quaisquer fins.",
    "CNAE": "6421-2/00 - Bancos comerciais, 6422-1/00 - Bancos múltiplos, com carteira comercial, 6423-9/00 - Caixas econômicas, 6424-7/01 - Bancos cooperativos, 6424-7/03 - Cooperativas de crédito mútuo",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "15.09",
    "Descrição do Item da Lista (LC 116/2003)": "Arrendamento mercantil (leasing) de quaisquer bens, inclusive cessão de direitos e obrigações, substituição de garantia, alteração, cancelamento e registro de contrato, e demais serviços relacionados ao arrendamento mercantil (leasing). ",
    "CNAE": "6421-2/00 - Bancos comerciais, 6422-1/00 - Bancos múltiplos, com carteira comercial, 6423-9/00 - Caixas econômicas, 6424-7/01 - Bancos cooperativos, 6424-7/03 - Cooperativas de crédito mútuo",
    "Local da Incidência": "❌Prestador\n✅Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "15.10",
    "Descrição do Item da Lista (LC 116/2003)": "Serviços relacionados a cobranças, recebimentos ou pagamentos em geral, de títulos quaisquer, de contas ou carnês, de câmbio, de tributos e por conta de terceiros, inclusive os efetuados por meio eletrônico, automático ou por máquinas de atendimento; fornecimento de posição de cobrança recebimento ou pagamento; emissão de carnês, fichas de compensação, impressos e documentos em geral. ",
    "CNAE": "6421-2/00 - Bancos comerciais, 6422-1/00 - Bancos múltiplos, com carteira comercial, 6423-9/00 - Caixas econômicas, 6424-7/01 - Bancos cooperativos, 6424-7/03 - Cooperativas de crédito mútuo",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "15.11",
    "Descrição do Item da Lista (LC 116/2003)": "Devolução de títulos, protesto de títulos, sustação de protesto, manutenção de títulos, reapresentação de títulos, e demais serviços a eles relacionados. ",
    "CNAE": "6421-2/00 - Bancos comerciais, 6422-1/00 - Bancos múltiplos, com carteira comercial, 6423-9/00 - Caixas econômicas, 6424-7/01 - Bancos cooperativos, 6424-7/03 - Cooperativas de crédito mútuo",
    "Local da Incidência": "",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "15.12",
    "Descrição do Item da Lista (LC 116/2003)": "Custódia em geral, inclusive de títulos e valores mobiliários.",
    "CNAE": "6421-2/00 - Bancos comerciais, 6422-1/00 - Bancos múltiplos, com carteira comercial, 6423-9/00 - Caixas econômicas, 6424-7/01 - Bancos cooperativos, 6424-7/03 - Cooperativas de crédito mútuo",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "15.13",
    "Descrição do Item da Lista (LC 116/2003)": "Serviços relacionados a operações de câmbio em geral, edição, alteração, prorrogação, cancelamento e baixa de contrato de câmbio; emissão de registro de exportação ou de crédito; cobrança ou depósito no exterior; emissão, fornecimento e cancelamento de cheques de viagem; fornecimento, transferência, cancelamento e demais serviços relativos à carta de crédito de importação, exportação e garantias recebidas; envio e recebimento de mensagens em geral relacionadas a operações de câmbio. ",
    "CNAE": "6421-2/00 - Bancos comerciais, 6422-1/00 - Bancos múltiplos, com carteira comercial, 6423-9/00 - Caixas econômicas, 6424-7/01 - Bancos cooperativos, 6424-7/03 - Cooperativas de crédito mútuo",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "15.14",
    "Descrição do Item da Lista (LC 116/2003)": "Fornecimento, emissão, reemissão, renovação e manutenção de cartão magnético, cartão de crédito, cartão de débito, cartão salário e congêneres. ",
    "CNAE": "6421-2/00 - Bancos comerciais, 6422-1/00 - Bancos múltiplos, com carteira comercial, 6423-9/00 - Caixas econômicas, 6424-7/01 - Bancos cooperativos, 6424-7/03 - Cooperativas de crédito mútuo",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "15.15",
    "Descrição do Item da Lista (LC 116/2003)": "Compensação de cheques e títulos quaisquer; serviços relacionados a depósito, inclusive depósito identificado, a saque de contas quaisquer, por qualquer meio ou processo, inclusive em terminais eletrônicos e de atendimento. ",
    "CNAE": "6421-2/00 - Bancos comerciais, 6422-1/00 - Bancos múltiplos, com carteira comercial, 6423-9/00 - Caixas econômicas, 6424-7/01 - Bancos cooperativos, 6424-7/03 - Cooperativas de crédito mútuo",
    "Local da Incidência": "",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "15.16",
    "Descrição do Item da Lista (LC 116/2003)": "Emissão, reemissão, liquidação, alteração, cancelamento e baixa de ordens de pagamento, ordens de crédito e similares, por qualquer meio ou processo; serviços relacionados à transferência de valores, dados, fundos, pagamentos e similares, inclusive entre contas em geral.",
    "CNAE": "6421-2/00 - Bancos comerciais, 6422-1/00 - Bancos múltiplos, com carteira comercial, 6423-9/00 - Caixas econômicas, 6424-7/01 - Bancos cooperativos, 6424-7/03 - Cooperativas de crédito mútuo",
    "Local da Incidência": "",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "15.17",
    "Descrição do Item da Lista (LC 116/2003)": "Emissão, fornecimento, devolução, sustação, cancelamento e oposição de cheques quaisquer, avulso ou por talão. ",
    "CNAE": "6421-2/00 - Bancos comerciais, 6422-1/00 - Bancos múltiplos, com carteira comercial, 6423-9/00 - Caixas econômicas, 6424-7/01 - Bancos cooperativos, 6424-7/03 - Cooperativas de crédito mútuo",
    "Local da Incidência": "",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "15.18",
    "Descrição do Item da Lista (LC 116/2003)": "Serviços relacionados a crédito imobiliário, avaliação e vistoria de imóvel ou obra, análise técnica e jurídica, emissão, reemissão, alteração, transferência e renegociação de contrato, emissão e reemissão do termo de quitação e demais serviços relacionados a crédito imobiliário.",
    "CNAE": "6421-2/00 - Bancos comerciais, 6422-1/00 - Bancos múltiplos, com carteira comercial, 6423-9/00 - Caixas econômicas, 6424-7/01 - Bancos cooperativos, 6424-7/03 - Cooperativas de crédito mútuo",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "16.01",
    "Descrição do Item da Lista (LC 116/2003)": "Serviços de transporte coletivo municipal rodoviário, metroviário, ferroviário e aquaviário de passageiros.",
    "CNAE": "4912-4/02 - Transporte ferroviário de passageiros municipal e em região metropolitana, 4912-4/03 - Transporte metroviário, 4921-3/01 - Transporte rodoviário coletivo de passageiros, com itinerário fixo, municipal, 4923-0/01 - Serviço de táxi, 4923-0/02 - Serviço de transporte de passageiros - locação de automóveis com motorista",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "16.02",
    "Descrição do Item da Lista (LC 116/2003)": "Outros serviços de transporte de natureza municipal.",
    "CNAE": "4923-0/01 - Serviço de táxi, 4923-0/02 - Serviço de transporte de passageiros - locação de automóveis com motorista, 4924-8/00 - Transporte escolar, 4929-9/01 - Transporte rodoviário coletivo de passageiros, sob regime de fretamento, municipal, 4930-2/01 - Transporte rodoviário de carga, exceto produtos perigosos e mudanças, municipal",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "17.01",
    "Descrição do Item da Lista (LC 116/2003)": "Assessoria ou consultoria de qualquer natureza, não contida em outros itens desta lista; análise, exame, pesquisa, coleta, compilação e fornecimento de dados e informações de qualquer natureza, inclusive cadastro e similares.",
    "CNAE": "0162-8/99 - Atividades de apoio à pecuária não especificadas anteriormente, 0163-6/00 - Atividades de pós-colheita, 0311-6/04 - Atividades de apoio à pesca em água salgada, 0312-4/04 - Atividades de apoio à pesca em água doce, 0321-3/05 - Atividades de apoio à aqüicultura em água salgada e salobra",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "17.02",
    "Descrição do Item da Lista (LC 116/2003)": "Datilografia, digitação, estenografia, expediente, secretaria em geral, resposta audível, redação, edição, interpretação, revisão, tradução, apoio e infra estrutura administrativa e congêneres.",
    "CNAE": "5229-0/01 - Serviços de apoio ao transporte por táxi, inclusive centrais de chamada, 5811-5/00 - Edição de livros, 5812-3/02 - Edição de jornais não diários, 5813-1/00 - Edição de revistas, 5819-1/00 - Edição de cadastros, listas e outros produtos gráficos",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "17.03",
    "Descrição do Item da Lista (LC 116/2003)": "Planejamento, coordenação, programação ou organização técnica, financeira ou administrativa.",
    "CNAE": "3511-5/02 - Atividades de coordenação e controle da operação da geração e transmissão de energia elétrica, 7020-4/00 - Atividades de consultoria em gestão empresarial, exceto consultoria técnica específica, 8211-3/00 - Serviços combinados de escritório e apoio administrativo, 8299-7/99 - Outras atividades de serviços prestados principalmente às empresas não especificadas anteriormente",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "17.04",
    "Descrição do Item da Lista (LC 116/2003)": "Recrutamento, agenciamento, seleção e colocação de mão de obra",
    "CNAE": "7810-8/00 - Seleção e agenciamento de mão-de-obra\n",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "17.05",
    "Descrição do Item da Lista (LC 116/2003)": "Fornecimento de mão de obra, mesmo em caráter temporário, inclusive de empregados ou trabalhadores, avulsos ou temporários, contratados pelo prestador de serviço.",
    "CNAE": "7820-5/00 - Locação de mão-de-obra temporária, 7830-2/00 - Fornecimento e gestão de recursos humanos para terceiros, 8111-7/00 - Serviços combinados para apoio a edifícios, exceto condomínios prediais",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "17.06",
    "Descrição do Item da Lista (LC 116/2003)": "Propaganda e publicidade, inclusive promoção de vendas, planejamento de campanhas ou sistemas de publicidade, elaboração de desenhos, textos e demais materiais publicitários.",
    "CNAE": "5911-1/02 - Produção de filmes para publicidade, 7311-4/00 - Agências de publicidade, 7319-0/01 - Criação de estandes para feiras e exposições, 7319-0/02 - Promoção de vendas, 7319-0/03 - Marketing direto",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "17.08",
    "Descrição do Item da Lista (LC 116/2003)": "Franquia (franchising).",
    "CNAE": "5310-5/02 - Atividades de franqueadas e permissionárias do Correio Nacional, 7740-3/00 - Gestão de ativos intangíveis não-financeiros",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "17.09",
    "Descrição do Item da Lista (LC 116/2003)": "Perícias, laudos, exames técnicos e análises técnicas.",
    "CNAE": "6621-5/01 - Peritos e avaliadores de seguros, 6911-7/02 - Atividades auxiliares da justiça, 6920-6/02 - Atividades de consultoria e auditoria contábil e tributária, 7112-0/00 - Serviços de engenharia, 7119-7/04 - Serviços de perícia técnica relacionados à segurança do trabalho",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "17.10",
    "Descrição do Item da Lista (LC 116/2003)": "Planejamento, organização e administração de feiras, exposições, congressos e congêneres.",
    "CNAE": "8230-0/01 - Serviços de organização de feiras, congressos, exposições e festas",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "17.11",
    "Descrição do Item da Lista (LC 116/2003)": "Organização de festas e recepções; bufê (exceto o fornecimento de alimentação e bebidas, que fica sujeito ao ICMS).",
    "CNAE": "5620-1/02 - Serviços de alimentação para eventos e recepções - bufê",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "17.12",
    "Descrição do Item da Lista (LC 116/2003)": "Administração em geral, inclusive de bens e negócios de terceiros.",
    "CNAE": "6493-0/00 - Administração de consórcios para aquisição de bens e direitos, 6611-8/01 - Bolsa de valores, 6611-8/02 - Bolsa de mercadorias, 6611-8/03 - Bolsa de mercadorias e futuros, 6611-8/04 - Administração de mercados de balcão organizados",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "17.13",
    "Descrição do Item da Lista (LC 116/2003)": "Leilão e congêneres.",
    "CNAE": "8299-7/04 - Leiloeiros independentes",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "17.14",
    "Descrição do Item da Lista (LC 116/2003)": "Advocacia.",
    "CNAE": "6911-7/01 - Serviços advocatícios",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "17.15",
    "Descrição do Item da Lista (LC 116/2003)": "Arbitragem de qualquer espécie, inclusive jurídica.",
    "CNAE": "6911-7/02 - Atividades auxiliares da justiça",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "17.16",
    "Descrição do Item da Lista (LC 116/2003)": "Auditoria.",
    "CNAE": "6621-5/01 - Peritos e avaliadores de seguros, 6621-5/02 - Auditoria e consultoria atuarial, 6920-6/02 - Atividades de consultoria e auditoria contábil e tributária",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "17.17",
    "Descrição do Item da Lista (LC 116/2003)": "Análise de Organização e Métodos.",
    "CNAE": "7020-4/00 - Atividades de consultoria em gestão empresarial, exceto consultoria técnica específica",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "17.18",
    "Descrição do Item da Lista (LC 116/2003)": "Atuária e cálculos técnicos de qualquer natureza.",
    "CNAE": "6621-5/02 - Auditoria e consultoria atuarial",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "17.19",
    "Descrição do Item da Lista (LC 116/2003)": "Contabilidade, inclusive serviços técnicos e auxiliares.",
    "CNAE": "6920-6/01 - Atividades de contabilidade",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "17.20",
    "Descrição do Item da Lista (LC 116/2003)": "Consultoria e assessoria econômica ou financeira.",
    "CNAE": "6612-6/05 - Agentes de investimentos em aplicações financeiras, 6621-5/02 - Auditoria e consultoria atuarial, 7020-4/00 - Atividades de consultoria em gestão empresarial, exceto consultoria técnica específica",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "17.21",
    "Descrição do Item da Lista (LC 116/2003)": "Estatística.",
    "CNAE": "7320-3/00 - Pesquisas de mercado e de opinião pública, 7490-1/99 - Outras atividades profissionais, científicas e técnicas não especificadas anteriormente",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "17.22",
    "Descrição do Item da Lista (LC 116/2003)": "Cobrança em geral.",
    "CNAE": "8291-1/00 - Atividades de cobrança e informações cadastrais",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "17.23",
    "Descrição do Item da Lista (LC 116/2003)": "Assessoria, análise, avaliação, atendimento, consulta, cadastro, seleção, gerenciamento de informações, administração de contas a receber ou a pagar e em geral, relacionados a operações de faturização (factoring).",
    "CNAE": "6491-3/00 - Sociedades de fomento mercantil - factoring",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "17.24",
    "Descrição do Item da Lista (LC 116/2003)": "Apresentação de palestras, conferências, seminários e congêneres.",
    "CNAE": "8599-6/99 - Outras atividades de ensino não especificadas anteriormente",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "17.25",
    "Descrição do Item da Lista (LC 116/2003)": "Inserção de textos, desenhos e outros materias de propaganda e publicidade, em qualquer meio (exceto em livros, jornais, periódicos e nas modalidades de serviços de radiodifusão sonora e de sons e imagens de recepção livre e gratuita).",
    "CNAE": "5911-1/02 - Produção de filmes para publicidade, 7311-4/00 - Agências de publicidade, 7312-2/00 - Agenciamento de espaços para publicidade, exceto em veículos de comunicação, 7319-0/99 - Outras atividades de publicidade não especificadas anteriormente",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "18.01",
    "Descrição do Item da Lista (LC 116/2003)": "Serviços de regulação de sinistros vinculados a contratos de seguros; inspeção e avaliação de riscos para cobertura de contratos de seguros; prevenção e gerência de riscos seguráveis e congêneres.",
    "CNAE": "6621-5/01 - Peritos e avaliadores de seguros, 6629-1/00 - Atividades auxiliares dos seguros, da previdência complementar e dos planos de saúde não especificadas anteriormente",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "19.01",
    "Descrição do Item da Lista (LC 116/2003)": "Serviços de distribuição e venda de bilhetes e demais produtos de loteria, bingos, cartões, pules ou cupons de apostas, sorteios, prêmios, inclusive os decorrentes de títulos de capitalização e congêneres.",
    "CNAE": "8299-7/06 - Casas lotéricas, 9200-3/01 - Casas de bingo, 9200-3/99 - Exploração de jogos de azar e apostas não especificados anteriormente",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "20.01",
    "Descrição do Item da Lista (LC 116/2003)": "Serviços portuários, ferroportuários, utilização de porto, movimentação de passageiros, reboque de embarcações, rebocador escoteiro, atracação, desatracação, serviços de praticagem, capatazia, armazenagem de qualquer natureza, serviços acessórios, movimentação de mercadorias, serviços de apoio marítimo, de movimentação ao largo, serviços de armadores, estiva, conferência, logística e congêneres. ",
    "CNAE": "0311-6/04 - Atividades de apoio à pesca em água salgada, 0312-4/04 - Atividades de apoio à pesca em água doce, 0321-3/05 - Atividades de apoio à aqüicultura em água salgada e salobra, 5030-1/01 - Navegação de apoio marítimo, 5030-1/02 - Navegação de apoio portuário",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "20.02",
    "Descrição do Item da Lista (LC 116/2003)": "Serviços aeroportuários, utilização de aeroporto, movimentação de passageiros, armazenagem de qualquer natureza, capatazia, movimentação de aeronaves, serviços de apoio aeroportuários, serviços acessórios, movimentação de mercadorias, logística e congêneres. ",
    "CNAE": "5240-1/01 - Operação dos aeroportos e campos de aterrissagem, 5240-1/99 - Atividades auxiliares dos transportes aéreos, exceto operação dos aeroportos e campos de aterrissagem, 5250-8/05 - Operador de transporte multimodal - OTM",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "20.03",
    "Descrição do Item da Lista (LC 116/2003)": "Serviços de Terminais rodoviários, ferroviários, metroviários, movimentação de passageiros, mercadorias, inclusive suas operações logísticas e congêneres",
    "CNAE": "5222-2/00 - Terminais rodoviários e ferroviários, 5250-8/05 - Operador de transporte multimodal - OTM",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "21.01",
    "Descrição do Item da Lista (LC 116/2003)": "Serviços de registros públicos, cartorários e notariais.",
    "CNAE": "6912-5/00 - Cartórios",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "22.01",
    "Descrição do Item da Lista (LC 116/2003)": "Serviços de exploração de rodovia mediante cobrança de preço ou pedágio dos usuários, envolvendo execução de serviços de conservação, manutenção, melhoramentos para adequação de capacidade e segurança de trânsito, operação, monitoração, assistência aos usuários e outros serviços definidos em contratos, atos de concessão ou de permissão ou em normas oficiais. ",
    "CNAE": "5221-4/00 - Concessionárias de rodovias, pontes, túneis e serviços relacionados",
    "Local da Incidência": "❌Prestador\n❌Tomador\n✅Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "23.01",
    "Descrição do Item da Lista (LC 116/2003)": "Serviços de programação e comunicação visual, desenho industrial e congêneres.",
    "CNAE": "7410-2/99 - Atividades de design não especificadas anteriormente, 7490-1/99 - Outras atividades profissionais, científicas e técnicas não especificadas anteriormente",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "24.01",
    "Descrição do Item da Lista (LC 116/2003)": "Serviços de chaveiros, confecção de carimbos, placas, sinalização visual, banners, adesivos e congêneres.",
    "CNAE": "3299-0/03 - Fabricação de letras, letreiros e placas de qualquer material, exceto luminosos, 3299-0/04 - Fabricação de painéis e letreiros luminosos, 4329-1/01 - Instalação de painéis publicitários, 8299-7/03 - Serviços de gravação de carimbos, exceto confecção, 9529-1/02 - Chaveiros",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "25.01",
    "Descrição do Item da Lista (LC 116/2003)": "Funerais, inclusive fornecimento de caixão, urna ou esquifes; aluguel de capela; transporte do corpo cadavérico; fornecimento de flores, coroas e outros paramentos; desembaraço de certidão de óbito; fornecimento de véu, essa e outros adornos; embalsamento, embelezamento, conservação ou restauração de cadáveres.",
    "CNAE": "9603-3/03 - Serviços de sepultamento, 9603-3/04 - Serviços de funerárias, 9603-3/05 - Serviços de somatoconservação, 9603-3/99 - Atividades funerárias e serviços relacionados não especificados anteriormente",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "25.02",
    "Descrição do Item da Lista (LC 116/2003)": "Translado intramunicipal e cremação de corpor e partes de corpos cadavéricos.",
    "CNAE": "9603-3/02 - Serviços de cremação, 9603-3/04 - Serviços de funerárias, 9603-3/99 - Atividades funerárias e serviços relacionados não especificados anteriormente",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "25.03",
    "Descrição do Item da Lista (LC 116/2003)": "Planos ou convênio funerários.",
    "CNAE": "6511-1/02 - Planos de auxílio-funeral",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "25.04",
    "Descrição do Item da Lista (LC 116/2003)": "Manutenção e conservação de jazigos e cemitérios.",
    "CNAE": "9603-3/01 - Gestão e manutenção de cemitérios\n",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "25.05",
    "Descrição do Item da Lista (LC 116/2003)": "Cessão de uso de espaços em cemitérios para sepultamento.",
    "CNAE": "9603-3/01 - Gestão e manutenção de cemitérios",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "26.01",
    "Descrição do Item da Lista (LC 116/2003)": "Serviços de coleta, remessa ou entrega de correspondências, documentos, objetos, bens ou valores, inclusive pelos correios e suas agências franqueadas; courrier e congêneres.",
    "CNAE": "5310-5/01 - Atividades do Correio Nacional, 5310-5/02 - Atividades de franqueadas e permissionárias do Correio Nacional, 5320-2/01 - Serviços de malote não realizados pelo Correio Nacional, 5320-2/02 - Serviços de entrega rápida, 8012-9/00 - Atividades de transporte de valores",
    "Local da Incidência": "",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "27.01",
    "Descrição do Item da Lista (LC 116/2003)": "Serviços de assistência social.",
    "CNAE": "8800-6/00 - Serviços de assistência social sem alojamento",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "28.01",
    "Descrição do Item da Lista (LC 116/2003)": "Serviços de avaliação de bens e serviços de qualquer natureza.",
    "CNAE": "6621-5/01 - Peritos e avaliadores de seguros, 6821-8/01 - Corretagem na compra e venda e avaliação de imóveis, 7112-0/00 - Serviços de engenharia, 7490-1/99 - Outras atividades profissionais, científicas e técnicas não especificadas anteriormente",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "29.01",
    "Descrição do Item da Lista (LC 116/2003)": "Serviços de biblioteconomia.",
    "CNAE": "9101-5/00 - Atividades de bibliotecas e arquivos",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "30.01",
    "Descrição do Item da Lista (LC 116/2003)": "Serviços de biologia, biotecnologia e química.",
    "CNAE": "7210-0/00 - Pesquisa e desenvolvimento experimental em ciências físicas e naturais, 8640-2/02 - Laboratórios clínicos",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "31.01",
    "Descrição do Item da Lista (LC 116/2003)": "Serviços técnicos em edificações, eletrônica, eletrotécnica, mecânica, telecomunicações e congêneres.",
    "CNAE": "4221-9/04 - Construção de estações e redes de telecomunicações, 4221-9/05 - Manutenção de estações e redes de telecomunicações, 4321-5/00 - Instalação e manutenção elétrica, 6120-5/01 - Telefonia móvel celular, 6190-6/99 - Outras atividades de telecomunicações não especificadas anteriormente",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "32.01",
    "Descrição do Item da Lista (LC 116/2003)": "Serviços de desenhos técnicos.",
    "CNAE": "7119-7/03 - Serviços de desenho técnico relacionados à arquitetura e engenharia",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "33.01",
    "Descrição do Item da Lista (LC 116/2003)": "Serviços de desembaraço aduaneiro, comissários, despachantes e congêneres.",
    "CNAE": "5250-8/01 - Comissaria de despachos, 5250-8/02 - Atividades de despachantes aduaneiros, 8299-7/99 - Outras atividades de serviços prestados principalmente às empresas não especificadas anteriormente",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "34.01",
    "Descrição do Item da Lista (LC 116/2003)": "Serviços de investigações particulares, detetives e congêneres.",
    "CNAE": "8030-7/00 - Atividades de investigação particular",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "35.01",
    "Descrição do Item da Lista (LC 116/2003)": "Serviços de reportagem, assessoria de imprensa, jornalismo e relações públicas.",
    "CNAE": "7020-4/00 - Atividades de consultoria em gestão empresarial, exceto consultoria técnica específica, 9002-7/01 - Atividades de artistas plásticos, jornalistas independentes e escritores",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "36.01",
    "Descrição do Item da Lista (LC 116/2003)": "Serviços de meteorologia.",
    "CNAE": "7490-1/99 - Outras atividades profissionais, científicas e técnicas não especificadas anteriormente",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "37.01",
    "Descrição do Item da Lista (LC 116/2003)": "Serviços de artistas, atletas, modelos e manequins.",
    "CNAE": "7490-1/05 - Agenciamento de profissionais para atividades esportivas, culturais e artísticas",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "38.01",
    "Descrição do Item da Lista (LC 116/2003)": "Serviços de museologia.",
    "CNAE": "9102-3/01 - Atividades de museus e de exploração de lugares e prédios históricos e atrações similares\n",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "39.01",
    "Descrição do Item da Lista (LC 116/2003)": "Serviços de ourivesaria e lapidação (quando o material for fornecido pelo tomador do serviço).",
    "CNAE": "3211-6/01 - Lapidação de gemas",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  },
  {
    "Item da Lista": "40.01",
    "Descrição do Item da Lista (LC 116/2003)": "Obras de arte sob encomenda.",
    "CNAE": "9002-7/01 - Atividades de artistas plásticos, jornalistas independentes e escritores",
    "Local da Incidência": "✅Prestador\n❌Tomador\n❌Local",
    "Aliqutota": "5%",
    "Condicionante": ""
  }
];

// 2. CONECTANDO COM A TELA
const campoBusca = document.getElementById('campoBusca');
const listaResultados = document.getElementById('listaResultados');

// 3. A MÁQUINA DE DESENHAR CARTÕES
function exibirResultados(resultados) {
    listaResultados.innerHTML = '';

    if (resultados.length === 0) {
        listaResultados.innerHTML = '<li class="mensagem-erro">Poxa, nada encontrado. Tente outro número ou serviço!</li>';
        return; 
    }

    resultados.forEach(item => {
        const li = document.createElement('li');
        li.className = 'item-resultado';
        let conteudoDoCartao = '';
        const colunas = Object.keys(item);

        colunas.forEach((nomeDaColuna, index) => {
            let valor = String(item[nomeDaColuna]);
            
            // SE TIVER \n NA SUA FICHA, ELE PULA LINHA AUTOMATICAMENTE AQUI
            valor = valor.replace(/\n/g, '<br>');
            
            // FORMATA E DESENHA O CARTÃO
            if (index === 0) {
                conteudoDoCartao += `<div class="titulo-dinamico">${nomeDaColuna.toUpperCase()}: ${valor}</div>`;
            } else {
                conteudoDoCartao += `<div class="linha-dinamica"><strong>${nomeDaColuna}:</strong><br> ${valor}</div>`;
            }
        });
        
        li.innerHTML = conteudoDoCartao;
        listaResultados.appendChild(li);
    });
}

// 4. A BUSCA INTELIGENTE (IGNORANDO PONTOS, TRAÇOS, BARRAS E ACENTOS)
function limparTextoParaBusca(texto) {
    // 1. Tira os acentos e deixa tudo minúsculo
    let textoLimpo = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    
    // 2. Remove traços (-), pontos (.) e barras (/) para a busca ignorar a pontuação do CNAE
    textoLimpo = textoLimpo.replace(/[-./]/g, "");
    
    return textoLimpo.trim();
}

campoBusca.addEventListener('input', function() {
    // Passa o que você digitou na nossa "máquina de limpeza"
    // Se digitar "8211300", ele mantém "8211300"
    const textoDigitado = limparTextoParaBusca(campoBusca.value);

    // Mostra tudo se a caixa estiver vazia
    if (textoDigitado === '') {
        exibirResultados(tabelaDados);
        return; 
    }

    // Filtra procurando na base de dados
    const resultadosFiltrados = tabelaDados.filter(item => {
        // Pega os dados do Excel (ex: "8211-3/00") e passa na máquina de limpeza
        // O banco de dados temporariamente vira "8211300" para bater com o que você digitou
        const todosOsDados = limparTextoParaBusca(Object.values(item).join(' '));
        
        return todosOsDados.includes(textoDigitado);
    });

    exibirResultados(resultadosFiltrados);
});

// 5. INICIA O APLICATIVO MOSTRANDO TUDO
exibirResultados(tabelaDados);
