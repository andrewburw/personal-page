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


let img_now_view = 1  ;
let IMAGE_IN_GALERY = 6;

function viewImage(imageSR) {


  img_now_view = Number(imageSR.id.split('_')[1])
  galModal.open() //open image galery
  galModal.setContent(`<img src=${imageSR.src} />`) // set image to modal galery


}

function moveImage(way) {
way === 'next' ? img_now_view++ : img_now_view--;

  if (img_now_view >= IMAGE_IN_GALERY) {
    img_now_view = 1;
  }

  if (img_now_view  < 1  ) {
    img_now_view = IMAGE_IN_GALERY;
  }



let test = $(`#image_${img_now_view}`).elems[0].src
galModal.setContent(`<img  src=${test} />`)

}
//**********************************************
// *************** My Experience ***************
//**********************************************
const optionsMyExper = {
      guitTeacher: {
           modalTitle: 'Web Project',
           projectName: 'Guitar Teacher',
           pictSRC: 'test',
           projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque',
           technologyList: ['D3 framework','Jquery framework','SVG Technology','Bootstrap framework'],
           links: {
             github: 'www.github.com',
             projectSite: 'www.github.com'
           },
           buttons: {
             visitSite: 'www.github.com'
           }


      }





}

function showMyWork(){

contModal.open()
contModal.setContent(optionsMyExper.guitTeacher)

}





























// test
