<?php
/*
 * Template Name: About
 */
get_header();
$img = get_field('abt_video_img');
?>
<!-- 0 -->
<div class="section section_first section_autoheight is-animated" >
    <div class="section__bg " aria-hidden="true"></div>
    <div class="wall  wall_right wall_wide wall_autoheight">
        <div class="wall__picture wall__video js-ppp" data-ppp="video-01" >
            <img src="<?php echo $img['url']; ?>" alt="<?php echo $img['alt']; ?>" class="wall__img" >
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
<div class="section section_autoheight  is-animated">
    <div class="section__bg " aria-hidden="true"></div>
    <div class="layout layout_wide">
        <div class="wall__info center-text mod-mt60">
            <h2 class="title__section js-cut mod-uppercase" role="heading" aria-level="2"  data-stagger>
                <?php the_field('abt_title');?>
            </h2>
            <div class="wall__info__text">
                <?php 
                $content = get_field('abt_content');
                $content = str_replace('<p', '<p class="desc__fb"  data-stagger', $content);
                echo $content;
                ?>
            </div>
        </div>
    </div>
</div>
<div class="ppp">
    <div class="ppp__screen"></div>
    <div class="ppp__body video__body" id="video-01" tabindex="0">
        <div class="close is-active js-close">
            <span  class="close__item"></span>
        </div>
        <?php
        $video = get_field('abt_video_id');
        ?>
        <div class="video">
            <a href="https://youtu.be/<?php echo $video; ?>" class="video__link">
                <picture>
                    <source srcset="https://i.ytimg.com/vi_webp/<?php echo $video; ?>/maxresdefault.webp" type="image/webp">
                        <img src="https://i.ytimg.com/vi/<?php echo $video; ?>/maxresdefault.jpg" alt="Aloha from Kōloa Rum" class="video__media">
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