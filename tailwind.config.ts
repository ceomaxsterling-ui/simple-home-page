
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Blueprint Neon colors
				neon: {
					blue: '#61A4F8',
					magenta: '#FF00FF',
					bg: '#0A0A1A',
					deep: '#103051',
				},
				// Legacy compatibility
				elevix: {
					blue: '#61A4F8',
					white: '#FFFFFF',
				},
				blue: {
					elevix: '#61A4F8',
					hover: '#4A8EF0',
					neon: '#61A4F8',
				},
				red: {
					neon: '#FF3131'
				}
			},
			fontFamily: {
				sans: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'neon-gradient': 'linear-gradient(to right, #61A4F8, #FF00FF)',
				'neon-gradient-135': 'linear-gradient(135deg, #61A4F8, #FF00FF)',
				'neon-radial': 'radial-gradient(circle, rgba(97,164,248,0.3) 0%, transparent 70%)',
				'mesh-bg': 'radial-gradient(ellipse at 20% 20%, rgba(97,164,248,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(255,0,255,0.06) 0%, transparent 50%), #0A0A1A',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '0.4' },
					'50%': { opacity: '0.8' }
				},
				'orb-pulse': {
					'0%': {
						boxShadow: '0 0 40px #61A4F8, 0 0 80px rgba(255,0,255,0.3)',
						transform: 'scale(1)'
					},
					'100%': {
						boxShadow: '0 0 70px #61A4F8, 0 0 140px rgba(255,0,255,0.5)',
						transform: 'scale(1.05)'
					}
				},
				'beam-flow': {
					'0%, 100%': { opacity: '0.4' },
					'50%': { opacity: '1' }
				},
				'gradient-flow': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'bg-float': {
					'0%': { transform: 'translate(0, 0) scale(1)' },
					'50%': { transform: 'translate(30px, -20px) scale(1.05)' },
					'100%': { transform: 'translate(0, 0) scale(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'orb-pulse': 'orb-pulse 4s ease-in-out infinite alternate',
				'beam-flow': 'beam-flow 3s ease-in-out infinite',
				'gradient-flow': 'gradient-flow 4s ease-in-out infinite',
				'bg-float': 'bg-float 40s ease-in-out infinite',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
