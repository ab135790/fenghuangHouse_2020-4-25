/** 2020-2-25 0025
 *作者:王青高
 *功能:
 * _renderProcess：流程方式-渲染
 * _renderTxt：流程详情-渲染
 * _renderTitle：轮播-渲染
 * _renderRedDom：红榜详情-渲染
 * _renderBlackDom：黑榜详情-渲染
 * _rendDom：统一渲染函数
 *参数:
 * {Object} renderDom: DOM父元素
 * {Array} data: 数据信息
 * {String} _class: 类名变量
 * {String} _dom: DOM元素
 */
class _renderData {
	constructor() {}
	_renderProcess(renderDom, data) {
		if (!data.length || data.length < 4) return alert('维权方式小于四项，请填写维权方式');
		let _dom = `<div class="process_circle_dashed"></div>
        <div class="process_circle_top btn">${data[0].title}</div>
        <div class="process_circle_right btn">${data[1].title}</div>
        <div class="process_circle_bottom btn">${data[2].title}</div>
        <div class="process_circle_left btn">${data[3].title}</div>
		<ul class="process_circle_content" id="process_li"><li class="process_content_li">${data[0].txt}</li></ul>`
		this._rendDom(renderDom, _dom)
	}
	_renderTxt(renderDom, data) {
		if (!Object.keys(data)) return alert('维权详情小于四项，请填写维权详情');
		let _dom = "";
		if (data.imgUrl) {
			_dom = `<li class="process_content_li"><img class="img" src=${data.imgUrl}></li>`
		} else {
			_dom = `<li class="process_content_li">${data.txt}</li>`;
		}
		this._rendDom(renderDom, _dom);
	}
	_renderTitle(renderDom, _class, data) {
		if (!data.length) return alert('数据丢失或不存在！请联系管理员');
		let _dom = '';
		for (let i = 0; i < data.length; i++) {
			_dom += `<div class="swiper-slide">
			            <div class="${_class} pic">
			                <img src="${data[i].titleImgUrl}" alt="" class="slide_img mb10">
			                <div class="slide_name">${data[i].title}</div>
			            </div>
			        </div>`
		}
		this._rendDom(renderDom, _dom)
	}
	_renderRedDom(renderDom, data) {
		if (!Object.keys(data)) return alert('数据丢失或不存在！请联系管理员');
		const _dom =
			`<div class="inventory_content_left">
                <div class="inventory_content_img">
                    <div class="bigImg mb20">
                        <img src="${data.bigImg}" alt="" class="img">
                    </div>
                    <div class="smallImgLeft">
                        <img src="${data.smallImgLeft}" alt="" class="img">
                    </div>
                    <div class="smallImgRight">
                        <img src="${data.smallImgRight}" alt="" class="img">
                    </div>
                </div>
            </div>
            <div class="inventory_content_right plr20">
                <h1 class="title ">${data.title}</h1>
                <div class="bar mtb20"></div>
                <div class="text ellipsis_line">${data.txt}</div>
            </div>`
		this._rendDom(renderDom, _dom)
	}
	_renderBlackDom(renderDom, data) {
		if (!Object.keys(data)) return alert('数据丢失或不存在！请联系管理员');
		const _dom =
			`<div class="inventory_content_right plr20">
                <h1 class="title ">${data.title}</h1>
                <div class="bar mtb20"></div>
                <div class="text ellipsis_line">${data.txt}</div>
            </div>
            <div class="inventory_content_left">
                <div class="inventory_content_img">
                    <div class="bigImg mb20">
                        <img src="${data.bigImg}" alt="" class="img">
                    </div>
                    <div class="smallImgLeft">
                        <img src="${data.smallImgLeft}" alt="" class="img">
                    </div>
                    <div class="smallImgRight">
                        <img src="${data.smallImgRight}" alt="" class="img">
                    </div>
                </div>
            </div>`
		this._rendDom(renderDom, _dom)
	}
	_rendDom(renderDom, _dom) {
		let _renderDom = document.getElementById(renderDom);
		_renderDom.innerHTML = _dom;
	}
}



