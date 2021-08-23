Social icons for Svelte.  Based on <a aria-label="Open react-social-icons repo on Git Hub" href="https://github.com/jaketrent/react-social-icons">react-social-icons</a> by Jake Trent.

To install run

```
pnpm install @rodneylab/svelte-social-icons
```


To use:

```
<script>
	import SocialIcons from '@rodneylab/svelte-social-icons';
</script>

<SocialIcons network="github" />
<SocialIcons network="twitter" />


<SocialIcons network="github" width="24" height="24" />
<SocialIcons network="twitter" fgColor="#111" bgColor="#eee" />
```