const express=require("express");
const router=express.Router();
const cart=require("../../controller/cart/cart");

router.post("/addToCart",cart.addToCart);
router.get("/getCart",cart.getCart);
router.post("/updateCartQuantity",cart.updateCartQuantity);
router.get("/getCartByUserId/:id",cart.getCartByUserId);
router.delete("/deleteCart/:id",cart.deleteCart);

module.exports=router