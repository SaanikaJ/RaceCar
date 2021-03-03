var images = [
    "Background_1.jpg",
    "Background_2.jpg",
    "Background_3.jpg",
    "Background_4.jpg",
    "Background_5.jpg",
]; 
canvas = document.getElementById("myCanvas"); 
ctx = canvas.getContext("2d");

var random_number = Math.floor(Math.random()*5); 
racecar1_width = 100; 
racecar1_height = 90; 

racecar1_x = 10;
racecar1_y = 10; 

racecar2_width = 100; 
racecar2_height = 90; 

racecar2_x = 10;
racecar2_y = 90; 

background_image = images[random_number]; 
racecar1_image = "car1.jpg"; 
racecar2_image = "car2.png";

function add(){ 
    background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image; 
    
    racecar1_imgTag = new Image(); 
    racecar1_imgTag.onload = uploadCar1; 
    racecar1_imgTag.src = racecar1_image; 

    racecar2_imgTag = new Image(); 
    racecar2_imgTag.onload = uploadCar2; 
    racecar2_imgTag.src = racecar2_image; 

}

function uploadBackground(){ 
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1(){ 
    ctx.drawImage(racecar1_imgTag, racecar1_x, racecar1_y, racecar1_width, racecar1_height);
}

function uploadCar2(){ 
    ctx.drawImage(racecar2_imgTag, racecar2_x, racecar2_y, racecar2_width, racecar2_height);
}

window.addEventListener("keydown", my_keydown); 

function my_keydown(e){ 
    keyPress = e.keyCode; 
    console.log(keyPress); 

    if (keyPress == "38"){
        up();
        console.log("Up"); 
    }

    if (keyPress == "40"){
        down();
        console.log("Down"); 
    }

    if (keyPress == "37"){
        left(); 
        console.log("Left"); 
    }

    if (keyPress == "39"){
        right(); 
        console.log("Right"); 
    }

    if (keyPress == "49"){
        right_1(); 
        console.log("Right_1"); 
    }

    if (keyPress == "50"){
        left_1(); 
        console.log("Left_1"); 
    }

    if (keyPress == "51"){
        up_1(); 
        console.log("Up_1"); 
    }

    if (keyPress == "52"){
        down_1(); 
        console.log("Down_1"); 
    }
}
function up(){
    if ( racecar2_y >= 0){ 
        racecar2_y = racecar2_y - 10; 
uploadBackground(); 
uploadCar2();
uploadCar1();} 
}

function down(){
    if(racecar2_y <= 500){ 
        racecar2_y = racecar2_y+ 10; 
uploadBackground(); 
uploadCar2();
uploadCar1();
    }
}

function left(){
    if (racecar2_x >= 0){ 
        racecar2_x = racecar2_x - 10; 
uploadBackground(); 
uploadCar2();
uploadCar1();
    }
}

function right(){
    if ( racecar2_x <= 700){
        racecar2_x = racecar2_x + 10; 
uploadBackground(); 
uploadCar2();
uploadCar1();
    }
}

function right_1(){
    if ( racecar1_x <= 700){
        racecar1_x = racecar1_x + 10; 
uploadBackground(); 
uploadCar1();
uploadCar2();
    }
}

function left_1(){
    if (racecar1_x >= 0){ 
        racecar1_x = racecar1_x - 10; 
uploadBackground(); 
uploadCar1();
uploadCar2();
    }
}

function up_1(){
    if ( racecar1_y >= 0){ 
        racecar1_y = racecar1_y - 10; 
uploadBackground(); 
uploadCar1();
uploadCar2();} 
}

function down_1(){
    if(racecar1_y <= 500){ 
        racecar1_y = racecar1_y+ 10; 
uploadBackground(); 
uploadCar1();
uploadCar2();
    }
}