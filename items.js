// One entry per key. To swap a placeholder for real media, add:
//   image: 'images/truck.png'   -> shown full screen instead of the emoji
//   effect: 'sounds/truck-effect.mp3' -> played first (e.g. a horn)
//   sound: 'sounds/truck-word.mp3'    -> the spoken word, instead of the chime + browser voice
// Anything left out falls back to the placeholder (emoji + tone + spoken word).
window.ITEMS = {
  a: { word: 'Apple',      emoji: '🍎', color: '#ff6b6b', image: 'images/apple.png', effect: 'sounds/apple-effect.mp3', sound: 'sounds/apple-word.mp3' },
  b: { word: 'Ball',       emoji: '⚽', color: '#4dabf7', image: 'images/ball.png', effect: 'sounds/ball-effect.mp3', sound: 'sounds/ball-word.mp3' },
  c: { word: 'Cat',        emoji: '🐱', color: '#ffa94d', image: 'images/cat.png', effect: 'sounds/cat-effect.mp3', sound: 'sounds/cat-word.mp3' },
  d: { word: 'Dog',        emoji: '🐶', color: '#a9e34b', image: 'images/dog.png', effect: 'sounds/dog-effect.mp3', sound: 'sounds/dog-word.mp3' },
  e: { word: 'Elephant',   emoji: '🐘', color: '#9775fa', image: 'images/elephant.png', effect: 'sounds/elephant-effect.mp3', sound: 'sounds/elephant-word.mp3' },
  f: { word: 'Fish',       emoji: '🐟', color: '#3bc9db', image: 'images/fish.png', effect: 'sounds/fish-effect.mp3', sound: 'sounds/fish-word.mp3' },
  g: { word: 'Giraffe',    emoji: '🦒', color: '#ffd43b', image: 'images/giraffe.png', effect: 'sounds/giraffe-effect.mp3', sound: 'sounds/giraffe-word.mp3' },
  h: { word: 'Horse',      emoji: '🐴', color: '#e599f7', image: 'images/horse.png', effect: 'sounds/horse-effect.mp3', sound: 'sounds/horse-word.mp3' },
  i: { word: 'Ice cream',  emoji: '🍦', color: '#f783ac', image: 'images/ice-cream.png', effect: 'sounds/ice-cream-effect.mp3', sound: 'sounds/ice-cream-word.mp3' },
  j: { word: 'Jellyfish',  emoji: '🪼', color: '#748ffc', image: 'images/jellyfish.png', effect: 'sounds/jellyfish-effect.mp3', sound: 'sounds/jellyfish-word.mp3' },
  k: { word: 'Kite',       emoji: '🪁', color: '#63e6be', image: 'images/kite.png', effect: 'sounds/kite-effect.mp3', sound: 'sounds/kite-word.mp3' },
  l: { word: 'Lion',       emoji: '🦁', color: '#ffc078', image: 'images/lion.png', effect: 'sounds/lion-effect.mp3', sound: 'sounds/lion-word.mp3' },
  m: { word: 'Monkey',     emoji: '🐵', color: '#c0eb75', image: 'images/monkey.png', effect: 'sounds/monkey-effect.mp3', sound: 'sounds/monkey-word.mp3' },
  n: { word: 'Nest',       emoji: '🪺', color: '#66d9e8', image: 'images/nest.png', effect: 'sounds/nest-effect.mp3', sound: 'sounds/nest-word.mp3' },
  o: { word: 'Owl',        emoji: '🦉', color: '#b197fc', image: 'images/owl.png', effect: 'sounds/owl-effect.mp3', sound: 'sounds/owl-word.mp3' },
  p: { word: 'Pig',        emoji: '🐷', color: '#faa2c1', image: 'images/pig.png', effect: 'sounds/pig-effect.mp3', sound: 'sounds/pig-word.mp3' },
  q: { word: 'Queen',      emoji: '👸', color: '#ffe066', image: 'images/queen.png', effect: 'sounds/queen-effect.mp3', sound: 'sounds/queen-word.mp3' },
  r: { word: 'Rocket',     emoji: '🚀', color: '#5c7cfa', image: 'images/rocket.png', effect: 'sounds/rocket-effect.mp3', sound: 'sounds/rocket-word.mp3' },
  s: { word: 'Sun',        emoji: '☀️', color: '#74c0fc', image: 'images/sun.png', effect: 'sounds/sun-effect.mp3', sound: 'sounds/sun-word.mp3' },
  t: { word: 'Truck',      emoji: '🚚', color: '#ff8787', image: 'images/truck.png', effect: 'sounds/truck-effect.mp3', sound: 'sounds/truck-word.mp3' },
  u: { word: 'Umbrella',   emoji: '☂️', color: '#da77f2', image: 'images/umbrella.png', effect: 'sounds/umbrella-effect.mp3', sound: 'sounds/umbrella-word.mp3' },
  v: { word: 'Van',        emoji: '🚐', color: '#8ce99a', image: 'images/van.png', effect: 'sounds/van-effect.mp3', sound: 'sounds/van-word.mp3' },
  w: { word: 'Whale',      emoji: '🐳', color: '#4dabf7', image: 'images/whale.png', effect: 'sounds/whale-effect.mp3', sound: 'sounds/whale-word.mp3' },
  x: { word: 'Xylophone',  emoji: '🎼', color: '#ffa8a8', image: 'images/xylophone.png', effect: 'sounds/xylophone-effect.mp3', sound: 'sounds/xylophone-word.mp3' },
  y: { word: 'Yo-yo',      emoji: '🪀', color: '#ffd8a8', effect: 'sounds/yo-yo-effect.mp3', sound: 'sounds/yo-yo-word.mp3', image: 'images/yo-yo.png' },
  z: { word: 'Zebra',      emoji: '🦓', color: '#a5d8ff', effect: 'sounds/zebra-effect.mp3', sound: 'sounds/zebra-word.mp3', image: 'images/zebra.png' },

  '0': { word: 'Zero',  emoji: '0', color: '#ff922b' },
  '1': { word: 'One',   emoji: '1', color: '#51cf66' },
  '2': { word: 'Two',   emoji: '2', color: '#339af0' },
  '3': { word: 'Three', emoji: '3', color: '#cc5de8' },
  '4': { word: 'Four',  emoji: '4', color: '#fcc419' },
  '5': { word: 'Five',  emoji: '5', color: '#ff6b6b' },
  '6': { word: 'Six',   emoji: '6', color: '#20c997' },
  '7': { word: 'Seven', emoji: '7', color: '#845ef7' },
  '8': { word: 'Eight', emoji: '8', color: '#f06595' },
  '9': { word: 'Nine',  emoji: '9', color: '#22b8cf' },
};

