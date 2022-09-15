altura=0, peso=0, imc=0;

altura= prompt("diga a sua altura, paciente")
peso= prompt("diga seu peso, paciente")

function iml(altura, peso ) {
    imc = peso / (altura * altura);
    return alert(imc)
}
iml(altura, peso);