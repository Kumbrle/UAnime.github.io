
function loadTA(){
	fetch('https://goanime.up.railway.app/top-airing')
		.then((response) => response.json())
		.then((animelist) => {
			fetch('https://goanime.up.railway.app/anime-details/' + animelist[0].animeId)
				.then((response) => response.json())
				.then((animedet) => {
					fetch('https://consumet-anime.up.railway.app/anime/zoro/' + animelist[0].animeId).then((response) => response.json())
					.then((animewat) => {
					document.getElementById('TA1').innerHTML = "<div class='product__item__pic set-bg' id='oof1' ></div> <div class='product__item__text'><ul><li>" + animedet.genres[0] +"</li><li>" + animedet.genres[1] + "</li></ul><h5><a href='anime-details.html?query=" + animewat.results[0].id + "'>" + animewat.results[0].title + "</a></h5></div>";
					})
					.then((animedet) => {
						document.getElementById('oof1').style.background = "url('" + animelist[0].animeImg + "')";
					});
				})

			fetch('https://goanime.up.railway.app/anime-details/' + animelist[1].animeId)
				.then((response) => response.json())
				.then((animedet) => {
					fetch('https://consumet-anime.up.railway.app/anime/zoro/' + animelist[1].animeId).then((response) => response.json())
					.then((animewat) => {
					document.getElementById('TA2').innerHTML = "<div class='product__item__pic set-bg' id='oof2'></div> <div class='product__item__text'><ul><li>" + animedet.genres[0] +"</li><li>" + animedet.genres[1] + "</li></ul><h5><a href='anime-details.html?query=" + animewat.results[0].id + "'>" + animewat.results[0].title + "</a></h5></div>";
					})
					.then((animedet) => {
					document.getElementById('oof2').style.background = "url('" + animelist[1].animeImg + "')";
				})
				})



			fetch('https://goanime.up.railway.app/anime-details/' + animelist[2].animeId)
				.then((response) => response.json())
				.then((animedet) => {
					fetch('https://consumet-anime.up.railway.app/anime/zoro/' + animelist[2].animeId).then((response) => response.json())
					.then((animewat) => {
				document.getElementById('TA3').innerHTML = "<div class='product__item__pic set-bg' id='oof3'></div> <div class='product__item__text'><ul><li>" + animedet.genres[0] +"</li><li>" + animedet.genres[1] + "</li></ul><h5><a href='anime-details.html?query=" + animewat.results[0].id + "'>" + animewat.results[0].title + "</a></h5></div>";
				})
				.then((animedet) => {
					document.getElementById('oof3').style.background = "url('" + animelist[2].animeImg + "')";
				})
				})
				


			fetch('https://goanime.up.railway.app/anime-details/' + animelist[3].animeId)
				.then((response) => response.json())
				.then((animedet) => {
					fetch('https://consumet-anime.up.railway.app/anime/zoro/' + animelist[3].animeId).then((response) => response.json())
					.then((animewat) => {
				document.getElementById('TA4').innerHTML = "<div class='product__item__pic set-bg' id='oof4'></div> <div class='product__item__text'><ul><li>" + animedet.genres[0] +"</li><li>" + animedet.genres[1] + "</li></ul><h5><a href='anime-details.html?query=" + animewat.results[0].id + "'>" + animewat.results[0].title + "</a></h5></div>";
				})
				.then((animedet) => {
					document.getElementById('oof4').style.background = "url('" + animelist[3].animeImg + "')";
				})
				})
				


			fetch('https://goanime.up.railway.app/anime-details/' + animelist[4].animeId)
				.then((response) => response.json())
				.then((animedet) => {
					fetch('https://consumet-anime.up.railway.app/anime/zoro/' + animelist[4].animeId).then((response) => response.json())
					.then((animewat) => {
				document.getElementById('TA5').innerHTML = "<div class='product__item__pic set-bg' id='oof5'></div> <div class='product__item__text'><ul><li>" + animedet.genres[0] +"</li><li>" + animedet.genres[1] + "</li></ul><h5><a href='anime-details.html?query=" + animewat.results[0].id + "'>" + animewat.results[0].title + "</a></h5></div>";
				})
					.then((animedet) => {
					document.getElementById('oof5').style.background = "url('" + animelist[4].animeImg + "')";
				})
				})
				


			fetch('https://goanime.up.railway.app/anime-details/' + animelist[5].animeId)
				.then((response) => response.json())
				.then((animedet) => {
					fetch('https://consumet-anime.up.railway.app/anime/zoro/' + animelist[5].animeId).then((response) => response.json())
					.then((animewat) => {
				document.getElementById('TA6').innerHTML = "<div class='product__item__pic set-bg' id='oof6'></div> <div class='product__item__text'><ul><li>" + animedet.genres[0] +"</li><li>" + animedet.genres[1] + "</li></ul><h5><a href='anime-details.html?query=" + animewat.results[0].id + "'>" + animewat.results[0].title + "</a></h5></div>";
				})
					.then((animedet) => {
					document.getElementById('oof6').style.background = "url('" + animelist[5].animeImg + "')";
				})
				})
				

			





		})
}

