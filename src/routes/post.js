import { Router } from 'express';
import post_controller from '../controllers/postController.js'

const router = Router();

router.get('/', post_controller.post_list);

router.get('/:id', post_controller.post_detail);

router.post('/create',  post_controller.post_create_post);

router.post('/delete',  post_controller.post_delete_post);

router.post('/update',  post_controller.post_update_post);

export default router;