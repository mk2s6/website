'use strict';
$(function () {

	$(".dd").on('click', function() {
		$(('#'+id).show).removeClass('show');
		var id= $(this).attr('data-list');
		$('#'+id).slideToggle(500);
		$('#'+id).removeClass('hidden');
		$('#'+id).addClass('show');
	});
	$(".dd").on('blur', function() {
		var id= $(this).attr('data-list');
		$('#'+id).slideToggle(500);
		$('#'+id).removeClass('show');
		$('#'+id).addClass('hidden');
	});
});