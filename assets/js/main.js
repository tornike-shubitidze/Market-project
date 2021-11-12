(function () {
  // getCategories();
  getWideBannersImgs();
  printFirstSlide();
  printProductTags();
  printHotDeals();
  printSpecialOffer()
})();

function getCategories() {
  const http = new XMLHttpRequest();
  http.open('GET', 'http://localhost:3000/categories');
  http.onload = () => {
    let categories = JSON.parse(http.responseText);
    let categoriNamesDiv = document.querySelector('.megamenu-horizontal .nav');

    function doSomething(subCategories) {
      return `<a href="#"></a>
            <a href="#">test</a>
            <a href="#">test</a>
            <a href="#">test</a>
            <a href="#">test</a>
            <a href="#">test</a>
            <a href="#">test</a>
            <a href="#">test</a>`;
    }

    categories.forEach(category => {
      let categoryListEl = document.createElement('li');
      categoryListEl.innerHTML = `<a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <i class="icon fa ${category.icon}"></i>
            ${category.name}
            </a>
            <ul class="dropdown-menu mega-menu">
                <li class="yamm-content">
                  <div class="row sub-menu">

                    <div class="col-sm-12 col-md-3">
                      <ul class="links list-unstyled">
                        <li>
                          ${doSomething(category.subCategories)}
                        </li>
                      </ul>
                    </div>

                    <div class="col-sm-12 col-md-3">
                      <ul class="links list-unstyled">
                        <li>
                        ${doSomething()}
                        </li>
                      </ul>
                    </div>

                    <div class="col-sm-12 col-md-3">
                      <ul class="links list-unstyled">
                        <li>
                          ${doSomething()}
                        </li>
                      </ul>
                    </div>

                    <div class="col-sm-12 col-md-3">
                      <ul class="links list-unstyled">
                        <li>
                        ${doSomething()}
                        </li>
                      </ul>
                    </div>
                    
                  </div>
                </li>
              </ul>`;

      categoriNamesDiv.appendChild(categoryListEl);
    });

    let catSubEl = document.querySelectorAll('.sub-clothings li a');
    clothingsSubEl.forEach((subName, i) => { subName.innerText = subClothesArray[i] });
  }
  http.send();
}

function getWideBannersImgs() {
  const http = new XMLHttpRequest();
  http.open('GET', 'http://localhost:3000/wide-banners-imgs');
  http.onload = () => {
    let imgsData = JSON.parse(http.responseText);
    if (imgsData.length === 0) {
      return;
    }

    let imgBannerEl = '';

    imgsData.forEach(img => {
      imgBannerEl += `
      <div class="col-md-4 col-sm-4">
         <div class="wide-banner cnt-strip">
           <div class="image"> <img class="img-responsive" src="${img.url}"> </div>
         </div>            
      </div>`
    });

    document.querySelector(".wide-banners .row").innerHTML = imgBannerEl;
  };
  http.send();
}

