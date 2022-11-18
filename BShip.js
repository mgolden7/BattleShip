  //varibale declarations outside all functions... 
   //P1 var Declarations...
    //P1 stats...    
        var P1Shots;
        var P1Hits;
        var P1HitPercentage;
        var P1Sub1Sunk;
        var P1Sub2Sunk;
        var P1Sub3Sunk;
        var P1shipsSunk;
    //P1 individual ship locations...
        var ship1P1A;
        var ship1P1B;
        var ship1P1C;
        var ship2P1A;
        var ship2P1B;
        var ship2P1C;
        var ship3P1A;
        var ship3P1B;
        var ship3P1C;
    //P1 ship location arrays...
        var P1Sub1Locations;
        var P1Sub2Locations;
        var P1Sub3Locations;
        var P1SubLocations;
    //P1 sank-a-ship alerts...
        var P1alerted1;
        var P1alerted2;
        var P1alerted3;
    
   //P2 var declarations...
    //P2 stats...
        var P2Shots;
        var P2Hits;
        var P2HitPercentage;
        var P2Sub1Sunk;
        var P2Sub2Sunk;
        var P2Sub3Sunk;
        var P2shipsSunk;
    //P2 individual ship locations...
        var ship1P2A;
        var ship1P2B;
        var ship1P2C;
        var ship2P2A;
        var ship2P2B;
        var ship2P2C;
        var ship3P2A;
        var ship3P2B;
        var ship3P2C;
    //P2 ship location arrays...
        var P2Sub1Locations;
        var P2Sub2Locations;
        var P2Sub3Locations;
        var P2SubLocations;
    //P1 sank-a-ship alerts...
        var P2alerted1;
        var P2alerted2;
        var P2alerted3;
    
    //newGame() complete...
        var newGameFunctionComplete;
    

   //function for clearing old board and setting new board...
   function newGame() {
    //var assignments/resets...
        //P1 stats...
            P1Shots = 0;
            P1Hits = 0;
            P1HitsArray = [];
            P1ShotsArray = [];
            P1HitPercentage = Math.round((P1Hits/P1Shots) * 100);
            P1Sub1Sunk = false;
            P1Sub2Sunk = false;
            P1Sub3Sunk = false;
            P1shipsSunk = 0;
        //P1 ship locations...
            P1Sub1Locations = [];
            P1Sub2Locations = [];
            P1Sub3Locations = [];
            P1SubLocations = [];
        //P1 sank-a-ship alerts...
            P1alerted1 = false;
            P1alerted2 = false;
            P1alerted3 = false;
        
        //P2 stats...
            P2Shots = 0;
            P2Hits = 0;
            P2HitsArray = [];
            P2ShotsArray = [];
            P2HitPercentage = Math.round((P2Hits/P2Shots) * 100);
            P2Sub1Sunk = false;
            P2Sub2Sunk = false;
            P2Sub3Sunk = false;
            P2shipsSunk = 0;
        //P2 ship locations...
            P2Sub1Locations = [];
            P2Sub2Locations = [];
            P2Sub3Locations = [];
            P2SubLocations = [];
        //P1 sank-a-ship alerts...
            P2alerted1 = false;
            P2alerted2 = false;
            P2alerted3 = false;
      
      //fade gameboard out for cool effect while resetting...
      document.getElementById('gameBoardContainer').style.opacity = .2;
      
      //function for resetting gameboard...
      var i;
      setTimeout(function resetGameBoard() {
         for (i = 1; i < 82; i++) {
         document.getElementById('gridDivP1' + i).innerHTML = i;
         document.getElementById('gridDivP2' + i).innerHTML = i;
         document.getElementById('gridDivP1' + i).style.cssText = (
         "background-color: rgb(255, 255, 255, .30);" + 
         "text-shadow: 0px 1px 2px rgb(0, 53, 55);" +
         "border: 2px solid white;" +
         "color: white");
         document.getElementById('gridDivP2' + i).style.cssText = (
         "background-color: rgb(255, 255, 255, .30);" + 
         "text-shadow: 0px 1px 2px rgb(0, 53, 55);" +
         "border: 2px solid white;" + 
         "color: white");
         //console.log(i); //this line to test loop
      }}, 1000);
      
      //array of off-limit grid numbers to prevent ships from "wrapping" around the board...
      var gridsNotAllowed = [8, 9, 17, 18, 26, 27, 35, 36, 44, 45, 53, 54, 62, 63, 71, 72, 80, 81];
      var ship2GridsNotAllowed = [64, 73, 65, 74, 66, 75, 67, 76, 68, 77, 69, 78, 70, 79, 71, 80, 72, 81];
      //function: calc P1 ship locations for three subs...
      setTimeout(function setGamePiecesBoardP1() {
        ship1P1A = (Math.round(Math.random() * 80));
        while (ship1P1A == 0 || gridsNotAllowed.includes(ship1P1A)) {
            ship1P1A = (Math.round(Math.random() * 80));
        }
            ship1P1B = ship1P1A + 1;
            ship1P1C = ship1P1A + 2;
            P1Sub1Locations.push(ship1P1A, ship1P1B, ship1P1C);
        ship2P1A = (Math.round(Math.random() * 64));
        while (ship2P1A == 0 || ship2P1A == ship1P1A || ship2P1A == ship1P1B || ship2P1A == ship1P1C || ship2P1A == (ship1P1A - 9) || ship2P1A == (ship1P1A - 18) || ship2P1A == (ship1P1B - 9) || ship2P1A == (ship1P1B - 18) || ship2P1A == (ship1P1C - 9) || ship2P1A == (ship1P1C - 18) || ship2GridsNotAllowed.includes(ship2P1A)) {
            ship2P1A = (Math.round(Math.random() * 64));
        };
            ship2P1B = ship2P1A + 9;
            ship2P1C = ship2P1A + 18;
            P1Sub2Locations.push(ship2P1A, ship2P1B, ship2P1C);
        ship3P1A = (Math.round(Math.random() * 80));
        while (gridsNotAllowed.includes(ship3P1A) || ship3P1A == 0 || ship3P1A == ship1P1A || ship3P1A == ship1P1B || ship3P1A == ship1P1C || ship3P1A == (ship1P1A - 1) || ship3P1A == (ship1P1A - 2) || ship3P1A == ship2P1A || ship3P1A == ship2P1B || ship3P1A == ship2P1C || ship3P1A == (ship2P1A - 1) || ship3P1A == (ship2P1A - 2) || ship3P1A == (ship2P1B - 1) || ship3P1A == (ship2P1B - 2) || ship3P1A == (ship2P1C - 1) || ship3P1A == (ship2P1C - 2)) {
            ship3P1A = (Math.round(Math.random() * 80));
        }
            ship3P1B = ship3P1A + 1;
            ship3P1C = ship3P1A + 2;
            P1Sub3Locations.push(ship3P1A, ship3P1B, ship3P1C);
        P1SubLocations.push(ship1P1A, ship1P1B, ship1P1C, ship2P1A, ship2P1B, ship2P1C, ship3P1A, ship3P1B, ship3P1C);
        //use the following for testing outputs...
        /*console.log("Player 1 Submarine Positions: " + ship1P1A, ship1P1B, ship1P1C, ship2P1A, ship2P1B, ship2P1C, ship3P1A, ship3P1B, ship3P1C);
        console.log(P1SubLocations);
        console.log(P1Sub1Locations, P1Sub2Locations, P1Sub3Locations);*/
      }, 1000);
      setTimeout(() => {
      console.log(P1Sub1Locations);
      console.log(P1Sub2Locations);
      console.log(P1Sub3Locations);
      console.log(P1SubLocations);
      console.log(ship1P1A, ship1P1B, ship1P1C, ship2P1A, ship2P1B, ship2P1C, ship3P1A, ship3P1B, ship3P1C);
      }, 1000);
      
      //function: calc P2 ship locations for three subs...      
      setTimeout(function setGamePiecesBoardP2() {
        ship1P2A = (Math.round(Math.random() * 80));
        while (ship1P2A == 0 || gridsNotAllowed.includes(ship1P2A)) {
            ship1P2A = (Math.round(Math.random() * 80));
        }
            ship1P2B = ship1P2A + 1;
            ship1P2C = ship1P2A + 2;
            P2Sub1Locations.push(ship1P2A, ship1P2B, ship1P2C);
        ship2P2A = (Math.round(Math.random() * 64));
        while (ship2P2A == 0 || ship2P2A == ship1P2A || ship2P2A == ship1P2B || ship2P2A == ship1P2C || ship2P2A == (ship1P2A - 9) || ship2P2A == (ship1P2A - 18) || ship2P2A == (ship1P2B - 9) || ship2P2A == (ship1P2B - 18) || ship2P2A == (ship1P2C - 9) || ship2P2A == (ship1P2C - 18) || ship2GridsNotAllowed.includes(ship2P2A)) {
            ship2P2A = (Math.round(Math.random() * 64));
        };
            ship2P2B = ship2P2A + 9;
            ship2P2C = ship2P2A + 18;
            P2Sub2Locations.push(ship2P2A, ship2P2B, ship2P2C);
        ship3P2A = (Math.round(Math.random() * 80));
        while (gridsNotAllowed.includes(ship3P2A) || ship3P2A == 0 || ship3P2A == ship1P2A || ship3P2A == ship1P2B || ship3P2A == ship1P2C || ship3P2A == (ship1P2A - 1) || ship3P2A == (ship1P2A - 2) || ship3P2A == ship2P2A || ship3P2A == ship2P2B || ship3P2A == ship2P2C || ship3P2A == (ship2P2A - 1) || ship3P2A == (ship2P2A - 2) || ship3P2A == (ship2P2B - 1) || ship3P2A == (ship2P2B - 2) || ship3P2A == (ship2P2C - 1) || ship3P2A == (ship2P2C - 2)) {
            ship3P2A = (Math.round(Math.random() * 80));
        }
            ship3P2B = ship3P2A + 1;
            ship3P2C = ship3P2A + 2;
            P2Sub3Locations.push(ship3P2A, ship3P2B, ship3P2C);
        P2SubLocations.push(ship1P2A, ship1P2B, ship1P2C, ship2P2A, ship2P2B, ship2P2C, ship3P2A, ship3P2B, ship3P2C)
        //use the following for testing outputs...
        /*console.log("Player 2 Submarine Positions: " + ship1P2A, ship1P2B, ship1P2C, ship2P2A, ship2P2B, ship2P2C, ship3P2A, ship3P2B, ship3P2C);
        console.log("P2SubLocations variable: " + P2SubLocations);
        console.log(P2Sub1Locations, P2Sub2Locations, P2Sub3Locations);*/
        document.getElementById('player1Box').style.background = "none";
        document.getElementById('player2Box').style.background = "none";
        document.getElementById('player1Box').style.opacity = 1;
        document.getElementById('player2Box').style.opacity = 1;
        document.getElementById('startButtonDiv').style.visibility = "visible";
        document.getElementById('player1StatsDiv').style.visibility = "hidden";
        document.getElementById('player2StatsDiv').style.visibility = "hidden";
        document.getElementById('start').style.width = "fit-content";
        document.getElementById('player1GridBox').style.boxShadow = "none";
        document.getElementById('player2GridBox').style.boxShadow = "none";
        document.getElementById('player1GridBox').style.opacity = 1;
        document.getElementById('player2GridBox').style.opacity = 1;
      }, 1000);
      setTimeout(() => {
      console.log(P2Sub1Locations);
      console.log(P2Sub2Locations);
      console.log(P2Sub3Locations);
      console.log(P2SubLocations);
      console.log(ship1P2A, ship1P2B, ship1P2C, ship2P2A, ship2P2B, ship2P2C, ship3P2A, ship3P2B, ship3P2C);
      }, 1000);
      
      //function to make board reappear after resetting...
      setTimeout(function reappearBoard() {
         document.getElementById('gameBoardContainer').style.opacity = 1;
      }, 1400) 

      //update newGameFunctionComplete var...
      newGameFunctionComplete = true;
    }
    
    
    
    //Function to start and play game...
    //variable declarations...
        //Who starts? P1 or P2...
        var whoStarts;
    function startPlay() {
        whoStarts = 0;
    //determine if player 1 or player 2 goes first...
    if (newGameFunctionComplete == false) {
        alert("Please click the 'New Game' button to begin")
    } else {
        whoStarts = Math.round((Math.random()) * 3);
        while (whoStarts == 0 || whoStarts == 3) {
            whoStarts = Math.round((Math.random()) * 3);
        }
    };
    if (whoStarts == 1) {
        document.getElementById('player1Box').style.background = "red",
        document.getElementById('player1Box').style.opacity = 1,
        document.getElementById('player2Box').style.opacity = .30,
        document.getElementById('player1GridBox').style.opacity = .30, 
        document.getElementById('player2GridBox').style.boxShadow = "0px 0px 12px red"
    } else (
        document.getElementById('player2Box').style.background = "red",
        document.getElementById('player2Box').style.opacity = 1,
        document.getElementById('player1Box').style.opacity = .30,
        document.getElementById('player2GridBox').style.opacity = .30,
        document.getElementById('player1GridBox').style.boxShadow = "0px 0px 12px red"
    );
    
    //reset stats...
      //reset player 1 stats board...
        document.getElementById('player1StatsDiv').style.visibility = "visible";
        document.getElementById('shotsSpanP1').innerHTML = P1Shots;
        document.getElementById('hitsSpanP1').innerHTML = P1Hits;
        document.getElementById('shipsSunkSpanP1').innerHTML = P1shipsSunk;
        document.getElementById('hitPercentageSpanP1').innerHTML = P1HitPercentage;
      //reset player 2 stats board...
        document.getElementById('player2StatsDiv').style.visibility = "visible";
        document.getElementById('shotsSpanP2').innerHTML = P2Shots;
        document.getElementById('hitsSpanP2').innerHTML = P2Hits;
        document.getElementById('shipsSunkSpanP2').innerHTML = P2shipsSunk;
        document.getElementById('hitPercentageSpanP2').innerHTML = P2HitPercentage;

    //console.log to check variable outputs from newGame()...
        console.log("P1 sub locations: " + ship1P1A, ship1P1B, ship1P1C, ship2P1A, ship2P1B, ship2P1C, ship3P1A, ship3P1B, ship3P1C);
        console.log("P1Shots = " + P1Shots + ", P1Hits = " + P1Hits + ", P1HitPercentage = " + P1HitPercentage);
        console.log("P1Sub1Sunk = " + P1Sub1Sunk + ", P1Sub2Sunk = " + P1Sub2Sunk + ", P1Sub3Sunk = " + P1Sub3Sunk + ", P1ShipsSunk = " + P1shipsSunk);
        console.log("P1Alerted1 = " + P1alerted1 + ", P1Alerted2 = " + P1alerted2 + ", P1Alerted3 = " + P1alerted3);
        console.log("P1Sub1Locations = " + P1Sub1Locations);
        console.log("P1Sub2Locations = " + P1Sub2Locations);
        console.log("P1Sub3Locations = " + P1Sub3Locations);
        console.log("P1SubLocations = " + P1SubLocations);
        console.log("P2 sub locations: " + ship1P2A, ship1P2B, ship1P2C, ship2P2A, ship2P2B, ship2P2C, ship3P2A, ship3P2B, ship3P2C);
        console.log("P2Shots = " + P2Shots + ", P2Hits = " + P2Hits + ", P2HitPercentage = " + P2HitPercentage);
        console.log("P2Sub1Sunk = " + P2Sub1Sunk + ", P2Sub2Sunk = " + P2Sub2Sunk + ", P2Sub3Sunk = " + P2Sub3Sunk + ", P2ShipsSunk = " + P2shipsSunk);
        console.log("P2Alerted1 = " + P2alerted1 + ", P2Alerted2 = " + P2alerted2 + ", P2Alerted3 = " + P2alerted3)
        console.log("P2Sub1Locations = " + P2Sub1Locations);
        console.log("P2Sub2Locations = " + P2Sub2Locations);
        console.log("P2Sub3Locations = " + P2Sub3Locations);
        console.log("P2SubLocations = " + P2SubLocations);
        console.log("newGameFunctionComplete? " + newGameFunctionComplete);
        console.log("who goes first? Player " + whoStarts);

    //hide and adjust start button...
        document.getElementById('startButtonDiv').style.visibility = "hidden";
        document.getElementById('start').style.width = "50px";
    }
    
    //functions for game play...
    //P1 fires...
        //P1 stat assignments...
           /* P1HitsArray = [];
            P1ShotsArray = [];
            P1Shots = 0;
            P1Hits = 0;
            P1HitPercentage = Math.round((P1Hits/P1Shots) * 100);
            P2Sub1Sunk;
            P2Sub2Sunk;
            P2Sub3Sunk;
            P2shipsSunk = 0;
        //alert P1 'congrats' on sinking a single sub...
            var P1alerted1;
            var P1alerted2;
            var P1alerted3;*/
        //element.target object for P2 gameboard element Id and value...
            var grabP1Grid;
            var P1gridId;
            var P1gridValue;
        //change grid value from string to number...
            var P1gridValueToNumber;
        //missfire --> second chance...
            var P1misfire;
        function p1Fires(event) {
            //console.log(whoStarts);
            //console.log(P2SubLocations);
            if (newGameFunctionComplete == true) {    
                if (whoStarts == 2) {
                    alert("Player 2, please fire a torpedo at a grid on Player 1's game board")
                } else {
                    grabP1Grid = event.target;
                    P1gridId = grabP1Grid.id;
                    P1gridValue = grabP1Grid.innerHTML;
                    P1gridValueToNumber = +P1gridValue;
                    console.log(P1gridId);
                    console.log(P1gridValueToNumber);
                    console.log(typeof(P1gridValueToNumber));
                    console.log(P2SubLocations);
                    console.log(typeof(P2SubLocations[1]));
                    if (P1ShotsArray.includes(P1gridValueToNumber) || P1gridValue == "HIT!" || P1gridValue == "MISS") {
                        alert("You already fired on that grid location!"),
                        P1misfire = true;
                    } else {
                        if (P2SubLocations.includes(P1gridValueToNumber)) {
                            document.getElementById(P1gridId).style.background = "red",
                            document.getElementById(P1gridId).style.fontSize = "14px",
                            document.getElementById(P1gridId).innerHTML = "HIT!",
                            P1HitsArray.push(P1gridValueToNumber);
                            console.log("P1Hits: " + P1HitsArray);
                            P1Hits = P1Hits + 1;
                            P1Shots = P1Shots + 1;
                            P1HitPercentage = Math.round((P1Hits/P1Shots) * 100);
                            P1ShotsArray.push(P1gridValueToNumber);
                        }  else {
                            document.getElementById(P1gridId).style.background = "blue",
                            document.getElementById(P1gridId).style.fontSize = "14px",
                            document.getElementById(P1gridId).innerHTML = "MISS"
                            P1Shots = P1Shots + 1;
                            P1HitPercentage = Math.round((P1Hits/P1Shots) * 100);
                            P1ShotsArray.push(P1gridValueToNumber);
                        }
                        console.log("P1Shots: " + P1ShotsArray);
                    }
                    
                    if (P1HitsArray.includes(ship1P2A) && P1HitsArray.includes(ship1P2B) && P1HitsArray.includes(ship1P2C)) {
                        while (P1alerted1 == false) {
                            P2Sub1Sunk = true;
                            P2shipsSunk = P2shipsSunk + 1;
                            alert("Congratulations! You sank enemy submarine #01!");
                            P1alerted1 = true;
                        }
                    }
                    if (P1HitsArray.includes(ship2P2A) && P1HitsArray.includes(ship2P2B) && P1HitsArray.includes(ship2P2C)) {
                        while (P1alerted2 == false) {
                            P2Sub2Sunk = true;
                            P2shipsSunk = P2shipsSunk + 1;
                            alert("Congratulations! You sank enemy submarine #02!");
                            P1alerted2 = true;
                        }
                    }
                    if (P1HitsArray.includes(ship3P2A) && P1HitsArray.includes(ship3P2B) && P1HitsArray.includes(ship3P2C)) {
                        while (P1alerted3 == false) {
                            P2Sub3Sunk = true;
                            P2shipsSunk = P2shipsSunk + 1;
                            alert("Congratulations! You sank enemy submarine #03!");
                            P1alerted3 = true;
                        }
                    }
                    document.getElementById('shotsSpanP1').innerHTML = P1Shots;
                    document.getElementById('hitsSpanP1').innerHTML = P1Hits;
                    document.getElementById('shipsSunkSpanP1').innerHTML = P2shipsSunk;
                    document.getElementById('hitPercentageSpanP1').innerHTML = P1HitPercentage;  
                        if (P2Sub1Sunk == true && P2Sub2Sunk == true && P2Sub3Sunk == true) {
                            alert("Congradulations! You sank ALL of your adversaries Submarines! YOU'RE THE VICTOR!");
                            alert("click the 'New Game' button to start a new game");
                            newGameFunctionComplete = false;
                        } else {
                            whoStarts = 2;
                            console.log(whoStarts);
                            document.getElementById('player2Box').style.background = "red",
                            document.getElementById('player2Box').style.opacity = 1,
                            document.getElementById('player1Box').style.opacity = .30,
                            document.getElementById('player1Box').style.background = "none",
                            document.getElementById('player2GridBox').style.opacity = .30,
                            document.getElementById('player1GridBox').style.opacity = 1,
                            document.getElementById('player1GridBox').style.boxShadow = "0px 0px 12px red"
                        }   
                } 
            } else {
                alert("click the 'New Game' button to start a new game")
            }  
        }

    //P2 fires...
        //P2 stat assignments...
            /*P2HitsArray = [];
            P2ShotsArray = [];
            P2Shots = 0;
            P2Hits = 0;
            P2HitPercentage = Math.round((P2Hits/P2Shots) * 100);
            P1Sub1Sunk;
            P1Sub2Sunk;
            P1Sub3Sunk;
            P1shipsSunk = 0;
        //alert P1 'congrats' on sinking a single sub...
            var P2alerted1;
            var P2alerted2;
            var P2alerted3;*/
        //element.target object for P2 gameboard element Id and value...
            var grabP2Grid;
            var P2gridId;
            var P2gridValue;
        //change grid value from string to number...
            var P2gridValueToNumber;
        //missfire --> second chance...
            var P2misfire;
        function p2Fires(event) {
            console.log(whoStarts);
            console.log(P1SubLocations);
            if (newGameFunctionComplete == true) {    
                if (whoStarts == 1) {
                    alert("Player 1, please fire a torpedo at a grid on Player 2's game board")
                } else {
                    grabP2Grid = event.target;
                    P2gridId = grabP2Grid.id;
                    P2gridValue = grabP2Grid.innerHTML;
                    P2gridValueToNumber = +P2gridValue;
                    console.log(P2gridId);
                    console.log(P2gridValueToNumber);
                    console.log(typeof(P2gridValueToNumber));
                    console.log(P1SubLocations);
                    console.log(typeof(P1SubLocations[1]));
                    if (P2ShotsArray.includes(P2gridValueToNumber) || P2gridValue == "HIT!" || P2gridValue == "MISS") {
                        alert("You already fired on that grid location!")
                        P2misfire = true;
                    } else {
                        if (P1SubLocations.includes(P2gridValueToNumber)) {
                            document.getElementById(P2gridId).style.background = "red",
                            document.getElementById(P2gridId).style.fontSize = "14px",
                            document.getElementById(P2gridId).innerHTML = "HIT!",
                            P2HitsArray.push(P2gridValueToNumber);
                            console.log("P2Hits: " + P2HitsArray);
                            P2Hits = P2Hits + 1;
                            P2Shots = P2Shots + 1;
                            P2HitPercentage = Math.round((P2Hits/P2Shots) * 100);
                            P2ShotsArray.push(P2gridValueToNumber);
                        }  else {
                            document.getElementById(P2gridId).style.background = "blue",
                            document.getElementById(P2gridId).style.fontSize = "14px",
                            document.getElementById(P2gridId).innerHTML = "MISS"
                            P2Shots = P2Shots + 1;
                            P2HitPercentage = Math.round((P2Hits/P2Shots) * 100);
                            P2ShotsArray.push(P2gridValueToNumber);
                        }
                        console.log("P2Shots: " + P2ShotsArray);
                    }
                    
                    if (P2HitsArray.includes(ship1P1A) && P2HitsArray.includes(ship1P1B) && P2HitsArray.includes(ship1P1C)) {
                        while (P2alerted1 == false) {
                            P1Sub1Sunk = true;
                            P1shipsSunk = P1shipsSunk + 1;
                            alert("Congratulations! You sank enemy submarine #01!");
                            P2alerted1 = true;
                        }
                    }
                    if (P2HitsArray.includes(ship2P1A) && P2HitsArray.includes(ship2P1B) && P2HitsArray.includes(ship2P1C)) {
                        while (P2alerted2 == false) {
                            P1Sub2Sunk = true;
                            P1shipsSunk = P1shipsSunk + 1;
                            alert("Congratulations! You sank enemy submarine #02!");
                            P2alerted2 = true;
                        }
                    }
                    if (P2HitsArray.includes(ship3P1A) && P2HitsArray.includes(ship3P1B) && P2HitsArray.includes(ship3P1C)) {
                        while (P2alerted3 == false) {
                            P1Sub3Sunk = true;
                            P1shipsSunk = P1shipsSunk + 1;
                            alert("Congratulations! You sank enemy submarine #03!");
                            P2alerted3 = true;
                        }
                    }
                    document.getElementById('shotsSpanP2').innerHTML = P2Shots;
                    document.getElementById('hitsSpanP2').innerHTML = P2Hits;
                    document.getElementById('shipsSunkSpanP2').innerHTML = P1shipsSunk;
                    document.getElementById('hitPercentageSpanP2').innerHTML = P2HitPercentage;  
                        if (P1Sub1Sunk == true && P1Sub2Sunk == true && P1Sub3Sunk == true) {
                            alert("Congradulations! You sank ALL of your adversaries Submarines! YOU'RE THE VICTOR!");
                            alert("click the 'New Game' button to start a new game")
                            newGameFunctionComplete = false;
                        } else {
                            whoStarts = 1;
                            console.log(whoStarts);
                            document.getElementById('player1Box').style.background = "red",
                            document.getElementById('player1Box').style.opacity = 1,
                            document.getElementById('player2Box').style.opacity = .30,
                            document.getElementById('player2Box').style.background = "none",
                            document.getElementById('player1GridBox').style.opacity = .30, 
                            document.getElementById('player2GridBox').style.opacity = 1,
                            document.getElementById('player2GridBox').style.boxShadow = "0px 0px 12px red"
                        }
                }   
                
            } else {
                alert("click the 'New Game' button to start a new game")
            }
        }
             
            
            
        
        

   
    
    
   




