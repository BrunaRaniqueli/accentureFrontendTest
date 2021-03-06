window.table = [
  {
    data: new Date('2017-10-03'),
    demanda: 25,
    capacidade: 809,
    atendimentoPlanejado: 456,
    atendimentoRealizado: 234,
    desvio: 43
  },
  {
    data: new Date('2017-11-11'),
    demanda: 87,
    capacidade: 600,
    atendimentoPlanejado: 560,
    atendimentoRealizado: 309,
    desvio: 30
  },
  {
    data: new Date('2016-08-23'),
    demanda: 200,
    capacidade: 330,
    atendimentoPlanejado: 400,
    atendimentoRealizado: 130,
    desvio: 42
  },
  {
    data: new Date('2018-04-13'),
    demanda: 550,
    capacidade: 876,
    atendimentoPlanejado: 654,
    atendimentoRealizado: 234,
    desvio: 56
  },
  {
    data: new Date('2018-01-10'),
    demanda: 661,
    capacidade: 543,
    atendimentoPlanejado: 452,
    atendimentoRealizado: 432,
    desvio: 98
  },
  {
    data: new Date('2018-10-03'),
    demanda: 507,
    capacidade: 987,
    atendimentoPlanejado: 678,
    atendimentoRealizado: 364,
    desvio: 36
  },
  {
    data: new Date('2015-10-07'),
    demanda: 422,
    capacidade: 604,
    atendimentoPlanejado: 380,
    atendimentoRealizado: 405,
    desvio: 16
  },
  {
    data: new Date('2017-10-14'),
    demanda: 340,
    capacidade: 630,
    atendimentoPlanejado: 295,
    atendimentoRealizado: 430,
    desvio: 57
  },
  {
    data: new Date('2018-01-20'),
    demanda: 321,
    capacidade: 930,
    atendimentoPlanejado: 680,
    atendimentoRealizado: 330,
    desvio: 76
  },
  {
    data: new Date('2016-10-15'),
    demanda: 322,
    capacidade: 970,
    atendimentoPlanejado: 580,
    atendimentoRealizado: 313,
    desvio: 65
  },
  {
    data: new Date('2015-05-13'),
    demanda: 344,
    capacidade: 1800,
    atendimentoPlanejado: 580,
    atendimentoRealizado: 949,
    desvio: 67
  },
  {
    data: new Date('2015-05-02'),
    demanda: 402,
    capacidade: 909	,
    atendimentoPlanejado: 231,
    atendimentoRealizado: 726,
    desvio: 84
  },
  {
    data: new Date('2016-11-05'),
    demanda: 54,
    capacidade: 780,
    atendimentoPlanejado: 890,
    atendimentoRealizado: 765,
    desvio: 78
  },
  {
    data: new Date('2016-12-06'),
    demanda: 345,
    capacidade: 509,
    atendimentoPlanejado: 400,
    atendimentoRealizado: 321,
    desvio: 34
  },
  {
    data: new Date('2015-07-26'),
    demanda: 34,
    capacidade: 654,
    atendimentoPlanejado: 370,
    atendimentoRealizado: 343,
    desvio: 24
  },
  {
    data: new Date('2017-11-03'),
    demanda: 234,
    capacidade: 459,
    atendimentoPlanejado: 380,
    atendimentoRealizado: 345,
    desvio: 243
  },
  {
    data: new Date('2017-04-06'),
    demanda: 353,
    capacidade: 634,
    atendimentoPlanejado: 350,
    atendimentoRealizado: 245,
    desvio: 135
  },
  {
    data: new Date('2018-02-20'),
    demanda: 245,
    capacidade: 1590,
    atendimentoPlanejado: 1300,
    atendimentoRealizado: 1234,
    desvio: 23
  },
  {
    data: new Date('2015-03-07'),
    demanda: 134,
    capacidade: 1002,
    atendimentoPlanejado: 900,
    atendimentoRealizado: 890,
    desvio: 12
  },
  {
    data: new Date('2017-06-16'),
    demanda: 345,
    capacidade: 693,
    atendimentoPlanejado: 501,
    atendimentoRealizado: 455,
    desvio: 45
  },
  {
    data: new Date('2015-09-30'),
    demanda: 155,
    capacidade: 300,
    atendimentoPlanejado: 500,
    atendimentoRealizado: 300,
    desvio: 14
  },
  {
    data: new Date('2016-09-18'),
    demanda: 123,
    capacidade: 901,
    atendimentoPlanejado: 800,
    atendimentoRealizado: 789,
    desvio: 56
  },
  {
    data: new Date('2017-12-09'),
    demanda: 100,
    capacidade: 1098,
    atendimentoPlanejado: 980,
    atendimentoRealizado: 935,
    desvio: 98
  },
  {
    data: new Date('2017-10-12'),
    demanda: 182,
    capacidade: 608,
    atendimentoPlanejado: 634,
    atendimentoRealizado: 547,
    desvio: 36
  }
];
function compare(a, b) {
  return a.data > b.data ? 1 : (a.data < b.data) ? -1 : 0;
}
window.table.sort(compare);
