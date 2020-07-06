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
  galModal.open() //open image gallery
  galModal.setContent(`<img src=${imageSR.src} />`) // set image to modal gallery


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
       <figure class="image" data-projectIMG>
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
           pictSRC: 'img/projects/note_project.png',
           projectDescription: 'Static aplication for learning notes on the guitar fretboard. Studying gammas and visualizing them on a non-standard neck.',
           technologyDescription:'I chose SVG graphics technology to implement this idea. The control of the graphical interface occurs through the library <strong> D3 </strong> .',
           technologyList: ['D3 framework','Jquery framework','SVG Technology','Bootstrap framework'],
           creationDescription:`In implementing this project, I explored the possibilities of svg graphics, the possibility of
           libraries for web interfaces. <blockquote>One of the minuses of the project: the organization of the code is not good enough and the
            complexity of expanding the project.</blockquote>
            In the near future I plan to add a description of the help section and the elimination of bugs.
                      `,
           links: {
             github: 'https://github.com/andrewburw/Guitar-note-teacher',
             projectSite: 'https://andrewburw.github.io/Guitar-note-teacher'
           },
           progress: 90

      },
      tankApp: {
           modalTitle: 'Web Project',
           projectName: 'Tank App',
           pictSRC: 'img/projects/tank_app.png',
           projectDescription: 'Static aplication for learning notes on the guitar fretboard. Studying gammas and visualizing them on a non-standard neck.',
           technologyDescription:'I chose SVG graphics technology to implement this idea. The control of the graphical interface occurs through the library <strong> D3 </strong> .',
           technologyList: ['D3 framework','Jquery framework','SVG Technology','Bootstrap framework'],
           creationDescription:`In implementing this project, I explored the possibilities of svg graphics, the possibility of
           libraries for web interfaces. <blockquote>One of the minuses of the project: the organization of the code is not good enough and the
            complexity of expanding the project.</blockquote>
            In the near future I plan to add a description of the help section and the elimination of bugs.
                      `,
           links: {
             github: 'none',
             projectSite: 'none'
           },
           progress: 80

      }


};


function showMyWork(val){

  switch(val) {
    case 'guitarTeacher':
    contModal.open();
    contModal.setTamplate(modalTamplate.myWebWorks);
    contModal.setContent(contentMyExper.guitTeacher,'myWorks');
      break;
    case 'tankApp':
    contModal.open();
    contModal.setTamplate(modalTamplate.myWebWorks);
    contModal.setContent(contentMyExper.tankApp,'myWorks');
      break;
    default:
      // code block
  }


}

//**********************************************
// *************** My Skilzz ***************
//**********************************************
const contentMySkilzz = {
  mySkilzz: {
      modalTitle: 'My Skillz',
      projectName: 'My Skillz Description',
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
