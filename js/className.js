/** 2020-2-25 0025
 *作者:青型科技
 *功能:兼容ie8以下获取className
 *参数: {string} str: 类名变量
 */
const forms = {
	getElementsByClassName: str => {
			let searchClass = str;//存储要查找的类名
			let node = str.node|| document;//存储要查找的范围
			let tag = str.tag||'*';//存储一定范围内要查找的标签
			let result = [];
			// 判断浏览器不支持getElementsByClassName方法
			if(document.getElementsByClassName){ //如果浏览器支持
				let nodes = node.getElementsByClassName(searchClass);
				if (tag !== '*'){
					for(let i = 0;node = nodes[i++];){
						if(node.tagName === tag.toUpperCase()){
							result.push(node);
						}
					}
				} else {
					result = nodes;
				}
				return result;
			} else { //使IE8以下的浏览器能够支持该属性
				var els = node.getElementsByTagName(tag);
				var elsLen = els.length;
				var i,j;
				var pattern = new RegExp("(^|\\s)" + searchClass + "(\\s|$)");
				for(i = 0,j = 0;i < elsLen;i++){
					if(pattern.test(els[i].className)){  //检测正则表达式
						result[j] = els[i];
						j++;
					}
				}
				return result;
			} 
	}
}