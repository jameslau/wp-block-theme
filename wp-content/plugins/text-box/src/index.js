import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType('gutenbergblocks/text-box', {
	
	// setup the icon if you want a dashicon
	// icon:  {
	// 	src: 'buddicons-activity',
	// 	background: '#f03',
	// 	foreground: '#fff',
	// },
	
	// setup the icon if you want an SVG
	// icon: {
	// 	src: (
	// 		<svg
	// 			version="1.1"
	// 			viewBox="0 0 500 500"
	// 			preserveAspectRatio="xMinYMin meet"
	// 		>
	// 			<circle cx="250" cy="250" r="200" />
	// 		</svg>
	// 	),
	// 	background: '#f03',
	// 	foreground: '#fff',
	// },
	edit: Edit,
	save,
});
