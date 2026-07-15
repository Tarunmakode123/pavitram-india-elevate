# Pavitram India — Static Deployment Guide

This project is a standard client-side **React Single Page Application (SPA)** powered by **Vite** and **TanStack Router**.

It does **not** require any Node.js server engine (no Nitro, no SSR) to run. The production build generates pure static HTML, CSS, and JavaScript files that can be hosted directly on any standard shared hosting platform like **Hostinger**.

---

## 1. Compiling the Production Build

To generate the static assets, run the standard build script on your developer machine:

```bash
npm run build
```

This compiles your application and places all output files in a directory named **`dist/`** in the root of the project.

---

## 2. Deploying on Hostinger Shared / Cloud Hosting

Since the output consists of static files, you can deploy them using Hostinger's standard File Manager or FTP:

1.  Log in to your **Hostinger hPanel**.
2.  Navigate to **Files** ➜ **File Manager** for your domain.
3.  Go to the **`public_html`** directory (this is your website's root folder).
4.  Upload the **contents** of your local **`dist/`** folder directly into `public_html`.
    - _Note: Upload the files inside `dist/`, not the `dist/` folder itself, so that `index.html` is located directly in `public_html/index.html`._

---

## 3. Configuring Routing (Nginx/Apache `.htaccess`)

Since this is a Single Page Application (SPA), the client-side router handles page changes. If a user refreshes the page on a sub-route (e.g. `yourdomain.com/opportunities`), Hostinger's server might return a `404 Not Found` error because it searches for a physical `/opportunities` folder.

To prevent this, you must configure the web server to redirect all requests to `index.html`.

### If Hostinger is running Apache (Default for Shared Hosting):

Create a file named **`.htaccess`** directly inside the `public_html` directory on Hostinger and add the following configuration:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### If Hostinger is running Nginx (VPS or customized setup):

Update your Nginx virtual host configuration:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```
