import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType('gutenbergblocks/team-member', {
  title: __('Team Member', 'team-members'),
  description: __('A team member item', 'team-members'),
  icon: 'admin-users',
  // you can set where this block belows with.
  // you can place it in more then one place using an array
  // because we're only using this in one spot, we're isolating it in its parent
  parent: ['gutenbergblocks/team-members'],
  edit: () => <p>edit</p>,
  save: () => <p>save</p>
});