=== Impact Story Slider ===
Contributors:      The WordPress Contributors
Tags:              block
Tested up to:      6.7
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html


# 🧩 Impact Story Slider (Gutenberg Block)

A custom-built Gutenberg block for non-profits to showcase visual stories with media (image, video, GIF), styled text, parallax layout, and full user controls — all from inside the WordPress block editor.

## ✨ Features

- 📸 MediaUpload (image, video, gif)
- 🔠 RichText with font size, colors, and styling
- 🎛 Direction control: left, right, up, down
- ♿ Fully accessible & responsive
- ⚙️ theme.json support (tokens, global styles)

## 🛠 Technologies Used

- WordPress `@wordpress/create-block`
- React / JSX
- SCSS (BEM) + parallax layout
- WordPress Block APIs: `RichText`, `MediaUpload`, `InspectorControls`

## 📦 Installation

1. Clone the repo into your WordPress `wp-content/plugins/` directory.
2. Run:

```bash
npm install
npm run build
