// 1. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {

    window.youtubePlayer = {
        player: new YT.Player('youtubePlayer', {
            height: '1',
            width: '1',
            videoId: '',
            suggestedQuality: "tiny",
            events: {
                'onReady': (event) => {event.target.setVolume(document.querySelector(".radioPlayerVolume input").value)}
            }
        }),
        newRadio: new YT.Player('youtubeNewRadio', {
            height: '1',
            width: '1',
            videoId: '',
            suggestedQuality: "tiny",
            events: {
                'onStateChange': newRadio,
                'onReady': (event) => {event.target.setVolume(0)}
            }
        })
    }

    
}

function newRadio(event){
    if (event.data === 1) {
        let videoData = event.target.getVideoData();
        event.target.stopVideo();

        // declare cookie
        let cookie = "";

        // cookie, expire date
        let cookieExpires = new Date();
        cookieExpires.setFullYear(cookieExpires.getFullYear() + 1);

        // check if there is cookies
        if (document.cookie.length === 0){
            // create cookie
            cookie = {radiosList: [{radioName: videoData.title, author: videoData.author, videoId: videoData.video_id}]}
            cookie = JSON.stringify(cookie);
        }else{
            if (JSON.parse(document.cookie).radiosList !== undefined){
                // append to cookie
                cookie = JSON.parse(document.cookie);
                cookie.radiosList.push({radioName: videoData.title, author: videoData.author, videoId: videoData.video_id});
                cookie = JSON.stringify(cookie);
            }else{
                // create radiosList
                cookie = JSON.parse(document.cookie);
                cookie.radiosList = [];
                cookie.radiosList.push({radioName: videoData.title, author: videoData.author, videoId: videoData.video_id});
                cookie = JSON.stringify(cookie);
            }
            
        }
        
        // create cookie
        document.cookie = cookie + "; expires=" + cookieExpires.toUTCString();

        // update radio list
        window.updateRadioList();

    }
    
}

