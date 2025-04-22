/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        deep: {
          black: '#050505',
          charcoal: '#121212'
        },
        gray: {
          dark: '#1A1A1A',
          medium: '#2A2A2A',
          light: '#3A3A3A'
        },
        orange: {
          vibrant: '#FF5E00',
          light: '#FF7A30',
          glow: '#FF5E0033'
        }
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'expo-in-out': 'cubic-bezier(0.87, 0, 0.13, 1)'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%': { textShadow: '0 0 5px rgba(255, 94, 0, 0.5)' },
          '100%': { textShadow: '0 0 20px rgba(255, 94, 0, 0.8), 0 0 30px rgba(255, 94, 0, 0.6)' }
        }
      },
      backgroundImage: {
        'noise': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAABBhJREFUaEPtmttx2zAQRW8qiFNB5AqiVGCmAikVRK4gTgVSKohSQewKJFcQuYJIFUSuIPoWSwVDEuACIERK5uA7Hg9J4OLs2V2ApCYCuuu6V0S0J6JnZt7OMb0Mfmsimoh4T0R/mPlnjucPA3Tx4nZ3d/dERC9CCPEhzORdOF/4o5TS7OfnZ/Q7BwCBwCCrAIFxIQQQsgVEcgVASkJsAWDBiLQAsAJEcGp3d3fn5bsmolcAEUL4Ym5eXl7Ow3jQCFEFQmiEqAohaZZYhWsAlUFkrLEqRG0Q2SBqgrQAUQuk1ddqQTQDUgrRFKQEoimIZ57AGvt1NKbPm8TIdALWRLRj5oQRXUBWB+IOd0YQVUBCDo+lQVQDsYCoBqIWiCogKoKoA6IiiDoglWPkalTnDsGsEaSqR3J1XzQDqDKIBUQ1kKY5IgNRBaS1R6qAaEB8hkgZI9U80hIEv9MAZDWA0iBNQGqD5EAQ0SszJxBNPFITxAPRbIKXBmlmkRYgYxCfLZrEyLUAWnqkCUhNEDPIkhwZFXm5+d9aiJ5EEVQ+MnNX2yNNPVIDxBVZuGO/sXOruNIuMtbyyGIQa2pnfRcjTohfImqWI4tBLB4ZFXoJxGhlFoG0jJFpWue2dpvIJpV3CaCZRRaBLAGJLfQtotLEGksAxDwiS8GaICYPaDwSrR7F0mD3zQy0qGqBVClb0kNWgE4gE55wHhVZZVNh6RxvEeUIgL49L1WvP4EMEw1rRkT9xjg8ZO24L73PtQjEEhB9+A/K75nZvO/VEmQYHOPedNvh7k1YLWj1+1JaEQXIaKM1BFcJZvDEBxF9MHPf+nSQQYvepVlDCdJ3Vd46D50NyPDRWJwYPBJ+/83Myc5JACnEm4qhcUHiPsZPIkoykNYiMZACrwwS9vq+NbElKFiE9mXNOAcSWFVkbZz1hOdgTGmR4xNRdyg3NXmRYtMjx9U/uKjUgRgeGjxjPTXK+JgGoJAfXBDpjxaCdNbE9WRdwxpKDxiAnP2s5dTWZZExBGOmlfbHbfWYHtxSWN7KM7nqNmrJ0wVPCYTlFLPnHj7zkiuLouSxXqLzjtEBpO9/4iCiEE3QyJQJV9PKPI8pMFrjGAdS8tAZHOtVvpNLfTGTDTI1XO2jq6WdFsRimZnfrZ4r9dIuNV505WOGtTRjG+vY41sPFvNeG8hY9cw9U+WRmTWs5Q3P2nLwIotnSPQHERXvVqe81xzEapllINbnJXLXG23PziMlMdJ6S7IIpNZhklKLaMKnBoilnkrE0CIQS8/l9ZMUiBXEagFLhTm9ZgaxNnV+2zHWdRKLJBYwPvnMUxfB89oe4Xt2uo/s11sqdXl+RpcDUWv3i/8HSyVL4zX6/IEAAAAASUVORK5CYII=')"
      }
    },
  },
  plugins: [],
};