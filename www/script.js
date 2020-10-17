var storage;

storage = window.localStorage;

//-----------------------------------------

//--------------------------------------------------

screen.orientation.lock('landscape');

var start = document.getElementById("start");

var Swidth = screen.width;
var Sheight = screen.height;

var game = document.getElementById("game");
var gameHeight = parseInt(game.style.height);
var blankHeight = (Sheight - gameHeight); 

var character = document.getElementById("character");
    
var blockOne = document.getElementById("block-one");

var blockTwo = document.getElementById("block-two");

var blockThree = document.getElementById("block-three");

var coin1 = document.getElementById("coin1");

var coin2 = document.getElementById("coin2");

var coin3 = document.getElementById("coin3");

var coinbox = document.getElementById("coinboxID");

var giftbox = document.getElementById("giftboxID");

var magnet = document.getElementById("magnetID");

var magnetInterval;

var checkDead;

var score = 0;

var lMarkOld;

var altLhighScore = 0;

lMarkOld = storage.getItem("lHighScore");

var coinSound = new Audio("www/coin.mp3");

var failSound = new Audio("www/fail.mp3");
// failSound.play();
if(lMarkOld == null){
    document.getElementById("yourHighScore").innerHTML = "";
    
} else if(lMarkOld == 0){
    document.getElementById("yourHighScore").innerHTML = "";
} else {
    document.getElementById("yourHighScore").innerHTML = "High Score : "+lMarkOld;
}

// for volume button //
// ---------------------------------------------------------------------
var bgsound;
var volumeButton = document.getElementById("volume-img");

var volumeCheck = true;
var volumeStorage;
var volumeOld = 1;

bgsound = new Audio("www/bgsound.mp3");
// bgsound.play();

$(volumeButton).click(function(){

if(volumeCheck === true){
    volumeStorage = 0;

    volumeCheck = false;
    volumeButton.setAttribute("src","www/mute.png");
    bgsound.pause();
    
} else {
    volumeStorage = 1;
    
    volumeCheck = true;   
    volumeButton.setAttribute("src","www/volume.png");
    bgsound.play();
    setInterval(function(){
        bgsound.play();
    },90000);
}
    storage.setItem("volumeChoice",volumeStorage) // Pass a key name and its value to add or update that key.
});

volumeOld = storage.getItem("volumeChoice");

if(volumeOld == 1){
    volumeButton.setAttribute("src","www/volume.png");
    
    bgsound.play();
    setInterval(function(){
        bgsound.play();
    },90000);
} else {
    volumeButton.setAttribute("src","www/mute.png");
    bgsound.pause();
    
}


//------------------------------------------------------------------------------




//for settings button //
//-------------------------------------------------------------------------------
// var settings = true;
function showInstructions(){
    document.getElementById("start").style.display = "none";
    document.getElementById("game").style.display = "none";
    $("#game-rules-id").fadeToggle();
    
}

function homeButton(){

        document.getElementById("start").style.display = "block";
        document.getElementById("game").style.display = "none";
        document.getElementById("game-rules-id").style.display = "none";
}
//------------------------------------------------------------------------------

function startGame(){


    document.getElementById("start").style.display = "none";
    document.getElementById("game").style.display = "block";
    
    if(lMarkOld == null){
        document.getElementById("scoreDisplay").innerHTML = "Score : "+score+" | HighScore : "+altLhighScore;
        
    } else {
        document.getElementById("scoreDisplay").innerHTML = "Score : "+score+" | HighScore : "+lMarkOld;
    }
    
    // jumb();
    checkDead = setInterval(checkDead, 10);


}



