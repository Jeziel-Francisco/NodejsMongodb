import App from './app/app';

App.app.listen(5001, () => {
    console.log('Servidor rodando na Porta 5001');
});

process.once('SIGUSR2', () => App.dataBaseClose('nodemon restart', () => process.kill(process.pid, 'SIGUSR2')));
process.on('SIGINT', () => App.dataBaseClose('Execução Interrompida', () => process.exit(0)));