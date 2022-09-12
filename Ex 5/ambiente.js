let x
x = prompt("diga um indice de poluição")


if( x<=0.30){
    alert("o indice de poluição está aceitável");
}
else if(x<=0.40){
    alert("o grupo 1 deve suspender suas atividades!");
}
else if(x>0.5) {
    alert("todos os grupos devem suspender suas atividades!");
}
