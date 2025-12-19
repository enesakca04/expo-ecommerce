import {Router} from "express"
import { protectRoute } from "../middleware/auth.middleware.js"
import { addToCart, clearCart, getCart, removeFromCart, updateCartItem } from "../controllers/cart.controller.js"

const router = Router()
router.use(protectRoute)
router.get("/",getCart)
router.post("/",addToCart)
router.put("/:productId",updateCartItem)
router.delete("/:productId", removeFromCart) // sepetten urun siler
router.delete("/",clearCart) // basarili odeme sonrasi sepeti bosaltir

export default router