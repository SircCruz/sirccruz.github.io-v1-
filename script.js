var tablet = window.matchMedia("(max-width: 1024px)");
var currentScroll = 0;
var scrollFunction = function(){
    currentScroll = window.scrollY;
    var scroll = document.getElementById("bg1").offsetHeight / 2;
    if(currentScroll > scroll){
        hideNavi();
        document.getElementById("navigation").className = "navigation fadein";
        document.getElementById("navigation").style.display = "block";
        document.getElementById("btn-navigation").className = "btn-navigation fadein";
        document.getElementById("btn-navigation").style.display = "block";
    }
    else{
        document.getElementById("navigation").className = "navigation fadeout";
        document.getElementById("btn-navigation").className = "btn-navigation fadeout";
    }
    FadeInDivs();
}
function FadeInDivs(){
    var yOffSet = 500;
    var content = document.getElementById("content").getBoundingClientRect().top + window.scrollY - yOffSet;
    if (currentScroll > content){
        document.getElementById("content").className = "content divfadein";
    }
    var skills = document.getElementById("skills").getBoundingClientRect().top + window.scrollY - yOffSet;
    if (currentScroll > skills){
        document.getElementById("skills").className = "skills divfadein";
        document.getElementById("svgskills").className = "svgskills divfadein";
    }
    var skill1 = document.getElementById("skill1").getBoundingClientRect().top + window.scrollY - yOffSet;
    if (currentScroll > skill1){
        document.getElementById("skill1").className = "line divfadein";
    }
    var stats = document.getElementById("stats").getBoundingClientRect().top + window.scrollY - yOffSet;
    if (currentScroll > stats){
        document.getElementById("stats").className = "divfadein";
    }
}

window.addEventListener("scroll", scrollFunction);

function scrollToDiv(name){
    var yOffSet = 70;
    var y = document.getElementById(name).getBoundingClientRect().top + window.scrollY - yOffSet;
    window.scrollTo({top: y, behavior: 'smooth'});
    if(tablet.matches){
        naviShowState();
    }
}

var isNaviShowing = false;
function naviShowState(){
    if(!isNaviShowing){
        showNavi();
        isNaviShowing = true;
    }
    else{
        hideNavi();
        isNaviShowing = false;
    }
}
function showNavi(){
    document.getElementById("navigation").className = "navigation show";
    document.getElementById("portfolio").className = "portfolio blur";
    document.getElementById("introduction").className = "introduction blur";
    document.body.style.overflowY = "hidden";

    document.getElementById("svg-navi-open").className = "svg-navi-open shrink";
    document.getElementById("svg-navi-close").className = "svg-navi-close enlarge";
}
function hideNavi(){
    document.getElementById("portfolio").className = "portfolio unblur";
    document.getElementById("navigation").className = "navigation hide";
    document.getElementById("introduction").className = "introduction unblur";
    document.body.style.overflowY = "scroll";

    document.getElementById("svg-navi-open").className = "svg-navi-open enlarge";
    document.getElementById("svg-navi-close").className = "svg-navi-close shrink";
}

var image = 1;
var temp = 1;
var _imgCount = 0;
function nextPage(){
    if(image <= _imgCount){
        document.getElementById("imgNum" + temp).className = "inactive";
        document.getElementById("imgNum" + image).className = "active";
        document.getElementById("pagenum").innerText = image + "/" + _imgCount;
        temp = image;
        image++;
    }
}
function prevPage(){
    image -= 2;
    if(image >= 1){
        nextPage();
    }
    else{
        image = 2;
    }
}

function exit_Fullscreen(){
    temp = 1;
    image = 1;
    removeImages();
    document.getElementById("fullscreen").style.display = "none";
}
function enter_Fullscreen(title, imgCount){
    _imgCount = imgCount;
    document.getElementById("fullscreen").style.display = "block";
    getImages(title, _imgCount);
}
function getImages(title, imgCount){
    for(let i = 1; i <= imgCount; i++){
        document.getElementById("img-container").innerHTML += 
        "<img src='images/" + title + "/"+ i + ".JPG' class='inactive' id='imgNum" + i + "'>";
        image = 1;
    }
    nextPage();
}
function removeImages(){
    for(let i = 1; i <= _imgCount; i++){
        var element = document.getElementById("imgNum" + i);
        element.remove();
    }
}

var image1 = 0;
var temp1 = 0;
var timeout1;
var isImgEnlarged = false;
function imageSet1(){
    try{
        document.getElementById("set1img" + temp1).className = "inactive btn-page";
        document.getElementById("set1img" + image1).className = "active btn-page";
        document.getElementById("set1btn" + temp1).className = "inactive btn-page";
        document.getElementById("set1btn" + image1).className = "active btn-page";
        document.getElementById("set1pagenumber").innerText = image1 + 1 + "/7";
        temp1 = image1;
        image1++;
        timeout1 = setTimeout(imageSet1, 5000);
    }
    catch{
        image1 = 0;
        setTimeout(imageSet1, 0);
    }
}
function setImg1(img){
    clearTimeout(timeout1);
    image1 = img;
    imageSet1();
}
function nextImg1(){
    if (image1 < 7){
        clearTimeout(timeout1);
        imageSet1();
    }
}
function prevImg1(){
    if(image1 > 1){
        clearTimeout(timeout1);
        image1 -= 2;
        imageSet1();
    }
}
imageSet1();
var image2 = 0;
var temp2 = 0;
var timeout2;
function imageSet2(){
    try{
        document.getElementById("set2img" + temp2).className = "inactive btn-page";
        document.getElementById("set2img" + image2).className = "active btn-page";
        document.getElementById("set2btn" + temp2).className = "inactive btn-page";
        document.getElementById("set2btn" + image2).className = "active btn-page";
        document.getElementById("set2pagenumber").innerText = image2 + 1 + "/5";
        temp2 = image2;
        image2++;
        timeout2 = setTimeout(imageSet2, 5000);
    }
    catch{
        image2 = 0;
        setTimeout(imageSet2, 0);
    }
}
function setImg2(img){
    clearTimeout(timeout2);
    image2 = img;
    imageSet2();
}
function nextImg2(){
    if (image2 < 5){
        clearTimeout(timeout2);
        imageSet2();
    }
}
function prevImg2(){
    if(image2 > 1){
        clearTimeout(timeout2);
        image2 -= 2;
        imageSet2();
    }
}
imageSet2()
var image3 = 0;
var temp3 = 0;
var timeout3;
function imageSet3(){
    try{
        document.getElementById("set3img" + temp3).className = "inactive btn-page";
        document.getElementById("set3img" + image3).className = "active btn-page";
        document.getElementById("set3btn" + temp3).className = "inactive btn-page";
        document.getElementById("set3btn" + image3).className = "active btn-page";
        document.getElementById("set3pagenumber").innerText = image3 + 1 + "/5";
        temp3 = image3;
        image3++;
        timeout3 = setTimeout(imageSet3, 5000);
    }
    catch{
        image3 = 0;
        setTimeout(imageSet3, 0);
    }
}
imageSet3();
function setImg3(img){
    clearTimeout(timeout3);
    image3 = img;
    imageSet3();
}
function nextImg3(){
    if (image3 < 5){
        clearTimeout(timeout3);
        imageSet3();
    }
}
function prevImg3(){
    if(image3 > 1){
        clearTimeout(timeout3);
        image3 -= 2;
        imageSet3();
    }
}