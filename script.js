function retornarValorAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

function gerarCPF() {
    let cpf = retornarValorAleatorio(100000000, 999999999).toString()
    let cpfFormatado = cpf.substring(0, 3) + '.' + cpf.substring(3, 6) + '.' + cpf.substring(6, 9)

    // Gerando primeiro dígito
    let i = 10
    let soma = 0

    for (let x = 0; x < cpf.length; x++) {
        soma += parseInt(cpf[x]) * i
        i -= 1
    }

    let digito1
    if ((11 - (soma % 11)) > 9) {
        digito1 = 0
    } else {
        digito1 = 11 - (soma % 11)
    }

    cpf += digito1.toString()
    cpfFormatado += '-' + digito1.toString()

    // Gerando segunto dígito
    i = 11
    soma = 0

    for (let x = 0; x < cpf.length; x++) {
        soma += parseInt(cpf[x]) * i
        i -= 1
    }

    let digito2
    if ((11 - (soma % 11)) > 9) {
        digito2 = 0
    } else {
        digito2 = 11 - (soma % 11)
    }

    cpf += digito2.toString()
    cpfFormatado += digito2.toString()

    return [cpf, cpfFormatado]
}

function retornarCPF() {
    cpfs = gerarCPF()
    document.getElementById('cpf').value = cpfs[0]
    document.getElementById('cpf_formatado').value = cpfs[1]
}