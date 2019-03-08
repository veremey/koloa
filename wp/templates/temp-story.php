<?php
/*
 * Template Name: Story
 */
get_header();
?>
<div class="section section_first section_autoheight is-animated"  >
    <div class="section__bg " aria-hidden="true"></div>
    <div class="layout layout_wide">
        <?php if ($banner = get_field('banner_image')) { ?>
            <div class="wall   wall_wide wall_autoheight">
                <div class="wall__picture wall__picture_wide "  data-stagger >
                    <img src="<?php echo $banner['sizes']['banner'] ?>" alt="<?php echo $banner['alt'] ?>" class="wall__img">
                </div>
            </div>
        <?php }
        ?>
        <div class="wall__info center-text mod-mt60">
            <h2 class="title__section mod-uppercase js-cut" role="heading" aria-level="2"  data-stagger><?php the_field('tlks_title'); ?></h2>
            <div class="wall__info__text">
                <p class="desc__fb"  data-stagger><?php the_field('tlks_content'); ?></p>
            </div>
        </div>
        <div class="wall__info ">
            <div class="columns columns-44 columns-wrap" id="stroy-wrap">
                <?php
                if (isset($_GET['q']) && ($_GET['q'] == 'filt')) {
                    if (isset($_GET['pos']) && ( $_GET['pos'] != '')) {
                        $paged = $_GET['pos'];
                    } else {
                        $paged = 1;
                    }
                    $ret = get_story_filt($paged);
                    if (is_array($ret)) {
                        echo $ret[0];
                    } else {
                        echo $ret;
                    }
                } else {
                    $ret = get_story_filt(1);
                    if (is_array($ret)) {
                        echo $ret[0];
                    } else {
                        echo $ret;
                    }
                }
                ?>
            </div>
            <div class="rppagers">
                <?php
                if (is_array($ret)) {
                    echo $ret[1];
                }
                ?>
            </div>
        </div>
    </div>
</div>
<?php
get_footer();
