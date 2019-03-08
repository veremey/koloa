<?php
/*
 * Template Name: Privacy
 */
get_header();
$img = get_field('banner_image');
?>
<div class="section section_first section_autoheight  mod-mb60 is-animated" >
    <div class="section__bg " aria-hidden="true"></div>
    <div class="layout layout_wide">
        <div class="wall__info  mod-pt60 ">
            <h2 class="title__section js-cut mod-uppercase mod-mb60" role="heading" aria-level="2"  data-stagger><?php the_field('prc_title');?></h2>
            <div class="wall__info__text">
                <?php
                $content = get_field('prc_content');
                $content = str_replace('<p', '<p  class="desc__fb"  data-stagger', $content);
                $content = str_replace('<h3', '<h3 class="title__pbb  mod-uppercase js-cut" role="heading" aria-level="2" data-stagger', $content);
                echo $content;
                ?>
            </div>
        </div>
    </div>
</div>
<?php
get_footer();   