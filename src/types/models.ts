export interface User {
  id: number;
  username: string;
  email: string;
  password_hash: string;
  profile_info?: Record<string, any>;
}

export interface Feedback {
  id: number;
  user_id: number;
  company_name: string;
  url: string;
  purpose: string;
  technologies: string[];
  feedback_requested: boolean;
  beta_testers: boolean;
  additional_comments: string;
  created_at: Date;
}
