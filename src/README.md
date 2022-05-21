# Introduction

## Demo.

The project is developed using native web components and consist of javascript files with HTMl definitions embedded and some CSS files.

# Getting Started

This project relies on Rollup as the build tool.

Rollup will merge all javascript files into one, .js. This file will include all javascript and css. It will have all assets (images) inlined into the file allowing the file to be the only asset in need of distribution.

# Develop

In order for the Google maps API key to allow usage the local server must be called on localhost:4200

The easiest way to do that is to run a node server, for example http-server. You can install it by running:

install http-server -g

Start the server in the command line:

http-server -p 4200

This will allow access to the site at http://localhost:4200

You will also need to have Rollup running watch to serve the javascript file:

rollup -c --watch --environment NODE_ENV=dev --dir dist_delivery
