//******************************************
// There is no Jquery framework. I's my own ablib.js framework :)

//**********************************************
// *************** ART GALERY ******************
//**********************************************

  let tet = false

   tet || console.log('srabotal');

$('.artGalery_font1').onClick(() => {

  $('.art_galery_div_box').hide();

});

$('#showArtGallery').onClick(() => {
  $('.art_galery_div_box').hide();
  $(".artGColumn").show('all')

});

function viewImage(imageSR) {

  galModal.open()

  $(".item-slide").insertHTM(`<img id='tempImg'src=${imageSR.src}>`);

}

function moveImage(way) {



  if (way === 'next') {
   //$('#tempImg').removeElement()

   console.log('next');


  } else {

  console.log('back');



  }
}
