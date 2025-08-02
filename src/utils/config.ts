/* Configuration */

export const appConfig = {
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  useSSL: process.env.USE_SSL === 'true',
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
  dbConnectionString: process.env.DATABASE_URL || 'postgresql://localhost:5432/yourdb'
};
