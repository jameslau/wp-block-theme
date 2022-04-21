// var registerBlockType = wp.blocks.registerBlockType;
// assign the @wordpress/element to a variable
// var createElement = wp.element.createElement;

import { registerBlockType } from '@wordpress/blocks';

registerBlockType('gutenbergblocks/firstblock', {
	edit: function () {
		return <p className="firstblock-component">Edit JSX</p>;
	},
	save: function () {
		return <p className="firstblock-component">Save JSX</p>;
	},
});
