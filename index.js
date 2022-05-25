
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  centeredSlides : true,
  mousewheel: true,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// var dataArray = itemData.data;
// var htmlResult = "";
// console.log(dataArray)

// for (var i = 0 ;i < dataArray.length; i++){
//  htmlResult += "<div class='swiper-slide'> Slide";
//  htmlResult += dataArray[i].listNo;
//  htmlResult += "</div>";
// }
// $('.swiper-wrapper').html(htmlResult);