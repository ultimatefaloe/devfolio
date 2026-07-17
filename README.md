# DevFolio — Front-End Developer Course

> **Build a real personal portfolio website while learning HTML, CSS, and JavaScript from scratch.**

---

## About This Course

**Instructor:** ULTIMATE  
**Contact:** ultimatefaloe@gmail.com  
**Level:** Beginner → Intermediate  
**Method:** Build-Along — every concept is immediately applied to a real project  

This is not a passive reading course. Every topic you learn is applied directly to **DevFolio** — a fully responsive, interactive personal portfolio website. By the time you finish, you will have a professional website you can show to clients and employers.

### What You Will Build

**DevFolio** — a 4-page personal portfolio website:

| Page | File | What It Does |
|---|---|---|
| Home | `index.html` | Hero section, About, Skills |
| Projects | `projects.html` | Projects grid with filter buttons |
| Blog | `blog.html` | Blog posts loaded from a live API |
| Contact | `contact.html` | Contact form with validation |

### Tools You Need

- A code editor — **VS Code** (free at code.visualstudio.com)
- VS Code extension — **Live Server** (right-click your HTML file → "Open with Live Server")
- A modern browser — Chrome or Firefox
- No installations, no frameworks, no command line — just a text editor and a browser

### Project File Structure

```
devfolio/
├── index.html          ← Home page
├── projects.html       ← Projects page
├── blog.html           ← Blog page
├── contact.html        ← Contact page
│
├── css/
│   ├── variables.css   ← CSS colour tokens and spacing values
│   ├── global.css      ← Shared styles (navbar, buttons, footer)
│   ├── home.css        ← Home page only
│   ├── projects.css    ← Projects page only
│   ├── blog.css        ← Blog page only
│   └── contact.css     ← Contact page only
│
├── js/
│   ├── main.js         ← Shared JavaScript (runs on every page)
│   ├── projects.js     ← Projects data and card rendering
│   └── blog.js         ← Fetch posts from the internet
│
└── assets/             ← Images and icons
```

---

## About the Creator

**ULTIMATE** is a technology education company focused on practical, career-ready IT skills for students and young professionals in Nigeria and beyond. Our courses emphasise learning by doing — students build real projects from day one, not toy examples.

Our front-end developer programme covers the three core languages of the web: HTML, CSS, and JavaScript. Graduates leave with a working portfolio website they built with their own hands, and the knowledge to build many more.

📧 ultimatefaloe@gmail.com

## Course proeject
https://ultimatefaloe.github.io/devfolio/

## Visit link for usage
https://ultimatefaloe.github.io/frontend-development-fundamentals-v1/
---

# PART 1 — HTML

## What is HTML?

**HTML** stands for **HyperText Markup Language**.

When you type a web address into your browser, your computer sends a request to a server. The server responds with an HTML file. The browser reads that file and draws the page on your screen.

HTML is **not** a programming language — it does not have logic or calculations. It simply **describes structure and content**.

Think of HTML as the skeleton of a webpage:

- **HTML** = Structure (the bones)
- **CSS** = Appearance (the skin and clothes)
- **JavaScript** = Behaviour (the muscles and brain)

---

## How a Web Page Works

```
You type a URL → Browser sends request → Server sends back HTML file
→ Browser reads HTML → Browser draws the page
```

Every website you have ever visited is built with HTML at its core.

---

## HTML Document Structure

Every HTML file must start with this boilerplate:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
</head>
<body>
  <!-- Everything visible goes here -->
</body>
</html>
```

**What each line means:**

| Line | Purpose |
|---|---|
| `<!DOCTYPE html>` | Tells the browser: this is an HTML5 document |
| `<html lang="en">` | Root element. `lang="en"` helps screen readers and search engines |
| `<head>` | Invisible metadata — title, links to CSS, character settings |
| `<meta charset="UTF-8">` | Supports all characters including special symbols (é, ñ, ₦) |
| `<meta name="viewport" ...>` | Makes the page work correctly on mobile screens |
| `<title>` | Text shown in the browser tab |
| `<body>` | Everything the user actually sees goes here |

**In DevFolio we use:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DevFolio | Alex — Front-End Developer</title>
  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/global.css">
  <link rel="stylesheet" href="css/home.css">
</head>
<body>
  ...
  <script src="js/main.js"></script>
</body>
</html>
```

---

## Tags, Elements, and Attributes

### Tags

An HTML **tag** is a keyword wrapped in angle brackets: `< >`.

Most tags come in **pairs** — an opening tag and a closing tag:
```html
<tagname>content goes here</tagname>
```

Some tags are **self-closing** — they have no content inside:
```html
<img src="photo.jpg" alt="A photo">
<br>
<hr>
<input type="text">
```

### Elements

An **element** is the complete unit: the opening tag + content + closing tag.

```html
<p>This is a paragraph element.</p>
```

Elements can be **nested** inside each other:
```html
<section>
  <h2>About Me</h2>
  <p>I love coding.</p>
</section>
```

### Attributes

**Attributes** give extra information about an element. They go inside the opening tag:

```html
<tagname attribute="value">content</tagname>
```

Examples:
```html
<a href="contact.html">Contact Me</a>
<img src="assets/avatar.jpg" alt="Profile photo" width="300" height="300">
<input type="email" id="email" required placeholder="you@example.com">
<div class="hero-section" id="hero" data-reveal>
```

Common attributes:

| Attribute | Purpose |
|---|---|
| `class` | CSS styling target (can be shared by many elements) |
| `id` | Unique identifier for one element (used in CSS and JS) |
| `href` | Link destination (used on `<a>`) |
| `src` | File source (used on `<img>`, `<script>`) |
| `alt` | Alternative text for images (accessibility + SEO) |
| `type` | Input field type (text, email, password, submit…) |
| `placeholder` | Hint text inside an empty input |
| `required` | Makes a form field mandatory |
| `data-*` | Custom attributes you define (e.g. `data-filter="all"`) |
| `target="_blank"` | Opens link in a new tab |
| `rel="noopener"` | Security: prevents the new tab from accessing your page |

---

## Semantic HTML

HTML5 introduced **semantic tags** — tags whose name describes the PURPOSE of their content, not just how it looks.

### Why Semantics Matter

- Search engines (Google) use them to understand your page
- Screen readers use them to help visually impaired users
- Other developers can read your code more easily

### Semantic vs Non-Semantic

```html
<!-- Non-semantic — says nothing about content -->
<div class="header">
  <div class="nav">...</div>
</div>

<!-- Semantic — self-describing -->
<header>
  <nav>...</nav>
</header>
```

### Key Semantic Tags

| Tag | Meaning |
|---|---|
| `<header>` | Top section of the page or a section — usually holds logo + navigation |
| `<nav>` | Navigation links block |
| `<main>` | The primary content of the page. Use only **once** per page |
| `<section>` | A thematic group of content, usually with a heading |
| `<article>` | Self-contained content (a blog post, a product card) |
| `<aside>` | Content tangentially related to the main content (sidebar) |
| `<footer>` | Bottom section — copyright, links, contact info |
| `<figure>` | Wraps an image with its caption |
| `<figcaption>` | Caption for a `<figure>` |

