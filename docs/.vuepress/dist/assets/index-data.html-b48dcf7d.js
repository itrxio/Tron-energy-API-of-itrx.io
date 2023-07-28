import{_ as c,r as o,o as l,c as i,d as a,w as t,e as u,a as n,b as s}from"./app-a71d02ab.js";const r={},k=u(`<h1 id="公共数据查询" tabindex="-1"><a class="header-anchor" href="#公共数据查询" aria-hidden="true">#</a> 公共数据查询</h1><h2 id="接口地址" tabindex="-1"><a class="header-anchor" href="#接口地址" aria-hidden="true">#</a> 接口地址</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /api/v1/frontend/index-data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="返回参数" tabindex="-1"><a class="header-anchor" href="#返回参数" aria-hidden="true">#</a> 返回参数</h2><ul><li>正常返回示例</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;platform_avail_energy&quot;</span><span class="token operator">:</span> <span class="token number">603249</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;platform_max_energy&quot;</span><span class="token operator">:</span> <span class="token number">329009</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;minimum_order_energy&quot;</span><span class="token operator">:</span> <span class="token number">32000</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;maximum_order_energy&quot;</span><span class="token operator">:</span> <span class="token number">100000000</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;small_amount&quot;</span><span class="token operator">:</span> <span class="token number">50000</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;small_addition&quot;</span><span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;usdt_energy_need_old&quot;</span><span class="token operator">:</span> <span class="token number">32000</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;usdt_energy_need_new&quot;</span><span class="token operator">:</span> <span class="token number">65000</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;tiered_pricing&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">&quot;period&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token property">&quot;period&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token property">&quot;period&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">152</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token property">&quot;period&quot;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">124</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;balance&quot;</span><span class="token operator">:</span> <span class="token number">813892429257</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>此接口理论上无错误返回，APIKEY不对时返回空数据</p></li><li><p>字段解释</p></li></ul><table><thead><tr><th>参数名称</th><th>类型</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td>platform_avail_energy</td><td>int</td><td>平台可用能量</td><td></td></tr><tr><td>platform_max_energy</td><td>int</td><td>单次委托最大下单金额，<br>如果订单不允许拆分，最大可下单能量</td><td></td></tr><tr><td>minimum_order_energy</td><td>int</td><td>最小下单能量数量</td><td></td></tr><tr><td>maximum_order_energy</td><td>int</td><td>最大下单能量数量</td><td></td></tr><tr><td>small_amount</td><td>int</td><td>小于此数量为小额订单</td><td></td></tr><tr><td>small_addition</td><td>float</td><td>小额手续费，单位TRX</td><td></td></tr><tr><td>usdt_energy_need_old</td><td>int</td><td>当前有U地址建议租用</td><td></td></tr><tr><td>usdt_energy_need_new</td><td>int</td><td>当前无U地址建议租用</td><td></td></tr><tr><td>tiered_pricing</td><td>[]</td><td>我的价格，period 目前支持<br>0（1小时），1（1天），<br>3（3天），30（30天），<br>price单位为sun</td><td></td></tr><tr><td>balance</td><td>int</td><td>我的余额，单位sun</td><td></td></tr></tbody></table><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2>`,9),d=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(` requests

API_KEY `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"B433BFF1CDE7450AA38A56BEAC690DD4"'),s(`
URL `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"https://itrx.io/api/v1/frontend/index-data"'),s(`
headers `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token string"},'"API-KEY"'),n("span",{class:"token punctuation"},":"),s(` API_KEY
`),n("span",{class:"token punctuation"},"}"),s(`
response `),n("span",{class:"token operator"},"="),s(" requests"),n("span",{class:"token punctuation"},"."),s("get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string-interpolation"},[n("span",{class:"token string"},'f"'),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("URL"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},","),s(" headers"),n("span",{class:"token operator"},"="),s("headers"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("response"),n("span",{class:"token punctuation"},"."),s("json"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-php line-numbers-mode","data-ext":"php"},[n("pre",{class:"language-php"},[n("code",null,[n("span",{class:"token php language-php"},[n("span",{class:"token delimiter important"},"<?php"),s(`
`),n("span",{class:"token variable"},"$API_KEY"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string double-quoted-string"},'"B433BFF1CDE7450AA38A56BEAC690DD4"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token variable"},"$URL"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string double-quoted-string"},'"https://itrx.io/api/v1/frontend/index-data"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token variable"},"$headers"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string single-quoted-string"},"'API-KEY'"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token variable"},"$API_KEY"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token variable"},"$context"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"stream_context_create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"array"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string single-quoted-string"},"'http'"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"array"),n("span",{class:"token punctuation"},"("),s(`
        `),n("span",{class:"token string single-quoted-string"},"'method'"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token string single-quoted-string"},"'GET'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token string single-quoted-string"},"'header'"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token string double-quoted-string"},'"API-KEY: "'),s(),n("span",{class:"token operator"},"."),s(),n("span",{class:"token variable"},"$API_KEY"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token variable"},"$response"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"file_get_contents"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$URL"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token constant boolean"},"false"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token variable"},"$context"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token function"},"var_dump"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"json_decode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$response"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token constant boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token delimiter important"},"?>")]),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("okhttp3"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"OkHttpClient")]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("okhttp3"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"Request")]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("okhttp3"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"Response")]),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Main"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" args"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"OkHttpClient"),s(" client "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"OkHttpClient"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"String"),s(" url "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"https://itrx.io/api/v1/frontend/index-data"'),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"Request"),s(" request "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("Request"),n("span",{class:"token punctuation"},"."),s("Builder")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"url"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addHeader"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"API-KEY"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"B433BFF1CDE7450AA38A56BEAC690DD4"'),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"build"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token class-name"},"Response"),s(" response "),n("span",{class:"token operator"},"="),s(" client"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"newCall"),n("span",{class:"token punctuation"},"("),s("request"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"execute"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),s("response"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"body"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"string"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"IOException"),s(" e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            e`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"printStackTrace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"io/ioutil"'),s(`
	`),n("span",{class:"token string"},'"net/http"'),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	API_KEY `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token string"},'"B433BFF1CDE7450AA38A56BEAC690DD4"'),s(`
	URL `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token string"},'"https://itrx.io/api/v1/frontend/index-data"'),s(`

	client `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token operator"},"&"),s("http"),n("span",{class:"token punctuation"},"."),s("Client"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
	req`),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"_"),s(),n("span",{class:"token operator"},":="),s(" http"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"NewRequest"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"GET"'),n("span",{class:"token punctuation"},","),s(" URL"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"nil"),n("span",{class:"token punctuation"},")"),s(`
	req`),n("span",{class:"token punctuation"},"."),s("Header"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Set"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"API-KEY"'),n("span",{class:"token punctuation"},","),s(" API_KEY"),n("span",{class:"token punctuation"},")"),s(`

	resp`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" client"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Do"),n("span",{class:"token punctuation"},"("),s("req"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"The HTTP request failed with error %s\\n"'),n("span",{class:"token punctuation"},","),s(" err"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		data`),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"_"),s(),n("span",{class:"token operator"},":="),s(" ioutil"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadAll"),n("span",{class:"token punctuation"},"("),s("resp"),n("span",{class:"token punctuation"},"."),s("Body"),n("span",{class:"token punctuation"},")"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"string"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token assign-left variable"},"API_KEY"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"B433BFF1CDE7450AA38A56BEAC690DD4"'),s(`
`),n("span",{class:"token assign-left variable"},"URL"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"https://itrx.io/api/v1/frontend/index-data"'),s(`

`),n("span",{class:"token function"},"curl"),s(),n("span",{class:"token parameter variable"},"-X"),s(" GET "),n("span",{class:"token parameter variable"},"-H"),s(),n("span",{class:"token string"},[s('"API-KEY:'),n("span",{class:"token variable"},"$API_KEY"),s('"')]),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$URL"),s('"')]),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function h(_,y){const e=o("CodeGroupItem"),p=o("CodeGroup");return l(),i("div",null,[k,a(p,null,{default:t(()=>[a(e,{title:"Python",active:""},{default:t(()=>[d]),_:1}),a(e,{title:"Php"},{default:t(()=>[m]),_:1}),a(e,{title:"Java"},{default:t(()=>[b]),_:1}),a(e,{title:"Go"},{default:t(()=>[v]),_:1}),a(e,{title:"Shell"},{default:t(()=>[g]),_:1})]),_:1})])}const q=c(r,[["render",h],["__file","index-data.html.vue"]]);export{q as default};