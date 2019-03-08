<?php
/*
 * Template Name: Contact
 */
get_header();
?>
<div class="section section_first section_autoheight mod-pb60 is-animated" >
    <div class="section__bg " aria-hidden="true"></div>
    <div class="layout layout_wide">
        <div class="wall__info  mod-mt60 mod-mb30">
            <h2 class="title__section mod-uppercase mod-mb60 js-cut" role="heading" aria-level="2"  data-stagger>Contact</h2>
            <div class="columns columns-44">
                <div class="columns__item mod-mb30">
                    <h2 class="title__pbb mod-uppercase  mod-mb40" role="heading" aria-level="2"  data-stagger>send us a message</h2>
                    <div class="contw contact">
                        <?php echo do_shortcode('[gravityform id="2" title="false" description="false" ajax="true"]'); ?>
                    </div>
                </div>                   
                <div class="columns__item ">
                    <?php
                    $content = get_field('cnt_cont');
                    $content = str_replace('<p', '<p class="desc__fb"  data-stagger', $content);
                    $content = str_replace('<h2', '<h2 class="title__pbb mod-uppercase  mod-mb30" role="heading" aria-level="2" data-stagger', $content);
                    echo $content;
                    ?>
                </div>
            </div>
        </div>
    </div>
</div>
<?php
get_footer();