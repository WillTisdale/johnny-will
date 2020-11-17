$(document).ready(function(){

    let gameArray = [];
    const one = $('.one')
    const two = $('.two')
    const three = $('.three')
    const four = $('.four')
    const soundOne = document.getElementById('soundOne')
    const soundTwo = document.getElementById('soundTwo')
    const soundThree = document.getElementById('soundThree')
    const soundFour = document.getElementById('soundFour')
    const play = $('#playButton')
    let simpleSimonIndex = 0;
    let input;
    let delay = 200
    let delayTwo = 1000
    let score = $('#score')
    let points = 0


///Add delay to each additional index
    function theGame() {
        let random = Math.floor(Math.random() * 4)
        if(gameArray.length >= 1){
            let delayTwo = 1000
            for(var i = 0; i < gameArray.length; i++){
                if(gameArray[i] === 1){
                    setTimeout(activeOne, delayTwo)
                } else if(gameArray[i] === 2){
                    setTimeout(activeTwo, delayTwo)
                } else if(gameArray[i] === 3){
                    setTimeout(activeThree, delayTwo)
                } else if(gameArray[i] === 4){
                    setTimeout(activeFour, delayTwo)
                }
                delayTwo += 250
            }
        }
        if(random === 0){
            setTimeout(activeOne, delayTwo)
            gameArray.push(1)
            console.log(gameArray);
        } else if(random === 1){
            setTimeout(activeTwo, delayTwo)
            gameArray.push(2)
            console.log(gameArray);
        } else if(random === 2){
            setTimeout(activeThree, delayTwo)
            gameArray.push(3)
            console.log(gameArray);
        } else if(random === 3){
            setTimeout(activeFour, delayTwo)
            gameArray.push(4)
            console.log("this is in the game function " + gameArray);
        }
    }

    play.click(function(){
        theGame()
        one.click(function(){
            input = 1
            activeOne()
            let requiredInput = gameArray[simpleSimonIndex];
            if (input === requiredInput) {
                console.log("input = required input");
                simpleSimonIndex++;
                if (simpleSimonIndex === gameArray.length) {
                    points += 1
                    score.html(points)
                    simpleSimonIndex = 0
                    theGame()
                }
            } else {
                points = 0
                score.html(points)
                simpleSimonIndex = 0;
            }
        })
        two.click(function(){
            input = 2
            activeTwo()
            let requiredInput = gameArray[simpleSimonIndex];
            if (input === requiredInput) {
                console.log("input = required input");
                simpleSimonIndex++;
                if (simpleSimonIndex === gameArray.length) {
                    points += 1
                    score.html(points)
                    theGame()
                    simpleSimonIndex = 0
                }
            } else {
                points = 0
                score.html(points)
                simpleSimonIndex = 0;
            }
        })
        three.click(function(){
            input = 3
            activeThree()
            let requiredInput = gameArray[simpleSimonIndex];
            if (input === requiredInput) {
                console.log("input = required input");
                simpleSimonIndex++;
                if (simpleSimonIndex === gameArray.length) {
                    points += 1
                    score.html(points)
                    theGame()
                    simpleSimonIndex = 0
                }
            } else {
                points = 0
                score.html(points)
                simpleSimonIndex = 0;
            }
        })
        four.click(function(){
            input = 4
            activeFour()
            let requiredInput = gameArray[simpleSimonIndex];
            if (input === requiredInput) {
                console.log("input = required input");
                simpleSimonIndex++;
                if (simpleSimonIndex === gameArray.length) {
                    points += 1
                    score.html(points)
                    theGame()
                    simpleSimonIndex = 0
                }
            } else {
                points = 0
                score.html(points)
                simpleSimonIndex = 0;
            }
        })
    })

    function activeOne (){
        one.toggleClass('active-one')
        soundOne.play()
        setTimeout(function(){
            one.toggleClass('active-one')
        }, delay)
    }
    function activeTwo (){
        two.toggleClass('active-two')
        soundTwo.play()
        setTimeout(function(){
            two.toggleClass('active-two')
        }, delay)
    }
    function activeThree (){
        three.toggleClass('active-three')
        soundThree.play()
        setTimeout(function(){
            three.toggleClass('active-three')
        }, delay)
    }
    function activeFour (){
        four.toggleClass('active-four')
        soundFour.play()
        setTimeout(function(){
            four.toggleClass('active-four')
        }, delay)
    }















});