import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
// import the edit functions
import Edit from './edit';
import Save from './save';

registerBlockType('gutenbergblocks/team-member', {
  title: __('Team Member', 'team-members'),
  description: __('A team member item', 'team-members'),
  icon: 'admin-users',
  parent: ['gutenbergblocks/team-members'],
  // use support to add and or disable features for each block
  supports: {
    reusable: false,
    html: false
  },
  // add new functionality with attributes
  attributes: {
    name: {
      type: 'string',
      // what is a source and selector (https://developer.wordpress.org/block-editor/reference-guides/block-api/block-attributes/#value-source)
      source: 'html',
      selector: 'h4',
    },
    bio: {
      type: 'string',
      source: 'html',
      selector: 'p',
    },
  },
  edit: Edit,
  save: Save,
});