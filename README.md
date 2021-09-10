<img src="./images/rodneylab-github-svelte-social-icons.png" alt="Rodney Lab svelte-social-icons Github banner">

<p align="center">
  <a aria-label="Open Rodney Lab site" href="https://rodneylab.com" rel="nofollow noopener noreferrer">
    <img alt="Rodney Lab logo" src="https://rodneylab.com/assets/icon.png" width="60" />
  </a>
</p>
<h1 align="center">
  Svelte Social Icons
</h1>

# svelte-social-icons

[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/rodneylab/svelte-social-icons)


Social icons for Svelte. Based on <a aria-label="Open react-social-icons repo on Git Hub" href="https://github.com/jaketrent/react-social-icons">react-social-icons</a> by Jake Trent.

To install:

```
pnpm install @rodneylab/svelte-social-icons
```

Alternatively, replace `pnpm` with `npm` or run `yarn add @rodneylab/svelte-social-icons`.

To use:

```
<script>
	import SocialIcons from '@rodneylab/svelte-social-icons';
</script>

<SocialIcons network="github" />
<SocialIcons network="twitter" />
```

![Svelte Social Icons - icons shown for 47 popular social networks in native colours](./images/svelte-social-icons-regular.png)



- Change icon size

```html
<SocialIcons network="github" width="24" height="24" />
```

![Svelte Social Icons - icons shown for 47 popular social networks in native colours, icons are smaller than previous image](./images/svelte-social-icons-small.png)

- Change foreground and background colours

```html
<SocialIcons network="github" fgColor="#eeeeee" bgColor="#111111" />
```

![Svelte Social Icons - icons shown for 47 popular social networks with themed dark background and light foreground colours](./images/svelte-social-icons-background.png)

![Svelte Social Icons - icons shown for 47 popular social networks with themed light background and dark foreground colous](./images/svelte-social-icons-foreground.png)

![Svelte Social Icons - icons shown for 47 popular social networks in rainbow colours each icon has background set to one of the six rainbow colours and colours alternate in sequence](./images/svelte-social-icons-rainbow.png)