// Shown for any other key (space, arrows, punctuation...).
window.FALLBACK_ITEMS = [
  { word: 'Star',      emoji: '⭐', color: '#4c6ef5', effect: 'sounds/star-effect.mp3', sound: 'sounds/star-word.mp3', image: 'images/star.png' },
  { word: 'Heart',     emoji: '❤️', color: '#ffc9c9', effect: 'sounds/heart-effect.mp3', sound: 'sounds/heart-word.mp3', image: 'images/heart.png' },
  { word: 'Rainbow',   emoji: '🌈', color: '#91a7ff', effect: 'sounds/rainbow-effect.mp3', sound: 'sounds/rainbow-word.mp3', image: 'images/rainbow.png' },
  { word: 'Balloon',   emoji: '🎈', color: '#96f2d7', effect: 'sounds/balloon-effect.mp3', sound: 'sounds/balloon-word.mp3', image: 'images/balloon.png' },
  { word: 'Butterfly', emoji: '🦋', color: '#ffec99', effect: 'sounds/butterfly-effect.mp3', sound: 'sounds/butterfly-word.mp3', image: 'images/butterfly.png' },
  { word: 'Flower',    emoji: '🌸', color: '#d0bfff', effect: 'sounds/flower-effect.mp3', sound: 'sounds/flower-word.mp3', image: 'images/flower.png' },
];
