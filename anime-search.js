
function SQuery(search) {
	let searchQ = String(search);
	let newSearch = searchQ.replace(" ", "-");
	fetch('https://consumet-anime.up.railway.app/meta/anilist/' + newSearch + "?page=1")
	.then((response) => response.json())
	.then((animelist) => {
		document.getElementById('TA1').innerHTML = "<div class='product__item__pic set-bg' id='oof1'></div> <div class='product__item__text'><h5><a href='anime-details.html?query=" + animelist.results[0].id + "'>" + animelist.results[0].title[1] + "</a></h5></div>";
		document.getElementById('oof1').style.background = "url('" + animelist.results[0].image + "')";
		document.getElementById('TA2').innerHTML = "<div class='product__item__pic set-bg' id='oof2' ></div> <div class='product__item__text'><h5><a href='anime-details.html?query=" + animelist.results[1].id + "'>" + animelist.results[1].title[1] + "</a></h5></div>";
		document.getElementById('oof2').style.background = "url('" + animelist.results[1].image + "')";
		document.getElementById('TA3').innerHTML = "<div class='product__item__pic set-bg' id='oof3' ></div> <div class='product__item__text'><h5><a href='anime-details.html?query=" + animelist.results[2].id + "'>" + animelist.results[2].title[1] + "</a></h5></div>";
		document.getElementById('oof3').style.background = "url('" + animelist.results[2].image + "')";
		document.getElementById('TA4').innerHTML = "<div class='product__item__pic set-bg' id='oof4' ></div> <div class='product__item__text'><h5><a href='anime-details.html?query=" + animelist.results[3].id + "'>" + animelist.results[3].title[1] + "</a></h5></div>";
		document.getElementById('oof4').style.background = "url('" + animelist.results[3].image + "')";
		document.getElementById('TA5').innerHTML = "<div class='product__item__pic set-bg' id='oof5' ></div> <div class='product__item__text'><h5><a href='anime-details.html?query=" + animelist.results[4].id + "'>" + animelist.results[4].title[1] + "</a></h5></div>";
		document.getElementById('oof5').style.background = "url('" + animelist.results[4].image + "')";
		document.getElementById('TA6').innerHTML = "<div class='product__item__pic set-bg' id='oof6' ></div> <div class='product__item__text'><h5><a href='anime-details.html?query=" + animelist.results[5].id + "'>" + animelist.results[5].title[1] + "</a></h5></div>";
		document.getElementById('oof6').style.background = "url('" + animelist.results[5].image + "')";
	})



}









function loadB() {
	
	const param = window.location.search;
	const parser = new URLSearchParams(param);
	const search  = parser.get('search');
	SQuery(search);
}
