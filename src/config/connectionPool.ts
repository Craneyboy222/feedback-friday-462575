export const ConnectionPoolConfig = {
  max: 20, // Maximum number of connections
  min: 4, // Minimum number of connections
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
  connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
  ssl: true // Use SSL for database connections
};
