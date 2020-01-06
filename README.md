# Travel Map

This project is a travel map that displays places I've been around the world, focused on the city/country aspect.

## How do I clone this?

Simply make a fork and edit the parts you want. The project is intended to be hosted at the root of a subdomain, but I tried to use relative pathing as much as possible to make it easy to adapt for serving it at a non-root path. The main things you'll want to change are the hero image `img/hero.jpg`, the "about me" text, and the meta description/author tags in `index.html`, as well as the actual database of locations `data/locations.geojson` and any specific images and descriptions in the `data/descriptions` directory. All I ask is that you please attribute me on the website somewhere in a visible place.

## Tech behind the project

This project uses Angular.js (yes, old Angular!) using modern JS (modular) features without using webpack or babel. The reason I did this is because I'm not targeting old browsers at all with this project as I don't care enough to do so, and I wanted to make the development process as simple as possible. The whole project can be served via any static site host; personally I'm using GitHub pages. There is no backend components or build steps whatsoever - simply update the files and run it in your browser.

## Acknowledgements

The biggest acknowledgement I want to make for this project is to the folks at NASA that uploaded the "Blue Marble" satellite photography for free public use. It's what makes the map part of this project possible and doesn't cost anything to use. I also want to thank [Nicolas Mollet from MapsMarker](https://mapicons.mapsmarker.com) for making the map icons free to use in projects like this one. Moreover, there's a myriad of open-source projects like [Angular.js](https://docs.angularjs.org/api), [Underscore](https://underscorejs.org/), [Polymaps](http://polymaps.org/) and [Bootstrap](https://getbootstrap.com/docs/4.4/about/team/) (among others) that I'd like to thank as well. Finally, I want to thank the people at [CdnJS](https://cdnjs.com/) for hosting javascript libraries for free public use.


## Potential features for the future

Here's a few things I am thinking of adding in the future:

* Support for multi-person travel maps with ability to tag a location as visited by multiple parties
* Tracking dates visited and being able to visualize how much of the world you've travelled as years go by
* Better mobile device support
