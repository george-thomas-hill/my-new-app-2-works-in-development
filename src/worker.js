// const chokidar = window.require("chokidar");
const chokidar = window.require("chokidar");

chokidar.watch('.').on('all', (event, path) => {
    console.log(event, path);
});