**In DevFolio we use:**
```html
<header id="site-header">      ← Fixed navigation bar
  <nav id="main-nav">...</nav>
</header>

<main>
  <section id="hero">...</section>
  <section id="about">...</section>
  <section id="skills">...</section>
</main>

<footer id="site-footer">...</footer>
```

---

## Headings

HTML has six heading levels, from largest to smallest:

```html
<h1>Largest — use only once per page (main topic)</h1>
<h2>Section heading</h2>
<h3>Sub-section heading</h3>
<h4>Sub-sub-section heading</h4>
<h5>Rarely used</h5>
<h6>Rarely used</h6>
```

**Rule:** Use headings in order — never skip from `<h1>` to `<h3>`. Search engines and screen readers depend on this hierarchy.

**In DevFolio:**
```html
<h1 class="hero-title">Hi, I'm <span class="highlight"> Alex</span></h1>
<h2 class="section-title">About Me</h2>
<h2 class="section-title">My Skills</h2>
```

---

## Paragraphs and Text Formatting

```html
<!-- Paragraph -->
<p>I am a passionate front-end developer based in Lagos, Nigeria.</p>

<!-- Bold (semantic — conveys importance) -->
<strong>Important text</strong>

<!-- Italic (semantic — conveys emphasis) -->
<em>Emphasised text</em>

<!-- Strikethrough -->
<s>Old price: ₦5,000</s>

<!-- Superscript and Subscript -->
<p>Area = r<sup>2</sup></p>
<p>H<sub>2</sub>O</p>

<!-- Blockquote — for quoted content -->
<blockquote>"Code is poetry — write it beautifully."</blockquote>

<!-- Horizontal rule — visual divider -->
<hr>

<!-- Line break — use sparingly -->
<br>

<!-- Inline container — for styling a piece of text -->
<p>Hello, my name is <span class="highlight">Alex</span>.</p>
```

**Comments** — invisible in the browser, useful for notes:
```html
<!-- This is a comment. The browser ignores it. -->
<!-- ── HERO SECTION ── -->
```

**Special HTML characters** (HTML entities):

| You write | You get | Use for |
|---|---|---|
| `&copy;` | © | Copyright symbol |
| `&amp;` | & | Ampersand inside HTML |
| `&lt;` | < | Less-than sign in text |
| `&gt;` | > | Greater-than sign in text |
| `&middot;` | · | Middle dot separator |
| `&#9776;` | ☰ | Hamburger menu icon |
| `&#10084;` | ❤ | Heart symbol |
| `&#8594;` | → | Right arrow |

**In DevFolio:**
```html
<p>&copy; <span class="footer-year"></span> DevFolio. Built with &#10084;</p>
<button id="menu-toggle">&#9776;</button>
```

---

## Lists

### Unordered List (bullet points)

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

### Ordered List (numbered)

```html
<ol>
  <li>Plan your layout</li>
  <li>Write the HTML</li>
  <li>Add CSS styles</li>
  <li>Add JavaScript</li>
</ol>
```

### Definition List

```html
<dl>
  <dt>API</dt>
  <dd>Application Programming Interface — a way for programs to talk to each other</dd>
  <dt>DOM</dt>
  <dd>Document Object Model — the browser's representation of your HTML as objects</dd>
</dl>
```

**In DevFolio** the nav links and skill tags are both `<ul>` with custom styling to remove bullets:
```html
<ul class="nav-links">
  <li><a href="index.html">Home</a></li>
  <li><a href="projects.html">Projects</a></li>
</ul>

<ul class="skills-list">
  <li class="skill-tag">HTML5</li>
  <li class="skill-tag">CSS3</li>
</ul>
```

---

## Links

The `<a>` (anchor) tag creates a link.

```html
<!-- Internal link — another page in your project -->
<a href="contact.html">Contact Me</a>

<!-- External link — opens in new tab -->
<a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>

<!-- Anchor link — jumps to a section on the same page -->
<a href="#about">Learn More</a>
...
<section id="about">...</section>

<!-- Email link — opens the user's email client -->
<a href="mailto:hello@devfolio.com">Send Email</a>

<!-- Phone link -->
<a href="tel:+2348012345678">Call Us</a>
```

**Important:** Always add `rel="noopener"` when using `target="_blank"`. Without it, the new tab can access and modify your page — a security risk.

---

## Images

```html
<img src="assets/avatar.jpg" alt="Alex — Front-End Developer" width="320" height="320">
```

| Attribute | Why It Matters |
|---|---|
| `src` | Path to the image file |
| `alt` | Description for screen readers and when image fails to load. **Never skip this.** |
| `width` + `height` | Prevent page "jump" while the image loads |

**Responsive image** — CSS controls the actual display size:
```html
<img src="assets/avatar.jpg" alt="Profile photo" width="320" height="320" class="avatar">
```
```css
.avatar { width: 100%; max-width: 280px; height: auto; }
```

---

## Tables

Tables display data in rows and columns. Use them for **data**, not for layout.

```html
<table>
  <caption>Skills & Proficiency</caption>
  <thead>
    <tr>
      <th>Skill</th>
      <th>Level</th>
      <th>Years</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HTML</td>
      <td>Expert</td>
      <td>4</td>
    </tr>
    <tr>
      <td>CSS</td>
      <td>Advanced</td>
      <td>3</td>
    </tr>
    <tr>
      <td colspan="2">Overall</td>
      <td>4+</td>
    </tr>
  </tbody>
</table>
```

| Tag | Purpose |
|---|---|
| `<table>` | Wraps the whole table |
| `<caption>` | Title/description of the table |
| `<thead>` | Header rows group |
| `<tbody>` | Body rows group |
| `<tr>` | Table Row |
| `<th>` | Table Header cell (bold, centered by default) |
| `<td>` | Table Data cell |
| `colspan="2"` | Cell spans 2 columns |
| `rowspan="2"` | Cell spans 2 rows |

---

## Forms

Forms collect input from the user.

```html
<form id="contact-form" action="#" method="POST" novalidate>

  <!-- Text input -->
  <label for="name">Full Name</label>
  <input type="text" id="name" name="name" required placeholder="e.g. Amaka Obi">

  <!-- Email input -->
  <label for="email">Email Address</label>
  <input type="email" id="email" name="email" required placeholder="you@example.com">

  <!-- Password -->
  <input type="password" id="password" name="password">

  <!-- Number -->
  <input type="number" id="age" name="age" min="16" max="99">

  <!-- Checkbox -->
  <input type="checkbox" id="terms" name="terms">
  <label for="terms">I agree to the terms</label>

  <!-- Radio buttons -->
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">Male</label>
  <input type="radio" id="female" name="gender" value="female">
  <label for="female">Female</label>

  <!-- Dropdown -->
  <label for="service">Service Needed</label>
  <select id="service" name="service">
    <option value="">— Choose a service —</option>
    <option value="website">Website Design</option>
    <option value="webapp">Web Application</option>
    <option value="other">Other</option>
  </select>

  <!-- Textarea (multi-line text) -->
  <label for="message">Message</label>
  <textarea id="message" name="message" rows="5" required></textarea>

  <!-- Submit button -->
  <button type="submit">Send Message</button>

</form>
```

