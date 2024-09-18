// check of thres local storage

let maiColor = localStorage.getItem("color-option");

if( maiColor !== null){
    document.documentElement.style.setProperty("--man--color",localStorage.getItem("color-option"))

    document.querySelectorAll(".color-list li").forEach( element =>{
        element.classList.remove("active");
        if(element.dataset.color === maiColor){
            element.classList.add("active")
        }
    });
    
}

let backgroundOption = true;
let backgroundInteval

//local storage random background

let mainImag = localStorage.getItem("randomOption");
if(mainImag!== null){
    
    if(mainImag === 'true'){
        backgroundOption = true;
    } else{
        backgroundOption = false; 
    }

    document.querySelectorAll(".random-background .option-random p").forEach(element =>{
        element.classList.remove("active")
    }) 
    if(mainImag === 'true'){
        document.querySelector(".random-background .yes").classList.add("active")
    } else{
        document.querySelector(".random-background .no").classList.add("active")

    }
}


// click on toggle

let settings = document.querySelector(".togle");
let gearSpin = document.querySelector(".fa-gear");

settings.onclick= function(){
    document.querySelector(".setting-box").classList.toggle("open");
    gearSpin.classList.toggle("fa-spin")
};

// switch colors
const colorsLi = document.querySelectorAll(".color-list li");
colorsLi.forEach( li=>{
    li.addEventListener("click",(e)=>{

        document.documentElement.style.setProperty('--man--color',e.target.dataset.color)

        localStorage.setItem("color-option",e.target.dataset.color);

        handeleActive(e)

    })
})

colorsLi.onclick = ()=>{
    colorsLi.style.opacity = 1;
};
//switch random bckground option

const randomBackEl = document.querySelectorAll(".random-background p");

//loop in all span
randomBackEl.forEach( span =>{
    span.addEventListener("click",(e)=>{
        e.target.parentElement.querySelectorAll(".active").forEach(element=>{
            element.classList.remove("active");
        });

        e.target.classList.add("active");
        if(e.target.dataset.background === 'yes'){
            backgroundOption = true;
            randomizeImgs();
            localStorage.setItem("randomOption",true)
        } else {
            backgroundOption = false;
            clearInterval(backgroundInteval)
            localStorage.setItem("randomOption",false)
        }
    })
})

// change background image

let arrImage = ["صور-برمجة1 copy.jpg","images1.jpg","images2.jpg","images3.jpg","images4.jpg","images5.jpg"]
let landing = document.querySelector(".landing-page");



//function randomize Imgis
function randomizeImgs(){
    if (backgroundOption === true){
        backgroundInteval = setInterval( ()=>{
            let randoum = Math.floor(Math.random()* arrImage.length)
            landing.style.backgroundImage = 'url("pictures/' + arrImage[randoum] +'")';
        },1000);
    }
}

randomizeImgs()

//select skills 
let ourskil = document.querySelector(".skills");

window.onscroll =function(){
    //skills ofsett top
    let skillsOffsetTop = ourskil.offsetTop;
    let skillsoutrhigth= ourskil.offsetHeight;
    let windowHeight = this.innerHeight;
    let windowscrolltop = this.scrollY;

    if(windowscrolltop < (skillsOffsetTop+skillsoutrhigth-windowHeight)){
        
        let allskills = document.querySelectorAll(".box-skills .skill-progres span");
        allskills.forEach(skill=>{
            skill.style.width = skill.dataset.progres;
        })
    }
};

// start gallary

let ourgallary = document.querySelectorAll(".gallary img");

ourgallary.forEach(img =>{

    img.addEventListener("click" , (e)=>{

        let divOverllay = document.createElement("div");
        divOverllay.className = "pupup-overllay"
        document.body.appendChild(divOverllay);

        let popup_box = document.createElement("div")
        popup_box.className = "popup-box"

        let popup_img  =document.createElement("img");
        popup_img.src = img.src;

        if(img.alt !== null){
            let imgheading = document.createElement("h3");
            let imgtext = document.createTextNode(img.alt);
            imgheading.appendChild(imgtext);
            popup_box.appendChild(imgheading)
            
        }

        popup_box.appendChild(popup_img);
        document.body.appendChild(popup_box);

        //creat close span
        
        let closespan = document.createElement("span");
        closespan.className="closespan"
        let closeText = document.createTextNode("x");
    
        closespan.appendChild(closeText)
        popup_box.appendChild(closespan);
    
    });

});

document.addEventListener("click",function(e){
    if (e.target.className == "closespan") {
    e.target.parentNode.remove()

    document.querySelector(".pupup-overllay").remove()

    }
})
// end gallary

// start bullets
let Allbullets = document.querySelectorAll(".nav-bullets ");


function scrollToSomewhre(elements){
    elements.forEach(ele=>{
        ele.addEventListener('click',(e)=>{
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth"
            })
        })
    })
}

const AllLinksLandPag = document.querySelectorAll(".landing-page .links");

scrollToSomewhre(Allbullets)
scrollToSomewhre(AllLinksLandPag)
// end bullets

function handeleActive(ev){
    ev.target.parentElement.querySelectorAll(".active").forEach(e=>{
        e.classList.remove("active")
    })
    ev.target.classList.add("active");
};

// change bullets option
let bulletsOption = document.querySelectorAll(".random-background .option-random p");

let bulletsContaner = document.querySelector(".nav-bullets")

let bulletlocal = localStorage.getItem("bullets-option")
if(bulletlocal !== null){
    bulletsOption.forEach((e)=>{

        e.classList.remove("active")

    })
    if (bulletlocal === "block") {
        bulletsContaner.style.display= "block";
        document.querySelector(".bullets-option .yes").classList.add("active");
    } else{

        bulletsContaner.style.display="none";
        document.querySelector(".bullets-option .no").classList.add("active")

    }
}

bulletsOption.forEach(e=>{
    e.addEventListener("click", (ele)=>{
        if(ele.target.dataset.display === "yes"){
            bulletsContaner.style.display= " block"
            localStorage.setItem("bullets-option","block")
        } else{
            bulletsContaner.style.display= "none"
            localStorage.setItem("bullets-option","none")
        }
        // handeleActive(ele)
    })
})
// reset-ption

document.querySelector(".reset-option").onclick = function(){
    // localStorage.clear();
    localStorage.removeItem("color-option");
    localStorage.removeItem("background option");
    localStorage.removeItem("bullets-option");
    window.location.reload();
}

// start up to button 

const buttonUp = document.querySelector(".up-to");

window.onscroll = function(){
    
    
    if( window.scrollY >= 200){
        buttonUp.classList.add("active")
    } else{
        buttonUp.classList.remove("active")
    }
}

buttonUp.addEventListener("click", ()=>{
    
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });

});
// end up to button 
// togoole menu

let toggleBtn = document.querySelector(".togool-button");
let tlinks =document.querySelector(".links");

toggleBtn.onclick = function (e){

    e.stopPropagation();

    this.classList.toggle("menu-active");
    
    tlinks.classList.toggle("open")
};

document.addEventListener("click", (e)=>{
    
    if (e.target !== toggleBtn && e.target !== tlinks) {
        if(tlinks.classList.contains("open")){
            
            toggleBtn.classList.toggle("menu-active");
            
            tlinks.classList.toggle("open")

        }
    }

})
tlinks.onclick = function(e){
    e.stopPropagationp;
};