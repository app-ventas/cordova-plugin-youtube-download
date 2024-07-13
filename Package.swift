// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorPluginYoutubeDownload",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "CapacitorPluginYoutubeDownload",
            targets: ["YoutubeDownloadPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "YoutubeDownloadPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/YoutubeDownloadPlugin"),
        .testTarget(
            name: "YoutubeDownloadPluginTests",
            dependencies: ["YoutubeDownloadPlugin"],
            path: "ios/Tests/YoutubeDownloadPluginTests")
    ]
)