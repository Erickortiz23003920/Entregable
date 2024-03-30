const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('myAPI', {
    queryDatabase: (sql) => {
        return new Promise((resolve, reject) => {
            ipcRenderer.once('query-result', (event, results) => {
                resolve(results);
            });
            ipcRenderer.send('execute-query', sql);
        });
    }
});


const myAPI = window.myAPI;

async function loadProducts() {
    try {
        const sql = 'SELECT codigo, nombre, proveedor, descripcion, categoria, existencia FROM productos';
        const results = await myAPI.queryDatabase(sql);

        // Procesa los resultados y genera las filas de la tabla
        // (similar al ejemplo anterior)
    } catch (error) {
        console.error('Error al cargar productos:', error);
    }
}

loadProducts();
