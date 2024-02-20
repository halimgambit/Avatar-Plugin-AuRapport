exports.action = function(data, callback){

	let client = setClient(data);
	info("AuRapport from:", data.client, "To:", client);
	nbrPlugin (data, client);
	callback();

}

function nbrPlugin(data, client) {
	try {
	  const fs = require('fs');
	  const dir = './resources/core/plugins';
	  fs.readdir(dir, (err, files) => {
		if (err) {
		  throw err ("Erreur:");
		}
		Avatar.speak(`Il y a ${files.length} plug-in chargés dans ma base.`, data.client, () => {
		  Avatar.Speech.end(data.client);
		});
	  });
	} catch (error) {
	  Avatar.speak(`Erreur lors de la lecture du répertoire, ${error}`, data.client, () => {
		Avatar.Speech.end(data.client);
	  });
	}
  }

function setClient (data) {
	var client = data.client;
    if (data.action.room)
	client = (data.action.room != 'current') ? data.action.room : (Avatar.currentRoom) ? Avatar.currentRoom : Config.default.client;
	if (data.action.setRoom)
	client = data.action.setRoom;
	return client;
}
