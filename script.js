let form = document.getElementById('formulario');

form.addEventListener('submit', function (e) {

    e.preventDefault();

    let valido = true;

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let cpf = document.getElementById('cpf').value;
    let idade = document.getElementById('idade').value;
    let cidade = document.getElementById('cidade').value;
    let tipoMoradia = document.getElementById('tipoMoradia').value;
    let permite = document.getElementById('permite').value;
    let quintal = document.getElementById('quintal').value;
    let seguro = document.getElementById('seguro').value;
    let antes = document.getElementById('antes').value;
    let horas = document.getElementById('horas').value;
    let motivo = document.getElementById('motivo').value;
    let termo = document.getElementById('termo').checked;

    document.getElementById('erroNome').textContent = '';
    document.getElementById('erroEmail').textContent = '';
    document.getElementById('erroTelefone').textContent = '';
    document.getElementById('erroCpf').textContent = '';
    document.getElementById('erroIdade').textContent = '';
    document.getElementById('erroCidade').textContent = '';
    document.getElementById('erroQuintal').textContent = '';

    if (nome.length < 3) {

        document.getElementById('erroNome').textContent = 'Nome deve ter pelo menos 3 caracteres.';
        valido = false;
    }

    if (!email.includes('@')) {

        document.getElementById('erroEmail').textContent = 'Email inválido';
        valido = false
    }

    if (telefone.length < 10) {

        document.getElementById('erroTelefone').textContent = "Telefone inválido";
        valido = false;
    }

    if (cpf === " " && cpf.length !== 11) {

        document.getElementById('erroCpf').textContent = "CPF é obrigatório e deve conter 11 dígitos";
        valido = false;
    }

    if (idade < 18) {
        document.getElementById('erroIdade').textContent = 'Você precisa ter 18 anos ou mais para enviar o formulário!';
        valido = false;
    }

    if (cidade === " ") {

        alert("Insira uma cidade para continuar");
        valido = false;
    }

    if (tipoMoradia === "selecione") {

        alert("Insira o tipo de moradia para continua")
        valido = false;
    }

    if (tipoMoradia === 'casa' && quintal === "selecione") {

        alert("Responda se tem quintal em sua moradia para continua")
        valido = false;
    }

    if (antes === "selecione") {

        alert("Responda se você já teve algum outro animal de estimação antes para continua")
        valido = false;
    }

    if (motivo.length < 10) {

        document.getElementById('erroMotivo').textContent = "Motivo deve conter ao menos 10 caracteres";
        valido = false;
    }

    if (tipoMoradia === 'ap' && permite === 'selecione') {

        alert("Você precisa responder se o seu apartamento permite pets")
        valido = false;
    }

    if (quintal === 'sim' && seguro === 'selecione') {

        alert("Você precisa responder se seu quintal é seguro")
        valido = false;
    }

    resultado.innerHTML = `

        Dados enviados: <br>
        Nome: ${nome} <br>
        Email: ${email} <br>
        Telefone: ${telefone} <br>
        CPF: ${cpf} <br>
        Idade: ${idade} <br>
        Cidade: ${cidade} <br>
        Moradia: ${moradia} <br>
        Permite: ${permite} <br>
        Seguro: ${seguro} <br>
        Horas: ${horas} <br>
        Motivo: ${motivo} <br>
        `;

    form.reset();

});