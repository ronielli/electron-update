
const { ipcRenderer } = require('electron');
console.log('Pré-carregamento realizado com sucesso!');
ipcRenderer.send('preloader-message', 'Pré-carregamento concluído');
