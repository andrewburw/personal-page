const pL = {}

function _createModal(){
     const modal = document.createElement('div');
     modal.classList.add('abmodal');
     modal.insertAdjacentHTML('afterbegin',`
     <div class="modal_custome" >
                  <div class="modal-content is-vcentered">
                    <div class="item-slide">
                      <img src="https://source.unsplash.com/800x1000/?nature,water">
                    </div>

                  </div>
                  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                  <a class="next" onclick="plusSlides(1)">&#10095;</a>
                <button onclick="galModal.close()" class="modal-close is-large" aria-label="close"></button>
              </div>
     `)
document.body.appendChild(modal)

return modal;
}



pL.modalArtGalery = function(options){
  const $modal = _createModal();

 return {
   open(){
     $modal.classList.add('open')

   },
   close(){
     $modal.classList.remove('open')
   },
   destroy(){}

 }
}

const galModal = pL.modalArtGalery()
