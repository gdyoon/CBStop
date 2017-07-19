var param = this.Parameter;
var SearchedValue = param.map(function(x){return x.value;});

/*
@ Bug Report

FileSourceImage 태그를 정의해 이미지 소스를 
<Image Source="..." 형태로 맵핑 시키는 것이 되어야하는데 버그

FileSource 태그를 정의해
<Image File="..." 형태로 이때 파일의 경로는 반드시 현재 디렉토리가 아닌 루트 디렉토리 기준으로 파일을 접근할 것

*/

var SearchedDataList = [
	{"id": "1", "name":"대추나무집민박", "icon":"Assets/img_search_bed.png"},
	{"id": "2", "name":"너와두리농촌캠핑장", "icon":"Assets/img_search_camping.png"},
	{"id": "3", "name":"청남대 진입로", "icon":"Assets/img_search_tree.png"},
	{"id": "4", "name":"공군제17전투비행단진입로", "icon":"Assets/img_search_tree.png"},
	{"id": "5", "name":"신토불이 보은점", "icon":"Assets/img_search_food.png"},
];




function OnTextValueChanged()
{

}

module.exports = {
	SearchedValue : SearchedValue,
	SearchedDataList : SearchedDataList,
	OnTextValueChanged : OnTextValueChanged
}