const express = require("express")
const app = express()

//middle ware for all requests 
app.use(express.json())


//routes//

//inventory
app.use("/inventory", require("./routes/inventoryRouter"))

//fruit
app.use("/fruit", require("./routes/fruitRouter"))

//clothing
app.use("/clothing", require("./routes/clothingRouter"))

//packaged food
app.use("/packagedFood",require("./routes/packagedFoodRouter"))

//toys
app.use("/toys", require("./routes/toysRouter"))

//bakedGoods
app.use("/bakedGoods", require("./routes/bakedGoodsRouter"))


//server listener 
app.listen(9000, ()=>{
    console.log("The server is running on port 9000")
})