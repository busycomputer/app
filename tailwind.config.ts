import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'
const svgToDataUri = require('mini-svg-data-uri')

const colors = require('tailwindcss/colors')
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      // },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          muted: 'hsl(var(--primary-muted))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        surface: {
          DEFAULT: 'hsl(var(--surface))',
          foreground: 'hsl(var(--surface-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [
    // addVariablesForColors,
    tailwindAnimate,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          'bg-grid': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          'bg-grid-small': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          'bg-dot': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
          'bg-box': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg width="1440" height="1100" viewBox="0 0 1440 1100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_14)">
<line x1="34.8334" y1="2.18557e-08" x2="34.8333" y2="816" stroke="#131316"/>
<line x1="75.1667" y1="2.18557e-08" x2="75.1667" y2="816" stroke="#131316"/>
<line x1="115.5" y1="2.18557e-08" x2="115.5" y2="816" stroke="#131316"/>
<line x1="155.833" y1="2.18557e-08" x2="155.833" y2="816" stroke="#131316"/>
<line x1="196.167" y1="2.18557e-08" x2="196.167" y2="816" stroke="#131316"/>
<line x1="236.5" y1="2.18557e-08" x2="236.5" y2="816" stroke="#131316"/>
<line x1="276.833" y1="2.18557e-08" x2="276.833" y2="816" stroke="#131316"/>
<line x1="317.167" y1="2.18557e-08" x2="317.167" y2="816" stroke="#131316"/>
<line x1="357.5" y1="2.18557e-08" x2="357.5" y2="816" stroke="#131316"/>
<line x1="397.833" y1="2.18557e-08" x2="397.833" y2="816" stroke="#131316"/>
<line x1="438.167" y1="2.18557e-08" x2="438.167" y2="816" stroke="#131316"/>
<line x1="478.5" y1="2.18557e-08" x2="478.5" y2="816" stroke="#131316"/>
<line x1="518.833" y1="2.18557e-08" x2="518.833" y2="816" stroke="#131316"/>
<line x1="559.167" y1="2.18557e-08" x2="559.167" y2="816" stroke="#131316"/>
<line x1="599.5" y1="2.18557e-08" x2="599.5" y2="816" stroke="#131316"/>
<line x1="639.833" y1="2.18557e-08" x2="639.833" y2="816" stroke="#131316"/>
<line x1="680.167" y1="2.18557e-08" x2="680.167" y2="816" stroke="#131316"/>
<line x1="720.5" y1="2.18557e-08" x2="720.5" y2="816" stroke="#131316"/>
<line x1="760.833" y1="2.18557e-08" x2="760.833" y2="816" stroke="#131316"/>
<line x1="801.167" y1="2.18557e-08" x2="801.167" y2="816" stroke="#131316"/>
<line x1="841.5" y1="2.18557e-08" x2="841.5" y2="816" stroke="#131316"/>
<line x1="881.833" y1="2.18557e-08" x2="881.833" y2="816" stroke="#131316"/>
<line x1="922.167" y1="2.18557e-08" x2="922.167" y2="816" stroke="#131316"/>
<line x1="962.5" y1="2.18557e-08" x2="962.5" y2="816" stroke="#131316"/>
<line x1="1002.83" y1="2.18557e-08" x2="1002.83" y2="816" stroke="#131316"/>
<line x1="1043.17" y1="2.18557e-08" x2="1043.17" y2="816" stroke="#131316"/>
<line x1="1083.5" y1="2.18557e-08" x2="1083.5" y2="816" stroke="#131316"/>
<line x1="1123.83" y1="2.18557e-08" x2="1123.83" y2="816" stroke="#131316"/>
<line x1="1164.17" y1="2.18557e-08" x2="1164.17" y2="816" stroke="#131316"/>
<line x1="1204.5" y1="2.18557e-08" x2="1204.5" y2="816" stroke="#131316"/>
<line x1="1244.83" y1="2.18557e-08" x2="1244.83" y2="816" stroke="#131316"/>
<line x1="1285.17" y1="2.18557e-08" x2="1285.17" y2="816" stroke="#131316"/>
<line x1="1325.5" y1="2.18557e-08" x2="1325.5" y2="816" stroke="#131316"/>
<line x1="1365.83" y1="2.18557e-08" x2="1365.83" y2="816" stroke="#131316"/>
<line x1="1406.17" y1="2.18557e-08" x2="1406.17" y2="816" stroke="#131316"/>
<line x1="1446" y1="0.50011" x2="-5.99988" y2="0.499983" stroke="#131316"/>
<line x1="1446" y1="40.8712" x2="-5.99988" y2="40.871" stroke="#131316"/>
<line x1="1446" y1="81.2422" x2="-5.99988" y2="81.2421" stroke="#131316"/>
<line x1="1446" y1="121.613" x2="-5.99988" y2="121.613" stroke="#131316"/>
<line x1="1446" y1="161.984" x2="-5.99988" y2="161.984" stroke="#131316"/>
<line x1="1446" y1="202.355" x2="-5.99988" y2="202.355" stroke="#131316"/>
<line x1="1446" y1="242.726" x2="-5.99988" y2="242.726" stroke="#131316"/>
<line x1="1446" y1="283.098" x2="-5.99988" y2="283.097" stroke="#131316"/>
<line x1="1446" y1="323.469" x2="-5.99988" y2="323.468" stroke="#131316"/>
<line x1="1446" y1="363.84" x2="-5.99988" y2="363.84" stroke="#131316"/>
<line x1="1446" y1="404.211" x2="-5.99988" y2="404.211" stroke="#131316"/>
<line x1="1446" y1="444.582" x2="-5.99988" y2="444.582" stroke="#131316"/>
<line x1="1446" y1="484.953" x2="-5.99988" y2="484.953" stroke="#131316"/>
<line x1="1446" y1="525.324" x2="-5.99988" y2="525.324" stroke="#131316"/>
<line x1="1446" y1="565.695" x2="-5.99988" y2="565.695" stroke="#131316"/>
<line x1="1446" y1="606.066" x2="-5.99988" y2="606.066" stroke="#131316"/>
<line x1="1446" y1="646.437" x2="-5.99988" y2="646.437" stroke="#131316"/>
<line x1="1446" y1="686.808" x2="-5.99988" y2="686.808" stroke="#131316"/>
<line x1="1446" y1="727.179" x2="-5.99988" y2="727.179" stroke="#131316"/>
<line x1="1446" y1="767.55" x2="-5.99988" y2="767.55" stroke="#131316"/>
<line x1="1446" y1="807.921" x2="-5.99988" y2="807.921" stroke="#131316"/>
<rect x="115" y="40.8757" width="40.0812" height="40.1187" fill="#0E0E10"/>
<rect x="236" y="202.108" width="40.0812" height="40.1187" fill="#0E0E10"/>
<rect x="357" y="283.102" width="40.0812" height="40.1187" fill="#0E0E10"/>
<rect x="1284.92" y="80.9944" width="40.0812" height="40.1187" fill="#0E0E10"/>
<rect x="1163.92" y="161.232" width="40.0812" height="40.1187" fill="#0E0E10"/>
<path d="M1284.16 323.221H1244.08V283.102H1284.16V323.221Z" fill="#0E0E10"/>
<rect x="1083" y="363.34" width="40.0812" height="40.1187" fill="#0E0E10"/>
<rect x="1204" y="444.334" width="40.0812" height="40.1187" fill="#0E0E10"/>
<rect x="1325" y="525.328" width="40.0812" height="40.1187" fill="#0E0E10"/>
<rect x="1163.92" y="726.679" width="40.0812" height="40.1187" fill="#0E0E10"/>
<rect x="115" y="444.334" width="40.0812" height="40.1187" fill="#0E0E10"/>
<rect x="236" y="525.328" width="40.0812" height="40.1187" fill="#0E0E10"/>
<rect x="74.9187" y="645.685" width="40.0812" height="40.1187" fill="#0E0E10"/>
<rect x="-6" y="767.555" width="40.0812" height="40.1187" fill="#0E0E10"/>
<rect x="357" y="444.334" width="40.0812" height="40.1187" fill="#0E0E10"/>
<rect x="-6" width="1452" height="817.514" fill="url(#paint0_linear_1_14)"/>
</g>
<defs>
<linearGradient id="paint0_linear_1_14" x1="720" y1="0" x2="720" y2="921.217" gradientUnits="userSpaceOnUse">
<stop offset="0.428561" stop-color="#070708" stop-opacity="0"/>
<stop offset="1" stop-color="#070708"/>
</linearGradient>
<clipPath id="clip0_1_14">
<rect width="1452" height="816" fill="white" transform="translate(-6)"/>
</clipPath>
</defs>
</svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      )
    },
  ],
}
export default config

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]))

  addBase({
    ':root': newVars,
  })
}
