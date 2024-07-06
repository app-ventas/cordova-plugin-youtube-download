var exec = require('cordova/exec');

exports.downloadVideo = function (url, success, error) {
	cordova.exec(success, error, 'YoutubeDownloadClient', 'downloadVideo', [url]);
};
