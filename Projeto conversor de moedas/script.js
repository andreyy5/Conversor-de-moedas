const button = document.getElementById('convert-button'); //variavel que pega o botão
const select = document.getElementById('currency-select');

const dolar = 5.2
const euro = 5.9



//funcao que é acionada quando o botão é clicado
const convertValues = () => {
    const inputReal = document.getElementById('input-real').value //pega o input real
    const realValueText = document.getElementById('real-value-text') //pega o input digitado
    const currencyValueText = document.getElementById('currency-value-text') //pega o input dolar


    //forma atual de formatar o tipo de dinheiro em real
    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReal);

    if (select.value === "US$ Dólar americano") {
        //forma atual de formatar o tipo de dinheiro em dolar
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReal / dolar);
    }


    if (select.value === "$ Euro") {
        //EURO => conversao para euro => forma atual de formatar o tipo de dinheiro em euro
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReal / euro);
    }
}

//funcao que muda os elementos de acordo com a option selecionada
const changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")


    //condicao que muda os elementos se o select for "estados unidos"
    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/estados-unidos (1) 1.png"
    }

    //condicao que muda os elementos se o select for "euro"
    if (select.value === '$ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }
    convertValues()
}

button.addEventListener('click', convertValues) //ouve o evento de click no botao
select.addEventListener("change", changeCurrency) //ouve a mudanca de opção no select

