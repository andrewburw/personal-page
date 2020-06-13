var $ = (function () {

	//'use strict';

	let Constructor = function (selector) {
		this.elems = document.querySelectorAll(selector);
	};


Constructor.prototype.onClick = function (callBack) {

     this.elems[0].addEventListener("click", callBack);
};

Constructor.prototype.hide = function() {
  this.elems[0].classList.remove('visible');
  this.elems[0].classList.add('hidden');

};

Constructor.prototype.removeElement = function() {


this.elems[0] || this.elems[0].remove() // avoid error if removeElemets called multiply times

};

Constructor.prototype.insertNode = function(htm) {

  this.elems[0].appendChild(htm)
};

Constructor.prototype.insertHTM = function(htm) {

  this.elems[0].insertAdjacentHTML('afterbegin',htm)
};


Constructor.prototype.show = function(all) {

  if (all === 'all') {

    for (i = 0; i < this.elems.length; i++) {

      this.elems[i].classList.remove('hidden');
    }
  } else {

    this.elems[0].classList.remove('hidden');
    this.elems[0].classList.add('visible');

  }
};


  let instantiate = function (selector) {
  		return new Constructor(selector);
};

	return instantiate;

})();
