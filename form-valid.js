

$("#burger").click(function (){
    let mobmenu = $('#menu');
    mobmenu.show();
    $('.menu__close').click(function (){
        mobmenu.hide();
    })
})


$('#action-button').click(function(){
    $('.option')[0].scrollIntoView({behavior: "smooth"});
});



let productInput=$('#product');
productInput.attr('placeholder',"Напишите, что хотите заказать...");

$('.btn.option__button').click((e)=>{
    productInput.val($(e.target).parents('.option__item-info').find('.option__item-title').text());
    $('.order')[0].scrollIntoView({behavior: "smooth"});
})


let loader=$('.loader');
$("#submit").click(function() {
    let product=$("#product");
    let name=$("#name");
    let phone=$("#phone");
    let hasError=false;


$(".error-box").hide();

if(!product.val()){
    product.next().show();
    hasError=true;
}

if(!name.val()){
    name.next().show();
    hasError=true;
}

if(!phone.val()){
    phone.next().show();
    hasError=true;
}

if(!hasError){
    loader.css('display', 'flex');
    $.ajax({
        method: "POST",
        url: "https://testologia.site/checkout",
        data: {product:product.val(), name:name.val() , phone: phone.val() }
      })
        .done(function( msg ) {
            loader.hide();
            if (msg.success){

                
                $("form")[0].reset();
            
                $(".order__title").fadeOut(297).delay(4000).fadeIn(297);
                $(".order__text").fadeOut(297).delay(4000).fadeIn(297);
                $('.order__form').fadeOut(297).delay(4000).fadeIn(297);
                $("span").append("<span>Спасибо за Ваш заказ. Мы скоро свяжемся с Вами!</span>").delay(4000).fadeOut(297);
            } else {
            alert("Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ");
             }
        });
}













})