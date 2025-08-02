export const EventConfig = {
  userRegistration: {
    success: 'USER_REGISTRATION_SUCCESS',
    failure: 'USER_REGISTRATION_FAILURE'
  },
  userLogin: {
    success: 'USER_LOGIN_SUCCESS',
    failure: 'USER_LOGIN_FAILURE'
  },
  feedbackSubmission: {
    success: 'FEEDBACK_SUBMISSION_SUCCESS',
    failure: 'FEEDBACK_SUBMISSION_FAILURE'
  },
  logging: {
    level: 'info', // Options: 'error', 'warn', 'info', 'debug'
    logFilePath: '/var/log/enterprise-app.log'
  }
};
