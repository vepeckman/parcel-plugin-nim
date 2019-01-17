# parcel-plugin-nim
Nim asset for Parcel

## Installation
`npm i --save-dev parcel-plugin-nim`

## Usage
This plugin allows [Parcel](https://parceljs.org/) to bundle [Nim](https://nim-lang.org/) programs as a web asset. To use, simply install the plugin (Parcel auto loads plugins listed in `package.json`). When Parcel detects a Nim file in the dependencies of an asset, Parcel will run the Nim compiler (which must be installed on your computer and accessible from the path). The Nim compiler will compile the file into JavaScript, which the plugin will provide back to Parcel. Parcel will then do any relevant JavaScript transformations and bundling.

Example:

`index.html`:
```html
<html>
  <body>
    <div id="root">Hello world</div>
    <script src="main.nim"></script>
  </body>
</html>
```

`main.nim`:
```nim
echo "Hello from Nim"
```

Then run `parcel index.html` or `./node_modules/.bin/parcel index.html`

## Tips
1. This plugin makes it easy for a JavaScript file to import functions from Nim, as well as allowing a Nim file to import functions from JavaScript. I also wrote [jsExport.nim](https://github.com/nepeckman/jsExport.nim), a macro which makes it easier to export functions from Nim to JavaScript.
2. It is recommended to only have one Nim entry point. Nim already bundles all generated JavaScript into a single file, so multiple Nim entry points could include multiple copies of Nim standard library functions.
3. If you run Parcel in watch mode (`parcel watch ...`), it will watch your web assets and auto refresh your browser when a change occurs. If you are running Nim off the devel branch (or using the nightly Nim compiler), Parcel will be able to watch all Nim files that your entry point depends on (as well as the entry point itself). If you are not using nightly Nim, only changes to the entry point will trigger a refresh.
4. When you run Parcel in production mode (`parcel build ...`), this plugin will add the `-d:release` flag to the nim compile command.

## Roadmap
This plugin is pretty simple, and doesn't need much functionality. There are some small improvements I'm considering, but I'm not sure what I will add. If there is functionality you need, feel free to raise an issue or submit a pull request.
