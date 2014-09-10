$ ->
  $menu = $ '#js-berger-menu'
  $cover = $ '.cover'

  $menu.click (e) ->
    $ @
      .toggleClass 'open'
    
    $cover.toggleClass 'open'

    e.preventDefault()