/* we want to start the game with a "Start" button. This 
will allow the game to randomly set the game pieces */
/*function newGame() {
    var ship1P1A = (Math.round(Math.random() * 80));
        while (ship1P1A == 0) {
            ship1P1A = (Math.round(Math.random() * 80));
        }
    var ship1P1B = ship1P1A + 1;
    var ship1P1C = ship1P1A + 2;
    var ship2P1A = (Math.round(Math.random() * 64));
        while (ship2P1A == 0 || ship2P1A == ship1P1A || ship2P1A == ship1P1B || ship2P1A == ship1P1C || ship2P1A == (ship1P1A - 1) || ship2P1A == (ship1P1A + 3) || ship2P1A == (ship1P1A - 9) || ship2P1A == (ship1P1A - 18) || ship2P1A == (ship1P1A - 27) || ship2P1A == (ship1P1B - 9) || ship2P1A == (ship1P1B - 18) || ship2P1A == (ship1P1B - 27) || ship2P1A == (ship1P1C - 9) || ship2P1A == (ship1P1C - 18) || ship2P1A == (ship1P1C - 27)) {
            ship2P1A = (Math.round(Math.random() * 64));
        };
        ship2P1B = ship2P1A + 9;
        ship2P1C = ship2P1A + 18;
    var ship3P1A = (Math.round(Math.random() * 80));
        while (ship3P1A == 0 || ship3P1A == ship1P1A || ship3P1A == ship1P1B || ship3P1A == ship1P1C || ship3P1A == (ship1P1A - 1) || ship3P1A == (ship1P1A - 2) || ship3P1A == (ship1P1A - 3) || ship3P1A == (ship1P1A + 3) || ship3P1A == ship2P1A || ship3P1A == ship2P1B || ship3P1A == ship2P1C || ship3P1A == (ship2P1A - 1) || ship3P1A == (ship2P1A - 2) || ship3P1A == (ship2P1A - 3) || ship3P1A == (ship2P1A + 1) || ship3P1A == (ship2P1B - 1) || ship3P1A == (ship2P1B - 2) || ship3P1A == (ship2P1B - 3) || ship3P1A == (ship2P1B + 1) || ship3P1A == (ship2P1C - 1) || ship3P1A == (ship2P1C - 2) || ship3P1A == (ship2P1C - 3) || ship3P1A == (ship2P1C + 1)) {
            ship3P1A = (Math.round(Math.random() * 80));
        }
        ship3P1B = ship3P1A + 1;
        ship3P1C = ship3P1A + 2;
    isDestroyerSunk;
    isBattleshipSunk;
    isSubmarineSunk;
    myHits = 0;
    myGuesses = 0;
    const allGuesses = [];
    shipsSunk = 0;
    griddiv = "";
//check vars...
    console.log(ship1P1A);
    console.log(ship1P1B);
    console.log(ship1P1C);
    console.log(ship2P1A);
    console.log(ship2P1B);
    console.log(ship2P1C);
    console.log(ship3P1A);
    console.log(ship3P1B);
    console.log(ship3P1C);
    console.log("Destroyer is Sunk: " + isDestroyerSunk);
    console.log("Battleship is Sunk: " + isBattleshipSunk);
    console.log("Submarine is Sunk: " + isSubmarineSunk);
    console.log("My hits = " + myHits);
    console.log("# of guesses = " + myGuesses);
    console.log(allGuesses);
/* The code for obtaining user input, comparing it to the 
battleship grid, and making the necessary updates to variables,
will be handled with a 'while' loop: while (isSunk)... */
 /*   while (isDestroyerSunk  || isBattleshipSunk  || isSubmarineSunk ) {
        myGuess = prompt("Hits: " + myHits + ". Guesses: " + myGuesses + ". Ships sunk: " + shipsSunk + "/3. " + "Ready! Aim (enter a number from 1-81)! Fire!");
        console.log("My Guess was: " + myGuess);
        griddiv = "gridDiv" + myGuess;
        //is griddiv a number data type now? Idk. Convert to string? Let's try...
        
        console.log("gridDiv = " + griddiv);
        console.log("griddiv type is " + typeof(griddiv));
        if (myGuess < 1 || myGuess > 81) {
            alert ("please choose a valid number between 1 and 81");
        } else if (allGuesses.includes(myGuess)){
            alert ("you already fired at grid # " + myGuess + ". Choose another grid #.");
        } else if (myGuess == ship1P1A || myGuess == ship1P1B || myGuess == ship1P1C || myGuess == ship2P1A || myGuess == ship2P1B || myGuess == ship2P1C || myGuess == ship3P1A || myGuess == ship3P1B || myGuess == ship3P1C){
            document.getElementById(griddiv).innerHTML = "HIT!";
            document.getElementById(griddiv).style.color = "red";
            document.getElementById(griddiv).style.textShadow = "0px 0px 3px white";
            alert("HIT!");
            console.log("HIT!");
            myHits = myHits + 1;
            myGuesses = myGuesses + 1;
            allGuesses.push(myGuess);
            console.log(allGuesses);
            var guessToNums = allGuesses.map(function(str) {
                return parseInt(str);}
                )
            console.log(guessToNums);
            console.log("Guesses include A1: " + guessToNums.includes(ship1P1A));
            console.log("Guesses include A2: " + guessToNums.includes(ship1P1B));
            console.log("Guesses include A3: " + guessToNums.includes(ship1P1C));
            console.log("Guesses include B1: " + guessToNums.includes(ship2P1A));
            console.log("Guesses include B2: " + guessToNums.includes(ship2P1B));
            console.log("Guesses include B3: " + guessToNums.includes(ship2P1C));
            console.log("Guesses include C1: " + guessToNums.includes(ship3P1A));
            console.log("Guesses include C2: " + guessToNums.includes(ship3P1B));
            console.log("Guesses include C3: " + guessToNums.includes(ship3P1C));
            
            if (isDestroyerSunk  && guessToNums.includes(ship1P1A) && guessToNums.includes(ship1P1B) && guessToNums.includes(ship1P1C)) {
                alert ("You sunk my Destroyer!");
                isDestroyerSunk = true;
                shipsSunk = shipsSunk + 1;
                console.log("Destroyer is Sunk: " + isDestroyerSunk);
            } else if (isBattleshipSunk  && guessToNums.includes(ship2P1A) && guessToNums.includes(ship2P1B) && guessToNums.includes(ship2P1C)) {
                alert ("You sunk my Battleship!");
                isBattleshipSunk = true;
                shipsSunk = shipsSunk + 1;
                console.log("Battleship is Sunk: " + isBattleshipSunk);
            } else if (isSubmarineSunk  && guessToNums.includes(ship3P1A) && guessToNums.includes(ship3P1B) && guessToNums.includes(ship3P1C)) {
                alert ("You sunk my Submarine!")
                isSubmarineSunk = true;
                shipsSunk = shipsSunk + 1;
                console.log("Submarine is Sunk: " + isSubmarineSunk);
            } else {
                console.log("Destroyer is sunk: " + isDestroyerSunk);
                console.log("Battleship is sunk: " + isBattleshipSunk);
                console.log("Submarine is sunk: " + isSubmarineSunk);
                }
        } else {
            var griddiv = "gridDiv" + myGuess;
            console.log("gridDiv = " + griddiv);
            document.getElementById(griddiv).innerHTML = "MISS!";
            document.getElementById(griddiv).style.color = "blue";
            document.getElementById(griddiv).style.textShadow = "0px 0px 3px white";
            alert ("MISS!");
            console.log("MISS!");
            myGuesses = myGuesses + 1;
            allGuesses.push(myGuess);
            console.log(allGuesses);
            console.log("Destroyer is sunk: " + isDestroyerSunk);
            console.log("Battleship is sunk: " + isBattleshipSunk);
            console.log("Submarine is sunk: " + isSubmarineSunk);
          }
        
    }
    alert ("YOU SUNK ALL OF MY SHIPS! GAME OVER, MAN!");
    var stats = "You took " + myGuesses + " guesses to sink all three ships, " +
    "which means your shooting accuracy was " + (9/myGuesses) * 100 + "%";
    alert(stats);
}
*/  
/*const array1 = [21, 3, 44, 8, 90, 32];
console.log(array1);
console.log(array1.includes(3));
console.log(array1.includes(44));
var variable1 = 10;
var variable2 = 3;
var variable3 = 8;
array1.push(variable1);
console.log(array1);
console.log(array1.includes(variable1));
console.log(array1.includes(variable1) || array1.includes(variable2) || array1.includes(variable3));
console.log(array1.includes(variable1) && array1.includes(variable2) && array1.includes(variable3));
array2 = [];
var variable4 = "29";
var variable5 = "4";
var variable6 = "32";
array2.push(variable4, variable5, variable6)
console.log(array2);
var arrayNums = array2.map(function(str) {
    return parseInt(str);}
    )
    console.log(arrayNums);
console.log(arrayNums.includes(variable5));
console.log(array2.includes(variable5));
*/

/*var grid60;
var variable60 = "78";
var grid60 = "gridDiv" + variable60;
console.log(grid60);
document.getElementById(grid60).innerHTML = "HIT!";
document.getElementById(grid60).style.color = "red";
*/
