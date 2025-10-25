# Deployment Guide - Canadian Chinchilla Rescue

## Pre-Deployment Checklist

### 1. Environment Variables
Ensure all environment variables are set in your production environment:

- ✅ `POSTGRES_URL` - Neon/Vercel Postgres connection string
- ✅ `PAYLOAD_SECRET` - Strong random string for Payload CMS
- ✅ `NEXT_PUBLIC_SERVER_URL` - Your production domain (https://canadianchinchillarescue.ca)
- ✅ `BETTER_AUTH_SECRET` - Strong random string for auth
- ✅ `BLOB_READ_WRITE_TOKEN` - Vercel Blob token (optional, for image uploads)
- ✅ `RESEND_API_KEY` - Resend API key for transactional emails
- ✅ `ADMIN_EMAIL` - Email address to receive application notifications

### 2. Database Setup
```bash
# Your Neon database is already configured with:
- Users table
- Media table
- Chinchillas table (15 chinchillas imported)
- Blog table
- Applications table
- EmailList table
```

### 3. Admin User
Default admin credentials (CHANGE THESE IN PRODUCTION):
- Email: admin@chinchillarescue.ca
- Password: admin123

**TODO:** Create new admin user via `/admin` and delete the default one.

### 4. Resend Email Setup
1. Verify domain in Resend dashboard
2. Add DNS records (SPF, DKIM, DMARC)
3. Test email sending
4. Configure "From" email: `noreply@canadianchinchillarescue.ca`

### 5. Vercel Deployment Steps

```bash
# 1. Push to GitHub
git add .
git commit -m "Ready for production"
git push origin main

# 2. Connect to Vercel
# - Import project from GitHub
# - Framework: Next.js
# - Root Directory: ./
# - Build Command: pnpm build
# - Output Directory: .next

# 3. Add Environment Variables in Vercel Dashboard
# Go to Settings → Environment Variables
# Add all variables from .env.example

# 4. Deploy
# Vercel will automatically deploy on push to main
```

### 6. Post-Deployment Tasks

#### Immediate:
- [ ] Test admin login at `/admin`
- [ ] Create new admin user with strong password
- [ ] Delete default admin user
- [ ] Test application submission at `/apply`
- [ ] Verify emails are being sent
- [ ] Test newsletter signup in footer
- [ ] Upload real chinchilla photos via admin panel

#### Within 24 hours:
- [ ] Add real blog posts
- [ ] Review and update all chinchilla profiles
- [ ] Test all pages for broken links
- [ ] Set up error monitoring (Sentry recommended)
- [ ] Configure analytics (Vercel Analytics or Google Analytics)

#### Within 1 week:
- [ ] Monitor application submissions
- [ ] Check email deliverability
- [ ] Review newsletter signups
- [ ] Set up automated backups for Postgres

## Domain Configuration

1. **Vercel:**
   - Add custom domain: canadianchinchillarescue.ca
   - Configure SSL (automatic with Vercel)
   - Set up redirects if needed

2. **DNS Records:**
   ```
   Type    Name    Value
   A       @       76.76.21.21 (Vercel's IP)
   CNAME   www     cname.vercel-dns.com
   ```

3. **Resend DNS (for email):**
   ```
   TXT     @       v=spf1 include:_spf.resend.com ~all
   TXT     resend._domainkey   [provided by Resend]
   TXT     _dmarc  v=DMARC1; p=none; rua=mailto:dmarc@canadianchinchillarescue.ca
   ```

## Testing in Production

After deployment, test these critical flows:

### 1. Adoption Flow
1. Browse chinchillas at `/adopt`
2. Click on a chinchilla
3. Click "Apply to Adopt"
4. Fill out and submit application
5. Check email confirmation was received
6. Check admin received notification

### 2. Newsletter Signup
1. Scroll to footer
2. Enter email
3. Submit
4. Verify success message
5. Check email appears in admin panel under "Email List"

### 3. Admin Panel
1. Login at `/admin`
2. View applications
3. Edit a chinchilla
4. Upload a photo
5. Create a blog post
6. Publish blog post
7. View on frontend

## Monitoring & Maintenance

### Performance
- Vercel Analytics (free tier included)
- Monitor Core Web Vitals
- Check page load times

### Errors
- Set up Sentry or similar error tracking
- Monitor console for errors
- Check failed email sends

### Database
- Monitor Payload CMS performance
- Check Postgres usage in Neon dashboard
- Set up automated backups

### Email
- Monitor Resend dashboard for bounce rate
- Check spam folder reports
- Monitor email open rates

## Rollback Plan

If issues occur after deployment:

1. **Via Vercel Dashboard:**
   - Go to Deployments
   - Find last working deployment
   - Click "..." → Promote to Production

2. **Via Git:**
   ```bash
   git revert HEAD
   git push origin main
   ```

3. **Database Issues:**
   - Neon provides point-in-time recovery
   - Contact Neon support if needed

## Support Contacts

- **Hosting:** Vercel Support
- **Database:** Neon Support
- **Email:** Resend Support
- **CMS:** Payload CMS Discord/GitHub

## Success Metrics

After 1 month, review:
- Number of applications received
- Email list growth
- Page views and bounce rate
- Application completion rate
- Email deliverability rate
