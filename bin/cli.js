#!/usr/bin/env node

'use strict'

const json2lua = require('../');
const log = json2lua.log;

function convert() {
    'use strict';
    log("convert called");
    var args = process.argv.slice(2);
    log(args);
    if (args.length < 2) {
        console.log(`\nusage:\n  json2lua json_file_to_read lua_file_path_to_write`);
    } else {
        json2lua.fromFile(args[0], args[1]);
    }
}

convert();