const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const numeros = []; // declara um vetor global

  
frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const numero = frm.inNumero.value;
    numeros.push(numero);
    
    let lista = "";
    function compararNumeros(a, b) {
        return a - b;
      }
    for ( let i =0;i< numeros.length; i++){
        
        numeros.sort(function (a, b) {
            return a - b;
           
          });
        
          lista+=`${numeros[i]}\n`
    }
    respLista.innerText = lista;
    frm.inNumero.value = "";
    frm.inNumero.focus();
})

frm.btnRemover.addEventListener("click", () => {
    if(numeros.length==0){
        alert("não consta na lista")
        
        respNome.innerText="";
        return
    }
    const Remover = numeros.shift();
    respNome.innerText = Remover;
    let lista = "";
    numeros.forEach((numero, i ) => (lista +=`${ i + 1 }. ${numeros[i]}\n`));
    respLista.innerText = lista;
    
  
    
})