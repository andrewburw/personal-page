const cM = {}

function _createModal(options){

     const modal = document.createElement('div');
     modal.classList.add('modal');
     modal.insertAdjacentHTML('afterbegin',`

   <div class="modal-background" data-close='true'></div>
   <div class="modal-card modal-content">
     <header class="modal-card-head">
       <p class="modal-card-title">Modal title</p>
       <button class="delete" aria-label="close" data-close='true'></button>
     </header>
     <section class="modal-card-body">
       <h1>ITS WORKING</h1>
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


  },
  setContent(html) {
    $modal.querySelector('[data-content]').innerHTML = html
  },
  setOptions(opt){


  }
}

$modal.addEventListener('click', event => {
  if (event.target.dataset.close) {
    modal.close()
  }
})

 return modal;
}

const contModal = cM.contentModal()
