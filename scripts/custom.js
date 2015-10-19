var order;

$(document).ready(function(){
	jQuery(function($){
		$("#phone").mask("+38 (099) 99-99-999");
	});

	$('#order').click(function(){
		if($('#name').val() !== '' && $('#phone').val() !== '' && $('#surname').val() !== ''){
			alert('Спасибо, Ваш заказ принят!');
			//yaCounter32302234.reachGoal('order');
			$('#form').submit();
		}
		else{
			alert('Заполните все поля формы.');
		}
	});

	order=function(){
		$('body').animate({'scrollTop': $('#order-screen').offset().top}, 500);
	};

	$('.order').click(order);
	var newPrice=parseInt((originalPrice-(originalPrice/100)*discount), 10);
	$('.original-price-value').html(originalPrice);
	$('.new-price-value').html(newPrice);
	$('.discount-value').html(discount);
});

