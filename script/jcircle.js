// JavaScript Document

function start_j_circle() {
	console.log('Hello, I\'m jCirle');
	build_list('I love my ass fucked');
	//
}
var itemNo = 0;
function build_list (poo) {
	console.log(poo);	
	$('.jcircle').append('<div class="view-port"></div>');
	$('.jcircle').append('<ul class="jc-list"></ul>');
		$('.jcircle').children().each(function(e) {
			var imageUrl = $(this).attr('src');
			if(imageUrl) {
				itemNo++;
				$('<li></li>').appendTo('.jc-list').addClass('thumbs').addClass('shadow').attr('image',imageUrl).attr('item','itemNo_' + itemNo).css('background-image', 'url(' + imageUrl + ')');
				console.log('You have acknowledged ' + itemNo + ' items and:' + imageUrl);
				$(this).remove();
			}
		});
	$('.thumbs').bind('click',function() {
		load_main(this)
	});
}

function load_main(data) {
	var itemInfo = $(data).attr('item');
	var itemImage = $(data).attr('image');
	$('.view-port').html('<img src="' + itemImage +'"/>').addClass('main_image');
	$('.view-port img').addClass('shadow');
	console.log(itemInfo);
	
}
	
	