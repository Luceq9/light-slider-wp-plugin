<?php
/*
Plugin Name: Custom Slider
Description: A simple custom slider plugin.
Version: 1.0
Author: Your Name
*/

function custom_slider_enqueue_scripts() {
    wp_enqueue_style('custom-slider-style', plugins_url('slider.css', __FILE__));
    wp_enqueue_script('custom-slider-script', plugins_url('slider.js', __FILE__), array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'custom_slider_enqueue_scripts');

function custom_slider_shortcode() {
    ob_start();
    ?>
    <div class="slider">
        <div class="slides">
            <div class="slide">
                <img src="<?php echo plugins_url('images/1.png', __FILE__); ?>" alt="Slide 1">
            </div>
            <div class="slide">
                <img src="<?php echo plugins_url('images/2.png', __FILE__); ?>" alt="Slide 2">
            </div>

        </div>
        <div class="controls">
            <button class="prev">Prev</button>
            <button class="next">Next</button>
        </div>
    <?php
    return ob_get_clean();
}
add_shortcode('custom_slider', 'custom_slider_shortcode');