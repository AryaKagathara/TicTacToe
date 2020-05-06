var winner = 0;
    var player = ["1","2"];
    var square = ["0","1","2","3","4","5","6","7","8","9"];
    var mark = document.getElementById("player-mark").innerHTML;
    var cmark = document.getElementById("computer-mark").innerHTML;
    var list = ["O","S","T","A","R","T","G","A","M","E"];
    $(document).ready(function(){ 
        $(".container-fluid").hide().css("display","none");
            $("#mainlogo").click(function() {
                $("#main").fadeOut(3000).css("display","none");
                $(".container-fluid").fadeIn(3000).css("display","block");
                document.getElementById("board").style.visibility = "hidden";
            });
    });

    function gameon(choice) {

        if(winner == 1) {
            for( let i=1; i<=9; i++) {
                document.getElementById(""+i+"").innerHTML = list[i];
                square[i] = ""+i;
            }
            return 1;
        }

        var mychoice = document.getElementById(""+choice+"").innerHTML;
        var result = document.getElementById("result");
        if(mychoice == "") {
            document.getElementById(""+choice+"").innerHTML = mark;
            square[choice] = mark;
            var a = check(square,choice);
            document.getElementById("result").innerHTML = "Ai Choice";
            if(a == 1) {
                var result = document.getElementById("result"); 
                result.innerHTML = "Player is Winner";
                result.style.color = "green";
                winner = 1;
                return 1;
            }
        } else {
            document.getElementById("result").innerHTML = "Wrong Choice";
            return 1;
        } 
        
        var flag = 0;
        while(flag != 1){
            var computerchoice = Math.ceil(Math.random() * 9);
            var compchoice = document.getElementById(""+computerchoice+"").innerHTML;
            if(compchoice == "") {
                flag = 1;
            }
        }
        document.getElementById(""+computerchoice+"").innerHTML = cmark;
        square[computerchoice] = cmark;
        var b = check(square,computerchoice);
        result.innerHTML = "Your Choice";
        if(b == 1) {
            var result = document.getElementById("result"); 
            result.innerHTML = "AI is Winner";
            result.style.color = "red";
            winner = 1;
            return 1;
        }

        if(winner == 0) {
            result.innerHTML = "GG";
        }

    } 

    function check(square,choice,player) {
        
        if (square[1] == square[2] && square[2] == square[3])
            return 1;
        else if (square[4] == square[5] && square[5] == square[6])
            return 1;
        else if (square[7] == square[8] && square[8] == square[9])
            return 1;
        else if (square[1] == square[4] && square[4] == square[7])
            return 1;
        else if (square[2] == square[5] && square[5] == square[8])
            return 1;
        else if (square[3] == square[6] && square[6] == square[9])
            return 1;
        else if (square[1] == square[5] && square[5] == square[9])
            return 1;
        else if (square[3] == square[5] && square[5] == square[7])
            return 1;
        else if (square[1] != '1' && square[2] != '2' && square[3] != '3' &&
            square[4] != '4' && square[5] != '5' && square[6] != '6' && square[7] 
            != '7' && square[8] != '8' && square[9] != '9')
            return 0;
        else
            return  - 1;
    
    }

    function start() {

        winner = 0;
        var result =document.getElementById("result"); 
        result.innerHTML = "All The Best";
        result.style.color = "black";
        
        document.getElementById("board").style.visibility = "visible";
        
        for( let i=1; i<=9; i++) {
            document.getElementById(""+i+"").innerHTML = "";
            square[i] = ""+i;
        }
        
        var playerrandom = Math.floor(Math.random() * 2);
        var currentplayer = player[playerrandom]; 
        
        if(currentplayer == 2) {
            var computerchoice = Math.ceil(Math.random() * 9);
            document.getElementById(""+computerchoice+"").innerHTML = cmark;
            square[computerchoice] = cmark;
            document.getElementById("result").innerHTML = "Your Choice";
        }

    }

    function change() {
        
        if(document.getElementById("circle").checked == true) {
            mark = document.getElementById("circle").value;
            document.getElementById("player-mark").innerHTML = mark;
            cmark = document.getElementById("cross").value;
            document.getElementById("computer-mark").innerHTML = cmark;
        }
        
        if(document.getElementById("cross").checked == true) {
            mark = document.getElementById("cross").value;
            document.getElementById("player-mark").innerHTML = mark;
            cmark = document.getElementById("circle").value;
            document.getElementById("computer-mark").innerHTML = cmark;
        }

    }