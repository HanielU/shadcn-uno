import { Preset } from "unocss";

export const shadcnPreset: Preset = {
  name: "shadcn",

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      border: "hsl(var(--border) / <alpha-value>)",
      input: "hsl(var(--input) / <alpha-value>)",
      ring: "hsl(var(--ring) / <alpha-value>)",
      background: "hsl(var(--background) / <alpha-value>)",
      foreground: "hsl(var(--foreground) / <alpha-value>)",
      primary: {
        DEFAULT: "hsl(var(--primary) / <alpha-value>)",
        foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
        foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
        foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
      },
      muted: {
        DEFAULT: "hsl(var(--muted) / <alpha-value>)",
        foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
      },
      accent: {
        DEFAULT: "hsl(var(--accent) / <alpha-value>)",
        foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
      },
      popover: {
        DEFAULT: "hsl(var(--popover) / <alpha-value>)",
        foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
      },
      card: {
        DEFAULT: "hsl(var(--card) / <alpha-value>)",
        foreground: "hsl(var(--card-foreground) / <alpha-value>)",
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    fontFamily: {
      // sans: ["Inter", ...fontFamily.sans],
    },
  },

  preflights: [
    {
      layer: "default",
      getCSS: () => `:root {
    --background: 0 0% 100%;
    --foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 47.4% 11.2%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 47.4% 11.2%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 92% 38%;
    --destructive-foreground: 210 40% 98%;
    --ring: 215 20.2% 65.1%;
    --radius: 0.5rem;
  }
  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 85.7% 97.3%;
    --ring: 240 3.7% 15.9%;}
  `,
    },
  ],
};
