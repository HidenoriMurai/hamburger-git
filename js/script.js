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

/*ブラウザサイズ変更時メニュー閉じ */
//メニューリセット
$(window).resize(function() {
    $(".p-aside").removeClass('p-aside-open');//クラスも除去
    $(".p-aside").next("p-aside").hide;
    $(".overlay").fadeOut();
    });
//リサイズ時overfrow:hidenn解除
    $(window).resize(function() {
        $(".l-body").removeClass('l-body_scroll');//クラスも除去
        });




