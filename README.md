# ApexNova AI - B2B AI Solutions Agency

## 🔧 Tech Stack
- **Frontend:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS + Custom CSS
- **Routing:** React Router DOM
- **Animations:** Framer Motion
- **Database:** Supabase
- **Deployment:** Netlify + Bolt Hosting
## 🚀 Live Deployments
## 🏗 Development Setup
- **Production (Netlify):** [apexnovaai.netlify.app](https://apexnovaai.netlify.app)
### Prerequisites
- Node.js 18+ 
- npm or yarn
- **Development (Bolt):** [bolt.new deployment](https://apexnova-ai-complete-xv5g.bolt.host)
### Installation
```bash
# Clone the repository
git clone <your-github-repo-url>
cd apexnova-ai
# Install dependencies
npm install
# Create environment file
cp .env.example .env
# Add your Supabase credentials to .env
# Run development server
npm run dev
```
### Environment Variables
Create a `.env` file with:
```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```
## 🚢 Deployment
### Netlify Deployment
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard
5. Deploy automatically triggers on Git push
### Manual Sync from Bolt to GitHub
Since Bolt doesn't have Git access, you need to manually sync:
1. Download project files from Bolt
2. Copy to your local Git repository
3. Commit and push changes
4. Netlify will automatically redeploy
## 🔄 Keeping Deployments in Sync
**The Issue:** Changes in Bolt don't automatically sync to Netlify
**The Solution:** Manual sync process or use Bolt as development only
### Option 1: Use Bolt for Development Only
1. Make changes in Bolt
2. Download and sync to GitHub when ready
3. Let Netlify handle production
### Option 2: Use Netlify as Primary
1. Develop locally with Git
2. Push to GitHub
3. Netlify auto-deploys
4. Use Bolt for quick prototypes only
## 📞 Contact Form Integration
The contact form uses Supabase for data storage. Make sure to:
1. Set up your Supabase project
2. Run the provided migrations
3. Configure environment variables
4. Test the RLS policies
## 🎨 Features
- ✅ Responsive design (mobile-first)
- ✅ AI-powered animations and interactions
- ✅ Contact form with Supabase integration
- ✅ SEO optimized
- ✅ Performance optimized
- ✅ Accessibility compliant
- ✅ Cross-browser compatible