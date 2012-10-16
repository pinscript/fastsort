(function($) {
	$.fn.fastSort = function() {
		var DESC = 0,
			ASC  = 1,
			dir  = DESC;

		var table  = $(this);
		var	tbody  = table.find("tbody")[0];
		var	trs    = table.find("tbody tr");
		var	trslen = trs.length;

		var sorter = function(idx) {
			// Perform sorting
			trs.sort(function(a, b) {
				var aValue = a.children[idx].textContent.toUpperCase();
				var bValue = b.children[idx].textContent.toUpperCase();
				var cmp = aValue.localeCompare(bValue);
				return dir === DESC ? cmp : -cmp;
			});

			// Re-insert DOM elements
			var arr = new Array(trslen);
			for(var i = 0; i < trslen; i += 1) {
				arr[i] = trs[i].outerHTML;
			}
			tbody.outerHTML = "<tbody>" + arr.join("") + "</tbody>";
			tbody = table.find("tbody")[0]; // This rows bugs me, should be able to replace with table.children[tbodyIndex]?
		};

		// Set up click handlers on each th
		table.find("th").each(function(idx) {
			var th = $(this);
			th.click(function() {
				sorter(idx, dir); // Sort table on this column
				dir = dir ^= 1;
			});
		});
	};

})(jQuery);