//  when someone clicks special events
// 1.image change to the other
// 2.title change
// 3. description change
// 4. line moved to the other otpiorn
// 5.  option font color change

// const btnOne = document.querySelector('.card__option--first')
// const btnSec = document.querySelector('.card__option--second')
// const btnThird = document.querySelector('.card__option--third')
// const containerOne =document.querySelector('.options-container--first')
// const containerSec =document.querySelector('.options-container--second')
// const containerThird = document.querySelector('.options-container--third')

// const optionLinks = document.querySelectorAll('.card__option')
// const optionContainer = document.querySelectorAll('.options-container')



function selectTab(tabIndex) {
    //Hide All Tabs
    document.getElementById("tab1Content").style.display = "none";
    document.getElementById("tab2Content").style.display = "none";
    document.getElementById("tab3Content").style.display = "none";
    //Show the Selected Tab
    document.getElementById("tab" + tabIndex + "Content").style.display =
    "block";
  }



// optionLinks.forEach(optionLink => {

//     optionLink.addEventListener('click', () => {
//        document.querySelector('.active')?.classList.remove('active');
//         optionLink.classList.add('active');
        
//     })

// })

// const switch = () => { 
// if(optionLinks.contains('active'))

//  }


// const switchFamily = () => { 
//     containerThird.classList.add('hidden')
//     containerSec.classList.add('hidden')
//     containerOne.classList.remove('hidden')
//     containerOne.style.display='flex'
// }

// const switchSpecial = () => { 
//     if (containerSec.classList.contains('hidden') && containerThird.classList.contains('hidden') && !containerOne.classList.contains('hidden')) {
//         containerOne.classList.add('hidden')
//         containerThird.classList.add('hidden')
//         containerSec.classList.remove('hidden')
//         containerSec.style.display = 'flex'
//     } else if (containerThird.classList.contains('hidden') && containerSec.classList.contains('hidden') && !containerSec.classList.contains('hidden')) {
//         containerOne.classList.add('hidden')
//         containerSec.classList.add('hidden')
//         containerThird.classList.remove('hidden')
//         containerThird.style.display='flex'
//     } else if (containerOne.classList.contains('hidden') && containerSec.classList.contains('hidden') && !containerSec.classList.contains('hidden') ){
//         containerThird.classList.add('hidden')
//         containerSec.classList.add('hidden')
//         containerOne.classList.remove('hidden')
//         containerOne.style.display='flex'
//     }
// }
// const switchSocial = () => { 
//     containerOne.classList.add('hidden')
//     containerSec.classList.add('hidden')
//     containerThird.classList.remove('hidden')
//     containerThird.style.display='flex'
// }
// btnOne.addEventListener("click", switchFamily)
// btnSec.addEventListener("click", switchSpecial)
// btnThird.addEventListener("click", switchSocial)

// btnOne.addEventListener("click", switchSpecial)
// btnSec.addEventListener("click", switchSpecial)
// btnThird.addEventListener("click", switchSpecial)




// if somone click button two and btn three  has a lass hidden then 

// const switchOptions = () => {
//     if (btnSec.classList.contains('hidden') && btnThird.classList.contains('hidden') && !btnOne.classList.contains('hidden') ) {
//         containerSec.classList.remove('hidden');
//         containerSec.style.display = 'flex';
//         containerOne.classList.add('hidden');
//         console.log('first')
//     }
// }
// btnSec.addEventListener("click", switchOptions)
