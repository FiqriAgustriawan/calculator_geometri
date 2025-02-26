/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'aurora': 'aurora 15s ease infinite',
        'aurora-reverse': 'aurora-reverse 20s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out infinite 2s',
        'fall': 'fall linear infinite',
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-20vh) rotate(0deg)', opacity: 1 },
          '100%': { transform: 'translateY(120vh) rotate(360deg)', opacity: 0 },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }
    }
  }
}
