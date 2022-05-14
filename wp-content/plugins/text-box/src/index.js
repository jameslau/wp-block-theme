// note: import new block
import { registerBlockType, createBlock } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

// note: why did this throw an error?
// import { __ } from '@wordpress/i18n/build-types';

import { __ } from '@wordpress/i18n';
import v1 from './v1';
import v2 from './v2';

registerBlockType( 'gutenbergblocks/text-box', {
	edit: Edit,
	save,
	// you must place them in reverse chronological order
	deprecated: [ v2, v1 ],
	variations: [
		{
			name: 'gutenbergblocks/gradient-text-box',
			title: __( 'Gradient Text Box' ),
			icon: 'wordpress',
			attributes: {
				gradient: 'red-to-blue',
			},
		},
	],
	transforms: {
		from: [
			{
				// add an object in here to transform
				type: 'block',
				// transform from a paragraph block
				blocks: ['core/paragraph'],
				// this function is responsible for transforming
				transform: ( {content}, align ) => {
					// note: create new text-box block
					return createBlock ( 'gutenbergblocks/text-box', {
						text: content,
						textAlignment: align
					} );
				}
			},
			{
				type: 'enter',
				regExp: /textbox/i,
				transform: () => { 
					return createBlock ( 'gutenbergblocks/text-box', {
						shadow: true,
						gradient: 'red-to-blue',
					} );
				}
			},
			{
				type: 'prefix',
				prefix: 'textbox',
				transform: () => { 
					return createBlock ( 'gutenbergblocks/text-box' );
				}
			}
		],
		to: [
			{
				type: 'block',
				blocks: [ 'core/paragraph' ],

				// note:
				isMatch: ( { text } ) => {
					return text ? true : false;
				},

				// note: receive the attributes of our block  
				transform: ( { text, textAlignment } ) => { 

					// note: creates new paragraph block
					return createBlock ( 'core/paragraph', {
						content: text,
						align: textAlignment 
					} );
				}
			}
		]
	}
});
