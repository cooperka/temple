# Temple

Helper for snippets and templates. Designed for on-the-fly search-and-copy while coding.

Features:
* Cross-platform using Electron and React
* IDE agnostic
* Doesn't do anything yet because it's in development

## Development

See the [Electron Forge docs](https://electronforge.io/cli/install) for more info on the below commands.

### Get started

Download this codebase, build, and launch the app:

```bash
yarn global add electron-forge
electron-forge install cooperka/temple
```

It's built with React and will hot-reload when editing files.

### Release

Generate a platform-specific Electron application, e.g. for Ubuntu:

```bash
yarn run make --targets=deb
```

Run the newly packaged app, e.g. on Ubuntu:

```bash
./out/temple-linux-x64/temple
```

## Credits

Inspired by helpers like [Kite](https://kite.com/) and [Lepton](http://hackjutsu.com/Lepton/). None of the existing tools seem to be oriented towards on-the-fly search-and-copy while coding.
