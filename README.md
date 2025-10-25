# Canadian Chinchilla Rescue - Next.js Website

A modern, Notion-powered website for managing chinchilla adoption applications and listings. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Homepage**: Clean, professional landing page with call-to-actions
- **Chinchilla Listings**: ISR-powered pages showing available chinchillas from Notion
- **Individual Chinchilla Pages**: Detailed view for each chinchilla with photos and information  
- **Application Form**: Comprehensive adoption application that submits to Notion
- **Responsive Design**: Mobile-first design using Tailwind CSS and shadcn/ui
- **Real-time Updates**: ISR ensures fresh data without full rebuilds

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components  
- **Database**: Notion (via API)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

1. **Notion Account**: Free account sufficient for this volume
2. **Node.js**: Version 18 or higher
3. **Vercel Account**: For deployment (optional but recommended)

## 🏗 Setup Instructions

### Step 1: Clone and Install

```bash
git clone <repository-url>
cd chinchilla-rescue-nextjs
npm install
```

### Step 2: Create Notion Databases

1. **Create a new Notion page** for your rescue
2. **Create Chinchillas Database**:
   - Add a database with these properties:
     - **Name** (Title)
     - **Age** (Number)  
     - **Gender** (Select: Male, Female)
     - **Color** (Text)
     - **Description** (Rich text)
     - **Photos** (Files & media)
     - **Status** (Select: Available, On Hold, Adopted, Not Ready)
     - **Friendly with Others** (Checkbox)
     - **Date Added** (Date)
     - **Notes** (Rich text)

3. **Create Applications Database**:
   - Add a database with these properties:
     - **Applicant Name** (Title)
     - **Email** (Email)
     - **Phone** (Phone)
     - **Age** (Number)
     - **City/Province** (Text)
     - **Status** (Select: New, Reviewing, Approved, Rejected)
     - **Interested Chinchilla** (Text)
     - **Has Cage** (Checkbox)
     - **Has Experience** (Checkbox)
     - **Application Date** (Date)
     - **Review Notes** (Rich text)
     - **Full Application** (Rich text)

### Step 3: Get Notion Integration Token

1. Go to [Notion Integrations](https://www.notion.so/my-integrations)
2. Click "New integration"
3. Name it "Chinchilla Rescue Website"
4. Copy the **Internal Integration Token**
5. **Share your databases** with the integration:
   - Open each database in Notion
   - Click "Share" → "Invite" → Search for your integration
   - Grant "Full access"

### Step 4: Get Database IDs

1. **For each database**, copy the database ID from the URL:
   - Open the database in Notion
   - Copy the ID from URL: `https://notion.so/<DATABASE_ID>?v=...`
   - The database ID is the long string before `?v=`

### Step 5: Environment Setup

1. **Copy environment file**:
   ```bash
   cp .env.local.example .env.local
   ```

2. **Fill in your values** in `.env.local`:
   ```env
   NOTION_TOKEN=your_notion_integration_token_here
   NOTION_CHINCHILLAS_DB_ID=your_chinchillas_database_id_here
   NOTION_APPLICATIONS_DB_ID=your_applications_database_id_here
   ```

### Step 6: Test Locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site!

### Step 7: Deploy to Vercel

1. **Push to GitHub** (create a new repository)
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add your environment variables in Vercel dashboard
3. **Deploy** - Vercel will auto-deploy on every push

## 📖 Daily Usage (For Rescue Owner)

### Adding a New Chinchilla

1. **Open your Chinchillas database** in Notion
2. **Click "New"** to create a new row
3. **Fill in details**:
   - Name, Age, Gender, Color, Description
   - Upload photos by dragging/dropping into Photos field
   - Set Status to "Available"
   - Check "Friendly with Others" if applicable
4. **Save** - appears on website within 5 minutes

### Managing Applications

1. **Check Applications database** regularly for new submissions
2. **Review applications**:
   - Read full application details
   - Add notes in "Review Notes" 
   - Update Status (New → Reviewing → Approved/Rejected)
3. **Contact applicants** directly via email/phone from application

### Updating Chinchilla Status

1. **Open chinchilla record** in Notion
2. **Change Status**:
   - "Available" → shows on website
   - "On Hold" → still shows but marked as on hold
   - "Adopted" → hidden from public listings
3. **Updates reflect** on website within 5 minutes

## 🎨 Customization

### Updating Content

- **Homepage text**: Edit `src/app/page.tsx`
- **Navigation**: Edit `src/components/navbar.tsx`
- **Application form**: Edit `src/lib/schemas.ts` and `src/app/apply/page.tsx`

### Styling

- **Colors/themes**: Edit `src/app/globals.css`
- **Components**: All styled with Tailwind CSS classes
- **shadcn/ui**: Add more components with `npx shadcn@latest add <component>`

### Adding Pages

Create new pages in `src/app/` directory:
- `src/app/about/page.tsx` → `/about` route
- `src/app/contact/page.tsx` → `/contact` route

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Key Files

- `src/lib/notion.ts` - Notion client configuration
- `src/lib/notion-helpers.ts` - Helper functions for data fetching
- `src/lib/schemas.ts` - Form validation schemas
- `src/app/apply/actions.ts` - Server action for form submission

## 🆘 Support

### Common Issues

**"Applications not appearing in Notion"**
- Check environment variables are correct
- Verify database is shared with integration
- Check browser console for errors

**"Chinchillas not showing on website"**  
- Ensure Status is set to "Available"
- Check database ID is correct
- Wait 5 minutes for ISR to refresh

**"Images not loading"**
- Use Notion's file upload (not external links)
- Ensure files are accessible
- Check image URLs in database

### Getting Help

- Check the browser console for error messages
- Verify all environment variables are set
- Test Notion integration permissions
- Contact your developer for custom changes

## 📝 License

This project is built for Canadian Chinchilla Rescue. Modify and adapt as needed for your organization.
