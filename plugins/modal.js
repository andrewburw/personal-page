const pL = {}

function _createModal(options){
   console.log(options);
     const modal = document.createElement('div');
     modal.classList.add('abmodal');
     modal.insertAdjacentHTML('afterbegin',`
     <div class="modal_custome" id='artGaleryModa' onclick="galModal.close()">
                  <div class="modal-content is-vcentered">
                    <div class="item-slide">
                      ${options.img}
                    </div>

                  </div>
                  <a class="prev" onclick="moveImage('prev')">&#10094;</a>
                  <a class="next" onclick="moveImage('next')">&#10095;</a>
                <button onclick="galModal.close()" class="modal-close is-large" aria-label="close"></button>
              </div>
     `)

$('main').insertNode(modal);

return modal;

}

let mdalOptions  = {

   img: '<p>test</p>'

}

pL.modalArtGalery = function(options){


  const $modal = _createModal(options);

 return {
   open(){
     $modal.classList.add('open')


   },
   close(){
    
     $modal.classList.remove('open')
     $('#tempImg').removeElement() // removing temp IMG from modal

   },
   destroy(){

       $('#artGaleryModa').removeElement()

   }

 }
}

const galModal = pL.modalArtGalery( mdalOptions)
