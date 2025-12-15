# Card Web Component Example

This repo includes the Card Web Component that was created ahead of the Sitecore XMC demo. 

## Installation

In order to use this Web Component, there are 2 options to add this to a project:

1. There is a wc-sitecore-demo-1.0.0.tgz file included in this repository. Run `npm install [locate this repo locally]/wc-sitecore-demo-1.0.0.tgz` inside your project (with this repo downloaded), then import the Javascript file (`import "wc-sitecore-demo/dist/card.js"`) in the file you wish to use it.

or

2. Copy the `card.js` file from inside the Dist folder in this repository into your project and import it in the file you wish to use it.

Also for both installations, please include the following CSS line in the main css file being used for this demo: `@import "wc-sitecore-demo/dist/index.css"`. This is to avoid any clashes with the current Design System during this demo.

In this repository there is an example of this Web Component being used in Vanilla HTML/CSS. Just simply open the index.html file locally on your machine to view the example. Also, we have created an example React environment which uses this Card Web Component. Please see [here](https://github.com/MShelley-Vit/wc-react-demo) for an example.

## Usage
Within the card.js file in the dist folder, there are also some notes around attributes/slots that can be used with this component.