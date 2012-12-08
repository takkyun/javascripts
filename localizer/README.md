# localizer.js

Localizer handles multilingualization in JavaScript like `gettext`.

The script is named as "localizer.js", and language data should be put into "locale/" directory as follows.

* localizer.js
* locale/
  * en.js (English)
  * ja.js (Japanese)
  * de.js (German)
  * ... any other language data

A sample HTML document looks like:

    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ja">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="Content-Script-Type" content="text/javascript" />
    <meta http-equiv="Content-Style-Type" content="text/css" />
    <title>sample - localizer.js</title>
    <script type="text/javascript" src="localizer.js"></script>
    </head>
    <body>
    <p>&quot;Hello world!&quot; is translated in Japanese.</p>
    <p>However this document is writtin in English, so it looks nothing to be changed. You can also see <a href="en.html">English page</a>.</p>
    <hr />
    <p><script type="text/javascript">
    <!--
      document.write(_('Hello world!'));
    // -->
    </script></p>
    </body>
    </html>

We can see `Hello world!` in source code, however this string will be translated in Japanese because of xml:lang attribute ("ja").

If there is no resource for corrsponding language, the string won't be translated.

## Copyright

"localizer.js" is developed by Takuya Otani / SimpleBoxes.

Copyright (c) 2012 [SerendipityNZ](http://serendipitynz.com/) Ltd. 

## Licenses

"localizer.js" is destributed under the **MIT-licsenses**.

Permission is hereby granted, free of charge, to any person obtaining a copy