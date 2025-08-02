CREATE INDEX idx_users_email ON Users(email);
CREATE INDEX idx_feedback_user_id ON Feedback(user_id);
CREATE INDEX idx_surveys_user_id ON Surveys(user_id);
CREATE INDEX idx_comments_feedback_id ON Comments(feedback_id);
CREATE INDEX idx_promocodes_user_id ON PromoCodes(user_id);
CREATE INDEX idx_votes_feedback_id ON Votes(feedback_id);