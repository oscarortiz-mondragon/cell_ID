var myQuestions = [
	{
		question: "A cell with mostly red granules is what type of cell?",
		answers: {
			a: 'Segmented Neutrophils',
			b: 'Lymphocytes',
			c: 'Eosinophils'
		},
		correctAnswer: 'c'
	},
	{
		question: "A cell with lobes with few large granules is most likely what?",
		answers: {
			a: 'Basophils',
			b: 'Lymphocytes',
			c: 'Segmented Neutrophils'
		},
		correctAnswer: 'c'
	},{
    question: "What are the second most abundant cell in our body?",
    answers:{
      a: "Segmeted Neutrophils",
      b: "Eosinophils",
      c: "Lymphcytes"
    },
    correctAnswer: "c"
  }
  ,{
    question: "What cells have large blue granules?",
    answers:{
      a: "Basophils",
      b: "Segmented Neutrophils",
      c: "Lymphcytes"
    },
    correctAnswer: "a"
  },{
    question: "What cells have large odd shape nueclues, and can have vacuoles?",
    answers:{
      a: "Basophils",
      b: "Segmented Neutrophils",
      c: "Lymphcytes"
    },
    correctAnswer: "a"
  }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  function showQuestions(questions, quizContainer){
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;

    // for each question...
    for(var i=0; i<questions.length; i++){
      
      // first reset the list of answers
      answers = [];

      // for each available answer...
      for(letter in questions[i].answers){

        // ...add an html radio button
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' +[i+1]+ ". " +  questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer){
    
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    // keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;
    
    // for each question...
    for(var i=0; i<questions.length; i++){

      // find selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
      // if answer is correct
      if(userAnswer===questions[i].correctAnswer){
        // add to the number of correct answers
        numCorrect++;
        
        // color the answers green
        answerContainers[i].style.color = 'green';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[i].style.color = 'red';
      }
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }

  // show questions right away
  showQuestions(questions, quizContainer);
  
  // on submit, show results
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }

}

