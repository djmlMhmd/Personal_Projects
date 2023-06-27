var blockImgModal = document.getElementById('block-img');

// fenetre modal
var modal = document.getElementById('modal');
var modalTitle = document.getElementById('modal-title-content');
//bouton de fermeture de la modal
var span = document.getElementsByClassName('close-modal')[0];

// open-icon: icone menu sandwich
var openIcon = document.getElementById('sidebar-open');

var logo = document.getElementsByClassName('logo')[0];

//sidebar
var sidebar = document.getElementById('sidebar');

//sidebar-wrapper: fond gris
var sidebarWrapper = document.getElementById('sidebar-wrapper');

var img_carre = document.querySelectorAll('.img_carré, .img_R');

const displayImage = function (img) {
	let text = '';
	if (this.parentElement.children[0] === this) {
		text = this.parentElement.children[1].innerText;
	} else {
		text = this.parentElement.children[0].innerText;
	}

	modal.style.display = 'block';
	modalTitle.innerText = text;
	modalTitle.style.display = 'flex';
	modalTitle.style.justifyContent = 'center';
	modalTitle.style.alignItems = 'center';
	modalTitle.style.height = '100%';
	modalTitle.style.fontSize = '20px';
	modalTitle.style.weight = '300';
	modalTitle.style.fontFamily = 'Helvetica';

	// ajout de la nouvelle image
	let newImg = document.createElement('img');
	newImg.src = img.target.src;
	if (img.target.height === img.target.width) {
		newImg.style.height = '100%';
		newImg.style.width = '60%';
	} else if (img.target.height > img.target.width) {
		// appliquer un style particuler
		newImg.style.height = '100%';
		newImg.style.width = '40%';
	} else {
		// appliquer le style par defaut
		newImg.style.height = '100%';
		newImg.style.width = '80%';
	}

	newImg.style.cursor = 'pointer';
	blockImgModal.appendChild(newImg);
};

for (let i = 0; i < img_carre.length; i++) {
	img_carre[i].addEventListener('click', displayImage);
}

// Fermeture de la module avec le click sur la croix
span.onclick = function () {
	modal.style.display = 'none';
	document.querySelector('#block-img').firstChild.remove();
};

// Si on click en dehors de la modal, on ferme également la fenêtre
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none';
		document.querySelector('#block-img').firstChild.remove();
	}
};

/**
 * Méthode de fermeture de la nav
 */
const closeNav = function (ele) {
	sidebarWrapper.classList.remove('active');
	sidebar.style.left = '-100%';
};

// closeIcon.addEventListener('click', closeNav);

sidebarWrapper.addEventListener('click', closeNav);

openIcon.addEventListener('click', function () {
	sidebarWrapper.classList.add('active');
	sidebar.style.left = 0;
});

logo.addEventListener('click', function () {
	window.scrollTo(0, 0);
});
