/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface SocialIconsProps {
  /**
   * @default undefined
   */
  network:
    | "bandsintown"
    | "behance"
    | "codepen"
    | "discord"
    | "dribbble"
    | "dropbox"
    | "email"
    | "facebook"
    | "foursquare"
    | "github"
    | "google"
    | "google_play"
    | "instagram"
    | "itch.io"
    | "itunes"
    | "linkedin"
    | "mailto"
    | "medium"
    | "meetup"
    | "pinterest"
    | "rdio"
    | "reddit"
    | "rss"
    | "sharethis"
    | "smugmug"
    | "snapchat"
    | "soundcloud"
    | "spotify"
    | "squarespace"
    | "stackoverflow"
    | "telegram"
    | "tiktok"
    | "tumblr"
    | "twitch"
    | "twitter"
    | "upwork"
    | "vevo"
    | "vimeo"
    | "vine"
    | "vk"
    | "vsco"
    | "wechat"
    | "whatsapp"
    | "yelp"
    | "youtube";

  /**
   * @default undefined
   */
  bgColor?: string;

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
