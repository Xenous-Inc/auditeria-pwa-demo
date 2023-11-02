/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
    theme: {
        extend: {
            colors: {
                'bg-app': '#0C0D1B',
                'light-grey': '#ADADAD',
                'grey': '#555353',
                'red': '#F00000',
                'orange': '#EC8F32',
            },
        },
        fontFamily: {
            Ubuntu: ['ubuntu', 'sans-serif'],
        },
    },
    plugins: [],
};
