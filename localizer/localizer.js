// localizer - javascript library
// == written by Takuya Otani <takuya.otani@gmail.com> ===
// == Copyright (C) 2012 SimpleBoxes/SerendipityNZ Ltd. ==

var __Localizer = function()
{
	this.strings = {};
	this.getLocalizedString = function(str)
	{
		if (__Localizer.strings[str] && __Localizer.strings[str] != '')
			return __Localizer.strings[str];
		return str;
	};
	var path = '';
	var jses = document.getElementsByTagName('script');
	for (var i=0,n=jses.length;i<n;i++)
	{
		if (jses[i].src.indexOf('localizer.js') == -1) continue;
		path = jses[i].src.replace('localizer.js','');
		break;
	}
	var html = document.getElementsByTagName('html')[0];
	if (html)
	{
		var lang = html.getAttribute('xml:lang') || html.getAttribute('lang');
		var pre  = '\n<' + 'script type="text/javascript" src="';
		var post = '.js"></' + 'script>';
		if (!lang) lang = 'en';
		try {
			document.write(pre + path + 'locale/' + lang + post);
		} catch(err) {
			var script = document.createElement('script');
			script.setAttribute('type','text/javascript');
			script.setAttribute('src',path + 'locale/' + lang + '.js');
			head.appendChild(script);
		}
	}
	return this;
};
__Localizer = new __Localizer();
_ = __Localizer.getLocalizedString;
