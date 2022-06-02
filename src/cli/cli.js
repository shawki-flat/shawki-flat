const fs = require("fs");
const path = require("path");
const file = require("../../package.json");

const options = [
  {
    name: "version",
    usage: "-v, --version",
    description: "Introduce the current version of the package",
    value: { default: false },
    include: false,
  },
  {
    name: "input",
    usage: "-i, --input <file>",
    description: "Define the path of the CSS input file",
    value: { default: "src/sass/index.scss" },
    example: "shawki-flat --input src/sass/index.scss",
    include: true,
  },
  {
    name: "output",
    usage: "-o, --output <file>",
    description: "Define the path of the CSS output file",
    value: { default: "dist/css/index.css" },
    example: "shawki-flat --output dist/css/index.css",
    include: true,
  },
  {
    name: "content",
    usage: "-c, --content <file|directory>",
    description: "Define the path of the content file/directory",
    value: { default: "src/pages/index.html" },
    example: "shawki-flat --content src/pages/index.html",
    include: true,
  },
  {
    name: "purge",
    usage: "-p, --purge <extensions>",
    description: "Define the template of your content files",
    value: { default: "(.js|.jsx|.ts|.tsx)" },
    example: "shawki-flat --purge (.js|.jsx|.ts|.tsx)",
    include: true,
  },
  {
    name: "watch",
    usage: "-w, --watch",
    description: "Watch the input and content files while compiling them",
    value: { default: false },
    include: true,
  },
  {
    name: "help",
    usage: "-h, --help",
    description: "Introduce the package information and options",
    value: { default: false },
    include: true,
  },
];

const info = {
  name: file.name,
  version: file.version,
  description: file.description,
  options: options,
  option: (array = this.options, name) =>
    array.find((option) => option.name === name),
};

const version = {
  current: file.version,
  usage: info.option(info.options, "version").usage,
  description: info.option(info.options, "version").description,
};

const usage = {
  input: info.option(info.options, "input").example,
  content: info.option(info.options, "content").example,
  output: info.option(info.options, "output").example,
  purge: info.option(info.options, "purge").example,
};

module.exports = { file, info, version, usage };
