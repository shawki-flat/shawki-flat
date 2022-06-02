#! /usr/bin/env node

const fs = require("fs");
const { relative, dirname, join } = require("path");
const { program } = require("commander");
const { info, version, usage } = require("./cli");
const { build: builder, watch: watcher } = require("./actions");
const { paths, help: helper } = require("./utils");
const constants = require("./constants");

program
  .name(info.name)
  .version(version.current, version.usage, version.description)
  .description(info.description)
  .usage(usage.input);

info.options.forEach((option) => {
  const { include, usage, description, value } = option;
  if (include) program.option(usage, description, value.default);
});

program.parse(process.argv);
let { input, content, output, purge, watch, help } = program.opts();
let html = [];
let css = [];

try {
  const expression = /^[\w+\/]+$/;
  input = input.split(" ");
  content = content.split(" ");
  output = output.split(" ");
  if (help) helper();

  if (input.length != 1 || output.length != 1) {
    const error = new Error("");
    error.local = constants.error.codes["multiple-files"];
    throw error;
  } else {
    input = input[0];
    output = output[0];
  }

  if (expression.test(input)) {
    const error = new Error("");
    error.local = constants.error.codes["is-not-file"];
    throw error;
  }

  if (!fs.existsSync(input)) {
    const error = new Error("");
    error.local = constants.error.codes["not-found"];
    throw error;
  }

  if (expression.test(output)) output = join(output, "index.css");
  fs.mkdirSync(dirname(output), { recursive: true });
  fs.writeFileSync(output, "");

  if (purge !== "false") {
    if (!content.every((element) => fs.existsSync(element))) {
      const error = new Error("");
      error.local = constants.error.codes["not-found"];
      throw error;
    }

    html = paths.files(content, html, purge);
    css = paths.files(content, css, "(.css|.scss|.sass)");
    css = css.filter((item) => relative(item, output) !== "");
  }

  if (purge === "false") {
    content = [];
    html = [];
    css = [];
  }

  const files = [input, ...html, ...css];
  if (watch) watcher(files, input, html, css, output, purge);
  else builder(input, html, css, output, purge);
} catch (error) {
  let code;
  if (error.local) code = error.local.code;
  else code = "default-error-05";
  const message = constants.error.messages[code].join("\n");
  console.log(message);
  process.exit(1);
}
