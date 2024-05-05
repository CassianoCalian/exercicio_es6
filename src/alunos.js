let alunos = [
  { nome: "Carolina", nota: 10 },
  { nome: "Cassiano", nota: 9 },
  { nome: "Caio", nota: 7 },
  { nome: "Brendo", nota: 4 },
  { nome: "Camila", nota: 8 },
  { nome: "Diléa", nota: 2 },
  { nome: "Simone", nota: 6 },
  { nome: "Ednaldo", nota: 8 },
  { nome: "Kayllane", nota: 7 },
  { nome: "Claudia", nota: 10 },
];

const filtrarAlunosPelasNota = (arrayDeAlunos) => {
  let alunosAprovados = arrayDeAlunos.filter((aluno) => aluno.nota >= 6);
  return alunosAprovados;
};

let alunosAprovados = filtrarAlunosPelasNota(alunos);
console.log(alunosAprovados);
