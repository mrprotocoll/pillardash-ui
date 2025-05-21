# Button

A versatile button component with multiple variants, sizes, and states.

## Import

```jsx
import { Button } from 'pillardash-ui';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Button content |
| onClick | () => void | - | Function called when button is clicked |
| type | 'button' \| 'submit' \| 'reset' | 'button' | HTML button type attribute |
| size | 'small' \| 'medium' \| 'large' | 'medium' | Button size |
| variant | 'primary' \| 'secondary' \| 'dark' \| 'neutral' | 'primary' | Button style variant |
| disabled | boolean | false | Whether the button is disabled |
| className | string | - | Additional CSS class names |
| icon | ReactNode | - | Optional icon to display before the button text |
| loading | boolean | false | Whether to show a loading spinner |

## Examples

### Basic Button

```jsx
<Button>Click Me</Button>
```

### Button Variants

```jsx
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="dark">Dark Button</Button>
<Button variant="neutral">Neutral Button</Button>
```

### Button Sizes

```jsx
<Button size="small">Small Button</Button>
<Button size="medium">Medium Button</Button>
<Button size="large">Large Button</Button>
```

### Button with Icon

```jsx
import { ArrowRight } from 'lucide-react';

<Button icon={<ArrowRight size={16} />}>Continue</Button>
```

### Loading Button

```jsx
<Button loading>Processing...</Button>
```

### Submit Button

```jsx
<Button type="submit">Submit Form</Button>
```

### Disabled Button

```jsx
<Button disabled>Cannot Click</Button>
```

### With Custom Class

```jsx
<Button className="w-full">Full Width Button</Button>
```

## Tailwind CSS Requirements

This component requires the following Tailwind CSS configuration:

1. Custom colors in your `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // You can customize this color
        dark: '#1F2937',    // You can customize this color
      },
    },
  },
}
```

2. Make sure your project includes the necessary Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```