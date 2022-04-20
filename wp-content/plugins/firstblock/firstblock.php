 <?php
 
 /**
  * Plugin Name: First Block
  * Plugin URI: https://jameslau.com
  * Description: My first block
  * Author: James Lau
  * Author URI: https://jameslau.com
  */

  function blocks_course_firstblock_init() {
    register_block_type ( __DIR__ );
  }

  add_action( "init", "blocks_course_firstblock_init" );