<?php
if (!function_exists('get_field')) {
    die('Please install dependencies');
}
global $thm_data;
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"  <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"  <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"  <?php language_attributes(); ?>> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" <?php language_attributes(); ?>> <!--<![endif]-->
    <head>
        <meta charset="<?php bloginfo('charset'); ?>">
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title><?php wp_title(' | ', true, 'right'); ?></title>
        <link href="<?php echo $thm_data['fevicon']; ?>" rel="shortcut icon">
        <meta content="telephone=no" name="format-detection">
        <meta name="HandheldFriendly" content="true">
        <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
        <link rel="preload" as="font" type="font/woff2" href="<?php echo $thm_data['dev_dir_url']; ?>fonts/karla-bold.woff2" crossorigin />
        <link rel="preload" as="font" type="font/woff2" href="<?php echo $thm_data['dev_dir_url']; ?>fonts/karla-regular.woff2" crossorigin />
        <link rel="preload" as="font" type="font/woff2" href="<?php echo $thm_data['dev_dir_url']; ?>fonts/PlayfairDisplayBold.woff2" crossorigin />
        <link rel="preload" as="font" type="font/woff2" href="<?php echo $thm_data['dev_dir_url']; ?>fonts/PlayfairDisplayBoldItalic.woff2" crossorigin />
        <link rel="preload" as="font" type="font/woff2" href="<?php echo $thm_data['dev_dir_url']; ?>fonts/PlayfairDisplayRegular.woff2" crossorigin />
        <link rel="preload" as="font" type="font/woff2" href="<?php echo $thm_data['dev_dir_url']; ?>fonts/Roboto-Regular.woff2" crossorigin />
        <script>
            (function (H) {
                H.className = H.className.replace(/\bno-js\b/, 'js')
            })(document.documentElement)
        </script>
        <?php
        wp_head();
        ?>
    </head>
    <body class="page">
        <div class="page__wrapper ">
            <header class="header is-animated">
                <div class="layout">
                    <a href="<?php echo $thm_data['site_url']; ?>" class="logo" ><?php echo $thm_data['top_logo']; ?></a>
                    <div class="trigger">
                        <span class="trigger__item"></span>
                    </div>
                    <div class="header__wrap">
                        <nav class="nav">

                            <?php
                            if (has_nav_menu('header_menu')) {
                                wp_nav_menu(array(
                                    'theme_location' => 'header_menu',
                                    'depth' => 4, 'container' => false,
                                    'menu_class' => 'nav__list',
                                    'menu_id' => 'top_nav__list',
                                    'walker' => new Kn_Walker())
                                );
                            }
                            ?>


                        </nav>



                        <div class="header__btns">
                            <?php if ($dist_btn = get_field('hd_btn_1', 'option')) { ?>
                                <a href="<?php echo $dist_btn['url']; ?>" class="btn btn-white" data-stagger ><?php echo $dist_btn['title']; ?></a> 
                                <?php
                            }
                            if ($dist_btn = get_field('hd_btn_2', 'option')) {
                                ?>
                                <a href="<?php echo $dist_btn['url']; ?>" class="btn btn-black" data-stagger ><?php echo $dist_btn['title']; ?></a> 
                            <?php }
                            ?>
                        </div>
                    </div>
                </div>
            </header>	