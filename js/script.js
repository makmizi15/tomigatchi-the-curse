// TODO:
// [X] setup HTML
// [ ] style HTML
//      [X] Log on screen that asks for a name
//      [X] Main game
//      [ ] Losing screen
//      [ ] Winning screen
// [X] define global variables
// [X] create functions that increase or decrease bar size every second
// [X] create functions that effect levels positively 
// [ ] create charachter animations that occur when a button is clicked
// [ ] create remaining work bar that, when epmty, results in winning the game
// [ ] create function that makes you lose if any of the values reach full negativity


// global variables

let workLeft = 100;
let user = {
    name: '',
    stress: 0,
    confidence: 100,
    poopometer: 0,
    remWork: 0,
}


// buttons

const poop = $('.poop');
const adderal = $('.stress');
const flex = $('.flex');
const resetValueBtn = $('.reset-btn')
const $startForm = $('.start-form');
const restartGame = $('.restart-btn');


//value bars

const $stressBar = $('#stress-bar');
const $poopBar = $('#poop-bar');
const $confBar = $('#confidence-bar');
const $remBar = $('.rw-bar');


// user levels function 

let stressIntervalId = '';
let poopIntervalId = '';
let confIntervalId = '';
let remIntervalId = '';
let graphicIntervalId = '';


// game start

function gameStart(e) {
    e.preventDefault();
    popupsBeGone();
    user.name = $('.username-field').val();
    $('.username').text(user.name);
    play();
}


// hide all popups

function popupsBeGone(){
    $('.lose-popup').css('display', 'none');
    $('.win-popup').css('display', 'none');
    $('.start-popup').css('display', 'none');
}


// play game

function play() {
    $('.graphic').css('background-image', 'url("https://i.imgur.com/QRd5q2j.png")');
    remWorkLvl($remBar, 500);
    stressLvl($stressBar, 150);
    poopLvl($poopBar, 300);
    confidenceLvl($confBar, 200);
    
    //change image
    graphicIntervalId = setInterval(function (){
        if(user.stress >= 75  || user.confidence <= 25 || user.poopometer >= 75){
            $('.graphic').css('background-image', 'url("https://i.imgur.com/0Ke03Vl.png")');
        } else if (user.stress < 75 && user.stress >= 50  || user.confidence > 25 && user.confidence <= 50 || user.poopometer >= 75 && user.poopometer >= 50){
            $('.graphic').css('background-image', 'url("https://i.imgur.com/p96OYvR.png")');
        } else {
            $('.graphic').css('background-image', 'url("https://i.imgur.com/QRd5q2j.png")');
        }
        
    }, 1000);
    if(user.stress >= 100 || user.confidence <= 0 || user.poopometer >= 100){
        gameOver();
    }
}


// reset values on game end

function resetAllValues(){
    for (const stats in user){
        if (stats == 'name'){
            console.log(`the users name is ${user[stats]}`);
        } else if (stats == 'confidence'){
            user[stats] = 100;
            $confBar.css('width', user[stats] + '%');
            console.log(user[stats]);
        } else {
            user[stats] = 0;
            console.log(user[stats]);
            $stressBar.css('width', user[stats] + '%');
            $poopBar.css('width', user[stats] + '%');
            $remBar.css('width', user[stats] + '%');
        }
    }  
}

// win game

function winGame() {
    $('.win-popup').css('display', 'flex');
    resetAllValues();
    
}


// lose game
function gameOver() {
    $('.lose-popup').css('display', 'flex');
    resetAllValues();
}


// Start Value Bars

function stressLvl(bar,  speed) {
    stressIntervalId = setInterval(function () {
        user.stress++;
        bar.css('width', user.stress + '%');
        if (user.stress >= 100) {
            clearAllIntervals();
            gameOver();
        }
    }, speed);


};

function poopLvl(bar, speed) {
    poopIntervalId = setInterval(function () {
        user.poopometer++;
        bar.css('width', user.poopometer + '%');
        if (user.poopometer >= 100) {
            clearAllIntervals();
            gameOver();
        }
    }, speed);


};

function confidenceLvl(bar, speed) {
    confIntervalId = setInterval(function () {
        user.confidence--;
        bar.css('width', user.confidence + '%');
        if (user.confidence <= 0) {
            clearAllIntervals();
            gameOver();
        }
    }, speed);
};

function remWorkLvl(bar, speed) {
    remIntervalId = setInterval(function () {
        user.remWork++;
        bar.css('width', user.remWork + '%');
        $('.rw-percent').text(user.remWork + '%')
        if (user.remWork >= 100) {
            clearAllIntervals();
            winGame();
        }
    }, speed);
};


// stop value bar

function clearAllIntervals() {
    clearInterval(stressIntervalId);
    clearInterval(confIntervalId);
    clearInterval(poopIntervalId);
    clearInterval(remIntervalId);
    clearInterval(graphicIntervalId);


};


// Reset Values on btn click

function resetValue(e){
    e.preventDefault();
    if (this.id == 'stress'){
        clearInterval(stressIntervalId);
        user.stress = 0;
        $stressBar.css('width', user.stress + '%');
        stressLvl($stressBar, 150);
    } else if (this.id == 'confidence'){
        clearInterval(confIntervalId);
        user.confidence = 100;
        $confBar.css('width', user.confidence + '%');
        confidenceLvl($confBar, 200);

    } else {
        clearInterval(poopIntervalId);
        user.poopometer = 0;
        $poopBar.css('width', user.poopometer + '%');
        poopLvl($poopBar, 300);
    }
}


// interaction events 

$startForm.on('submit', gameStart)
resetValueBtn.on('click', resetValue)
restartGame.on('click', gameStart)