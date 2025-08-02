export const FormConfig = {
  validation: {
    emailRegex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    passwordMinLength: 8,
    allowedFileTypes: ['image/jpeg', 'image/png', 'application/pdf'],
    maxFileSizeMB: 10
  },
  feedbackFormTemplate: {
    fields: ['company_name', 'url', 'purpose', 'technologies', 'feedback_requested', 'beta_testers', 'additional_comments'],
    requiredFields: ['company_name', 'purpose', 'feedback_requested']
  }
};
