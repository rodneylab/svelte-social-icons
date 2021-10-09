/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SocialIconsProps {
  network?: undefined;

  bgColor?: undefined;

  /**
   * @default 'transparent'
   */
  fgColor?: string;

  /**
   * @default 48
   */
  height?: number;

  /**
   * @default 48
   */
  width?: number;

  /**
   * @default ''
   */
  style?: string;
}

export default class SocialIcons extends SvelteComponentTyped<
  SocialIconsProps,
  {},
  {}
> {}