**Key points:**
- `<label for="id">` connects the label to its input — clicking the label focuses the input (accessibility)
- `novalidate` on the form disables the browser's built-in validation so we can write our own with JavaScript
- `required` — field must be filled before the form submits
- `name` — the key sent to the server when the form is submitted
- `id` — used by JavaScript to read the value

**In DevFolio** `contact.html` uses: text, email, select, and textarea inputs, with JavaScript handling the validation.

---

## Media — Audio, Video, Iframe

```html
<!-- Video -->
<video src="assets/demo.mp4" controls width="640" height="360">
  Your browser does not support video.
</video>

<!-- Audio -->
<audio src="assets/intro.mp3" controls></audio>

<!-- Iframe — embed a YouTube video or Google Maps -->
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  width="560" height="315"
  allowfullscreen
  title="Demo Video">
</iframe>
```

---

# PART 2 — CSS

## What is CSS?

**CSS** stands for **Cascading Style Sheets**. It controls the **visual presentation** of your HTML.

Without CSS, every webpage would be plain black text on a white background. CSS adds colours, fonts, spacing, layout, animations, and responsive behaviour.

**"Cascading"** means styles flow from parent to child, and more specific rules override less specific ones.

---

## Three Ways to Add CSS

```html
<!-- 1. External stylesheet — BEST. One file styles every page -->
<link rel="stylesheet" href="css/style.css">

<!-- 2. Internal — only affects this page -->
<style>
  body { background-color: red; }
</style>

<!-- 3. Inline — avoid. Hard to maintain, highest specificity -->
<p style="color: red;">This is bad practice.</p>
```

**In DevFolio** we always use external stylesheets, split across multiple files for organisation.

---

## CSS Syntax

```css
selector {
  property: value;
  property: value;
}
```

Example:
```css
h1 {
  color: #6366F1;
  font-size: 2.5rem;
  font-weight: 700;
}
```

---

## Selectors

Selectors target which HTML elements your styles apply to.

```css
/* Type selector — targets all <p> elements */
p { color: #94A3B8; }

/* Class selector — targets any element with class="btn" */
.btn { padding: 12px 28px; }

/* ID selector — targets the ONE element with id="hero" */
#hero { min-height: 100vh; }

/* Descendant selector — targets <a> inside .nav-links */
.nav-links a { color: #94A3B8; }

/* Child selector — targets direct <li> children of <ul> */
ul > li { margin-bottom: 8px; }

/* Attribute selector — targets inputs with type="email" */
input[type="email"] { border-color: #6366F1; }

/* Universal selector — targets everything */
* { box-sizing: border-box; }

/* Grouping — apply same rules to multiple selectors */
h1, h2, h3 { font-family: 'Poppins', sans-serif; }
```

---

## Pseudo-classes

Pseudo-classes target elements in a specific **state**.

```css
/* Hover — when the mouse is over the element */
.btn:hover { background: #4338CA; transform: translateY(-2px); }

/* Focus — when an input is selected */
input:focus { border-color: #6366F1; }

/* Active — while being clicked */
.btn:active { transform: translateY(0); }

/* First and last child */
li:first-child { margin-top: 0; }
li:last-child  { margin-bottom: 0; }

/* Every even child */
.skill-tag:nth-child(even) { background: rgba(99,102,241,0.2); }

/* A link that has not been visited */
a:link { color: #6366F1; }

/* A link that has been visited */
a:visited { color: #8B5CF6; }
```

---

## Pseudo-elements

Pseudo-elements target a specific **part** of an element.

```css
/* Content before the element */
.highlight::before { content: "★ "; color: #6366F1; }

/* Content after the element — used for decorative underlines */
.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: #6366F1;
  margin-top: 8px;
  border-radius: 2px;
}

/* First letter */
p::first-letter { font-size: 2em; font-weight: 700; }
```

**In DevFolio** we use `::after` to draw the indigo underline below every section title.

---

## Specificity

When two rules target the same element, **specificity** decides which one wins.

| Selector Type | Specificity Points |
|---|---|
| Inline style (`style="..."`) | 1000 |
| ID (`#hero`) | 100 |
| Class (`.btn`), pseudo-class (`:hover`), attribute (`[type]`) | 10 |
| Type (`p`, `h1`), pseudo-element (`::after`) | 1 |
| Universal (`*`) | 0 |

```css
p          { color: black; }   /* specificity: 1 */
.text      { color: blue;  }   /* specificity: 10 — wins */
#main-text { color: red;   }   /* specificity: 100 — wins over both */
```

**Tip:** Rely mostly on classes. Avoid IDs in CSS. Never use `!important` unless absolutely necessary.

---

## The Box Model

Every HTML element is a rectangular box with four layers:

```
┌─────────────────────────────────┐
│            MARGIN               │  ← Space outside the element
│  ┌───────────────────────────┐  │
│  │         BORDER            │  │  ← Optional visible border
│  │  ┌─────────────────────┐  │  │
│  │  │      PADDING        │  │  │  ← Space inside the element
│  │  │  ┌───────────────┐  │  │  │
│  │  │  │   CONTENT     │  │  │  │  ← Text, image, etc.
│  │  │  └───────────────┘  │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

**Always start every stylesheet with:**
```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

This makes `width` and `height` include padding and border — predictable and correct.

Without it, `width: 200px` + `padding: 20px` = 240px total (unexpected).  
With it, `width: 200px` + `padding: 20px` = 200px total (as expected).

---

## Margin and Padding

```css
/* All four sides */
margin: 20px;
padding: 20px;

/* Top/Bottom, Left/Right */
margin: 80px 24px;    /* 80px top & bottom, 24px left & right */
padding: 18px 24px;

/* Individual sides */
margin-top: 16px;
margin-right: 0;
margin-bottom: 32px;
margin-left: 0;

/* Auto margin — centres a block element horizontally */
.section-inner {
  max-width: 1100px;
  margin: 0 auto;   /* 0 top & bottom, auto left & right */
}
```

---

## Borders

```css
/* Shorthand: width style color */
border: 2px solid #6366F1;
border-bottom: 1px solid rgba(99, 102, 241, 0.2);
border-radius: 12px;        /* Rounds corners */
border-radius: 50%;         /* Makes a circle */
border-radius: 999px;       /* Pill shape (very large value) */
border-top: none;
```

---

## Width and Height

