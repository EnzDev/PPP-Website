jQuery('section').click(function(){
   jQuery('section').removeClass('activated');
   jQuery(this).addClass('activated');

});

/*
function switchContainer(id) {
   var ids = ["int", "com", "for", "exp"];
   for (var item of ids) {
      document.querySelector('#'+item+" .big").id = "";
   }
   var d = document.querySelector('#'+id+" .big");
   d.id = "activated";
}
*/
