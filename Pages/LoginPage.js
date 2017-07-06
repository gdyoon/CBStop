var Observable = require('FuseJS/Observable');

var user_id = Observable();
var user_pw = Observable();

/*
var user = Observable(
{id : user_id.value},
{pw : user_pw.value}
);
*/


function Login()
{
	var user = {
	id : user_id.value,
	pw : user_pw.value
};

	router.push("main", user);
}





module.exports = {
	Login : Login,
	user_id : user_id,
	user_pw : user_pw
}