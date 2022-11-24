import { Router } from 'express';
import comment_controller from '../controllers/commentController.js'

const router = Router();

router.get('/', comment_controller.comment_list);

router.get('/:id', comment_controller.comment_detail);

router.post('/create',  comment_controller.comment_create_post);

router.post('/delete',  comment_controller.comment_delete_post);

router.post('/update',  comment_controller.comment_update_post);

export default router;