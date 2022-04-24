import { Soda } from "@dorkodu/soda";

//? default blockquote icon
let defaultIcon = (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 15h15" />
  <path d="M21 19h-15" />
  <path d="M15 11h6" />
  <path d="M21 7h-6" />
  <path d="M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
  <path d="M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
</svg>);

export function Blockquote({ message, owner, icon }) {
  return (
  <blockquote class="quote">
    {icon ?? defaultIcon}
    <p>{message}</p>
    <p class="owner">{"— " + owner}</p>
  </blockquote>
  );
}