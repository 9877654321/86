function new_image(){
    fabric.fromURL('987.jpg' ,function(Img){
    block_image_object = Img;

    block_image_object.scaleToWidth(800);
    block_image_object.scaleToheight(600);
    block_image_object.set({
        top : 0,
        left : 0
    });
      canvas.add(block_image_object);
     });
}
function playSound(){
x.play();
}