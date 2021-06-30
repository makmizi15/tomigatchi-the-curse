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

// user levels function 
let stressIntervalId = '';
let poopIntervalId = '';
let confIntervalId = '';

// play game
function play() {
    stressLvl($stressBar, 100);
    poopLvl($poopBar, 1000);
    confidenceLvl($confBar, 400);
    if(user.stress >= 100 || user.confidence <= 0 || user.poopometer >= 100){
        gameOver();
    }
}

// lose game
function gameOver() {
    $('.lose-popup').css('display', 'flex');
}

// game start

function gameStart(e) {
    e.preventDefault();
    $('.lose-popup').css('display', 'none');
    $('.start-popup').css('display', 'none');
    user.name = $('.get-username').val();
    $('.username').text(user.name);
    play();
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

// stop value bar

function clearAllIntervals() {
    clearInterval(stressIntervalId);
    clearInterval(confIntervalId);
    clearInterval(poopIntervalId);


};

// Reset Value

function resetValue(e){
    e.preventDefault();
    if (this.id == 'stress'){
        clearAllIntervals(stressIntervalId);
        user.stress = 0;
        $stressBar.css('width', user.stress + '%');
        stressLvl($stressBar, 100);
    } else if (this.id == 'confidence'){
        clearAllIntervals(confIntervalId);
        user.confidence = 100;
        $confBar.css('width', user.confidence + '%');
        poopLvl($poopBar, 1000);

    } else {
        clearAllIntervals(poopIntervalId);
        user.poopometer = 0;
        $poopBar.css('width', user.poopometer + '%');
        confidenceLvl($confBar, 400);
    }
}

// interaction events 

$startForm.on('submit', gameStart)
resetValueBtn.on('click', resetValue)
restartGame.on('click', gameStart)