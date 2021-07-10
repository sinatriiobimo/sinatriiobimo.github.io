module.exports = {
  siteTitle: 'Sinatrio Bimo',
  siteDescription:
    'Sinatrio Bimo is a Freelance Software Engineer, who loves exploring tech things and deep diving any tech stack',
  siteKeywords:
    'Sinatrio Bimo, Sinatrio, Bimo, sinatriobimo, software engineer, machine learning, web developer, javascript, developerstudentclubs,',
  siteUrl: 'https://chandrikadeb7.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Sinatrio Bimo',
  location: 'Jakarta, Indonesia',
  email: 'sinabim.w@gmail.com',
  github: 'https://github.com/sinatriiobimo',
  twitterHandle: '@sntrbm',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/sinatriiobimo',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sinatriobimo',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sinatriio/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/sntrbm',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#EAE7AF',
    navy: '#160F30',
    darkNavy: '#A72693',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
