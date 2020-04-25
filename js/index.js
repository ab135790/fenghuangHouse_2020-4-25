
const renderData = new _renderData()
// 页面初始化渲染
renderData._renderTitle('red_swiper', 'red_pic', red_Data);
renderData._renderTitle('black_swiper', 'black_pic', black_Data);
renderData._renderRedDom('red_curContent', red_Data[0]);
renderData._renderBlackDom('black_curContent', black_Data[0]);
renderData._renderProcess('process_content', process_Data);
// 获取DOM
const houseRedObject = forms.getElementsByClassName('red_pic');
const houseBlackObject = forms.getElementsByClassName('black_pic');
const processObject = forms.getElementsByClassName('btn');


/** 2020-2-25 0025
 *作者:王青高
 *功能:  红榜模块点击事件
 *参数:
 */
for (let i = 0; i < houseRedObject.length; i++) {
	(function(index) {
		EventUtil.addHandler(houseRedObject[index], 'click', (e, num = index) => {
			renderData._renderRedDom('red_curContent', red_Data[num]);
		})
	})(i)
}

/** 2020-2-25 0025
 *作者:王青高
 *功能: 红榜模块点击事件
 *参数:
 */
for (let i = 0; i < houseBlackObject.length; i++) {
	(function(index) {
		EventUtil.addHandler(houseBlackObject[index], 'click', (e, num = index) => {
			renderData._renderBlackDom('black_curContent', black_Data[num]);
		})
	})(i)
}

/** 2020-2-25 0025
 *作者: 王青高
 *功能: 维权点击事件
 *参数:
 */
for (let i = 0; i < processObject.length; i++) {
	(function(index) {
		EventUtil.addHandler(processObject[index], 'click', (e, num = index) => {
			renderData._renderTxt('process_li', process_Data[num], num);
		})
	})(i)
}