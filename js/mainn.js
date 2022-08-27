

$('.btn_menu_mobile').click(function (e) { 
    e.preventDefault();
    $('.menu').addClass('t4s_menu_mobile');
    $('.menu').show(300);
    $('.t4s_oveflow').show();
});

$('.t4s_exit_btn_menu_item').click(function (e) { 
    e.preventDefault();
    $('.t4s_menu_mobile').hide(300);
    $('.t4s_oveflow').hide();
});

$('.t4s_menu_mobile > t4s_li_sub_menu').click(function(){
    $('.t4s_menu_mobile').hide(300);
});


$('.t4s_li_sub_menu').click(function(){
    $('.t4s_sub_menu').slideToggle(300);
    $('.t4s_sub_menu').toggleClass('open');
});

$(document).mouseup(function(e) 
{
    var container2 = $('.t4s_menu_mobile');

    // if the target of the click isn't the container nor a descendant of the container
    if (!container2.is(e.target) && container2.has(e.target).length === 0 ) 
    {
        container2.hide(300);
        $('.t4s_oveflow').hide();
    }
});


let tabs = document.querySelectorAll(".t4s_tab_links");
let tabsArray = Array.from(tabs);
let tabs_content = document.querySelectorAll(".t4s_content_tab");
let tabsArray_content = Array.from(tabs_content);
tabsArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
      // console.log(ele);
      tabsArray.forEach((ele) => {
        ele.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
     });
  });


  //slide
  $('.tab_title2').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    
    $grid.isotope({ filter: filterValue });
  });

  $('.tab_title2').each( function( tab, a ) {
    var $t = $( a );
    
    $t.on( 'click', 'button', function() {
        var idValue = $(this).attr('data-tab');
        $t.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
        $('.t4s_content_3').each( function( btn, b ) {
            var $slide = $(b);
            $slide.find('.tb-show').removeClass('tb-show')
            if($slide.find(`.${idValue}`) ) {
                $slide.find(`.${idValue}`).addClass('tb-show');
            //   $slide.addClass('tb-show').removeClass('tb-hidden');
            }
        });
        });
  });

$('.t4s_tab_links2').click(function (e) {
    e.preventDefault();
 });

//popup
 $('.popup_video,.popup_video2 , .popup_video3').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });