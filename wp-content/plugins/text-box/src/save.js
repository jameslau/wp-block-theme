import { __ } from '@wordpress/i18n';

// note: getColorClassName is a helper function
import { useBlockProps, RichText, getColorClassName } from '@wordpress/block-editor';

// note: npm i classnames
// note: helper package that will help add or remove classes
import classnames from "classnames"; 

export default function save( { attributes } ) {
	const { text, alignment, backgroundColor, textColor, customBackgroundColor, customTextColor } = attributes;

	// in order to get the class name from the color name, need to user helper function and pass in the properties
	const backgroundClass = getColorClassName(
		'background-color', 
		backgroundColor
	);

	const textClass = getColorClassName(
		'color', 
		textColor
	);

	const classes = classnames( `text-box-align-${ alignment }`, {
		[backgroundClass]: backgroundClass,
		[textClass]: textClass
	});

	
	//console.log(attributes);
	//console.log(backgroundClass, textClass);
	console.log( classes );

	return (
		<RichText.Content 
		{ ...useBlockProps.save( {
					// className: `text-box-align-${ alignment }`,
					className: classes,
					style: {
						// backgroundColor,
						 
						// add inline styling if you have a custom color
						backgroundColor: backgroundClass ? undefined : customBackgroundColor, 
						color: textClass ? undefined : customTextColor,
					},
		} ) } 
		tagName='h4'  

		// this will be the actual text that you see on the front-end
		value={ text } 
		/>
	);
}
