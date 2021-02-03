// Animations
var animElements = document.querySelectorAll('.anim');
window.addEventListener('scroll', function(e)
{
    for(var i = 0; i < animElements.length; i++)
    {
        elem = animElements[i];
        if(window.scrollY > getFullOffset(elem)-window.innerHeight*0.9)
        {
            var found_class = elem.classList.value.match(/\s+anim_.*?\S+/gm)
            if(found_class==null)
                break;
            anim_class = found_class[0].trim().replace("anim_","animate__");
            elem.classList.remove('anim');
            elem.classList.add("animate__animated");
            elem.classList.add(anim_class);
        }
    }
});
function getFullOffset(elem) {
    var top=0;
    while(elem) {
        top = top + parseFloat(elem.offsetTop);
        elem = elem.offsetParent;
    }
    return Math.round(top);
}
// Video play
var video_player = document.getElementById('video');
var video_placeholder = document.getElementById('video-placeholder');
video_placeholder.addEventListener('click', function()
    {
        video_placeholder.classList.toggle('hidden')
        if(video_player.paused)
            video_player.play();
        else
            video_player.pause();
    }
);