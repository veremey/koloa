<?php

function create_posttype() {
    /* Talk story */
    $labels = array(
        'name' => _x('Talk story', 'post type general name', 'kn'),
        'singular_name' => _x('Talk story', 'post type singular name', 'kn'),
        'add_new' => _x('Add New Talk story', 'book', 'kn'),
        'add_new_item' => __('Add New Talk story', 'kn'),
        'edit_item' => __('Edit Talk story', 'kn'),
        'new_item' => __('New Talk story', 'kn'),
        'view_item' => __('View Talk story', 'kn'),
        'search_items' => __('Search Talk story', 'kn'),
        'not_found' => __('No Talk story found', 'kn'),
        'not_found_in_trash' => __('No Talk story found in Trash', 'kn'),
        'parent_item_colon' => ''
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'talk-story'),
        'has_archive' => true,
        'capability_type' => 'post',
        'hierarchical' => false,
        'menu_position' => null,
        'show_in_rest' => true,
        'rest_base' => 'talk-story',
        'rest_controller_class' => 'WP_REST_Posts_Controller',
        'supports' => array('title', 'editor'),
        'menu_icon' => 'dashicons-groups'
    );
    register_post_type('talk-story', $args);
    /* talk category */
//    $talk_cat_tax_label = array(
//        "name" => "Category",
//        "label" => "Category",
//        "menu_name" => "Category",
//        "all_items" => "All Category",
//        "edit_item" => "Edit Category",
//        "view_item" => "View Category",
//        "update_item" => "Update Category",
//        "add_new_item" => "Add New Category",
//        "new_item_name" => "New Category",
//    );
//    $talks_args_tax = array(
//        "labels" => $talk_cat_tax_label,
//        "hierarchical" => true,
//        "label" => "Category",
//        "show_ui" => true,
//        "query_var" => true,
//        "rewrite" => true,
//        "show_admin_column" => false,
//    );
//    register_taxonomy("story-category", array("talk-story"), $talks_args_tax);
    /* Recipes */
    $labels = array(
        'name' => _x('Recipe', 'post type general name', 'kn'),
        'singular_name' => _x('Recipe', 'post type singular name', 'kn'),
        'add_new' => _x('Add New Recipe', 'book', 'kn'),
        'add_new_item' => __('Add New Recipe', 'kn'),
        'edit_item' => __('Edit Recipe', 'kn'),
        'new_item' => __('New Recipe', 'kn'),
        'view_item' => __('View Recipe', 'kn'),
        'search_items' => __('Search Recipe', 'kn'),
        'not_found' => __('No Recipe found', 'kn'),
        'not_found_in_trash' => __('No Recipe found in Trash', 'kn'),
        'parent_item_colon' => ''
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'recipe'),
        'has_archive' => true,
        'capability_type' => 'post',
        'hierarchical' => false,
        'menu_position' => null,
        'show_in_rest' => true,
        'rest_base' => 'recipe',
        'rest_controller_class' => 'WP_REST_Posts_Controller',
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-carrot'
    );
    register_post_type('recipe', $args);
    /* recipe category */
    $recipe_cat_tax_label = array(
        "name" => "Recipe Category",
        "label" => "Recipe Category",
        "menu_name" => "Recipe Category",
        "all_items" => "All Category",
        "edit_item" => "Edit Category",
        "view_item" => "View Category",
        "update_item" => "Update Category",
        "add_new_item" => "Add New Category",
        "new_item_name" => "New Category",
    );
    $recipes_args_tax = array(
        "labels" => $recipe_cat_tax_label,
        "hierarchical" => true,
        "label" => "Category",
        "show_ui" => true,
        "query_var" => true,
        "rewrite" => true,
        "show_admin_column" => false,
    );
    register_taxonomy("recipe-category", array("recipe"), $recipes_args_tax);
    /* Rums */
    $labels = array(
        'name' => _x('Rum', 'post type general name', 'kn'),
        'singular_name' => _x('Rum', 'post type singular name', 'kn'),
        'add_new' => _x('Add New Rum', 'book', 'kn'),
        'add_new_item' => __('Add New Rum', 'kn'),
        'edit_item' => __('Edit Rum', 'kn'),
        'new_item' => __('New Rum', 'kn'),
        'view_item' => __('View Rum', 'kn'),
        'search_items' => __('Search Rum', 'kn'),
        'not_found' => __('No Rum found', 'kn'),
        'not_found_in_trash' => __('No Rum found in Trash', 'kn'),
        'parent_item_colon' => ''
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'rum'),
        'has_archive' => true,
        'capability_type' => 'post',
        'hierarchical' => false,
        'menu_position' => null,
        'show_in_rest' => true,
        'rest_base' => 'product',
        'rest_controller_class' => 'WP_REST_Posts_Controller',
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-palmtree'
    );
    register_post_type('rum', $args);
    /* product category */
    $product_cat_tax_label = array(
        "name" => "Rum Category",
        "label" => "Rum Category",
        "menu_name" => "Rum Category",
        "all_items" => "All Category",
        "edit_item" => "Edit Category",
        "view_item" => "View Category",
        "update_item" => "Update Category",
        "add_new_item" => "Add New Category",
        "new_item_name" => "New Category",
    );
    $products_args_tax = array(
        "labels" => $product_cat_tax_label,
        "hierarchical" => true,
        "label" => "Category",
        "show_ui" => true,
        "query_var" => true,
        "rewrite" => true,
        "show_admin_column" => false,
    );
    register_taxonomy("rum-category", array("rum"), $products_args_tax);
}

add_action('init', 'create_posttype');
add_filter('manage_taxonomies_for_recipe_columns', 'recipe_category_columns');

function recipe_category_columns($taxonomies) {
    $taxonomies[] = 'recipe-category';
    return $taxonomies;
}

add_filter('manage_taxonomies_for_rum_columns', 'rum_category_columns');

function rum_category_columns($taxonomies) {
    $taxonomies[] = 'rum-category';
    return $taxonomies;
}
