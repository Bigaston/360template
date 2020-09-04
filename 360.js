fetch("./data.json").then(res => {
	return res.json();
}).then(data => {
	document.title = data.title;
	document.getElementById("page_title").innerHTML = data.title;
	document.getElementById("page_desc").innerHTML = data.desc;

	pannellum.viewer('panorama', {
		"default": {
			"firstScene": "picture",
			"author": data.author,
			"sceneFadeDuration": 1000,
		},
	
		"scenes": {
			"picture": {
				"title": data.title,
				"type": "equirectangular",
				"panorama": data.img,
			}
		}
	});
})