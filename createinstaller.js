var electronInstaller = require('electron-winstaller')

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: './builds/ds2-win32-x64',
    outputDirectory: './player-winstaller',
    exe: './DS Player II.exe',
    title: 'DS Player II',
    name: 'ds2',
    description: 'Digital Signage Player 2 Atmo Digital',
    authors: 'Atmo Digital'
})

resultPromise.then(
    () => console.log("O instalador da sua aplicação foi criado com sucesso!"),
    (e) => console.log(`Houve um problema: ${e.message}`)
)
