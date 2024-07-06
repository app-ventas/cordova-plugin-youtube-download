package com.cordova.youtube;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import android.os.Environment;
import android.util.Log;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class YoutubeDownloadClient extends CordovaPlugin {
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("downloadVideo")) {
            String videoUrl = args.getString(0);
            this.downloadVideo(videoUrl, callbackContext);
            return true;
        }
        return false;
    }

    private void downloadVideo(String videoUrl, CallbackContext callbackContext) {
        try {
            URL url = new URL(videoUrl);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");
            connection.connect();

            String filePath = Environment.getExternalStorageDirectory().getPath() + "/Download/video.mp4";
            File file = new File(filePath);
            FileOutputStream fileOutput = new FileOutputStream(file);
            InputStream inputStream = connection.getInputStream();

            byte[] buffer = new byte[1024];
            int bufferLength = 0;

            while ((bufferLength = inputStream.read(buffer)) > 0) {
                fileOutput.write(buffer, 0, bufferLength);
            }
            fileOutput.close();
            callbackContext.success("Video downloaded successfully to " + filePath);
        } catch (Exception e) {
            callbackContext.error("Failed to download video: " + e.getMessage());
        }
    }
}
