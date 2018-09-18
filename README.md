# Temple

Helper for on-the-fly search-and-copy while coding.
Like GitHub "gists" but instantly available to your clipboard -- from single lines to whole files. Context aware.

You type a lot. You repeat a lot of what you type. Stop doing that. Use Temple.

Features:
* Works anywhere -- cross-platform and IDE agnostic
* Runs on startup (optional)
* Launches with a keyboard shortcut (default: Ctrl+Alt+Shift+Space)
* Doesn't do anything yet because it's in development

Coming soon:
* Basic support for [handlebars](https://handlebarsjs.com/)
* Hooks for invoking shell scripts and other utilities
* Context-awareness (e.g. language, repo)

## Installation

Not yet released; for now, see [Development](#development) below.

## Development

Temple is written using React and built with Electron.

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

Inspired by helpers like [Kite](https://kite.com/) and [Lepton](http://hackjutsu.com/Lepton/).
None of the existing tools seem to be oriented towards on-the-fly search-and-copy while coding.
