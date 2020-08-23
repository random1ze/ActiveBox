$(function () {
	
	let header = $("#header");
	let intro = $("#intro");
	let introH;
	let scrollPos = $(window).scrollTop(); //позиция скролла от верха

	$(window).on("scroll load resize", function () { //изменяется значение позиции скролл
		introH = intro.innerHeight();

		scrollPos = $(this).scrollTop();

		if (scrollPos > introH) {  
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	})
})