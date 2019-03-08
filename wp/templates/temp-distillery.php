<?php
/*
 * Template Name: Distillery
 */
get_header();
$img_1 = get_field('dis_bar_img_1');
$img_2 = get_field('dis_bar_img_2');
?>
<div class="section section_first section_autoheight is-animated" >
    <div class="section__bg " aria-hidden="true"></div>
    <div class="wall   wall_wide wall_autoheight" data-singleSlide="wall__picture">
        <div class="wall__picture wall__picture_wide "  data-stagger >
            <img src="<?php echo $img_1['sizes']['banner']; ?>" alt="<?php echo $img_1['alt']; ?>" class="wall__img">
        </div>
        <div class="wall__picture wall__picture_wide "  data-stagger >
            <img src="<?php echo $img_2['sizes']['banner']; ?>" alt="<?php echo $img_2['alt']; ?>" class="wall__img">
        </div>
    </div>
</div>
<!-- 1 -->
<div class="section section_autoheight  is-animated"  >
    <div class="section__bg " aria-hidden="true"></div>
    <div class="layout layout_wide">
        <div class="wall__info center-text mod-pt60 mod-lg-pt30  mod-mb0">
            <h2 class="title__section mod-uppercase js-cut" role="heading" aria-level="2"  data-stagger><?php the_field('dis_title'); ?></h2>
            <div class="wall__info__text">
                <?php
                $content1 = get_field('dis_content_1');
                $content1 = str_replace('<p', '<p  class="desc__fb"  data-stagger', $content1);
                echo $content1;
                ?>
            </div>
        </div>
    </div>
</div>
<!-- 2 -->
<div class="section section_autoheight is-animated"  >
    <div class="layout layout_narrow">
        <div class="full " data-singleSlide="full__item" >
            <?php
            if ($slides = get_field('dis_slider')) {
                foreach ($slides as $slide) {
                    ?>
                    <div class="full__item">
                        <img src="<?php echo $slide['image']['url']; ?>" alt="<?php echo $slide['image']['alt']; ?>" class="full__img">
                    </div>
                    <?php
                }
            }
            ?>
        </div>

        <div class="wall__arrows">
            <button class="wall__arrow wall__arrow_left"  data-stagger >
                <i class="arrow-left"></i>
            </button>
            <button class="wall__arrow wall__arrow_right"  data-stagger >
                <i class="arrow-right"></i>
            </button>
        </div>
    </div>
</div>
<!-- 3 -->
<div class="section section_autoheight  is-animated"  >
    <div class="layout layout_wide">
        <div class="wall__info">
            <div class="wall__info__text">
                <?php
                $content2 = get_field('dis_content_2');
                $content2 = str_replace('<p', '<p  class="desc__fb"  data-stagger', $content2);
                echo $content2;
                ?>
            </div>
        </div>
    </div>
</div>
<?php
get_footer();
