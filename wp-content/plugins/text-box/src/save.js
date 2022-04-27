import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { text, alignment } = attributes;
	return (
		<RichText.Content 
		{ ...useBlockProps.save( {
					className: `text-box-align-${ alignment }`,
		} ) } 
		tagName='h4' 

		// this will be the actual text that you see on the front-end
		value={ text } 
		/>
	);
}
