var param = this.Parameter;

var SearchedValue = param.map(function(x){return x.value;});

function OnTextValueChanged()
{

}

module.exports = {
	SearchedValue : SearchedValue,
	OnTextValueChanged : OnTextValueChanged
}