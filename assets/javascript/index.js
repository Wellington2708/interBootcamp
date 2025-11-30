// Dinamic title

const titleElement = document.getElementById("title");
titleElement.textContent = "Wellington Junior Home Page";

// Dinamic knowledge section

let myKnowledge = document.querySelector(".container-apresentation")
myKnowledge.innerHTML = `
    <a href="https://www.linkedin.com/in/wellington-luis-41513874" target="_blank"><img src="https://github.com/Wellington2708.png" alt="Photo of Wellington. A dark-skinned man with black hair and a beard." class="img-thumbnail image-profile"></a>
    <p>My name is Wellington Junior, I'm 37 years old. I am Brazilian, but I live in Portugal. I'm a student of System Development Technician at SENAC, where I am interested in becoming a Fullstack developer.
    This is my <a href="https://www.linkedin.com/in/wellington-luis-41513874/" target="_blank" class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">LinkedIn profile</a> and I hope to make good connections through it.
    </p>
`

;

// I created a counter that increases and decreases numbers when clicking on buttons using AddEventListener.
let count = 0;

let plus = document.querySelector(".plus");
plus.addEventListener("click", () => {
    let number = document.querySelector(".number");
    count++;
    number.textContent = count;
    console.log(typeof count)
})

let subtract = document.querySelector(".subtract");
subtract.addEventListener("click", () => {
    let number = document.querySelector(".number");
    count--;
    number.textContent = count;
})


