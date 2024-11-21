import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/flowbite/**/*.js",
	],
	theme: {
		extend: {
			colors: {
				deepTeal: {
					50: "#e6f0ee",
					100: "#cde1dd",
					200: "#9bc3bb",
					300: "#66a59a",
					400: "#338877",
					500: "#004B45",
					600: "#003D37",
					700: "#002F2A",
					800: "#00211D",
					900: "#001410",
				},
				deepBlue: {
					50: "#e8f1f9",
					100: "#d1e3f2",
					200: "#a3c8e5",
					300: "#74add8",
					400: "#4692cb",
					500: "#1E70B2",
					600: "#18578C",
					700: "#123F66",
					800: "#0B2740",
					900: "#06111B",
				},
				richRed: {
					50: "#fbeaea",
					100: "#f6d1d1",
					200: "#eda3a3",
					300: "#e47575",
					400: "#db4747",
					500: "#B20021",
					600: "#8C001A",
					700: "#670013",
					800: "#42000C",
					900: "#210006",
				},
				mutedGreen: {
					50: "#ebf6f4",
					100: "#d6eae8",
					200: "#add6d3",
					300: "#85c2be",
					400: "#5DADAA",
					500: "#3A7E79",
					600: "#2D5F5C",
					700: "#203F3E",
					800: "#132020",
					900: "#091010",
				},
				softNeutral: {
					50: "#f9f9f8",
					100: "#f1f1f0",
					200: "#e3e3e1",
					300: "#dad9d6",
					400: "#b6b5b2",
					500: "#918f8b",
					600: "#6c6b68",
					700: "#484745",
					800: "#252423",
					900: "#131211",
				},
				accentGold: {
					50: "#fff6e6",
					100: "#ffebcc",
					200: "#ffd699",
					300: "#ffc266",
					400: "#ffad33",
					500: "#D48800",
					600: "#A46A00",
					700: "#734B00",
					800: "#402D00",
					900: "#201800",
				},
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
				sidebar: {
					DEFAULT: "hsl(var(--sidebar-background))",
					foreground: "hsl(var(--sidebar-foreground))",
					primary: "hsl(var(--sidebar-primary))",
					"primary-foreground": "hsl(var(--sidebar-primary-foreground))",
					accent: "hsl(var(--sidebar-accent))",
					"accent-foreground": "hsl(var(--sidebar-accent-foreground))",
					border: "hsl(var(--sidebar-border))",
					ring: "hsl(var(--sidebar-ring))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				marquee: {
					from: {
						transform: "translateX(0)",
					},
					to: {
						transform: "translateX(calc(-100% - var(--gap)))",
					},
				},
				"marquee-vertical": {
					from: {
						transform: "translateY(0)",
					},
					to: {
						transform: "translateY(calc(-100% - var(--gap)))",
					},
				},
				"border-beam": {
					"100%": {
						"offset-distance": "100%",
					},
				},
				shine: {
					"0%": {
						"background-position": "0% 0%",
					},
					"50%": {
						"background-position": "100% 100%",
					},
					to: {
						"background-position": "0% 0%",
					},
				},
				"shiny-text": {
					"0%, 90%, 100%": {
						"background-position": "calc(-100% - var(--shiny-width)) 0",
					},
					"30%, 60%": {
						"background-position": "calc(100% + var(--shiny-width)) 0",
					},
				},
				gradient: {
					to: {
						backgroundPosition: "var(--bg-size) 0",
					},
				},
				rippling: {
					"0%": {
						opacity: "1",
					},
					"100%": {
						transform: "scale(2)",
						opacity: "0",
					},
				},
				"shimmer-slide": {
					to: {
						transform: "translate(calc(100cqw - 100%), 0)",
					},
				},
				"spin-around": {
					"0%": {
						transform: "translateZ(0) rotate(0)",
					},
					"15%, 35%": {
						transform: "translateZ(0) rotate(90deg)",
					},
					"65%, 85%": {
						transform: "translateZ(0) rotate(270deg)",
					},
					"100%": {
						transform: "translateZ(0) rotate(360deg)",
					},
				},
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
			},
			animation: {
				marquee: "marquee var(--duration) infinite linear",
				"marquee-vertical": "marquee-vertical var(--duration) linear infinite",
				"border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
				shine: "shine var(--duration) infinite linear",
				"shiny-text": "shiny-text 8s infinite",
				gradient: "gradient 8s linear infinite",
				rippling: "rippling var(--duration) ease-out",
				"shimmer-slide":
					"shimmer-slide var(--speed) ease-in-out infinite alternate",
				"spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [
		require( "tailwindcss-animate" ),
		require( "flowbite/plugin" ),
		require( "daisyui" ),
	],
} satisfies Config;
