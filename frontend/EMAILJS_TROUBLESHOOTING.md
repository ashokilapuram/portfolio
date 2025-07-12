# EmailJS Troubleshooting Guide

## Common Errors & Solutions

### 1. **"Invalid Service ID" Error**

**Solution**:

- Go to EmailJS Dashboard → Email Services
- Make sure your Gmail service is connected
- Copy the exact Service ID (should start with `service_`)

### 2. **"Invalid Template ID" Error**

**Solution**:

- Go to EmailJS Dashboard → Email Templates
- Make sure your template exists and is active
- Copy the exact Template ID (should start with `template_`)

### 3. **"Invalid User ID" Error**

**Solution**:

- Go to EmailJS Dashboard → Account → API Keys
- Copy your Public Key (not Private Key)

### 4. **"Template Variables Don't Match" Error**

**Solution**: Make sure your template uses these exact variable names:

```
{{from_name}}
{{from_email}}
{{message}}
{{to_name}}
```

### 5. **"Service Not Connected" Error**

**Solution**:

- Go to EmailJS Dashboard → Email Services
- Reconnect your Gmail account
- Make sure you've authorized EmailJS to send emails

## Debug Steps

### Step 1: Check Console Logs

Open browser console (F12) and look for:

- "EmailJS initialized successfully"
- "Sending email with params:"
- Any error messages

### Step 2: Verify Template

1. Go to EmailJS Dashboard → Email Templates
2. Click on your template
3. Make sure it contains these variables:

```
Subject: New Message from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}
```

### Step 3: Test Template

1. In EmailJS Dashboard → Email Templates
2. Click "Test" button
3. Fill in test values and send
4. Check if you receive the test email

### Step 4: Check Service Status

1. Go to EmailJS Dashboard → Email Services
2. Make sure your Gmail service shows "Connected"
3. If not, reconnect it

## Quick Fixes

### If Still Not Working:

1. **Recreate the template** with exact variable names
2. **Reconnect your Gmail service**
3. **Clear browser cache** and restart
4. **Check Gmail spam folder**

### Alternative Template:

If the current template doesn't work, try this simpler one:

```
Subject: Portfolio Contact Form Message

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}
```

## Contact Support

If still having issues:

- EmailJS Support: support@emailjs.com
- Check EmailJS documentation
- Verify your account is active
