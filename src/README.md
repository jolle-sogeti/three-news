# Introduction

## Demo.

This site is all about experimenting and presenting demo cases about new features in a web browser. Features that are ready to use.

It is probably under constant development and likely, for the most part, not stable.

Site and code is maintained by [Jolle Carlestam](jolle.carlestam@sogeti.se) on his free time from all the fun work he does at [Vattenfall](https://vattenfall.se).

The project is developed using native web components and consist of javascript files with HTMl definitions embedded and some CSS files.

# Getting Started

This project relies on Rollup as the build tool.

Rollup will merge all javascript files into one, .js. This file will include all javascript and css. It will have all assets (images) inlined into the file allowing the file to be the only asset in need of distribution.
Run `npm install` and rollup should be installed for you.

# Develop

In order for the File System Access API examples to work the site must be used in a secure context (https).
While developing the easiest way to do that it to use a self signed certificate on your local machine.
Search the internet if you don't know how to do that.

You will also need to have Rollup running watch to serve the javascript file:

rollup -c --watch --environment NODE_ENV=dev --dir dist_delivery
