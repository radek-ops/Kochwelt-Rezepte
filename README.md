# Kochwelt-Rezepte

A recipe website built with HTML, CSS, and vanilla JavaScript.  
Users can browse recipes, calculate ingredient quantities based on portions, and send messages via a contact form.

## Live Demo / GitHub Pages

https://radek-ops.github.io/Kochwelt-Rezepte

## Features

- Responsive design with burger menu navigation (mobile friendly)
- Recipe pages with dynamic portion calculator
- Contact form using Formspree
- Imprint page

## Project Structure

```
├── index.html              # Homepage
├── pasta.html              # Pasta recipe (recipe of the day)
├── chicken.html            # Chicken recipe
├── coleslaw.html           # Coleslaw recipe
├── kaiserschmarn.html      # Kaiserschmarrn recipe
├── moussechocolat.html     # Mousse au Chocolat recipe
├── contact.html            # Contact page
├── impressum.html          # Imprint page
├── CSS/
│   ├── style.css           # Global styles
│   ├── burgermenu.css      # Burger menu styles
│   ├── contact.css         # Contact page styles
│   ├── impressum.css       # Imprint page styles
│   └── recipes.css         # Recipe page styles
├── scripts/
│   ├── burger-menu.js      # Burger menu toggle
│   ├── chicken.js          # Portion calculator (chicken)
│   ├── coleslaw.js         # Portion calculator (coleslaw)
│   ├── contact.js          # Contact form submission
│   ├── kaiserschmarrn.js   # Portion calculator (kaiserschmarrn)
│   ├── moussechocolat.js   # Portion calculator (mousse au chocolat)
│   └── pasta.js            # Portion calculator (pasta)
├── img/                    # Images and icons
└── fonts/                  # Custom fonts (Raleway)
```

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/radek-ops/Kochwelt-Rezepte.git
   ```
2. Open `index.html` in your browser.

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- Formspree (contact form backend)