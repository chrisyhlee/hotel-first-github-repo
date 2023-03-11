
var bomb = Math.floor(Math.random() * 9) + 1
var treasure = Math.floor(Math.random() * 9) + 1
var tries = 7
const addEmoji = (num) => {
  if (tries === 0) {
    alert('You ran out of tries!')
  } else if (num === bomb && tries !== 0) {
    document.getElementById(num).innerHTML = "💣"
    alert('You Lose')
    tries = 0
  } else if (num === treasure && tries !== 0) {
    document.getElementById(num).innerHTML = "🎁"
    alert('You win!!')
    tries = 0
  } else {
    document.getElementById(num).innerHTML = "🪙"
    tries = tries - 1
  }
}