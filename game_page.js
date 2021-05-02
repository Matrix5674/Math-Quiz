player1_name = localStorage.getItem("player1_name"); player2_name = localStorage.getItem("player2_name");
player1_score = 0; player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " : "; document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score ; document.getElementById("player2_score").innerHTML = player2_score ;
document.getElementById("player_question").innerHTML
function send(){
number_1 = document.getElementById("number1").value 
number_2 = document.getElementById("number2").value
actual_answer = parseInt(number_1) * parseInt(number_2)
}

question = "<h4>" + number_1 + "x" + number_2 + "</h4>";
input = "<br> Answer : <input type = 'text' id = 'answer'</input>";
check = "<br><br><button class='btn btn-info' onclick = 'send()'>Send</button>";
row = question + input + check;

document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";








