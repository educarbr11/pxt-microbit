(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/pxt-microbit/",
    "verprefix": "",
    "workerjs": "/pxt-microbit/worker.js",
    "monacoworkerjs": "/pxt-microbit/monacoworker.js",
    "gifworkerjs": "/pxt-microbit/gifjs/gif.worker.js",
    "serviceworkerjs": "/pxt-microbit/serviceworker.js",
    "typeScriptWorkerJs": "/pxt-microbit/tsworker.js",
    "pxtVersion": "11.2.9",
    "pxtRelId": "localDirRelId",
    "pxtCdnUrl": "/pxt-microbit/",
    "commitCdnUrl": "/pxt-microbit/",
    "blobCdnUrl": "/pxt-microbit/",
    "cdnUrl": "/pxt-microbit/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "microbit",
    "simUrl": "/pxt-microbit/simulator.html",
    "simserviceworkerUrl": "/pxt-microbit/simulatorserviceworker.js",
    "simworkerconfigUrl": "/pxt-microbit/workerConfig.js",
    "partsUrl": "/pxt-microbit/siminstructions.html",
    "runUrl": "/pxt-microbit/run.html",
    "docsUrl": "/pxt-microbit/docs.html",
    "multiUrl": "/pxt-microbit/multi.html",
    "asseteditorUrl": "/pxt-microbit/asseteditor.html",
    "isStatic": true,
    "kioskUrl": "/pxt-microbit/kiosk.html",
    "teachertoolUrl": "/pxt-microbit/teachertool.html",
    "tutorialtoolUrl": "/pxt-microbit/tutorialtool.html",
    "skillmapUrl": "/pxt-microbit/skillmap.html",
    "multiplayerUrl": "/pxt-microbit/multiplayer.html",
    "authcodeUrl": "/pxt-microbit/authcode.html"
};

    var scripts = [
        "/pxt-microbit/highlight.js/highlight.pack.js",
        "/pxt-microbit/marked/marked.min.js",
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/pxt-microbit/jquery.js")
    if (typeof jQuery == "undefined" || !jQuery.prototype.sidebar)
        scripts.push("/pxt-microbit/semantic.js")
    if (!window.pxtTargetBundle)
        scripts.push("/pxt-microbit/target.js");
    scripts.push("/pxt-microbit/pxtembed.js");

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.setInitCallbacks(pxtCallbacks)
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
