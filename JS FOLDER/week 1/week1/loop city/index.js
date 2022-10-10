const citizens = ['Ryan', 'Kolton', 'Kody', 'Kevin', 'Ann', 'Zach']; // Add more names to grow Loop City!

/////////////////////// DON'T ALTER THIS CODE //////////////////////////
const populationCount = document.getElementById('populationCount');
const citizenList = document.getElementById('citizenList');
const addCitizenBtn = document.getElementById('addCitizenBtn');
populationCount.innerText = citizens.length;
////////////////////////////////////////////////////////////////////////

// HINT!!! Looks like the way to get the amount of names is citizens.length
// Maybe that could be used in our loop.....just a thought


/*
  CODE TO PUT INSIDE OF LOOP BLOCK
  const listElement = document.createElement('li');
  listElement.innerText = citizens[i];
  citizenList.appendChild(listElement);
*/

/////////////////////// WRITE YOUR CODE HERE /////////////////////////
document.getElementById('addCitizenBtn').addEventListener("click",
displayCitizens); 

function displayCitizens(clickEvent){
  for (let i = 0; i <=5; i++){
    const listElement = document.createElement('li');
    listElement.innerText = citizens[i];
    citizenList.appendChild(listElement);
  }
  };
  

// citizens.forEach((citizen, i) => {
//   console.log(citizen, i)
//   const listElement = document.createElement('li');
//   listElement.innerText = citizens[i];
//   citizenList.appendChild(listElement);
// });
  for (let i = 0; i <=5; i++){
    const listElement = document.createElement('li');
    listElement.innerText = citizens[i];
    citizenList.appendChild(listElement);
  }


//////////////////////////////////////////////////////////////////////