```css
width: 300px;          /* Fixed pixel width */
width: 100%;           /* Full width of parent */
max-width: 1100px;     /* Never wider than 1100px */
min-width: 280px;      /* Never narrower than 280px */

height: 200px;
height: 100vh;         /* Full viewport height */
min-height: 100vh;     /* At least full viewport height */

/* clamp(min, preferred, max) — responsive without media queries */
font-size: clamp(2rem, 5vw, 3.5rem);
/* At least 2rem, prefers 5% of viewport width, never more than 3.5rem */
```

---

## Colors, Backgrounds, Fonts

### Colors

```css
/* Hex — most common */
color: #6366F1;
color: #fff;            /* Short for #ffffff */

/* RGB */
color: rgb(99, 102, 241);

/* RGBA — with transparency (0 = invisible, 1 = solid) */
color: rgba(99, 102, 241, 0.2);

/* HSL */
color: hsl(239, 84%, 67%);
```

### Backgrounds

```css
background-color: #0F172A;
background-color: transparent;

/* Image */
background-image: url('assets/hero-bg.jpg');
background-size: cover;      /* Fills the area, may crop */
background-position: center;
background-repeat: no-repeat;

/* Gradient */
background: linear-gradient(135deg, #6366F1 0%, #1E293B 100%);
background: radial-gradient(circle, #6366F1, #1E293B);

/* Overlay with semi-transparent colour */
background: rgba(15, 23, 42, 0.95);
```

### Fonts and Typography

```css
/* Import from Google Fonts in your <head> */
/* <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet"> */

body {
  font-family: 'Poppins', sans-serif;  /* Your font, with fallback */
  font-size: 16px;                     /* Base size */
  font-weight: 400;                    /* 400=normal, 700=bold */
  line-height: 1.7;                    /* Space between lines */
}

h1 { font-size: 3.5rem; font-weight: 700; }
p  { font-size: 1rem;   font-weight: 400; }

/* Text properties */
text-align: center;          /* left | right | center | justify */
text-transform: uppercase;   /* uppercase | lowercase | capitalize */
text-decoration: none;       /* removes underline from links */
letter-spacing: 2px;         /* space between characters */
text-shadow: 0 2px 8px rgba(0,0,0,0.3);
```

---

## CSS Custom Properties (Variables)

CSS variables let you define a value once and reuse it everywhere. Change it in one place and it updates everywhere.

```css
/* Define variables on :root (the <html> element) */
:root {
  --color-primary: #6366F1;
  --color-dark:    #0F172A;
  --color-card:    #1E293B;
  --color-text:    #E2E8F0;
  --color-muted:   #94A3B8;
  --radius:        12px;
  --shadow:        0 4px 24px rgba(0,0,0,0.3);
  --transition:    0.3s ease;
  --max-width:     1100px;
}

/* Use variables with var() */
.btn-primary {
  background: var(--color-primary);
  border-radius: var(--radius);
  transition: all var(--transition);
}
```

**In DevFolio** all values are defined in `css/variables.css` and consumed with `var(--*)` throughout every other CSS file. Change one value in `variables.css` and the whole site updates.

---

## Display

Every element has a default `display` value. You can change it.

```css
/* Block — takes full width, starts on new line */
display: block;   /* default for: div, p, h1-h6, section, header, footer */

/* Inline — only as wide as content, stays in text flow */
display: inline;  /* default for: span, a, strong, em */

/* Inline-block — inline but accepts width/height */
display: inline-block;

/* Flex — activates flexbox layout */
display: flex;

/* Grid — activates CSS Grid layout */
display: grid;

/* None — hides the element completely (removes from flow) */
display: none;
```

---

## Flexbox

Flexbox makes **one-dimensional layouts** easy (either a row OR a column).

```css
.container {
  display: flex;
  flex-direction: row;        /* row (default) | column */
  justify-content: space-between; /* main axis alignment */
  align-items: center;        /* cross axis alignment */
  flex-wrap: wrap;            /* allow items to wrap to next line */
  gap: 24px;                  /* space between items */
}

/* justify-content values */
/* flex-start | flex-end | center | space-between | space-around | space-evenly */

/* align-items values */
/* flex-start | flex-end | center | stretch | baseline */

/* Child item properties */
.item {
  flex: 1;        /* grow equally to fill space */
  flex-shrink: 0; /* don't shrink even if space is tight */
}
```

**In DevFolio we use flexbox for:**
- The navbar (logo on left, links on right): `justify-content: space-between`
- The hero section (text on left, image on right)
- Skill tags (wrapping row of pills): `flex-wrap: wrap`
- CTA buttons (side by side): `display: flex; gap: 16px`
- The footer links (centred row)

```css
/* DevFolio navbar */
#main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 24px;
}
```

---

## CSS Grid

CSS Grid makes **two-dimensional layouts** easy (rows AND columns).

```css
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  /* auto-fit: as many columns as fit
     minmax(280px, 1fr): each column is at least 280px, grows equally */
  gap: 24px;
}

/* Fixed columns */
.grid-3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;  /* three equal columns */
  /* or: repeat(3, 1fr) */
  gap: 16px;
}

/* Span multiple columns */
.full-width {
  grid-column: 1 / -1;  /* spans from first to last column */
}
```

**In DevFolio** the projects grid and blog grid both use `auto-fit` + `minmax` — one column on mobile, multiple columns on wider screens, with no media query needed.

---

## Positioning

```css
/* Static — default. Follows normal document flow */
position: static;

/* Relative — positioned relative to its normal position */
position: relative;
top: 10px;   /* moves it down 10px from where it would normally be */

/* Absolute — removed from flow, positioned relative to nearest positioned ancestor */
position: absolute;
top: 12px;
right: 12px;
/* Parent must have position: relative for this to work */

/* Fixed — removed from flow, positioned relative to the VIEWPORT */
position: fixed;
top: 0;
width: 100%;   /* used for the sticky navbar */

/* Sticky — stays in flow until you scroll past it, then becomes fixed */
position: sticky;
top: 0;
```

**In DevFolio:**
```css
/* Fixed navbar stays at top while scrolling */
#site-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;  /* stays above other content */
}
```

---

## Transitions

Transitions make CSS property changes **animate smoothly** instead of jumping.

```css
.btn {
  background: #6366F1;
  transform: translateY(0);
  /* transition: property duration timing-function */
  transition: background 0.3s ease, transform 0.2s ease;
  /* or: transition all 0.3s ease; */
}

.btn:hover {
  background: #4338CA;
  transform: translateY(-2px);  /* lifts up 2px on hover */
}
```

**Timing functions:**
- `ease` — starts fast, slows down (most natural)
- `linear` — constant speed
- `ease-in` — starts slow, ends fast
- `ease-out` — starts fast, ends slow
- `ease-in-out` — slow at both ends

**In DevFolio** every interactive element (buttons, cards, nav links, inputs) uses `transition: all var(--transition)` where `--transition: 0.3s ease`.

---

## Animations with @keyframes

For more complex animations that run automatically (not just on hover).

```css
/* Define the animation */
@keyframes blink {
  0%   { opacity: 1; }
  50%  { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes slideIn {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0);    }
}

/* Apply the animation */
.cursor {
  animation: blink 1s step-end infinite;
  /* name | duration | timing | iteration-count */
}

.hero-section {
  animation: slideIn 0.8s ease forwards;
  /* forwards = keeps the final state after animation ends */
}
```

