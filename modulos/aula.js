const prompt = require("prompt-sync")();
const curso = require("./curso");
const materia = require("./materia");
const sala = require("./sala");

const db = [];

let proxId = 1;

const model = (id = proxId++) => {
  const aula = prompt("Digite o Nome da aula: ");
  const curso_ID = prompt("Digite o ID curso: ");
  const materia_ID = prompt("Digite o ID da Materia: ");

  if (nome != "" && curso_ID.show && materia_ID.show && sala_ID.show && curso && materia && sala) {
    return {
      id,
      aula,
      materia_ID,
      sala_ID,
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