
// -> getElementByID
// const element = document.getElementById("main-text")

// console.log(element)



// -> getElementByClassName
// const element = document.getElementsByClassName("paragraph")

// console.log(element)



//-> getElementByTagName 
// const element = document.getElementsByTagName('p')

// console.log(element)



//->querySelector 
// const element = document.querySelector('.paragraph') //tem que usar o ponto para quando for uma classe (da pra usar com id, classe)

// console.log(element)



//->querySelectorAll (NodeList) 
//  const element = document.querySelectorAll('p')
 
//  console.log(element)




//-> getElementByName 

// const element = document.querySelector('input1')
// console.log(element) 



//-> manipulando textos 

// const element = document.querySelector('h1')

// element.innerText = "Hello World"  
//element.innerHTML = <p> criando paragro</p> 


//-> alterando os estilos 
//  const element = document.querySelector('h1')

//  element.style.backgroundColor = 'green'


// //-> eventos sendo pegados com função diretamente do HTML
// const myFunction = () => {  //funcao criada la no HTML
//     alert("Fui pressionado")
// }

//ou 


//-> eventos com funcao diretamente do javascript
// const element = document.querySelector('input') 

// element.onclick = () => { 
//     console.log("pressionei uma tecla")
// }





//também podemos colocar os eventos com propriedades(parâmetros)

// const element = document.querySelector('input')

// element.onkeydown = (event) => { 
//     console.log(event.target.value)    //pega o valor colocado dentro do input
// }




//ESCUTADOR DE EVENTO: addEventListener 

const input = document.querySelector('input') 
const select = document.querySelector('select')
const button = document.querySelector('button')


const clickButton = () => { 
    alert('O botao foi clicado')
}


input.addEventListener('focus', ()=> { 
    console.log("dei um foco")
})

select.addEventListener('change', ()=> { 
    console.log(select.value)
})

button.addEventListener('click', clickButton) //chamei uma função criada anteriormente
