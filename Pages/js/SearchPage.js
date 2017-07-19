var param = this.Parameter;
var SearchedValue = param.map(function(x){return x.value;});

/*
@ Bug Report

FileSourceImage 태그를 정의해 이미지 소스를 
<Image Source="..." 형태로 맵핑 시키는 것이 되어야하는데 버그

FileSource 태그를 정의해
<Image File="..." 형태로 이때 파일의 경로는 반드시 현재 디렉토리가 아닌 루트 디렉토리 기준으로 파일을 접근할 것

*/
var Items = [
 {"label":"가"},
  {"label":"나"},
   {"label":"다"},
    {"label":"라"}
];

var SearchedDataList = [
	{"id": "1", "name":"대추나무집민박", "icon":"Assets/img_search_bed.png", "address":"충청북도 보은군 속리산면 사내안길 7"},
	{"id": "2", "name":"너와두리농촌캠핑장", "icon":"Assets/img_search_camping.png", "address":"충청북도 옥천군 청성면 한두레로 387"},
	{"id": "3", "name":"청남대 진입로", "icon":"Assets/img_search_tree.png", "address":"청남대길"},
	{"id": "4", "name":"공군제17전투비행단진입로", "icon":"Assets/img_search_tree.png", "address":"공군제17전투비행단진입로"},
	{"id": "5", "name":"신토불이 보은점", "icon":"Assets/img_search_food.png", "address":"충청북도 보은군 보은읍 남부로 5100"}
];


function OnTextValueChanged()
{

}

function GoToPlaceDetailPage(arg)
{
	var selected_place = arg.data;

	router.push('place', selected_place);
}

module.exports = {

	Items : Items,
	SearchedValue : SearchedValue,
	SearchedDataList : SearchedDataList,
	OnTextValueChanged : OnTextValueChanged,
	GoToPlaceDetailPage : GoToPlaceDetailPage
}