//************selectors

const question = document.getElementById('question');
const answer_input = document.getElementById('answer-input');
const response = document.getElementById('response');
const button = document.getElementById('btn');
const next_button = document.getElementById('btn-next');
const responseLabel = document.getElementById('responseLabel');
const br = document.createElement('br');
//****************data object */
let data = [
    {
        number:0,
        question:"What is the original name of Santa Clause",
        answer:"Saint Nicholas",
        trueResponse:"You Just Google It Right Now Aren't Ya",
        falseResponse:"Wrong Spelling Or Whatever . Do Study Man",
    },
    {
        number:1,
        question:"Which religion start celebrating the christmas ",
        answer:"Christianity",
        trueResponse:"You are Not a total idiot after all",
        falseResponse:"You are celebrating the christmas without knowing origin of it? C'mon do some studying",
    },
    {
        number:2,
        question:"What is most iconice thing about santa clause",
        answer:"beard",
        trueResponse:"Yeah mate , you are right",
        falseResponse:"What's wrong with you .When it comes to Santa it's has to be the BEARD init?",
    },
    {
        number:3,
        question:"Did You believe in Santa Clause",
        answer:"Yes",
        trueResponse:"Even though you live in Myanmar , Even Though You didn't received any gifts from him?",
        falseResponse:"At least You have 4 brain cells:D",
    },
    {
        number:4,
        question:"What's the kind of animal does santa use to pull his sleigh.",
        answer:"reindeer",
        trueResponse:"The names are : Dasher, Dancer, Prancer, Vixen, Comet, Cupid, Donner, Blitzen and, of course Rudolph.",
        falseResponse:"Google it ffs",
    },
    {
        number:5,
        question:"Do you know jesus was a jew?",
        answer:"yes",
        trueResponse:"You are just bluffing aren't you",
        falseResponse:"Now you do.",
    },
    {
        number:6,
        question:"Did you received any gift from Santa?",
        answer:"Yes",
        trueResponse:"Are You nuts? There is No Santa.",
        falseResponse:"Of course Not . There is No Santa Clause After all",
    },{
        number:7,
        question:"Do you have a partner to spend the Christmas and New Year Together ?",
        answer:"Yes",
        trueResponse:"I know you are lying bro!",
        falseResponse:"Now become ကြေကွဲလူငယ်, become one of us",
    },{
        number:8,
        question:"What do you want for the christmas ?",
        answer:"Anything",
        trueResponse:"dude! think Some specific thing ffs",
        falseResponse:"Frankly , i could't care less mate. I am only adding this question because i don't have anything else to ask",
    },
]

let number = 0;
let Isanswer = false;


function render(){
    Isanswer = false;
    if(number > data.length+1 ){
        answer_input.classList.add('d-none');
        button.classList.add('d-none');
        next_button.classList.add('d-none');
        responseLabel.classList.add('d-none');
        question.textContent = "That's All the question i have for now. \r\n  you know i have to THINK THE NEURONS OUT OF MY BRAIN :D "
    }
    data.map(quiz=>{
        if(quiz.number == number){
            question.textContent = quiz.question;
            answer_input.textContent = quiz.answer;
            response.textContent = quiz.falseResponse;
        }
    })
}

render();

button.addEventListener('click' , function(e){
    //console.log(answer_input.value == data[number].answer,answer_input.value ,"==", data[number].answer)
    if(answer_input.value.toLocaleLowerCase() == data[number].answer.toLocaleLowerCase() ){
        response.textContent = data[number].trueResponse;
        ToggleResponse(false)
        Isanswer = true ;
    }else{
        response.textContent = data[number].falseResponse;
        ToggleResponse(false)
        Isanswer = true ;
    }
    answer_input.value = '';
})

next_button.addEventListener('click',function(){
    if(Isanswer){
        number++;
        ToggleResponse(true);
        render();
    }
    
})

function ToggleResponse(condition){
    if(condition){
        response.classList.add('d-none');
    }else{
        response.classList.remove('d-none');
    }
}
