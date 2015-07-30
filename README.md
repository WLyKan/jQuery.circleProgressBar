# jQuery.circleProgressBar.js

**Version: 0.0.1**
[demo](http://kingmax521.github.io/jQuery.circleProgressBar)
<br>

已经有很多强大的环形进度条插件了，比如progressbar.js, Knob等等，但是canvas的毛刺问题导致小的
图形很丑。而支持SVG的插件又不兼容IE8，毕竟IE8还有很大的市场占有。
jQuery.circleProgressBar.js基于Raphael，支持SVG和VML，所以可以在IE8上也有完美的图形。
有了这个插件，就不用催设计师的稿子了.....

Beautiful progress bars with animated SVG(VML) paths.
This plugin is based on Rapael.js and supports all major browsers including **IE8+**.
#### Installing options:

```javascript
$('.percent').percentageLoader({
    //percentage value container
    valElement: 'p',
    //ring width
    strokeWidth: 20,
    //background ring color
    bgColor: '#d9d9d9',
    //ring color
    ringColor: '#d53f3f',
    //text color
    textColor: '#9a9a9a',
    fontSize: '12px',
    fontWeight: 'normal'
});
```

**Example**

```html
<div style="width:100px;height:100px;margin:18px auto;">
    <div class="percent" style="width:80px;height:80px;">
        <p style="display:none;">8%</p>
    </div>
</div>
```

```javascript
$('.percent').percentageLoader({
    strokeWidth: 8,
});
```

# Contributing


# Thanks
This is my first plugin, so...Thanks a lot for your help!
