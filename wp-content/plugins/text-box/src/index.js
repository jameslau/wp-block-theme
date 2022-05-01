import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

// note: why did this throw an error?
// import { __ } from '@wordpress/i18n/build-types';

import { __ } from '@wordpress/i18n';

registerBlockType( 'gutenbergblocks/text-box', {
	edit: Edit,
	save,
	variations: [
		{
			name: 'gutenbergblocks/gradient-text-box',
			title: __( 'Gradient Text Box' ),
			icon: 'wordpress',
			attributes: {
				gradient: 'red-to-blue',
			},
		},
	]
});
