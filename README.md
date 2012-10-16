# What's fastsort?

Fastsort is a pretty fast HTML table sorter. This plugin performs well for very large tables. Currently, sorting 2000 items takes about 70ms. It's currently using jQuery.

Current limitations:
 * Only string sorting
 * Does not work in Internet Explorer
 
## Usage

	$(document).ready(function() {
		$("table").fastSort();
	});	