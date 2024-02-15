const shareBtn = document.querySelector('.share-btn');
const shareList = document.querySelector('.share-options');

shareBtn.addEventListener('click', () => {
	shareList.classList.toggle('displayed');
});

document.addEventListener('click', e => {
	const target = e.target;

	// Hide shareList when clicking out of it.
	if (!shareBtn.contains(target) && !shareList.contains(target)) {
		shareList.classList.remove('displayed');
	}
});

