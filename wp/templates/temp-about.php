<?php
/*
 * Template Name: About
 */
get_header();
?>
<!-- 0 -->
<div class="section section_first section_autoheight is-animated" >
    <div class="section__bg " aria-hidden="true"></div>
    <div class="wall  wall_right wall_wide wall_autoheight">
        <div class="wall__picture wall__video js-ppp" data-ppp="video-01" >
            <img src="static/img/content/hero-about.jpg" alt="koloa rum video" class="wall__img" >
                <button class="btn btn-play"  data-stagger>
                    <svg class="wall__play" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <polygon id="triangle"  points="55 40.5 30 53 30 28"></polygon>
                            <circle id="oval" stroke-width="2" cx="40" cy="40" r="39"></circle>
                        </g>
                    </svg>
                    <p>Play video</p>
                </button>
        </div>

    </div>
</div>



<!-- 1 -->
<div class="section section_autoheight  is-animated"  >
    <div class="section__bg " aria-hidden="true"></div>
    <div class="layout layout_wide">

        <div class="wall__info center-text mod-mt60">
            <h2 class="title__section js-cut mod-uppercase" role="heading" aria-level="2"  data-stagger>About Kōloa rum</h2>
            <div class="wall__info__text">
                <p class="desc__fb"  data-stagger>The Kōloa Rum Company is a single-batch, craft distiller and bottler of premium Hawaiian rums.</p>
                <p class="desc__fb"  data-stagger>We were founded to create authentically Hawaiian rums and ready-to-drink cocktails using sustainable practices and to provide meaningful employment for the people of Kaua’i – the Garden Isle — all the while preserving the open agricultural space and natural bounty of the island. </p>
                <p class="desc__fb"  data-stagger>Kaua’i is the natural home for the Kōloa Rum Company. Sugar cane came to Hawaii by ancient Polynesian voyagers in their migration from the South Pacific. Commercial sugar production operations in Hawaii were first established in the town of Koloa in 1835. The initial harvest in 1837 produced two tons of raw sugar and rum production began around this time as well. </p>
                <p class="desc__fb"  data-stagger>The legacy of the sugar and rum in Hawaii lives on today through Kōloa Rum. We are the first and only licensed distillery on the island of Kaua’i, where sugar cane production has been a traditional way of life. In addition, we fully promote sound and sustainable agricultural practices to provide meaningful support and diversity to the local agricultural industry and serve to stimulate employment, increase cultivated acreage and preserve open space.</p>
                <p class="desc__fb"  data-stagger>Everything we do is deeply rooted in our Hawaiian heritage and commitment to support and build our ohana – or family – by bringing people together, creating great memories and sharing the Aloha way of life.</p>
                <p class="desc__fb"  data-stagger>We welcome you to join our Kōloa Rum ohana and share in the Spirit of Aloha. </p>
            </div>
        </div>
    </div>
</div>
<!-- 2 -->
<div class="section  is-animated"  >
    <!-- <div class="layout layout_narrow"> -->
    <div class="full full_autoheight" data-singleSlide="full__item" >
        <div class="full__item">
            <img src="static/img/content/about.jpg" alt="koloa rum" class="full__img">
        </div>
        <div class="full__item">
            <img src="static/img/content/about.jpg" alt="koloa rum" class="full__img">
        </div>
    </div>
    <div class="wall__arrows">
        <button class="wall__arrow wall__arrow_left"  data-stagger >
            <i class="arrow-left"></i>
        </button>
        <button class="wall__arrow wall__arrow_right"  data-stagger >
            <i class="arrow-right"></i>
        </button>
    </div>
    <!-- </div> -->
</div>




<div class="ppp">
    <div class="ppp__screen"></div>

    <div class="ppp__body video__body" id="video-01" tabindex="0">
        <div class="close is-active js-close">
            <span  class="close__item"></span>
        </div>
        <div class="video">
            <a href="https://youtu.be/3fx3IDazJXI" class="video__link">
                <picture>
                    <source srcset="https://i.ytimg.com/vi_webp/3fx3IDazJXI/maxresdefault.webp" type="image/webp">
                        <img src="https://i.ytimg.com/vi/3fx3IDazJXI/maxresdefault.jpg" alt="Aloha from Kōloa Rum" class="video__media">
                            </picture>
                            </a>
                            <button class="video__btn" aria-label="play video">
                                <svg class="wall__play video__button-shape" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <polygon id="triangle"  points="55 40.5 30 53 30 28"></polygon>
                                        <circle id="oval" stroke-width="2" cx="40" cy="40" r="39"></circle>
                                    </g>
                                </svg>
                            </button>
                            </div>
                            </div>
                            </div>




                            <?php
                            get_footer();
                            