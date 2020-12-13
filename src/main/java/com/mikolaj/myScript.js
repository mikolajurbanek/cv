


const page = document.querySelector(".page");
const pageContainer = document.querySelector(".page-container");
const body = document.body;
let aboutFlag = 0;


// items
const pic = document.querySelector(".picture img")
const aboutMe = document.querySelector("#about-me");
const education = document.querySelector("#education");
const projects = document.querySelector("#projects");
const skills = document.querySelector("#skills");
const technologies = document.querySelector("#technologies");

// hidden items
const aboutHidden = document.querySelector(".about-hidden");



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
    if(aboutFlag === 0) {
        aboutMe.style.transform = "translateZ(150px)";
        projects.style.opacity = "0";
        skills.style.opacity = "0";
        technologies.style.opacity = "0";
        education.style.opacity = "0";
        aboutHidden.style.display = "flex";
        aboutMe.style.transform = "translateZ(0px)";
        aboutMe.style.transition = "all 0.2s ease";
        aboutFlag = 1;
    } else {
        aboutMeFunc();
        aboutFlag=0;
    }

});

aboutMe.addEventListener('mouseenter', (e) => {

    aboutMe.style.transform = "translateZ(120px)";

});

aboutMe.addEventListener('mouseleave', (e) =>{
    aboutMe.style.transition = "all 0.3s ease";
    aboutMe.style.transform = `rotateY(0deg) rotateX(0deg)`;
    aboutMe.style.transform = "translateZ(0px)";

});



function aboutMeFunc(){
    aboutMe.style.transform = "translateZ(0px)";
    projects.style.opacity = "1";
    skills.style.opacity = "1";
    technologies.style.opacity = "1";
    education.style.opacity = "1";
    aboutHidden.style.display = "none";
    aboutMe.style.transform = "translateZ(70px)";
}