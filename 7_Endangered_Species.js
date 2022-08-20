// Endangered Species
// An HTML div element contains lists of endangered species grouped by continent and the species population status.

// <div>
//     <ul data-continent="North America">
//         <li data-species="California condor">Critically Endangered</li>
//         <li data-species="American bison">Near Threatened</li>
//     </ul>
//     <ul data-continent="Europe">
//         <li data-species="Cave bear">Extinct</li>
//     </ul>
// </div>
// Implement the function endangeredSpecies that returns how endangered a species is on a particular continent.

// For example, endangeredSpecies('North America', 'American bison') should return 'Near Threatened'.

const endangeredSpecies = (continent, species) => document
  .querySelector(`div [data-continent="${continent}"]`)
  .querySelector(`[data-species="${species}"]`).textContent;



// Example case
document.body.innerHTML =
`<div>
  <ul data-continent="North America">
    <li data-species="California condor">Critically Endangered</li>
    <li data-species="American bison">Near Threatened</li>
  </ul>
  <ul data-continent="Europe">
    <li data-species="Cave bear">Extinct</li>
  </ul>
</div>`;

console.log(endangeredSpecies('North America', 'American bison')); // should print 'Near Threatened'