class Pessoa {
    constructor(nome){
        this.nome = nome;
    }

    falar(frase){
        console.log(`${this.nome} disse ${frase}`)
    }
}

class Aluno extends Pessoa{
    estudar(disciplina){
        console.log(`${this.nome} estuda ${disciplina}`)
    }
}

class Professor extends Pessoa {
    ensina(materia){
        console.log(`${this.nome} leciona ${materia}`)
    }
}

let p1 = new Aluno("Diego")
let p2 = new Professor("Fulano")
p1.falar("Oi tudo bem?")
p1.estudar('Biologia')
p2.ensina('Matematica')