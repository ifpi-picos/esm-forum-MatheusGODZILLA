const Repositorio = require('./repositorio');
const bd = require('./bd'); 

class RepositorioBD extends Repositorio {
  async recuperar_todas_perguntas() {
    return await bd.queryAll("SELECT * FROM perguntas");
  }

  async recuperar_num_respostas(id_pergunta) {
    const resultado = await bd.query("SELECT count(*) FROM respostas WHERE id_pergunta = ?", [id_pergunta]);
    return resultado["count(*)"];
  }
}

module.exports = RepositorioBD;