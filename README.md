#  前言
随着近期TRX价格的走高，不少币友开始抱怨TRC20的手续费直逼ERC20的手续费了，但是其实波场提供了免燃烧TRX转账的方式，那就是**波场能量**。

目前波场上的转账，分为热门合约和非热门合约，热门合约手续费会相应提高，我们常用的USDT合约当然是热门中的热门，相应的，手续费也是加倍的贵，关于能量和热门合约的更多，可以参考[官方解释](https://cn.developers.tron.network/docs/resource-model)。

# 如何获取波场能量
## 自主质押
自主质押是官方提供的获取能量的方案，每个支持TRON的钱包内应该都支持改操作，下面我们以区块浏览器为例，了解质押过程。
在区块浏览器中连接TronLink后，进入到“钱包管理”-“资源”-“质押2.0”
在“我的资源”中可以看到“获取资源”

## 官方购买
官方的购买入口为[justlend](https://app.justlend.org/energy)
由于官方由合约方式实现，每一笔都有不小的手续费，适合大额租赁，小额手续费占比太高

## 三方购买
[https://itrx.io](https://itrx.io)是专为小额租赁（同样也适用于大额）设计的交易平台

- 目前支持手动下单、手动批量下单、API下单、智能托管下单，覆盖各种需要能量的场景
- 可以根据您的使用历史，全自动为您提供能量租赁服务，努力做到让您少操心，多省钱
- 通过API可设置能量委托成功回调，成功委托后发送通知，也可主动查询订单状态

## API示例
您需要先注册ITRX账号
在用户中心-API中申请一个KEY

以下为一个python sample
```
import hmac
import json
import requests
import hashlib
import time


API_KEY = "*****"
API_SECRET = "*****"

timestamp = str(int(time.time()))
URL = "https://itrx.io/api/v1/frontend/order"
data = {
   'energy_amount': 32000,
   'period': '1D',
   'receive_address': 'TExWKszFWYTKZH8LYiovAPKzS3L9MLZ4kw',
   'callback_url': 'http://{mydomain}/callback',
   'out_trade_no': '123456',
}
json_data = json.dumps(data, sort_keys=True, separators=(',', ':'))
message = f'{timestamp}&{json_data}'
signature = hmac.new(API_SECRET.encode(), message.encode(), hashlib.sha256).hexdigest()


headers = {
    "API-KEY": API_KEY,
    "TIMESTAMP": timestamp,
    "SIGNATURE": signature,
    'Content-Type': 'application/json',
}

response = requests.post(f"{URL}", data=json_data, headers=headers)
print(response.json())
```

更多代码示例，详情请见[开发中心](https://develop.itrx.io/)
