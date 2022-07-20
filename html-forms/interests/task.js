const chkElements = document.getElementsByTagName('input');

Array.from(chkElements).forEach((c, i) => {
	if (c.closest('ul.interests.interests_active') == null) {
		c.addEventListener('change', (e) => {
			Array.from(e.target.closest('li.interest').lastElementChild.children).forEach(chkEl => {
				if (e.target.checked == true) {
					chkEl.firstChild.nextSibling.firstChild.nextSibling.checked = true;
				} else {
					chkEl.firstChild.nextSibling.firstChild.nextSibling.checked = false;
				}
			})
			
		})
	}
});