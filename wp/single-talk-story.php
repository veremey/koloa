<?php
get_header();
while (have_posts()) {
    the_post();
    $post_ID = get_the_ID();
    $img = get_field('banner_image');
    $title = get_the_title();
    $time = get_the_date('Y-m-d');
    ?>
    <!-- 1 -->
    <div class="section section_first section_autoheight is-animated mod-mb60">
        <div class="section__bg " aria-hidden="true"></div>
        <div class="layout layout_wide">
            <?php if ($img) { ?>
                <div class="wall   wall_wide wall_autoheight mod-mb60">
                    <div class="wall__picture wall__picture_wide "  data-stagger>
                        <img src="<?php echo $img['sizes']['banner']; ?>" alt="<?php echo $img['alt']; ?>" class="wall__img">
                    </div>
                </div>
            <?php } ?>
            <div class="wall__info mod-mb0">
                <ul class="breadcrumbs">
                    <li><a href="/">Home</a></li>
                    <li><a href="<?php echo $thm_data['site_url'] . '/talk-stories/' ?>">Talk Stories</a></li>
                    <li><?php echo $title; ?></li>
                </ul>
                <article class="article">
                    <h2 class="title__subsection" role="heading" aria-level="2"  data-stagger><?php echo $title; ?></h2>
                    <div class="article__header">
                        <p class="date"><time datetime="<?php echo $time; ?>"><?php the_date(); ?></time></p>

                        <div class="share">
                            <h3 class="share__title">Share</h3>
                            <div data-network="twitter" class="share__link st-custom-button"><i class="icon-tw"></i></div>
    <!--                            <div data-network="linkedin" class="share__link"><i class="icon-insta"></i></div>-->
                            <div data-network="facebook" class="share__link st-custom-button"><i class="icon-fb"></i></div>
                            <div data-network="pinterest" class="share__link st-custom-button"><i class="icon-p"></i></div>
                        </div>

                    </div>
                    <div class="wall__info__text">
                        <?php
                        ob_start();
                        the_content();
                        $content = ob_get_contents();
                        $content = str_replace('<p', '<p class="desc__fb"  data-stagger', $content);
                        ob_end_clean();
                        echo $content;
                        ?>
                    </div>
                </article>
            </div>
        </div>
    </div>
    <!-- 2 -->
    <div class="section section_autoheight  is-animated"  >
        <div class="section__bg " aria-hidden="true"></div>
        <div class="layout layout_wide">
            <div class="wall__info ">
                <div class="columns columns-44 columns-wrap">

                    <?php
                    $args = array(
                        'post_type' => 'talk-story',
                        'post_status' => 'publish',
                        'posts_per_page' => 2,
                        'orderby' => 'rand',
                        'post__not_in' => array($post_ID)
                    );
                    $wp_query = new WP_Query($args);

                    if ($wp_query->have_posts()) {
                        while ($wp_query->have_posts()) {
                            $wp_query->the_post();
                            $title = get_the_title();
                            $link = get_the_permalink();
                            ?>
                            <div class="columns__item">
                                <div class="preview" data-stagger>
                                    <?php if (has_post_thumbnail()) { ?>
                                        <a href="<?php echo $link; ?>" class="preview__pic">
                                            <?php
                                            the_post_thumbnail('story-thumb', array('class' => 'preview__img'));
                                            ?>
                                        </a>
                                        <?php
                                    }
                                    $time = get_the_date('Y-m-d');
                                    ?>
                                    <div class="preview__content">
                                        <a href="<?php echo $link; ?>" class="tpb_link"><h2 class="title__pbb" role="heading" aria-level="2"><?php the_title(); ?></h2></a>

                                        <p class="date"><time datetime="<?php echo $time; ?>"><?php the_date(); ?></time></p>
                                        <div class="preview__text">
                                            <p class="desc__fb" data-stagger><?php echo get_the_excerpt(); ?></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <?php
                        }
                        $wp_query = $temp_query;
                        wp_reset_query();
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>
    <?php
}
get_footer();