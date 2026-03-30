const fs = require('fs');

const appPath = 'src/App.jsx';
const dataPath = 'exact_data.json';

let appCode = fs.readFileSync(appPath, 'utf8');
const exactData = fs.readFileSync(dataPath, 'utf8');

appCode = appCode.replace(/const empresasData = \[[^]*?\];/, `const empresasData = ${exactData};`);

fs.writeFileSync(appPath, appCode, 'utf8');
console.log('App.jsx updated!');
