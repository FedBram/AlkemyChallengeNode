import ParsedArgs from "minimist";

const options = { default: {db_host: 'localhost'}};

export default ParsedArgs(process.argv.slice(2), options)