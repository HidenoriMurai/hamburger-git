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