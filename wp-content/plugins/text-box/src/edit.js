import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	//console.log( attributes );

	// extract the content from our attributes
	const { text } = attributes;

	return (
		// RichText Docs
		// https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/rich-text/README.md
		<RichText 
			{ ...useBlockProps() }
			
			// callback function
			onChange={ (value) => setAttributes({ text: value }) }

			// set text value to whatever is typed in. this also allows the update function to work in the dashboard.
			value={ text }

			placeholder={ __('Your Text', 'text-box') } 
			tagName='h4' 
			allowedFormats={ ['core/bold'] }
		/>
	);
}
