window.onload = function() {
    var name = prompt("What is your Name?");
    var greetingMessage = document.getElementById("greetingMessage");
    greetingMessage.innerHTML += `, ${name}`}
    
    let formHTML = document.getElementById("form")
    formHTML.addEventListener("submit", function(){
        event.preventDefault()
        let randomDecimalBetween0and200 = Math.random() * 200
        let randomWholeBetween0and200 = Math.floor(randomDecimalBetween0and200)
        console.log(randomWholeBetween0and200)
    
        let subjectInputHTML = document.getElementById("subject")
        let subjectinput = subjectInputHTML.value
        subjectinput += " #" + randomWholeBetween0and200
    
        let emailInputHTML = document.getElementById("email")
        let emailinput = emailInputHTML.value
    
        let bodyInputHTML = document.getElementById("body")
        let bodyinput = bodyInputHTML.value
    
        window.location.href = `mailto:hustle.queen98@gmail.com?subject=${subjectinput}&cc=${emailinput}&body=${bodyinput}`
        window.location.href = "./Lpage.html"
        setTimeout(function(){window.location.href = "./Lpage.html"} , 5000)
    
        
    })



