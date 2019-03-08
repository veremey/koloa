<?php
/*
 * Template Name: Home
 */
get_header();
?>
<div class="section startscreen is-animated" >
    <div class="section__bg " aria-hidden="true" >
        <div class="section__bg_corner section__bg_corner-top js-loadme" data-src="<?php echo $thm_data['dev_dir_url']; ?>img/content/corner-top-2.png" style="height: 80vh;"></div>
        <div class="section__bg_corner section__bg_corner-bottom js-loadme" data-src="<?php echo $thm_data['dev_dir_url']; ?>img/content/corner-bottom-2.png" style="height: 80vh;"></div>
    </div>
    <div class="layout startscreen__layout">
        <div class="startscreen__slide">
            <!-- <div class="slick-custom__dots"> -->
            <!-- </div> -->
            <div class="startscreen__box">
                <div class="startscreen__box_item">
                    <h2 class="title__section" role="heading" aria-level="3"  data-stagger='30'>
                        <?php the_field('hm_bn_title1'); ?><br/><span class="brown"><?php the_field('hm_bn_title2'); ?></span> <?php the_field('hm_bn_title3'); ?>
                        <em class="title_dots"></em>
                    </h2>
                    <div class="startscreen__text" data-stagger='30'>
                        <p class="desc__r"><?php the_field('hm_bn_desc'); ?></p>
                    </div>
                    <?php
                    if ($link = get_field('hm_bn_btn')) {
                        echo '<a href="' . $link['url'] . '" class="btn btn-border" data-stagger="30">' . $link['title'] . '</a>';
                    }
                    ?>
                </div>
            </div>
            <?php if ($slider = get_field('hm_bn_slider')) { ?>
                <div class="startscreen__gallery"  data-stagger='30'>
                    <?php foreach ($slider as $slide) {
                        ?>
                        <div class="startscreen__gallery_item">
                            <div class="startscreen__gallery_content">
                                <img src="<?php echo $slide['image']['sizes']['rum-home-hero']; ?>" alt="<?php echo $slide['image']['alt']; ?>" class="startscreen__gallery_img"/>
                                <p class="desc__pbi"><?php echo $slide['title']; ?></p>

                                <div class="startscreen__arrows">
                                    <button class="startscreen__arrow startscreen__arrow_left">
                                        <i class="arrow-left"></i>
                                    </button>
                                    <button class="startscreen__arrow startscreen__arrow_right">
                                        <i class="arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    <?php }
                    ?>
                </div>
            <?php }
            ?> 
        </div>
    </div>
    <button class="scrolldown js-next-section"  data-stagger='30'>
        Scroll down
        <svg  class="icon-arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 444.819 444.819" style="enable-background:new 0 0 444.819 444.819;" xml:space="preserve">
            <g>
                <path d="M434.252,114.203l-21.409-21.416c-7.419-7.04-16.084-10.561-25.975-10.561c-10.095,0-18.657,3.521-25.7,10.561
                      L222.41,231.549L83.653,92.791c-7.042-7.04-15.606-10.561-25.697-10.561c-9.896,0-18.559,3.521-25.979,10.561l-21.128,21.416
                      C3.615,121.436,0,130.099,0,140.188c0,10.277,3.619,18.842,10.848,25.693l185.864,185.865c6.855,7.23,15.416,10.848,25.697,10.848
                      c10.088,0,18.75-3.617,25.977-10.848l185.865-185.865c7.043-7.044,10.567-15.608,10.567-25.693
                      C444.819,130.287,441.295,121.629,434.252,114.203z"/>
            </g>

        </svg>
        <!-- <i class="icon-arrow"></i> -->
    </button>
</div>
<!-- about -->
<div class="section section_lg_autoheight is-animated" >
    <div class="section__bg " aria-hidden="true"></div>
    <div class="wall  wall_right">
        <div class="wall__picture wall__video js-ppp" data-ppp="video-01">
            <?php
            $img = get_field('hm_abt_video_img');
            echo '<img src="' . $img['url'] . '" alt="' . $img['alt'] . '" class="wall__img" >';
            ?>
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
        <div class="wall__content wall__content-1 " data-stagger >
            <div class="wall__content_item">
                <div class="wall__content_bg">
                    <div class="top-left js-loadme" data-src="<?php echo $thm_data['dev_dir_url']; ?>/img/content/wall-bg-01.svg" style="height: 100px; "></div>
                    <div class="bottom-right js-loadme" data-src="<?php echo $thm_data['dev_dir_url']; ?>/img/content/wall-bg-021.svg" style="height: 100px; "></div>
                </div>
                <h2 class="title__section" role="heading" aria-level="2"  data-stagger ><?php the_field('hm_abt_title'); ?></h2>
                <div class="wall__text"  data-stagger>
                    <p class="desc__f"><?php the_field('hm_abt_desc'); ?></p>
                </div>
                <?php
                if ($link = get_field('hm_abt_btn')) {
                    echo '<a href="' . $link['url'] . '" class="btn btn-border" data-stagger>' . $link['title'] . '</a>';
                }
                ?>
            </div>
        </div>
    </div>
</div>
<?php if ($video_id = get_field('hm_abt_video_id')) { ?>
    <div class="ppp">
        <div class="ppp__screen"></div>
        <div class="ppp__body video__body" id="video-01" tabindex="0">
            <div class="close is-active js-close">
                <span  class="close__item"></span>
            </div>
            <div class="video">
                <a href="https://youtu.be/<?php echo $video_id; ?>" class="video__link">
                    <picture>
                        <source srcset="https://i.ytimg.com/vi_webp/<?php echo $video_id; ?>/maxresdefault.webp" type="image/webp">
                            <img src="https://i.ytimg.com/vi/<?php echo $video_id; ?>/maxresdefault.jpg" alt="Aloha from Kōloa Rum" class="video__media">
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
                            <?php } ?>
                            <!-- about over -->


                            <!-- UNIQUE -->
                            <div class="section  section_lg_autoheight  is-animated">
                                <div class="section__bg " aria-hidden="true"></div>
                                <?php if ($unq_slider = get_field('hm_fet_slider')) { ?>
                                    <div class="layout_wide">
                                        <div class="wall wall_left wall-01">
                                            <div class="wall__content wall__content-2"  data-stagger>
                                                <?php foreach ($unq_slider as $unq_slide) {
                                                    ?>
                                                    <div class="wall__content_item">

                                                        <div class="wall__content_bg">
                                                            <div class="top-right js-loadme" data-src="<?php echo $thm_data['dev_dir_url']; ?>/img/content/wall-bg-03.svg" style="height: 100px; "></div>
                                                            <div class="bottom-left js-loadme" data-src="<?php echo $thm_data['dev_dir_url']; ?>/img/content/wall-bg-04.svg" style="height: 100px; "></div>
                                                        </div>

                                                        <h2 class="title__section" role="heading" aria-level="2"  data-stagger >
                                                            <?php echo $unq_slide['title']; ?>
                                                        </h2>
                                                        <div class="wall__dots" >
                                                            <!-- dots -->
                                                        </div>
                                                        <div class="wall__text" data-stagger >
                                                            <p class="desc__f"><?php echo $unq_slide['content']; ?></p>
                                                        </div>
                                                    </div>
                                                <?php }
                                                ?>
                                            </div>
                                            <div class="wall__picture ">
                                                <?php foreach ($unq_slider as $unq_slide) {
                                                    ?>
                                                    <div class="wall__picture_item">
                                                        <img src="<?php echo $unq_slide['image']['url']; ?>" alt="<?php echo $unq_slide['image']['alt']; ?>" class="wall__img">
                                                    </div>
                                                <?php }
                                                ?>
                                            </div>
                                            <div class="wall__arrows">
                                                <button class="wall__arrow wall__arrow_left"  data-stagger>
                                                    <i class="arrow-left"></i>
                                                </button>
                                                <button class="wall__arrow wall__arrow_right"  data-stagger>
                                                    <i class="arrow-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                <?php }
                                ?>
                            </div>
                            <!-- UNIQUE over -->
                            <!-- 3  products -->
                            <div class="section section_product is-animated">
                                <div class="layout layout_wide">
                                    <h2 class="title__section" role="heading" aria-level="2" data-stagger><?php the_field('hm_prd_title'); ?></h2>
                                    <?php if ($products = get_field('hm_prd_slider')) { ?>
                                        <div class="products">
                                            <?php
                                            foreach ($products as $product) {
                                                $rum_query = false;
                                                $opt_key = 'home_rum_prd_' . $product['product'];
                                                $rum_query = get_transient($opt_key);
                                                if ($rum_query === false) {
                                                    $rum_arg = array(
                                                        'post_type' => 'rum',
                                                        'posts_per_page' => 1,
                                                        'post_status' => 'publish',
                                                        'p' => $product['product']
                                                    );
                                                    $rum_query = new WP_Query($rum_arg);
                                                    set_transient($opt_key, $rum_query, 8 * HOUR_IN_SECONDS);
                                                }
                                                if ($rum_query->have_posts()) {
                                                    while ($rum_query->have_posts()) {
                                                        $rum_query->the_post();
                                                        $post_id = get_the_ID();
                                                        $title_1 = get_field('br_title1', $post_id);
                                                        $title_2 = get_field('br_title2', $post_id);
                                                        $button = get_field('br_link', $post_id);
                                                        ?>
                                                        <div class="products__item"  data-stagger>
                                                            <div class="products__gallery">
                                                                <?php
                                                                if (has_post_thumbnail($post_id)) {
                                                                    the_post_thumbnail('rum-home-prd', array('class' => 'products__img'));
                                                                }
                                                                ?>
                                                                <h3 class="products__name" role="heading" aria-level="3" >
                                                                    <?php echo $title_1; ?><br/><?php echo $title_2; ?>
                                                                </h3>
                                                                <div class="products__frame"></div>
                                                            </div>
                                                            <div class="products__info">
                                                                <h4 class="title__pbi" aria-level="4" role="heading"><?php echo $title_1; ?><?php echo '&nbsp;' . $title_2; ?></h4>
                                                                <div class="products__text">
                                                                    <p class="desc__r"><?php echo $product['content']; ?></p>
                                                                </div>
                                                                <div class="products__btns" >
                                                                    <a href="/rums" class="btn btn-prod" data-stagger>VIEW ALL PRODUCTS</a>
                                                                    <a href="<?php echo $button['url']; ?>" class="btn btn-gold" data-stagger><?php echo $button['title']; ?></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <?php
                                                    }
                                                    wp_reset_query();
                                                }
                                            }
                                            ?>
                                        </div>
                                    <?php }
                                    ?>
                                    <div class="products__arrows">
                                        <button class="products__arrow products__arrow_left"  data-stagger>
                                            <i class="arrow-left"></i>
                                        </button>
                                        <button class="products__arrow products__arrow_right"  data-stagger>
                                            <i class="arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <!-- 4  -->
                            <div class="section  section_lg_autoheight  is-animated">
                                <div class="section__bg " aria-hidden="true"></div>
                                <div class="layout_wide">
                                    <?php if ($hm_rm_slider = get_field('hm_rm_slider')) { ?>
                                        <div class="wall wall_left wall-02">
                                            <div class="wall__content wall__content-2"  data-stagger>
                                                <?php foreach ($hm_rm_slider as $hm_rm_slide) {
                                                    ?>
                                                    <div class="wall__content_item"  data-stagger >
                                                        <div class="wall__content_bg">
                                                            <div class="top-right js-loadme" data-src="<?php echo $thm_data['dev_dir_url']; ?>/img/content/wall-bg-03.svg" style="height: 100px; "></div>
                                                            <div class="bottom-left js-loadme" data-src="<?php echo $thm_data['dev_dir_url']; ?>/img/content/wall-bg-04.svg" style="height: 100px; "></div>
                                                        </div>
                                                        <h2 class="title__section mod-uppercase" role="heading" aria-level="2"  data-stagger >
                                                            <?php echo $hm_rm_slide['title']; ?>
                                                        </h2>
                                                        <div class="wall__text"  data-stagger >
                                                            <p class="desc__f"><?php echo $hm_rm_slide['content']; ?></p>
                                                        </div>
                                                        <?php
                                                        $button = $hm_rm_slide['button'];
                                                        echo '<a href="' . $button['link'] . '" class="btn btn-border"  data-stagger>' . $button['title'] . '</a>';
                                                        ?>
                                                    </div>
                                                <?php }
                                                ?>
                                            </div>
                                            <div class="wall__picture">
                                                <?php foreach ($hm_rm_slider as $hm_rm_slide) {
                                                    ?>
                                                    <div class="wall__picture_item">
                                                        <img src="<?php echo $hm_rm_slide['image']['url']; ?>" alt="<?php echo $hm_rm_slide['image']['alt']; ?>" class="wall__img">
                                                    </div>
                                                <?php }
                                                ?>
                                            </div>
                                            <div class="wall__arrows">
                                                <button class="wall__arrow wall__arrow_left" data-stagger >
                                                    <i class="arrow-left"></i>
                                                </button>
                                                <button class="wall__arrow wall__arrow_right" data-stagger >
                                                    <i class="arrow-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    <?php }
                                    ?>
                                </div>
                            </div>
                            <!-- 5 -->
                            <div class="section section_autoheight   section_lg_autoheight mod-md-flex-only is-animated"  >
                                <div class="layout_wide">
                                    <div class="section__bg " aria-hidden="true" >
                                        <div class="section__bg_corner section__bg_corner-bottom js-loadme" data-src="<?php echo $thm_data['dev_dir_url']; ?>img/content/flower.png" style="height: 70vh;"></div>
                                    </div>
                                    <div class="wall wall_autoheight wall_right wall_wide">
                                        <div class="wall__picture wall__picture_wide "  data-stagger >
                                            <?php
                                            $img = get_field('hm_tr_img1');
                                            ?>
                                            <img src="<?php echo $img['url']; ?>" alt="<?php echo $img['alt']; ?>" class="wall__img">
                                        </div>
                                        <div class="wall__content"  data-stagger >
                                            <div class="wall__content_item">
                                                <h2 class="title__section" role="heading" aria-level="2"  data-stagger>
                                                    <?php the_field('hm_tr_ttl'); ?>
                                                </h2>
                                                <div class="wall__text" data-stagger >
                                                    <p class="desc__f"><?php the_field('hm_tr_cont'); ?></p>
                                                </div>
                                                <?php
                                                $hm_tr_btn = get_field('hm_tr_btn');
                                                echo '<a href="' . $hm_tr_btn['url'] . '" class="btn btn-border" data-stagger >' . $hm_tr_btn['title'] . '</a>';
                                                ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- coins -->
                            <div class="coins is-animated">
                                <?php if ($awards = get_field('hm_aws')) { ?>
                                    <ul class="coins__list">
                                        <?php foreach ($awards as $award) {
                                            ?>
                                            <li class="coins__item"  data-stagger >
                                                <img src="<?php echo $award['image']['sizes']['award-madal']; ?>" alt="<?php echo $award['alt']; ?>" class="coins__img">
                                            </li>
                                        <?php } ?>
                                    </ul>
                                    <?php
                                }
                                if ($button = get_field('hm_aw_btn')) {
                                    ?>
                                    <a href="<?php echo $button['url']; ?>" class="desc__r"  data-stagger ><?php echo $button['title']; ?>Click to view Kōloa's extensive award list!</a>
                                <?php }
                                ?>
                            </div>
                            <!-- 6 -->
                            <div class="section  section_lg_autoheight  section_autoheight mod-md-flex-only  is-animated"  >
                                <div class="layout_wide">
                                    <div class="wall wall_left wall_wide  wall_autoheight ">
                                        <div class="wall__content" data-stagger>
                                            <div class="wall__content_item">
                                                <h2 class="title__section" role="heading" aria-level="2" data-stagger >
                                                    <?php the_field('hm_bd_ttl'); ?>
                                                </h2>
                                                <div class="wall__text" data-stagger>
                                                    <p class="desc__r"><?php the_field('hm_bd_cont'); ?></p>
                                                </div>
                                                <?php
                                                $button = get_field('hm_bd_btn');
                                                if ($button) {
                                                    ?>
                                                    <a href="<?php echo $button['url']; ?>" class="btn btn-border" data-stagger><?php echo $button['title']; ?></a>
                                                <?php }
                                                ?>
                                            </div>
                                        </div>
                                        <div class="wall__picture  ">
                                            <?php
                                            $hm_bd_img = get_field('hm_bd_img');
                                            ?>
                                            <img src="<?php echo $hm_bd_img['url']; ?>" alt="<?php echo $hm_bd_img['alt']; ?>" class="wall__img">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <?php
                            get_footer();