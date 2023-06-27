var player = new Plyr('#player', {
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'captions', 'settings', 'fullscreen'],
        settings: ['captions', 'quality', 'speed'],
        seekTime: 25
    });


var episode;
var quality;

function loadCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while ( c.charAt(0) == ' '){
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return " ";
}

function changeQuality() {
	console.log("started");
	const param = window.location.search;
	const parser = new URLSearchParams(param);
	const search  = parser.get('watch');
	curtime = player.currentTime;
	episode = episode;
	fetch('https://consumet-anime.up.railway.app/anime/zoro/info?id=' + search)
	.then((response) => response.json())
	.then((animelist) => {
		fetch('https://consumet-anime.up.railway.app/anime/zoro/watch?episodeId=' + animelist.episodes[episode].id + '?server=vidcloud')
			.then((response) => response.json())
			.then((animep) => {
				var selection = document.getElementById("quality").value;
				var video = document.getElementById('player');
				if (Hls.isSupported()) {
					var hls = new Hls();
					hls.loadSource('https://cors.techzbots.live/' + animep.sources[selection].url);
					hls.attachMedia(video);
					var l = 0;
					video.addEventListener('canplay', function(){
						if (player.currentTime != curtime && l == 0) {
							player.currentTime = curtime;
							l = 1;
						}
					})
					player.play();
					}else if(canPlayType("application/vnd.apple.mpeg")){
					video.src = 'https://cors.techzbots.live/' + animep.sources[selection].url;
					video.addEventListener("loadedmetadata", () => {
					video.play();
					})
				}
				quality = selection;
			})
	})
	console.log("done");
}



function changeEpisode(num) {
	const param = window.location.search;
	const parser = new URLSearchParams(param);
	const search  = parser.get('watch');
	fetch('https://consumet-anime.up.railway.app/anime/zoro/info?id=' + search)
	.then((response) => response.json())
	.then((animelist) => {
		fetch('https://consumet-anime.up.railway.app/anime/zoro/watch?episodeId=' + animelist.episodes[num].id + '?server=vidcloud')
			.then((response) => response.json())
			.then((animep) => {
				var video = document.getElementById('player');
				quality = quality;
				if (Hls.isSupported()) {
					var hls = new Hls();
					hls.loadSource('https://cors.techzbots.live/' + animep.sources[quality].url);
					hls.attachMedia(video);
				}else if(canPlayType("application/vnd.apple.mpeg")){
					video.src = 'https://cors.techzbots.live/' + animep.sources[quality].url;
					video.addEventListener("loadedmetadata", () => {
						video.play();
					})
				}
				num = num;
				episode = num;
			})
	})
}



function loadEpisode(anime) {
	fetch('https://consumet-anime.up.railway.app/meta/anilist/info/' + anime.toString() + '?provider=gogoanime')
	.then((response) => response.json())
	.then((animelist) => {
		console.log(animelist) 
		if (loadCookie(anime) === " ") {
			fetch('https://consumet-anime.up.railway.app/anime/gogoanime/watch/' + animelist.episodes[0].id)
			.then((response) => response.json())
			.then((animep) => {
				var video = document.getElementById('player');
				if (Hls.isSupported()) {
					var hls = new Hls();
					hls.loadSource('https://cors.techzbots.live/' + animep.sources[0].url);
					hls.attachMedia(video);
				}else if(canPlayType("application/vnd.apple.mpeg")){
					video.src = 'https://cors.techzbots.live/' + animep.sources[0].url;
					video.addEventListener("loadedmetadata", () => {
						video.play();
					})
				}
				episode = 0;
				quality = 0;
			})
		} 
		
	})
}



function loadEpList(query) {
	fetch('https://consumet-anime.up.railway.app/anime/zoro/info?id=' + query)
	.then((response) => response.json())
	.then((animelist) => {

		var i = 0;
		var code = "";
		while (i < animelist.episodes.length){
			var sum = i + 1;
			var sumMin = i - 1;
			code = code + "<a onclick='changeEpisode(" + sumMin + ")'>Ep " + sum + "</a>";
			i++;
		}
		document.getElementById('epList').innerHTML = code;
	});
}















function loadB() {
	const param = window.location.search;
	const parser = new URLSearchParams(param);
	const search  = parser.get('watch');
	loadEpisode(search);
	loadEpList(search);
}
