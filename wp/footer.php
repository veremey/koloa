<?php
global $thm_data;
?>
<!-- map -->
<div class="section section_map is-animated"  >
    <div class="section__bg " aria-hidden="true"></div>
    <h2 class="title__section js-cut" aria-level="2" role="heading" data-stagger >
        <?php the_field('ft_map_title','option');?>
    </h2>
    
    <div class="map" data-stagger >
        <!--        <div id="map"></div>-->
        <div class="map__wrap">
            <form action="/" method="post" class="map__form">
                <fieldset class="map__fieldset">
                    <input  type="text" id="zip" class="map__zip" placeholder="Enter ZIP code"  data-stagger >
                    <button class="btn map__btn anim-buble" data-stagger>check</button>
                </fieldset>
            </form>
            <div class="map__location"  data-stagger >
                <h2 class="title__g" role="heading" aria-level="2"  data-stagger>
                    <?php the_field('ft_map_adr_ttl','option');?>
                </h2>
                <div class="map__address"  data-stagger >
                    <p class="desc__rl"><?php the_field('ft_map_adr_line_1','option');?></p>
                    <p class="desc__rl"><?php the_field('ft_map_adr_line_2','option');?></p>
                </div>
            </div>
        </div>
    </div>
    <div class="section_buy is-animated">
        <h2 class="title__section js-cut" aria-level="2" role="heading" data-stagger>
            <?php the_field('ft_map_ftr','option');?>
        </h2>
        <?php $button = get_field('ft_map_btn','option');?>
        <a class="btn btn-border" href="<?php echo $button['link'];?>" data-stagger >
            <i class="icon-drizly"></i>
            <?php echo $button['title'];?>
        </a>
    </div>
