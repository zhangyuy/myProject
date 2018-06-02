function startMove(obj,json,callback) {
    var iSpeed,iCur;
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var bStoop = true;
        for(var attr in json){
            if(attr == 'opacity'){
                iCur = parseFloat(getStyle(obj,attr)) * 100;
            }else{
                iCur = parseInt(getStyle(obj,attr));
            }
            iSpeed = (json[attr] - iCur) / 7;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed):Math.floor(iSpeed);
            if(attr == 'opacity'){
                obj.style.opacity = (iCur + iSpeed) / 100;
            }else{
                obj.style[attr] = iCur + iSpeed + 'px';
            }
            if(iCur != json[attr]){
                bStoop = false;
            }
        }
        if(bStoop){
            clearInterval(obj.timer);
            typeof callback == 'function' ? callback():'';
        }

    },30)
}