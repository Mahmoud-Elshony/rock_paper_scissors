let element = document.querySelectorAll('.choice');
let result = document.querySelector('.result');
// let allchoice = document.querySelector('.your-choice');
let cumputerChoice = document.querySelector('.cumputer-choice');

element.forEach((m) => {
    m.style.backgroundImage = `url(img/${m.id}.jpg)`;
    m.style.backgroundSize = '100px';
    m.addEventListener('click', (d) => {
        element.forEach(rem => {
            if (rem.id != m.id) {
                rem.remove()
            }
        })
        m.style.pointerEvents = 'none';
        let newComputerChoice = element[`${Math.floor(Math.random() * 2.5)}`].cloneNode();
        m.style.rotate = '180deg';
        m.style.position = 'relative';
        // m.style.top = '170px';
        m.classList.add('active')
        setTimeout(()=>{
            if (m.id == newComputerChoice.id) {
                result.innerHTML = 'Drew!'
            }
    
            else if (
                m.id == "paper" && newComputerChoice.id == "rock" ||
                m.id == "scissors" && newComputerChoice.id == "paper" ||
                m.id == "rock" && newComputerChoice.id == "scissors"
            ) {
                result.innerHTML = 'You Win!'
                result.style.border = '5px solid green'
            }
            else {
                result.innerHTML = 'You Loes!'
                result.style.border = '5px solid red'
            }
        },1000);
        cumputerChoice.append(newComputerChoice);

        
    })

})
// let list =['hello','ward','mido','ahmed'];
// let choiceWord = list[1];
// let newList = []

// for(let i=0;i<choiceWord.length;i++){
//     newList.push("_")
// }
// console.log(newList)
// console.log(typeof newList)