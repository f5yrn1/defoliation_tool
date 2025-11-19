Defoliation Outcome Dashboard
This repository hosts an interactive dashboard for visualizing potato defoliation outcomes. Growers can select a defoliation percentage range and a timepoint during the growing season to view:

Estimated yield (% of non-defoliated)

Estimated yield loss (%)

The dashboard also includes a reference table of potato development stages (Irigoyen et al. 2011) for context.

Features
Interactive dropdowns for defoliation range and timepoint selection

Automatic calculation of yield and yield loss (converted to percentages, rounded to 1 decimal place)

Responsive design for desktop and mobile devices

Reference table of potato development stages displayed alongside the dashboard

Hosted via GitHub Pages for easy access and sharing

Repository Structure
index.html — Main dashboard page

style.css — Styling and responsive layout

script.js — Interactive logic for dropdowns and outputs

data.json — Defoliation dataset (values 0–1 scale converted to percentages)

Data
The dataset expresses yield outcomes as a fraction of control (0–1 scale). The dashboard converts these values to percentages (0–100%) and calculates yield loss as:

Estimated yield (%) = value × 100

Estimated yield loss (%) = (1 − value) × 100

Reference Table
The dashboard includes Table 1: Potato development stages from Irigoyen et al. 2011, showing estimated days after planting, weeks after emergence, and developmental stage descriptions.

Deployment
This site is published using GitHub Pages. To view the dashboard, visit:

https://f5yrn1.github.io/defoliation_tool/


Contact
For more information please contact: Dr. Jonathan Neilson Agriculture and Agri-Food Canada, Lethbridge

📩 jonathan.neilson@agr.gc.ca

License
This project is licensed under the MIT License for code and CC BY 4.0 for dataset content. You are free to use, modify, and share with attribution.
