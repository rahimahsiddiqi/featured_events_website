# Local Events Discovery Website

A responsive single-page website for discovering local events, built with HTML5, CSS3, and JavaScript.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Featured events section with event cards
- Search functionality to filter events
- Clean and modern UI using Bootstrap
- Contact form section
- Mobile-friendly navigation

## Project Structure

```
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Custom styles
├── js/
│   ├── events.js       # Event data
│   └── main.js         # Main JavaScript functionality
└── assets/            # Images and other static files
```

## Running the Project

### Method 1: Direct File Opening
1. Simply double-click the `index.html` file
2. It will open in your default web browser
3. URL will look like: `file:///path/to/your/project/index.html`

### Method 2: Using Python's Built-in Server
1. Open terminal/command prompt
2. Navigate to project directory:
   ```bash
   cd path/to/dynamics360
   ```
3. Run one of these commands:
   ```bash
   # If you have Python 3:
   python -m http.server 8000

   # If you have Python 2:
   python -m SimpleHTTPServer 8000
   ```
4. Open your browser and go to: `http://localhost:8000`

### Method 3: Using Node.js
1. Install Node.js from https://nodejs.org/
2. Install `http-server` globally:
   ```bash
   npm install -g http-server
   ```
3. Navigate to project directory:
   ```bash
   cd path/to/dynamics360
   ```
4. Run the server:
   ```bash
   http-server
   ```
5. Open your browser and go to: `http://localhost:8080`

### Method 4: Using VS Code Live Server
1. Install Visual Studio Code
2. Install "Live Server" extension
3. Open project in VS Code
4. Right-click on `index.html`
5. Select "Open with Live Server"
6. Website will open automatically in your browser

## GitHub Setup and Usage

### Initial Setup
1. **Install Git**
   - Download Git from: https://git-scm.com/downloads
   - Install with default settings

2. **Configure Git** (First time only)
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

3. **Clone the Repository**
   ```bash
   # Navigate to where you want to store the project
   cd your/preferred/location

   # Clone the repository
   git clone https://github.com/rahimahsiddiqi/featured_events_website.git

   # Move into the project directory
   cd featured_events_website
   ```

### Making Changes and Updates

1. **Create a New Branch** (for each feature/fix)
   ```bash
   # Create and switch to a new branch
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes**
   - Edit files in your code editor
   - Save your changes

3. **Stage Your Changes**
   ```bash
   # Stage all changes
   git add .

   # Or stage specific files
   git add index.html
   git add css/styles.css
   ```

4. **Commit Your Changes**
   ```bash
   git commit -m "Description of your changes"
   ```

5. **Push Changes to GitHub**
   ```bash
   # First time pushing a new branch
   git push -u origin feature/your-feature-name

   # Subsequent pushes
   git push
   ```

6. **Create a Pull Request**
   - Go to GitHub repository
   - Click "Compare & pull request"
   - Add description of changes
   - Submit pull request

### Keeping Your Repository Updated

1. **Check Status**
   ```bash
   git status
   ```

2. **Update Local Repository**
   ```bash
   # Switch to main branch
   git checkout main

   # Pull latest changes
   git pull origin main
   ```

3. **Resolve Conflicts** (if any)
   - Git will notify you of conflicts
   - Open conflicting files
   - Resolve conflicts manually
   - Stage resolved files
   - Commit changes

### Common Git Commands

```bash
# View all branches
git branch

# Switch branches
git checkout branch-name

# View commit history
git log

# Discard changes
git checkout -- filename

# View remote repository info
git remote -v
```

## Setup

### Local Setup
1. Clone the repository
2. Open `index.html` in your web browser
3. No build process or dependencies required

### Running from GitHub
1. Fork this repository to your GitHub account
2. Go to your forked repository
3. Click on "Settings"
4. Scroll down to "GitHub Pages" section
5. Under "Source", select "main" branch
6. Click "Save"
7. Your site will be published at: `https://[your-username].github.io/featured_events_website`

### Testing Mobile Responsiveness
1. Open the website in your browser
2. Right-click and select "Inspect" (or press F12)
3. Click the "Toggle device toolbar" button (mobile icon) or press Ctrl+Shift+M
4. Select different devices from the dropdown to test responsiveness
5. You can also test on your actual mobile device by:
   - Using the GitHub Pages URL on your phone
   - Scanning the QR code if available in your repository

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Bootstrap 5.3.0
- Font Awesome Icons

