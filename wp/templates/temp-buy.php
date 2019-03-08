<?php
/*
 * Template Name: Buy
 */
get_header();
?>
<div class="section section_first section_autoheight  is-animated"  >
    <div class="section__bg " aria-hidden="true"></div>
    <div class="layout layout_wide">
        <div class="wall__info center-text mod-pt60 ">
            <h2 class="title__section mod-uppercase js-cut" role="heading" aria-level="2"  data-stagger>
                <?php the_field('by_title'); ?>
            </h2>
            <div class="wall__info__text">
                <p class="desc__fb center-text"  data-stagger>
                    <?php the_field('by_content'); ?>
                </p>
            </div>
            <div class="columns">
                <div class="columns__item">
                    <?php
                    if ($col_conts = get_field('by_col_1')) {
                        $content = $col_conts;
                        $content = str_replace('<ul', '<ul class="list-dots"', $content);
                        $content = str_replace('<li', '<li class="list-dots__item" data-stagger', $content);
                        echo $content;
                    }
                    ?>
                </div>
                <div class="columns__item">
                    <?php
                    if ($col_conts2 = get_field('by_col_2')) {
                        $content = $col_conts2;
                        $content = str_replace('<ul', '<ul class="list-dots"', $content);
                        $content = str_replace('<li', '<li class="list-dots__item" data-stagger', $content);
                        echo $content;
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>
</div>
<?php
get_footer();
