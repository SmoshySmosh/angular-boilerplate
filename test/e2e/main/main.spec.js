var mainPage = require('./main');
var screenshot = require('../../config/screenshot');

describe('Main Page', function () {
    var page = new mainPage();

    beforeEach(function () {
        page.get();
    });

    afterEach(function () {
        // var currentSpec = jasmine.getEnv().currentSpec;
        // console.log(jasmine);
        // var passed = currentSpec.results().passed();
        // if (!passed) {
        //     screenshot.takeScreenshotOnFailure(currentSpec);
        // };
    });

    describe('Basics: ', function () {
        it('Should display the correct page title', function () {
            expect(browser.getTitle()).toBe('ngBoilerplate');
        });
    });
});
