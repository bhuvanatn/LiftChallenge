var startBuilding = {
    "username": "Rocket",
    "email": "bhuvanatn@gmail.com",
    "plan": "training_1",
};
var oneFloorUp = {
    "commands": {
        "0": {
            "speed": 1,
            "direction": 1
        }
    }
};
var oneFloorDown = {
    "commands": {
        "0": {
            "speed": 1,
            "direction": -1
        }
    }
};
var ws = new WebSocket("ws://codelift.org/v2/building");
ws.onopen = function() {
    console.log("Message sending...");
};
var i = 0;
ws.onmessage = function(evt) {
    var received_msg = evt.data;
    i = i + 1;
    console.log(evt);
    console.log("Only JSON" + i + "   " + received_msg);
    console.log("Message is received..");
};
ws.onclose = function() {
    console.log("Connection is closed");
};
var sendCommand = function(command) {
    ws.send(JSON.stringify(command));
    console.log("cc");
};
setTimeout(function() {
    sendCommand(startBuilding);
}, 1000);
setTimeout(function() {
    sendCommand(oneFloorUp);
}, 1000);
setTimeout(function() {
    sendCommand(oneFloorUp);
}, 1000);
setTimeout(function() {
    sendCommand(oneFloorUp);
}, 1000);
// with the request array I understand that someone want to go down the elevator.
//So, I have set speet to 0 and direction to -1
setTimeout(function() {
    sendCommand({
        "commands": {
            "0": {
                "speed": 0,
                "direction": -1
            }
        }
    });
}, 1000);

setTimeout(function() {
    sendCommand(oneFloorUp);
}, 1000);
setTimeout(function() {
    sendCommand(oneFloorUp);
}, 1000);
