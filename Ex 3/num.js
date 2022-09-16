let i=0, s=0, m=0,contadordevoltas=0;

while(i>-1){ 

    
    s= parseInt(s) + parseInt(i)
    
    
    i=prompt("diga um valor")
    if(i>-1){
    contadordevoltas= contadordevoltas+1
}
} 
m= s/contadordevoltas

alert("a somatoria de valores é " + s)
alert(" a média dos valores é " + m)
