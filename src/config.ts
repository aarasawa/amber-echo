import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Amber Echo',
  subtitle: 'Home',
  lang: 'en',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 60,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: true,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: false,
    src: 'assets/images/demo-banner.png',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center',      // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: false,         // Display the credit text of the banner image
      text: '',              // Credit text to be displayed
      url: ''                // (Optional) URL link to the original artwork or artist's page
    }
  },
  toc: {
    enable: true,           // Display the table of contents on the right side of the post
    depth: 3                // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [    // Leave this array empty to use the default favicon
    {
      src: '/favicon/favicon.ico',    // Path of the favicon, relative to the /public directory
    }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/aarasawa/amber-echo',     // Internal links should not include the base path, as it is automatically added
      external: true,                               // Show an external link icon and will open in a new tab
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/profile-picture.jpg', 
  name: 'Alexander Arasawa',
  bio: 'Trying to learn more about everything.',
  hobbies: 'Weightlifting, Photography, Gaming, Reading, Programming',
  links: [
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',
      url: 'https://twitter.com',
    },
    {
      name: 'Steam',
      icon: 'fa6-brands:steam',
      url: 'https://steamcommunity.com/id/swampfish/',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/aarasawa',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
