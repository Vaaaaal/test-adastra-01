import { gsap } from 'gsap';
// Keep it to make the plugin works
import videojs from 'video.js';
import 'video.js/dist/video-js.min.css';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import Swiper from 'swiper';
import { Navigation, Pagination, EffectCards, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    const accordionCovers = document.querySelectorAll('.accordion-cover');
    accordionCovers.forEach(cover => {
        gsap.set(cover.querySelector('img'), {
            xPercent: 101,
        });
    });
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const body = item.querySelector('.accordion-body');
        header.addEventListener('click', () => {
            if(item.classList.contains('active')) {
                item.classList.remove('active');

                gsap.to(body, {
                    duration: 0.2,
                    maxHeight: 0,
                })

                accordionCovers.forEach(cover => {
                    if(cover.dataset.accordionCover === item.dataset.accordionItem) {
                        gsap.to(cover.querySelector('img'), {
                            duration: 0.3,
                            xPercent: -100.1,
                            onComplete: () => {
                                gsap.set(cover.querySelector('img'), {
                                    xPercent: 100.1,
                                });
                            }
                        })
                    }
                });
            } else {
                accordionCovers.forEach(cover => {
                    if(document.querySelector(".accordion-item.active") && cover.dataset.accordionCover === document.querySelector(".accordion-item.active").dataset.accordionItem) {
                        gsap.to(cover.querySelector('img'), {
                            duration: 0.3,
                            xPercent: -100.1,
                            onComplete: () => {
                                gsap.set(cover.querySelector('img'), {
                                    xPercent: 100.1,
                                });
                            }
                        });
                    }
                });

                if(item.classList.contains('is-crew')) {
                    const crewItems = document.querySelectorAll('.accordion-item.is-crew');
                    crewItems.forEach(crewItem => {
                        crewItem.classList.remove('active');

                        gsap.to(crewItem.querySelector('.accordion-body'), {
                            duration: 0.2,
                            maxHeight: 0,
                        })
                    });
                }
                item.classList.add('active');

                gsap.to(body, {
                    duration: 0.2,
                    maxHeight: body.scrollHeight,
                })

                accordionCovers.forEach(cover => {
                    if(cover.dataset.accordionCover === item.dataset.accordionItem) {
                        gsap.to(cover.querySelector('img'), {
                            duration: 0.3,
                            xPercent: 0,
                        });
                    }
                });
            }
        });
    });

    // Tabs
    document.querySelectorAll('[data-tab-id]').forEach(button => {
        button.addEventListener('click', toggleTab);
    });
    function toggleTab() {
        const element = document.querySelector(`[data-tab-content="${this.dataset.tabId}"`);
        const elementToHide = document.querySelector(`[data-tab-content="${document.querySelector('.tab-button.active').dataset.tabId}"`);
        document.querySelectorAll('.tab-button.active').forEach(button => {
            button.classList.remove('active');
        });
        this.classList.add('active');

        const tl = gsap.timeline();
        tl.to(elementToHide, {
            duration: 0.2,
            opacity: 0,
        }).to(element, {
            duration: 0.2,
            opacity: 1,
            onComplete: () => {
                this.classList.add('active');
            }
        });
    }

    // Announcement bar
    const announcementBar = document.querySelector('#announcementBar');
    if(announcementBar) {
        const announcementBarElements = announcementBar.querySelectorAll('.announcement-bar-element');
        gsap.to(announcementBarElements, { 
            duration: 20, 
            xPercent: -100,
            repeat: -1,
            ease: 'none',
            onComplete: () => {
                gsap.set(announcementBarElements, { clearProps: 'all' });
            }
        });
    }
    
    // Media Item
    const mediaItemWrapper = document.querySelectorAll('.media-item-wrapper');
    if(mediaItemWrapper.length > 0) {
        mediaItemWrapper.forEach(wrapper => {
            const mediaItemElement = wrapper.querySelectorAll('.media-item-element');
            const marqueeTiming = wrapper.dataset.time;

            gsap.to(mediaItemElement, { 
                duration: marqueeTiming,
                xPercent: -100,
                repeat: -1,
                ease: 'none',
                onComplete: () => {
                    gsap.set(mediaItemElement, { clearProps: 'all' });
                },
            });
        });
    }

    // Swiper sliders
    const swiperSliders = document.querySelectorAll('.swiper');
    if(swiperSliders.length > 0) {
        initSliders(swiperSliders);
    }
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

