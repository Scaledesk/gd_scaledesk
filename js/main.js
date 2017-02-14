
$('li.dropdown').click(function(){
	$('this').addClass('open').find('ul.dropdown-menu').animate({top:35},200)

})
function LoadImage(){
	$(this).append('<img src="./img/slide-1.jpg" alt=""/>');
	$(this).remove();
}
