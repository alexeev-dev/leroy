$(document).ready(function() {

	$('center').replaceWith(function(){
	    return $("<main />", {html: $(this).html()});
	});

	// main page carousel
	$('.js-main-carousel').owlCarousel({
		items:4,
		loop:true,
		margin:10,
		nav:true,
		dots: false,
		navText: [,],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});


	// discussion list generation function
	discussListGen();

	// header user dropdown 
	$('.js-user-dropdown').click(function() {
		$(this).toggleClass('active');
		return false;
	});

	// user page slide block
	$('.js-userPageSlide').click(function(){
		$(this).toggleClass('active').next().slideToggle();
		return false;
	});

	// shops list dropdown
	$('.js-shopsListBtn').click(function(){
		$(this).toggleClass('active');
		$('.js-shopsListDropdown').slideToggle();
		return false;
	});
});

$(window).load(function() {
	$('.preloader').fadeOut('slow');
});

// discussion list generation
function discussListGen() {
	// js-forum-list
	var forumDiscComp = $('.linear-message-list'),
		forumDiscGen = $('.js-forum-disc ul'),
		forumDiscCompLength = $('.linear-message-list .lia-linear-display-message-view').length,
		forumDiscCompRow = $('.linear-message-list .lia-linear-display-message-view');

	for(i=0;i<forumDiscCompLength;i++) {
		var forumDiscDeleteLink = forumDiscCompRow.eq(i).find('.lia-menu-navigation .dropdown-positioning .lia-menu-dropdown-items .delete-message').attr('href'),
			forumDiscDeleteData = forumDiscCompRow.eq(i).find('.lia-menu-navigation .dropdown-positioning .lia-menu-dropdown-items .delete-message').data('lia-action-token'),
			forumDiscDeleteId = forumDiscCompRow.eq(i).find('.lia-menu-navigation .dropdown-positioning .lia-menu-dropdown-items .delete-message').attr('id'),
			forumDiscDeleteClasses = forumDiscCompRow.eq(i).find('.lia-menu-navigation .dropdown-positioning .lia-menu-dropdown-items .delete-message').attr('class'),
			forumDiscEditLink = forumDiscCompRow.eq(i).find('.lia-menu-navigation .dropdown-positioning .lia-menu-dropdown-items .edit-message').attr('href'),
			forumDiscEditId = forumDiscCompRow.eq(i).find('.lia-menu-navigation .dropdown-positioning .lia-menu-dropdown-items .edit-message').attr('id'),
			forumDiscEditClasses = forumDiscCompRow.eq(i).find('.lia-menu-navigation .dropdown-positioning .lia-menu-dropdown-items .edit-message').attr('class'),
			deleteButton = forumDiscCompRow.eq(i).find('.forum-disc .disc-red li:last-child a'),
			editButton = forumDiscCompRow.eq(i).find('.forum-disc .disc-red li:first-child a');

		if(forumDiscCompRow.eq(i).find('.lia-menu-navigation .dropdown-positioning .lia-menu-dropdown-items .delete-message').html() == undefined) {
			forumDiscDeleteLink = forumDiscCompRow.eq(i).find('.lia-menu-navigation .dropdown-positioning .lia-menu-dropdown-items .delete-message-and-replies').attr('href');
			forumDiscDeleteData = forumDiscCompRow.eq(i).find('.lia-menu-navigation .dropdown-positioning .lia-menu-dropdown-items .delete-message-and-replies').data('lia-action-token');
			forumDiscDeleteId = forumDiscCompRow.eq(i).find('.lia-menu-navigation .dropdown-positioning .lia-menu-dropdown-items .delete-message-and-replies').attr('id');
			forumDiscDeleteClasses = forumDiscCompRow.eq(i).find('.lia-menu-navigation .dropdown-positioning .lia-menu-dropdown-items .delete-message-and-replies').attr('class');
		}

		deleteButton.addClass(forumDiscDeleteClasses);
		deleteButton.attr('id', forumDiscDeleteId).attr('data-lia-action-token', forumDiscDeleteData).attr('href', forumDiscDeleteLink);
		editButton.addClass(forumDiscEditClasses);
		editButton.attr('id', forumDiscEditId).attr('href', forumDiscEditLink);
	}
}

// delete message button
// function deleteMessageButtons() {
// 	var messageList = $('.lia-component-reply-list > div'),
// 		messageListLength = $('.lia-component-reply-list > div .lia-linear-display-message-view').length;

// 	for(i=0;i<messageListLength;i++) {
// 		var 
// 	}
// }