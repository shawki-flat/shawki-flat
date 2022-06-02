const codes = {
  "no-file-found": { code: "no-file-found-00" },
  "is-not-file": { code: "is-not-file-01" },
  "multiple-files": { code: "multiple-files-02" },
  "not-found": { code: "not-found-03" },
  "file-rename": { code: "file-rename-04" },
  "default-error": { code: "default-error-05" },
};

const messages = {
  "no-file-found-00": [
    "We could not find your input/content file",
    "Provide a valid one and re-run your build/watch process",
  ],
  "is-not-file-01": [
    "You have not entered an input file for compiling",
    "Directories are not valid input for our CLI",
  ],
  "multiple-files-02": [
    "You have entered multiple input/output file",
    "Enter only one CSS input/output file to compile it",
  ],
  "not-found-03": [
    "We could not find your input/content file",
    "Provide a valid one and re-run your build/watch process",
  ],
  "file-rename-04": [
    "Your input/content file was re-named",
    "Re-running watch process after re-naming is required",
  ],
  "default-error-05": [
    "We could not build/watch your input/content file",
    "Ensure your code is correct or create an issue",
  ],
};

const constants = {
  error: {
    codes,
    messages,
  },
};

module.exports = constants;
