// Questions will be asked
const Questions = [{
    id: 0,
    q: "Who is the God of geo archon?",
    a: [{ text: "Lisa", isCorrect: false },
        { text: "Ayato", isCorrect: false },
        { text: "Zhongli (Rex Lapis)", isCorrect: true },
        { text: "Xiao", isCorrect: false },
        { text: "Nahida", isCorrect: false }
    ]

},
{
    id: 1,
    q: "What is Sumeru apart of?",
    a: [{ text: "Korea", isCorrect: false, isSelected: false },
        { text: "The seven winds", isCorrect: false },
        { text: "The earth", isCorrect: false },
        { text: "The seven regions", isCorrect: true },
        { text: "United states", isCorrect: false }
    ]

},
{
    id: 2,
    q: "Who is the God of electro archon?",
    a: [{ text: "Baal", isCorrect: false },
        { text: "Superman", isCorrect: false },
        { text: "Raiden Ei (Beelzebul)", isCorrect: true },
        { text: "Amber", isCorrect: false },
        { text: "Paimon", isCorrect: false }
    ]

},
{   id: 3,
    q: "Where did the traveler first travel to?",
    a: [{ text: "The water", isCorrect: false },
        { text: "To their room", isCorrect: false },
        { text: "Mondstadt", isCorrect: true },
        { text: "New York", isCorrect: false },
        { text: "Sumeru", isCorrect: false }
    ]
},
{   id: 4,
    q: "Who is paimon?",
    a: [{ text: "The god of war", isCorrect: false },
        { text: "Emergency food", isCorrect: false },
        { text: "A fairy", isCorrect: false },
        { text: "The president", isCorrect: false },
        { text: "Traveler guide", isCorrect: true}
    ]
}
]
// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');
const op5 = document.getElementById('op5');

// Providing option text 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;
op5.innerText = Questions[id].a[4].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;
op5.value = Questions[id].a[4].isCorrect;
var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    op5.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    op5.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    op5.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    op5.style.backgroundColor = "lightskyblue";
    selected = op4.value;
})
// Show selection for op5
op5.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    op5.style.backgroundColor = "lightgoldenrodyellow";
    selected = op5.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 4) {
    id++;
    iterate(id);
    console.log(id);
}

})