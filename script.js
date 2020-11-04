// 1 define variables

const who = ['Mi hermano ', 'mi perro ', 'mi abuela ', 'el portero ', 'el pescadero '];
const action = ['se acercó', 'se cayó', 'dormía', 'bailaba'];
const what = ['la bicicleta', 'el patinete', 'la mochila', 'las llaves'];
const when = ['esta tarde', 'en las escaleras', 'por la noche', 'en la calle'];

// write the function that would generate a random excuse

    let indexwho = Math.floor(Math.random()* who.length)   
    let indexaction = Math.floor(Math.random()* action.length)
    let indexwhat = Math.floor(Math.random()* what.length)
    let indexwhen = Math.floor(Math.random()* when.length)

document.getElementById('result').innerHTML = who[indexwho] + " " + action[indexaction] + " " + what[indexwhat] + " " + when[indexwhen]