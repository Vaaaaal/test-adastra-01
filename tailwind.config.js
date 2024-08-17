/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./{assets,config,layout,locales,sections,snippets,src,templates}/**/*.{js,ts,jsx,tsx,vue,svelte,liquid,json}'],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        heading: ['Bricolage Grotesque', 'sans-serif'],
        'display': ['Bricolage Grotesque', 'sans-serif'],
        'body': ['Inter Tight', 'sans-serif'],
      },
      fontSize: {
        sm: ['var(--font-size-sm)', '1.428'],
        base: '18px',
        lg: ['var(--font-size-lg)', '1.555'],
        xl: ['var(--font-size-xl)', '1.4']
      },
      colors: {
        black: "#161616",
        accent: 'hsla(var(--color-accent) / <alpha-value>)',
        surface: 'hsla(var(--color-surface) / <alpha-value>)',
        primary: 'hsla(var(--color-primary) / <alpha-value>)',
        contrast: 'hsla(var(--color-contrast) / <alpha-value>)',
        secondary: 'hsla(var(--color-secondary) / <alpha-value>)'
      },
      transitionTimingFunction: {
        wiggle: 'cubic-bezier(0.22, 1, 0.36, 1)'
      },
      container: {
        center: true,
        padding: 'max(5%, 4rem)',
      },
      backgroundImage: {
        'dark-gradient': "linear-gradient(160deg, #161616 0%, #212121 51%, #0C0C0C 100%)",
      }
    },
    container: {
      screens: {
        'sm': 'max(100%, 768px)',
        'md': 'max(100%, 992px)',
        'lg': 'max(100%, 1100px)',
        'xl': 'max(100%, 1280px)',
        '2xl': 'max(100%, 1440px)',
      },
    },
  }
}