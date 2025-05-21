# PillarDash UI

A collection of reusable UI components for Next.js applications with TypeScript and Tailwind CSS.

## Installation

```bash
npm install pillardash-ui
```

## Setup
### Tailwind CSS Configuration
Add the following to your `tailwind.config.js`
```js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Add this line to include PillarDash UI components
    './node_modules/pillardash-ui/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```