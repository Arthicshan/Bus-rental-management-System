# Vercel Deployment Guide - Bus Rental Management System

## Pre-Deployment Checklist ✅

### What Has Been Fixed:
1. ✅ Backend package.json - removed typo (`expres`), moved `nodemon` to devDependencies
2. ✅ Frontend package.json - removed invalid `import` package
3. ✅ Created `vercel.json` with proper build and rewrites configuration
4. ✅ Created `api/index.js` for serverless API routing
5. ✅ Fixed hardcoded localhost URLs in:
   - Chatbot.jsx
   - SimpleTravelSuggestions.jsx
   - QRScanner.jsx
   - AuthContext.jsx
6. ✅ Created environment variable configuration files

---

## Deployment Steps

### Step 1: Prepare Your Environment Variables

**For Vercel Dashboard:**
1. Go to your Vercel project settings → Environment Variables
2. Add the following variables:

```
MONGODB_URI = mongodb+srv://your_user:your_password@cluster.mongodb.net/bus_rental?retryWrites=true&w=majority
JWT_SECRET = your_jwt_secret_key_here_make_it_long_and_secure
PORT = 5000
EMAIL_USER = your_email@gmail.com
EMAIL_PASSWORD = your_app_specific_password
STRIPE_PUBLIC_KEY = pk_test_your_stripe_key
STRIPE_SECRET_KEY = sk_test_your_stripe_key
GOOGLE_PLACES_API_KEY = your_google_places_api_key
FRONTEND_URL = https://your-project.vercel.app
SUPABASE_URL = your_supabase_url
SUPABASE_ANON_KEY = your_supabase_anon_key
VITE_BACKEND_URL = https://your-project.vercel.app (for production)
```

### Step 2: Push to GitHub

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push
```

### Step 3: Deploy to Vercel

**Option A: Using Vercel CLI**
```bash
npm i -g vercel
vercel
```

**Option B: Using GitHub Integration**
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy on push

---

## Important Configuration Notes

### API Routes
- All API requests use the `VITE_BACKEND_URL` environment variable
- Frontend automatically uses `/api` routes when on the same domain
- For production, both frontend and backend are served from the same domain

### CORS Configuration
- Backend has been configured to accept requests from Vercel domains
- Update `FRONTEND_URL` environment variable with your actual Vercel domain

### Database
- MongoDB Atlas connection string must be in environment variables
- Ensure MongoDB Atlas firewall allows Vercel IP addresses

---

## Performance Optimizations

### Frontend (Vite Build)
- Automatically optimized by Vite during build
- Tree-shaking removes unused code
- CSS/JS are minified and bundled
- Code splitting is enabled

### Backend (Node.js)
- Serverless functions are cold-start optimized
- API responses are kept under 50MB limit
- Database queries should use proper indexing

### Recommended Optimizations:
1. **Enable Image Optimization** - Use Vercel Image Optimization
2. **Add Caching** - Set appropriate cache headers
3. **Monitor Performance** - Use Vercel Analytics

---

## Verification After Deployment

1. Check if the site loads: `https://your-project.vercel.app`
2. Test API endpoint: `https://your-project.vercel.app/api/auth/login`
3. Test authentication flow
4. Test database connections
5. Check browser console for any CORS errors

---

## Troubleshooting

### Issue: "Cannot find module"
- Solution: Clear `.next` folder and rebuild

### Issue: CORS errors in browser
- Solution: Check `FRONTEND_URL` environment variable matches your deployment URL

### Issue: API not responding
- Solution: Check MongoDB connection string and firewall rules

### Issue: Slow performance
- Solution: Check database query optimization and API response sizes

---

## Local Testing Before Deployment

```bash
# Install dependencies
npm run install-all

# Build frontend
npm run build

# Test backend locally
cd backend && npm start

# In another terminal, test frontend
cd frontend && npm run preview
```

---

## Important Files

- `vercel.json` - Vercel configuration
- `api/index.js` - Serverless API handler
- `frontend/.env.example` - Frontend environment variables template
- `.env.example` - Backend environment variables template
- `package.json` - Root scripts for easy development

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- MongoDB Atlas: https://www.mongodb.com/cloud/atlas
- Express.js: https://expressjs.com/
- React: https://react.dev/

