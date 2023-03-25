const containerEl = document.querySelector(".card_container")
const leftCardEl = document.querySelector(".left_small_card")
const rightCardEl = document.querySelector(".right_small_card")
const btnLeftEl = document.querySelector(".btn_left")
const btnRightEl = document.querySelector(".btn_right")
let activeImg = 0;
let activeImgLeft = 5;
let activeImgRight = 1;
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
// for (let index = 0; index < arrayInfo.length; index++) {
//     const teamMember = arrayInfo[index];
//     console.log(teamMember);
// }
// // Print in console keys and values ​​of the objects in the array
// for (let index = 0; index < arrayInfo.length; index++) {
//     const teamMember = arrayInfo[index];
//     for (const key in teamMember) {
//         console.log(key, teamMember[key]);
//     }
// }

//create card of team members and print in DOM

printCard(arrayInfo, activeImg);

// create three different array of card

const arrayCard = document.querySelectorAll(".main_card")
const arrayLeftCard = document.querySelectorAll(".left_card")
const arrayRightCard = document.querySelectorAll(".right_card")

// Create carousel 

// Add carousel effect left button
btnLeftEl.addEventListener("click", function () {

    let currentCard = arrayCard[activeImg];
    let currentLeftCard = arrayLeftCard[activeImg];
    let currentRightCard = arrayRightCard[activeImg];

    currentCard.classList.remove("active")
    currentLeftCard.classList.remove("active")
    currentRightCard.classList.remove("active")


    // condition main / left / right card
    if (activeImg < arrayCard.length - 1) {
        activeImg++;
    } else {
        activeImg = 0
    }
    currentCard = arrayCard[activeImg];
    currentCard.classList.add("active")

    currentLeftCard = arrayLeftCard[activeImg];
    currentLeftCard.classList.add("active")

    currentRightCard = arrayRightCard[activeImg];
    currentRightCard.classList.add("active")

})

// Add carousel effect right button
btnRightEl.addEventListener("click", function () {

    let currentCard = arrayCard[activeImg];
    let currentLeftCard = arrayLeftCard[activeImg];
    let currentRightCard = arrayRightCard[activeImg];

    currentCard.classList.remove("active")
    currentLeftCard.classList.remove("active")
    currentRightCard.classList.remove("active")

    // condition main / left / right card
    if (activeImg > 0) {
        activeImg--;

    } else {
        activeImg = arrayCard.length - 1;
    }
    currentCard = arrayCard[activeImg];
    currentCard.classList.add("active")

    currentLeftCard = arrayLeftCard[activeImg];
    currentLeftCard.classList.add("active")

    currentRightCard = arrayRightCard[activeImg];
    currentRightCard.classList.add("active")

})


// FUNCTION 

/**
 * Function for create card of team members and print in DOM
 * @param {array} arrayInfo  array Team members 
 * @param {number} activeImg variable for control active class on card
 */
function printCard(arrayInfo, activeImg) {
    for (let index = 0; index < arrayInfo.length; index++) {
        // condiction for create INFO of Main card 
        const teamMember = arrayInfo[index];
        // condiction for create INFO of left card 
        const teamMemberLeft = index == 0 ? arrayInfo[5] : arrayInfo[index - 1];
        // condiction for create INFO of Right card 
        const teamMemberRight = index == 5 ? arrayInfo[0] : arrayInfo[index + 1];
        classEl = index == activeImg ? 'active' : '';

        const cardEl = CreateCard(teamMember, classEl, teamMemberLeft, teamMemberRight);
        const cardLeftEl = CreateCard(teamMemberLeft, classEl, teamMemberLeft, teamMemberRight);
        const cardRightEl = CreateCard(teamMemberRight, classEl, teamMemberLeft, teamMemberRight);

        leftCardEl.insertAdjacentHTML("beforeend", cardLeftEl)
        rightCardEl.insertAdjacentHTML("beforeend", cardRightEl)
        containerEl.insertAdjacentHTML("beforeend", cardEl)

    }
}

 
/**
 * function to create single card and don't repeat the template litteral
 * @param {objet} teamMember info to put in the card
 * @param {string} classEl class to put if the cards are in main position
 * @param {objet} teamMemberLeft info of the card on the left to be able to make a comparison in the condition
 * @param {objet} teamMemberRight info of the card on the Right to be able to make a comparison in the condition
 * @returns 
 */
function CreateCard(teamMember, classEl, teamMemberLeft, teamMemberRight) {
    let widthData = 30
    let towards = "main_card";
    if (teamMember == teamMemberLeft) {
        widthData = 15;
        towards = "left_card"
    } else if (teamMember == teamMemberRight){
        widthData = 15;
        towards = "right_card"
    }
    const layoutCard = `<div class="${classEl} card ${towards} p-4" style="width:${widthData}rem;">
                <img src="./assets/img/${teamMember.photo}" class="card-img-top" alt="...">
                <div class="card-body">
                   <h2 class="card-title fw-semibold">${teamMember.name}</h2>
                   <h3 class="card-subtitle mb-2 text-muted ">${teamMember.role}</h3>
                </div>
            </div>`

    return layoutCard
}




