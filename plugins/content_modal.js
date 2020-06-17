const cM = {}

function _createModal(options){

     const modal = document.createElement('div');
     modal.classList.add('modal');
     modal.insertAdjacentHTML('afterbegin',`

   <div class="modal-background" data-close='true'></div>
   <div class="modal-card modal-content">
     <header class="modal-card-head">
       <p class="modal-card-title"data-modaltitle>Web Project:</p>
       <button class="delete" aria-label="close" data-close='true'></button>
     </header>
     <section class="modal-card-body">
       <div class="content">
         <h1 data-projecttitle></h1>
         <div class="level-item has-text-centered">
         <figure class="image  is-128x128">
  <img src="https://bulma.io/images/placeholders/128x128.png" / >
</figure>
 </div>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
         <h2>Technology Stack</h2>
         <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
         <ul>
           <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
           <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
           <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
           <li>Ut non enim metus.</li>
         </ul>
         <h3>Description of the creation process</h3>
         <p>Quisque ante lacus, malesuada ac auctor vitae, congue <a href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>

         <blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>
         <p>Quisque ante lacus, malesuada ac auctor vitae, congue . Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.
         Quisque ante lacus, malesuada ac auctor vitae, congue . Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>
           <div class="columns is-four-fifths">Project completion: 16% </div><div class="column"><progress class="progress" value="15" max="100">15%</progress></div>
         <h4>Links</h4>
         <ul>
           <li><a class="level-left" href='#'>Github</a></li>
           <li><a class="level-left" href='#'>Project Site.</a></li>,
           </ul>


       </div>
     </section>
     <footer class="modal-card-foot">
       <button class="button is-success">Save changes</button>
       <button class="button">Cancel</button>
     </footer>
   </div>

     `)

$('main').insertNode(modal);

return modal;

}


//--------------------------------------------------
cM.contentModal = function(){
const $modal = _createModal();
const modal = {
  open() {
    $modal.classList.add('is-active')
  },
  close() {
    $modal.classList.remove('is-active')

  }
}
// ------------------------
$modal.addEventListener('click', event => {
  if (event.target.dataset.close) {
    modal.close()
  }
})
// ------------------------
 return Object.assign(modal,{
   setContent(options) {

     $modal.querySelector('[data-modaltitle]').innerHTML = options.modalTitle;
     $modal.querySelector('[data-projecttitle]').innerHTML = options.projectName;


   }

 });
}

const contModal = cM.contentModal()
