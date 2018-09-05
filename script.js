(function () {
    chrome.extension.sendRequest({
        autofill: 'off'
    }, function () {
        setTimeout(function () {
            var inputnodes = document.getElementsByTagName('input');
            console.log('Chrome-Extension: disabled autofill');
            for (var i = 0; i < inputnodes.length; i++) {
                inputnodes[i].setAttribute('autocomplete', 'off');

            }
            var formnodes = document.getElementsByTagName("form");
            for (var i = 0; i < formnodes.length; i++) {
                formnodes[i].setAttribute('autocomplete', 'off');
            }
        }, 2000); // because SPAs
    });
})();