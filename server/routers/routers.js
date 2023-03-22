const router=require("express").Router()
const controler=require("../controlers/controlers")
router.get("/api/getall/produit",controler.getallproduit)
router.post("/api/create/product",controler.createProduct)
router.put("/api/update/product/:id",controler.updateProduct)
module.exports={routerget:router}
