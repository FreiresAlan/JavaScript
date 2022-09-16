let i=0, soma=0;
for( i= 1; i <= 500; i++) {
    if( i % 3 == 0 && i % 2 != 0 ) { 
        soma= soma + i
    }
}
alert("a soma de todos os multiplos impares de 3, de 1 a 500, é " + parseInt(soma));