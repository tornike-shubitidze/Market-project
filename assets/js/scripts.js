jQuery(document).ready(function () {
    "use strict";



    /*===================================================================================*/
    /*	OWL CAROUSEL
    /*===================================================================================*/


    /*===================================================================================*/
    /*  LAZY LOAD IMAGES USING ECHO
    /*===================================================================================*/
    jQuery(function () {
        echo.init({
            offset: 100,
            throttle: 250,
            unload: false
        });
    });

    /*===================================================================================*/
    /*  RATING
    /*===================================================================================*/

    jQuery(function () {
        jQuery('.rating').rateit({ max: 5, step: 1, value: 4, resetable: false, readonly: true });
    });

    /*===================================================================================*/
    /* PRICE SLIDER
    /*===================================================================================*/
    jQuery(function () {

        // Price Slider
        if (jQuery('.price-slider').length > 0) {
            jQuery('.price-slider').slider({
                min: 100,
                max: 700,
                step: 10,
                value: [200, 500],
                handle: "square"

            });

        }

    });


    /*===================================================================================*/
    /* SINGLE PRODUCT GALLERY
    /*===================================================================================*/
    jQuery(function () {
        jQuery('#owl-single-product').owlCarousel({
            items: 1,
            itemsTablet: [768, 3],
            itemsDesktop: [1199, 1],
            itemsTablet: [992, 1],
            itemsDesktopSmall: [768, 3]

        });

        jQuery('#owl-single-product-thumbnails').owlCarousel({
            items: 4,
            pagination: true,
            rewindNav: true,
            itemsTablet: [992, 4],
            itemsDesktopSmall: [768, 4],
            itemsDesktop: [992, 1]
        });

        jQuery('#owl-single-product2-thumbnails').owlCarousel({
            items: 6,
            pagination: true,
            rewindNav: true,
            itemsTablet: [768, 4],
            itemsDesktop: [1199, 3]
        });

        jQuery('.single-product-slider').owlCarousel({
            stopOnHover: true,
            rewindNav: true,
            singleItem: true,
            pagination: true
        });


    });





    /*===================================================================================*/
    /*  WOW 
    /*===================================================================================*/

    jQuery(function () {
        new WOW().init();
    });


    /*===================================================================================*/
    /*  TOOLTIP 
    /*===================================================================================*/
    jQuery("[data-toggle='tooltip']").tooltip();

})