function loadPA() {
	fetch('https://goanime.up.railway.app/popular')
		.then((response) => response.json())
		.then((animelist) => {
			fetch('https://goanime.up.railway.app/anime-details/' + animelist[0].animeId)
				.then((response) => response.json())
				.then((animedet) => {
					fetch('https://consumet-anime.up.railway.app/anime/zoro/' + animelist[0].animeId).then((response) => response.json())
					.then((animewat) => {
				document.getElementById('PA1').innerHTML = "<div class='product__item__pic set-bg' id='oofp1'></div> <div class='product__item__text'><ul><li>" + animedet.genres[0] +"</li><li>" + animedet.genres[1] + "</li></ul><h5><a href='anime-details.html?query=" + animewat.results[0].id + "'>" + animewat.results[0].title + "</a></h5></div>";
				})
					.then((animedet) => {
					document.getElementById('oofp1').style.background = "url('" + animelist[0].animeImg + "')";
				})
				})
				


			fetch('https://goanime.up.railway.app/anime-details/' + animelist[1].animeId)
				.then((response) => response.json())
				.then((animedet) => {
					fetch('https://consumet-anime.up.railway.app/anime/zoro/' + animelist[1].animeId).then((response) => response.json())
					.then((animewat) => {
				document.getElementById('PA2').innerHTML = "<div class='product__item__pic set-bg' id='oofp2'></div> <div class='product__item__text'><ul><li>" + animedet.genres[0] +"</li><li>" + animedet.genres[1] + "</li></ul><h5><a href='anime-details.html?query=" + animewat.results[0].id + "'>" + animewat.results[0].title + "</a></h5></div>";
				})
					.then((animedet) => {
					document.getElementById('oofp2').style.background = "url('" + animelist[1].animeImg + "')";
				})
				})
				


			fetch('https://goanime.up.railway.app/anime-details/' + animelist[2].animeId)
				.then((response) => response.json())
				.then((animedet) => {
					fetch('https://consumet-anime.up.railway.app/anime/zoro/' + animelist[2].animeId).then((response) => response.json())
					.then((animewat) => {
				document.getElementById('PA3').innerHTML = "<div class='product__item__pic set-bg' id='oofp3'></div> <div class='product__item__text'><ul><li>" + animedet.genres[0] +"</li><li>" + animedet.genres[1] + "</li></ul><h5><a href='anime-details.html?query=" + animewat.results[0].id + "'>" + animewat.results[0].title + "</a></h5></div>";
				})
					.then((animedet) => {
					document.getElementById('oofp3').style.background = "url('" + animelist[2].animeImg + "')";
				})
				})
				


			fetch('https://goanime.up.railway.app/anime-details/' + animelist[3].animeId)
				.then((response) => response.json())
				.then((animedet) => {
					fetch('https://consumet-anime.up.railway.app/anime/zoro/' + animelist[3].animeId).then((response) => response.json())
					.then((animewat) => {
				document.getElementById('PA4').innerHTML = "<div class='product__item__pic set-bg' id='oofp4'></div> <div class='product__item__text'><ul><li>" + animedet.genres[0] +"</li><li>" + animedet.genres[1] + "</li></ul><h5><a href='anime-details.html?query=" + animewat.results[0].id + "'>" + animewat.results[0].title + "</a></h5></div>";
				})
					.then((animedet) => {
					document.getElementById('oofp4').style.background = "url('" + animelist[3].animeImg + "')";
				})
				})
				


			fetch('https://goanime.up.railway.app/anime-details/' + animelist[4].animeId)
				.then((response) => response.json())
				.then((animedet) => {
					fetch('https://consumet-anime.up.railway.app/anime/zoro/' + animelist[4].animeId).then((response) => response.json())
					.then((animewat) => {
				document.getElementById('PA5').innerHTML = "<div class='product__item__pic set-bg' id='oofp5'></div> <div class='product__item__text'><ul><li>" + animedet.genres[0] +"</li><li>" + animedet.genres[1] + "</li></ul><h5><a href='anime-details.html?query=" + animewat.results[0].id + "'>" + animewat.results[0].title + "</a></h5></div>";
				})
					.then((animedet) => {
					document.getElementById('oofp5').style.background = "url('" + animelist[4].animeImg + "')";
				})
				})
				


			fetch('https://goanime.up.railway.app/anime-details/' + animelist[5].animeId)
				.then((response) => response.json())
				.then((animedet) => {
					fetch('https://consumet-anime.up.railway.app/anime/zoro/' + animelist[5].animeId).then((response) => response.json())
					.then((animewat) => {
				document.getElementById('PA6').innerHTML = "<div class='product__item__pic set-bg' id='oofp6'></div> <div class='product__item__text'><ul><li>" + animedet.genres[0] +"</li><li>" + animedet.genres[1] + "</li></ul><h5><a href='anime-details.html?query=" + animewat.results[0].id + "'>" + animewat.results[0].title + "</a></h5></div>";
				})
					.then((animedet) => {
					document.getElementById('oofp6').style.background = "url('" + animelist[5].animeImg + "')";
				})
				})
				

			





		})
}

