const chkInterests = document.querySelectorAll('input');

function changeCheckbox(chk1, chk2, chk3) {
	chkInterests[chk1].addEventListener('change', (e) => {
	if (chkInterests[chk2].checked == false || chkInterests[chk3].checked == false) {
		chkInterests[chk2].checked = true
		chkInterests[chk3].checked = true 
	} else {
		chkInterests[chk2].checked = false
		chkInterests[chk3].checked = false 
	}
})
};

changeCheckbox(0, 1, 2);
changeCheckbox(3, 4, 5);