
function goLoginPage()
{
	setTimeout(function(){
		router.goto('login');
	}, 1500);
}



module.exports = {
	goLoginPage : goLoginPage
}