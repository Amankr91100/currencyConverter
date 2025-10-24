💱 Currency Converter App

A simple, responsive, and interactive Currency Converter built using React.
It allows users to convert values between different currencies in real-time using a public currency exchange API.

🚀 Live Demo
👉 [View Live Demo](https://currency-converter-iota-gilt.vercel.app/)


🧩 Features

✅ Convert any amount between two selected currencies

✅ Fetches live exchange rates from an API

✅ Fully responsive UI (works on all devices)

✅ Clean, minimalist design using Tailwind CSS

✅ Built with a custom React Hook for API calls

⚙️ Tech Stack

React.js ⚛️
Tailwind CSS 🎨
Exchange Rate API 🌐
Vite (for fast development)

📸 Preview
<img width="1283" height="711" alt="Screenshot 2025-10-24 205349" src="https://github.com/user-attachments/assets/de66d9c0-eeb2-4ce9-88bf-649a890291a6" />

🧠 What I Learned

While building this project, I explored:

React hooks (useState, useEffect)

Creating and reusing custom hooks (useCurrencyInfo)

Handling API calls in React

Structuring components for better readability

Styling with Tailwind CSS


📂 Project Structure
currency-converter/
│
├── src/
│   ├── components/
│   │   └── InputBox.jsx
│   ├── hooks/
│   │   └── useCurrencyInfo.js
│   ├── App.jsx
│   ├── main.jsx
│
├── public/
├── package.json
└── tailwind.config.js

🌍 API Used

I used the ExchangeRate API (or fawazahmed0/currency-api via jsDelivr CDN)
to fetch the latest currency conversion rates.

Example URL:
https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json

🏁 Future Improvements

🔹 Add historical exchange rate charts 📈
🔹 Add a favorite currencies feature ⭐
🔹 Support for cryptocurrency conversions 💰
