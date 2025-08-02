import { Request, Response } from 'express';
import { logger } from '../utils/logger';
import { createSurvey, getSurveys } from '../services/surveyService';

export const createSurveyEntry = async (req: Request, res: Response): Promise<void> => {
  try {
    const survey = await createSurvey(req.body);
    res.status(201).json(survey);
  } catch (error) {
    logger.error('Error creating survey', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const listSurveys = async (req: Request, res: Response): Promise<void> => {
  try {
    const surveys = await getSurveys(req.query);
    res.status(200).json(surveys);
  } catch (error) {
    logger.error('Error fetching surveys', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};