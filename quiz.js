console.log('Hello user')
// creates the variable points and sets it to the default value of 0
var points = 0
// creates the variable answer(question number) and prompts the user with the question. It stores the answer the user gave.
var answer1 = prompt('How many players are on the court in a professional basketball game?')
//if the answer is right, the user is alerted "correct" and a point is added to their score.
if (answer1 == '10' || answer1.toLowerCase() == 'ten') {
    alert('Correct.')
    points += 1
} 
//if the answer is blank, the user is alerted that they skipped a question and/or left it blank.
else if (answer1 == ''){
  alert('Question was skipped. Answer was empty.')
} 
//if the answer is not right or blank, it has to be wrong and the user is alerted that they were incorrect.
else {
    alert('Incorrect.')
  }

var answer2 = prompt('How many points is a layup worth in basketball?')
if (answer2 == '2' || answer2.toLowerCase() == 'two') {
    alert('Correct.')
    points += 1
}
else if (answer1 == ''){
  alert('Question was skipped. Answer was empty.')
} else {
    alert('Incorrect.')
  }

var answer3 = prompt('How many points is a freethrow worth in basketball?')
if (answer3 == '1' || answer3.toLowerCase() == 'one') {
    alert('Correct.')
    points += 1
} 
else if (answer1 == ''){
  alert('Question was skipped. Answer was empty.')
}else {
    alert('Incorrect.')
  }

var answer4 = prompt('How many points is a touchdown worth in american football?')
if (answer4 == '6' || answer4.toLowerCase() == 'six') {
    alert('Correct.')
    points += 1
} 
else if (answer1 == ''){
  alert('Question was skipped. Answer was empty.')
}else {
    alert('Incorrect.')
  }

var answer5 = prompt('At which event in golf can a player earn the green jacket?')
if (answer5.toLowerCase() == 'the masters' || answer5.toLowerCase() == 'masters') {
    alert('Correct.')
    points += 1
} 
else if (answer1 == ''){
  alert('Question was skipped. Answer was empty.')
}else {
    alert('Incorrect.')
  }

var answer6 = prompt('How many points is a field goal worth in american football?')
if (answer6 == '3' || answer6.toLowerCase() == 'three') {
    alert('Correct.')
    points += 1
} 
else if (answer1 == ''){
  alert('Question was skipped. Answer was empty.')
}else {
    alert('Incorrect.')
  }

var answer7 = prompt('Who has scored the most points in NBA history?')
if (answer7.toLowerCase() == 'lebron' || answer7.toLowerCase() == 'lebron james') {
    alert('Correct.')
    points += 1
} 
else if (answer1 == ''){
  alert('Question was skipped. Answer was empty.')
}else {
    alert('Incorrect.')
  }

var answer8 = prompt('How many points is a safety worth in american football?')
if (answer8== '2' || answer8.toLowerCase() == 'two') {
    alert('Correct.')
    points += 1
} 
else if (answer1 == ''){
  alert('Question was skipped. Answer was empty.')
}else {
    alert('Incorrect.')
  }

var answer9 = prompt('How many teams are in the NBA?')
if (answer9 == '30' || answer9.toLowerCase() == 'thirty') {
    alert('Correct.')
    points += 1
} 
else if (answer1 == ''){
  alert('Question was skipped. Answer was empty.')
}else {
    alert('Incorrect.')
  }

var answer10 = prompt('How many teams are in the NFL?')
if (answer10 == '32' || answer10.toLowerCase() == 'thirty-two' || answer10.toLowerCase() == 'thirty two' || answer10.toLowerCase() == 'thirtytwo') {
    alert('Correct.')
    points += 1
} 
else if (answer1 == ''){
  alert('Question was skipped. Answer was empty.')
}else {
    alert('Incorrect.')
  }
//at the end, the user is alerted with their score.
//if the score was greater than or equal to 8, their score is alerted with the comment 'excellent job'
if (points >= 8) {
    alert('Your score is ' + points + '/10. Excellent job!')
}
//if the score was less than 8 but greater than or equal to 5, their score is alerted with the comment 'good job'
else if (points < 8 && points >= 5){
    alert('Your score is ' + points + '/10. Good job!') 
}
//if the score less than 5, their score is alerted with the comment 'ou can do better. Try again!'
else {
    alert('Your score is ' + points + '/10. You can do better. Try again!') 
}