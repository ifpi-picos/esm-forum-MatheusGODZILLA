const Repositorio = require('./repositorio');

class RepositorioMemoria extends Repositorio {
  constructor() {
    super();
    this.perguntas = [
      { id_pergunta: 1, texto: "Qual a capital de MG?", id_usuario: 1 },
      { id_pergunta: 2, texto: "Qual a capital de RJ?", id_usuario: 1 },
      { id_pergunta: 3, texto: "Qual a capital de SP?", id_usuario: 1 }
    ];
    this.numRespostas = {
      1: 5,
      2: 10,
      3: 15
    };
  }

  recuperar_todas_perguntas() {
    return this.perguntas;
  }

  recuperar_num_respostas(id_pergunta) {
    return this.numRespostas[id_pergunta] || 0;
  }
}

module.exports = RepositorioMemoria;