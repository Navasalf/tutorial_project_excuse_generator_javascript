
// Array de excusas 
let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];
// Función para generar una excusa aleatoria
function generarExcusa() {
    const randomwho = Math.floor(Math.random() * who.length);
    const randomaction = Math.floor(Math.random() * action.length);
    const randomwhat = Math.floor(Math.random() * what.length);
    const randomwhen = Math.floor(Math.random() * when.length);



    return who[randomwho] + " " + action[randomaction] + " " + what[randomwhat] + " " + when[randomwhen];


}
const excusa = generarExcusa()
console.log(excusa)



document.getElementById("Excuses").innerHTML = generarExcusa();
