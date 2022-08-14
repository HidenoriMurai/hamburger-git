//虫眼鏡の非表示
$(function(){
    $(".p-header__search").on("click",function(){
        $(".p-header__search-icon1").hide();
    });
});
//虫眼鏡の表示
$(document).on('click',function(e) {
    if(!$(e.target).closest('.p-header__search').length) {
        $(".p-header__search-icon1").show();
    } 
});

//オーバーレイ：フェードイン
$(function() {
    // 「検索」ボタンクリック
    $(".js-button--menu").on('click', function() {
        $(".overlay").fadeIn();
    });
});
//　　　　　　：フェードアウト
$(function() {
    // 「バツ」ボタンクリック
    $(".js-btn__close").on('click', function() {
        $(".overlay").fadeOut();
    });
});

//スライドメニュー
$(".js-button--menu").click(function () {//ボタンがクリックされたら
    $(".p-aside").toggleClass('p-aside-open');//クラスを付与
    $(".l-body").toggleClass('l-body_scroll');//クラスを付与
});


$(".js-btn__hamburger").click(function () {//クリックされたら
    $(".p-aside").removeClass('p-aside-open');//クラスも除去
    $(".l-body").removeClass('l-body_scroll');//クラスも除去
});

