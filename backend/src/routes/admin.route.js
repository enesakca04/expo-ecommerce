import {Router} from "express"
import { createProduct, getAllCustomers, getAllOrders, getAllProducts, getDashboardStats, updateOrderStatus, updateProduct } from "../controllers/admin.controller.js";
import { adminOnly, protectRoute } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router();
//! optimization- dont repeat you - kodu tekrarlama
router.use(protectRoute , adminOnly) // bunu yapma sebebimiz router post get put islemlerinde tekrarlayan islem olması,"/products",protectRoute , adminOnly, createProduct seklinde olan koddan
//! protectRoute , adminOnly kısmını siliyoruz boylece. clean code | once router use adimi calisir
router.post("/products",upload.array("images",3), createProduct)
router.get("/products", getAllProducts)
router.put("/products/:id",upload.array("images",3), updateProduct)

router.get("/orders",getAllOrders)
router.patch("/orders/:orderId/status",updateOrderStatus)

//put : used for full resource replacement , updating the entire resource
//patch : used for partial resource updates, updating a specific part of the resource

router.get("/customers",getAllCustomers)
router.get("/stats",getDashboardStats)

export default router 