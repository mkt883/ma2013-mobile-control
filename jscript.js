
function appSlidePhone(){
    document.getElementById("phone-outline").style.translate = "-110% 5%";
    clearScreen();
}
function homeFunct(){
    isInCamApp = false;
    document.getElementById("phone-outline").style.translate = "0 5%";
    document.getElementById("screen").style.backgroundColor = "lightskyblue";
    addHomeScreen();
}

function clearScreen(){
    //code taken from: https://www.geeksforgeeks.org/how-to-clear-the-content-of-a-div-using-javascript/
    let screen = document.getElementById("screen");
    while(screen.firstChild){
        screen.removeChild(screen.firstChild);
    }

    return null;
}

function addHomeScreen(){
    //code taken from: https://stackoverflow.com/questions/584751/inserting-html-into-a-div
    //any other better ways? e.g. React?
    // isInCamApp = false;
    // camPosY = -1000;
    document.getElementById("screen").innerHTML = '<div id="app-container"><div class="app" id="app1" onclick="app1()"></div><div class="app" id="app2" onclick="app2()"></div><div class="app" id="app3" onclick="app3()"></div><div class="app" id="app4" onclick="app4()"></div><div class="app" id="app5" onclick="app5()"></div><div class="app" id="app6" onclick="app6()"></div><div class="app" id="app7" onclick="app7()"></div><div class="app" id="app8" onclick="app8()"></div><div class="app" id="app9" onclick="app9()"></div><div class="app" id="app10" onclick="app10()"></div></div>';
}

function light_dark(){
    let element = document.body;
    element.classList.toggle("dark-mode")
}

let orientation = 0;
function rotatePhone(){
    let phone = document.getElementById("phone-outline");
    orientation += 90; 
    phone.style.transform = "rotate(-"+orientation+"deg)";
    if(orientation === 360){
        orientation = 0;
    }
}


            //  APP SCREEN INTERFACES   //


function app1(){
    clearScreen();
    appSlidePhone();
    document.getElementById("screen").innerHTML = '<div style="background-color: navy; height: 487px; transform: translate(0,-16px);"><p>This is app 1</p></div>'
    //only adds in screen 1x?
}

function app2(){ //light--dark
    clearScreen();
    // appSlidePhone();
    document.getElementById("screen").innerHTML = '<div style="background-color: rgb(23,23,23); height: 487px; transform: translate(0,-16px);"><p>This is app 2</p><button onclick="light_dark()">light/dark-mode</button></div>'
}

function app3(){ //camera
    clearScreen();
    // appSlidePhone();
    isInCamApp = true;
    document.getElementById("screen").style.backgroundColor = "black";
    //add camera not available text
    document.getElementById("screen").innerHTML = '<div id="camAppBorder1"><button onclick="invertFilter()">INVERT</button><button onclick="grayFilter()">GRAY</button><button onclick="blurFilter()">BLUR</button></div><div id="camAppBorder2"><div id="camButton" onclick="takePhoto()"></div></div>'
}
function takePhoto(){
    save(canvas, "selfie.jpg")
}
function invertFilter(){
    if(invFilter === true){
        invFilter = false;
    }else{
        invFilter = true;
    }
}
function grayFilter(){
    if(gryFilter === true){
        gryFilter = false;
    }else{
        gryFilter = true;
    }
}
function blurFilter(){
    if(blrFilter === true){
        blrFilter = false;
    }else{
        blrFilter = true;
    }
}


function app4(){
    clearScreen();
    appSlidePhone();
    document.getElementById("screen").innerHTML = '<div style="background-color: red; height: 487px; transform: translate(0,-16px);"><p>This is app 4</p></div>'
}

function app5(){
    clearScreen();
    appSlidePhone();
    document.getElementById("screen").innerHTML = '<div style="background-color: purple; height: 487px; transform: translate(0,-16px);"><p>This is app 5</p></div>'
}
