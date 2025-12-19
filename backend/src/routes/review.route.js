import {Router} from "express"
import { protectRoute } from "../middleware/auth.middleware.js"
import { createReview, deleteReview } from "../controllers/review.controller.js"

const router = Router()

router.post("/", protectRoute,createReview)
//review did not implement this function in the mobile app - in the frontend
// but jic if you'd like to see the backend code here it is - i provided
router.delete("/",protectRoute,deleteReview)

export default router