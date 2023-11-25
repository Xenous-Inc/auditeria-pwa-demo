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
                'player-bg': '#151516',
                'rating-red': '#ff0000',
                'rating-green': '#01B268',
            },
        },
        fontFamily: {
            ubuntu: ['ubuntu', 'sans-serif'],
        },
    },
    plugins: [],
};
