// Collapsible

var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("scale");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            $("#chat-button").toggle('scale');
       
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            $("#chat-button").toggle('scale');
        }

    });

      
}


function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "歡迎來到XEBIT，需要什麼服務嗎？ <br> "
    document.getElementById("botStarterMessage").innerHTML = '<div class="answer">  <img class="robot" src="/image/chatrobot.svg" alt=""> <p class="botText"><span>' + firstMessage + '</span></p> </div>';

    let time = getTime();
    // 時間
    document.getElementById("current_time").innerHTML = time;
    $("#chat-timestamp").append(time);
    
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let time = getTime();
    // 按鈕時間
    document.getElementById("current_time").innerHTML = time;
    let botHtml = '<div class="answer">  <img class="robot" src="/image/chatrobot.svg" alt=""> <p class="botText"><span>' + botResponse + '</span></p>' + '</span></p> </div>' + '<span class="time_text_answer" id="current_time" >'+time+'</span>' ;
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "I love Code Palace!";
    }
 let time = getTime();
    // 時間
    document.getElementById("current_time").innerHTML = time;
    // $(".userText").append(time);
    let userHtml = '<p class="userText"><span>' + userText + '</span></p>' + '<span class="time_text" id="current_time" >'+time+'</span>';
  
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
     let time = getTime();
    // 按鈕時間
    document.getElementById("current_time").innerHTML = time;
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>' + '<span class="time_text" id="current_time" >'+time+'</span>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked!")
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});


// Current Time
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  

