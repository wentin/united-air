var myScroll;
function loaded () {
	myScroll = new IScroll('#myUnited', { mouseWheel: true });
}

window.onload=loaded;
//document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
function openAnimation(){
	//$('#logo').animate({});
	$( "#logo" ).delay(500).animate({
	    marginTop: "25px"
		}, 1000, 'easeOutBack', function() {
		$('.guest, .login-form').fadeIn(800);
	});
}

$(function(){
	openAnimation();

	$('.login-form #sign-in-button').click(function(e){
		e.preventDefault();
		var usr = $(this).parents('form').find( "input[name='username']" ).val();
		var psw = $(this).parents('form').find( "input[name='password']" ).val();
		
		console.log(usr + psw);
		if(usr!=''&&psw!=''){
			$(this).parents('form').find('.input-wrapper').removeClass('error');
			$('#login').removeClass('active');
			$('#app').addClass('active').addClass('user-access');
			myScroll.refresh();
        	myScroll.scrollTo(0, 0, 1000);
		} else {
			$(this).parents('form').find( "input" ).parents('.input-wrapper').removeClass('error');
			$(this).parents('form').find( "input:text[value=''], input:password[value='']" ).parents('.input-wrapper').addClass('error');
		}
	})
	
	$('#my-sign-in-button').click(function(e){
		e.preventDefault();
		var usr = $(this).parents('form').find( "input[name='username']" ).val();
		var psw = $(this).parents('form').find( "input[name='password']" ).val();
		
		if(usr!=''&&psw!=''){
			$(this).parents('form').find('.input-wrapper').removeClass('error');
			$('#app').addClass('user-access');
			myScroll.refresh();
        	myScroll.scrollTo(0, 0, 1000);
		} else {
			$(this).parents('form').find( "input" ).parents('.input-wrapper').removeClass('error');
			$(this).parents('form').find( "input:text[value=''], input:password[value='']" ).parents('.input-wrapper').addClass('error');
		}
	})

	$('#continue-guest-button').click(function(e){
		e.preventDefault();
		$('#login').removeClass('active');
		$('#app').addClass('active');
		$('.tabs div').removeClass('active');
		$('.tabs #tab-united').addClass('active');

		$('.tabWrapper').removeClass('active');
		$('.tabWrapper#tab-united').addClass('active');
		myScroll.refresh();
        myScroll.scrollTo(0, 0, 1000);
	})

	$('.tabs div').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var targetTab = $(this).attr('id');
		$('.tabWrapper#' + targetTab).addClass('active').siblings('.tabWrapper').removeClass('active');
		myScroll.refresh();
        myScroll.scrollTo(0, 0, 1000);
	})

	$('.checkbox').click(function (e) {
		e.preventDefault();
		$(this).toggleClass('checked');
	})

})

