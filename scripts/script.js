(function() {
  $(function() {
    var $cover, $menu;
    $menu = $('#js-berger-menu');
    $cover = $('.cover');
    return $menu.click(function(e) {
      $(this).toggleClass('open');
      $cover.toggleClass('open');
      return e.preventDefault();
    });
  });

}).call(this);
