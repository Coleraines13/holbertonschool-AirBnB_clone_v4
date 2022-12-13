$(document).ready(function (){
    let amenityObj = [];

    $('li :checkbox').change(function () {
	const item = $(this).attr('data-name');

	if (this.checked) {
            amenityObj.push(item);
	} else {
	    amenityObj = amenityObj.filter((item) => item !== dataName);
	}
	$('div.amenities h4').text(amenityObj.join(', '));
    });
});