**Common `animation` properties:**

| Property | Values |
|---|---|
| `animation-name` | Name of your `@keyframes` |
| `animation-duration` | `0.5s`, `1s`, `2s` |
| `animation-timing-function` | `ease`, `linear`, `ease-in-out` |
| `animation-iteration-count` | `1`, `3`, `infinite` |
| `animation-direction` | `normal`, `reverse`, `alternate` |
| `animation-fill-mode` | `forwards`, `backwards`, `both` |
| `animation-delay` | `0.2s` — wait before starting |

**In DevFolio** we use:
- `@keyframes blink` for the blinking cursor in the hero typing animation
- CSS `[data-reveal]` transition triggered by JavaScript's `IntersectionObserver`

---

## Responsive Design with Media Queries

**Responsive design** means your website looks good on all screen sizes — phone, tablet, desktop.

```css
/* Mobile-first: write base styles for mobile, then override for larger screens */

/* Desktop and up */
@media (min-width: 1024px) {
  .hero-section { flex-direction: row; }
}

/* Tablet and below */
@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
  }
  .hero-cta {
    justify-content: center;
  }
  #menu-toggle {
    display: block;  /* show hamburger button */
  }
  .nav-links {
    display: none;   /* hide nav links on mobile */
  }
  .nav-links.open {
    display: flex;   /* show when JS adds .open class */
  }
}

/* Small phones */
@media (max-width: 480px) {
  .avatar-placeholder { width: 160px; height: 160px; }
}
```

**Common breakpoints:**

| Breakpoint | Target |
|---|---|
| ≤ 480px | Small phones |
| ≤ 768px | Tablets and large phones |
| ≤ 1024px | Small laptops |
| > 1024px | Desktop |

---

## Backdrop Filter and Z-index

```css
/* Blur effect — creates a frosted glass look */
#site-header {
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
}

/* Z-index — stacking order (higher number = on top) */
#site-header { z-index: 100; }  /* navbar stays above everything */
.modal        { z-index: 200; }  /* modal above navbar */
```

---

# PART 3 — JAVASCRIPT

## What is JavaScript?

**JavaScript** is the only programming language that runs natively in a browser. While HTML structures the page and CSS styles it, JavaScript makes it **interactive** and **dynamic**.

JavaScript can:
- Respond to user actions (clicks, typing, scrolling)
- Change the HTML and CSS on the page without reloading
- Fetch data from the internet
- Validate form input
- Animate elements
- Store data locally in the browser

---

## Three Ways to Add JavaScript

```html
<!-- 1. Inline — avoid. Hard to maintain -->
<button onclick="alert('Hello!')">Click me</button>

<!-- 2. Internal — ok for quick tests only -->
<script>
  console.log("Hello!");
</script>

<!-- 3. External — BEST. Place before </body> -->
<script src="js/main.js"></script>
```

**Always place `<script>` at the bottom of `<body>`, just before `</body>`.** This ensures the HTML is fully loaded before JavaScript runs.

---

## Your First JavaScript

```js
// console.log — prints a message to the browser DevTools console
// Press F12 → Console tab to see it
console.log("Hello, DevFolio!");

// alert — shows a popup (avoid in production)
alert("Welcome!");

// prompt — shows a popup asking for input
const name = prompt("What is your name?");
console.log("Hello,", name);
```

---

## Variables

Variables store data. There are three keywords:

```js
// const — value cannot be reassigned. Use this by default.
const siteName = "DevFolio";
const maxWidth = 1100;

// let — value CAN be reassigned. Use when the value will change.
let visitCount = 0;
visitCount = visitCount + 1;  // now 1
visitCount++;                 // shorthand for +1

// var — old way. Avoid. Use const and let instead.
var oldStyle = "avoid this";
```

**Rule of thumb:** Use `const` everywhere. Switch to `let` only when you know the value needs to change. Never use `var`.

---

## Data Types

JavaScript has several built-in data types:

```js
// String — text, wrapped in quotes
const name    = "Alex";
const city    = 'Lagos';
const message = `Hello, ${name}!`;  // template literal — variables inside backticks

// Number — integers and decimals
const age     = 25;
const price   = 99.5;
const pi      = 3.14159;

// Boolean — true or false only
const isLoggedIn = true;
const isDarkMode = false;

// Null — intentional "no value"
const selectedProject = null;

// Undefined — variable declared but not yet assigned
let currentUser;
console.log(currentUser);  // undefined

// Object — a collection of key-value pairs
const developer = {
  name:   "Alex",
  city:   "Lagos",
  skills: ["HTML", "CSS", "JavaScript"],
  yearsExp: 3
};

// Array — an ordered list of values
const skills = ["HTML", "CSS", "JavaScript", "React"];

// Check the type of a value
console.log(typeof "Alex");     // "string"
console.log(typeof 42);         // "number"
console.log(typeof true);       // "boolean"
console.log(typeof {});         // "object"
console.log(typeof []);         // "object" (arrays are objects)
console.log(typeof null);       // "object" (a known JavaScript quirk)
console.log(typeof undefined);  // "undefined"
```

---

## Strings

```js
const name = "devfolio";

// String methods
name.length               // 8
name.toUpperCase()        // "DEVFOLIO"
name.toLowerCase()        // "devfolio"
name.includes("folio")    // true
name.startsWith("dev")    // true
name.endsWith("io")       // true
name.indexOf("f")         // 3 (position of first "f")
name.slice(0, 3)          // "dev" (characters 0, 1, 2)
name.replace("dev", "my") // "myfolio"
name.trim()               // removes whitespace from both ends
name.split("")            // ["d","e","v","f","o","l","i","o"]

// Template literals — embed variables and expressions
const greeting = `Hello, ${name}! You have ${2 + 3} messages.`;
console.log(greeting);    // "Hello, devfolio! You have 5 messages."

// String concatenation (old way — prefer template literals)
const msg = "Hello, " + name + "!";
```

---

## Numbers and Math

```js
const a = 10, b = 3;

a + b   // 13
a - b   // 7
a * b   // 30
a / b   // 3.3333...
a % b   // 1 (remainder — "modulo")
a ** b  // 1000 (exponent — 10 to the power of 3)

// Math object
Math.round(4.7)     // 5
Math.floor(4.9)     // 4  (rounds down always)
Math.ceil(4.1)      // 5  (rounds up always)
Math.abs(-15)       // 15 (absolute value)
Math.max(1, 5, 3)   // 5
Math.min(1, 5, 3)   // 1
Math.random()       // random decimal between 0 and 1
Math.sqrt(16)       // 4

// toFixed — control decimal places (returns a string)
(3.14159).toFixed(2)  // "3.14"

// Convert between types
parseInt("42px")     // 42
parseFloat("3.14em") // 3.14
String(100)          // "100"
Number("42")         // 42
```

---

