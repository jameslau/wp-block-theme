
import { __ } from '@wordpress/i18n';
import { 
	useBlockProps, 
	RichText, 
	BlockControls, 
	AlignmentToolbar,
} from '@wordpress/block-editor';

import './editor.scss';

export default function Edit( props ) {

	const {
		attributes,
		setAttributes,
	} = props;

	// extract the content from our attributes
	const { text, alignment } = attributes;

	// create callback function for alignment
	const onChangeAlignment = (newAlignment) => {
		setAttributes( { alignment: newAlignment } );
	};

	// create callback function for text
	const onChangeText = (newText) => {
		setAttributes( { text: newText } );
	};
	
	return (

		// wrap elements in a fragment
		<>
			<BlockControls>
				<AlignmentToolbar value={ alignment } onChange={ onChangeAlignment } />
			</BlockControls>
			<RichText 
				{ ...useBlockProps( {
					className: `text-box-align-${ alignment }`,
				} ) }
				onChange={ onChangeText }
				value={ text }
				placeholder={ __('Your Text', 'text-box') } 
				tagName='h4' 
				allowedFormats={ [] }
				style={ { textAlign: alignment } }
			/>
		</>

	);
}
