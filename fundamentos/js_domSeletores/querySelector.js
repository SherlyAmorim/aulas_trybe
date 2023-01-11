// Exemplos

document.getElementById("Dona");
// <p id="Dona">Liberty Media</p>

document.querySelector("Dona");
// Null (pq como dona é um ID, precisa indicar o seletor)

document.querySelector("#Dona");
// <p id="Dona">Liberty Media</p>

/* Nos casos acima só existe 1 elemento, mas nos casos abaixo por se tratarem de tag existe mais de 1 elemento e olha o comportamento do querySelector */

document.querySelector("p"); // como é tag não precisa de seletor
// <p class="lenda">Ayrton Senna</p>


/* Porém na Tag p existem os seguintes elementos: 
<p class="lenda">Ayrton Senna</p>
<p class="piloto-f1-atual">Lewis Hamilton</p>
<p class="piloto-f1-atual">Sebastian Vettel</p>
<p class="piloto-f1-atual">Lando Norris</p>
<p id="Dona">Liberty Media</p>
*/

// Mas com já explicado o querySelector só pega o primeiro elemento que ele encontrar.

// Caso queira pegar o primeiro elemento de uma class ou tag especifica usa-se:

document.querySelector(".pilotos-sem-titulo p");
//  <p class="piloto-f1-atual">Lando Norris</p>

