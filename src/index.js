import { css } from 'astroturf';

const whatever = css`
  background-color: pink;
`

const div = document.createElement('div');
div.className = whatever;
div.innerText = "hello world"
document.body.appendChild(div);
