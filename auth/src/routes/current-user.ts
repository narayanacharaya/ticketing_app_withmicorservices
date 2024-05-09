import express from 'express';
import { CurrentUser } from '@ticketing-mircoservices/common';

const router = express.Router();

router.get('/api/users/currentuser', CurrentUser, (req, res) => {
  res.send({ CurrentUser: req.currentUser || null });
});

export { router as CurrentUsersRouter };