function printFirstSlide() {
  const http = new XMLHttpRequest();
  http.open('GET', 'http://localhost:3000/first-slide');
  http.onload = () => {
    let slideData = JSON.parse(http.responseText);
    let slideEl = document.querySelector("#owl-main");

    slideData.forEach(item => {
      let slideDiv = `
              <div class="item ${item.status}" style="background-image: url(${item.url});">
                <div class="container-fluid">
                  <div class="caption bg-color vertical-center text-left">
                    <div class="slider-header fadeInDown-1">${item.headerText}</div>
                    <div class="big-text fadeInDown-1"> ${item.bigText}</div>
                    <div class="excerpt fadeInDown-2 hidden-xs">
                     <span> ${item.descriptionText}</span>
                    </div>
                    <div class="button-holder fadeInDown-3">
                       <a href="" class="btn-lg btn btn-uppercase btn-primary shop-now-button">Shop Now</a>
                    </div>
                  </div>                
                </div>               
              </div>
    `
      slideEl.innerHTML += slideDiv;
    })

    jQuery(function () {
      var dragging = true;
      var owlElementID = "#owl-main";

      function fadeInReset() {
        if (!dragging) {
          jQuery(owlElementID + " .caption .fadeIn-1, " + owlElementID + " .caption .fadeIn-2, " + owlElementID + " .caption .fadeIn-3").stop().delay(800).animate({ opacity: 0 }, { duration: 400, easing: "easeInCubic" });
        }
        else {
          jQuery(owlElementID + " .caption .fadeIn-1, " + owlElementID + " .caption .fadeIn-2, " + owlElementID + " .caption .fadeIn-3").css({ opacity: 0 });
        }
      }

      function fadeInDownReset() {
        if (!dragging) {
          jQuery(owlElementID + " .caption .fadeInDown-1, " + owlElementID + " .caption .fadeInDown-2, " + owlElementID + " .caption .fadeInDown-3").stop().delay(800).animate({ opacity: 0, top: "-15px" }, { duration: 400, easing: "easeInCubic" });
        }
        else {
          jQuery(owlElementID + " .caption .fadeInDown-1, " + owlElementID + " .caption .fadeInDown-2, " + owlElementID + " .caption .fadeInDown-3").css({ opacity: 0, top: "-15px" });
        }
      }

      function fadeInUpReset() {
        if (!dragging) {
          jQuery(owlElementID + " .caption .fadeInUp-1, " + owlElementID + " .caption .fadeInUp-2, " + owlElementID + " .caption .fadeInUp-3").stop().delay(800).animate({ opacity: 0, top: "15px" }, { duration: 400, easing: "easeInCubic" });
        }
        else {
          $(owlElementID + " .caption .fadeInUp-1, " + owlElementID + " .caption .fadeInUp-2, " + owlElementID + " .caption .fadeInUp-3").css({ opacity: 0, top: "15px" });
        }
      }

      function fadeInLeftReset() {
        if (!dragging) {
          jQuery(owlElementID + " .caption .fadeInLeft-1, " + owlElementID + " .caption .fadeInLeft-2, " + owlElementID + " .caption .fadeInLeft-3").stop().delay(800).animate({ opacity: 0, left: "15px" }, { duration: 400, easing: "easeInCubic" });
        }
        else {
          jQuery(owlElementID + " .caption .fadeInLeft-1, " + owlElementID + " .caption .fadeInLeft-2, " + owlElementID + " .caption .fadeInLeft-3").css({ opacity: 0, left: "15px" });
        }
      }

      function fadeInRightReset() {
        if (!dragging) {
          jQuery(owlElementID + " .caption .fadeInRight-1, " + owlElementID + " .caption .fadeInRight-2, " + owlElementID + " .caption .fadeInRight-3").stop().delay(800).animate({ opacity: 0, left: "-15px" }, { duration: 400, easing: "easeInCubic" });
        }
        else {
          jQuery(owlElementID + " .caption .fadeInRight-1, " + owlElementID + " .caption .fadeInRight-2, " + owlElementID + " .caption .fadeInRight-3").css({ opacity: 0, left: "-15px" });
        }
      }

      function fadeIn() {
        jQuery(owlElementID + " .active .caption .fadeIn-1").stop().delay(500).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeIn-2").stop().delay(700).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeIn-3").stop().delay(1000).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
      }

      function fadeInDown() {
        jQuery(owlElementID + " .active .caption .fadeInDown-1").stop().delay(500).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeInDown-2").stop().delay(700).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeInDown-3").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
      }

      function fadeInUp() {
        jQuery(owlElementID + " .active .caption .fadeInUp-1").stop().delay(500).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeInUp-2").stop().delay(700).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeInUp-3").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
      }

      function fadeInLeft() {
        jQuery(owlElementID + " .active .caption .fadeInLeft-1").stop().delay(500).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeInLeft-2").stop().delay(700).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeInLeft-3").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
      }

      function fadeInRight() {
        jQuery(owlElementID + " .active .caption .fadeInRight-1").stop().delay(500).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeInRight-2").stop().delay(700).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeInRight-3").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
      }

      jQuery(owlElementID).owlCarousel({

        autoPlay: 5000,
        stopOnHover: true,
        navigation: true,
        pagination: true,
        singleItem: true,
        addClassActive: true,
        transitionStyle: "fade",
        navigationText: ["<i class='icon fa fa-angle-left'></i>", "<i class='icon fa fa-angle-right'></i>"],

        afterInit: function () {
          fadeIn();
          fadeInDown();
          fadeInUp();
          fadeInLeft();
          fadeInRight();
        },

        afterMove: function () {
          fadeIn();
          fadeInDown();
          fadeInUp();
          fadeInLeft();
          fadeInRight();
        },

        afterUpdate: function () {
          fadeIn();
          fadeInDown();
          fadeInUp();
          fadeInLeft();
          fadeInRight();
        },

        startDragging: function () {
          dragging = true;
        },

        afterAction: function () {
          fadeInReset();
          fadeInDownReset();
          fadeInUpReset();
          fadeInLeftReset();
          fadeInRightReset();
          dragging = false;
        }

      });

      if (jQuery(owlElementID).hasClass("owl-one-item")) {
        jQuery(owlElementID + ".owl-one-item").data('owlCarousel').destroy();
      }

      jQuery(owlElementID + ".owl-one-item").owlCarousel({
        singleItem: true,
        navigation: false,
        pagination: false
      });

      jQuery('.home-owl-carousel').each(function () {

        var owl = $(this);
        var itemPerLine = owl.data('item');
        if (!itemPerLine) {
          itemPerLine = 5;
        }
        owl.owlCarousel({
          items: itemPerLine,
          itemsDesktop: [1199, 3],
          itemsTablet: [991, 2],
          navigation: true,
          pagination: false,

          navigationText: ["", ""]
        });
      });

      jQuery('.homepage-owl-carousel').each(function () {

        var owl = $(this);
        var itemPerLine = owl.data('item');
        if (!itemPerLine) {
          itemPerLine = 4;
        }
        owl.owlCarousel({
          items: itemPerLine,
          itemsTablet: [991, 2],
          itemsDesktop: [1199, 3],
          navigation: true,
          pagination: false,

          navigationText: ["", ""]
        });
      });

      jQuery(".blog-slider").owlCarousel({
        items: 3,
        itemsDesktopSmall: [979, 2],
        itemsDesktop: [1199, 3],
        navigation: true,
        slideSpeed: 300,
        pagination: false,
        navigationText: ["", ""]
      });

      jQuery(".best-seller").owlCarousel({
        items: 3,
        navigation: true,
        itemsDesktopSmall: [979, 2],
        itemsDesktop: [1199, 2],
        slideSpeed: 300,
        pagination: false,
        paginationSpeed: 400,
        navigationText: ["", ""]
      });

      jQuery(".brand-slider").owlCarousel({
        items: 6,
        navigation: true,
        slideSpeed: 300,
        pagination: false,
        paginationSpeed: 400,
        navigationText: ["", ""]
      });
      jQuery("#advertisement").owlCarousel({
        items: 1,
        itemsTablet: [978, 1],
        itemsDesktopSmall: [979, 1],
        itemsDesktop: [1199, 1],
        navigation: true,
        slideSpeed: 300,
        pagination: true,
        paginationSpeed: 400,
        navigationText: ["", ""]
      });



    });
  };
  http.send();
}

