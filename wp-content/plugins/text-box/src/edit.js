import { __ } from '@wordpress/i18n';

// BlockControls (component) allow you to add custom buttons to our block
import { useBlockProps, RichText, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
// import { ToolbarGroup, ToolbarButton, ToolbarDropdownMenu } from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	// console.log( attributes );

	// extract the content from our attributes
	const { text, alignment } = attributes;

	// create callback function for alignment
	const onChangeAlignment = (newAlignment) => {
		setAttributes( { alignment: newAlignment } );
	}

	// create callback function for text
	const onChangeText = (newText) => {
		setAttributes( { text: newText } );
	}

	return (

		// wrap elements in a fragment
		<>
			<BlockControls>
				<AlignmentToolbar value={ alignment } onChange={ onChangeAlignment } />
			</BlockControls>
			<RichText 

				// note: to properly add classnames, you add them inside the useBlockProps function as an option
				{ ...useBlockProps( {
					// add a template literal in here for the classname
					
					// note: acute or back quote works compared to a single quote. single quote converts the whole line to a string.
					// className: 'text-box-align-${ alignment }',
					
					// note: use acute or back quotes
					className: `text-box-align-${ alignment }`,
				} ) }

				// note: you can add class names this way, but it would override what useBlockProps is doing
				//className="something"
				
				// callback function (inline function)
				// onChange={ (value) => setAttributes({ text: value }) }

				// callback function for text
				onChange={ onChangeText }

				// set text value to whatever is typed in. this also allows the update function to work in the dashboard.
				value={ text }

				placeholder={ __('Your Text', 'text-box') } 
				tagName='h4' 

				// note: pass an empty array if you don't want the user to edit the styles at all
				allowedFormats={ [] }

				// change the alignment of the text
				style={ { textAlign: alignment } }
			/>
		</>

	);
}
