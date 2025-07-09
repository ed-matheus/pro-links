# My Link Pro - Quick Start Guide

Thank you for purchasing the **My Link Pro** template! I'm excited to help you get your professional links page up and running in minutes.

Editing this template is simple. You only need a basic text editor (like Notepad on Windows or TextEdit on Mac) to get started.

---

## 🚀 Getting Started: 5 Steps to Your Perfect Page

Follow these steps to customize your page.

### Step 1: Add Your Profile Picture

You have two options for your profile picture.

**A) The Easy Way (Recommended):**
Upload your picture to an image hosting service like [Imgur](https://imgur.com/upload) or [Postimages](https://postimages.org/). After uploading, get the "Direct Link" and use it to replace the `src` attribute in the code.

* **Find this line:**
    ```html
    <img src="assets/images/default-avatar.png" alt="Profile Picture" ...>
    ```
* **Replace it with your image URL:**
    ```html
    <img src="[https://i.imgur.com/your-image-code.png](https://i.imgur.com/your-image-code.png)" alt="Profile Picture" ...>
    ```

**B) The Local Way:**
Inside your project folder, create a new folder named `assets`, and inside that, another folder named `images`. Place your profile picture file there and make sure it is named `default-avatar.png`.

### Step 2: Update Your Name and Bio

* **Find these lines:**
    ```html
    <h1 class="text-2xl font-bold text-gray-800">@your_username</h1>
    <p class="text-gray-600 mt-2">A short bio about yourself or your brand. <br> Show the world who you are!</p>
    ```
* **Replace the text** with your own username and biography.

### Step 3: Edit Your Main Links

For each button, you need to change the link (`href`) and the text.

* **Find this block:**
    ```html
    <a href="#" target="_blank" class="...">
        My Official Website
    </a>
    ```
* **Replace the `#`** with the full URL you want to link to (e.g., `https://www.yourwebsite.com`).
* **Replace "My Official Website"** with your desired button text.
* Repeat for all link buttons.

### Step 4: Add Your Social Media Links

This is just like the main links.

* **Find this line for Instagram:**
    ```html
    <a href="#" target="_blank" ...><i class="fab fa-instagram"></i></a>
    ```
* **Replace the `#`** with the full URL to your Instagram profile.
* Repeat for LinkedIn (`fa-linkedin-in`) and GitHub (`fa-github`).

### Step 5: (Advanced) Change The Colors

This template uses Tailwind CSS classes for styling. You can easily change the color of any element.

For example, to change the first button from blue to purple:

* **Find this class:** `bg-blue-500`
* **Change it to:** `bg-purple-500`

You can find a full list of available colors on the [official Tailwind CSS documentation](https://tailwindcss.com/docs/customizing-colors).

---

## ❓ How do I get my page online?

After you've saved your changes to the `index.html` file, you need to host it. You can upload the `index.html` file (and the `assets` folder, if you used it) to services like:
* [Netlify Drop](https://app.netlify.com/drop)
* [Vercel](https://vercel.com/)
* [GitHub Pages](https://pages.github.com/)

---

Thank you again for your purchase! If you have any questions, feel free to reach out.

Enjoy your new professional links page!