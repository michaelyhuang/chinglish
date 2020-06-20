const tagger = new HTMLtagger();
tagger.walk(document.body);

function addStyle(styleString) {
	const style = document.createElement('style');
	style.textContent = styleString;
	document.head.append(style);
  }

css = new styler();
addStyle(css.output);
