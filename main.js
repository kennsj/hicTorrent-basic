var {
    app,
    BrowserWindow,
    Tray,
    Menu
} = require('electron');

var path = require('path');
var url = require('url');


// Global reference of the window object
var win;

function createWindow() {

    // Create the browser window.

    win = new BrowserWindow({
        width: 1000,
        height: 1024,
        titleBarStyle: 'hidden',
        frame: false
    })


    // Makes window un-scalable
    //win.setResizable(false);

    win.once('ready-to-show', function () {
        win.show()
    })


    // and load the index.html of the app.

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'www/index.html'),
        protocol: 'file:',
        slashes: true
    }));



    // Open the DevTools.
    // win.webContents.openDevTools()

    // Emitted when the window is closed.
    win.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    });
}



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    //if (process.platform !== 'darwin') {
    if (appIcon) appIcon.destroy();
    app.quit();
    // };
});

app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

var movies = document.querySelector('.movies-wrapper');
var videoPlayer = document.querySelector('.video-wrapper');


// Pre-added magnet linked with images. Click on them to start movie