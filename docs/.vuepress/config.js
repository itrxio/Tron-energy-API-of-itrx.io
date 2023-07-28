import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'ITRX开发文档 V2023.05',
  description: 'TRON-ITRX能量平台开发接口',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],

  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    // '/en/': {
    //   lang: 'en-US',
    //   title: 'ITRX develop doc V2023.05',
    //   description: 'ITRX develop doc',
    // },
    '/': {
      lang: 'zh-CN',
      title: 'ITRX开发文档 V2023.05',
      description: '简单、易用的TRON能量购买平台',
    },
  },

  theme: defaultTheme({
    // 默认主题配置
    logo: '/images/logo.png',
    contributors: false,
    // navbar: [
    //     {
    //         text: '语言',
    //         children: ['README.md']
    //     }
    // ],
    sidebar: {
      '/': [
          {
            text: '接入前',
            link: '/100-before'
          },
          {
              text: '说明',
              link: '/general',
              children: ['/general/sign', '/general/error-code', '/general/callback'],
              
          },
          {
              text: '接口',
              link: '/api',
              children: ['/api/index-data', '/api/order-create', '/api/order-query', '/api/order-price', '/api/order-process', '/api/order-expiring'],
          },
          {
            text: '其他说明',
            link: '/other',
            children: ['/other/auto'],
        }
      ],
      '/en/': [
        {
            text: 'Before',
            link: '/en/general',
            children: ['/en/general/page1', '/en/general/page2'],
            
        },
        {
            text: 'API',
            link: '/en/home'
        },
        {
          text: 'Other',
          link: '/en/home'
        }
      ],
    },
    locales: {
      '/': {
        selectLanguageName: '简体中文',
      },
      '/en/': {
        selectLanguageName: 'English',
      },
    },
  })
  
})

/*

<CodeGroup>
  <CodeGroupItem title="Python" active>

```python

```

  </CodeGroupItem>

  <CodeGroupItem title="Php">

```php

```

  </CodeGroupItem>

  <CodeGroupItem title="Java">
  
```java

```

  </CodeGroupItem>

  <CodeGroupItem title="Go">
  
```go

```
  </CodeGroupItem>

  <CodeGroupItem title="Shell">
  
```shell

```
  </CodeGroupItem>
</CodeGroup>

*/