var storage = {
    removeStorage: function (key) {
        window.localStorage.removeItem(key);
    },
    saveStorage: function (key, value, isJson) {
        try {
            window.localStorage.setItem(key, isJson ? JSON.stringify(value) : value);
        } catch (e) {
            console.error(e);
        }
    },
    getStorage: function (key) {
        return window.localStorage.getItem(key);
    },
    isSupportStorage: function () {
        if (!window.localStorage) {
            return false;
        }
        try {
            window.localStorage.setItem("JUTILS_STOARGE_TEST", true);
            window.localStorage.removeItem("JUTILS_STOARGE_TEST");
            return true;
        } catch (e) {
            return false;
        }
    }
}
module.exports = storage;
