// Purpose is to walk through and wrap our target English words in span tags with unique IDs.
// addContent.js will inject the Chinese and English-on-hover content using CSS ::before and content property

function HTMLtagger() {

	this.walk = function(node){

		let child, next;
		let tag = (node.tagName) ? node.tagName.toLowerCase() : "";

		/* Just going to leave this out for now. Copied from 'cloud-to-butt' extension source code.
		if (tag == 'input' || tag == 'textarea') {
			return;
		}
		if (node.classList && node.classList.contains('ace_editor')) {
			return;
		} 
		*/

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
			case 3:
				this.wrapText(node);
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

	/* One way to change the content is to replace() nodeValue. But replace() data allows the creation of span elements
	// I could use this approach + JS onmouseover script, but I think CSS is faster.
	this.coverText = function(textNode) {
		let content = textNode.nodeValue;
		content = content.replace(/\bEnglish\b/g, "中文");
		textNode.nodeValue = content;
	}
	*/

}

