import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localStorageKey = 'videoplayer-current-time';

const throttleUpdateTime = throttle(updateTime, 1000);
player.on('timeupdate', throttleUpdateTime);

function updateTime(data) {
 localStorage.setItem(localStorageKey, data.seconds);
}

let time = localStorage.getItem(localStorageKey);
time = time ? parseInt(localStorage.getItem(localStorageKey)) : 0;
player.setCurrentTime(time).then(function(seconds) {})
  .catch(function(error) {
    localStorage.setItem(localStorageKey, '0');
});

