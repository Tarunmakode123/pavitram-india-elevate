# Pavitram India — Deployment Guide

This project is built using **TanStack Start** (React + Vite + Nitro Server engine). Because it is a full-stack, server-side rendered (SSR) application, it compiles to a standalone Node.js server rather than basic static HTML files.

Follow these instructions to build and run the application on **Hostinger** (or any Node.js/VPS hosting).

---

## 1. Preparing the Build for Node.js Server

To deploy on Hostinger (either via Hostinger VPS or Hostinger's cPanel Node.js Selector), you must compile the application using the **`node-server`** Nitro preset.

### Step 1: Run the Build Command

Depending on your developer machine's operating system, run one of the following commands:

- **Linux / macOS / Git Bash / Hostinger SSH Terminal**:
  ```bash
  NITRO_PRESET=node-server npm run build
  ```
- **Windows PowerShell**:
  ```powershell
  $env:NITRO_PRESET="node-server"; npm run build
  ```
- **Windows Command Prompt (cmd)**:
  ```cmd
  set NITRO_PRESET=node-server && npm run build
  ```

### Step 2: Check the Output

The build process compiles everything into a folder named **`.output/`** in the root of the project:

- **`.output/public/`**: Static assets, images, and client-side JavaScript bundles.
- **`.output/server/index.mjs`**: The compiled Node.js application server.

---

## 2. Deploying on Hostinger Node.js Selector (Shared/Cloud Hosting)

If you are using Hostinger's built-in Node.js app selectors:

1.  Upload the entire project files (including `.output`, `package.json`, etc.) to your directory.
2.  In the Hostinger Node.js configuration panel:
    - Set the **Node.js Version** to `18` or `20`.
    - Set the **Application Startup File** to:
      ```text
      .output/server/index.mjs
      ```
    - Set the **Document Root** to the folder containing your files.
3.  Click **Run npm install** (if deploying raw source, otherwise not needed if `.output` is pre-compiled).
4.  Start the application.

---

## 3. Deploying on Hostinger VPS (Ubuntu / Debian)

If you are deploying on a clean Hostinger VPS, follow these standard steps:

### Step 1: Install Node.js

Make sure Node.js (v18+) is installed on the server:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Step 2: Upload Files

Upload the compiled **`.output`** directory and the **`package.json`** to your target folder on the VPS (e.g. `/var/www/pavitram-website`).

### Step 3: Run the Server using PM2

It is highly recommended to run the Node server in the background using **PM2** so it stays online and restarts automatically:

1.  Install PM2 globally:
    ```bash
    sudo npm install -g pm2
    ```
2.  Start the server (default port is `3000`):
    ```bash
    pm2 start .output/server/index.mjs --name "pavitram-website"
    ```
3.  Ensure PM2 starts on boot:
    ```bash
    pm2 startup
    pm2 save
    ```

### Step 4: Configure Nginx Reverse Proxy

To point your domain (e.g. `pavitramindia.com`) to the running Node server (port 3000):

1.  Install Nginx:
    ```bash
    sudo apt install nginx
    ```
2.  Edit your Nginx server block config (`/etc/nginx/sites-available/default`):

    ```nginx
    server {
        listen 80;
        server_name yourdomain.com www.yourdomain.com;

        location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
    ```

3.  Test and restart Nginx:
    ```bash
    sudo nginx -t
    sudo systemctl restart nginx
    ```
