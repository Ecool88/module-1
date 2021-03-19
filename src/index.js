import {sum} from './modules/sum';

const root = document.querySelector('#root');
root.textContent = sum(63, -13).toString();
console.log('test console')
