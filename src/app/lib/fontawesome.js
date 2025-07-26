import { config, library } from '@fortawesome/fontawesome-svg-core';
import { 
  faMoon, 
  faSun, 
  faCode, 
  faServer, 
  faTools, 
  faBriefcase, 
  faUniversity, 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faExternalLinkAlt, 
  faShoppingCart, 
  faCalendarCheck, 
  faMobileAlt 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub, 
  faLinkedin, 
  faTwitter 
} from '@fortawesome/free-brands-svg-icons';

// Prevent Font Awesome from adding its CSS since we did it manually
config.autoAddCss = false;

// Add icons to the library
library.add(
  faMoon, faSun, faCode, faServer, faTools, 
  faBriefcase, faUniversity, faMapMarkerAlt, 
  faPhone, faEnvelope, faExternalLinkAlt, 
  faShoppingCart, faCalendarCheck, faMobileAlt,
  faGithub, faLinkedin, faTwitter
);