function initSliders(sliders) {
    sliders.forEach(slider => {
        const params = {}

        if(slider.dataset) {
            for (const key in slider.dataset) {
                if (slider.dataset.hasOwnProperty(key)) {
                    params[key] = slider.dataset[key];
                }
            }
        }

        const options = {
            slidesPerView: 1,
        }

        // Check if loop is apply
        if(params.loop) {
            options.loop = true;
        }

        // Checked if rewind is apply
        if(params.rewind) {
            options.rewind = true;
        }

        // Check if autoplay is apply
        if(params.autoplay) {
            if(!options.modules) {
                options.modules = [Autoplay];
            } else {
                options.modules = [...options.modules, Autoplay];
            }

            options.autoplay = {
                delay: params.autoplay,
            }
        }

        // Check if slidesPerView has multiple values
        if(params.slidesperview) {
            const breakpointValue = params.slidesperview.split(';');
            // Example format : data-spaceBetween="320, 1;768, 2;1024, 3"
            if(breakpointValue.length > 1) {
                if(!options.breakpoints) {
                    options.breakpoints = {};
                }

                breakpointValue.forEach(value => {
                    const formattedPerView = value.split(',');

                    if(!options.breakpoints[formattedPerView[0]]) {
                        options.breakpoints[formattedPerView[0].trim()] = {
                            slidesPerView: formattedPerView[1].trim() * 1
                        }
                    } else {
                        options.breakpoints[formattedPerView[0].trim()] = {
                            ...options.breakpoints[formattedPerView[0].trim()],
                            slidesPerView: formattedPerView[1].trim() * 1
                        }
                    }
                });
            }
        }

        // Check if spaceBetween exists
        if(params.spacebetween) {
            // Example format : data-spaceBetween="320, 20px;768, 30%;1024, 50vh"
            const breakpointValue = params.spacebetween.split(';');
            if(breakpointValue.length > 1) {
                if(!options.breakpoints) {
                    options.breakpoints = {};
                }

                breakpointValue.forEach(value => {
                    const formattedSpaceBetween = value.split(',');

                    if(!options.breakpoints[formattedSpaceBetween[0]]) {
                        options.breakpoints[formattedSpaceBetween[0].trim()] = {
                            spaceBetween: formattedSpaceBetween[1].trim()
                        }
                    } else {
                        options.breakpoints[formattedSpaceBetween[0].trim()] = {
                            ...options.breakpoints[formattedSpaceBetween[0].trim()],
                            spaceBetween: formattedSpaceBetween[1].trim()
                        }
                    }
                });
            }
        }

        // Check if effect is apply
        if(params.effect) {
            if(params.effect === 'cards') {
                if(!options.modules) {
                    options.modules = [EffectCards];
                } else {
                    options.modules = [...options.modules, EffectCards];
                }
                
                options.effect = "cards";
                options.grabCursor = true;
                options.cardsEffect = {
                    perSlideOffset: params.perslideoffset | 8,
                    perSlideRotate: params.persliderotate | 1.5,
                }
            }
        }

        // Check if navigation exists
        if(slider.querySelector('.swiper-button-prev') || slider.querySelector('.swiper-button-next')) {
            if(!options.modules) {
                options.modules = [Navigation];
            } else {
                options.modules = [...options.modules, Navigation];
            }

            if(slider.querySelector('.swiper-button-prev')) {
                options.navigation.nextEl = slider.querySelector('.swiper-button-next')
            }
            if(slider.querySelector('.swiper-button-next')) {
                options.navigation.prevEl = slider.querySelector('.swiper-button-prev')
            }
        }

        // Check if pagination exists
        if(slider.querySelector('.swiper-pagination')) {
            if(!options.modules) {
                options.modules = [Pagination];
            } else {
                options.modules = [...options.modules, Pagination];
            }

            options.pagination = {
                el: slider.querySelector('.swiper-pagination'),
                clickable: true,
            }
        }
        new Swiper(slider, options);
    });
}