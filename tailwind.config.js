/** @type {import('tailwindcss').Config} */ 
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	content: [
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],

    theme: {
      extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ]  }