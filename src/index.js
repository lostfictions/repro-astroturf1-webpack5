import { css } from 'astroturf';

const dashAnim = css`
  stroke-dasharray: 5;
  animation: dashdraw 0.5s linear infinite;
  @keyframes dashdraw {
    from {
      stroke-dashoffset: 10;
    }
  }
`;

const noTouch = css`
  touch-action: none;
`;

const blob = css`
  filter: url("#blob");
`;

const svg = document.createElement('svg');
svg.className = `${noTouch} ${blob}`;
svg.setAttribute('viewBox', `0 0 500 500`);
svg.setAttribute('width', 500);
svg.setAttribute('height', 500);
document.body.appendChild(svg);

const path = document.createElement('path');
path.setAttribute('d', `M 150 70 L 300 300`);
path.setAttribute('stroke-dasharray', 5);
path.setAttribute('stroke-width', 5);
path.setAttribute('stroke', "black");
path.className = dashAnim;
svg.appendChild(path)
