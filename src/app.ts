import './anim-bg.ts'
import './page-header.ts'
import './page-section.ts'
import './card-grid.ts'
import './image-carousel.ts'
import './nav-bar.ts'
import './expanding-content.ts'

//load css after scripts load, otherwise certain elements don't appear while loading
const linkElem = document.createElement('link');
linkElem.rel = 'stylesheet';
linkElem.href = '/styles.css';
document.head.insertAdjacentElement('beforeend', linkElem);