## Arrays

An array is an **ordered list** of values.

```js
const skills = ["HTML", "CSS", "JavaScript", "React"];

// Access by index (starts at 0)
skills[0]       // "HTML"
skills[1]       // "CSS"
skills[3]       // "React"
skills.length   // 4

// Add and remove
skills.push("Node.js")   // adds to END → ["HTML","CSS","JS","React","Node.js"]
skills.pop()             // removes from END → returns "Node.js"
skills.unshift("Figma")  // adds to START
skills.shift()           // removes from START

// Check if a value exists
skills.includes("CSS")   // true

// Find the position of a value
skills.indexOf("CSS")    // 1

// Slice — extract a portion (does NOT modify original)
skills.slice(0, 2)       // ["HTML", "CSS"]

// Join — convert array to string
skills.join(", ")        // "HTML, CSS, JavaScript, React"
```

### Higher-Order Array Methods

These are the most important methods in modern JavaScript:

```js
const projects = [
  { title: "Portfolio", category: "html", year: 2024 },
  { title: "Quiz App",  category: "js",   year: 2024 },
  { title: "Blog",      category: "js",   year: 2025 },
];

// forEach — loop through every item, return nothing
projects.forEach(p => console.log(p.title));
// "Portfolio", "Quiz App", "Blog"

// map — transform every item, return NEW array
const titles = projects.map(p => p.title);
// ["Portfolio", "Quiz App", "Blog"]

// filter — keep only items that match, return NEW array
const jsProjects = projects.filter(p => p.category === "js");
// [{ title: "Quiz App" ... }, { title: "Blog" ... }]

// find — return the FIRST item that matches
const blog = projects.find(p => p.title === "Blog");
// { title: "Blog", category: "js", year: 2025 }

// some — true if AT LEAST ONE item matches
projects.some(p => p.year === 2025)  // true

// every — true if ALL items match
projects.every(p => p.year === 2024) // false

// reduce — collapse array to a single value
const years = [2024, 2024, 2025];
const sum = years.reduce((total, y) => total + y, 0);  // 6073
```

**In DevFolio** `projects.js` uses both `.map()` to render cards and `.filter()` to show only the selected category:
```js
const filtered = PROJECTS.filter(p => p.category === "js");
renderProjects(filtered);
```

---

## Objects

An object groups related data under named keys.

```js
const project = {
  id:       1,
  title:    "Portfolio Site",
  desc:     "A responsive portfolio built with HTML & CSS.",
  tags:     ["html", "css"],
  live:     "https://devfolio.com",
  category: "html"
};

// Access values
project.title           // "Portfolio Site" (dot notation)
project["title"]        // "Portfolio Site" (bracket notation — use with variables)

const key = "title";
project[key]            // "Portfolio Site"

// Update a value
project.title = "My Portfolio";

// Add a new property
project.github = "https://github.com/alex";

// Check if a key exists
"title" in project      // true

// Object methods
Object.keys(project)    // ["id", "title", "desc", "tags", "live", "category"]
Object.values(project)  // [1, "Portfolio Site", ...]
Object.entries(project) // [["id", 1], ["title", "Portfolio Site"], ...]
```

### Destructuring — Extract values cleanly

```js
// Without destructuring
const title    = project.title;
const category = project.category;

// With destructuring — much cleaner
const { title, category, tags } = project;
console.log(title);     // "Portfolio Site"
console.log(category);  // "html"

// Array destructuring
const [first, second] = skills;
console.log(first);   // "HTML"
console.log(second);  // "CSS"
```

### Spread Operator — Copy and merge

```js
// Copy an array
const copy = [...skills];

// Merge two arrays
const allProjects = [...webProjects, ...jsProjects];

// Copy an object (immutable update pattern)
const updated = { ...project, title: "New Title", year: 2025 };
// project is unchanged; updated has the new values
```

---

## Conditionals

```js
const hour = new Date().getHours();  // 0–23

// if / else if / else
if (hour < 12) {
  console.log("Good morning!");
} else if (hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

// Ternary — shorthand for simple if/else
const greeting = hour < 18 ? "Good day" : "Good evening";

// Logical operators
true && true    // true (AND — both must be true)
true || false   // true (OR — at least one must be true)
!true           // false (NOT — inverts)

// Truthy and Falsy
// Falsy values: false, 0, "", null, undefined, NaN
// Everything else is truthy
if (!name) console.log("Name is empty");
if (email) console.log("Email exists");

// Short-circuit evaluation
const displayName = name || "Anonymous";  // uses "Anonymous" if name is falsy

// Nullish coalescing — only falls back for null/undefined (not 0 or "")
const count = data.count ?? 0;
```

**In DevFolio:**
```js
// Time-based greeting in main.js
const greeting = hour < 12 ? "Good morning, I'm"
               : hour < 18 ? "Good afternoon, I'm"
               :             "Good evening, I'm";
```

---

## Loops

```js
// for loop — classic
for (let i = 0; i < skills.length; i++) {
  console.log(skills[i]);
}

// forEach — modern, cleaner for arrays
skills.forEach((skill, index) => {
  console.log(`${index + 1}. ${skill}`);
});

// for...of — loop over array values
for (const skill of skills) {
  console.log(skill);
}

// for...in — loop over object keys
for (const key in project) {
  console.log(key, project[key]);
}

// while loop
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}
```

---

## Functions

```js
// Function declaration — can be called before it's defined
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alex"));  // "Hello, Alex!"

// Function expression — assigned to a variable
const double = function(n) {
  return n * 2;
};

// Arrow function — shorter syntax, most common in modern JS
const double = n => n * 2;
const add    = (a, b) => a + b;

// Arrow function with multiple lines
const renderCard = (project) => {
  const card = document.createElement("article");
  card.innerHTML = `<h3>${project.title}</h3>`;
  return card;
};

// Default parameters
function greet(name = "Visitor") {
  return `Hello, ${name}!`;
}
greet()        // "Hello, Visitor!"
greet("Alex")  // "Hello, Alex!"

// Rest parameters — gather remaining arguments into an array
function logAll(first, ...rest) {
  console.log("First:", first);
  console.log("Others:", rest);
}
logAll("a", "b", "c");  // First: "a", Others: ["b", "c"]

// IIFE — Immediately Invoked Function Expression
// Runs immediately and keeps variables private
(function init() {
  console.log("This runs immediately");
})();
```

---

## DOM Manipulation

**DOM** = Document Object Model. The browser turns your HTML into a tree of JavaScript objects that you can read and change with code.

### Selecting Elements

```js
// Select ONE element — returns the first match
const hero    = document.getElementById("hero");
const btn     = document.querySelector(".btn");        // CSS selector
const firstLi = document.querySelector("ul li");

// Select ALL matching elements — returns a NodeList
const allBtns  = document.querySelectorAll(".btn");
const sections = document.querySelectorAll("section[id]");

// Loop over a NodeList
allBtns.forEach(btn => btn.classList.add("active"));
```

### Reading and Changing Content

