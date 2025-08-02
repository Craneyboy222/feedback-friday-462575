/* Database types */

/**
 * Interface for the Users table in the database.
 */
export interface User {
  id: number;
  username: string;
  email: string;
  passwordHash: string;
  profileInfo: string;
}

/**
 * Interface for the Feedback table in the database.
 */
export interface Feedback {
  id: number;
  userId: number;
  companyName: string;
  url: string;
  purpose: string;
  technologies: string;
  feedbackRequested: string;
  betaTesters: boolean;
  additionalComments: string;
  createdAt: Date;
}

/**
 * Interface for the Surveys table in the database.
 */
export interface Survey {
  id: number;
  userId: number;
  surveyLink: string;
  createdAt: Date;
}

/**
 * Interface for the Comments table in the database.
 */
export interface Comment {
  id: number;
  feedbackId: number;
  userId: number;
  commentText: string;
  createdAt: Date;
}

/**
 * Interface for the PromoCodes table in the database.
 */
export interface PromoCode {
  id: number;
  userId: number;
  code: string;
  description: string;
  createdAt: Date;
}

/**
 * Interface for the Votes table in the database.
 */
export interface Vote {
  id: number;
  feedbackId: number;
  userId: number;
  voteType: string;
  createdAt: Date;
}