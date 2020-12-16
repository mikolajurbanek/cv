


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



document.querySelectorAll(".bar").forEach(item => {
    item.addEventListener('mouseenter', (e) => {
        item.style.transition = "all 0.1s ease";
        item.style.transform = "translateZ(120px)";
})
});

document.querySelectorAll(".bar").forEach(item => {
    item.addEventListener('mouseleave', (e) => {
        item.style.transition = "all 0.2s ease";
        item.style.transform = "translateZ(0px)";
    })
});

// mouse move
pageContainer.addEventListener('mousemove', (e) =>{
    let xAxis = (window.innerWidth/2 - e.pageX) /70
    let yAxis = (window.innerHeight/2 - e.pageY) /70
    page.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`
    }
);

// mouse enter
pageContainer.addEventListener('mouseenter', (e) => {
    page.style.transition = "none";
    pic.style.transform = "translateZ(70px)";
});


// mouse leave
pageContainer.addEventListener('mouseleave', (e) =>{
    page.style.transition = "all 1s ease";
    page.style.transform = `rotateY(0deg) rotateX(0deg)`;
    pic.style.transform = "translateZ(0px)";
});


aboutMe.addEventListener('click', ()=>{
    if(flag ===0 ) {
        aboutMe.style.top = "30vh"
        projects.style.display = "none";
        skills.style.display = "none";
        technologies.style.display = "none";
        education.style.display = "none";
        aboutHidden.style.display = "flex";
        flag = 1;
    } else {
            aboutMeFunc();
            flag=0;
    }
});


education.addEventListener('click', ()=>{
    if(flag ===0 ) {
        education.style.top = "30vh"
        projects.style.display = "none";
        skills.style.display = "none"
        technologies.style.display = "none"
        aboutMe.style.display = "none"
        educationHidden.style.display = "flex";

        flag = 1;
    } else {
            educationFunc();
            flag=0;
    }
});




projects.addEventListener('click', ()=>{
    if(flag ===0 ) {
        projects.style.top = "30vh"
        education.style.display = "none";
        skills.style.display = "none"
        technologies.style.display = "none"
        aboutMe.style.display = "none"
        projectsHidden.style.display = "flex";
        flag = 1;
    } else {
            projectsFunc();
            flag = 0;
    }
});

skills.addEventListener('click', ()=>{
    if(flag ===0 ) {
        skills.style.top = "30vh"
        education.style.display = "none";
        projects.style.display = "none";
        technologies.style.display = "none";
        aboutMe.style.display = "none";
        skillsHidden.style.display = "flex";
        flag = 1;
    } else {
            skillsFunc();
            flag = 0;
    }
});

technologies.addEventListener('click', ()=>{
    if(flag ===0) {
        technologies.style.top = "30vh"
        education.style.display = "none";
        projects.style.display = "none";
        skills.style.display = "none";
        aboutMe.style.display = "none";
        technologiesHidden.style.display = "flex";

        flag = 1;
    } else {
            technologiesFunc();
            flag = 0;
    }
});


function aboutMeFunc(){
    aboutMe.style.transition = "all 0.5s ease";
    projects.style.display = "flex";
    skills.style.display = "flex";
    technologies.style.display = "flex";
    education.style.display = "flex";
    aboutHidden.style.display = "none";
}

function educationFunc(){
    education.style.top = "45vh";
    education.style.transition = "all 0.4s ease";
    projects.style.display = "flex";
    skills.style.display = "flex";
    technologies.style.display = "flex";
    aboutMe.style.display = "flex";
    educationHidden.style.display = "none";
}

function projectsFunc(){
    projects.style.top = "60vh";
    projects.style.transition = "all 0.5s ease";
    education.style.display = "flex";
    skills.style.display = "flex";
    technologies.style.display = "flex";
    aboutMe.style.display = "flex";
    projectsHidden.style.display = "none";
}

function skillsFunc(){
    skills.style.top = "75vh";
    skills.style.transition = "all 0.6s ease";
    education.style.display = "flex";
    projects.style.display = "flex";
    technologies.style.display = "flex";
    aboutMe.style.display = "flex";
    skillsHidden.style.display = "none";
}

function technologiesFunc(){
    technologies.style.top = "90vh";
    technologies.style.transition = "all 0.7s ease";
    education.style.display = "flex";
    projects.style.display = "flex";
    skills.style.display = "flex";
    aboutMe.style.display = "flex";
    technologiesHidden.style.display = "none";
}

