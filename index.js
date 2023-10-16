let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let resetEl = document.getElementById("reset")

function addOneHome() {
    homeScore = homeScore + 1
    homeScoreEl.textContent = homeScore
}

function addTwoHome() {
    homeScore = homeScore + 2
    homeScoreEl.textContent = homeScore
}

function addThreeHome() {
    homeScore = homeScore + 3
    homeScoreEl.textContent = homeScore
}

function addOneGuest() {
    guestScore = guestScore + 1
    guestScoreEl.textContent = guestScore 
}

function addTwoGuest() {
    guestScore = guestScore + 2
    guestScoreEl.textContent = guestScore
}

function addThreeGuest() {
    guestScore = guestScore + 3
    guestScoreEl.textContent = guestScore
}

function resetScore() {
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
    homeScore = 0
    guestScore = 0
}