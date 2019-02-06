//Puts Merchant stand down when not moving
​
​
​
function merchantstand()
{
    if(!character.moving)
    {
        parent.socket.emit("merchant",{num:0}); 
    }
    
    if(character.moving)
    {
        parent.socket.emit("merchant", {close:1});
    }
}
​
setInterval(function () {
    merchantstand()
}, 500);
​
