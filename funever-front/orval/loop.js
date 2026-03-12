const fs = require('fs');
const path = require('path');
const process = require('process');

module.exports = function loop(dir, cb) {
	fs.readdir(dir, function (err, files) {
		if (err) {
			console.error('Could not list the directory.', err);
			process.exit(1);
		}

		files.forEach(function (file) {
			var filePath = path.join(dir, file);
			fs.stat(filePath, function (error, stat) {
				if (error) {
					throw new Error('Error stating file.', error);
				}
				if (stat.isFile()) {
					if (filePath.endsWith('.d.ts')) return;
					if (
						!['.js', '.ts', '.jsx'].find((k) =>
							filePath.endsWith(k)
						)
					)
						return;
					const content = fs.readFileSync(filePath, {
						encoding: 'utf-8',
					});

					cb(filePath, content);
				} else if (stat.isDirectory()) {
					loop(filePath, cb);
				}
			});
		});
	});
};