//-----------------------------------------------------
function jumb(){
    
        if(character.classList != "character-animation"){
        character.classList.add("character-animation");
    
        setTimeout(function(){
            character.classList.remove("character-animation")
        },500);
        }

    
    
    var coin1Left = parseInt(window.getComputedStyle(coin1).getPropertyValue("Left"));
    var coin2Left = parseInt(window.getComputedStyle(coin2).getPropertyValue("Left"));
    var coin3Left = parseInt(window.getComputedStyle(coin3).getPropertyValue("Left"));
    var coinboxLeft = parseInt(window.getComputedStyle(coinbox).getPropertyValue("Left"));
    var giftboxLeft = parseInt(window.getComputedStyle(giftbox).getPropertyValue("Left"));
    

    if(coin1Left <= 200 && coin1Left >= 25){

        if(coin1.classList != "coin-hide"){
            coin1.classList.add("coin-hide");
            coinSound.play();
        
            setTimeout(function(){
                coin1.classList.remove("coin-hide")
            },500);
        }

        
        score = score + 10;
        if(lMarkOld == null){
            document.getElementById("scoreDisplay").innerHTML = "Score : "+score+" | HighScore : "+altLhighScore;
            
        } else {
            document.getElementById("scoreDisplay").innerHTML = "Score : "+score+" | HighScore : "+lMarkOld;
        }

        
    }

    if(coin2Left <= 200 && coin2Left >= 25){

        if(coin2.classList != "coin-hide"){
            coin2.classList.add("coin-hide");
            coinSound.play();
        
            setTimeout(function(){
                coin2.classList.remove("coin-hide")
            },500);
        }

        
        score = score + 10;
        if(lMarkOld == null){
            document.getElementById("scoreDisplay").innerHTML = "Score : "+score+" | HighScore : "+altLhighScore;
            
        } else {
            document.getElementById("scoreDisplay").innerHTML = "Score : "+score+" | HighScore : "+lMarkOld;
        }

        
    }

    if(coin3Left <= 200 && coin3Left >= 25){

        if(coin3.classList != "coin-hide"){
            coin3.classList.add("coin-hide");
            coinSound.play();
        
            setTimeout(function(){
                coin3.classList.remove("coin-hide")
            },500);
        }

        score = score + 10;
        if(lMarkOld == null){
            document.getElementById("scoreDisplay").innerHTML = "Score : "+score+" | HighScore : "+altLhighScore;
            
        } else {
            document.getElementById("scoreDisplay").innerHTML = "Score : "+score+" | HighScore : "+lMarkOld;
        }
        
    }

    if(coinboxLeft <= 200 && coinboxLeft >= 25){

        if(coinbox.classList != "coin-hide"){
            
            coinbox.setAttribute("src","www/coinsplash.gif");
            coinSound.play();
        
            setTimeout(function(){
                coinbox.classList.add("coin-hide");
                
            },1500);
            setTimeout(function(){
                coinbox.classList.remove("coin-hide");
                coinbox.setAttribute("src","www/coinbox.gif");
            },2000);
        }

        score = score + 50;
        if(lMarkOld == null){
            document.getElementById("scoreDisplay").innerHTML = "Score : "+score+" | HighScore : "+altLhighScore;
            
        } else {
            document.getElementById("scoreDisplay").innerHTML = "Score : "+score+" | HighScore : "+lMarkOld;
        }
        
    }

    if(giftboxLeft <= 200 && giftboxLeft >= 25){

        if(giftbox.classList != "coin-hide"){
            giftbox.classList.add("coin-hide");
            magnet.style.display = "block";
            magnetInterval = setInterval(function (){
                                coinSound.play();
                                score = score + 10;
                                if(lMarkOld == null){
                                    document.getElementById("scoreDisplay").innerHTML = "Score : "+score+" | HighScore : "+altLhighScore;
                                    
                                } else {
                                    document.getElementById("scoreDisplay").innerHTML = "Score : "+score+" | HighScore : "+lMarkOld;
                                }
                                coin1.classList.add("coinspeed");
                                coin2.classList.add("coinspeed");
                                coin3.classList.add("coinspeed");
                            }, 800);
            
        
            setTimeout(function(){
                giftbox.classList.remove("coin-hide");
                magnet.style.display = "none";
                clearInterval(magnetInterval);
                coin1.classList.remove("coinspeed");
                coin2.classList.remove("coinspeed");
                coin3.classList.remove("coinspeed");
            },7000);

    
        }

        score = score + 50;
        if(lMarkOld == null){
            document.getElementById("scoreDisplay").innerHTML = "Score : "+score+" | HighScore : "+altLhighScore;
            
        } else {
            document.getElementById("scoreDisplay").innerHTML = "Score : "+score+" | HighScore : "+lMarkOld;
        }
        
    }
    
    

}
    

            
            
            playerNameOld = storage.getItem("PlayerName");
            if(playerNameOld != null){
                document.getElementById("inputFirstName").value = playerNameOld;
            } else {
                document.getElementById("inputFirstName").value = "";
            }

