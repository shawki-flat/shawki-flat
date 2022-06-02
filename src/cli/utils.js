const fs = require("fs");
const { join, extname } = require("path");
const { info, usage } = require("./cli");

const paths = {
  folders: function (directory, array) {
    if (fs.statSync(directory).isDirectory()) {
      const files = fs.readdirSync(directory);
      array = array || [];
      files.forEach((file) => {
        if (fs.statSync(join(directory, file)).isDirectory())
          array = this.folders(join(directory, file), array);
        else array.push(join(directory, file));
      });

      return array;
    } else return [directory];
  },
  files: function (file, array, expression) {
    file.forEach((item) => (array = [...array, ...this.folders(item, array)]));
    array = array.filter((item) => extname(item).match(expression) !== null);
    return array;
  },
};

const help = () => {
  console.log(["Usage:", usage.input].join(" ") + "\n");
  console.log(["Description:", info.description].join(" ") + "\n");
  console.log("Options:" + "\n");

  const lengths = {
    usage: maximum(info.options, "usage"),
    description: maximum(info.options, "description"),
    value: maximum(info.options, "value"),
  };

  info.options.forEach((item) => {
    const { option, options } = info;
    const { usage, description, value } = lengths;
    const { name } = item;

    console.log(
      padding(option(options, name).usage, usage + 8),
      padding(option(options, name).description, description + 8),
      padding(option(options, name).value.default, value + 8)
    );
  });

  console.log("\n" + "CLI feels so proud because you used it");
  console.log("https://github.com/shawki-flat/shawki-flat");
  process.exit(0);
};

const maximum = (array = info.options, name) => {
  let current, previous;
  let key = name === "value";
  let value = key ? array[0][name].default : array[0][name];

  array.forEach((item, index) => {
    if (index != 0) {
      current = key ? item[name].default : item[name];
      previous = key ? array[index - 1][name].default : array[index - 1][name];
      if (String(current).length > String(previous).length)
        value = String(current).length;
    }
  });

  return value;
};

const padding = (value, length, replacement) => {
  value = String(value);
  length = Math.floor(length) || 0;
  replacement = replacement ? String(replacement) : " ";
  if (length < value.length) return String(value);

  let padding = String("");
  let condition = length - value.length;
  let index = 0;

  while (padding.length < condition) {
    if (!replacement[index]) index = 0;
    padding = padding + replacement[index];
    index = index + 1;
  }

  return value.slice(0) + padding;
};

module.exports = { paths, help, maximum, padding };
