const questions =[

    {
        question:"The temporary memory of the computer is called?",
        answers:[
            { text:"ROM",correct:false},
            { text:"RAM",correct:true},
            { text:"Temporary",correct:false},
            { text:"SSD",correct:false}
        ]
    },

    {
     question:"A device that controls the movement of the cursor or pointer on a display screen is called a",
        answers:[
            { text:"Remote",correct:false},
            { text:"Ipad",correct:false},
            { text:"Mouse",correct:true},
            { text:"Space button",correct:false}
        ]
    },
    
    {
        question:"The set of typewriter-like keys that enables you to enter data into a computer is called",
           answers:[
               { text:"Keyboard",correct:true},
               { text:"USB port",correct:false},
               { text:"Mouse",correct:false},
               { text:"Gamepad",correct:false}
           ]
       },
       {
        question:"A part of the computer that displays the images from the CPU onto a screen is called",
           answers:[
               { text:"Keyboard",correct:false},
               { text:"Printer",correct:false},
               { text:"Screen",correct:false},
               { text:"Monitor",correct:true}
           ]
       },
       {
        question:"Which of these is software?",
           answers:[
               { text:"MS Office 2007",correct:true},
               { text:"Office Start Button",correct:false},
               { text:"Caps lock",correct:false},
               { text:"None of these",correct:false}
           ]
       },
       {
        question:"What is the on-screen area on which windows, icons, menus, and dialog boxes appear?",
           answers:[
               { text:"Desktop",correct:true},
               { text:"Mouse",correct:false},
               { text:"Settings",correct:false},
               { text:"My Computer",correct:false}
           ]
       },
    
       {
        question:"Which of these is considered an output device?",
           answers:[
               { text:"Keyboard",correct:false},
               { text:"Speaker",correct:true},
               { text:"Microphone",correct:false},
               { text:"My Computer",correct:false}
           ]
       },
       {
       question:"What does USB stand for?",
       answers:[
           { text:"Universal Section Bus",correct:false},
           { text:"Unique Serial Bus",correct:false},
           { text:"Unique Section Bus",correct:false},
           { text:"Universal Serial Bus",correct:true}
       ]
   },
   {
   question:"Which of these is hardware?",
   answers:[
       { text:"Monitor",correct:false},
       { text:"Speaker",correct:false},
       { text:"Google",correct:false},
       { text:"Both 1 and 2",correct:true}
   ]
},
{
    question:"Which of these is an input device?",
    answers:[
        { text:"Tower",correct:false},
        { text:"Unique Serial Bus",correct:false},
        { text:"Mouse",correct:true},
        { text:"Printer",correct:false}
    ]
 }
];

const questionsElement = document.getElementById("question");
const answersElement = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");

let currentQuestionindex=0;
let score=0;

function startQuiz(){
    currentQuestionindex = 0;
    score = 0;
    nextbutton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
let currentQuestion= questions[currentQuestionindex];
let QuestionNo= currentQuestionindex+1;

questionsElement.innerHTML=QuestionNo+". "+ currentQuestion.question;

currentQuestion.answers.forEach(answer=>{
    const button=document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answersElement.appendChild(button);
    if(answer.correct){
        button.dataset.correct=answer.correct;
    }
    button.addEventListener("click", selectAnswer);
});

}
function resetState(){
    nextbutton.style.display="none";
    while(answersElement.firstChild){
        answersElement.removeChild(answersElement.firstChild);
    }
}

function selectAnswer(e){
const selectBtn= e.target;
const isCorrect= selectBtn.dataset.correct=="true";
if(isCorrect){
    selectBtn.classList.add("correct");
    score++;
} else{
    selectBtn.classList.add("incorrect");
}
Array.from(answersElement.children).forEach(button=>{
if (button.dataset.correct=="true"){
button.classList.add("correct");
}
button.disabled=true;
});
nextbutton.style.display="block";
}
nextbutton.addEventListener("click",()=>{
    if (currentQuestionindex < questions.length) {
        handlenextbutton();
    }else{
        startQuiz();
    }
});

function  handlenextbutton(){
    currentQuestionindex++;
    if (currentQuestionindex < questions.length){
        showQuestion();
    }else{
        showscore();
    }
}
function showscore(){
    resetState();
    questionsElement.innerHTML=`Your scored ${score} out of ${questions.length} 🏆! `;
    if(score<=4){
        questionsElement.innerHTML=`Your scored ${score} out of ${questions.length} , So Sad try Again 😥! `;
    }
    nextbutton.innerHTML= "Play Again";
    nextbutton.style.display="block";
}

startQuiz();