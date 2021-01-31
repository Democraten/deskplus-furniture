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