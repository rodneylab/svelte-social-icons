<script lang="ts">
  import networks from './_networks-db';

  /**
   * @type { 'bandsintown' | 'behance' | 'codepen' | 'discord' | 'dribbble' | 'dropbox' | 'email' | 'facebook' | 'foursquare' | 'github' | 'google' | 'google_play' | 'instagram' | 'itch.io' | 'itunes' | 'linkedin' | 'mailto' | 'medium' | 'meetup' | 'pinterest' | 'rdio' | 'reddit' | 'rss' | 'sharethis' | 'smugmug' | 'snapchat' | 'soundcloud' | 'spotify' | 'squarespace' | 'stackoverflow' | 'telegram' | 'tiktok' | 'tumblr' | 'twitch' | 'twitter' | 'upwork' | 'vevo' | 'vimeo' | 'vine' | 'vk' | 'vsco' | 'wechat' | 'whatsapp' | 'yelp' | 'youtube'}
   */
  export let network;

  const { color, icon, mask } = networks[network];

  // export let alt :string = `${network} logo`;

  /**
   * @type { string }
   */
  export let bgColor = color;

  export let fgColor = 'transparent';
  export let height = 48;
  export let width = 48;
  export let style = '';

  const socialIconStyle = `display: inline-block; position: relative; overflow: hidden; ${style}`;
  const socialContainerStyle = 'position: absolute; inset: 0; width: 100%; height: 100%;';
  const socialSvgStyle =
    'border-radius: 50%; position: absolute; inset: 0; width: 100%; height: 100%; fill-rule: evenodd;';
  const socialSvgMaskStyle =
    "@media (prefers-reduced-motion: no-preference) { --ms-transition: 'fill 170ms ease-in-out'; -o-transition: 'fill 170ms ease-in-out'; --moz-transition: 'fill 170ms ease-in-out'; --webkit-transition: 'fill 170ms ease-in-out'; transition: 'fill 170ms ease-in-out';}";
  const socialSvgBackgroundStyle = `${socialSvgMaskStyle} fill: transparent;`;
</script>

<span
  style:width={`${width}px`}
  style:height={`${height}px`}
  class="social-icon"
  style={socialIconStyle}
>
  <div class="social-container" style={socialContainerStyle}>
    <svg class="social-svg" viewBox="0 0 64 64" style={socialSvgStyle}>
      <g class="social-svg-background" style={socialSvgBackgroundStyle}
        ><circle cx="32" cy="32" r="31" /></g
      >
      <g class="social-svg-icon" fill={fgColor}>
        <path d={icon} />
      </g>
      <g class="social-svg-mask" fill={bgColor} style={socialSvgMaskStyle}><path d={mask} /></g>
    </svg>
  </div>
</span>
