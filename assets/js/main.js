const containerEl = document.querySelector(".card_container")
let activeImg = 0;
const arrayInfo = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll	",
        role: "Chief Editor	",
        photo: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
    }
]


// Print in console elements of array 
for (let index = 0; index < arrayInfo.length; index++) {
    const teamMember = arrayInfo[index];
    console.log(teamMember);
}
// Print in console keys and values ​​of the objects in the array
for (let index = 0; index < arrayInfo.length; index++) {
    const teamMember = arrayInfo[index];
    for (const key in teamMember) {
        console.log(key, teamMember[key]);
    }
}

//create card of team members and print in DOM

printCard(arrayInfo, activeImg);

// Create carousel 





// FUNCTION 

/**
 * Function for create card of team members and print in DOM
 * @param {array} arrayInfo  array Team members 
 * @param {number} activeImg variable for control active class on card
 */
function printCard(arrayInfo, activeImg) {
    for (let index = 0; index < arrayInfo.length; index++) {
        const teamMember = arrayInfo[index];
        classEl = index == activeImg ? 'active' : '';
        const cardEl = `
            <div class="${classEl} card p-4" style="width:30rem;">
             <img src="./assets/img/${teamMember.photo}" class="card-img-top" alt="...">
              <div class="card-body">
              <h2 class="card-title fw-semibold">${teamMember.name}</h2>
              <h3 class="card-subtitle mb-2 text-muted ">${teamMember.role}</h3>
             </div>
         </div>`
        containerEl.insertAdjacentHTML("beforeend", cardEl)
    }
}




