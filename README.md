# json2lua

A cli utility AND package to convert JSON to LUA, meaning from a `.json` file to a `.lua` file.

![demo-gif](https://github.com/windsting/json2lua/raw/master/asset/json2lua-demo.gif)

## installation

    > npm install -g json2lua

**Note:** To use both `npm` and `json2lua`, you must have [NodeJS](https://nodejs.org/en/) installed on the machine.

## usage

1. **as cli command**

    Specify a `.json` to read and a `.lua` file name for output.

        > json2lua test.json test.lua

1. **as package**

    Install it in your project folder:

        > npm install json2lua

    then **require** it in source code and use it:

        const json2lua = require('json2lua'),
            jsonStr = `{"id":1,"name":"dog","price":200}`;

        //output is:
        //{["id"] = 1,["name"] = "dog",["price"] = 200}
        console.log(json2lua.fromString(jsonStr));

    The [testing file](./test/test.js) showed usages for all 3 valid method, and the parameter `dstFileName` is optional, omit it if you do not need an output file.

## Example

From input file **test.json**:

```json
[
  {
    "id": 1,
    "name": "dot",
    "desc": "typo for dog",
    "price": 3000,
    "passwordServerOnly": "ddd",
    "skinClientOnly": "dot-123.jpg"
  },
  {
    "id": 9,
    "name": "milk",
    "desc": "feed with this",
    "price": 42,
    "passwordServerOnly": "mkkk",
    "skinClientOnly": "white.bmp"
  }
]
```

Got result file **test.lua**:

```lua
{{["id"] = 1,["name"] = "dot",["desc"] = "typo for dog",["price"] = 3000,["passwordServerOnly"] = "ddd",["skinClientOnly"] = "dot-123.jpg"},{["id"] = 9,["name"] = "milk",["desc"] = "feed with this",["price"] = 42,["passwordServerOnly"] = "mkkk",["skinClientOnly"] = "white.bmp"}}
```

**Note:** Sorry for the readability of output .lua file, for most cases, it should be read by machine, I assume that machine doesn't complain.
