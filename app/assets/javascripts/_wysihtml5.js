$(document).ready(function(){
  $('.wysihtml5').each(function(i, elem) {
    $(elem).wysihtml5({
      locale: 'bg-BG',
      toolbar: {
        // "fa": true,
        "font-styles": false, //Font styling, e.g. h1, h2, etc. Default true
        "emphasis":    false, //Italics, bold, etc. Default true
        "lists":       false, //(Un)ordered lists, e.g. Bullets, Numbers. Default true
        "html":        false, //Button which allows you to edit the generated HTML. Default false
        "link":        false, //Button to insert a link. Default true
        "image":       false, //Button to insert an image. Default true,
        "color":       false, //Button to change color of font
        "blockquote":  false, //Blockquote
        "size":        'sm' //default: none, other options are xs, sm, lg
      }
    });
  });
});
