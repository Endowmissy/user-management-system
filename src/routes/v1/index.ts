import { Router } from 'express';
import UserRoute from './user.routes';
import AddressRoute from './address.routes';
import PostRoute from './post.routes'

const router = Router();

router.use('/users', UserRoute);
router.use('/addresses', AddressRoute);
router.use('/posts', PostRoute);

export default router;
