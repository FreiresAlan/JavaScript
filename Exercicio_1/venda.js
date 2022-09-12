let custo, venda, percentual, margem

custo= prompt("diga qual é o valor de custo do produto ")
percentual= prompt("diga qual é o percentual de lucro que voce quer")
margem= (percentual*custo/100)
venda= (parseFloat(custo) + parseFloat(margem)) 

alert("o valor de venda do produto será " + venda)
