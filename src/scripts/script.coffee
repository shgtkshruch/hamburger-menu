$ ->
  $menu = $ '.menu'

  $menu.click (e) ->
    $ @
      .toggleClass 'close'
    e.preventDefault()