```js
const el = document.getElementById("hero-greeting");

// Read and set text content
el.textContent          // "Hi, I'm"
el.textContent = "Good morning, I'm";

// Read and set HTML content (use with caution — XSS risk with user input)
el.innerHTML            // "<span>Hi</span>"
el.innerHTML = "<strong>Hello!</strong>";
```

### Changing Styles and Classes

```js
const header = document.getElementById("site-header");

// Directly change a CSS property
header.style.backgroundColor = "#0F172A";
header.style.boxShadow = "0 4px 24px rgba(0,0,0,0.3)";

// classList — the right way to toggle CSS
header.classList.add("scrolled");       // adds class
header.classList.remove("scrolled");    // removes class
header.classList.toggle("scrolled");    // adds if absent, removes if present
header.classList.contains("scrolled")  // true/false — check if class exists

// Toggle with a condition
header.classList.toggle("scrolled", window.scrollY > 50);
// adds "scrolled" if scrollY > 50, removes it if not
```

### Reading and Setting Attributes

```js
const img = document.querySelector("img");

img.getAttribute("src")             // "assets/avatar.jpg"
img.setAttribute("alt", "New alt")  // change the alt text
img.hasAttribute("required")        // true/false

// data-* attributes
const btn = document.querySelector("[data-filter]");
btn.dataset.filter   // "all"  (reads data-filter attribute)
```

### Creating and Adding New Elements

```js
// Create a new element
const card = document.createElement("article");
card.className = "project-card";
card.innerHTML = `<h3>New Project</h3><p>Description here</p>`;

// Add it to the DOM
document.getElementById("projects-grid").appendChild(card);

// innerHTML on a container — replace all children at once
const grid = document.getElementById("projects-grid");
grid.innerHTML = PROJECTS.map(p => `
  <article class="project-card">
    <h3>${p.title}</h3>
  </article>
`).join("");
```

---

## Events

Events let you respond to user actions.

```js
// addEventListener — the correct way
const btn = document.querySelector(".btn-primary");

btn.addEventListener("click", function(event) {
  console.log("Button clicked!", event);
});

// Arrow function shorthand
btn.addEventListener("click", (e) => {
  console.log("Clicked:", e.target);
});
```

### Common Events

```js
// Click
btn.addEventListener("click", () => { /* ... */ });

// Keyboard events
document.addEventListener("keydown", (e) => {
  console.log(e.key);          // "Enter", "Escape", "a", "ArrowUp"...
  if (e.key === "Escape") { /* close modal */ }
});

// Scroll
window.addEventListener("scroll", () => {
  console.log(window.scrollY);  // pixels scrolled from top
});

// Form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();  // stops the form from reloading the page
  // validate and process
});

// Input — fires on every keystroke
input.addEventListener("input", (e) => {
  console.log(e.target.value);
});

// Change — fires when input loses focus with a changed value
select.addEventListener("change", (e) => {
  console.log(e.target.value);
});

// Page load
document.addEventListener("DOMContentLoaded", () => {
  // runs when HTML is fully parsed
});
```

### The Event Object

```js
btn.addEventListener("click", (e) => {
  e.preventDefault()          // stops default action (form submit, link navigate)
  e.stopPropagation()         // stops event bubbling up to parent elements
  e.target                    // the element that was actually clicked
  e.currentTarget             // the element the listener is attached to
  e.key                       // which keyboard key (for keydown events)
  e.clientX, e.clientY        // mouse position relative to viewport
});
```

### Event Delegation

Instead of adding a listener to every button, add ONE listener to their parent and check what was clicked:

```js
// Instead of: adding click listener to every .filter-btn
// We do: ONE listener on the parent
document.getElementById("filter-bar").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;  // clicked something that isn't a filter button — ignore

  // Now btn is the actual button that was clicked
  const filter = btn.dataset.filter;
  console.log("Filter:", filter);
});
```

**Benefits:** Works even for elements added after the page loads. One listener instead of many.

---

## Form Validation

```js
const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();  // stop form from refreshing the page

  // Read input values
  const name    = document.getElementById("name").value.trim();
  const email   = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validate
  let hasErrors = false;

  if (!name) {
    document.getElementById("name-error").textContent = "Please enter your name.";
    hasErrors = true;
  } else {
    document.getElementById("name-error").textContent = "";
  }

  if (!email || !email.includes("@")) {
    document.getElementById("email-error").textContent = "Please enter a valid email.";
    hasErrors = true;
  }

  if (message.length < 10) {
    document.getElementById("message-error").textContent = "Message must be at least 10 characters.";
    hasErrors = true;
  }

  if (!hasErrors) {
    // Form is valid — process it
    console.log("Form submitted:", { name, email, message });
    form.reset();  // clear all inputs
  }
});
```

---

## Working with Dates

```js
const now = new Date();

now.getFullYear()    // 2026
now.getMonth()       // 0–11 (January = 0!)
now.getDate()        // day of month (1–31)
now.getDay()         // day of week (0=Sunday, 6=Saturday)
now.getHours()       // 0–23
now.getMinutes()     // 0–59

// Auto-set footer year
document.querySelector(".footer-year").textContent = new Date().getFullYear();

// Format a date
now.toLocaleDateString("en-NG", {
  weekday: "long",
  day: "numeric",
  month: "long"
});
// "Sunday, 13 July"
```

---

## setTimeout and setInterval

```js
// setTimeout — run code ONCE after a delay (milliseconds)
setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

// setInterval — run code REPEATEDLY every interval
const timer = setInterval(() => {
  console.log("This runs every second");
}, 1000);

// Stop an interval
clearInterval(timer);

// Stop a timeout before it fires
const t = setTimeout(() => { /* ... */ }, 3000);
clearTimeout(t);
```

**In DevFolio** we use `setTimeout` in the contact form to show success for 1.5 seconds before resetting:
```js
setTimeout(() => {
  document.getElementById("form-success").classList.remove("hidden");
  form.reset();
  submitBtn.textContent = "Send Message";
  submitBtn.disabled = false;
}, 1500);
```

And the typing animation uses `setTimeout` recursively to type each character:
```js
function tick() {
  el.textContent = current.slice(0, cIdx++);
  setTimeout(tick, 100);  // calls itself again after 100ms
}
tick();
```

---

## The Fetch API — Loading Data from the Internet

**AJAX** (Asynchronous JavaScript) lets you load data from a server WITHOUT reloading the page.

`fetch()` is the modern way to do this.

```js
// Basic fetch
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())   // parse the JSON text into a JS object
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
```

### async/await — Cleaner syntax for fetch

`async/await` lets you write asynchronous code that reads like synchronous code.

```js
async function loadPosts() {
  try {
    // await pauses until the fetch completes
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    // Check the response status
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    // await pauses again while JSON is parsed
    const posts = await response.json();

    console.log(posts);      // array of 100 post objects
    console.log(posts[0]);   // { id: 1, title: "...", body: "...", userId: 1 }

    renderPosts(posts);

  } catch (error) {
    // Runs if fetch fails (no internet, server down, etc.)
    console.error("Failed to load:", error);
    document.getElementById("loading").textContent = "Could not load posts.";
  }
}

loadPosts();
```

