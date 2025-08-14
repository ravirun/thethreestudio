# Contact Form Setup Guide

## 🚀 What's Been Implemented

Your website now has a robust contact form system with:

- ✅ **Server Actions**: Proper Next.js 15 server actions with validation
- ✅ **Form Validation**: Zod schema validation with detailed error handling
- ✅ **Spam Protection**: Honeypot field to block bots
- ✅ **Database Storage**: Optional Supabase integration
- ✅ **Email Notifications**: Optional Resend integration
- ✅ **User Feedback**: Success/error banners with auto-dismiss
- ✅ **TypeScript**: Full type safety throughout

## 📋 Setup Steps

### 1. Environment Variables

Create a `.env.local` file in your project root:

```bash
# Supabase (optional DB storage)
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Resend (optional email)
RESEND_API_KEY=your_resend_api_key
RESEND_FROM=noreply@yourdomain.com
RESEND_TO=your@inbox.com
```

### 2. Supabase Setup (Optional)

If you want to store contact submissions in a database:

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Run the SQL from `supabase-setup.sql` in your Supabase SQL editor
3. Get your project URL and service role key from Settings > API

### 3. Resend Setup (Optional)

If you want email notifications:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Set up your domain for sending emails

### 4. Deploy

The form works without any external services - it will just log submissions to the console in development.

## 🧪 Testing

### Valid Submission
- Fill all required fields
- Submit form
- Should redirect to `?contact=success`

### Validation Errors
- Leave required fields empty
- Submit form
- Should redirect to `?contact=invalid`

### Spam Detection
- Fill the hidden "company" field
- Submit form
- Should redirect to `?contact=spam`

### Database Error
- Break Supabase credentials
- Submit form
- Should redirect to `?contact=db_error`

## 📁 Files Created/Modified

- `src/actions/contact.ts` - Server action with validation
- `src/components/contact.tsx` - Client form component
- `src/components/ContactBanner.tsx` - Success/error notifications
- `src/app/page.tsx` - Updated with contact form
- `src/app/contact/page.tsx` - Updated with contact form
- `supabase-setup.sql` - Database schema

## 🔧 How It Works

1. **Form Submission**: User fills form and submits
2. **Server Action**: `createContact` validates and processes data
3. **Validation**: Zod schema checks all fields
4. **Spam Check**: Honeypot field prevents bot submissions
5. **Database**: Optional Supabase storage
6. **Email**: Optional Resend notification
7. **Redirect**: User gets redirected with status parameter
8. **Banner**: Success/error message shown to user

## 🚀 Ready to Deploy!

Your contact form is now production-ready. Just:

1. Set up your environment variables
2. Deploy to Vercel/Netlify
3. Test the form submission
4. Monitor your inbox/database for leads

The form gracefully handles missing services - if Supabase or Resend aren't configured, it still works and logs to console.
