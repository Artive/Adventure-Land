var prevx, prevy;
var prevtx, prevty;
var monarr = parent.G.maps[parent.current_map].monsters;
​
setInterval(function(){
    
    var charx = character.real_x;
    var chary = character.real_y;
    
    var target = get_target();
    var tarx, tary;
    if(target)
        tarx = target.real_x, tary = target.real_y;
    
    if(prevx != charx || prevy != chary)
        clear_drawings();
    if(target && (tarx != prevtx || tary != prevty) || !target)
        clear_drawings();
    
    draw_circle(charx, chary, character.range);
    //Current Location
    
    if(target && target.type == 'monster')
    {
        draw_circle(tarx, tary, parent.G.monsters[target.mtype].range);
    }
    else if(target && target.type == 'character')
        draw_circle(tarx, tary, target.range);
    //Target Location
        
    prevx = charx, prevy = chary;
    
    if(target)
        prevtx = target.real_x, prevty = target.real_y;
    
    set_message("Working!");
},100); // Loops every 1/4 seconds.
​
function draw_square(x1, y1, x2, y2)
{
    draw_line(x1, y1, x2, y1, 2);
    draw_line(x1, y2, x2, y2, 2);
    draw_line(x1, y1, x1, y2, 2);
    draw_line(x2, y1, x2, y2, 2);
}
