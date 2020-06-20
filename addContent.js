function addStyle(styleString) {
	const style = document.createElement('style');
	style.textContent = styleString;
	document.head.append(style);
  }


addStyle(`
	.chinglish:after{
    	content: "快";
	}

	.chinglish:hover:after{
    	content: "quick";
	}
`);