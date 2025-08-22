const express = require('express');
const app = express();

app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Facebook Group Management API is running on Vercel',
    status: 'Active',
    timestamp: new Date().toISOString(),
    endpoints: [
      '/api/status',
      '/api/info',
      '/api/health',
      '/api/group'
    ]
  });
});

// Status endpoint
app.get('/api/status', (req, res) => {
  res.json({ 
    status: 'OK',
    server: 'Vercel Node.js',
    time: new Date().toISOString()
  });
});

// Info endpoint
app.get('/api/info', (req, res) => {
  res.json({ 
    app: 'FB Group Manager',
    version: '1.0.0',
    deployedOn: 'Vercel',
    environment: process.env.NODE_ENV || 'development'
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    healthy: true,
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Group management endpoint (example)
app.get('/api/group', (req, res) => {
  res.json({ 
    message: 'Group management endpoint',
    note: 'This is a placeholder for group management functionality',
    instructions: 'For actual Facebook automation, use a dedicated server'
  });
});

// Handle all other routes
app.all('*', (req, res) => {
  res.status(404).json({ 
    error: 'Endpoint not found',
    message: 'Requested API endpoint does not exist',
    path: req.path
  });
});

// Export the Express app as a serverless function
module.exports = app;