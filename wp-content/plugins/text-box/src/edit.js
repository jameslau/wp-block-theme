
import { __ } from '@wordpress/i18n';

// BlockControls (component) allow you to add custom buttons to our block
// InspectorControls (component) editor side bar region
// ContrastChecker will show a warning for you if the color blend is too hard to read
import { 
	useBlockProps, 
	RichText, 
	BlockControls, 
	InspectorControls, 
	AlignmentToolbar, 
	PanelColorSettings, 
	ContrastChecker,
	withColors
} from '@wordpress/block-editor';
// import { ToolbarGroup, ToolbarButton, ToolbarDropdownMenu } from '@wordpress/components';

// import components
// note: PanelBody is a singular dropdown tab
// note: TextControl
// note: TextareaControl
// note: ToggleControl
// note: AnglePickerControl
// note: ColorPicker
// note: ColorPalette
import { PanelBody, TextControl, TextareaControl, ToggleControl, AnglePickerControl, ColorPicker, ColorPalette } from "@wordpress/components"

import './editor.scss';

function Edit( props ) {
	// console.log( attributes );
 
	// destructure from props
	const {
		attributes,
		setAttributes,
		backgroundColor,
		textColor,
		setBackgroundColor,
		setTextColor,
	} = props;

	// extract the content from our attributes
	const { text, alignment } = attributes;
	
	console.log( attributes, props ); 

	// create callback function for alignment
	const onChangeAlignment = (newAlignment) => {
		setAttributes( { alignment: newAlignment } );
	};

	// create callback function for text
	const onChangeText = (newText) => {
		setAttributes( { text: newText } );
	};

	// create callback function for backgroundColor
	// const onBackgroundColorChange = (newBgColor) => {
	// 	setAttributes( { backgroundColor: newBgColor } );
	// };

	// create callback function for textColor
	// const onTextColorChange = (newTextColor) => {
	// 	setAttributes( { textColor: newTextColor } );
	// };
	
	return (

		// wrap elements in a fragment
		<>
			<InspectorControls>
				<PanelColorSettings 
					title={ __("Color Settings", "text-box") }
					icon="admin-appearance"
					initialOpen
					disableCustomColors={ false }
					colorSettings={ [
						{
							value: backgroundColor.color,
							onChange: setBackgroundColor,
							label: __( 'Background Color', 'text-box' ),
						},
						{
							value: textColor.color,
							onChange: setTextColor,
							label: __( 'Text Color', 'text-box' ),
						}, 
					] }
				>
					<ContrastChecker
						textColor={ textColor.color }
						backgroundColor={ backgroundColor.color }
					/>
				</PanelColorSettings>
				{/* <PanelBody 
					title={ __("Color Settings", "text-box") }
					icon="admin-appearance"
					initialOpen
				>
					<ColorPalette
						label="Color Palette"
						color={ [ 
							{ name: "red", color:"#F00" },
							{ name: "black", color:"#000" },
						] }
						value={ backgroundColor } 
						onChange={ onBackgroundColorChange }
					/>
				</PanelBody> */}
			</InspectorControls>
			
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
					style: {
						// backgroundColor,

						// add the key of backgroundColor
						backgroundColor: backgroundColor.color,
						color: textColor.color,
					},
				} ) }

				// note: you can add class names this way, but it would override what useBlockProps is doing
				// className="something"
				
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

// note: withColors is a function
export default withColors({
	backgroundColor: "backgroundColor",
	textColor: "color",
}) ( Edit );