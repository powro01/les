$(document).ready(function() {
    var invests = $('.invests__item');

    setInterval(function() {

        var randomNumber = Math.floor((Math.random() * 9));
        
        $(invests[randomNumber]).toggleClass('rotate-animation');

        setTimeout(function() {
            $(invests[randomNumber]).toggleClass('rotate-animation');
        }, 3000);

    }, 5000);
    
    mySlider = new Siema();

    var sliderPrev = $('#sliderPrevArrow'),
        sliderNext = $('#sliderNextArrow');

        sliderPrev.on('click', function() {
            mySlider.prev();
        });

        sliderNext.on('click', function() {
            mySlider.next();
        });

    var modal = $('#modal'),
        modalCloseBtn = $('#modalCloseBtn'),
        modalImage = $('#modalImage');

        modalCloseBtn.on('click', function() {
            modal.removeClass('open');
        });

    var modalImages = $('img.modal-image');

    modalImages.on('click', function(e) {
        if($(this).data('modal') === true) {
            e.preventDefault();
            let source = $(this).attr('src');
            modalImage.attr('src', source);
            modal.addClass('open');
        }
    });
});

function myMap() {
        var myCenter = new google.maps.LatLng(49.972238,20.6138402);
        var mapCanvas = document.getElementById("map");
        var mapOptions = {center: myCenter, zoom: 16, scrollwheel: false, draggable: false};
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({position:myCenter});
        marker.setMap(map);
      }