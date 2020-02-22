
const express = require('express');
const apiRoutes = require('./api');


// AUTHENTICATION

const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
// API Routes
router.use('/api/v1', apiRoutes);

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => res.render('dashboard', {
  user: req.user,
}));

module.exports = router;
