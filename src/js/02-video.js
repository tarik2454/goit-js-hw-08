import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

player.on('timeupdate', throttle(savedCurrentTime, 1000));

function savedCurrentTime({ seconds }) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
}

const getCurrentTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time') || 0
);

player.setCurrentTime(getCurrentTime);
