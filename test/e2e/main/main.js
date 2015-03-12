// A Sample Definition for getting information from the main page (Main Module)
function mainPage () {
    this.get = function () {
        browser.get('/');
    };
}

module.exports = mainPage;
