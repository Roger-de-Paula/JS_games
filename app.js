
//userOption
var userOption = '';

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');


rock.addEventListener('click', () => {
    userOption = 'rock';
    game(userOption);
})

paper.addEventListener('click', () => {
    userOption = 'paper';
    game(userOption);
})

scissors.addEventListener('click', () => {
    userOption = 'scissors';
    game(userOption);
})

//Robot Option

var options = ['rock', 'paper', 'scissors'];

// program to get a random item from an array

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}


robot.addEventListener('click', () => {
    robotOption();
})


//game
var userScore = 0;
var robotScore = 0;



//score
function userDisplayScore(){
    document.getElementById('userNumber').readOnly = true;
    var value = parseInt(document.getElementById('userNumber').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('userNumber').value = value;
}

function game(userOption){
    
    while (true){

        var robotOption = getRandomItem(options);


        if (userOption == 'rock' && robotOption == 'scissors') 
        {
            console.log('Computer picked scissors, you won');
            userDisplayScore();
            break;
        }

        if (userOption == 'paper' && robotOption == 'rock') 
        {
            console.log('Computer picked rock, you won');
            userDisplayScore();
            break;
        }
        
        if (userOption == 'scissors' && robotOption == 'paper') 
        {
            console.log('Computer picked paper, you won');
            userDisplayScore();
            break;
        }
        
        if (userOption == robotOption) 
        {
            
            document.getElementById('tieNumber').readOnly = true;
            var value = parseInt(document.getElementById('tieNumber').value, 10);
            value = isNaN(value) ? 0 : value;
            value++;
            document.getElementById('tieNumber').value = value;
            break;
        }

        else 
        {
            console.log(`Computer picked ${robotOption}, Computer won!`)

            document.getElementById('number').readOnly = true;
            var value = parseInt(document.getElementById('number').value, 10);
            value = isNaN(value) ? 0 : value;
            value++;
            document.getElementById('number').value = value;
        
            console.log(value);


            break;
        }
    }
}



