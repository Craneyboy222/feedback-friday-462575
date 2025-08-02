export type User = {
  id: string;
  username: string;
  email: string;
  passwordHash: string;
  profileInfo: string;
};

export type Feedback = {
  id: string;
  userId: string;
  companyName: string;
  url: string;
  purpose: string;
  technologies: string;
  feedbackRequested: string;
  betaTesters: string;
  additionalComments: string;
  createdAt: Date;
};

// Additional types for Surveys, Comments, PromoCodes, Votes...
