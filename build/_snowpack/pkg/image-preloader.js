/**
 * @licence
 * @author Sergey Melyukov 2016
 */

/**
 * Waiting while all promises will be settled to onFulfilled or onRejected state
 * Returned promise will be resolved with array with info for every passed promise:
 * Array<{status:boolean, value:*}>
 *
 * onProgress-function will be called (if passed) for every settled promise
 *
 * @param {Array<Promise>} promises
 * @param {function({status:boolean, value:*})=} onProgress
 *
 * @return {Promise}
 */
function allSettled(promises, onProgress) {
    var mapped = promises.map(function(promise) {
        return promise.then(function(value) {
            return {
                value: value,
                status: true
            };
        }, function(e) {
            return {
                value: e,
                status: false
            };
        }).then(function(value) {
            if (typeof onProgress === 'function') {
                onProgress(value);
            }

            return value;
        });
    });

    return Promise.all(mapped);
}

var src$1 = allSettled;

/**
 * @licence MIT
 * @author Sergey Melyukov
 */



/**
 * Image preloader
 *
 * @class ImagePreloader
 * @constructor
 *
 * @param {(String|HTMLImageElement)=} fallbackImage
 * @param {function({status:boolean, value:HTMLImageElement})=} onProgress
 */
var ImagePreloader = function(fallbackImage, onProgress) {
    /**
     * @type {?function({status: boolean, value: HTMLImageElement})}
     */
    this.onProgress = typeof onProgress === 'function' ? onProgress : null;
    /**
     * @type {?String|HTMLImageElement}
     */
    this.fallbackImage = typeof fallbackImage === 'string' || fallbackImage instanceof HTMLImageElement ? fallbackImage : null;
};

/**
 * Do simple image preloading.
 *
 * @param {!(String|HTMLImageElement)} imageSource
 *
 * @return {Promise} will be resolved/rejected with HTMLImageElement
 */
ImagePreloader.simplePreload = function(imageSource) {
    return new Promise(function(resolve, reject) {
        var img;

        if (imageSource instanceof HTMLImageElement) {
            img = imageSource;

            if (!img.complete) {
                img.onload = resolve.bind(null, img);
                img.onerror = img.onabort = reject.bind(null, img);
            } else if (img.naturalHeight) {
                resolve(img);
            } else {
                reject(img);
            }
        } else if (typeof imageSource === 'string') {
            img = new Image();
            img.onload = resolve.bind(null, img);
            img.onerror = img.onabort = reject.bind(null, img);
            img.src = imageSource;
        }
    });
};

/**
 * Preload image.
 *
 * If fallbackImage-property is defined and correct, then src-attribute for the broken images will replaced by fallbackImage
 * As well, origin image url will be placed to 'data-fail-src' attribute.
 *
 * If onProgress-method is defined, then this method will be calling for every image loading (fulfilled of rejected).
 *
 * @param {...(String|HTMLImageElement|Array<String|HTMLImageElement>)} args
 *
 * @return {Promise} will be resolved with Array<{status:boolean, value:HTMLImageElement}>
 *
 *     status-property - is the status of image loading
 *     status-property will be true if:
 *      - original image loading is ok
 *      - or original image loading is fail but fallback-image loading is ok
 *     status-property will be false if:
 *      - original image loading is fail
 *      - or original image loading is fail and fallback-image loading is fail
 *
 *     value-property - is the image that was loaded
 */
ImagePreloader.prototype.preload = function(args) {
    var that = this,
        imagesToLoad = Array.prototype.concat.apply([], Array.prototype.slice.call(arguments));

    imagesToLoad = imagesToLoad.map(function(imageSource) {
        return ImagePreloader.simplePreload(imageSource).catch(function(brokenImage) {
            if (that.fallbackImage) {
                return ImagePreloader.simplePreload(that.fallbackImage)
                    .then(function(fallbackImage) {
                        brokenImage.setAttribute('data-fail-src', brokenImage.src);
                        brokenImage.src = fallbackImage.src;

                        return brokenImage;
                    }, function() {
                        return Promise.reject(brokenImage);
                    });
            }

            return Promise.reject(brokenImage);
        });
    });

    return src$1(imagesToLoad, that.onProgress);
};

var main = ImagePreloader;

/**
 * @licence MIT
 * @author Sergey Melyukov
 */

var src = main;

export default src;
