'use strict'

const assert = require('chai').assert,
    fs = require('fs'),
    json2lua = require('..');


describe('fromObject', function () {
    const jsonObj = {
        data: [{
                "id": 1,
                "name": "dog",
                "price": 200
            },
            {
                "id": 42,
                "name": "milk",
                "price": 6
            }
        ],
        source: "json object"
    };

    const dstFileName = 'fromObject.lua',
        expectedResult = '{["data"] = {{["id"] = 1,["name"] = "dog",["price"] = 200},{["id"] = 42,["name"] = "milk",["price"] = 6}},["source"] = "json object"}',
        expectedBuffer = Buffer.from(expectedResult, 'utf8'),
        result = json2lua.fromObject(jsonObj, dstFileName);

    it('should convert to expacted string.', function () {
        assert.strictEqual(result, expectedResult);
    });

    it('should generate a file content equal to expacted buffer', function () {
        var fileResult = fs.readFileSync(dstFileName);
        assert.isTrue(fileResult.equals(expectedBuffer));
        fs.unlinkSync(dstFileName);
    });

});

describe('fromString', function () {
    const dstFileName = 'fromString.lua',
        jsonStr = `{"data":[{"id":1,"name":"dog","price":200},{"id":42,"name":"milk","price":6}],"source":"json string"}`,
        expectedResult = '{["data"] = {{["id"] = 1,["name"] = "dog",["price"] = 200},{["id"] = 42,["name"] = "milk",["price"] = 6}},["source"] = "json string"}',
        expectedBuffer = Buffer.from(expectedResult, 'utf8'),
        result = json2lua.fromString(jsonStr, dstFileName);

    it('should convert to expacted string.', function () {
        assert.strictEqual(result, expectedResult);
    });

    it('should generate a file content equal to expacted buffer', function () {
        var fileResult = fs.readFileSync(dstFileName);
        assert.isTrue(fileResult.equals(expectedBuffer));
        fs.unlinkSync(dstFileName);
    });

});

describe('fromFile', function () {
    const srcFileName = './asset/test.json',
        dstFileName = 'fromFile.lua',
        expectedResult = '{["data"] = {{["id"] = 1,["name"] = "dog",["price"] = 200},{["id"] = 42,["name"] = "milk",["price"] = 6}},["source"] = "json file"}',
        expectedBuffer = Buffer.from(expectedResult, 'utf8'),
        result = json2lua.fromFile(srcFileName, dstFileName);

    it('should convert to expacted string.', function () {
        assert.strictEqual(result, expectedResult);
    });

    it('should generate a file content equal to expacted buffer', function () {
        var fileResult = fs.readFileSync(dstFileName);
        assert.isTrue(fileResult.equals(expectedBuffer));
        fs.unlinkSync(dstFileName);
    });
});