// document.addEventListener("DOMContentLoaded"),function(event){
//     document.getElementById("restart_btn").disabled=true;
// }
// define the time 

let name= prompt("Cheif..!! Enter your good name please","Lavia");
//setTimeOut(3000);  
let timep= prompt("Enter speed test time in minutes","1");
let TIME_LIMIT = timep*60;


var averageArray = [];
var size = 1;
var aver=0;
var rebu=0;
var a=0;
var gain=0;


// define quotes to be used
let quotes_array = [
  "very not from almost world family could name","to we three world keep list mountain thing letter", 
  "over form enough again girl here has than left","more when leave hard kind well thought while up on",
   "learn went before open both own sea second one","end line back night live eat got after important an three",
   "made study be story thought animal life walk same","with me even river any little family them be had for him eat",
   "above sentence at eye something ask show being page","her follow same it start that follow point away made name into",
   "and his year different three much but might set still","big quickly take tree girl man find later if old off book put",
   "about his stop two it's play different question can","again enough often as around into write way know from take four other",
   "quickly back when earth school between should grow","people high state always above above his if study spell last had took", 
  "are she idea my mountain many they saw stop car form","could home picture said other into letter below what ask day learn work in food list", 
  "try soon kind down sentence along below get is quite", "it's near miss too that number another",
   "must from the change long earth if first until something","night which again place begin quite this",
   "never open ask than every eye need what large also book","story only city oil both line without made find men along stop is side up",
   "say she night give often now would far soon sometimes he","these another say over see name cut my change seem some time after their", 
  "much car it later them house live children quick him make","play those page there life an mean men said big does picture all get follow", 
  "once of all not question earth country picture should to","head good grow mile food left new why not young over family hand of page song",
   "this book look children have would where man every many pape"];

// selecting required elements
let timer_text = document.querySelector(".curr_time");
let accuracy_text = document.querySelector(".curr_accuracy");
let error_text = document.querySelector(".curr_errors");
let cpm_text = document.querySelector(".curr_cpm");
let wpm_text = document.querySelector(".curr_wpm");
let quote_text = document.querySelector(".quote");
let input_area = document.querySelector(".input_area");
let restart_btn = document.querySelector(".restart_btn");
let cpm_group = document.querySelector(".cpm");
let wpm_group = document.querySelector(".wpm");
let error_group = document.querySelector(".errors");
let accuracy_group = document.querySelector(".accuracy");

let timeLeft = TIME_LIMIT;
let timeElapsed = 0;
let total_errors = 0;
let errors = 0;
let accuracy = 0;
let characterTyped = 0;
let current_quote = "";
let abc = 0;
let quoteNo = 0;
let timer = null;


function updateQuote()
{
  quote_text.textContent= null;
  current_quote= quotes_array[Math.floor(Math.random()*quotes_array.length)];
  current_quote.split('').forEach(char => {
        const charSpan = document.createElement('span')
        charSpan.innerText = char
        quote_text.appendChild(charSpan)
      })

  // roll over to the first quote
  if (quoteNo < quotes_array.length - 1)
    quoteNo++;
  else
    quoteNo = 0;
}
// function checkspace(e)
// {
//     if(e.keyCode==32)
//     console.log("mayiru");
//     input_area.value=""
//     document.getElementById('input_area').value = ''
// }