**In DevFolio** `blog.js` fetches 100 posts from JSONPlaceholder and displays the first 9:
```js
async function loadBlogPosts() {
  try {
    const res   = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const posts = await res.json();
    loadingEl.hidden = true;
    blogGrid.classList.remove("hidden");
    renderPosts(posts);
  } catch (err) {
    loadingEl.textContent = "⚠ Could not load posts. Please try again.";
  }
}
```

### What is JSON?

**JSON** (JavaScript Object Notation) is a text format for sending data over the internet.

```json
[
  {
    "id": 1,
    "title": "My first post",
    "body": "This is the content of the post.",
    "userId": 1
  },
  {
    "id": 2,
    "title": "Another post",
    "body": "More content here.",
    "userId": 1
  }
]
```

`response.json()` converts this text into a real JavaScript array/object you can work with.

---

## IntersectionObserver — Scroll Animations

`IntersectionObserver` lets you detect when an element enters the visible area of the screen (the "viewport").

```js
// Create the observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Element is now visible on screen
      entry.target.classList.add("revealed");
      observer.unobserve(entry.target);  // stop watching (animate only once)
    }
  });
}, {
  threshold: 0.15  // trigger when 15% of the element is visible
});

// Tell the observer which elements to watch
document.querySelectorAll("[data-reveal]").forEach(el => {
  observer.observe(el);
});
```

**In DevFolio** the CSS hides the sections initially:
```css
[data-reveal] { opacity: 0; transform: translateY(30px); transition: 0.6s ease; }
[data-reveal].revealed { opacity: 1; transform: translateY(0); }
```

And the JavaScript adds the `revealed` class when each section scrolls into view, triggering the fade-in animation.

---

## Optional Chaining and Nullish Coalescing

Modern JavaScript safety operators that prevent crashes when values might be null.

```js
// Optional chaining (?.) — safely access nested properties
const city = user?.address?.city;
// Instead of: user && user.address && user.address.city

// Works on methods too
document.getElementById("hero-greeting")?.textContent = "Hello";
// Only sets textContent if the element exists (not null)

// Nullish coalescing (??) — fallback for null or undefined only
const name    = user.name ?? "Anonymous";      // "Anonymous" if null/undefined
const count   = data.count ?? 0;               // 0 if null/undefined (NOT if 0)

// Compare with || (OR) — || also falls back on 0, "", false
const count2  = data.count || 0;   // 0 if null, undefined, 0, "", or false
```

---

## ES6+ Features Summary

These are the modern JavaScript features used throughout DevFolio:

| Feature | What it does | Example |
|---|---|---|
| `const` / `let` | Block-scoped variables | `const x = 5` |
| Arrow functions | Shorter function syntax | `const fn = x => x * 2` |
| Template literals | Embed variables in strings | `` `Hello, ${name}!` `` |
| Destructuring | Unpack arrays/objects | `const { title } = project` |
| Spread operator | Copy/merge arrays+objects | `[...arr1, ...arr2]` |
| Default parameters | Fallback function values | `function greet(name = "Visitor")` |
| Rest parameters | Collect remaining args | `function fn(...args)` |
| Optional chaining | Safe property access | `user?.address?.city` |
| Nullish coalescing | Null/undefined fallback | `name ?? "Default"` |
| `async/await` | Clean async code | `const data = await fetch(url)` |
| `for...of` | Loop array values | `for (const item of arr)` |
| Classes | OOP syntax | `class Animal { }` |
| Modules | Import/export code | `import { fn } from './utils.js'` |

---

## Debugging JavaScript

```js
// 1. console methods
console.log("Value:", x);         // log any value
console.error("Error:", err);     // red error message
console.warn("Warning:", msg);    // yellow warning
console.table(PROJECTS);          // display array as a table
console.group("Section");         // group related logs
console.groupEnd();

// 2. typeof — check the data type
console.log(typeof name);         // "string", "number", "boolean", "object"

// 3. Breakpoints — in DevTools (F12 → Sources)
// Click a line number to pause execution at that point
// Then step through code line by line

// 4. debugger statement — pauses execution here
function processData(data) {
  debugger;  // browser pauses here when DevTools is open
  return data.map(x => x * 2);
}
```

---

## The DevFolio JavaScript Summary

| File | JS Concepts Used |
|---|---|
| `main.js` | `querySelector`, `querySelectorAll`, `addEventListener`, `classList.toggle`, `textContent`, `new Date()`, `getHours`, `getFullYear`, conditionals, template literals, `setTimeout`, `IntersectionObserver`, `async/await` (future), form validation |
| `projects.js` | `const` array of objects, `function`, `.map()`, `.filter()`, template literals, `innerHTML`, `dataset`, event delegation, `closest()` |
| `blog.js` | `async function`, `await`, `fetch()`, `.json()`, `try/catch`, `.slice()`, `hidden`, `classList.remove()`, error handling |

---

## What's Next

After completing this course and building DevFolio, you are ready for:

1. **CSS Frameworks** — Tailwind CSS, Bootstrap (faster styling)
2. **JavaScript Frameworks** — React, Vue (building complex UIs)
3. **Version Control** — Git and GitHub (saving and sharing your code)
4. **Deployment** — Netlify, GitHub Pages (putting your site live on the internet)
5. **Backend Development** — Node.js, databases (server-side programming)

---

## Quick Reference Card

### HTML
```
Structure:   <!DOCTYPE html> → <html> → <head> + <body>
Text:        <h1>–<h6>, <p>, <strong>, <em>, <blockquote>, <span>
Links:       <a href="url">
Images:      <img src="path" alt="description">
Lists:       <ul>/<ol> → <li>
Forms:       <form> → <input>, <label>, <select>, <textarea>, <button>
Semantic:    <header>, <nav>, <main>, <section>, <article>, <footer>
```

### CSS
```
Select:      .class, #id, tag, tag.class, parent child
Box Model:   margin | border | padding | content
Layout:      display: flex / grid
Position:    static | relative | absolute | fixed
Responsive:  @media (max-width: 768px) { }
Variables:   :root { --name: value; }  →  var(--name)
Transition:  transition: property duration ease;
Animation:   @keyframes name { from {} to {} }
```

### JavaScript
```
Variables:   const (default), let (changes), no var
Types:       string, number, boolean, null, undefined, object, array
DOM:         getElementById, querySelector, querySelectorAll
Change:      textContent, innerHTML, classList, style
Events:      addEventListener("click"|"submit"|"scroll"|"keydown", fn)
Arrays:      .map() .filter() .find() .forEach() .push() .length
Fetch:       async function() { const data = await fetch(url).then(r=>r.json()) }
Guard:       element?.property  |  value ?? fallback
```

---

*DevFolio Build-Along Course — ULTIMATE*  
*✉ ultimatefaloe@gmail.com*
