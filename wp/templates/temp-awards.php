<?php
/*
 * Template Name: Awards
 */
get_header();
$img = get_field('aws_bn_img');
?>
<!-- 0 -->
<div class="section section_first section_autoheight  is-animated">
    <div class="section__bg " aria-hidden="true"></div>
    <div class="wall   wall_wide wall_autoheight" data-singleSlide="wall__picture">
        <div class="wall__picture wall__picture_wide "  data-stagger >
            <img src="<?php echo $img['url']; ?>" alt="<?php echo $img['alt']; ?>" class="wall__img">
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
        <div class="wall__info mod-mb30  ">
            <h2 class="title__section mod-uppercase" role="heading" aria-level="2">
                <?php the_field('aws_ac_title'); ?>
            </h2>
            <div class="wall__info__text">
                <p class="desc__fb center-text" data-stagger>
                    <?php the_field('aws_ac_cont'); ?>
                </p>
            </div>
            <!-- coins -->
            <div class="coins mod-pt0 is-animated" >
                <?php if ($awards = get_field('aws_slider')) { ?>
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
                ?>
            </div>
            <div class="columns">
                <div class="columns__item">
                    <?php
                    if ($awards = get_field('aws_awards')) {
                        foreach ($awards as $award) {
                            $content = $award['content'];
                            $content = str_replace('<ul', '<ul class="list-dots"', $content);
                            $content = str_replace('<li', '<li class="list-dots__item" data-stagger', $content);
                            ?>
                            <h2 class="title__g mod-uppercase" aria-level="2" role="heading"><?php echo $award['title']; ?></h2>
                            <?php
                            echo $content;
                        }
                    }
                    ?>
                </div>
                <div class="columns__item">
                    <?php
                    if ($awards2 = get_field('aws_awards_2')) {
                        foreach ($awards2 as $award2) {
                            $content = $award2['content'];
                            $content = str_replace('<ul', '<ul class="list-dots"', $content);
                            $content = str_replace('<li', '<li class="list-dots__item" data-stagger', $content);
                            ?>
                            <h2 class="title__g mod-uppercase" aria-level="2" role="heading"><?php echo $award['title']; ?></h2>
                            <?php
                            echo $content;
                        }
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>
</div>
<?php
get_footer();