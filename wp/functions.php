<?php
global $thm_data;
$thm_data['temp_dir_url'] = get_template_directory_uri();
$thm_data['dev_dir_url'] = content_url('/themes/koloa-rum/dev/static/');
$thm_data['top_logo'] = get_field('top_logo', 'option');
$thm_data['fevicon'] = get_field('fevicon', 'option');
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


//rum archive Image size
        add_image_size('rum-arc', 100, 210, true);
//rum home hero Image size
        add_image_size('rum-home-hero', 250, 735, true);
//rum home product sec Image size
        add_image_size('rum-home-prd', 125, 375, true);
//award Image size
        add_image_size('award-madal', 152, 152, true);
//story thumb Image size
        add_image_size('story-thumb', 486, 307, true);
//story banner Image size
        add_image_size('banner', 1350, 633, true);

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
    wp_enqueue_style('wpmain', $thm_data['temp_dir_url'] . '/assets/css/main.css', array(), '1', 'all');
//scripts
    //wp_enqueue_script('gmap', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBsp0mPk9YWoktVHmh7ghwETxNxJT6_BZ4', array(), '1', true);
    wp_enqueue_script('jQuery', $thm_data['dev_dir_url'] . 'js/separate-js/jQuery.min.js', array('jquery'), '1', true);
    wp_enqueue_script('ScrollMagic', $thm_data['dev_dir_url'] . 'js/separate-js/ScrollMagic.min.js', array('jquery'), '1', true);
    wp_enqueue_script('slick', $thm_data['dev_dir_url'] . 'js/separate-js/slick.min.js', array('jquery'), '1', true);
    wp_enqueue_script('TweenMax', $thm_data['dev_dir_url'] . 'js/separate-js/gsap/TweenMax.min.js', array('jquery'), '1', true);
    wp_enqueue_script('gsap', $thm_data['dev_dir_url'] . 'js/separate-js/gsap/jquery.gsap.min.js', array('jquery'), '1', true);
    wp_enqueue_script('pixi', $thm_data['dev_dir_url'] . 'js/separate-js/pixi.min.js', array('jquery'), '1', true);
    wp_enqueue_script('animation', $thm_data['dev_dir_url'] . 'js/separate-js/init-animation.js', array('jquery'), '1', true);
    wp_enqueue_script('main', $thm_data['dev_dir_url'] . 'js/main.js', array('jquery'), '1', true);
    wp_enqueue_script('commonjs', $thm_data['dev_dir_url'] . 'js/separate-js/common.js', array('jquery'), '1', true);
    if (is_single()) {
        wp_enqueue_script('sharethis', '//platform-api.sharethis.com/js/sharethis.js#property=5c81f3dadf6421001143b5c9&product=custom-share-buttons', array(), '1', false);
    }
    wp_enqueue_script('wpapp', $thm_data['temp_dir_url'] . '/assets/js/app.js', array('jquery'), '1', true);
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
/* stay connected form */
add_filter('gform_submit_button_1', 'form_submit_button', 10, 2);

function form_submit_button($button, $form) {
    return "<button class='btn connect__btn anim-buble' id='gform_submit_button_{$form['id']}'>subscribe</button>";
}

//talk story
//pagination
function get_pagination($pages = '', $range = 1, $paged = 1) {
    $showitems = ($range * 2) + 1;
    if (empty($paged))
        $paged = 1;
    if ($pages == '') {
        global $wp_query;
        $pages = $wp_query->max_num_pages;
        if (!$pages) {
            $pages = 1;
        }
    }
    $ret = '';
    if (1 != $pages) {
        $ret = '<div class="clear-fix"></div>';
        $ret .= '<ul class="rp-pager" id="rp-pager">';
        if ($paged > 2) {
//$ret .= "<a href='" . get_pagenum_link(1) . "'>«</a>";
            $ret .= "<li class=\"ar-page\"><a data-page=" . 1 . " class=\"inactive left-pfr\" href=\"#\"><div><span></span><span></span></div></a></li>";
        }
        if ($paged > 1) {
//$ret .= "<a href='" . get_pagenum_link($paged - 1) . "'>‹</a>";
            $ret .= "<li class=\"ar-page\"><a aria-disable='false' data-page=" . ($paged - 1) . " class=\"inactive prevp\" href=\"#\">PREV</a></li>";
        }
        for ($i = 1; $i <= $pages; $i++) {
            if ($paged == $i) {
                $ret .= "<li class='op'><a aria-disable='true' tabindex='-1' data-page=" . $i . " class=\"current disabled\" href=\"#\">" . $i . "</a></li>";
            } else {
                $ret .= "<li class='op'><a aria-disable='false' data-page=" . $i . " href=\"#\" class=\"inactive\">" . $i . "</a></li>";
            }
        }
        if ($paged < $pages) {
//  $ret .= "<a href='" . get_pagenum_link($paged + 1) . "'>›</a>";
            $ret .= "<li class=\"ar-page\"><a aria-disable='false' data-page=" . ($paged + 1) . " class=\"inactive nextp\" href=\"#\">NEXT</a></li>";
        }
//        if ($paged < $pages - 1 && $paged + $range - 1 < $pages && $showitems < $pages) {
////  $ret .= "<a href='" . get_pagenum_link($pages) . "'>»</a>";
//            $ret .= "<li class=\"ar-page\"><a data-page=" . ($pages) . " class=\"inactive right-pfr\" href=\"#\"><div><span></span><span></span></div></a></li>";
//        }
        $ret .= '</ul>';
    }
    return $ret;
}

