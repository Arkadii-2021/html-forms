const chkInterestsActive = document.querySelectorAll('.interests.interests_active');
const chkInterests = document.querySelectorAll('input');

chkInterests[0].addEventListener('change', (e) => {
	if ((e.target.parentNode.parentNode.classList == 'interest') && (chkInterests[1].checked == false && chkInterests[2].checked == false)) {
		chkInterests[1].checked = true
		chkInterests[2].checked = true 
	} else {
		chkInterests[1].checked = false
		chkInterests[2].checked = false 
	}
});

chkInterests[3].addEventListener('change', (e) => {
	if ((e.target.parentNode.parentNode.classList == 'interest') && (chkInterests[4].checked == false && chkInterests[5].checked == false)) {
		chkInterests[4].checked = true
		chkInterests[5].checked = true 
	} else {
		chkInterests[4].checked = false
		chkInterests[5].checked = false 
	}
});