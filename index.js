#!/usr/bin/env node

var _ = require('lodash')
var fs = require("fs");


function log(content) {
    return;
    console.log(content)
}

function toLua(obj) {
    'use strict';
    if (obj === null || obj === undefined) {
        return "nil";
    }
    if (!_.isObject(obj)) {
        if (typeof obj === 'string') {
            return '"' + obj + '"';
        }
        return obj.toString();
    }
    var result = "{";
    var isArray = obj instanceof Array;
    var len = _.size(obj);
    var i = 0;
    _.forEach(obj, function(v, k) {
        if (isArray) {
            result += toLua(v);
        } else {
            result += '["' + k + '"] = ' + toLua(v);
        }
        if (i < len - 1) {
            result += ",";
        }
        ++i;
    });
    result += "}";
    return result;
}

function loadJson(filePath) {
    'use strict';
    var content = fs.readFileSync(filePath);
    var obj = JSON.parse(content);
    log(obj);
    return obj;
}

function writeText(filePath, text) {
    log(text);
    fs.writeFileSync(filePath, text);
}

function convert(jsonPath, luaPath) {
    var obj = loadJson(jsonPath);
    var lua = toLua(obj);
    writeText(luaPath, lua);
}

var args = process.argv.slice(2);
log(args);
if (args.length < 2) {
    console.log('usage: json2lua json_file_to_read lua_file_path_to_write');
    return;
}

convert(args[0], args[1]);