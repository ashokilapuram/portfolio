# EmailJS Setup Guide

## Step 1: Create EmailJS Account

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

## Step 2: Create Email Service

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your email account
5. **Copy the Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```
Subject: New Message from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

This message was sent from your portfolio contact form.
```

4. **Copy the Template ID** (you'll need this)

## Step 4: Get Your User ID

1. Go to "Account" → "API Keys"
2. **Copy your Public Key** (this is your User ID)

## Step 5: Update Your Code

Replace these placeholders in `frontend/src/components/Contact.jsx`:

```javascript
// Replace 'YOUR_SERVICE_ID' with your actual Service ID
// Replace 'YOUR_TEMPLATE_ID' with your actual Template ID
// Replace 'YOUR_USER_ID' with your actual Public Key

emailjs.send(
  "YOUR_SERVICE_ID", // ← Replace this
  "YOUR_TEMPLATE_ID", // ← Replace this
  templateParams,
  "YOUR_USER_ID" // ← Replace this
);
```

## Step 6: Test

1. Fill out your contact form
2. Submit a test message
3. Check your email inbox
4. Check browser console for success/error messages

## Troubleshooting

- Make sure all IDs are correct
- Check browser console for errors
- Verify your email service is connected
- Ensure template variables match the code

## Free Tier Limits

- 200 emails per month
- Perfect for portfolio websites
- No credit card required

## Security Notes

- These keys are safe to expose in frontend code
- EmailJS handles security on their end
- No sensitive data stored
