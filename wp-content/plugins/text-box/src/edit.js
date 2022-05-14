import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls
} from '@wordpress/block-editor';


// import { __experimentalBoxControl as BoxControl, PanelBody } from '@wordpress/components';
// note: according to the linter, you are not allowed to use experimental features. however, if you want try it out
// you can use the following line below to eslint to ignore it.

// note: RangeControl allows the setting of the range of the opacity

// note: you can use the following line below to eslint to ignore it.
import {
	// eslint-disable-next-line 
	__experimentalBoxControl as BoxControl, PanelBody, RangeControl 
} from '@wordpress/components';

// note: classnames this is a helper function
import classnames from 'classnames';


import './editor.scss';

// note: get the visualizer component from BoxControl
const { __Visualizer: BoxControlVisualizer } = BoxControl;

export default function Edit( props ) {
	const { attributes, setAttributes } = props;

	// note: get styles from our styles attributes for the visualizer component
	// note: destructure shadow
	// note: destructure shadowOpacity
	const { text, textAlignment, style, shadow, shadowOpacity } = attributes;

	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { textAlignment: newAlignment } );
	};
	const onChangeText = ( newText ) => {
		setAttributes( { text: newText } );
	};

	// note: create a function to toggle the shadow
	// inverse the attribute
	const toggleShadow = () => {
		setAttributes( { shadow: ! shadow } );
	};

	// note: toggle the opacity level
	const onChangeShadowOpacity = ( newShadowOpacity ) => {
		setAttributes( { shadowOpacity: newShadowOpacity } );
	};

	const classes = classnames( `text-box-align-${ textAlignment }`, {
		// note: the key has to be the classname and the value is shadow is shadow is true. the variable would be the value 
		'has-shadow' : shadow,
		// note: set the various shadow ranges into a template literal
		// note: `:` checks if value is shadow or if there is a shadow option in the first place
		// note: `&&` checks if there is a shadow opacity
		[`shadow-opacity-${shadowOpacity}`]: shadow && shadowOpacity,
	} );

	return (
		<>

			<InspectorControls>
				{ shadow && (
					<PanelBody title={ __( 'Shadow Setting', 'text-box' ) }>

						<RangeControl label={ __( 'Shadow Opacity', 'text-box' ) } 
							// note: have a value stored in the shadowOpacity attribute
							value={ shadowOpacity }
							// note: minimum range
							min={ 10 }
							// note: maximum range
							max={ 40 }
							// note: increment range of 
							step={ 10 }
							// note: add an on change setting 
							onChange={ onChangeShadowOpacity }
						/>

					</PanelBody>
				) }
			</InspectorControls>

			<BlockControls
				controls={ [
					{
						icon: "admin-page",
						title: __( "Shadow", "text-box" ),
						onClick: toggleShadow,
						// note: toggle is active when shadow is true
						isActive: shadow,
					}
				] }
			>
				<AlignmentToolbar
					value={ textAlignment }
					onChange={ onChangeAlignment }
				/>
			</BlockControls>
			
			{/* note: add a div in to contain our block props */}
			<div 	{ ...useBlockProps( {
						className: classes,
					} ) } >
					<RichText
						className='text-box-title'
						onChange={ onChangeText }
						value={ text }
						placeholder={ __( 'Your Text', 'text-box' ) }
						tagName="p"
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