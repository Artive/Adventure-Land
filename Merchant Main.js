//Controls Merchant Behavior


var rangefinderstate = false  //Toggles circle marking attack range and targets
var upgradestate = true //Toggles auto upgrading Whitelist in seperate function
var sellitemsstate = true //Toggles auto selling whitelist items in seperate funtion
var pathtobeestate = false
var merchantstandstate = true
var exchangestate = true

function othercode()			//Calls other functions based on toggles
{
	if (rangefinderstate == true)
	{
		load_code("rangefinder");
	}
	if (sellitemsstate == true)
	{
		load_code("sellitems");
	}
	if (upgradestate == true)
	{
		load_code("upgrade");
	}
	if (pathtobeestate == true)
	{
		load_code("pathtobee");
	}
	if (merchantstandstate == true)
	{
		load_code("merchantstand");
	}
	if (exchangestate == true)
	{
		load_code("exchange");
	}
}

othercode();

//Retreive loot and return on cycle


//Place Merchant Stand when not moving

//Autobuy potions for farmers? <-Theory only
