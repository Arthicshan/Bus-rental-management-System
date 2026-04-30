# 🚀 Quick Start: Deploy to Vercel (Monorepo)

## ⭐ Updated Configuration

Your project now uses **Vercel's experimentalServices** for optimal monorepo deployment!

### Architecture:
```
Vercel Domain
├── / (Frontend - Vite)
└── /_/backend (Backend - Node.js)
```

## What's Ready ✅

### Configuration Files:
- ✅ `vercel.json` - experimentalServices setup
- ✅ `getBackendURL.js` - Smart URL detection for dev/prod

### Code Fixes:
- ✅ Hardcoded localhost URLs removed
- ✅ Dynamic backend URL routing
- ✅ Production-ready environment detection
- ✅ TypeErrors in packages fixed

---

## 3-Step Deployment

### Step 1: Add Environment Variables
```
Go to Vercel Dashboard → Project Settings → Environment Variables

Add these (from .env.example files):
- MONGODB_URI=mongodb+srv://...
- JWT_SECRET=your_secret_here
- STRIPE_SECRET_KEY=sk_test_...
- ... (see .env.example for full list)
```

### Step 2: Commit & Push
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push
```

### Step 3: Deploy
```bash
# Option A: Using Vercel CLI
npm i -g vercel
vercel

# Option B: GitHub Integration
# (Vercel will auto-deploy on push)
```

---

## Testing Your Deployment

1. **Website loads**: https://your-project.vercel.app
2. **API works**: https://your-project.vercel.app/api/auth/login
3. **No console errors**: Open DevTools → Console tab
4. **Login works**: Test authentication
5. **Database works**: Check if data loads

---

## Performance Improvements Made 🎯

| Aspect | What Was Done |
|--------|--------------|
| **Build Size** | Code splitting by vendor → Smaller chunks |
| **Load Time** | Terser compression enabled → Removed console/debugger |
| **CSS** | Code splitting enabled → Only load needed styles |
| **API** | Serverless functions optimized → Fast response |
| **Images** | Vite optimizes images → Smaller downloads |

---

## Configuration Files

| File | Purpose |
|------|---------|
| `vercel.json` | Build, rewrites, environment config |
| `api/index.js` | Serverless API handler |
| `DEPLOYMENT.md` | Complete deployment guide |
| `.env.example` | Backend env variables template |
| `frontend/.env.example` | Frontend env variables template |

---

## Common Issues & Fixes

**Issue**: "API not responding"  
**Fix**: Check MongoDB connection string in Vercel env vars

**Issue**: "CORS errors"  
**Fix**: Ensure FRONTEND_URL env var matches your Vercel domain

**Issue**: "Pages show 404"  
**Fix**: This is already handled in vercel.json rewrites

**Issue**: "Build fails"  
**Fix**: Check backend/package.json & frontend/package.json are fixed

---

## Resources

- 📖 [DEPLOYMENT.md](DEPLOYMENT.md) - Full deployment guide
- 📋 [.env.example](.env.example) - Backend env variables
- 📋 [frontend/.env.example](frontend/.env.example) - Frontend env variables
- 🔗 [Vercel Docs](https://vercel.com/docs)

---

**You're all set! Deploy now and your site will run FAST!** 🏃‍♂️💨

