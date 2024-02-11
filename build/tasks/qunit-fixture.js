"use strict";

const fs = require( "fs" );

async function generateFixture() {
	const fixture = await fs.promises.readFile( "./test/data/qunit-fixture.html", "utf8" );
	await fs.promises.writeFile(
		"./test/data/qunit-fixture.js",
		"// Generated by build/tasks/qunit-fixture.js\n" +
		"QUnit.config.fixture = " +
			JSON.stringify( fixture.replace( /\r\n/g, "\n" ) ) +
		";\n"
	);
	console.log( "Updated ./test/data/qunit-fixture.js" );
}

generateFixture();