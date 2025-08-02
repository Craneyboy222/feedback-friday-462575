import express from 'express';
import authRouter from './auth';
import usersRouter from './users';
import feedbackRouter from './feedback';
import surveysRouter from './surveys';
import commentsRouter from './comments';
import promoCodesRouter from './promoCodes';
import votesRouter from './votes';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/feedback', feedbackRouter);
router.use('/surveys', surveysRouter);
router.use('/comments', commentsRouter);
router.use('/promocodes', promoCodesRouter);
router.use('/votes', votesRouter);

export default router;