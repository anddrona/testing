$(document).ready(function () {

    (function () {
        'use strict'

        document.getElementById('burger').onclick = function () {
            document.getElementById('menu').classList.add('open');
        };
        document.querySelectorAll('#menu > *').forEach((item) => {
            item.onclick = () => {
                document.getElementById('menu').classList.remove('open');
            }
        });
        new WOW({
            animateClass: 'animate__animated',
        }).init();
        $('.image-link').magnificPopup({type: 'image'});

        $('.magnific').magnificPopup({
            type: 'image'
        });
        // $('.open-popup-link').magnificPopup({
        //     type: 'inline',
        //     midClick: true
        // });


        $('#button_form').click(function (){

            $('.Error-form').hide();

            let name = $('#name');
            let address = $('#address');
            let phone = $('#phone')


            let obj = [
                name,
                address,
                phone
            ]

            for (let i = 0; i < obj.length; i++){
                obj[i].css('border-color','rgb(185, 145, 80)');
            }


            let loader =  $('#loader');
            let hasError = false;

            for (let i = 0; i < obj.length; i++){
                if (!obj[i].val()){
                    obj[i].siblings('.Error-form').show();
                    hasError = true;
                    obj[i].css('border-color','red');


                }
            }


            if (!hasError){
                loader.css('display','flex');
            $.ajax({
                method:'POST',
                url:'https://itlogia.ru/test/checkout',
                data:{
                    name:name.val(),
                    address: address.val(),
                    phone: phone.val()
                }
            })
                .done(function (message){
                    loader.hide();
                    console.log(message);
                    if (message.success){
                        $('.order-form').addClass('border');
                        $('#form').hide()
                        $('#after-send').show()
                    }else{
                        alert("Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ.");
                    }
                })
            }

        })
    })();
});