<?php
/*
 * Template Name: Distributor
 */
get_header();
$img = get_field('banner_image');
?>
<div class="section section_first section_autoheight  is-animated" >
    <div class="section__bg " aria-hidden="true"></div>
    <div class="wall   wall_wide wall_autoheight" data-singleSlide="wall__picture">
        <div class="wall__picture wall__picture_wide "  data-stagger >
            <img src="<?php echo $img['sizes']['banner']; ?>" alt="<?php echo $img['alt']; ?>" class="wall__img">
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
</div>
<!-- 1 -->
<div class="section section_autoheight  is-animated"  >
    <div class="section__bg " aria-hidden="true"></div>
    <div class="layout layout_wide">
        <div class="wall__info center-text  ">
            <h2 class="title__section js-cut mod-uppercase" role="heading" aria-level="2"  data-stagger>Become a distributor</h2>
            <div class="wall__info__text">
                <?php
                $content = get_field('dst_content');
                $content = str_replace('<p', '<p  class="desc__fb"  data-stagger', $content);
                echo $content;
                $link = get_field('dst_button');
                if ($link) {
                    ?>
                    <div class="text-center">
                        <a href="<?php echo $link['url'];?>" class="link-btn"><?php echo $link['title'];?></a>
                    </div>
                    <?php
                }
                ?>
            </div>
        </div>
    </div>
</div>
<?php
get_footer();