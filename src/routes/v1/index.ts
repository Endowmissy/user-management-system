import { Router } from 'express';
import UserRoute from './user.routes';
import AddressRoute from './address.routes';

const router = Router();

router.use('/users', UserRoute);
router.use('/addresses', AddressRoute);

export default router;
