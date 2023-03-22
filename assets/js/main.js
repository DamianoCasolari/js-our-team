const containerEl = document.querySelector(".card_container")
const btnLeftEl = document.querySelector(".btn_left")
const btnRightEl = document.querySelector(".btn_right")
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
        photo: "angela-lopez-social-media-manager.jpg"
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

btnLeftEl.addEventListener("click", function () {
    const arrayCard = document.querySelectorAll(".card")
    let currentCard = arrayCard[activeImg];
    currentCard.classList.remove("active")
    if (activeImg < arrayCard.length - 1) {
    activeImg++;
    currentCard = arrayCard[activeImg];
    currentCard.classList.add("active")
    } else {
        activeImg = 0;
        currentCard = arrayCard[activeImg];
        console.log(currentCard)
        currentCard.classList.add("active")    
    }
    // currentCard.classList.add("active")
})

btnRightEl.addEventListener("click", function () {
    const arrayCard = document.querySelectorAll(".card")
    let currentCard = arrayCard[activeImg];
    currentCard.classList.remove("active")
    if (activeImg > 0) {
    activeImg--;
    currentCard = arrayCard[activeImg];
    currentCard.classList.add("active")
    } else {
        activeImg = arrayCard.length - 1;
        currentCard = arrayCard[activeImg];
        currentCard.classList.add("active")    
    }
    // currentCard.classList.add("active")
})



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