//-----------------------------

//------------------------------

function checkDead(){

    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("Top"));

    var blockOneLeft = parseInt(window.getComputedStyle(blockOne).getPropertyValue("Left"));

    var blockThreeLeft = parseInt(window.getComputedStyle(blockThree).getPropertyValue("Left"));

            //-----------------------------


            // if(score > 250){
            //     setTimeout(function(){
            //         blockOne.style.animationDuration = "2.2s";
            //         blockThree.style.animationDuration = "2.2s";
            //         blockThree.style.animationDelay = "1.1s";
            //     },2000);
                
            // }
            // if(score > 300){
            //     setTimeout(function(){
            //         blockOne.style.animationDuration = "1.8s";
            //         blockThree.style.animationDuration = "1.8s";
            //         blockThree.style.animationDelay = "0.9s";
            //     },2000);
                
            // }
    
    //------------------------------

    // if(width < 2000){
        
        if(blockOneLeft<= -200 && blockOneLeft >= -310 && characterTop >45){

            
            bgsound.pause();
            failSound.play();
            

            if(score > lMarkOld){
                storage.setItem("lHighScore",score) // Pass a key name and its value to add or update that key
                document.getElementById("lastScoreDisplay").innerHTML = "Score : "+score+" | HighScore : "+score;
                document.getElementById("scoreLess").innerHTML = "Superb. Nice Score 😀";
                document.getElementById("scoreForm").value = score;
                if(playerNameOld != null && playerNameOld != ""){
                    document.getElementById("inputFirstName").value = playerNameOld;
                    savingScore();
                    document.getElementById("submit-mark").style.display = "none";
                    document.getElementById("inputFirstName").style.display = "none";
                }
                
                
                
            } else if(lMarkOld == null){
                storage.setItem("lHighScore","0") // Pass a key name and its value to add or update that key
                document.getElementById("lastScoreDisplay").innerHTML = "Score : "+score+" | HighScore : "+0;
                document.getElementById("scoreForm").value = lMarkOld;
            }else {
                storage.setItem("lHighScore",lMarkOld) // Pass a key name and its value to add or update that key
                document.getElementById("lastScoreDisplay").innerHTML = "Score : "+score+" | HighScore : "+lMarkOld;
                document.getElementById("scoreForm").value = lMarkOld;
                document.getElementById("scoreLess").innerHTML = "Sorry you Score less than your HighScore 😢";
                document.getElementById("loseMotivation").innerHTML = "'Don't Give Up' Go On Playing";
            }

            if(playerNameOld != null && playerNameOld != ""){
                document.getElementById("inputFirstName").value = playerNameOld;
                document.getElementById("submit-mark").style.display = "none";
                document.getElementById("inputFirstName").style.display = "none";
            } 
            // else {
            //     document.getElementById("submit-mark").style.display = "block";
            //     document.getElementById("inputFirstName").style.display = "block";
            // }
            // else if(playerNameOld == ""){
            //     document.getElementById("submit-mark").style.display = "block";
            //     document.getElementById("inputFirstName").style.display = "block";
            // } 
            // else if(playerNameOld == null){
            //     document.getElementById("submit-mark").style.display = "block";
            //     document.getElementById("inputFirstName").style.display = "block";
            // }

            clearInterval(magnetInterval);
            document.getElementById("game").style.display = "none";
            document.getElementById("blank").style.display = "none";
            document.getElementById("gameLose").style.display = "block";

            
    
            document.getElementById("block-one").style.animationPlayState = "paused";
            // document.getElementById("block-two").style.animationPlayState = "paused";
            document.getElementById("block-three").style.animationPlayState = "paused";
            document.getElementById("#line").style.animationPlayState = "paused";
            document.getElementById("#line1").style.animationPlayState = "paused";
            document.getElementById("#line2").style.animationPlayState = "paused";
            document.getElementById("#line3").style.animationPlayState = "paused";
            
            
            
            
 
        }
    
        if(blockThreeLeft<= -240 && blockThreeLeft >= -340 && characterTop > 45){
    
            
            bgsound.pause();
            failSound.play();


            if(score > lMarkOld){
                storage.setItem("lHighScore",score) // Pass a key name and its value to add or update that key
                document.getElementById("lastScoreDisplay").innerHTML = "Score : "+score+" | HighScore : "+score;
                document.getElementById("scoreLess").innerHTML = "Superb. Nice Score 😀";
                document.getElementById("scoreForm").value = score;

                if(playerNameOld != null && playerNameOld != ""){
                    document.getElementById("inputFirstName").value = playerNameOld;
                    savingScore();
                    document.getElementById("submit-mark").style.display = "none";
                    document.getElementById("inputFirstName").style.display = "none";
                }
                
            } else if(lMarkOld == null){
                storage.setItem("lHighScore","0") // Pass a key name and its value to add or update that key
                document.getElementById("lastScoreDisplay").innerHTML = "Score : "+score+" | HighScore : "+0;
                document.getElementById("scoreForm").value = lMarkOld;
            }else {
                storage.setItem("lHighScore",lMarkOld) // Pass a key name and its value to add or update that key
                document.getElementById("lastScoreDisplay").innerHTML = "Score : "+score+" | HighScore : "+lMarkOld;
                document.getElementById("scoreForm").value = lMarkOld;
                document.getElementById("scoreLess").innerHTML = "Sorry you Score less than your HighScore 😢";
                document.getElementById("loseMotivation").innerHTML = "'Don't Give Up' Go On Playing";
            }

            if(playerNameOld != null && playerNameOld != ""){
                document.getElementById("inputFirstName").value = playerNameOld;
                document.getElementById("submit-mark").style.display = "none";
                document.getElementById("inputFirstName").style.display = "none";
            } 
            
            clearInterval(magnetInterval);
            document.getElementById("game").style.display = "none";
            document.getElementById("blank").style.display = "none";
            document.getElementById("gameLose").style.display = "block";

            document.getElementById("block-one").style.animationPlayState = "paused";
            document.getElementById("block-three").style.animationPlayState = "paused";
            document.getElementById("#line").style.animationPlayState = "paused";
            document.getElementById("#line1").style.animationPlayState = "paused";
            document.getElementById("#line2").style.animationPlayState = "paused";
            document.getElementById("#line3").style.animationPlayState = "paused";

            
            
            
        }
    
}

