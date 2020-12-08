$( document ).ready(function() {
$('form.ajax').on('submit',function(){
console.log('Form submission triggered');

	var that = $(this),
		action = that.attr('action'),
		method = that.attr('method'),
		data = {};

	that.find('[name]').each(function(index,value){
		var that = $(this),
			name = that.attr('name'),
			value = that.val();

		data[name] = value;

	});

	console.log(data);

	$.ajax({
		url:action,
		type:method,
		data:data,
		success:function(response){
			console.log(response);

			$('.formDiv').animate({opacity: 0}, 'medium', function(){
    		$('.formDiv').css('display', 'none');
    		});


			$('.successDiv').animate({opacity: 1}, 'slow',function(){
    		$('.successDiv').css('display', 'block');
    		});

		}
	});

return false;

});

$('.contactButton').on('click',function(){

console.log('Contact Button Pressed');
return false;

});
});