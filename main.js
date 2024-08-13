const prompt = require("prompt-sync")();

const aluno = require("./modulos/aluno.js");
const aula = require("./modulos/aula.js");
const curso = require("./modulos/curso.js");
const materia = require("./modulos/materia.js");
const professor = require("./modulos/professor.js");
const turno = require("./modulos/turno.js");
const sala = require("./modulos/sala.js");


const menuPrincipal = () => {
  console.log(`
        GERENCIAMENTO DA FACULDADE DO CESINHA 
        `);

  while (true) {
    console.log(`
                  ESCOLHA O MÓDULO QUE QUER GERENCIAR:
                  
                  1 - TURNOS
                  2 - CURSOS
                  3 - MATERIAS
                  4 - ALUNOS
                  5 - PROFESSORES
                  6 - SALAS
                  7 - AULAS
                  0 - SAIR
                  `);

    const opcaoModulo = parseInt(prompt(": "));

    switch (opcaoTurno) {
      case 1:
        menuFaculdade();
        break;

      case 2:
        menuCurso();
        break;

      case 3:
        menuMateria();
        break;
      case 4:
        menuAluno();
        break;
      case 5:
        menuProfessor();
        break;
      case 6:
        menuSala();
        break;
      case 7:
        menuAula();
        break;
      case 0:
        process.exit();
        break;
      default:
        console.log("OPCAO INVALIDA");
        break;
    }
  }
};

const menuCurso = () => {
  console.log("GERENCIAMENTO DE TURNO");
  while (true) {
    console.log(`
                1 - CADASTRAR TURNO
                2 - LISTAR TURNO
                3 - ATUALIZAR TURNO
                4 - EXCLUIR TURNO
                0 - SAIR
                `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        curso.store();
        break;
      case 2:
        curso.index();
        break;
      case 3:
        curso.update();
        break;
      case 4:
        curso.destroy();
        break;

      case 0:
        return;
      default:
        console.log("OPCAO INVALIDA");
        break;
    }
  }
};

const menuMateria = () => {
  console.log("GERENCIAMENTO DE CURSO");
  while (true) {
    console.log(`
                1 - CADASTRAR CURSO
                2 - LISTAR CURSO
                3 - ATUALIZAR CURSO
                4 - EXCLUIR CURSO
                0 - SAIR
                `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        materia.store();
        break;
      case 2:
        materia.index();
        break;
      case 3:
        materia.update();
        break;
      case 4:
        materia.destroy();
        break;

      case 0:
        return;
      default:
        console.log("OPCAO INVALIDA");
        break;
    }
  }
};

const menuFaculdade = () => {
  console.log("GERENCIAMENTO DE MATERIA DO CURSO");
  while (true) {
    console.log(`
              1 - CADASTRAR MATERIA DO CURSO
              2 - LISTAR MATERIA DO CURSO
              3 - ATUALIZAR MATERIA DO CURSO
              4 - EXCLUIR MATERIA DO CURSO
              0 - SAIR
              `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        turno.store();
        break;
      case 2:
        turno.index();
        break;
      case 3:
        turno.update();
        break;
      case 4:
        turno.destroy();
        break;

      case 0:
        return;
      default:
        console.log("OPCAO INVALIDA");
        break;
    }
  }
};

const menuAluno = () => {
  console.log("GERENCIAMENTO DE ALUNO");
  while (true) {
    console.log(`
              1 - CADASTRAR ALUNOS
              2 - LISTAR ALUNOS
              3 - ATUALIZAR ALUNOS
              4 - EXCLUIR ALUNOS
              0 - SAIR
              `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        aluno.store();
        break;
      case 2:
        aluno.index();
        break;
      case 3:
        aluno.update();
        break;
      case 4:
        aluno.destroy();
        break;

      case 0:
        return;
      default:
        console.log("OPCAO INVALIDA");
        break;
    }
  }
};

const menuProfessor = () => {
  console.log("GERENCIAMENTO DE PROFESSORES");
  while (true) {
    console.log(`
              1 - CADASTRAR PROFESSORES
              2 - LISTAR PROFESSORES
              3 - ATUALIZAR PROFESSORES
              4 - EXCLUIR PROFESSORES
              0 - SAIR
              `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        sala.store();
        break;
      case 2:
        sala.index();
        break;
      case 3:
        sala.update();
        break;
      case 4:
        sala.destroy();
        break;

      case 0:
        return;
      default:
        console.log("OPCAO INVALIDA");
        break;
    }
  }
};

const menuSala = () => {
  console.log("GERENCIAMENTO DE SALAS");
  while (true) {
    console.log(`
              1 - CADASTRAR SALAS
              2 - LISTAR SALAS
              3 - ATUALIZAR SALAS
              4 - EXCLUIR SALAS
              0 - SAIR
              `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        sala.store();
        break;
      case 2:
        sala.index();
        break;
      case 3:
        sala.update();
        break;
      case 4:
        sala.destroy();
        break;

      case 0:
        return;
      default:
        console.log("OPCAO INVALIDA");
        break;
    }
  }
};

const menuAula = () => {
  console.log("GERENCIAMENTO DE AULAS ");
  while (true) {
    console.log(`
              1 - CADASTRAR AULAS
              2 - LISTAR AULAS
              3 - ATUALIZAR AULAS
              4 - EXCLUIR AULAS
              0 - SAIR
              `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        aula.store();
        break;
      case 2:
        aula.index();
        break;
      case 3:
        aula.update();
        break;
      case 4:
        aula.destroy();
        break;

      case 0:
        return;
      default:
        console.log("OPCAO INVALIDA");
        break;
    }
  }
};

menuPrincipal();