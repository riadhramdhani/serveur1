const { connection } = require("../config/config")
module.exports = {
    getallproduit: ((req, res) => {
        const query = `select * from produit`
        connection.query(query, (err, result) => {
            err ? res.status(500).send(err) : res.status(200).send(result)
        })
    }),
    createProduct: ((req, res) => {
        const query = `insert into produit (imag,price,quantity,designation,title) values("${req.body.imag}","${req.body.price}","${req.body.quantity}","${req.body.designation}","${req.body.title}")`
        connection.query(query, (err, result) => {
            err ? res.status(500).send(err) : res.status(201).send("product added")
        })
    }),
    updateProduct: ((req, res) => {
console.log(req.body.title)
        const query = `select * from produit where id=${req.params.id}`
        connection.query(query, (err, result) => {
            console.log(result[0])
            var title , designation,imag,price,quantity
          req.body.title===undefined?  title =result[0].title : title = req.body.title
            req.body.imag===undefined? imag=result[0].imag :imag= req.body.imag
              req.body.price===undefined?price=result[0].price : price=req.body.price
              req.body.quantity===undefined?quantity=result[0].quantity : quantity=req.body.quantity
             req.body.designation===undefined?designation= result[0].designation :designation= req.body.designation

            const query = `update produit set title="${title}", imag="${imag}", price="${price}", quantity="${quantity}", designation="${req.body.designation}" where id="${req.params.id}"`

            connection.query(query, (err, result) => {
                err ? res.status(500).send(err) : res.status(201).send("product updated")
            })


        })


        
    })

}