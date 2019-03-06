<?php
global $thm_data;
$thm_data['temp_dir_url'] = get_template_directory_uri();
$thm_data['dev_dir_url'] = content_url('/themes/koloa-rum/dev/static/');
$thm_data['top_logo'] = get_field('top_logo', 'option');
$thm_data['fevicon'] = get_field('fevicon', 'option');

$thm_data['ftr_logo'] = get_field('kr_ftr_logo', 'option');

$thm_data['twt_url'] = get_field('kr_twt_url', 'option');
$thm_data['inst_url'] = get_field('kr_inst_url', 'option');
$thm_data['fb_url'] = get_field('kr_fb_url', 'option');
$thm_data['pint_url'] = get_field('kr_pint_url', 'option');
$thm_data['site_url'] = get_site_url();
$thm_data['site_name'] = get_bloginfo('name');

require_once( dirname(__FILE__) . '/inc/walker.php' );
/* custom posts */
require_once( dirname(__FILE__) . '/inc/posts.php' );
/* mob detect */
require_once( dirname(__FILE__) . '/inc/mob_detect.php' );
global $detect, $is_mobile, $is_tablet;
$detect = new Mobile_Detect;
$is_mobile = $detect->isMobile();
$is_tablet = $detect->isTablet();

if (!function_exists('kr_setup')) {

    function kr_setup() {
// Add default posts and comments RSS feed links to head
        add_theme_support('automatic-feed-links');
// This theme uses Featured Images (also known as post thumbnails) for per-post/per-page.
        add_theme_support('post-thumbnails');
//full Image size
        add_image_size('full', 9999, 9999, true);
// This theme uses wp_nav_menu() in header menu location.
        register_nav_menus(array(
            'header_menu' => __('Top nav menu', 'kn'),
            'footer_menu' => __('Bottom nav menu', 'kn')
        ));
        /**
         * This theme supports custom background color
         */
        $args = array(
            'default-color' => '#ffffff'
        );
        add_theme_support('custom-background', $args);
    }

    add_action('after_setup_theme', 'kr_setup');
}// kr_setup
/**
 * Enqueue scripts and styles for the front end.
 * @return void
 */

function head_script() {
    ?>
    <script type="text/javascript">
        window.AjaxUrl = '<?php echo admin_url('admin-ajax.php'); ?>';
    </script>
    <?php
}

add_action('wp_head', 'head_script');

function scripts() {
    global $thm_data;
    //styles
    wp_enqueue_style('first', $thm_data['dev_dir_url'] . 'css/separate-css/first.css', array(), '1', 'all');
    wp_enqueue_style('main', $thm_data['dev_dir_url'] . 'css/main.css', array(), '1', 'all');
    //scripts
    wp_enqueue_script('gmap', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBsp0mPk9YWoktVHmh7ghwETxNxJT6_BZ4', array(), '1', true);
    wp_enqueue_script('jQuery', $thm_data['dev_dir_url'] . 'js/separate-js/jQuery.min.js', array('jquery'), '1', true);
    wp_enqueue_script('ScrollMagic', $thm_data['dev_dir_url'] . 'js/separate-js/ScrollMagic.min.js', array('jquery'), '1', true);
    wp_enqueue_script('slick', $thm_data['dev_dir_url'] . 'js/separate-js/slick.min.js', array('jquery'), '1', true);
    wp_enqueue_script('TweenMax', $thm_data['dev_dir_url'] . 'js/separate-js/gsap/TweenMax.min.js', array('jquery'), '1', true);
    wp_enqueue_script('gsap', $thm_data['dev_dir_url'] . 'js/separate-js/gsap/jquery.gsap.min.js', array('jquery'), '1', true);
    wp_enqueue_script('pixi', $thm_data['dev_dir_url'] . 'js/separate-js/pixi.min.js', array('jquery'), '1', true);
    wp_enqueue_script('animation', $thm_data['dev_dir_url'] . 'js/separate-js/init-animation.js', array('jquery'), '1', true);
    wp_enqueue_script('main', $thm_data['dev_dir_url'] . 'js/main.js', array('jquery'), '1', true);
    wp_enqueue_script('common', $thm_data['dev_dir_url'] . 'js/separate-js/common.js', array('jquery'), '1', true);
}

add_action('wp_enqueue_scripts', 'scripts');

/**
 * Create a nicely formatted and more specific title element text for output
 * in head of document, based on current view.
 *
 * @param string $title Default title text for current view.
 * @param string $sep Optional separator.
 * @return string The filtered title
 */
function kn_wp_title($title, $sep) {
    global $paged, $page;
    if (is_feed()) {
        return $title;
    }
// Add the site name.
    $title .= get_bloginfo('name');

// Add the site description for the home/front page.
    $site_description = get_bloginfo('description', 'display');
    if ($site_description && ( is_home() || is_front_page())) {
        $title = "$title $sep $site_description";
    }

// Add a page number if necessary.
    if ($paged >= 2 || $page >= 2) {
        $title = " $title $sep " . sprintf(__('Page %s', 'genlandr'), max($paged, $page));
    }

    return $title;
}

add_filter('wp_title', 'kn_wp_title', 10, 2);
/**
 * remove header junk
 */
//add_filter('show_admin_bar', '__return_false');
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('wp_head', 'feed_links');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'feed_links_extra', 3); // Display the links to the extra feeds such as category feeds
remove_action('wp_head', 'feed_links', 2); // Display the links to the general feeds: Post and Comment Feed
remove_action('wp_head', 'rsd_link'); // Display the link to the Really Simple Discovery service endpoint, EditURI link
remove_action('wp_head', 'wp_generator');
/* change */

