const formulario = document.getElementById("form");

const btnCadastrar = document.getElementById("btnCadastrar");

const inputNome = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputSenha = document.getElementById("password");

const listaPessoas = []

function cadastrar(evento) {
    event.preventDefault()

    const nome = inputNome.value
    const email = inputEmail.value
    const senha = inputSenha.value

    if (!nome) {
        alert("Informe seu nome")
        inputNome.focus()
        return
    }
    if (!email) {
        alert("Informe seu email")
        inputEmail.focus()
        return
    }
    if (!senha) {
        alert("Informe seu senha")
        inputSenha.focus()
        return
    }

    let pessoaEncontrada = null  //usando "Flag"
    for (pessoa of listaPessoa) {
        if (pessoa.email === email.toLoweCase()) {
            pessoaEncontrada = pessoa
            break
        }
    }

    if(pessoaEncontrada){
        alert('')
    }

    console.log({
        nome: nome,
        email: email,
        senha: senha
    });
}

btnCadastrar.addEventListener('click', cadastrar)

// btnCadastrar.addEventListener('click', () => {
//     console.log("por funcao anonima");
// })