function loadRA() {
	fetch('https://goanime.up.railway.app/recent-release')
		.then((response) => response.json())
		.then((animelist) => {
			fetch('https://goanime.up.railway.app/anime-details/' + animelist[0].animeId)
				.then((response) => response.json())
				.then((animedet) => {
					fetch('https://consumet-anime.up.railway.app/anime/zoro/' + animelist[0].animeId).then((response) => response.json())
					.then((animewat) => {
				document.getElementById('RA1').innerHTML = "<div class='product__item__pic set-bg' id='oofr1'></div> <div class='product__item__text'><ul><li>" + animedet.genres[0] +"</li><li>" + animedet.genres[1] + "</li></ul><h5><a href='anime-details.html?query=" + animewat.results[0].id + "'>" + animewat.results[0].title + "</a></h5></div>";
				})
					.then((animedet) => {
					document.getElementById('oofr1').style.background = "url('" + animelist[0].animeImg + "')";
				})
				})
				


			fetch('https://goanime.up.railway.app/anime-details/' + animelist[1].animeId)
				.then((response) => response.json())
				.then((animedet) => {
					fetch('https://consumet-anime.up.railway.app/anime/zoro/' + animelist[1].animeId).then((response) => response.json())
					.then((animewat) => {
				document.getElementById('RA2').innerHTML = "<div class='product__item__pic set-bg' id='oofr2'></div> <div class='product__item__text'><ul><li>" + animedet.genres[0] +"</li><li>" + animedet.genres[1] + "</li></ul><h5><a href='anime-details.html?query=" + animewat.results[0].id + "'>" + animewat.results[0].title + "</a></h5></div>";
				})
					.then((animedet) => {
					document.getElementById('oofr2').style.background = "url('" + animelist[1].animeImg + "')";
				})
				})
				


			fetch('https://goanime.up.railway.app/anime-details/' + animelist[2].animeId)
				.then((response) => response.json())
				.then((animedet) => {
					fetch('https://consumet-anime.up.railway.app/anime/zoro/' + animelist[2].animeId).then((response) => response.json())
					.then((animewat) => {
				document.getElementById('RA3').innerHTML = "<div class='product__item__pic set-bg' id='oofr3'></div> <div class='product__item__text'><ul><li>" + animedet.genres[0] +"</li><li>" + animedet.genres[1] + "</li></ul><h5><a href='anime-details.html?query=" + animewat.results[0].id + "'>" + animewat.results[0].title + "</a></h5></div>";
				})
					.then((animedet) => {
					document.getElementById('oofr3').style.background = "url('" + animelist[2].animeImg + "')";
				})
				})
				


			fetch('https://goanime.up.railway.app/anime-details/' + animelist[3].animeId)
				.then((response) => response.json())
				.then((animedet) => {
					fetch('https://consumet-anime.up.railway.app/anime/zoro/' + animelist[3].animeId).then((response) => response.json())
					.then((animewat) => {
				document.getElementById('RA4').innerHTML = "<div class='product__item__pic set-bg' id='oofr4'></div> <div class='product__item__text'><ul><li>" + animedet.genres[0] +"</li><li>" + animedet.genres[1] + "</li></ul><h5><a href='anime-details.html?query=" + animewat.results[0].id + "'>" + animewat.results[0].title + "</a></h5></div>";
				})
					.then((animedet) => {
					document.getElementById('oofr4').style.background = "url('" + animelist[3].animeImg + "')";
				})
				})
				


			fetch('https://goanime.up.railway.app/anime-details/' + animelist[4].animeId)
				.then((response) => response.json())
				.then((animedet) => {
					fetch('https://consumet-anime.up.railway.app/anime/zoro/' + animelist[4].animeId).then((response) => response.json())
					.then((animewat) => {
				document.getElementById('RA5').innerHTML = "<div class='product__item__pic set-bg' id='oofr5'></div> <div class='product__item__text'><ul><li>" + animedet.genres[0] +"</li><li>" + animedet.genres[1] + "</li></ul><h5><a href='anime-details.html?query=" + animewat.results[0].id + "'>" + animewat.results[0].title + "</a></h5></div>";
				})
					.then((animedet) => {
					document.getElementById('oofr5').style.background = "url('" + animelist[4].animeImg + "')";
				})
				})
				


			fetch('https://goanime.up.railway.app/anime-details/' + animelist[5].animeId)
				.then((response) => response.json())
				.then((animedet) => {
					fetch('https://consumet-anime.up.railway.app/anime/zoro/' + animelist[5].animeId).then((response) => response.json())
					.then((animewat) => {
				document.getElementById('RA6').innerHTML = "<div class='product__item__pic set-bg' id='oofr6'></div> <div class='product__item__text'><ul><li>" + animedet.genres[0] +"</li><li>" + animedet.genres[1] + "</li></ul><h5><a href='anime-details.html?query=" + animewat.results[0].id + "'>" + animewat.results[0].title + "</a></h5></div>";
				})
					.then((animedet) => {
					document.getElementById('oofr6').style.background = "url('" + animelist[5].animeImg + "')";
				})
				})
				

			





		})
}

function load() {
	loadTA();
	loadPA();
	loadRA();
}