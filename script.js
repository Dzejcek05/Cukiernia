const cena = document.getElementById("price")

function obliczanie(data) {
    let price = 0;
    if(data.cake[0].checked){
        price+=parseFloat(data.cake[0].value);
    }
    if(data.cake[1].checked){
        price+=parseFloat(data.cake[1].value); 
    }
    if(data.cake[2].checked){
        price+=parseFloat(data.cake[2].value);   
    }
    if(data.cake[3].checked){
        price+=parseFloat(data.cake[3].value);        
    }
    if(data.cake[4].checked){
        price+=parseFloat(data.cake[4].value);
    }
    if(data.cake[5].checked){
        price+=parseFloat(data.cake[5].value);
    }
    if(data.addons[0].checked){
        price+=parseFloat(data.cake[0].value);
    }
    if(data.addons[1].checked){
        price+=parseFloat(data.cake[1].value);
    }
    if(data.addons[2].checked){
        price+=parseFloat(data.cake[2].value);
    }
    if(price <= 60){
        price+=10;
    }
    
    
    cena.innerHTML = price + " pln" ;
}
  

function square(_number) {
    cena.innerHTML = " " ;
}