![ScreenShot](https://github.com/Koelli91/imgCrossfade/raw/master/tests/banner.png)

imgCrossfade v0.1 / 03-02-2016
#####A jQuery Plugin to easily crossfade through images (same dimensions required)
Kevin Köllmann (Koelli91)
licensed the [GPL-3.0](https://github.com/Koelli91/imgCrossfade/raw/master/LICENSE)
## 
#Usage

####Include:
```html
<script src="js/imgCrossfade.min.js"></script>
```

####HTML:
For "Standard" Images:
```html
<div id="cycler">
	<img src="one.jpg" class="cf" />
	<img src="two.jpg" class="cf" />
	...
</div>
```

For Background-Images (the css background-image-property will be applied to the "cycler"):
```html
<div id="cycler">
	<img src="one.jpg" class="cf-bg" />
	<img src="two.jpg" class="cf-bg" />
	...
</div>
```
> The images itself will be completely hidden (_display: none_), so you don't have to worry about your layout.

####JS:
For "Standard" Images:
```js
$(document).ready(function() {
	$("#cycler").imgCrossfade();
});
```
For Background-Images:
```js
$(document).ready(function() {
	$("#cycler").bgimgCrossfade();
});
```

####CSS:
For both (standard and background-images):
```css
#cycler {
	width: 227px; /* the common width of the images */
	max-width: 100%; /* for responsiveness - choose whatever max-width you'd like */
}
```

####View in action:
[http://koelli91.github.io/imgCrossfade/](http://koelli91.github.io/imgCrossfade/#view-in-action)
## 
###Features:
```
	- Bootstrap-Compatible
	- Lightweight: ~1 KiB (minified)
	- Responsive
	- All browsers (incl. IE6)
```
 
###Options:
```js
$("#cycler").imgCrossfade({
	fading: 'fast'|'medium'|'slow'|<any number in ms>
	interval: <any number in ms>
});
/*
* fading: how long the crossfade should take (Default: 'medium' (= 1500 ms))
* interval: how often the image should change (Default: 7000 ms)
*/
```
