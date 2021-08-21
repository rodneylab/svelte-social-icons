<script>
  import networks from './_networks-db';

  export let network;

  const { color, icon, mask } = networks[network];

  export let bgColor = color;
  export let fgColor = 'transparent';
  export let height = 48;
  export let width = 48;
</script>

<span class="social-icon" style={`width: ${width}px; height: ${height}px;`}>
  <div class="social-container">
    <svg class="social-svg" viewBox="0 0 64 64">
      <g class="social-svg-background"><circle cx="32" cy="32" r="31" /></g>
      <g class="social-svg-icon" fill={fgColor}>
        <path d={icon} />
      </g>
      <g class="social-svg-mask" fill={bgColor}><path d={mask} /></g>
    </svg>
  </div>
</span>

<style>
  .social-icon {
    display: inline-block;
    position: relative;
    overflow: hidden;
    vertical-align: middle;
  }

  .social-container {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .social-svg {
    border-radius: 50%;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    fill-rule: evenodd;
  }

  @media (prefers-reduced-motion: no-preference) {
    .social-svg-background,
    .social-svg-mask {
      --ms-transition: 'fill 170ms ease-in-out';
      -o-transition: 'fill 170ms ease-in-out';
      --moz-transition: 'fill 170ms ease-in-out';
      --webkit-transition: 'fill 170ms ease-in-out';
      transition: 'fill 170ms ease-in-out';
    }
  }

  .social-svg-background {
    fill: transparent;
  }
</style>
