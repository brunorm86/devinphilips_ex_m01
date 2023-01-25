import Funcionario from "./Funcionario.js";
import Fatura from "./Fatura.js";
import Personagem from "./Personagem.js";

const bruno = new Funcionario('050.741.159-57', 'Bruno Ricardo Machado', 8000)

console.log(bruno)
bruno.promover(50)
console.log(bruno)

const personagem = new Personagem("Oioi")

console.log(personagem.percentualVida)
personagem.sofreuDano(30)
console.log(personagem.percentualVida)
personagem.usouKitMedico()
console.log(personagem.percentualVida)
personagem.sofreuDano(30)
console.log(personagem.percentualVida)