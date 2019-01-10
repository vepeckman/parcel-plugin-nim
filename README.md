# parcel-plugin-nim
Nim asset for Parcel

## Usage
This plugin allows Parcel to bundle Nim programs as a web asset. To use, install with `npm i -D parcel-plugin-nim`, and Parcel will automatically load the plugin. When Parcel detects a Nim file in the dependencies of an asset, Parcel will run the Nim compiler (which must be installed on your computer and accessible from the path). The Nim compiler will compile the file into JavaScript, which the plugin will provide back to Parcel. Parcel will then do any relevant JavaScript transformations and bundling.

## Tips
This plugin makes it easy for a JavaScript file to import functions from Nim, as well as allowing a Nim file to import functions from JavaScript. Checkout [jsExport.nim](https://github.com/nepeckman/jsExport.nim), a macro which makes it easier to export functions from Nim to JavaScript. It is recommended to only have one Nim entry point. Nim already bundles all generated JavaScript into a single file, so multiple Nim entry points could include multiple copies of Nim standard library functions.

## Roadmap
This plugin is pretty simple, and doesn't need much functionality. The most important missing piece of functionality is to enable a release build in production environments.
