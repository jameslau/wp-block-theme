import { __ } from '@wordpress/i18n';

// BlockControls (component) allow you to add custom buttons to our block
import { useBlockProps, RichText, BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton, ToolbarDropdownMenu } from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	//console.log( attributes );

	// extract the content from our attributes
	const { text } = attributes;

	return (

		// wrap two elements in a fragment
		<>
			
			<BlockControls group="inline">
				<p>Inline Controls</p>
			</BlockControls>
			
			<BlockControls group="block"> 
				<p>Block Controls</p>
			</BlockControls>

			<BlockControls 
				group="other"
				controls={ [ 
					{
						title: "Button 1",
						icon: "admin-generic",
						isActive: true,
						onClick: () => console.log("Button 1 Clicked"),
					},
					{
						title: "Button 1",
						icon: "admin-collapse",
						onClick: () => console.log("Button 2 Clicked"),
					}, 
				] } 
			>
			{text && (
				<ToolbarGroup>
					<ToolbarButton 
						title="Align Left"
						icon="editor-alignleft"
						onClick={ () => console.log( 'Align Left' )}
					/>
					<ToolbarButton 
						title="Align Center"
						icon="editor-aligncenter"
						onClick={ () => console.log( 'Align Center' )}
					/>
					<ToolbarButton 
						title="Align Right"
						icon="editor-alignright"
						onClick={ () => console.log( 'Align Right' )}
					/>
					<ToolbarDropdownMenu 
						icon="arrow-down-alt2"
						label={ __("More Alignments", "text-box") }
						controls={[
							{
								 title: __("Wide", "text-box"),
								 icon: "align-wide",
							},
							{
								 title: __("Full", "text-box"),
								 icon: "align-full-width",
							},
						]}
					/>
				</ToolbarGroup>
			) }
				<ToolbarGroup>
						<p>lksjdhbsjbv</p>
				</ToolbarGroup>
			</BlockControls>
			<RichText 
				{ ...useBlockProps() }
				
				// callback function
				onChange={ (value) => setAttributes({ text: value }) }

				// set text value to whatever is typed in. this also allows the update function to work in the dashboard.
				value={ text }

				placeholder={ __('Your Text', 'text-box') } 
				tagName='h4' 

				// note: pass an empty array if you don't want the user to edit the styles at all
				allowedFormats={ [] }
			/>
		</>

	);
}