</div>
</div>
<footer class="footer">
    <div class="footer__container">
        <div class="footer__column  footer__column_logo">
            <a href="<?php echo $thm_data['site_url']; ?>" class="footer__link">
                <img src="<?php echo $thm_data['dev_dir_url'] . 'img/content/logo.svg'; ?>" alt="<?php echo $thm_data['site_name']; ?>">
            </a>
        </div>
        <div class="footer__column footer__column_center ">
            <div class="footer__nav">
                <div class="footer__nav_column">
                    <h3 class="title__f" aria-level="3"  role="heading">Links</h3>
                    <?php
                    ob_start();
                    if (has_nav_menu('footer_menu')) {
                        wp_nav_menu(array(
                            'theme_location' => 'footer_menu',
                            'depth' => 1,
                            'container' => false,
                            'menu_class' => 'footer__list',
                            'menu_id' => 'footer__list'
                        ));
                    }
                    $menu = ob_get_contents();
                    $menu = str_replace('menu-item', 'footer__item', $menu);
                    $menu = str_replace('<a', '<a class="footer__link"', $menu);
                    ob_end_clean();
                    ob_flush();
                    echo $menu;
                    ?>
                </div>
                <div class="footer__nav_column">
                    <h3 class="title__f" aria-level="3"  role="heading">Find Us</h3>
                    <div class="desc__f">
                        <?php the_field('ftr_address', 'option'); ?>
                    </div>
                    <div class="desc__f">
                        <?php the_field('ftr_phone_email', 'option'); ?>
                    </div>
                    <p class="desc__or"><?php the_field('ftr_desc', 'option'); ?></p>
                    <div class="footer__column">
                        <img src="<?php echo $thm_data['dev_dir_url']; ?>img/content/f-logo-01.png" alt="responsible drinking logo" class="footer__img">
                        <img src="<?php echo $thm_data['dev_dir_url']; ?>img/content/f-logo-02.png" alt="drink in moderation logo" class="footer__img">
                    </div>
                </div> 
            </div>
            <div class="connect">
                <h3 class="title__f" role="heading" aria-level="3">Stay connected!</h3>

                <div class="connect__form">
                    <?php
                    echo do_shortcode('[gravityform id="1" title="false" description="false" ajax="true"]');
                    ?>
                </div>
            </div>
        </div>
        <div class="footer__column footer__column_right">
            <div class="insta">
                <div class="insta__header">
                    <div class="insta__user">
                        <div class="insta__user_pic">
                            <img src="static/img/content/inst-koloa.jpg"  class="insta__user_img" alt="instagramm user logo">
                        </div>
                        <h3 class="title__f" role="heading" aria-level="3" >koloarum</h3>
                    </div>
                    <a href="#" class="btn btn-blue">Follow</a>
                </div>
                <div class="insta__body">
                    <div class="insta__pic"><img src="static/img/content/inst-01.jpg" alt="" class="insta__img"></div>
                    <div class="insta__pic"><img src="static/img/content/inst-01.jpg" alt="" class="insta__img"></div>
                    <div class="insta__pic"><img src="static/img/content/inst-01.jpg" alt="" class="insta__img"></div>
                    <div class="insta__pic"><img src="static/img/content/inst-01.jpg" alt="" class="insta__img"></div>
                    <div class="insta__pic"><img src="static/img/content/inst-01.jpg" alt="" class="insta__img"></div>
                    <div class="insta__pic"><img src="static/img/content/inst-01.jpg" alt="" class="insta__img"></div>
                    <div class="insta__pic"><img src="static/img/content/inst-01.jpg" alt="" class="insta__img"></div>
                    <div class="insta__pic"><img src="static/img/content/inst-01.jpg" alt="" class="insta__img"></div>
                    <div class="insta__pic"><img src="static/img/content/inst-01.jpg" alt="" class="insta__img"></div>
                </div>
            </div>
            <div class="socio">
                <h3 class="title__f" aria-level="3" role="heading">Follow Us</h3>
                <ul class="socio__list">
                    <li class="socio__item">
                        <a target="_blank" href="<?php the_field('twt_url', 'options'); ?>" class="socio__link">
                            <svg viewBox="0 0 24 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  class="socio__img">
                            <g >
                            <g transform="translate(-928.000000, -5685.000000)" >
                            <g transform="translate(10.000000, 5443.000000)">
                            <path d="M942,244.367692 C941.1075,244.769231 940.1565,245.035385 939.165,245.164615 C940.185,244.54 940.9635,243.558462 941.3295,242.375385 C940.3785,242.956923 939.3285,243.367692 938.2095,243.596923 C937.3065,242.610769 936.0195,242 934.6155,242 C931.8915,242 929.6985,244.267692 929.6985,247.047692 C929.6985,247.447692 929.7315,247.832308 929.8125,248.198462 C925.722,247.993846 922.1025,245.983077 919.671,242.92 C919.2465,243.675385 918.9975,244.54 918.9975,245.470769 C918.9975,247.218462 919.875,248.767692 921.183,249.664615 C920.3925,249.649231 919.617,249.413846 918.96,249.043077 C918.96,249.058462 918.96,249.078462 918.96,249.098462 C918.96,251.550769 920.6655,253.587692 922.902,254.056923 C922.5015,254.169231 922.065,254.223077 921.612,254.223077 C921.297,254.223077 920.979,254.204615 920.6805,254.136923 C921.318,256.135385 923.127,257.604615 925.278,257.652308 C923.604,258.995385 921.4785,259.804615 919.1775,259.804615 C918.774,259.804615 918.387,259.786154 918,259.735385 C920.1795,261.176923 922.7625,262 925.548,262 C934.602,262 939.552,254.307692 939.552,247.64 C939.552,247.416923 939.5445,247.201538 939.534,246.987692 C940.5105,246.276923 941.331,245.389231 942,244.367692 Z" ></path>
                            </g>
                            </g>
                            </g>
                            </svg>
                        </a>
                    </li>
                    <li class="socio__item">
                        <a target="_blank" href="<?php the_field('inst_url', 'options'); ?>" class="socio__link">
                            <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  class="socio__img">
                            <g  stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-985.000000, -5683.000000)" fill="#333742">
                            <g transform="translate(10.000000, 5443.000000)">
                            <g transform="translate(975.000000, 240.000000)">
                            <path d="M16.5,0 L7.5,0 C3.3585,0 0,3.3585 0,7.5 L0,16.5 C0,20.6415 3.3585,24 7.5,24 L16.5,24 C20.6415,24 24,20.6415 24,16.5 L24,7.5 C24,3.3585 20.6415,0 16.5,0 Z M21.75,16.5 C21.75,19.395 19.395,21.75 16.5,21.75 L7.5,21.75 C4.605,21.75 2.25,19.395 2.25,16.5 L2.25,7.5 C2.25,4.605 4.605,2.25 7.5,2.25 L16.5,2.25 C19.395,2.25 21.75,4.605 21.75,7.5 L21.75,16.5 Z"  fill-rule="nonzero"></path>
                            <path d="M12,6 C8.6865,6 6,8.6865 6,12 C6,15.3135 8.6865,18 12,18 C15.3135,18 18,15.3135 18,12 C18,8.6865 15.3135,6 12,6 Z M12,15.75 C9.933,15.75 8.25,14.067 8.25,12 C8.25,9.9315 9.933,8.25 12,8.25 C14.067,8.25 15.75,9.9315 15.75,12 C15.75,14.067 14.067,15.75 12,15.75 Z"  fill-rule="nonzero"></path>
                            <circle cx="18.45" cy="5.55" r="1"></circle>
                            </g>
                            </g>
                            </g>
                            </g>
                            </svg>
                        </a>
                    </li>
                    <li class="socio__item">
                        <a target="_blank" href="<?php the_field('fb_url', 'options'); ?>" class="socio__link">
                            <svg viewBox="0 0 14 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  class="socio__img">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-1040.000000, -5683.000000)" fill="#333742">
                            <g id="Footer" transform="translate(10.000000, 5443.000000)">
                            <g id="facebook-(1)" transform="translate(1030.000000, 240.000000)">
                            <path d="M7.5,8.25 L7.5,5.25 C7.5,4.422 8.172,3.75 9,3.75 L10.5,3.75 L10.5,0 L7.5,0 C5.0145,0 3,2.0145 3,4.5 L3,8.25 L0,8.25 L0,12 L3,12 L3,24 L7.5,24 L7.5,12 L10.5,12 L12,8.25 L7.5,8.25 Z" id="Path"></path>
                            </g>
                            </g>
                            </g>
                            </g>
                            </svg>
                        </a>
                    </li>
                    <li class="socio__item">
                        <a target="_blank" href="<?php the_field('pint_url', 'options'); ?>" class="socio__link">
                            <svg class="socio__img" version="1.1"xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 100.001 100.001" style="enable-background:new 0 0 100.001 100.001;" xml:space="preserve">
                            <g>
                            <path  d="M43.081,66.14c-2.626,13.767-5.833,26.966-15.333,33.861c-2.932-20.809,4.307-36.436,7.668-53.027
                                   c-5.73-9.646,0.689-29.062,12.777-24.277c14.873,5.885-12.881,35.865,5.75,39.611c19.453,3.908,27.395-33.752,15.332-46
                                   C51.847-1.376,18.542,15.905,22.638,41.224c0.996,6.191,7.391,8.068,2.555,16.611c-11.154-2.473-14.484-11.27-14.055-23
                                   c0.69-19.197,17.25-32.639,33.86-34.498c21.006-2.352,40.721,7.711,43.443,27.471c3.066,22.303-9.48,46.459-31.943,44.721
                                   C50.41,72.056,47.853,69.04,43.081,66.14z"/>
                            </g>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>			
        </div>
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>