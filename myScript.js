


const page = document.querySelector(".page");
const pageContainer = document.querySelector(".page-container");

let flag = 0;


// items
const pic = document.querySelector(".picture img")

const aboutMe = document.querySelector("#about-me");
const education = document.querySelector("#education");
const projects = document.querySelector("#projects");
const skills = document.querySelector("#skills");
const technologies = document.querySelector("#technologies");

// hidden items
const aboutHidden = document.querySelector(".about-hidden");
const educationHidden = document.querySelector(".education-hidden");
const projectsHidden = document.querySelector(".projects-hidden");
const skillsHidden = document.querySelector(".skills-hidden");
const technologiesHidden = document.querySelector(".technologies-hidden");


// function hideAllBars() {
//     aboutMe.style.visibility = "hidden";
//     education.style.visibility = "hidden";
//     projects.style.visibility = "hidden";
//     skills.style.visibility = "hidden";
//     technologies.style.visibility = "hidden";
// }


document.querySelectorAll(".bar").forEach(item => {
    item.addEventListener('click', () => {
        if(flag===0) {
            item.style.animation= "dupa 1s forwards";
            // item.style.transform= "translateZ (20px)"
        }
        else{
            item.style.animation= "zupa 2s forwards";

        }
})
});


// mouse move
pageContainer.addEventListener('mousemove',(e) =>{
    let xAxis = (window.innerWidth/2 - e.pageX) /70
    let yAxis = (window.innerHeight/2 - e.pageY) /70
    page.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`
    }
);


// mouse enter
pageContainer.addEventListener('mouseenter', () => {
    page.style.transition = "none";
    pic.style.transform = "translateZ(70px)";
});


// mouse leave
pageContainer.addEventListener('mouseleave', () =>{
    page.style.transition = "all 1s ease";
    pic.style.transform = "translateZ(0px)";
});


aboutMe.addEventListener('click',()=>{
    if(flag === 0) {
        projects.style.visibility = "hidden";
        skills.style.visibility = "hidden";
        technologies.style.visibility = "hidden";
        education.style.visibility = "hidden";
        aboutHidden.style.display = "flex";
        flag = 1;
    } else {
        visibleAllBars();
            flag=0;
    }
});


education.addEventListener('click',()=>{
    if(flag ===0 ) {
        projects.style.visibility = "hidden";
        skills.style.visibility = "hidden"
        technologies.style.visibility = "hidden"
        aboutMe.style.visibility = "hidden"
        educationHidden.style.display = "flex";
        flag = 1;
    } else {
        visibleAllBars();
            flag=0;
    }
});


projects.addEventListener('click',()=>{
    if(flag ===0 ) {
        education.style.visibility = "hidden";
        skills.style.visibility = "hidden"
        technologies.style.visibility = "hidden"
        aboutMe.style.visibility = "hidden"
        projectsHidden.style.display = "flex";
        flag = 1;
    } else {
        visibleAllBars();
            flag = 0;
    }
});


skills.addEventListener('click', ()=>{
    if(flag ===0 ) {
        education.style.visibility = "hidden";
        projects.style.visibility = "hidden";
        technologies.style.visibility = "hidden";
        aboutMe.style.visibility = "hidden";
        skillsHidden.style.display = "flex";
        flag = 1;
    } else {
        visibleAllBars();
            flag = 0;
    }
});

technologies.addEventListener('click',()=>{
    if(flag ===0) {
        education.style.visibility = "hidden";
        projects.style.visibility = "hidden";
        skills.style.visibility = "hidden";
        aboutMe.style.visibility = "hidden";
        technologiesHidden.style.display = "flex";
        flag = 1;
    } else {
        visibleAllBars();
            flag = 0;
    }
});


function visibleAllBars() {
    projects.style.visibility = "visible";
    skills.style.visibility = "visible";
    technologies.style.visibility = "visible";
    aboutMe.style.visibility = "visible";
    education.style.visibility = "visible";
    aboutHidden.style.display= "none";
    projectsHidden.style.display= "none";
    skillsHidden.style.display= "none";
    technologiesHidden.style.display= "none";
    educationHidden.style.display= "none";
}





