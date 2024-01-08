/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
            xxs: '340px',
            xs: '410px',
            sm: '480px',
            s: '590px',
			smd: '650px',
            md: '720px',
            m: '850px',
            lg: '976px',
            l: '1200px',
            xl: '1440px'
        },
        extend: {
            colors: {
                primary: 'hsl(238, 100%, 15%)',
				secondary: 'hsl(0, 0%, 36%)',
				tertiary: 'hsl(236, 6%, 46%)',
				contrast: 'hsl(226, 56%, 40%)',
				bg: 'hsl(0, 0%, 100%)',
                bgGray: 'hsl(0, 0%, 87%)',
            }
        },
	},
	plugins: [
	],
}
