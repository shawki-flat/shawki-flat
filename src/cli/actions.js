const fs = require("fs");
const sass = require("sass");
const postcss = require("postcss");
const importing = require("postcss-import");
const nesting = require("postcss-nested");
const duplicating = require("postcss-discard-duplicates");
const commenting = require("postcss-discard-comments");
const purging = require("@fullhuman/postcss-purgecss");
const prettier = require("prettier");
const constants = require("./constants");

const create = (output, { css, map }) => {
  css = prettier.format(css, { parser: "css" });
  map = map ? prettier.format(map, { parser: "css" }) : false;
  fs.writeFileSync(output, css);
  if (map) fs.writeFileSync(output, map.toString());
};

const build = (input, html, css, output, purge) => {
  const start = Date.now();
  const plugins = [importing, nesting, duplicating, commenting];
  const compiled = sass.compile(input).css;

  postcss(
    purge !== "false"
      ? [
          ...plugins,
          purging({
            content: [...html],
            css: [...css],
            variables: true,
          }),
        ]
      : [...plugins]
  )
    .process(compiled, { from: input, to: output })
    .then((result) => create(output, { css: result.css }));

  const end = Date.now();
  const performance = [end - start, "ms"].join(" ");
  console.log(["Compiling ... Done in", performance].join(" "));
};

const watch = (files, input, html, css, output, purge) => {
  let fsTimeout;
  build(input, html, css, output, purge);
  files.forEach((current) => {
    fs.watch(current, { recursive: true }, (event, file) => {
      try {
        if (event === "rename") {
          const error = new Error("");
          error.local = constants.error.codes["file-rename"];
          throw error;
        }

        if (!fsTimeout) {
          console.log("Modified", file);
          build(input, html, css, output, purge);
          fsTimeout = setTimeout(() => (fsTimeout = null), 5000);
        }
      } catch (error) {
        let code;
        if (error.local) code = error.local.code;
        else code = "default-error-05";
        const message = constants.error.messages[code].join("\n");
        console.log(message);
        process.exit(1);
      }
    });
  });
};

module.exports = { create, build, watch };
