import { useEffect } from "react";
import { useSnapshot } from "valtio";
import state from '../utils/state';

export default function Cursor({ hovered }) {
  const snap = useSnapshot(state);

  useEffect(() => {
    const cursorSVG = `
      <svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
          <path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/>
          <g filter="url(#filter0_d)">
            <path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/>
          </g>
          <path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/>
          <text fill="#ffffff" style="white-space:pre" font-family="Inter var, sans-serif" font-size="20" font-weight="bolder" letter-spacing="-.01em">
            <tspan x="35" y="100">${hovered}</tspan>
          </text>
        </g>
        <defs>
          <clipPath id="clip0">
            <path fill="#fff" d="M0 0h64v64H0z"/>
          </clipPath>
          <filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="3"/>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
        </defs>
      </svg>
    `;

    const autoCursorSVG = `
      <svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/>
        <path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/>
      </svg>
    `;

    if (hovered) {
      document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(cursorSVG)}'), auto`;
      return () => (document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(autoCursorSVG)}'), auto`);
    }
  }, [hovered, snap.items]);

  return null; // This component does not render anything itself
}