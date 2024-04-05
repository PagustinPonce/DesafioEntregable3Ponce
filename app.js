import  { ProductManager }  from './desafioEntregable3.js'

import express from "express"

const app = express()

app.get('/products',async (req,res)=>{

    try {

        const { limit } = req.query;

        const prodMan = new ProductManager();

        let productos = await prodMan.getProducts();

        if(limit && !isNaN(limit)){

            const limit = Number(limit);

            productos = productos.slice(0,limit);

        }

        res.send(productos);

    } catch (error) {
        
    }

})

app.get('/products/:pid', async (req,res)=>{
    
    try {

        const { pid } = req.params;

        const prodMan = new ProductManager();

        const product = await prodMan.getProductById( pid );

        res.send(product);

    } catch (error) {
        console.log(error)
        res.send("Hubo un error")
    }
})

app.listen(8080, error =>{

    console.log("Escuchando del puerto 8080")
})