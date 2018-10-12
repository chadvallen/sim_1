module.exports = {

    getProducts: (req, res) => {
        const db = req.app.get('db');
        db.get_inventory().then(products => {
            res.status(200).json(products)
        }).catch(err=> {
            console.error('Error on GET-->', err)
        })
       
    },

    createProduct: (req, res) => {
        const db = req.app.get('db');
        const { name, price, img } = req.body;
        db.create_product([name, price, img]).then(() => {
            res.sendStatus(200);
        })
        
    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db');
        db.delete_product([req.params.id]).then(() => {
            res.sendStatus(200);
        }).catch(err => {
            console.error('Error on DELETE --> ', err)
        })
    } 








}