
var scrollFunction = function(){
    var currentScroll = window.scrollY;
    var scroll = document.getElementById("bg1").offsetHeight / 2;
    if(currentScroll > scroll){
        document.getElementById("navigation").className = "navigation fadein";
        document.getElementById("navigation").style.display = "block";
    }
    else{
        document.getElementById("navigation").className = "navigation fadeout";
    }
}
window.addEventListener("scroll", scrollFunction);

function scrollToDiv(name){
    var yOffSet = 70;
    var y = document.getElementById(name).getBoundingClientRect().top + window.scrollY - yOffSet;
    window.scrollTo({top: y, behavior: 'smooth'});
}

var image1 = 0;
var temp1 = 0;
var timeout1;
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
        imageSet1();
    }
}

function setImg1(img){
    clearTimeout(timeout1);
    image1 = img;
    imageSet1();
}

function nextImg1(){
    clearTimeout(timeout1);
    imageSet1();
}
function prevImg1(){
    clearTimeout(timeout1);
    image1 -= 2;
    imageSet1();
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
        document.getElementById("set2pagenumber").innerText = image3 + 1 + "/5";
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
    clearTimeout(timeout2);
    imageSet2();
}
function prevImg2(){
    clearTimeout(timeout2);
    image2 -= 2;
    imageSet2();
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
    clearTimeout(timeout3);
    imageSet3();
}
function prevImg3(){
    clearTimeout(timeout3);
    image3 -= 2;
    imageSet3();
}