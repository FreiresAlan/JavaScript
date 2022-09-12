let  N, Salario_Normal,Salario_Normal1, Salario_Extra, Salario_Total, HN, HE;

N=prompt("Quantas você trabalhou")
console.log(N)
if(N<=50) {
    Salario_Normal= N*10
    alert("seu salário será " + Salario_Normal)
} 
else if(N>50){

    HE=(N-50)
    HN=(N-HE)
    Salario_Normal1= HN*10
    Salario_Extra= HE*20
    Salario_Total= Salario_Normal1+Salario_Extra
    alert("seu salario excedente será" + Salario_Extra)
    alert("seu pagamento total será" + Salario_Total)
}


    
