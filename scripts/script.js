(function() {
  $(function() {
    var $menu;
    $menu = $('.menu');
    return $menu.click(function(e) {
      $(this).toggleClass('close');
      return e.preventDefault();
    });
  });

}).call(this);
