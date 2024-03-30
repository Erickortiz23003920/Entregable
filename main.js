const { app, BrowserWindow, ipcMain} = require("electron");
const path = require("path");
const mysql = require('mysql2')


let ventana;

function createWindow() {
    ventana = new BrowserWindow({
        width: 300,
        height: 300,
        webPreferences: {
            preload: path.join(app.getAppPath(), "preload.js")



    }
       
    });
    ventana.loadFile('index.html')
}
let ventana2;

function createWindow2() {
    ventana2 = new BrowserWindow({
        width: 1000,
        height: 450,
        webPreferences: {
            preload: path.join(app.getAppPath(), "preload.js")
        }
    })
    ventana2.loadFile('lista_de_productos.html')
}

ipcMain.on("registroValido", function(event, args) {
    console.log(args)
    conexion.promise('SELECT * FROM usuarios WHERE id=? AND pass=?',
        args)
       /* .then(([results, fields]) => {
            if (results.length > 0) {
                createWindow2();
                ventana2.webContents.on('did-finish-load', function () {
                    ventana2.webContents.send('inicioCorrecto', 'Bienvenido');
                });
            } else {
                console.log("No se encontró el usuario");
            }*/
    createWindow2();
    ventana2.webContents.on('did-finish-load', function () {
        ventana2.webContents.send('inicioCorrecto', 'Bienvenido');
        })

   
})

app.whenReady().then(createWindow)

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '52585430',
    database: 'entregable'
})

/*conexion.query(
    'SELECT * FROM usuarios',
    function (error, result, fields) {
        console.log(result)
    }
)*/

conexion.promise().query("SELECT * FROM usuarios")
    .then(
        ([result, fields]) => {
            console.log("Realizado con promise")
            console.log(result)
         ipcMain.on("registroValido", function (event, args) {
             console.log(args)
             conexion.promise('SELECT * FROM productos')
                createWindow2()
                ventana2.webContents.on('did-finish-load', function () {
                    //podria colocar la informacion de mis productos y mostrarlas como el div de ejemplo
                    ventana2.webContents.send('inicioCorrecto', 'SELECT * FROM productos')
                   
                })
            })
    }
)