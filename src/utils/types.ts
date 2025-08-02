export type User = {
  id: number;
  username: string;
  email: string;
  password_hash: string;
  profile_info: string;
};

export type Feedback = {
  id: number;
  user_id: number;
  company_name: string;
  url: string;
  purpose: string;
  technologies: string;
  feedback_requested: string;
  beta_testers: boolean;
  additional_comments: string;
  created_at: Date;
};

// Add other types as necessary...