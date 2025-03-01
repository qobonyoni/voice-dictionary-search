import type { Config } from "tailwindcss";

export default {
  darkMode:['class'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
      
        
        
      },
      screens: {
        
        xl: "40em"
        
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
       mainComponent: "#1a3d32",
       main: "#07271f",
          light:"#faf8f5",
          secondary: "rgb(3, 212, 124)",
          tertiary: "#072419",
          accent: "#8b9c8f",
          pending: "#f0562f",
          link: "#108bff",
       
      },
    },
  },
  plugins: [],
} satisfies Config;
