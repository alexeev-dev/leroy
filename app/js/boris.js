$(document).ready(function() {

	forumThemeListGen();

});

// forum Theme list generation
function forumThemeListGen() {
	// js-forum-theme-list
	var forumThemeListGen = $('.ForumPage .js-forum-theme-list ul'),
		forumThemeListCompLength = $('.ForumPage .RecentPosts .lia-recent-posts div.lia-message-view-wrapper').length,
		forumThemeListCompRow = $('.ForumPage .RecentPosts .lia-recent-posts div.lia-message-view-wrapper'),
		forumThemeTitle = $('.ForumPage h1.PageTitle span');

		$(forumThemeTitle).appendTo('.ForumPage .forum-pagination h3');

	for(i=0;i<forumThemeListCompLength;i++) {
		if(forumThemeListCompRow.eq(i).find('.MessageView').hasClass('lia-thread-topic')) {
			var
				forumThemeMessageSubjectText = forumThemeListCompRow.eq(i).find('.lia-message-subject .message-subject a').html(),
				forumThemeMessageSubjectLink = forumThemeListCompRow.eq(i).find('.lia-message-subject .message-subject a').attr('href'),

				forumThemeUserText = forumThemeListCompRow.eq(i).find('.lia-message-byline .UserName a span').html(),
				forumThemeUserLink = forumThemeListCompRow.eq(i).find('.lia-message-byline .UserName a').attr('href'),

				forumThemeMessageDate = forumThemeListCompRow.eq(i).find('.lia-message-post-date .DateTime span.local-date').html(),
				forumThemeMessageTime = forumThemeListCompRow.eq(i).find('.lia-message-post-date .DateTime span.local-time').html(),

				forumThemeMessageLikeText = forumThemeListCompRow.eq(i).find('.MessageKudosCount a').html(),
				forumThemeMessageLikeLink = forumThemeListCompRow.eq(i).find('.MessageKudosCount a').attr('href');// не используется

				if (forumThemeMessageLikeText === undefined) {forumThemeMessageLikeText = '0';}
				else {forumThemeMessageLikeText = parseInt(forumThemeMessageLikeText,10);}


			var li =
			'<li>\
				<div>\
					<h4><a href="' + forumThemeMessageSubjectLink + '">' + forumThemeMessageSubjectText + '</a></h4>\
					<figure>\
						<img src="assets/img/user_ava-1.jpg" alt="Нету фото автора!">\
					</figure>\
					<a href="' + forumThemeUserLink + '" class="auth">' + forumThemeUserText + '</a>\
					<span class="date"><i class="fa fa-clock-o"></i>' + forumThemeMessageDate + ', ' + forumThemeMessageTime + '</span>\
				</div>\
				<ul>\
					<li><i class="icon icon-forum-answers"></i>Нету кол-ва комментов!</li>\
					<li><i class="icon icon-forum-likes"></i>' + forumThemeMessageLikeText + '</li>\
				</ul>\
				<div>\
					<p>от <a href="#">Нету автора последнего коммента!</a></p>\
					<span class="date-comm"><i class="fa fa-clock-o"></i>Нету времени последнего коммента!</span>\
					<a href="' + forumThemeMessageSubjectLink + '" class="comm"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>\
				</div>\
			</li>';
			$(li).appendTo(forumThemeListGen);
		}
	}

	$('.ForumPage .RecentPosts').hide();
}