function processCurrentText() {

  // get current input text and split it
  
  curr_input = input_area.value;
  curr_input_array = curr_input.split('');

  // increment total characters typed
  characterTyped++;

  errors = 0;

  quoteSpanArray = quote_text.querySelectorAll('span');
  quoteSpanArray.forEach((char, index) => {
    let typedChar = curr_input_array[index]

    // characters not currently typed
    if (typedChar == null) {
      char.classList.remove('correct_char');
      char.classList.remove('incorrect_char');

      // correct characters
    } else if (typedChar === char.innerText) {
      char.classList.add('correct_char');
      char.classList.remove('incorrect_char');

      // incorrect characters
    } else {
      char.classList.add('incorrect_char');
      char.classList.remove('correct_char');

      // increment number of errors
      errors++;
    }
  });

  // display the number of errors
  error_text.textContent = total_errors + errors;

  // update accuracy text
  let correctCharacters = (characterTyped - (total_errors + errors));
  let accuracyVal = ((correctCharacters / characterTyped) * 100);
  accuracy_text.textContent = Math.round(accuracyVal);

  // if current text is completely typed
  // irrespective of errors
  if (curr_input.length == current_quote.length) {
    
    updateQuote();

    // update total errors
    total_errors += errors;

    // clear the input area
    input_area.value = "";
  }
}

function updateTimer() {
  if (timeLeft > 0) {
    // decrease the current time left
    timeLeft--;

    // increase the time elapsed
    timeElapsed++;

    // update the timer text
    timer_text.textContent = timeLeft + "s";
  }
  else {
    // finish the game
    finishGame();
  }
}

function finishGame() {
  // stop the timer
  clearInterval(timer);

  // disable the input area
  input_area.disabled = true;

  // show finishing text
  quote_text.textContent = "Click on restart to start a new game.";

  // display restart button
  restart_btn.style.display = "block";

  // calculate cpm and wpm
  cpm = Math.round(((characterTyped / timeElapsed) * 60));
  wpm = Math.round((((characterTyped / 5) / timeElapsed) * 60));

  // update cpm and wpm text
  cpm_text.textContent = cpm;
  wpm_text.textContent = wpm;
  
  if((wpm<10)&&(errors<=5))
  document.getElementById("name").innerHTML="Not Good ,"+name
  else if( (wpm>=10) && (wpm<=20) && (errors<5) )
  document.getElementById("name").innerHTML="Good ,"+name
  else if(wpm>=20&&(wpm<30)&&(errors<=5))
  document.getElementById("name").innerHTML="Excellent ,"+name
  else if( wpm>=30 && wpm<50 && errors<=5 )
  document.getElementById("name").innerHTML="Awesome ,"+name
  else if(wpm>=50 && errors<=5)
  document.getElementById("name").innerHTML="Pwolichu Muthe ,"+name
  else 
  document.getElementById("name").innerHTML=""+name+ " Try to avoid error to gain higher Accuracy"


for(var i=0; i<size; i++)
{
  averageArray[i]=wpm;
  aver=aver+wpm;
  // console.log(averageArray[i]);
  // console.log(aver);
  // console.log(rebu);
   console.log(wpm);


}

// for(var j=0;j<size; j++)
// {
//   aver+=averageArray[j][1];
//   console.log(aver);
  
// }
if(gain<0)
{
  gain=wpm+a;
  a=gain;
}
gain=wpm-a;
  a=gain;
var avsp=Math.round(aver/rebu);
document.getElementById("curr_average").innerHTML=""+avsp
document.getElementById("curr_gain").innerHTML=""+gain
console.log(gain);


  // display the cpm and wpm
  cpm_group.style.display = "block";
  wpm_group.style.display = "block";
}


function startGame() {
  rebu=rebu+1;
  
  resetValues();
  updateQuote();
  
  // clear old and start a new timer
  clearInterval(timer);
  timer = setInterval(updateTimer, 1000);
}

function resetValues() {
  
  timeLeft = TIME_LIMIT;
  timeElapsed = 0;
  errors = 0;
  total_errors = 0;
  accuracy = 0;
  characterTyped = 0;
  quoteNo = 0;
  input_area.disabled = false;
  

  input_area.value = "";
  quote_text.textContent = 'Click on the area below to start the game.';
  accuracy_text.textContent = 100;
  timer_text.textContent = timeLeft + 's';
  error_text.textContent = 0;
  restart_btn.style.display = "none";
  cpm_group.style.display = "none";
  wpm_group.style.display = "none";
  document.getElementById("name").innerHTML="";
    
}
