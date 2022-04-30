import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	// InspectorControls
} from '@wordpress/block-editor';


// import { __experimentalBoxControl as BoxControl, PanelBody } from '@wordpress/components';
// note: according to the linter, you are not allowed to use experimental features. however, if you want try it out
// you can use the following line below to eslint to ignore it.

// eslint-disable-next-line
import { __experimentalBoxControl as BoxControl } from '@wordpress/components';

import './editor.scss';

// note: get the visualizer component from BoxControl
const { __Visualizer: BoxControlVisualizer } = BoxControl;

export default function Edit( props ) {
	const { attributes, setAttributes } = props;

	// note: get styles from our styles attributes for the visualizer component
	const { text, alignment, style } = attributes;

	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { alignment: newAlignment } );
	};
	const onChangeText = ( newText ) => {
		setAttributes( { text: newText } );
	};

	return (
		<>
			{/* <InspectorControls>
				<PanelBody>
					 <BoxControl onChange={ (v) => console.log(v) } />
				</PanelBody>
			</InspectorControls> */}
			<BlockControls>
				<AlignmentToolbar
					value={ alignment }
					onChange={ onChangeAlignment }
				/>
			</BlockControls>
			
			{/* note: add a div in to contain our block props */}
			<div 	{ ...useBlockProps( {
						className: `text-box-align-${ alignment }`,
					} ) } >
					<RichText
						className='text-box-title'
						onChange={ onChangeText }
						value={ text }
						placeholder={ __( 'Your Text', 'text-box' ) }
						tagName="h4"
						allowedFormats={ [] }
					/>

					{/* note: instead of wrapping the BoxControlVisualizer around the RichText component like before,
							we're adding it as a sibling to RichText. This is allow it to sit position absolute on top of 
							RichText Component
					 */}
					<BoxControlVisualizer 
						values={ style && style.spacing && style.spacing.padding } 
						// note: this will always show the visualizer
						// showValues={ { top: true, bottom: true } }

						// note: this will show the padding visualizers when hover over input field
						showValues={ style && style.visualizers && style.visualizers.padding }
					
					// note: make visualizer self closing
					/>
			</div>
		</>
	);
}