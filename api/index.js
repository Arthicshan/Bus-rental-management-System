import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from '../../backend/config/db.js';
import userRouter from '../../backend/routes/userRouter.js';
import authRouter from '../../backend/routes/authRouter.js';
import feedbackRouter from '../../backend/routes/feedbackRouter.js';
import bookingRouter from '../../backend/routes/bookingRouter.js';
import busRouter from '../../backend/routes/busRouter.js';
import notificationRouter from '../../backend/routes/notificationRouter.js';
import attendanceRouter from '../../backend/routes/attendanceRouter.js';
import lostItemRouter from '../../backend/routes/lostItemRouter.js';
import paymentRouter from '../../backend/routes/paymentRouter.js';
import scheduleRouter from '../../backend/routes/scheduleRouter.js';
import staffProfileRoutes from '../../backend/routes/staffProfileRoutes.js';
import chatbotRouter from '../../backend/routes/chatbotRouter.js';
import realPlacesRouter from '../../backend/routes/realPlacesRouter.js';
import maintenanceRouter from '../../backend/routes/maintenanceRouter.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: [process.env.FRONTEND_URL || 'http://localhost:3000', 'https://*.vercel.app'],
  credentials: true
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Connect to DB
connectDB();

// Routes
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/staff-profiles', staffProfileRoutes);
app.use('/api/feedbacks', feedbackRouter);
app.use('/api/bookings', bookingRouter);
app.use('/api/buses', busRouter);
app.use('/api/notifications', notificationRouter);
app.use('/api/attendance', attendanceRouter);
app.use('/api/lost-items', lostItemRouter);
app.use('/api/payments', paymentRouter);
app.use('/api/schedules', scheduleRouter);
app.use('/api/chatbot', chatbotRouter);
app.use('/api/real-places', realPlacesRouter);
app.use('/api/maintenance', maintenanceRouter);

app.get('/', (req, res) => {
  res.send('Bus Rental Management System API is running...');
});

export default app;
