exports.action = function(data, callback){
	let client = setClient(data);

	info("AuRapport from:", data.client, "To:", client);
	aurapport (data, client);
	callback();
}

function aurapport (data, client) {

	const fs = require('fs');
	const dir = './resources/core/plugins';
	fs.readdir(dir, (err, files) => {
	console.log(files.length);
	Avatar.speak("il y a:" + files.length + ":plug in chargé dans ma base", data.client, function(){
	Avatar.Speech.end(data.client);
	});
	});
}

function setClient (data) {
	var client = data.client;
    if (data.action.room)
	client = (data.action.room != 'current') ? data.action.room : (Avatar.currentRoom) ? Avatar.currentRoom : Config.default.client;
	if (data.action.setRoom)
	client = data.action.setRoom;
	return client;
}