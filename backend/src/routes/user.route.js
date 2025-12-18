import {Router} from "express"
import { addAddress, addToWishlist, deleteAddress, getAddresses, getWishlist, removeFromWishlist, updateAddress } from "../controllers/user.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js"


const router = Router()


//! address routes
router.use(protectRoute) // normalde "" sonrasında bu protectroute çağırılırdı fakat dört satırda da yer aldıgı icin kaldırıp bu sekilde kullandik, next func gecmeden once bunu cagir diyoruz yani
router.post("/addresses",addAddress)
router.get("/addresses",getAddresses)
router.put("/addresses/:addressId",updateAddress)
router.delete("/addresses/addressId",deleteAddress)

//!wishlist routes
router.post("/wishlist",addToWishlist)
router.delete("/wishlist",removeFromWishlist)
router.get("/wishlist",getWishlist)

export default router
