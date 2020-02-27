/* Q＆A */

jQuery(function ($) {
$('.contents8_q').on('click', function () {
  /*クリックでコンテンツを開閉*/
  $(this).next().slideToggle(200);
  /*矢印の向きを変更*/
  $(this).toggleClass('open');
});

});

//スムーズスクロール
jQuery(function(){
    jQuery('a[href^="#"]').click(function(){
        var speed = 500;
        var href= jQuery(this).attr("href");
        var target = jQuery(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        jQuery("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});