const prompt = require("prompt-sync")();
const curso = require("./curso");

const db = [];

let proxId = 1;

const model = (id = proxId++) => {
  const nome = prompt("Digite o Nome da Materia: ");
  const horas_totais = Number(prompt("Digite as horas totais: "));

  let curso_ID = 0;
  if (curso.index()){
    curso_ID = parseInt(prompt("Digite o ID do curso: "));
  }



  if (nome != "" && horas_totais > 100 &&curso.show(curso_ID))  {
    return {
      id,
      nome,
      horas_totais,
      curso_ID,
    };
  }

  console.log("Dados inválidos");
};

const store = () => {
  const novo = model();

  if (novo) {
    db.push(novo);

    console.log("Registro concluido com sucesso!");
  }
};

const index = () => {
  if (db.length == 0) {
    console.log("Nenhum registro encontrado.");
    return false;
  }

  db.forEach((el) => console.log(el));
  return true;
};

const show = (id) => db.find((el) => el.id == id);

const update = () => {
  if (index()) {
    const id = parseInt(prompt("ID: "));

    const indice = db.findIndex((el) => el.id == id);

    if (indice != -1) {
      const novo = model(id);

      if (novo) {
        db[indice] = novo;
        console.log("Registro atualizado com sucesso.");
      }
    } else {
      console.log("Registro não encontrado");
    }
  }
};

const destroy = () => {
    if(index()) {
        const id = parseInt(prompt("ID: "));

        const indice = db.findIndex(el => el.id == id);

        if(indice != -1) {
            db.splice(indice, 1);
            console.log("Registro excluído com sucesso");
        } else {
            console.log("Registro não encontrado")
        }
    }
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy
}