//talk story
function get_story_filt($paged) {
    $opt_key = urlencode('get_story_filt' . $paged);
    global $wp_query;
    $temp_query = $wp_query;
    $wp_query = false;
    $wp_query = get_transient($opt_key);
    if ($wp_query === false) {
        $args = array(
            'post_type' => 'talk-story',
            'post_status' => 'publish',
            'posts_per_page' => 4,
            'paged' => $paged,
            'order' => 'DESC'
        );
        $wp_query = new WP_Query($args);
        //set_transient($opt_key, $wp_query, 8 * HOUR_IN_SECONDS);
    }
    if ($wp_query->have_posts()) {
        $ret = '';
        $num_post = $wp_query->found_posts;
        while ($wp_query->have_posts()) {
            $wp_query->the_post();
            $title = get_the_title();
            $post_id = get_the_id();
            $link = get_the_permalink();
            $ret .= '<div class="columns__item">';
            $stagger = ($paged == 1) ? 'data-stagger' : 'data-stagger';
            $ret .= '<div class="preview" ' . $stagger . '>';
            if (has_post_thumbnail()) {
                ob_start();
                the_post_thumbnail('story-thumb', array('class' => 'preview__img'));
                $ret .= '<a href="' . $link . '" class="preview__pic">';
                $ret .= ob_get_contents();
                $ret .= '</a>';
                ob_end_clean();
            }
            $ret .= '<div class="preview__content">';
            $ret .= '<a href="' . $link . '" class="tpb_link"><h2 class="title__pbb" role="heading" aria-level="2">' . get_the_title() . '</h2></a>';
            $time = get_the_date('Y-m-d');
            $ret .= '<p class="date"><time datetime="' . $time . '">' . get_the_date() . '</time></p>';
            $ret .= '<div class="preview__text">';
            $ret .= '<p class="desc__fb" ' . $stagger . '>' . get_the_excerpt() . '</p>';
            $ret .= '</div>';
            $ret .= '</div>';
            $ret .= '</div>';
            $ret .= '</div>';
        }
        $pagers = '';
        $pagers = get_pagination('', '', $paged);
        $wp_query = $temp_query;
        wp_reset_query();

        return array($ret, $pagers);
    } else {
        return '<div class="nr-notice">Sorry, Nothing Found</div>';
//        return $args;
    }
}

add_action('wp_ajax_story_filt', 'ajax_story_filt_fun');
add_action('wp_ajax_nopriv_story_filt', 'ajax_story_filt_fun');

function ajax_story_filt_fun() {
    if ($_POST) {
        $ev_action = $_POST['ev_action'];
        $my_posts = '';
        $page = $_POST['pos'];
        $return = get_story_filt($page);
        if (is_array($return)) {
            $ret = $return[0];
            $pager_new = $return[1];
        } else {
            $ret = $return;
        }
// $ret.= '</div>';
        $response = array('reqstatus' => 'success', 'html' => $ret,
            'ev_action' => $ev_action, 'pager_new' => $pager_new);
        $response = json_encode($response);
        header("Content-Type: application/json");
        echo $response;
        exit;
    }
}

// "Read More" for excerpt
function kr_excerpt_more($more) {
    global $post;
    return '... <a class="link-more" href="' . get_permalink($post->ID) . '">Read More ></a>';
}
add_filter('excerpt_more', 'kr_excerpt_more');
//excerpt length
function kr_excerpt_length($length) {
    return 35;
}
add_filter('excerpt_length', 'kr_excerpt_length');