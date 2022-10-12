import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localStorageKey = 'videoplayer-current-time';

player.on('timeupdate', _.throttle(updateTime(data), 100));

function updateTime(data) {
 localStorage.setItem(localStorageKey, data.seconds);
}
const time = localStorage.getItem(localStorageKey) > 0 ? localStorage.getItem(localStorageKey) : 0;
player.setCurrentTime(time).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            localStorage.setItem(localStorageKey, 0);
            break;

        default:
            // some other error occurred
            break;
    }
});

