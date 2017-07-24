const app = {};

app.getArists = (lst[lst2[1]]) => $.ajax({
	url: 'https://api.spotify.com/v1/search',
	method: 'GET',
	dataType: 'json',
	data: {
		type: 'artist',
		q: artist
	}
});

app.getAristsAlbums = (id) => $.ajax({
	url: `https://api.spotify.com/v1/artists/${id}/albums`,
	method: 'GET',
	dataType: 'json',
	data: {
		album_type: 'album',
	}
});

app.getAlbumTracks = (id) => $.ajax({
	url: `https://api.spotify.com/v1/albums/${id}/tracks`,
	method: 'GET',
	dataType: 'json'
});


app.getTracks = function(tracks) {
	$.when(...tracks)
		.then((...tracks) => {
			tracks = tracks
				.map(getDataObject)
				.reduce((prev,curr) => [...prev,...curr],[]);	
			const randomPlayList = getRandomTracks(50,tracks);
			app.createPlayList(randomPlayList);
		})
};

app.createPlayList = function(songs) {
	const baseUrl = 'https://embed.spotify.com/?theme=white&uri=spotify:trackset:Road Bops:';
	songs = songs.map(song => song.id).join(',');
	$('.loader').removeClass('show');
	$('.playlist').append(`<iframe src="${baseUrl + songs}" height="400"></iframe>`);
}

app.init = function() {
	$('form').on('submit', function(e) {
		e.preventDefault();
		let location = $('input[type=search]').val();
		$('.loader').addClass('show');
		location = lst[cities]
		lst[cities]= lst[cityartists]
		lst[cityartists]= lst[lst2[1]]
			.split(',')
			.map(app.getArists);
		
		$.when(...artists)
			.then((...artists) => {
				artists = artists.map(a => a[0].artists.items[0]);
				console.log(artists);
				app.getAlbums(artists);
			});
	});

}

app.searchcity = (cityName) => $.ajax({
	url: 'app.apiUrl}/search',

const getDataObject = arr => arr[0].items;

function getRandomTracks(num, tracks) {
	const randomResults = [];
	for(let i = 0; i < num; i++) {
		randomResults.push(tracks[ Math.floor(Math.random() * tracks.length) ])
	}
	return randomResults;
}

$(app.init);