function gf_spinner_replace($image_src, $form) {
    return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'; // relative to you theme images folder
}

add_filter('gform_ajax_spinner_url', 'gf_spinner_replace', 10, 2);
add_filter('gform_confirmation_anchor', '__return_false');

//browser body class
function browser_body_class($classes) {
    global $is_lynx, $is_gecko, $is_IE, $is_opera, $is_NS4, $is_safari, $is_chrome, $is_iphone;
    if ($is_lynx)
        $classes[] = 'lynx';
    elseif ($is_gecko)
        $classes[] = 'gecko';
    elseif ($is_opera)
        $classes[] = 'opera';
    elseif ($is_NS4)
        $classes[] = 'ns4';
    elseif ($is_safari)
        $classes[] = 'safari';
    elseif ($is_chrome)
        $classes[] = 'chrome';
    elseif ($is_IE) {
        $classes[] = 'ie';
        if (preg_match('/MSIE ([0-9]+)([a-zA-Z0-9.]+)/', $_SERVER['HTTP_USER_AGENT'], $browser_version))
            $classes[] = 'ie' . $browser_version[1];
    } else
        $classes[] = 'unknown';
    if ($is_iphone)
        $classes[] = 'iphone';
    if (stristr($_SERVER['HTTP_USER_AGENT'], "mac")) {
        $classes[] = 'osx';
    } elseif (stristr($_SERVER['HTTP_USER_AGENT'], "linux")) {
        $classes[] = 'linux';
    } elseif (stristr($_SERVER['HTTP_USER_AGENT'], "windows")) {
        $classes[] = 'windows';
    }
    return $classes;
}

add_filter('body_class', 'browser_body_class');
/* THEME OPTIONS */
if (function_exists('acf_add_options_page')) {
    acf_add_options_page(array(
        'page_title' => 'Theme General Settings',
        'menu_title' => 'Theme Settings',
        'menu_slug' => 'theme-settings',
        'capability' => 'edit_posts',
        'redirect' => false
    ));

//    acf_add_options_sub_page(array(
//        'page_title' => 'Home Settings',
//        'menu_title' => 'Home Settings',
//        'parent_slug' => 'theme-settings',
//    ));
}

//SUPPORT SVG
function adams_mime_types($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}

add_filter('upload_mimes', 'adams_mime_types');

function admin_login_logo() {
    ?>
    <style type="text/css">
        body{
            background: #f7f7f7 !important;
        }
        #login h1 a, .login h1 a {
            background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo.svg);
            height: 150px;
            width: 200px;
            background-size: contain;
            background-repeat: no-repeat;
            padding-bottom: 0;
            background-position: center center;

        }
        .login form input {
            text-align: center !important;
        }
        .login form {
            box-shadow: 0 1px 20px rgba(0,0,0,.1) !important;
            text-align: center !important;
        }
    </style>
    <?php
}
add_action('login_enqueue_scripts', 'admin_login_logo');
function placeholder_image($echo = true) {
    $img = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    if ($echo) {
        echo $img;
        return;
    } else {
        return $img;
    }
}
// disable srcset on frontend
add_filter('max_srcset_image_width', create_function('', 'return 1;'));
