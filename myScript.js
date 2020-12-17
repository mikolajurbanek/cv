


const page = document.querySelector(".page");
const pageContainer = document.querySelector(".page-container");
//lol
const tabs = Array.from(document.querySelectorAll('.bar'));
const content = Array.from(document.querySelectorAll('.content'));


let flag = 0;


// items
const pic = document.querySelector(".picture img");


function hideTab(e) {
    e.style.opacity = 0;
    e.style.pointerEvents = 'none';
}

function showTab(e) {
    e.style.opacity = 1;
    e.style.pointerEvents = 'auto';
}

function setTabUnactive(e, idx) {
    e.setAttribute('active', false);
    e.style.transform = `translateY(${idx * 15}vh)`;
}

function setTabActive(e) {
    showTab(e)
    e.setAttribute('active', true);
    e.style.transform = `translateY(0px)`;
}

function toggleActive(e, idx) {
    const elementActive = e.getAttribute('active') === 'true';
    if (elementActive)  {
        setTabUnactive(e, idx)
        hideContent()
    } else {
        setTabActive(e)
        showContent(idx);
    }

    tabs.filter((_, i) => i !== idx).forEach((tab, i) => {
        if (elementActive) {
            showTab(tab)
        } else {
            hideTab(tab)
        }
    })

}

tabs.forEach((tab, idx) => {
    tab.onclick = (e) => toggleActive(e.target, idx)
    setTabUnactive(tab, idx)
})

function hideContent() {
    content.forEach((content, _)=>{
        content.style.visibility = 'hidden';
    });

}

function showContent(idx) {
    let demandedTag = '#content'+ idx;
    const content = document.querySelector(`${demandedTag}`);
    content.style.visibility = 'visible'
}

hideContent();


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

