import express from 'express';
import authenticateUser from '../middleware/Auth.js';

const DashboardRouter = express.Router();


DashboardRouter.get('/', authenticateUser, (req, res) => {
    try{
        res.status(200).json({ 
            message: 'Welcome to the dashboard', 
            user: req.user 
        });
    } catch(error) {
        res.status(500).json({ message: 'Server error' });
    }
});

export default DashboardRouter;