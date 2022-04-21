// var registerBlockType = wp.blocks.registerBlockType;
// assign the @wordpress/element to a variable
// var createElement = wp.element.createElement;

import { registerBlockType } from '@wordpress/blocks';

// this hook will return all the props that are needed in our block
// import { useBlockProps } from '@wordpress/block-editor';

import Edit from './edit';
import Save from './save';

// included our main styles into our bundle
import './style.scss';

// included our editor styles into our bundle
// note: you can set additional settings only on the editor to assist users
// import "./editor.scss";

registerBlockType('gutenbergblocks/firstblock', {
	edit: Edit,
	save: Save,
});
