console.log('Hello user')
var points = 0
var answer1 = prompt('How many players are on the court in a professional basketball game?')
if (answer1 == '10' || answer1.toLowerCase() == 'ten') {
    alert('Correct.')
    points += 1
} else {
    alert('Incorrect.')
  }

var answer2 = prompt('How many points is a layup worth in basketball?')
if (answer2 == '2' || answer2.toLowerCase() == 'two') {
    alert('Correct.')
    points += 1
} else {
    alert('Incorrect.')
  }

var answer3 = prompt('How many points is a freethrow worth in basketball?')
if (answer3 == '1' || answer3.toLowerCase() == 'one') {
    alert('Correct.')
    points += 1
} else {
    alert('Incorrect.')
  }

var answer4 = prompt('How many points is a touchdown worth in american football?')
if (answer4 == '6' || answer4.toLowerCase() == 'six') {
    alert('Correct.')
    points += 1
} else {
    alert('Incorrect.')
  }

var answer5 = prompt('At which event in golf can a player earn the green jacket?')
if (answer5.toLowerCase() == 'the masters' || answer5.toLowerCase() == 'masters') {
    alert('Correct.')
    points += 1
} else {
    alert('Incorrect.')
  }

var answer6 = prompt('How many points is a field goal worth in american football?')
if (answer6 == '3' || answer6.toLowerCase() == 'three') {
    alert('Correct.')
    points += 1
} else {
    alert('Incorrect.')
  }

var answer7 = prompt('Who has scored the most points in NBA history?')
if (answer7.toLowerCase() == 'lebron' || answer7.toLowerCase() == 'lebron james') {
    alert('Correct.')
    points += 1
} else {
    alert('Incorrect.')
  }

var answer8 = prompt('How many points is a safety worth in american football?')
if (answer8== '2' || answer8.toLowerCase() == 'two') {
    alert('Correct.')
    points += 1
} else {
    alert('Incorrect.')
  }

var answer9 = prompt('How many teams are in the NBA?')
if (answer9 == '30' || answer9.toLowerCase() == 'thirty') {
    alert('Correct.')
    points += 1
} else {
    alert('Incorrect.')
  }

var answer10 = prompt('How many teams are in the NFL?')
if (answer10 == '32' || answer10.toLowerCase() == 'thirty-two' || answer10.toLowerCase() == 'thirty two' || answer10.toLowerCase() == 'thirtytwo') {
    alert('Correct.')
    points += 1
} else {
    alert('Incorrect.')
  }

if (points >= 8) {
    alert('Your score is ' + points + '/10. Excellent job!')
}
else if (points < 8 && points >= 5){
    alert('Your score is ' + points + '/10. Good job!') 
}
else {
    alert('Your score is ' + points + '/10. You can do better. Try again!') 
}