const $list = document.getElementById('list')
const $searchBar = document.getElementById('search-bar')

$searchBar.addEventListener('focusin', dropDown)
$searchBar.addEventListener('focusout', foldUp)

function dropDown () {
  $list.classList.add('show')
}

function foldUp () {
  $list.classList.remove('show')
}
