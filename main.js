//******************************************
// There is no Jquery framework. I's my own ablib.js framework :)

//**********************************************
// *************** ART GALERY ******************
//**********************************************


$('.artGalery_font1').onClick(() => {
   // hide big shrift "Art gallery"
  $('.art_galery_div_box').hide();

});

$('#showArtGallery').onClick(() => {
  // button presed show gallery
   $('.art_galery_div_box').hide();
   $(".artGColumn").show();
   $("#showArtGallery").hide();
   $("#hideArtGallery").show();
});

$('#hideArtGallery').onClick(() => {
  // button presed hide gallery
   $('.art_galery_div_box').show();
   $(".artGColumn").hide()
   $("#showArtGallery").show();
   $("#hideArtGallery").hide();
});


let img_now_view = 0  ;
let IMAGE_IN_GALERY = 6;

function viewImage(imageSR) {


  img_now_view = Number(imageSR.id.split('_')[1])
  galModal.open() //open image galery
  galModal.setContent(`<img src=${imageSR.src} />`) // set image to modal galery


}

function moveImage(way) {

  if (img_now_view >= IMAGE_IN_GALERY) {
    img_now_view = 0;
  }

  if (img_now_view < 0) {
    img_now_view = IMAGE_IN_GALERY;
  }

way === 'next' ? img_now_view++ : img_now_view--;

let test = $(`#image_${img_now_view}`).elems[0].src
galModal.setContent(`<img  src=${test} />`)

}
//**********************************************
// *************** My Experience ***************
//**********************************************


function showMyWork(){

contModal.open()


}






























// test
