let homeCount = 0
let homeScoreEl = document.getElementById('home-score')

let guestCount = 0
let guestScoreEl = document.getElementById('guest-score')

function homeIncrement1() {
  homeCount += 1
  homeScoreEl.textContent = homeCount
}

function homeIncrement2() {
  homeCount += 2
  homeScoreEl.textContent = homeCount
}

function homeIncrement3() {
  homeCount += 3
  homeScoreEl.textContent = homeCount
}

function guestIncrement1() {
  guestCount += 1
  guestScoreEl.textContent = guestCount
}

function guestIncrement2() {
  guestCount += 2
  guestScoreEl.textContent = guestCount
}

function guestIncrement3() {
  guestCount += 3
  guestScoreEl.textContent = guestCount
}
