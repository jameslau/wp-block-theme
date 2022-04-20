var registerBlockType = wp.blocks.registerBlockType;

// assign the @wordpress/element to a variable 
var createElement = wp.element.createElement;

registerBlockType("gutenbergblocks/firstblock", {
  edit: function () {
    return createElement(
      "p", 
      {
        className: "firstBlock-component",
      },
      "Edit"
    );
  },
  save: function () {
    return createElement("p", null, "Save");
  },
});