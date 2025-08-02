ALTER TABLE Feedback ADD CONSTRAINT feedback_unique_per_user UNIQUE (user_id, company_name);
ALTER TABLE Votes ADD CONSTRAINT vote_unique_per_user_feedback UNIQUE (user_id, feedback_id);