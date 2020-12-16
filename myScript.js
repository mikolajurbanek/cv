


const page = document.querySelector(".page");
const pageContainer = document.querySelector(".page-container");

let aboutFlag = 0;
let educationFlag = 0;
let projectsFlag = 0;
let skillsFlag = 0;
let technologiesFlag = 0;


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


aboutMe.addEventListener('click', (e)=>{
    if(technologiesFlag === 0 && skillsFlag === 0 && educationFlag === 0 && aboutFlag ===0  && projectsFlag ===0 ) {
        aboutMe.style.transform = "translateZ(150px)";
        aboutMe.style.top = "30vh"
        projects.style.display = "none";
        skills.style.display = "none"
        technologies.style.display = "none"
        education.style.display = "none"
        aboutHidden.style.display = "flex";
        aboutMe.style.transform = "translateZ(0px)";
        aboutMe.style.transition = "all 0.2s ease";
        aboutFlag = 1;
    } else {
        if(aboutFlag === 1){
            aboutMeFunc();
            aboutFlag=0;
        }

    }
});

education.addEventListener('click', (e)=>{
    if(technologiesFlag === 0 && skillsFlag === 0 && educationFlag === 0 && aboutFlag ===0  && projectsFlag ===0 ) {
        education.style.transform = "translateZ(150px)";
        education.style.top = "30vh"
        projects.style.display = "none";
        skills.style.display = "none"
        technologies.style.display = "none"
        aboutMe.style.display = "none"
        educationHidden.style.display = "flex";
        education.style.transform = "translateZ(0px)";
        education.style.transition = "all 0.2s ease";
        educationFlag = 1;
    } else {
        if(educationFlag === 1){
            educationFunc();
            educationFlag=0;
        }

    }
});




projects.addEventListener('click', (e)=>{
    if(technologiesFlag === 0 && skillsFlag === 0 && educationFlag === 0 && aboutFlag ===0  && projectsFlag ===0 ) {
        projects.style.transform = "translateZ(150px)";
        projects.style.top = "30vh"
        education.style.display = "none";
        skills.style.display = "none"
        technologies.style.display = "none"
        aboutMe.style.display = "none"
        projectsHidden.style.display = "flex";
        projects.style.transform = "translateZ(0px)";
        projects.style.transition = "all 0.2s ease";
        projectsFlag = 1;
    } else {
        if(projectsFlag === 1) {
            projectsFunc();
            projectsFlag = 0;
        }
    }
});

skills.addEventListener('click', (e)=>{
    if(technologiesFlag === 0 && skillsFlag === 0 && educationFlag === 0 && aboutFlag ===0  && projectsFlag ===0 ) {
        skills.style.transform = "translateZ(150px)";
        skills.style.top = "30vh"
        education.style.display = "none";
        projects.style.display = "none";
        technologies.style.display = "none";
        aboutMe.style.display = "none";
        skillsHidden.style.display = "flex";
        skills.style.transform = "translateZ(0px)";
        skills.style.transition = "all 0.2s ease";
        skillsFlag = 1;
    } else {
        if(skillsFlag === 1) {
            skillsFunc();
            skillsFlag = 0;
        }
    }
});

technologies.addEventListener('click', (e)=>{
    if(technologiesFlag === 0 && skillsFlag === 0 && educationFlag === 0 && aboutFlag ===0  && projectsFlag ===0) {
        technologies.style.transform = "translateZ(150px)";
        technologies.style.top = "30vh"
        education.style.display = "none";
        projects.style.display = "none";
        skills.style.display = "none";
        aboutMe.style.display = "none";
        technologiesHidden.style.display = "flex";

        technologies.style.transform = "translateZ(0px)";
        technologies.style.transition = "all 0.2s ease";
        technologiesFlag = 1;
    } else {
        if(technologiesFlag === 1) {
            technologiesFunc();
            technologiesFlag = 0;
        }
    }
});


function aboutMeFunc(){
    aboutMe.style.transform = "translateZ(0px)";
    // aboutMe.style.top = "45vh";
    aboutMe.style.transition = "all 0.5s ease";
    projects.style.display = "flex";
    skills.style.display = "flex";
    technologies.style.display = "flex";
    education.style.display = "flex";
    aboutHidden.style.display = "none";
    aboutMe.style.transform = "translateZ(70px)";
}

function educationFunc(){
    education.style.transform = "translateZ(0px)";
    education.style.top = "45vh";
    education.style.transition = "all 0.5s ease";
    projects.style.display = "flex";
    skills.style.display = "flex";
    technologies.style.display = "flex";
    aboutMe.style.display = "flex";
    educationHidden.style.display = "none";
    education.style.transform = "translateZ(70px)";
}

function projectsFunc(){
    projects.style.transform = "translateZ(0px)";
    projects.style.top = "60vh";
    projects.style.transition = "all 0.5s ease";
    education.style.display = "flex";
    skills.style.display = "flex";
    technologies.style.display = "flex";
    aboutMe.style.display = "flex";
    projectsHidden.style.display = "none";
    projects.style.transform = "translateZ(70px)";
}

function skillsFunc(){
    skills.style.transform = "translateZ(0px)";
    skills.style.top = "75vh";
    skills.style.transition = "all 0.5s ease";
    education.style.display = "flex";
    projects.style.display = "flex";
    technologies.style.display = "flex";
    aboutMe.style.display = "flex";
    skillsHidden.style.display = "none";
    skills.style.transform = "translateZ(70px)";
}

function technologiesFunc(){
    technologies.style.transform = "translateZ(0px)";
    technologies.style.top = "90vh";
    technologies.style.transition = "all 0.5s ease";
    education.style.display = "flex";
    projects.style.display = "flex";
    skills.style.display = "flex";
    aboutMe.style.display = "flex";
    technologiesHidden.style.display = "none";
    technologies.style.transform = "translateZ(70px)";
}