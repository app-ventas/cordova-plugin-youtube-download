var exec = require('cordova/exec');

exports.sendMail = function (url, success, error) {
    //exec(success, error, 'SMTPClient', 'sendMail', [arg0]);
	cordova.exec(success, error, 'YoutubeDownloadClient', 'downloadVideo', [url]);
};
