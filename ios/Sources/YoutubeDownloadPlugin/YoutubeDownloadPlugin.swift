import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(YoutubeDownloadPlugin)
public class YoutubeDownloadPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "YoutubeDownloadPlugin"
    public let jsName = "YoutubeDownload"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "echo", returnType: CAPPluginReturnPromise)
    ]
    private let implementation = YoutubeDownload()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }

    @objc func openMap(_ call: CAPPluginCall) {
        let latitude = call.getString("latitude")
        let longitude = call.getNumber("longitude")

        // more logic

        call.resolve()
    }
}
