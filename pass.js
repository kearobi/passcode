var userId="miranromick"
var userP="sdlearn123"

userId != userP
userP != userId

!userId.includes("!")
!userId.includes("#")
!userId.includes("$")

userP.includes("!")
userP.includes("#")
userP.includes("$")

userId.length >= 6

userP.length >=6

userP != ("password")

userId.length >= 6 && !userId.includes("!") && !userId.includes("#") && !userId.includes("$") && userId != userP

userP.length >= 6 && userP != ("password") && userP != userId && /[0-9]/.test(userP) && (userP.includes("!") || userP.includes("#") || userP.includes("$"))

function isUserIdValid(str, p){
return str.length >= 6 && (!str.includes("!") && !str.includes("#") && !str.includes("$") && str != p)}

function isUserPValid(string, id){
return string.length >= 6 && string != ("password") && string != id && (string.includes("!") || string.includes("#") || string.includes("$"))}

function checkCred(){
return isUserIdValid(id) && isUserPValid(p, id)
}

function signIn() {
  var userId = prompt("User ID:")
  var userP = prompt("Passcode:")
  alert("Got Cred? " + checkCred(userId, userP))
}
