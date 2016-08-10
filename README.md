# js13k-toolkit
A simple little tool for developing a JS game while keeping it under 13kb zipped

Run `gulp init` to create a simple folder structure.

Run `gulp watch --silent` (silent optional) to have gulp continuously build your project and check it's compressed zip file size. A warning will be printed if you exceed 13312 bytes (13kb) to ensure you're under the limit for the js13kgames competition.

Feel free to edit the gulpfile to suit your specific needs.