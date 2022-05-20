module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],

    },
    extend: {
      backgroundImage: {
        'home': "url('/assets/img/banners/homebanner.png')",
        'about': "url('/assets/img/banners/about.png')",
        'contact': "url('/assets/img/banners/contact.png')",
        'technology': "url('/assets/img/banners/technology.png')",
        'blog': "url('/assets/img/banners/blog.png')",
        'service': "url('/assets/img/banners/services.png')",
        'singleBlog': "url('/assets/img/banners/singleBlog.png')",
        'shinoj': "url('/assets/img/shinoj.png')",
        'heena': "url('/assets/img/heena.png')",
        'video': "url('/assets/img/banners/videobanner.png')",

      },
      boxShadow: {
        'xl': '5px 35px 40px -5px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
