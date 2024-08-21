import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

gsap.registerPlugin(MorphSVGPlugin) 

const menu = document.querySelector('#menu');
const menuToggle = menu.querySelector('#menu-toggle');
const menuPanel = menu.querySelector('#menu-panel');
const menuOverlay = menu.querySelector('#menu-overlay');
const menuLogo = menu.querySelector('#menu-logo');
const menuCTA = menu.querySelector('#menu-cta');
const menuBurgerIcon = menu.querySelector('#menu-burger-icon');
const menuBurgerExit = menu.querySelector('#menu-burger-exit');

document.addEventListener('DOMContentLoaded', function() {
    // Burger menu
    menuToggle.addEventListener('click', () => {
        toggleMenu();
    });
    menuOverlay.addEventListener('click', () => {
        toggleMenu();
    });

    // Accordion
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const body = item.querySelector('.accordion-body');
        header.addEventListener('click', () => {
            item.classList.toggle('active');
            body.style.maxHeight = item.classList.contains('active') ? body.scrollHeight + 'px' : 0;
        });
    });
});

function toggleMenu() {
    menu.classList.toggle('is-active');

    if(menu.classList.contains('is-active')) {
        document.querySelector('body').classList.add('overflow-hidden')
        gsap.to(menuOverlay, { 
            duration: 0.3, 
            opacity: 1, 
            onComplete: () => {
                menuOverlay.classList.add('pointer-events-auto')
                menuOverlay.classList.remove('pointer-events-none')
                menuOverlay.parentElement.classList.add('pointer-events-auto')
                menuOverlay.parentElement.classList.remove('pointer-events-none')
            }
        });
        gsap.to(menuPanel, { 
            duration: 0.3, 
            xPercent: -100 
        });
        gsap.to(menuLogo, { 
            duration: 0.3, 
            opacity: 1,
        });
        gsap.to(menuBurgerExit, { 
            duration: 0.2, 
            delay: 0.1,
            opacity: 1,
        });
        gsap.to(menuBurgerIcon, { 
            duration: 0.2,
            opacity: 0,
        });
        gsap.to(menuCTA, { 
            duration: 0.1, 
            opacity: 0,
            onComplete: () => {
                menuCTA.style.display = 'none';
            }
        });
    } else {
        menuOverlay.classList.add('pointer-events-none')
        menuOverlay.classList.remove('pointer-events-auto')
        menuOverlay.parentElement.classList.add('pointer-events-none')
        menuOverlay.parentElement.classList.remove('pointer-events-auto')
        document.querySelector('body').classList.remove('overflow-hidden')

        gsap.to(menuOverlay, { 
            duration: 0.3, 
            opacity: 0,
        });
        gsap.to(menuPanel, { 
            duration: 0.3, 
            xPercent: 0 
        });
        gsap.to(menuBurgerIcon, { 
            duration: 0.2, 
            delay: 0.1,
            opacity: 1,
        });
        gsap.to(menuBurgerExit, { 
            duration: 0.2,
            opacity: 0,
        });
        gsap.to(menuLogo, { 
            duration: 0.3, 
            opacity: 0,
        });
        menuCTA.style.display = 'flex';
        gsap.to(menuCTA, { 
            duration: 0.2, 
            delay: 0.2,
            opacity: 1,
        });
    }
}