function printProductTags() {
  const http = new XMLHttpRequest();
  http.open('GET', 'http://localhost:3000/Product-tags');
  http.onload = () => {
    let productTagsData = JSON.parse(http.responseText);
    let productTagEl = document.querySelector(".tag-list");

    productTagsData.forEach(tag => {
      let tagDiv = `
      <a class="item ${tag.status}" title="Phone" href="category.html">${tag.name}</a>
    `
      productTagEl.innerHTML += tagDiv;
    })
  };
  http.send();
}


function printHotDeals() {
  const http = new XMLHttpRequest();
  http.open('GET', 'http://localhost:3000/hot-deals');
  http.onload = () => {
    let dealsData = JSON.parse(http.responseText);
    let dealEl = document.querySelector(".outer-top-ss");

    dealsData.forEach(deal => {
      let dealDiv =
        `<div class="item">
          <div class="products">
           <div class="hot-deal-wrapper">
            <div class="image">
              <a href="#">
                <img src="${deal.url}" alt="">
                <img src="${deal.hoverUrl}" alt="" class="hover-image">
              </a>
            </div>
            <div class="sale-offer-tag"><span>${deal.discount}<br>
                off</span></div>
            <div class="timing-wrapper">
              <div class="box-wrapper">
                <div class="date box"> <span class="key">120</span> <span class="value">DAYS</span> </div>
              </div>
              <div class="box-wrapper">
                <div class="hour box"> <span class="key">20</span> <span class="value">HRS</span> </div>
              </div>
              <div class="box-wrapper">
                <div class="minutes box"> <span class="key">36</span> <span class="value">MINS</span> </div>
              </div>
              <div class="box-wrapper">
                <div class="seconds box"> <span class="key">60</span> <span class="value">SEC</span> </div>
              </div>
            </div>
          </div>
          
          <div class="product-info text-left m-t-20">
            <h3 class="name"><a href="detail.html">${deal.title}</a></h3>
            <div class="rating rateit-small rateit"><button id="rateit-reset-2" data-role="none" class="rateit-reset" aria-label="reset rating" aria-controls="rateit-range-2" style="display: none;"></button><div id="rateit-range-2" class="rateit-range" tabindex="0" role="slider" aria-label="rating" aria-owns="rateit-reset-2" aria-valuemin="0" aria-valuemax="5" aria-valuenow="4" style="width: 70px; height: 14px;" aria-readonly="true"><div class="rateit-selected" style="height: 14px; width: 56px;"></div><div class="rateit-hover" style="height:14px"></div></div></div>
            <div class="product-price"> <span class="price"> ${deal.price} </span> <span class="price-before-discount">${deal.oldPrice}</span> </div>
          </div>
         
          <div class="cart clearfix animate-effect">
            <div class="action">
              <div class="add-cart-button btn-group">
                <button class="btn btn-primary icon" data-toggle="dropdown" type="button"> <i class="fa fa-shopping-cart"></i> </button>
                <button class="btn btn-primary cart-btn" type="button">Add to cart</button>
              </div>
            </div>          
           </div>        
         </div>
        </div>
      `
      dealEl.innerHTML += dealDiv;
    });


    jQuery(".sidebar-carousel").owlCarousel({
      items: 1,
      itemsTablet: [978, 1],
      itemsDesktopSmall: [979, 2],
      itemsDesktop: [1199, 1],
      navigation: true,
      slideSpeed: 300,
      pagination: false,
      paginationSpeed: 400,
      navigationText: ["", ""]
    });
  };
  http.send();
}