//firebase




// // saving data



function savingScore(){
    
    playerName = document.getElementById("inputFirstName").value;
    storage.setItem("PlayerName",playerName);

    db.collection('gamedb').add({
        Name: form.Name.value,
        Score: Number(form.Score.value)
    });
    form.Name.value = '';
    form.Score.value = '';

    setTimeout(function(){
        window.location.href='result.html'
    }, 2000);
}


//--------------------------------------------------------------------------


// for theme ---------------------------------
var element = document.body;;
var themeButton = true;

var themeCheck = true;
var themestorage;
var themeold = 1;
var themeBOld = 1;



function themeToggle(){

//----------------------------------------
//for theme button
    

   if(themeButton === true){
       themeButton = false;
       themeBStorage = 0;
       $("#theme-button").addClass("btn-dark");
    
    } else {
       themeButton = true;
       themeBStorage = 1;
       $("#theme-button").removeClass("btn-dark");
    }
    storage.setItem("themeBChoice",themeBStorage) // Pass a key name and its value to add or update that key.
//--------------------------------------------------------

   if(element.classList != "dark-mode"){
        themestorage = 0;
        element.classList.add("dark-mode");
        element.classList.remove("light-mode");
   } else {
        themestorage = 1;
        element.classList.remove("dark-mode");
        element.classList.add("light-mode");
   }
    storage.setItem("themechoice",themestorage) // Pass a key name and its value to add or update that key.
}   

//-----------------------------------------------------
themeold = storage.getItem("themechoice");
if(themeold == 1){
    element.classList.remove("dark-mode");
    element.classList.add("light-mode");
    
} else {
    element.classList.add("dark-mode");
    element.classList.remove("light-mode");
}
//--------------------------------------------------------------
themeBOld = storage.getItem("themeBChoice");

if(themeBOld == 0){
    $("#theme-button").addClass("btn-dark");
} else {
    
    $("#theme-button").removeClass("btn-dark");
}
//-----------------------------------------------------