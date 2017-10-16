
(function () {
    var start = document.getElementById('start');
    var initial = document.getElementsByClassName('initial');
    var man = document.getElementById('canv').getContext('2d');
    var words = ['poetry', 'paper', 'scissors', 'brainstorming', 'history', 'science', 'philosophy', 'javascript'];
    var word;
    var underscores = "";
    var letters = document.getElementsByClassName('letter');
    var lines = document.getElementById('lines');
    var score = 1;
    var guessButton = document.getElementById('guess');
    var win = document.getElementById('gameWin');
    var lost = document.getElementById('gameLost');
    var reset = document.getElementById('reset');
    var reset2 = document.getElementById('reset2');



    start.addEventListener('click', function(){
        spiced.get("http://www.setgetgo.com/randomword/get.php?len="+(6+Math.floor(Math.random()*6)), function(data){
            if (data) {
                word = data;
            } else {
                word = words[Math.floor(Math.random() * words.length)];
            }
            for (var i = 0; i < word.length; i++) {
                underscores = underscores + "_ ";
            }
            lines.innerHTML = underscores;
            console.log(data);
            console.log(word);
            initial[0].style.display = 'none';
        });
    });

    for ( var i = 0; i <letters.length; i++ ){
        letters[i].addEventListener('click', addLetter);
    }

    guessButton.addEventListener('click', guess);

    reset.addEventListener('click', function reload(){
        location.reload();
    });

    reset2.addEventListener('click', function reload(){
        location.reload();
    });


    function checkPositions(letter){
        var letterFound = false;
        for (var i = 0; i < word.length; i++){
            if (word[i].toLowerCase() == letter.toLowerCase()){
                var array = underscores.split(" ");
                array[i] = letter;
                underscores = array.join(" ");
                console.log(underscores);
                console.log(array);
                letterFound = true;
                if (array.join('').indexOf('_') === -1){
                    setTimeout( win.style.display = 'block'
                        // location.reload();
                    ,500);
                }
            }
        }


        if (!letterFound) {
            wrong();
        }

    }


    function addLetter(e){
        checkPositions(e.currentTarget.id);
        lines.innerHTML = underscores;
        e.currentTarget.classList.add('BgColor');
        e.currentTarget.removeEventListener('click', addLetter);
    }

    console.log(word);




    // man.strokeStyle = '#000000';
    // man.beginPath();
    // man.moveTo(90, 600);
    // man.lineTo(140, 600);
    // man.lineTo(140, 150);
    // man.lineTo(90, 150);
    // man.lineTo(90, 600);
    // man.fillStyle = '#966F33';
    // man.fill();
    // man.moveTo(90, 150);
    // man.lineTo(450, 150);
    // man.lineTo(450, 110);
    // man.lineTo(90, 110);
    // man.lineTo(90, 150);
    // man.fillStyle = '#AAAAAA';
    // man.fill();
    // man.moveTo(105, 120);
    // man.arc(100, 120, 5, 0, 2*Math.PI);
    // man.fillStyle = '#966F33';
    // man.fill();
    // man.moveTo(140, 220);
    // man.lineTo(210, 150);
    // man.lineTo(190, 150);
    // man.lineTo(140, 200);
    // man.lineTo(140, 220);
    // man.fillStyle = '#966F33';
    // man.fill();
    // man.stroke();
    // man.beginPath();
    // man.fillStyle = '#EEE8AA';
    // man.fill();
    // man.moveTo(350, 110);
    // man.lineTo(350, 150);
    // man.moveTo(345, 110);
    // man.lineTo(345, 150);
    // man.moveTo(340, 150);
    // man.lineTo(340, 160);
    // man.lineTo(355, 160);
    // man.lineTo(355, 150);
    // man.moveTo(350, 160);
    // man.lineTo(350, 210);
    // man.moveTo(345, 160);
    // man.lineTo(345, 210);
    // man.lineTo(350, 210);
    // man.stroke();

    man.beginPath();
    man.fillStyle = '#EEE8AA';
    man.fill();
    man.moveTo(350, 110);
    man.lineTo(350, 150);
    man.moveTo(345, 110);
    man.lineTo(345, 150);
    man.moveTo(340, 150);
    man.lineTo(340, 160);
    man.lineTo(355, 160);
    man.lineTo(355, 150);
    man.moveTo(350, 160);
    man.lineTo(350, 210);
    man.moveTo(345, 160);
    man.lineTo(345, 210);
    man.lineTo(350, 210);
    man.moveTo(340, 150);
    man.lineTo(355, 150);
    man.stroke();



    function guess(){
        var userGuess = prompt('Guess the word');
        if (userGuess === null){
            return;
        }else if (userGuess.toLowerCase() === word){
            alert('You won!');
            location.reload();
        }else {
            wrong();
        }
    }

    function wrong(){
        draw(score);
        score ++;
        if (score == 7){
            setTimeout( lost.style.display = 'block'
                // location.reload();
            ,500);
        }
    }


    function draw(score){
        console.log(score);
        switch(score){

        case 1:
            man.moveTo(450, 210);
            man.arc(400, 210, 50, 0, 2*Math.PI);
            man.stroke();
            break;

        case 2:
            man.moveTo(350, 210);
            man.lineTo(300, 350);
            man.stroke();
            break;

        case 3:
            man.lineTo(300, 480);
            man.stroke();
            break;

        case 4:
            man.moveTo(300, 350);
            man.lineTo(320, 472);
            man.stroke();
            break;

        case 5:
            man.moveTo(335, 250);
            man.lineTo(340, 345);
            man.stroke();
            break;

        case 6:
            man.moveTo(335, 250);
            man.lineTo(355, 340);
            man.stroke();
            break;
        }
    }

})();
