var state = {
  printFirstSlideLoaded: false,
  printSpecialDealsLoaded: false,
  printHotDealsLoaded: false,
  printSpecialOfferLoaded: false,
  printFeaturedProductsLoaded: false,
  printBlogsLoaded: false
};

(function () {
  // getCategories();
  getWideBannersImgs();
  printFirstSlide();
  printProductTags();
  printHotDeals();
  printSpecialOffer();
  printSpecialDeals();
  printFeaturedProducts();
  printBlogs()
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
    });

    state.printFirstSlideLoaded = true;
    document.dispatchEvent(new CustomEvent('stateChanged', { detail: state }));
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

    state.printHotDealsLoaded = true;
    document.dispatchEvent(new CustomEvent('stateChanged', { detail: state }));
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

    state.printSpecialOfferLoaded = true;
    document.dispatchEvent(new CustomEvent('stateChanged', { detail: state }));
  };
  http.send();
}

function printSpecialDeals() {
  const http = new XMLHttpRequest();
  http.open('GET', 'http://localhost:3000/special-deals');
  http.onload = () => {
    let dealsData = JSON.parse(http.responseText);
    let dealEl = document.querySelector("#spec-deals");

    dealsData.forEach(deal => {
      let dealDiv =
        `<div class="item">
       <div class="products special-product">
        <div class="product">
          <div class="product-micro">
            <div class="row product-micro-row">
              <div class="col col-xs-5">
                <div class="product-image">
                  <div class="image"> <a href="#"> <img src="${deal.url1}" alt=""> </a></div>
                </div>          
              </div>              
              <div class="col col-xs-7">
                <div class="product-info">
                  <h3 class="name"><a href="#">${deal.title1}</a></h3>
                  <div class="rating rateit-small"></div>
                  <div class="product-price"> <span class="price"> ${deal.price1} </span> </div>
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
                  <div class="image"> <a href="#"> <img src="${deal.url2}" alt=""> </a>
                  </div>
                </div>          
              </div>              
              <div class="col col-xs-7">
                <div class="product-info">
                  <h3 class="name"><a href="#">${deal.title2}</a></h3>
                  <div class="rating rateit-small"></div>
                  <div class="product-price"> <span class="price"> ${deal.price2} </span> </div>                  
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
                  <div class="image"> <a href="#"> <img src="${deal.url3}" alt="image">
                    </a> </div>        
              </div>                
              </div>        
              <div class="col col-xs-7">
                <div class="product-info">
                  <h3 class="name"><a href="#">${deal.title3}</a></h3>
                  <div class="rating rateit-small"></div>
                  <div class="product-price"> <span class="price"> ${deal.price3} </span> </div>
                </div>
              </div>        
            </div>      
          </div>
        </div>
        </div>
      </div>
      `
      dealEl.innerHTML += dealDiv;
    });

    state.printSpecialDealsLoaded = true;
    document.dispatchEvent(new CustomEvent('stateChanged', { detail: state }));
  };
  http.send();
}



function printFeaturedProducts() {
  const http = new XMLHttpRequest();
  http.open('GET', 'http://localhost:3000/featured-products');
  http.onload = () => {
    let featuredProductsData = JSON.parse(http.responseText);
    let featuredProductsEl = document.querySelector(".new-arriavls .owl-carousel");

    featuredProductsData.forEach(product => {
      let featuredProductDiv =
        `<div class="item item-carousel">
        <div class="products">
          <div class="product">
            <div class="product-image">
              <div class="image">
                <a href="detail.html">
                  <img src="${product.img1}" alt="">
                  <img src="${product.img2}" alt="" class="hover-image">
                </a>
              </div>
              <div class="tag new"><span>${product.status}</span></div>
            </div>

            <div class="product-info text-left">
              <h3 class="name"><a href="detail.html">${product.title}</a></h3>
              <div class="rating rateit-small"></div>
              <div class="description"></div>
              <div class="product-price"> <span class="price"> ${product.price} </span> <span
                  class="price-before-discount">${product.oldPrice}</span> </div>
            </div>

            <div class="cart clearfix animate-effect">
              <div class="action">
                <ul class="list-unstyled">
                  <li class="add-cart-button btn-group">
                    <button class="btn btn-primary icon" data-toggle="dropdown" type="button"> <i
                        class="fa fa-shopping-cart"></i> </button>
                    <button class="btn btn-primary cart-btn" type="button">Add to cart</button>
                  </li>
                  <li class="lnk wishlist"> <a class="add-to-cart" href="detail.html" title="Wishlist"> <i
                        class="icon fa fa-heart"></i> </a> </li>
                  <li class="lnk"> <a class="add-to-cart" href="detail.html" title="Compare"> <i
                        class="fa fa-signal" aria-hidden="true"></i> </a> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      `
      featuredProductsEl.innerHTML += featuredProductDiv;
    });

    state.printFeaturedProductsLoaded = true;
    document.dispatchEvent(new CustomEvent('stateChanged', { detail: state }));
  };
  http.send();
}


function printBlogs() {
  const http = new XMLHttpRequest();
  http.open('GET', 'http://localhost:3000/blogs');
  http.onload = () => {
    let blogsData = JSON.parse(http.responseText);
    let blogsEl = document.querySelector(".blog-slider");

    blogsData.forEach(blog => {
      let blogDiv =
        `<div class="item">
        <div class="blog-post">
          <div class="blog-post-image">
            <div class="image"> <a href="blog.html"><img src="${blog.img}"
                  ></a> </div>
          </div>                   

          <div class="blog-post-info text-left">
            <h3 class="name"><a href="#">${blog.title}</a></h3>
            <span class="info">${blog.author} &nbsp;|&nbsp; ${blog.date} </span>
            <p class="text">${blog.description}.</p>
          </div>                   
        </div>                  
      </div>              
      `
      blogsEl.innerHTML += blogDiv;
    });

    state.printBlogsLoaded = true;
    document.dispatchEvent(new CustomEvent('stateChanged', { detail: state }));
  };
  http.send();
}




