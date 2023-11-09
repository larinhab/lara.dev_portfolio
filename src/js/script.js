import { navFunc } from './nav.js';
import { toggleMode } from './toggle.js';
import * as translate from './translate.js'


// window.sr = ScrollReveal({ reset: true });

ScrollReveal().reveal(".grid", {duration: 2000, delay: 500});

ScrollReveal().reveal(".box-projects", {duration: 2000, delay: 500});

ScrollReveal().reveal(".container-contact-me", {duration: 2000, delay: 500});


toggleMode()
toggleTranslate()
