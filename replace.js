// Purpose is to walk through and wrap our target English words in span tags with unique IDs.
// addContent.js will inject the Chinese and English-on-hover content using CSS ::before and content property

function findAndReplace(target) {

	this.target = target

	this.walk = function(node){

		var child, next;
		
		var tagName = node.tagName ? node.tagName.toLowerCase() : "";
		if (tagName == 'input' || tagName == 'textarea') {
			return;
		}
		if (node.classList && node.classList.contains('ace_editor')) {
			return;
		}

		switch (node.nodeType)  {
			case 1:
			case 9:
			case 11:
				child = node.firstChild;
				while (child) 
				{
					next = child.nextSibling;
					this.walk(child);
					child = next;
				}
				break;

			case 3: // Text node
				this.wrapText(node);
				// this.coverText(node);
				break;
		}
	}

	this.wrapText = function(textNode){
		// Wrap word in span
		// Based on https://stackoverflow.com/questions/16662393/insert-html-into-text-node-with-javascript
		target = /quick/g;
		//translation = this.translate(target)

		innerHTML = textNode.data.replace(target, `<span title="English" class="chinglish"></span>`)
		
		let div = document.createElement('div');
		textNode.parentNode.insertBefore(div, textNode);

		div.insertAdjacentHTML('afterend', innerHTML);
		
		div.remove();
		textNode.remove();
	}

	this.coverText = function(textNode) {
		var v = textNode.nodeValue;

		v = v.replace(/\bThe\b/g, "中文");
		v = v.replace(/\bthe\b/g, "中文");
		v = v.replace(/\bfox\b/g, "中文");
		v = v.replace(/\bFoxy\b/g, "Chinese")

		textNode.nodeValue = v;
	}

}

const replacer = new findAndReplace();
replacer.walk(document.body);

