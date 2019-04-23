// dependencies
const path = require('path');

// routing
module.exports = function (app) {
    // get requests
    app.get('/view', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/viewAll.html'));
    });

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/add.html'));
    });
}