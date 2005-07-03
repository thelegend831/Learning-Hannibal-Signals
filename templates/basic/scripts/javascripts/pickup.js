	function pickup(list, text, value, mywindow) {
		if (list.multiple) {
			for(x=0; x<(list.length); x++){
				if (list.options[x].value == value) return;
			}
			var opt = new Option(text, value)
			list.options[list.options.length] = opt
			for(x=0; x<(list.length); x++){
				list.options[x].selected = "true"
			}
		} else {
			if (list.options.length == 2) {
				num = 1
			} else {
				num = 0
			}
			list.options[num] = null
			var opt = new Option(text, value)
			list.options[num] = opt
			list.selectedIndex = num
			mywindow.close()
		}
	}
	
	function remove_selected(list) {
		for(x=0; x<(list.length); x++){
			if (list.options[x].selected == true) {
				list.options[x] = null
				x--
			}
		}
		for(x=0; x<(list.length); x++){
			list.options[x].selected = "true"
		}
	}