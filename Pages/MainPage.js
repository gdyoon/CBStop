var Observable = require("FuseJS/Observable");
var user = this.Parameter;



var id = user.map(function(x){return x.id;});
var pw = user.map(function(x){return x.pw;});
var SearchedValue = Observable();


function goSearchPage()		
{
	var param = {
		value : SearchedValue.value
	};

	console.log(param.value);

	router.push("search", param);		
	//console.log("search button clicked .. : " + SearchedValue.value);
}
function goFindPathPage()	{router.push("findpath");	}
function goBadgePage()		{router.push("badge");		}
function goEventPage()		{router.push("event_");		}
function goSettingPage()	{router.push("setting");	}



module.exports = {
	SearchedValue : SearchedValue,
	goSearchPage : goSearchPage,
	goFindPathPage : goFindPathPage,
	goBadgePage : goBadgePage,
	goEventPage : goEventPage,
	goSettingPage : goSettingPage
}