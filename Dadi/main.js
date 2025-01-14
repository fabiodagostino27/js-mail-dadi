alert("Clicca OK per tirare il dado!")
const x = Math.floor((Math.random() * 6) + 1);
alert(`Il tuo numero è ${x}. Ora tocca a me tirare!`)
console.log(`Il tuo numero è ${x}`)

const y = Math.floor((Math.random() * 6) + 1);
console.log(`Il mio numero è ${y}.`)

if (x > y) {
    alert(`Il mio numero è ${y}, il tuo ${x}. Hai vinto!`)
    console.log(`Il tuo numero ${x} è più grande del mio ${y}. Hai vinto!`)
} else if (x < y) {
    alert(`Il mio numero è ${y}, il tuo ${x}. Hai perso!`)
    console.log(`Il tuo numero ${x} è più piccolo del mio ${y}. Hai perso!`)
} else {
    alert(`Il mio numero è ${y}, il tuo ${x}. Pareggio!`)
    console.log(`Il tuo numero ${x} è uguale al mio ${y}. Pareggio!`)
}