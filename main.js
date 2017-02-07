var electron = require("electron");
var { app, BrowserWindow } = electron;

var mainWindow = null;

app.on("ready", function() {
	mainWindow = new BrowserWindow({
		"width": 480,
		"height": 370,
	});

	mainWindow.loadURL("file://" + __dirname + "/index.html");

	mainWindow.on("closed", function() {
		mainWindow = null;
	});
});
