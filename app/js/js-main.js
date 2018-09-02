$(document).ready(function() {
 
	$("form").submit(function() {
		var $form = $(this);
		var data = $form.serialize();
		
		if (validateForm($form)) {
			$.post("./assets/mail.php", data, function(resp) {});
			
			
//*************************************************************************************************
			//КОД ДЛЯ GOOGLE ANALYTICS:
			//ga('send', 'event', 'FormContact1', {nonInteraction: true});
			//ga('send', 'event',	'FormContact1', 'play', 'Fall Campaign');

//*************************************************************************************************			
			//КОД ДЛЯ МЕТРИКИ ЯНДЕКС:
			// ЗДЕСЬ ХХХХХХ - номер счетчика, FormContact - имя события, которое будет отображаться в метрике
			//yaCounter39173625.reachGoal('FormContact');
//*************************************************************************************************

      $('#Modal').modal('hide');
      $('#ModalThank').modal('show');
//
		} else { return false; };

		return false;
	});

});
 

function validateForm($form) {
	var valid = true;
	$form.find(".required").each(function(index, element) {
		if ($(element).val() == "") {
			$(element).addClass("input-error");
			setTimeout(function(){
                        $(element).removeClass('input-error');
                  }, 1500);
			valid = false;
		}
		else {
			$(element).removeClass("input-error");
		}
	});
	return valid;

}
//*****************
$(document).ready(function() {
  $("input[name^='user-phone']").mask("+7 (999) 999 - 9999");

  $(window).scroll(function() {
    if($(window).scrollTop() >= 500) {
      $('.navbar').addClass('fixed-top');
    } else {
      $('.navbar').removeClass('fixed-top');
      //$(".navbar-nav .nav-link.active").removeClass('active');
      //$(".navbar-nav .nav-link:first-child").addClass('active');
    }
  });

  $('#navbarMain').on('show.bs.collapse', function() {
    document.body.style.overflow = 'hidden';
  }).on('hide.bs.collapse', function() {
    document.body.style.overflow = 'visible';
  });

 $(".navbar-nav .nav-link").click(function(ev){
   ev.preventDefault();
   var target = $( $(this).attr('href') );
   $("html, body").animate({ scrollTop: target.offset().top - 100 }, 600);
   document.body.style.overflow = 'visible';
   $('#navbarMain').collapse('hide');
   $(".navbar-nav .nav-link.active").removeClass('active');
   $(this).addClass('active');
   //if ($(window).width() < 992 )  $('.menu .nav-main').hide();
 });


// при открытии модального окна
  $('#Modal').on('show.bs.modal', function(event) {
    // получить кнопку, которая его открыло
    var button = $(event.relatedTarget)
    var buttonModal = $(this).find('.button');
    // извлечь информацию из атрибутов
    var title = button.data('title');
    var namebtn = button.data('namebtn');
    var checkbox = $(this).find('input:checkbox');
    //var mail = button.data('mail');
    //if (mail == true) $(this).find('.mail').removeClass('hidden')
    //else $(this).find('.mail').addClass('hidden');
    //вывести эту информацию в элемент, имеющий id="content"
    $(this).find('h2.title').text(title);
    buttonModal.text(namebtn);
    checkbox.change(function() {
      if (checkbox.is(':checked')) {
        buttonModal.prop('disabled',false);
      } else  buttonModal.prop('disabled',true);
    });

  })
});

$("a[rel=group]").fancybox();

var owl1 = $('#owl-doner');

owl1.owlCarousel({
  loop: true,//Зацикливаем слайдер
  margin: 30,
  nav: true,
  dots: false,
  //autoplayHoverPause: true, //Останавливает автопроигрывание если навести мышкой (hover) на элемент
  //autoplay:true, //Автозапуск слайдера
  smartSpeed:1300, //Время движения слайда
  autoplayTimeout:80, //Время смены слайда
  responsiveClass:true,
  dotsEach: false,
  navigation : true,

  responsive:{
    0:{
      items:1
    },
    768: {
      items:3,
      nav: true
    }
  }
});

$( "#selector1" ).slider({
  range: "min",
  value: 98,
  min: 10,
  max: 500,
  slide: function( event, ui ) {
    var str = ui.value.toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1 ");
    $("#amount1").text(str);
  }
});
$( "#selector2" ).slider({
  range: "min",
  value: 300,
  min: 50,
  max: 1500,
  slide: function( event, ui ) {
    $("#amount2").text( ui.value.toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1 "));
  }
});



//*****************



