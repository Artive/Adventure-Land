function goldtoart()//Calls other functions based on toggles
{
	var goldonhand = character.gold;
	if(get_player("Artive"))
		{
  	 		if(goldonhand >= 4000)
			{
				goldonhand = goldonhand - 3000
				send_gold("Artive", goldonhand) 
			}
            var i;
			var em = character.esize
            for (i = 2; i <= 41 - em; i++) //Ignores the first two slots in the inventory to hold potions 
                {
                      send_item("Artive", i, 999)
                }
        }    
}


setInterval(function () {
	
	goldtoart();
	
}, 750);
