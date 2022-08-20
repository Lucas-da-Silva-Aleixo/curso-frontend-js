import months from './months.js'
import carros from './carros.js'

// Filtra meses
const filteredMonths = months.filter( (months)=> {
    return months.days === 31
})

//Filtra carros
const filteredCarros = carros.filter( (carros)=> {
    return carros.id === 1
})

console.log(filteredMonths)
console.log(filteredCarros)

let toPrint = ''

// Lista meses
filteredMonths.forEach(month => {
   toPrint += month.month + ', '
});

// Lista carros
filteredCarros.forEach(carros => {
    toPrint += carros.marca + ', audi'
 });

// for( let c = 0; c < filteredMonths.length; c++ ){

// }

let meses = [30,30,30] // array comum

// Reduce - função com todos os itens do array e devolve um valor único
let sumMonthDays = filteredMonths.reduce( (prev, next) => {
    return {days: prev.days + next.days}
})

let sumCarrosId = filteredCarros.reduce( (prev, next) => {
    return {id: prev.id + next.id}
})

// Map - funções em arrays de retorno individual (cada valor array)
let cachorros = [10, 15, 7, 8, 9]

let years = cachorros.map( (cachorro => {
    return cachorro * 7
}))

document.getElementById('main').innerHTML = 
    toPrint + '<br> Soma dos dias dos meses selecionados: ' 
    + sumMonthDays.days + '<br> idade humana dos cachorros: '  
    + years + ' '
