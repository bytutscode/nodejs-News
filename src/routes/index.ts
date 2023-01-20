import { Router } from "express";
import * as NewsHomeController from "../controllers/NewsHome";

const router = Router();


router.get("/",NewsHomeController.home);
router.get("/business", NewsHomeController.business);
router.get("/thewallstreet", NewsHomeController.thewallstreet);
router.get("/techCrunch", NewsHomeController.techCrunch);
router.get("/tesla", NewsHomeController.tesla);
router.get("/apple", NewsHomeController.apple);

//404 route
router.use(NewsHomeController.erroPage);


export default router;