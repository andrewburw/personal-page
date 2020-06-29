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
const modalTamplate = {
     myWebWorks: `
     <div class="content">
       <h1 data-projecttitle></h1>
       <div class="level-item has-text-centered">
       <figure class="image  is-128x128">
<img src="https://bulma.io/images/placeholders/128x128.png" / >
</figure>
</div>
       <div data-projectDescription></div>
       <h2>Technology Stack</h2>
       <div data-technologyDescription></div>
       <div data-technologyList></div>
       <h3>Description of the creation process</h3>
       <div data-creationDescription></div>
       <br />
         <div class='columns' data-projectdone></div>
       <h4>Links</h4>
       <div data-links></div>
     </div>

     `,
   mySkilz: `<div class='content'>
     <h1 data-projecttitle></h1>
     <div data-projectDescription></div>
     <div data-maincontent>
     <br />
     <div class='table-container'>
     <table class="table">
  <thead>
    <tr>
      <th><abbr>Skill</abbr></th>
      <th><abbr>Сompetence Precentage</abbr></th>
      <th><abbr>Coment</abbr></th>
    </tr>
  </thead>
  <tbody data-tablecontent>
  </tbody>
  </table>
  </div>
   </div>
        </div>
`



};
const contentMyExper = {
      guitTeacher: {
           modalTitle: 'Web Project',
           projectName: 'Guitar Teacher',
           pictSRC: 'test',
           projectDescription: 'TESTLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque',
           technologyDescription:'TESTLorem ipsum dolor sit amet,eque TESTLorem ipsum dolor sit amet, consectetur adipiscing TESTLorem ipsum dolor sit amet, consectetur adipiscing',
           technologyList: ['D3 framework','Jquery framework','SVG Technology','Bootstrap framework'],
           creationDescription:`Creation Lorem ipsum dolor sit amet,eque <blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>
           TESTLorem ipsum dolor sit amet, consectetur adipiscing TESTLorem ipsum dolor sit amet, consectetur adipiscing
          ante lacus, malesuada ac auctor vitae, congue . Phasellus lacus ex, semper ac tortor nec, fringil
            ante lacus, malesuada ac auctor vitae, congue . Phasellus lacus ex, semper ac tortor nec, fringil

           `,
           links: {
             github: 'https://www.github.com',
             projectSite: 'https://www.github.com'
           },
           progress: 16

      }


};


function showMyWork(){

contModal.open();
contModal.setTamplate(modalTamplate.myWebWorks);
contModal.setContent(contentMyExper.guitTeacher,'myWorks');

}

//**********************************************
// *************** My Skilzz ***************
//**********************************************
const contentMySkilzz = {
  mySkilzz: {
      modalTitle: 'My Skilz',
      projectName: 'My Skilz Description',
      projectDescription: 'TESTLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque',
      skilzData: {
        JavaScript: {
          precentage: 60,
          description: 'My main programming language.',
          color: 'is-warning'
        },

        Html: {
          precentage: 80,
          description: '',
          color: 'is-danger'
        },
        Css: {
          precentage: 50,
          description: '',
          color: 'is-info'
        },
        MongoDB: {
          precentage: 10,
          description: 'My main DB.Need more practice.',
          color: 'is-primary'
        },
        NodeJS: {
          precentage: 10,
          description: 'My main programming backend language.Need more practice.',
          color: 'is-success'
        },
        ReactJS: {
          precentage: 60,
          description: 'My favorite UI framework.',
          color: 'is-info'
        },
        Git: {
          precentage: 10,
          description: 'Need more practice to work in team and large projects.',
          color: 'is-black'
        },
        FrameWorks: {
          precentage: 80,
          description: '<strong>Bootstrap</strong>, <strong>Bulma</strong>, <strong>Jquery</strong>, <strong>D3</strong> and more...'
        },
        Excel: {
          precentage: 80,
          description: '7 years of use of the Excel environment + experience in developing VBA applications(with PostGress DB).',
          color: 'is-success'
        },
        PostGress: {
          precentage: 20,
          description: 'Creating tables, linking tables through pgadmin.'
        },
        LibreBase: {
          precentage: 65,
          description: 'Application development in "Libre Base" interaction with postgres.'
        },

        Sql: {
          precentage: 20,
          description: 'Small application in the Libra Base',
          color: 'is-link'
        }
        ,
        PowerBi: {
          precentage: 50,
          description: 'Creating a sql and exel database reports.'
        },
        AdobeIllustrator: {
          precentage: 20,
          description: 'Small graphic illustrations.'
        }
      }

  }


}



function showMySkilz(){

contModal.open();
contModal.setTamplate(modalTamplate.mySkilz);
contModal.setContent(contentMySkilzz.mySkilzz);

}


//showMySkilz()

























// test
