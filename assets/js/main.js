// var document.querySelector = document.querySelector.bind(document);
// var document.querySelectorAll = document.querySelectorAll.bind(document);

var getBigWord = document.querySelector(".big-word");
var getSmallWord = document.querySelector(".s-word span");
var getLinkBtn = document.querySelector(".btn-link-describe");
var getBgImg = document.querySelector(".main-img");
var getBigWordSpan = document.querySelector(".b-word");

setInterval(() => {
    getBgImg.style.transform = "scale(1.1, 1.1)"
}, 2000);
setInterval(() => {
    getBgImg.removeAttribute("style");
}, 3000);


setInterval(() => {
    getSmallWord.style.transform = "translateX(0%)"
    getLinkBtn.style.transform = "translateX(0%)"
    getBigWordSpan.style.width = "43%"
    getBigWordSpan.style.opacity = "1"

}, 2000);
setInterval(() => {
    getSmallWord.removeAttribute("style");
    getLinkBtn.removeAttribute("style");
    getBigWordSpan.removeAttribute("style")
}, 4000);


// function animateValue(obj, start, end, duration) {
//     let startTimestamp = null;
//     const step = (timestap) => {
//         if (!startTimestamp) startTimestamp = timestap;
//         const progress = Math.min((timestap - startTimestamp) / duration, 1);
//         obj.innerHTML = Math.floor(progress * (end - start) + start);

//         if (progress < 1) {
//             window.requestAnimationFrame(step)
//         }

//     };
//     window.requestAnimationFrame(step)
// }

// const objs = document.querySelectorAll(".project__done-value");
// objs.forEach(element => {
//     // console.log(element)
//     // console.log(element.attributes)
//     // console.log(element[NamedNodeMap = "nodeValue"])


//     animateValue(element, 0, 4050, 1000)
// })

var getfbContent = document.querySelector(".fback__text__content")
var getfbLeft = document.querySelector(".click-fback--left")
var getfbRight = document.querySelector(".click-fback--right")

// getfbLeft.onclick = function(){
//     $(".fback__text__content").css("transform", "translateX(0%)")
// }
// var getfbRight = document.querySelector(".click-fback--Right")
// getfbRight.onclick = function(){
//     $(".fback__text__content").css("transform", "translateX(-56%)")
// }


// $(document).ready(function(){
//     $(".click-fback--left").click(function(){
//       $(".fback__text__content").css("transform", "translateX(0%)");
//       $(".click-fback--left").addClass("active--feedback");
//       $(".click-fback--right").removeClass("active--feedback");


//     });
// });

// $(document).ready(function(){
//     $(".click-fback--right").click(function(){
//       $(".fback__text__content").css("transform", "translateX(-56%)");
//       $(".click-fback--right").addClass("active--feedback");
//       $(".click-fback--left").removeClass("active--feedback");
//     });
// });

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// tablet 1024 px
var getnavItem = document.querySelectorAll(".navbar-nav-tablet  .nav-item");
var getbtnMenu = document.querySelector("#menu_checkbox");
var getshowMenu = document.querySelector(".show-full-menu");
var menuHome = document.querySelectorAll(".menu__home");

getbtnMenu.onclick = function(){
    if(document.querySelector("#menu_checkbox:checked")) {
        getshowMenu.style.display = "block"
    }
    else getshowMenu.style.display = "none"
}

console.log(getnavItem)
getnavItem.forEach((element, index) => {
    element.onclick = () => {
        console.log(element)
        if( document.querySelector(".menu__home")){
            // document.querySelector(".menu__home").classList.add("menu__home--style-click");
            // element.children[1].classList.add("menu__home--style-click");
            element.children[1].classList.toggle("menu__home--style-click");
            return true;
        }
        else {
            getnavItem[index].children[1].classList.remove("menu__home--style-click");
        }
       
    }
    
});




  

