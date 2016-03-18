

document.addEventListener('DOMContentLoaded', handler, false);

function handler() {

    init();
    bindEvents();
}

var init = function () {
    // alert(window.innerHeight);
}

var picHandler = function (src) {
    var img = $('#thumb-pics-container').find('img');
    img[0].onload = function () {
        var parentW = img.parent().width();
        var parentH = img.parent().height();
        var size = {
            parentH: parentH,
            parentW: parentW
        }
        imgResize(img[0], size);
    }
    img[0].src = src;
}

var bindEvents = function () {
    var ele = $('#file-input');
    ele.on('change', function (e) {

        var URL = window.URL || window.webkitURL;
        var url = URL.createObjectURL(e.target.files[0]);
        console.info(e.target.files[0].size)
        picHandler(url);
        // var reader = new FileReader();
        // reader.readAsDataURL(e.target.files[0]);

        // reader.onload = function () {
        //     var url = window.URL || window.webkitURL;
        //     picHandler(reader.result);
        // }

    })
};

var base64ToBlob = function (base64Str) {
    var strArr = base64Str.split(',');
    var type = strArr[0].split(':')[1].split(';')[0];
    var code, ret;

    if (strArr[0].indexOf('base64') >= 0) {
        code = window.atob(strArr[1]);
    }
    else {
        code = unescape(strArr[1]);
    }

    var uinit = new Uint8Array(code.length);

    for (var i = 0; i < code.length; i++) {
        uinit[i] = code.charCodeAt(i);
    }

    try {
        var ret = new Blob([uinit], {type: type});
    }
    catch (e) {
        window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder
            || window.MozBlobBuilder || window.MSBlobBuilder

        if ('TypeError' == e.name && window.BlobBuilder) {
            var builder = new BlobBuilder;

            builder.append(uinit.buffer);

            var ret = builder.getBlob(type);
        }
        else {
            'InvalidStateError' === e.name && (ret = new Blob([uinit.buffer], {type: type}));
        }
    }

    return ret;
};

var imgCut = function (img) {

};


var imgResize = function (img, options) {
    var imgW = img.naturalWidth || img.width;
    var imgH = img.naturalHeight || img.height;
    var sw = options.parentW;
    var sh = options.parentH;
    if (imgW >= imgH) {
        if (imgW > sw) {
            var ratio = sw / imgW;
            imgW = imgW * ratio - 2;
            imgH = imgH * ratio;
        }
        else {
            imgH = imgH * (sw / imgW);
            imgW = sw - 2;
        }
        img.style.marginLeft = 0;
        img.style.marginTop = (sh - imgH) / 2 + 'px';
    }

    if (imgH > imgW) {
        if (imgH > sh) {
            var ratio = sh / imgH;
            imgH = imgH * ratio - 2;
            imgW = imgW * ratio;
        }
        else {
            imgW = imgW * (sh / imgH);
            imgH = sh - 2;
        }
        img.style.marginTop = 0;
        img.style.marginLeft = (sw - imgW) / 2 + 'px';
    }

    img.style.width = imgW + 'px';
    img.style.height = imgH + 'px';
}
