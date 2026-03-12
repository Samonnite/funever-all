const loop = require('./loop.js');
const path = require('path');
const fs = require('fs');

function insert(path) {
	const data = fs.readFileSync(path);
	if (data.toString().startsWith(`/* eslint-disable */`)) return;
	const fd = fs.openSync(path, 'w+');
	const insert = Buffer.from('/* eslint-disable */ \n' + '// @ts-nocheck \n');
	fs.writeSync(fd, insert, 0, insert.length, 0);
	fs.writeSync(fd, data, 0, data.length, insert.length);
	fs.close(fd, (err) => {
		if (err) throw err;
	});
}
loop(path.resolve(__dirname, '../src/api'), (path, content) => {
	insert(path);
});
