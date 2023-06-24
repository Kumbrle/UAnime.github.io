

function detail(query) {
	fetch('https://consumet-anime.up.railway.app/anime/zoro/info?id=' + query)
	.then((response) => response.json())
	.then((animelist) => {
		document.getElementById("img").innerHTML = "<div class='anime__details__pic set-bg' id='img1'></div>";
		document.getElementById("img1").style.background = "url('" + animelist.image + "')";
		document.getElementById("title").innerHTML = "<h3>" + animelist.title + "</h3>";
		document.getElementById("description").innerHTML = animelist.description;
		document.getElementById("type").innerHTML = "<span>Type:</span> " + animelist.type + "";
		document.getElementById("TAN").innerHTML = "<span>Total Episodes:</span> " + animelist.totalEpisodes + "";
		document.getElementById("SD").innerHTML = "<span>SubOrDub:</span> " + animelist.subOrDub + "";
		document.getElementById("watch").href = "anime-watching.html?watch=" + animelist.id;
	})
}















function loadB() {
	
	const param = window.location.search;
	const parser = new URLSearchParams(param);
	const search  = parser.get('query');
	detail(search);
}


