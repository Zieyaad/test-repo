# IMPORTANT INFORMATION


## INSTALLATION

In root folder, run the command `npm install` to install all dependencies.
My current versions are:
1. node: 			v10.13.0
2. npm: 			5.7.1
3. gulp CLI version: 	2.2.0
4. gulp Local version: 4.0.2


## Processes

1. `gulp compile_css`
Compiles all SCSS files from build/scss to dist/css and minifies it

2. `gulp compile_js`
Compiles all JS files from build/js to dist/js. Does not minify as I had issues minifying Vue

3. `gulp compile_html`
Compiles all HTML and partial files from build/html/ to dist/static

4. `gulp sass_lint`
Run your SCSS through a lint tool to help you point out problems

5. `gulp watch` 
Watches all HTML, SCSS and JS files in solution. If successful, performs a live reload of the active page on all browsers that have the page open. The tasks `compile_css`, `compile_js` and `compile_html` are run when changes made to the specific build folders occur.


## Information

1. The build folder contains all the HTML, SCSS and JS files.

2. The dist folder contains the compiled HTML, CSS, JS and Images used.

3. CSS follows the Atomic methodology, more of it can be read here: https://bradfrost.com/blog/post/atomic-web-design/.

4. Running `gulp watch` will open your local webserver. Alternatively you can open the index.html file directly located in dist/static.