function printSpecialOffer() {
  const http = new XMLHttpRequest();
  http.open('GET', 'http://localhost:3000/special-offer');
  http.onload = () => {
    let offersData = JSON.parse(http.responseText);
    let offerEl = document.querySelector("#spec-offer");

    offersData.forEach(offer => {
      let offerDiv =
        `<div class="item">
       <div class="products special-product">
        <div class="product">
          <div class="product-micro">
            <div class="row product-micro-row">
              <div class="col col-xs-5">
                <div class="product-image">
                  <div class="image"> <a href="#"> <img src="${offer.url1}" alt=""> </a></div>
                </div>          
              </div>              
              <div class="col col-xs-7">
                <div class="product-info">
                  <h3 class="name"><a href="#">${offer.title1}</a></h3>
                  <div class="rating rateit-small"></div>
                  <div class="product-price"> <span class="price"> ${offer.price1} </span> </div>
                </div>
              </div>        
            </div>      
          </div>        
        </div>
        <div class="product">
          <div class="product-micro">
            <div class="row product-micro-row">
              <div class="col col-xs-5">
                <div class="product-image">
                  <div class="image"> <a href="#"> <img src="${offer.url2}" alt=""> </a>
                  </div>
                </div>          
              </div>              
              <div class="col col-xs-7">
                <div class="product-info">
                  <h3 class="name"><a href="#">${offer.title2}</a></h3>
                  <div class="rating rateit-small"></div>
                  <div class="product-price"> <span class="price"> ${offer.price2} </span> </div>                  
                </div>
              </div>        
            </div>     
          </div>      
        </div>
        <div class="product">
          <div class="product-micro">
            <div class="row product-micro-row">
              <div class="col col-xs-5">
                <div class="product-image">
                  <div class="image"> <a href="#"> <img src="${offer.url3}" alt="image">
                    </a> </div>        
              </div>                
              </div>        
              <div class="col col-xs-7">
                <div class="product-info">
                  <h3 class="name"><a href="#">${offer.title3}</a></h3>
                  <div class="rating rateit-small"></div>
                  <div class="product-price"> <span class="price"> ${offer.price3} </span> </div>
                </div>
              </div>        
            </div>      
          </div>
        </div>
        </div>
      </div>
      `
      offerEl.innerHTML += offerDiv;
    });

    jQuery(offerEl).owlCarousel({
      items: 1,
      itemsTablet: [978, 1],
      itemsDesktopSmall: [979, 2],
      itemsDesktop: [1199, 1],
      navigation: true,
      slideSpeed: 300,
      pagination: false,
      paginationSpeed: 400,
      navigationText: ["", ""]
    });

  };
  http.send();
}







