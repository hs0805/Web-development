
// UNDERSTANDING CALLBACKS

/*
function addAnotherEventListener(typeOfEvent, callback) {
    var eventThatHappened = {
        eventType: "keydown",
        key : 'p',
        durationOfKeyPress : '2'
    }

    if (typeOfEvent == eventThatHappened.eventType) {
        callback(eventThatHappened)
    }
}

addAnotherEventListener("keydown", function(eve){
    console.log("event is :",eve);
});
*/