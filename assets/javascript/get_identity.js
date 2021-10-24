	function get_identity(ip) {
		var ip = ip.split(".")
		let base_ip = parseInt(ip.join("6"))
			// console.log(base_ip)
		base_ip = base_ip * 5
			// console.log(base_ip)
		let shuffled_base = btoa(base_ip)
		shuffled_base = shuffled_base.substring(0, shuffled_base.length / 2)
		document.getElementById("identity").innerHTML = shuffled_base.split().reverse()
			// document.getElementById("identity_send").value = shuffled_base.split().reverse()
		return shuffled_base.split().reverse()
	}
	$.getJSON("https://api.ipify.org/?format=json", function(e) {
		get_identity(e.ip);
		window.identity_made = get_identity(e.ip)
	});
