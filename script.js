'use strict';
$(function () {

	$("#navigation .dd").on('click', function() {
		$(('#'+id).show).removeClass('show');
		var id= $(this).attr('data-list');
		$('#'+id).slideToggle(500);
		// $('#'+id).removeClass('hidden');
		// $('#'+id).addClass('show');
	});
	$("#navigation .dd").on('blur', function() {
		var id= $(this).attr('data-list');
		$('#'+id).slideToggle(500);
		// $('#'+id).removeClass('show');
		// $('#'+id).addClass('hidden');
	});

	$("#menu-icon").on('click', function() {
		$('#main-list').toggleClass('show');
		$('#main-list').slideToggle(300);
	});
});