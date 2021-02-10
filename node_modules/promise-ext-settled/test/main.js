var chai = require('chai'),
	SettledExt = require('../src/index');

require('promise-ext-delay')();

chai.should();

describe('Functional', function() {
	it('should working correctly as static function and onProgress-function should be called', function(done) {
		this.timeout(2000);

		var current = new Date(),
			promises = [],
			settled = 0;

		for (var i = 0; i < 10; i++) {
			var p = Promise.delay(500);

			if (!(i % 2)) {
				p = p.then(function() {
					throw new Error();
				});
			}

			promises.push(p);
		}

		SettledExt(promises, function() {
			settled++;
		}).then(function() {
			try {
				(new Date() - current).should.be.at.least(500);
				settled.should.be.equal(promises.length);

				done();
			} catch (e) {
				done(e);
			}
		});
	});

	it('should be fulfilled with correct value', function(done) {
		var promises = [],
			rejected = 0,
			resolved = 0;

		for (var i = 1; i <= 10; i++) {
			var p = new Promise(function(resolve) {
				resolve();
			});

			if (!(i % 2)) {
				p = p.then(function() {
					throw new Error();
				});
			}

			promises.push(p);
		}

		SettledExt(promises).then(function(result) {
			result.forEach(function(data) {
				if (data.status) {
					resolved++;
				} else {
					rejected++;
				}
			});

			try {
				resolved.should.be.equal(5);
				rejected.should.be.equal(5);

				done();
			} catch (e) {
				done(e);
			}
		});
	});
});
