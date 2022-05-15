import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div {...useBlockProps()}>
			{/* add the imported block editor settings InnerBlocks */}
			{/* this will allow us to add blocks within our blocks */}
			{/* add 'allowedBlocks' to only allow certain blocks within Innerblocks */}
			{/* <InnerBlocks allowedBlocks={ [ 'core/image' ] } /> */}

			{/* removed the core/image and allow only the team-member block to show in this InnerBlock */}
			<InnerBlocks allowedBlocks={ [ 'gutenbergblocks/team-member' ] } />
		</div>
	);
}
