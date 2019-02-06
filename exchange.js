var eItem = true; //Enable exchanging of items = true, Disable exchanging of items = false
var whitelist3 = ['seashell','gem0','redenvelopev2']; //whitelist is for the exchanging of items

setInterval(function() {

  //exchanges items in whitelist
  if (eItem) {
    exchangeItem()
  }

}, 1000 / 4); //Loop every 1/4 seconds.

function exchangeItem() {
  for (let i = 0; i < character.items.length; i++) {
    let c = character.items[i];
    if (c) {
      if (c && whitelist3.includes(c.name)) {

        exchange(i)
        parent.e_item = i;
      }
    }
  }
}
