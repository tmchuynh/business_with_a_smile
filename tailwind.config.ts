import type { Config } from "tailwindcss";

export default {
    darkMode: ['selector', '.dark'],
    content: [
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        extend: {
            gridTemplateRows: {
                '[auto,auto,1fr]': 'auto auto 1fr',
            },
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
                    600: "#18448c",
                    700: "#122766",
                    800: "#041739",
                    900: "#02112f",
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
                softGray: {
                    50: "#f9fafb",
                    100: "#f2f4f6",
                    200: "#e4e6e9",
                    300: "#d1d3d8",
                    400: "#9fa2a9",
                    500: "#6d7176",
                    600: "#4b4f54",
                    700: "#373a3f",
                    800: "#1f2328",
                    900: "#101417",
                    950: "#0a1115"
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
                background: "var(--background)",
                foreground: "var(--foreground)",
                card: {
                    DEFAULT: "var(--card)",
                    foreground: "var(--card-foreground)",
                },
                popover: {
                    DEFAULT: "var(--popover)",
                    foreground: "var(--popover-foreground)",
                },
                primary: {
                    DEFAULT: "var(--primary)",
                    foreground: "var(--primary-foreground)",
                },
                secondary: {
                    DEFAULT: "var(--secondary)",
                    foreground: "var(--secondary-foreground)",
                },
                muted: {
                    DEFAULT: "var(--muted))",
                    foreground: "var(--muted-foreground)",
                },
                accent: {
                    DEFAULT: "var(--accent)",
                    foreground: "var(--accent-foreground)",
                },
                destructive: {
                    DEFAULT: "var(--destructive)",
                    foreground: "var(--destructive-foreground)",
                },
                border: "var(--border)",
                input: "var(--input)",
                ring: "var(--ring)",
                chart: {
                    "1": "var(--chart-1)",
                    "2": "var(--chart-2)",
                    "3": "var(--chart-3)",
                    "4": "var(--chart-4)",
                    "5": "var(--chart-5)",
                },
                sidebar: {
                    DEFAULT: "var(--sidebar-background)",
                    foreground: "var(--sidebar-foreground)",
                    primary: "var(--sidebar-primary)",
                    "primary-foreground": "var(--sidebar-primary-foreground)",
                    accent: "var(--sidebar-accent)",
                    "accent-foreground": "var(--sidebar-accent-foreground)",
                    border: "var(--sidebar-border)",
                    ring: "var(--sidebar-ring)",
                },
            },
            borderRadius: {
                xl: "2rem",
                "2xl": "2.3rem",
                "3xl": "3rem",
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
    ],
} satisfies Config;
