var place = this.Parameter;

var place_id		= place.map(function(x) { return x.id; });
var place_name 		= place.map(function(x) { return x.name; });
var place_img_path	= place.map(function(x) { return x.path; });
var place_address	= place.map(function(x) { return x.address; });


module.exports = {
	place_id : place_id,
	place_name : place_name,
	place_img_path : place_img_path,
	place_address : place_address
}