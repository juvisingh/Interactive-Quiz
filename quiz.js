console.log('Hello user')
var points
var answer1 = prompt('How many players are on the court in a professional basketball game?')
if (answer1 != '10' || answer1.toLowerCase() != 'ten') {
    alert('Incorrect.')
} else {
    alert('Correct.')
    points += 1
  }
