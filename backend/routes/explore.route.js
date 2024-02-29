import express from 'express';
import { ensureAuthenticated } from '../middleware/ensureAuthenticated.js';
import { explorePopularRepos } from '../controllers/explore.controller.js';
const router = express.Router();

router.get("/repos/:language",ensureAuthenticated,explorePopularRepos)
export default router;