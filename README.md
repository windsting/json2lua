# json2lua

A command-line utlity to convert JSON to LUA, meaning from a `.json` file to a `.lua` file.

## installation

    > sudo npm install -g json2lua

**Note:** To use both `npm` and `json2lua`, you must have [NodeJS](https://nodejs.org/en/) installed on the machine.

## usage

Specify a `.json` to read and a `.lua` file name for output.

    > json2lua test.json test.lua

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

**Note:** Sorry for the readability of output `.lua` file, for most case, it should be read by machine, I asssume that machine don't complain.
