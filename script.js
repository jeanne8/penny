document.addEventListener('mousemove', function(e)
{
    var pencil = document.getElementById("pencil");

    //Adjust the position so that the pencil's tip follows the cursor
    var x = e.clientX - 5; //Adjust base on pencil image size
    var y = e.clientY - 5; //Adjust base on pencil image size

    pencil.style.transform = `translate(${x}px, ${y}px)`;
});
