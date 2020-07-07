var $ = (function () {

	//'use strict';

	let Constructor = function (selector) {
		this.elems = document.querySelectorAll(selector);
	};


Constructor.prototype.onClick = function (callBack) {

     this.elems[0].addEventListener("click", callBack);
};



Constructor.prototype.removeElement = function() {
      this.elems[0].remove()

};


Constructor.prototype.insertNode = function(htm) {

  this.elems[0].appendChild(htm)
};

Constructor.prototype.setPageView = function(htm) {

  this.elems[0].scrollIntoView()
};


Constructor.prototype.insertHTM = function(htm) {

  this.elems[0].insertAdjacentHTML('afterbegin',htm)
};



Constructor.prototype.show = function() {

    for (i = 0; i < this.elems.length; i++) {

      this.elems[i].classList.remove('hidden');
    }

};

Constructor.prototype.hide = function() {
	//if css file contains hide/show rules
	for (i = 0; i < this.elems.length; i++) {
		this.elems[i].classList.remove('visible');

	  this.elems[i].classList.add('hidden');
	}


};

  let instantiate = function (selector) {
  		return new Constructor(selector);
};

	return instantiate;

})();
