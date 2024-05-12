/** Blast Project website script */

$(document).ready(function() {
	// Get current URL path and assign 'active' class
	var pathname = window.location.pathname;
	var $link = $('#navbar a[href="' + pathname + '"]');
	var $item = $link.parents('.nav-item');

	if($item.length) $item.addClass('active');
	$link.addClass('active');
});