<?php

function create_posttype() {
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
        'menu_icon' => 'dashicons-groups'
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
}

add_action('init', 'create_posttype');
add_filter('manage_taxonomies_for_recipe_columns', 'recipe_category_columns');

function recipe_category_columns($taxonomies) {
    $taxonomies[] = 'recipe-category';
    return $taxonomies;
}
