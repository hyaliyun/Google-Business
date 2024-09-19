
# CF-Worker-Dir

CF-Worker-Dir is a cloud function program for the Cloudflare Worker platform. You can use it to build your own navigation page in one minute. CF-Worker-Dir provides a wealth of custom configurations, and it also reserves an interface to help you sell your domain name. If you don't have a website on your domain name, you might as well use CF-Worker-Dir to stop wasting your domain name. 😉

🎉[Demo address](http://gethe.best/)

<details>
<summary>📷Program screenshot</summary>
<img src="https://i.loli.net/2020/02/14/ahU32dQxMct9ugX.png"/>
</details>

## Program installation
### Quick installation
1. Create a new **Worker** on the [Cloudflare Worker](https://workers.cloudflare.com/) management page.
2. Paste the code in `index.js` on the left side of the Worker editing page.
3. Modify the configuration content of `config` according to your own needs
### Advanced installation
> How to bind your own domain name
1. Complete the quick installation according to the above, and return to the domain name management panel
2. Click `Workers` to enter the Workers management page
3. Click `Add route` to set a new route
4. `Route` can enter the subdomain you want to use. If you use it on the root domain name, just enter the current domain name. `Worker` selects the Worker that was quickly installed above
> The domain name address used by `Route` must have resolved the A record**. If there is no IP address that can be bound, you can enter 8.8.8.8 as a placeholder:)

## System configuration

CF-Worker-Dir allows users to customize the navigation page. The configuration content is as follows:
```
const config = {
title: "Custom navigation", //Custom website title
subtitle: "Cloudflare Workers Nav", //Custom website subtitle
logo_icon: "sitemap", //Select website logo icon. Currently only supports (eg:https://semantic-ui.com/elements/icon.html)
hitokoto: true, //Open the Yiyan plugin
search:true, //Open the search function
search_engine:[ //Search engine list
{
name:"Baidu", //Search engine name
template:"https://www.baidu.com/s?wd=$s" //Search engine template (including keyword $s)
}
],
selling_ads: true, //Do you want to enable URL promotion
sell_info:{
domain:"example.com", //Current domain name
price:500, //Price
mon_unit:"yen sign", //Currency unit (eg:https://semantic-ui.com/elements/icon.html#computers)
contact:[ //Contact information
{
type:"envelope", //Communication tool ("weixin","qq","telegram plane","envelope" or "phone")
content:"info@example.com" //Number/address
}
]
},
lists: [ //Website information
{
name: "Technology", //Website category
icon: "code", //Website category icon currently only supports (eg: https://semantic-ui.com/elements/icon.html)
list: [
{
url: "https://oschina.net/", //Website url
name: "Open Source China", //Website name
desc: "Leading Chinese open source technology community" //Website description
}
]
}
]
}
```

## Todo
- [ ] Modularization
- [ ] Meter list
- [ ] Plugin (countdown/one word/widget)
- [ ] Internationalization

## Licence

MIT