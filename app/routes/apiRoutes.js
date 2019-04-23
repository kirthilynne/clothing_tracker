// require our data 
let clothes = require('../code/clothes');

// routing
module.exports = function (app) {
    // get requests
    app.get('/api/getClothes', (req, res) => {
        res.json(clothes);
    });

    // post requests
    app.post('/api/newItem', (req, res) => {
        // console.log(req.body);
        let item = req.body;
        clothes.forEach(category => {
            if (category.type === req.body.type) {
                category.items.push(req.body.item);
            }
        })
        res.json(item);
    });
}