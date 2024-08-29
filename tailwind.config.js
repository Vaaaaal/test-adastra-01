/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./{assets,config,layout,locales,sections,snippets,src,templates}/**/*.{js,ts,jsx,tsx,vue,svelte,liquid,json}'],
  theme: {
    extend: {
      screens: {
        '2lg': '1100px',
        // => @media (min-width: 1100px) { ... }
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
        padding: {
          DEFAULT: '5vw',
          sm: '2vw',
          lg: '3vw',
          xl: '5vw',
        },
      },
      backgroundImage: {
        'dark-gradient': "linear-gradient(160deg, #161616 0%, #212121 51%, #0C0C0C 100%)",
      }
    },
    container: {
      screens: {
        'sm': '100%',
        'md': '100%',
        'lg': '100%',
        '2lg': '1240px',
        'xl': '1340px',
        '2xl': '1540px',
      },
    },
  }
}