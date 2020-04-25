/** 2020-2-25 0025
 *作者:王青高
 *功能: 兼容ie8以下点击事件
 *参数:
 */
const EventUtil = {
	addHandler: (ele, type, handler) => {
		if (ele.addEventListener) {
			ele.addEventListener(type, handler, false);
		} else if (ele.attachEvent) {
			ele.attachEvent('on' + type, handler);
		}
	},
	removeHandler: (ele, type, handler) => {
		if (ele.removeEventListener) {
			ele.removeEventListener(type, handler, false);
		} else if (ele.detachEvent) {
			ele.detachEvent('on' + type, handler);
		} else {
			ele.detachEvnet('on' + type) = null;
		}
	},
	getTarget: (event) => {
		return event.target || event.srcElement;
	},
	preventDefault: (event) => {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},
	stopPropagation: function(event) {
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	}
}
