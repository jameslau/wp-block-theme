import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Edit({attributes, setAttributes}) {

  const { name, bio } = attributes;

  // create callback functions
  const onChangeName = (newName) => {
    setAttributes( { name: newName } )
  };

  const onChangeBio = (newBio) => {
    setAttributes( { bio: newBio } )
  };

  // just to test it out, we're return some text
  return <div { ...useBlockProps() }>
    
    {/* create RichText for the member name */}
    <RichText 
      placeholder={ __( 'Member Name', 'team-member' ) } 
      tagName="h4"
      onChange={onChangeName}
      value={name}
      // remove the allowed formats. keeping it empty will remove options
      allowedFormats={[]}
    />

    {/* create RichText for the member bio */}
    <RichText 
      placeholder={ __( 'Member Bio', 'team-member' ) } 
      tagName="p"
      onChange={onChangeBio}
      value={bio}
      // remove the allowed formats. keeping it empty will remove options
      allowedFormats={[]}
    />

  </div>;
}