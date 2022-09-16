let s , f, ft=0, st= 0, ms= 0, mc = 0 
for( i = 1; i <= 20; i++) {
    s= prompt(" qual é o seu salário ?")
    console.log(s)
    f= prompt(" quantos filhos você tem ")
    console.log(f)
    st= sst + s 
    ft= ft + f 
    if ( s > ms) {
        ms = s
    } if( s <= 100) {
        mc++
    }

    alert(" O maior salário é" + ms) 
    alert( "\n a média de filhos é " + ft/20 )
    alert( "\n a média de salários é " + st/20)
    alert(" o percentual de pessoas com salário acima de 100 é " + (mc /20) *100 + "%")

}