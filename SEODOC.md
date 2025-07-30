# 🌐 Metadata & Open Graph for ColorBOX

This document provides a quick reference for the meta tags used in **ColorBOX**, primarily for SEO, social sharing, and platform previews.

---

## 📘 Open Graph (OG) Tags

| Property             | Description                                                  | Example Value                                  |
|----------------------|--------------------------------------------------------------|------------------------------------------------|
| `og:title`           | Title of your webpage                                        | `ColorBOX`                                     |
| `og:site_name`       | Name of the site/project                                     | `ColorBOX by JulienLOG`                        |
| `og:author`          | Author or creator                                            | `JulienLOG on GitHub`                          |
| `og:locale`          | Language/region                                              | `en_FR`                                        |
| `og:description`     | Description shown on preview                                 | `A minimalist playground to explore colors...` |
| `og:keywords`        | Keywords for SEO and context                                 | `React, UI, color, frontend, design`           |
| `og:image`           | URL or path to preview image                                 | `/public/previewColorBOX.png`                  |
| `og:type`            | Type of site (website, article...)                           | `website`                                      |
| `og:url`             | Canonical URL of the page                                    | `https://yourdomain.com/`                      |

---

## 🐦 Twitter Meta Tags

| Name                 | Description                                                  | Example Value                                  |
|----------------------|--------------------------------------------------------------|------------------------------------------------|
| `twitter:card`       | Type of Twitter card (image preview)                         | `summary_large_image`                          |
| `twitter:description`| Short description                                            | `A minimalist playground to explore colors...` |
| `twitter:image`      | Path to the Twitter image preview                            | `/public/previewColorBOX.png`                  |
| `twitter:url`        | Final hosted URL                                             | `https://yourdomain.com/`                      |

---

## 📝 Notes
- The preview image should ideally be **1200x630px**, in **.png** or **.jpg** format.
- Keep descriptions under 200 characters for best readability.
- Ensure the image is publicly accessible in production (`/public/` folder or hosted asset).
