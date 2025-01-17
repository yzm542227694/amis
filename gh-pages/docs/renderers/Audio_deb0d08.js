define('docs/renderers/Audio.md', function(require, exports, module) {

  module.exports = {
    "html": "<h2><a class=\"anchor\" name=\"audio\" href=\"#audio\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>Audio</h2><p>音频播放器</p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td><code>string</code></td>\n<td><code>&quot;audio&quot;</code></td>\n<td>指定为 audio 渲染器</td>\n</tr>\n<tr>\n<td>className</td>\n<td><code>string</code></td>\n<td></td>\n<td>外层 Dom 的类名</td>\n</tr>\n<tr>\n<td>inline</td>\n<td><code>boolean</code></td>\n<td>true</td>\n<td>是否是内联模式</td>\n</tr>\n<tr>\n<td>src</td>\n<td><code>string</code></td>\n<td></td>\n<td>音频地址</td>\n</tr>\n<tr>\n<td>loop</td>\n<td><code>boolean</code></td>\n<td>false</td>\n<td>是否循环播放</td>\n</tr>\n<tr>\n<td>autoPlay</td>\n<td><code>boolean</code></td>\n<td>false</td>\n<td>是否自动播放</td>\n</tr>\n<tr>\n<td>rates</td>\n<td><code>array</code></td>\n<td><code>[]</code></td>\n<td>加速播放</td>\n</tr>\n<tr>\n<td>controls</td>\n<td><code>array</code></td>\n<td><code>[&#39;rates&#39;, &#39;play&#39;, &#39;time&#39;, &#39;process&#39;, &#39;volume&#39;]</code></td>\n<td>内部模块定制化</td>\n</tr>\n</tbody>\n</table>\n<div class=\"amis-preview\" style=\"height: 400px\"><script type=\"text/schema\" height=\"400\" scope=\"body\">{\n    \"type\": \"audio\",\n    \"autoPlay\": false,\n    \"src\": \"http://www.ytmp3.cn/down/32791.mp3\"\n}\n</script></div>\n",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "Audio",
          "fragment": "audio",
          "fullPath": "#audio",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
