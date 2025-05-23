# PillarDash UI

A collection of reusable UI components for Next.js applications with TypeScript and CSS Modules.

## Installation

```bash
npm install pillardash-ui
```

## Features

- 🎨 **Zero Dependencies**: No Tailwind CSS required - styles are self-contained using CSS Modules
- 🔧 **TypeScript Support**: Fully typed components with excellent IntelliSense
- 📱 **Responsive Design**: Components work great on all screen sizes
- 🎭 **Themeable**: Easy to customize with CSS variables
- ⚡ **Lightweight**: Minimal bundle size impact

## Usage

```jsx
import { Button } from 'pillardash-ui';

function MyComponent() {
  return (
    <Button variant="primary" size="medium">
      Click Me
    </Button>
  );
}
```

## Components

### Button

A versatile button component with multiple variants and sizes.

```jsx
import { Button } from 'pillardash-ui';

// Basic usage
<Button>Click Me</Button>

// With variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="dark">Dark</Button>
<Button variant="neutral">Neutral</Button>

// Different sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

// With loading state
<Button loading>Processing...</Button>

// With icon
<Button icon={<YourIcon />}>With Icon</Button>
```

## Customization

You can customize the component colors by overriding CSS custom properties:

```css
:root {
  --pillardash-primary: #your-primary-color;
  --pillardash-dark: #your-dark-color;
  /* Add more custom properties as needed */
}
```

## Props Reference

### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Button content |
| onClick | () => void | - | Click handler |
| type | 'button' \| 'submit' \| 'reset' | 'button' | Button type |
| size | 'small' \| 'medium' \| 'large' | 'medium' | Button size |
| variant | 'primary' \| 'secondary' \| 'dark' \| 'neutral' | 'primary' | Button style |
| disabled | boolean | false | Disabled state |
| loading | boolean | false | Loading state with spinner |
| icon | ReactNode | - | Optional icon |
| className | string | - | Additional CSS classes |

## License

ISC