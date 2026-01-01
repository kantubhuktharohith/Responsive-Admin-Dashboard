# Responsive-Admin-Dashboard

A front-end admin dashboard built with plain HTML, CSS, and JavaScript.
No frameworks. No build step. Open it in a browser and it works.

This project focuses on layout, responsiveness, and basic UI logic rather than backend integration.

Features

Responsive three-column layout (sidebar, main content, right panel)

Section-based navigation without page reloads

Light and dark theme toggle

Dynamic order tables populated via JavaScript

Mobile-friendly sidebar behavior

Pure HTML, CSS, and vanilla JS

Project Structure
/
├── index.html     # Main layout and markup
├── style.css      # Styling, themes, responsiveness
└── index.js       # UI logic and dynamic data handling

File Breakdown
index.html

Defines the full dashboard layout:

Sidebar navigation with icons

Multiple content sections (Dashboard, Customers, Orders, Analytics, etc.)

Tables and cards for displaying data

Theme toggle and profile area

Each section is shown or hidden dynamically using JavaScript.


index

style.css

Handles:

Color variables and theme tokens

Light and dark theme support

Grid layout and spacing

Sidebar and table styling

Responsive behavior for tablets and mobile screens

No external CSS framework is used.


style

index.js

Responsible for:

Sidebar navigation logic

Section switching

Theme toggling

Mobile menu behavior

Injecting order data into tables

Order data is mocked locally using a simple function.


index

How It Works

Clicking a sidebar item calls showSection(sectionId)

All sections are hidden, then the selected one is shown

Active sidebar state updates automatically

Orders are rendered on page load using DOM manipulation

Theme toggle adds or removes a dark-theme class on <body>

There is no backend. All data is static and meant for demo purposes.

How to Run

Download or clone the project.

Make sure all three files are in the same folder.

Open index.html in any modern browser.

That’s it.

Limitations (By Design)

No backend or API integration

No authentication logic

No real data persistence

Alerts are placeholders (for example, logout)

This is a UI-focused demo, not a production system.

Suggested Improvements

If you want to level this up:

Replace mock data with API calls

Extract JS into modules

Add proper routing

Introduce state management

Validate and submit form data

Add accessibility improvements

License

Free to use, modify, and adapt for personal or educational projects.

If you want, I can also:

Refactor the JS for cleanliness

Convert this to React or Vue

Wire it to a real backend

Audit the CSS for consistency and bugs
