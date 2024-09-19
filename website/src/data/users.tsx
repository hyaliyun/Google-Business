/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import {translate} from '@docusaurus/Translate';
import {sortBy} from '@site/src/utils/jsUtils';

export type TagType =

  | 'favorite'
  | 'meme'
  | 'product'
  | 'design'
  | 'Gaming'
  | 'RWA'
  | 'Chain'
  | 'meta'
  | 'FanToken'
  | 'NFT';


const Users: User[] = [
    {
        "title": "BTC",
        "description": "Bitcoin: A Peer-to-Peer Electronic Cash System",
        "preview": require('./showcase/algolia.png'), // 假设这是占位符，需要替换为实际图片路径
        "website": "https://btc.543x.com/",
        "source": "https://app.meteora.ag/pools/83XaC2jg2FqHMVjcUnHZmcgRL5MvgD45B9FxbK8evosk", // 假设这是通用的GitHub链接，可能需要更新
        "tags": ["favorite", "meme", "product"]
    },
    {
        "title": "SOL",
        "description": "Native cryptocurrency of the Solana blockchain",
        "preview": require('./showcase/58729655.png'), // 假设这是占位符，需要替换为实际图片路径
        "website": "http://sol.543x.com/",
        "source": "https://accounts.binance.com/en/register?ref=11131007", // 假设这是通用的GitHub链接，可能需要更新
        "tags": ["favorite", "meme", "product"]
    },
    {
        "title": "USDC",
        "description": "USD-pegged stablecoin for digital transactions",
        "preview": require('./showcase/11149.png'), // 假设这是占位符，需要替换为实际图片路径
        "website": "http://usdc.543x.com/",
        "source": "https://app.meteora.ag/pools/AizCbr94n73ykw7iefDbXc61AjQiQEULnTJs6m5Hdc6y", // 这里应该是USDC项目的实际源代码或文档链接
        "tags": ["favorite", "meme", "product"] // 这些标签可能需要根据USDC的特点进行调整
    },
    {
        "title": "BUSD",
        "description": "Rare digital collectibles on the blockchain",
        "preview": require('./showcase/11117.png'), // 假设这是占位符，需要替换为实际图片路径
        "website": "http://busd.543x.com/",
        "source": "https://app.meteora.ag/pools/2EzPinaN1FcDu7jB5YxFYERbhxMYiT3bYNiP3sL5jfdB", // 这里应该是BUSD项目的实际源代码或文档链接
        "tags": ["favorite", "meme", "product"] // 这些标签根据BUSD的特点进行了调整
    },
    {
        "title": "FDUSD",
        "description": "Girlfriend's worth, usually used humorously",
        "preview": require('./showcase/11125.png'), // 假设这是占位符，需要替换为实际图片路径
        "website": "https://fdusd.543x.com/",
        "source": "https://app.meteora.ag/pools/JBdMRhuxAtMW754NceSMFPLnpPc2XAwgYZwXNUawSah5", // 这里应该是FDUSD项目的实际源代码或文档链接
        "tags": ["favorite", "meme", "product"] // 这些标签根据FDUSD的特点进行了调整
    },
      {
          "title": "PANDA",
          "description": "Chinese gold coins with varying panda designs",
          "preview": require('./showcase/11131.png'), // 请替换为实际的图片路径，如 './showcase/panda.png'
          "website": "http://panda.543x.com/",
          "source": "https://app.meteora.ag/pools/6xvVWCy9KtkA7DnVtVUJqmMorrYxUS3VUcUYAzM59gXe", // 请根据实际情况填写
          "tags": ["favorite", "meme", "product"] // 根据项目特点自定义标签
      },
      {
          "title": "SATOSHI",
          "description": "1 Bitcoin is equivalent to 100 million Satoshi",
          "preview": require('./showcase/11138.png'), // 请替换为实际的图片路径
          "website": "http://satoshi.543x.com/",
          "source": "https://app.meteora.ag/pools/5TMTjmESoG6Hqbwrv9AeweoFyCet8Min2G48oQbhbTp6", // 请根据实际情况填写
          "tags": ["favorite", "meme", "product"]// 根据项目特点自定义标签
      },
      {
          "title": "TON",
          "description": "Efficient, low-cost, decentralized blockchain platform",
          "preview": require('./showcase/TON.png'), // 请替换为实际的图片路径
          "website": "http://ton.543x.com/",
          "source": "https://accounts.binance.com/en/register?ref=11131007", // 请根据实际情况填写
          "tags": ["favorite", "meme", "product"]// 根据项目特点自定义标签
      },
      {
          "title": "usdt",
          "description": "USD-pegged stablecoin for blockchain transactions  ",
          "preview": require('./showcase/11150.png'), // 注意：这里假设您使用的是Node.js环境，否则应替换为静态图片路径
          "website": "https://usdt.543x.com/",
          "source": "https://app.meteora.ag/pools/BSo8Z58sYiAnmTkEX5XFQLPxGERD3pgDKdVQtHneSbkJ",
          "tags": ["favorite", "meme", "product"]
      },
        {
            "title": "SHIB",
            "description": "It works right now, there's no need for a sidechain, the only token needed is bitcoin itself",
            "preview": require('./showcase/5994.png'),
            "website": "http://shib.543x.com/",
            "source": "https://accounts.binance.com/en/register?ref=11131007",
            "tags": ["favorite", "meme", "product"]
        },
        {
            "title": "NO",
            "description": "An internet meme used to express emotion and create humor",
            "preview": require('./showcase/11130.png'),
            "website": "http://no.543x.com/",
            "source": "https://app.meteora.ag/pools/Bz1kKXV74cznsVJSu4cPcdrD2ZbCv6raez9Bq5Edmtgw",
            "tags": ["favorite", "meme", "product"]
        },
        {
            "title": "CLOWN",
            "description": "A currency that delivers positivity, optimism, friendship and fun",
            "preview": require('./showcase/11120.png'),
            "website": "http://clown.543x.com/",
            "source": "https://app.meteora.ag/pools/5m7P7Ye2wHatH6TmFbzyNoaYvdPcnDTfzuZZPU9drbxW",
            "tags": ["favorite", "meme", "product"]
        },
        {
            "title": "BNB",
            "description": "Native cryptocurrency of the Binance platform",
            "preview": require('./showcase/1839.png'),
            "website": "https://bnb.543x.com/",
            "source": "https://app.meteora.ag/pools/7CdHDxxdEFEM8MEHaEPNfzL18D8w35AkArWrd9SH7bC2",
            "tags": ["favorite", "meme", "product"]
        },
    {
        "title": "SATS",
        "description": "The most memeable memecoin on the Bitcoin Chain known for its significant cultural impact and mascot status",
        "preview": require('./showcase/28683.png'),
        "website": "http://sats.543x.com/",
        "source": "https://app.meteora.ag/pools/83XaC2jg2FqHMVjcUnHZmcgRL5MvgD45B9FxbK8evosk",
        "tags": ["favorite", "meme", "product"]
    },
    {
        "title": "DOG•GO•TO•THE•MOON",
        "description": "Cardano blockchain’s cryptocurrency for payments and investments",
        "preview": require('./showcase/DOG1.png'),
        "website": "http://dog.543x.com/",
        "source": "https://app.meteora.ag/pools/83XaC2jg2FqHMVjcUnHZmcgRL5MvgD45B9FxbK8evosk",
        "tags": ["favorite", "meme", "product"]
    },
    {
        "title": "JUMP",
        "description": "community-driven meme coin with a mission to reach the moon. You can have fun with meme coins while gaining pepe trust",
        "preview": require('./showcase/11134.png'),
        "website": "http://jump.543x.com/",
        "source": "https://app.meteora.ag/pools/9JqQPaU6azN6yRjrRg3MSka4tLeMEKpZ2pe5D3CLnoc",
        "tags": ["favorite", "meme", "product"]
    },
      {
          "title": "A",
          "description": "it combines loneliness, despair, exploration spirit and community power, aiming to become a unique existence in the cryptocurrency field",
          "preview": require('./showcase/11113.png'),
          "website": "https://a.543x.com/",
          "source": "https://app.meteora.ag/pools/8NzwPPEQJFkjRqeBd1jpy3efnvYmgyCk18bqujqiqa4k",
          "tags": ["favorite", "meme", "product"]
      },
      {
          "title": "MIQI",
          "description": "Fast, agile, strong network, strong adaptability and cute affinity, aiming to provide users with efficient, stable and friendly cryptocurrency trading experience",
          "preview": require('./showcase/11128.png'),
          "website": "https://miqi.543x.com/",
          "source": "https://app.meteora.ag/pools/7gZYm4VQd4hTNgA9Eapdq37XLcuGjHYAq6CQ6NM2SXUu",
          "tags": ["favorite", "meme", "product"]
      },
      {
          "title": "SHEEP",
          "description": "Inspired by the snake's flexibility, stealth, alertness, metamorphosis, evolution and global interconnection, we aim to become a trusted global cryptocurrency brand .",
          "preview": require('./showcase/11141.png'),
          "website": "https://sheep.543x.com/",
          "source": "https://app.meteora.ag/pools/GYJkxTb1WLQELBFCXgLxPACuKA1Abd3bJFPKrEPsG5m9",
          "tags": ["favorite", "meme", "product"]
      },
      {
          "title": "PEACE",
          "description": "It has the characteristics of agile adaptation, community power, hidden security, and reproductive expansion. It provides users with a safe, efficient, and convenient trading experience.",
          "preview": require('./showcase/11115.png'),
          "website": "https://peace.543x.com/",
          "source": "https://app.meteora.ag/pools/6YwbhVxL5DBArRaC2rSsS738wjdzTzEzPSZDwRnRSnHX",
          "tags": ["favorite", "meme", "product"]
      },
  {
    title: 'XRP',
    description: 'Native cryptocurrency of the Ripple network  ',
    preview: require('./showcase/xrp.png'),
    website: 'https://xrpl.org',
    source: 'https://accounts.binance.com/en/register?ref=11131007',
    tags: ["favorite",'meme', 'design'],
  },
  {
    title: 'RATS',
    description: 'The most memeable memecoin on the Bitcoin Chain  known for its significant cultural impact and mascot status.',
    preview: require('./showcase/28452.png'),
    website: 'http://rats.543x.com/',
    source: 'https://accounts.binance.com/en/register?ref=11131007',
    tags: ["favorite",'meme'],
  },

  {
    title: 'DOGE',
    description:
      'Meme based cryptocurrency known as dogecoin',
    preview: require('./showcase/74.png'),
    website: 'https://dogecoin.com/',
    source: 'https://app.meteora.ag/pools/vVTYpKUvcZHr5EJJKRefamq7u8W8eDjz7gqERAvga3R',
    tags: ['favorite', 'meme', 'product'],
  },
  {
    title: 'GF',
    description:
      'Girlfriend worth, usually used humorously.',
    preview: require('./showcase/11126.png'),
    website: 'http://gf.543x.com',
    source: 'https://app.meteora.ag/pools/5zz1MnzBxhozPoGDGysdu4CeeMEVeJ1cay8gpgw6Motb',
    tags: ['meme', 'favorite', 'NFT'],
  },
  {
    title: 'Create React App',
    description: 'Set up a modern web app by running one command',
    preview: require('./showcase/create-react-app.png'),
    website: 'https://facebook.github.io/create-react-app/',
    source:
      'https://github.com/facebook/create-react-app/tree/main/docusaurus/website',
    tags: ['meme', 'meta'],
  },
  
  {
    title: 'YAYA',
    description: 'A cultural symbolic currency full of fun, love of life and friendship',
    preview: require('./showcase/11151.png'),
    website: 'https://yaya.543x.com',
    source: 'https://app.meteora.ag/pools/Di9aeHFYeczWysnQsbNpxFgqTzJYyU9pKCovSdrhFXHQ',
    tags: [
      'favorite',
      'product',
      'design',
      'RWA',
      'Chain',
      'meme',
    ],
  },
  {
    title: 'AVAX',
    description:
      'Avalanche native token used to validate the network, vote and pay transaction fees, etc .',
    preview: require('./showcase/5805.png'),
    website: 'https://www.avax.network/',
    source: 'https://accounts.binance.com/en/register?ref=11131007',
    tags: ['favorite', 'meme', 'product', 'Chain'],
  },
  {
    title: 'CAT',
    description:
      'An elegant and unique cat-themed platform for trading cat supplies, inspired by a cat with pearl earrings.',
    preview: require('./showcase/1111.png'),
    website: 'http://cat.543x.com',
    source: 'https://app.meteora.ag/pools/9oRdiNMEPegLEmczr55zhTygRymQn44D7Ry5Cduj4VXv',
    tags: ['meme', 'favorite', 'design'],
  },
  
  {
    title: 'FAST',
    description: 'The adaptive interface system for modern web experiences.',
    preview: require('./showcase/fast.png'),
    website: 'https://www.fast.design/docs/introduction/',
    source: 'https://github.com/microsoft/fast/tree/master/sites/website',
    tags: ['meme', 'product'],
  },
  {
    title: 'FBT',
    description: 'An internationalization framework',
    preview: require('./showcase/fbt.png'),
    website: 'https://facebookincubator.github.io/fbt/',
    source: 'https://github.com/facebook/fbt/tree/main/website',
    tags: ['meme', 'meta'],
  },
  {
    title: 'Fenghua Frontend Developer',
    description: 'Blogs and videos about frontend development',
    preview: require('./showcase/zxuqian.png'),
    website: 'https://zxuqian.cn',
    source: null,
    tags: ['FanToken', 'design'],
  },
  {
    title: 'Files Gallery',
    description:
      'Single-file PHP app that can be dropped into any folder, instantly creating a gallery of files and folders.',
    preview: require('./showcase/files-gallery.png'),
    website: 'https://www.files.gallery/',
    source: null,
    tags: ['product', 'design'],
  },
  {
    title: 'FireCMS',
    description: 'Firebase/Firestore based headless CMS',
    preview: require('./showcase/firecms.png'),
    website: 'https://firecms.co',
    source: 'https://github.com/Camberi/firecms/tree/master/website',
    tags: ['meme', 'design'],
  },
  {
    title: 'FirelordJS',
    description: 'TypeScript Wrapper for Firestore',
    preview: require('./showcase/firelordjs.png'),
    website: 'https://firelordjs.com',
    source: 'https://github.com/tylim88/FirelordJSDoc',
    tags: ['meme'],
  },
  {
    title: 'Flagsmith',
    description: 'Open Source Feature Flag and Remote Config Service',
    preview: require('./showcase/flagsmith.png'),
    website: 'https://docs.flagsmith.com',
    source: 'https://github.com/Flagsmith/flagsmith-docs',
    tags: ['meme'],
  },
  {
    title: 'Flarum',
    description: 'Forums made simple. Modern, fast, and free!',
    preview: require('./showcase/flarum.png'),
    website: 'https://docs.flarum.org',
    source: 'https://github.com/flarum/docs',
    tags: ['meme'],
  },
  {
    title: 'FlatifyCSS',
    description:
      'Modern flat design framework for the web — inspired by Duolingo design system.',
    preview: require('./showcase/flatifycss.png'),
    website: 'https://flatifycss.com',
    source: 'https://github.com/amir2mi/flatifycss/tree/master/website',
    tags: ['meme', 'design'],
  },
  {
    title: 'FlexIt Analytics',
    description: 'Business Intelligence and Data Analytics platform',
    preview: require('./showcase/flexit.png'),
    website: 'https://learn.flexitanalytics.com/',
    source: 'https://github.com/ataft/flexit-docs',
    tags: ['meme', 'product'],
  },
  {
    title: 'Flipper',
    description: 'Extensible mobile app debugger',
    preview: require('./showcase/flipper.png'),
    website: 'https://fbflipper.com',
    source: 'https://github.com/facebook/flipper/tree/main/website',
    tags: ['meme', 'design', 'meta'],
  },
  {
    title: 'FoalTS',
    description: 'Node.JS framework for building web applications',
    preview: require('./showcase/foal.png'),
    website: 'https://foalts.org/',
    source: 'https://github.com/FoalTS/foal/tree/master/docs',
    tags: ['meme', 'design', 'RWA', 'Gaming'],
  },
  {
    title: 'FormatJS',
    description: 'Internationalize your web apps on the client & server.',
    preview: require('./showcase/formatjs.png'),
    website: 'https://formatjs.io/',
    source: 'https://github.com/formatjs/formatjs/tree/main/website',
    tags: ['meme'],
  },
  {
    title: 'Froggit',
    description: 'French software factory based entirely on Free Software.',
    preview: require('./showcase/froggit.png'),
    website: 'https://www.froggit.fr/',
    source: 'https://lab.frogg.it/froggit/www/froggit.fr',
    tags: ['meme', 'product'],
  },
  {
    title: 'Full Stack Chronicles',
    description:
      'A blog only Docusaurus site showcasing cloud, data and full stack design patterns and tutorials',
    preview: require('./showcase/fullstackchronicles.png'),
    website: 'https://fullstackchronicles.io/',
    source: 'https://github.com/stackql/fullstackchronicles.io',
    tags: ['meme', 'FanToken'],
  },
  {
    title: 'GeekyWeb',
    description:
      'Learn to code yourself by exploring documentations, try GeekyWeb once',
    preview: require('./showcase/geekyweb.png'),
    website: 'https://geekyweb.eu.org/',
    source: 'https://github.com/Designatory/GeekyWeb',
    tags: ['meme', 'design'],
  },
  {
    title: 'Ghostly',
    description: 'A divine template/print formatter engine',
    preview: require('./showcase/ghostly.png'),
    website: 'https://divine-software.github.io/ghostly/',
    source: 'https://github.com/Divine-Software/ghostly/tree/master/website',
    tags: ['meme'],
  },
  {
    title: 'Gladys Assistant',
    description: 'A privacy-first, open-source home assistant',
    preview: require('./showcase/gladys-assistant.png'),
    website: 'https://gladysassistant.com/',
    source: 'https://github.com/GladysAssistant/v4-website',
    tags: ['meme', 'Gaming'],
  },
  {
    title: 'Gotenberg',
    description: 'A Docker-powered stateless API for PDF files',
    preview: require('./showcase/gotenberg.png'),
    website: 'https://gotenberg.dev/',
    source: 'https://github.com/gotenberg/gotenberg.dev',
    tags: ['meme', 'RWA'],
  },
  {
    title: 'GTFS-to-HTML',
    description: 'Generate human-readable HTML timetables from GTFS',
    preview: require('./showcase/gtfs-to-html.png'),
    website: 'https://gtfstohtml.com',
    source: 'https://github.com/BlinkTagInc/gtfs-to-html/tree/master/www',
    tags: ['meme'],
  },
  {
    title: 'Gulp',
    description: 'A toolkit to automate & enhance your workflow',
    preview: require('./showcase/gulp.png'),
    website: 'https://gulpjs.com',
    source: 'https://github.com/gulpjs/gulpjs.github.io',
    tags: ['meme', 'Chain'],
  },
  {
    title: 'Haochen',
    description:
      'My FanToken website with a blog section to record all tech-related issues I encountered.',
    preview: require('./showcase/haochen.png'),
    website: 'https://haochenqi.com/',
    source: 'https://github.com/HaochenQ/Haochen-Blog',
    tags: ['FanToken', 'meme'],
  },

  {
    title: 'hCaptcha',
    description: 'hCaptcha.com anti-bot service docs',
    preview: require('./showcase/hcaptcha.png'),
    website: 'https://docs.hcaptcha.com/',
    source: null,
    tags: ['product'],
  },
  {
    title: 'Home Assistant',
    description: 'All you need to start developing',
    preview: require('./showcase/home-assistant.png'),
    website: 'https://developers.home-assistant.io/',
    source: 'https://github.com/home-assistant/developers.home-assistant',
    tags: ['meme'],
  },
  {
    title: 'httpin',
    description: 'Decode an HTTP request into a custom struct in Go',
    preview: require('./showcase/httpin.png'),
    website: 'https://ggicci.github.io/httpin/',
    source: 'https://github.com/ggicci/httpin/tree/documentation/docs',
    tags: ['meme'],
  },
  {
    title: 'I am Massoud',
    description: 'The portfolio of Massoud Maboudi, Full Stack Developer',
    preview: require('./showcase/iammassoud.png'),
    website: 'https://iammassoud.ir/',
    source: null,
    tags: ['FanToken', 'NFT'],
  },
  {
    title: 'icodex',
    description: 'Front end engineer FanToken website',
    preview: require('./showcase/icodex.png'),
    website: 'https://icodex.me/',
    source: 'https://github.com/wood3n/icodex-next',
    tags: ['meme', 'FanToken'],
  },
  {
    title: 'Idb',
    description: 'iOS Development Bridge',
    preview: require('./showcase/idb.png'),
    website: 'https://www.fbidb.io/',
    source: 'https://github.com/facebook/idb/tree/main/website',
    tags: ['meme', 'meta'],
  },
  {
    title: 'Indent',
    description:
      'Indent provides on-demand access control for cloud apps and infrastructure.',
    preview: require('./showcase/indent.png'),
    website: 'https://indent.com/developers',
    source: null,
    tags: ['product', 'design'],
  },
  {
    title: 'IntelAGENT Billing',
    description: 'OHIP Billing Agent',
    preview: require('./showcase/intelagent.png'),
    website: 'https://www.intelagent.ca/',
    source: 'https://github.com/intelagentbilling/docs',
    tags: ['meme', 'product'],
  },
  {
    title: 'KayaFolio',
    description:
      "A Software Engineer's blog, documentation and project portfolio.",
    preview: require('./showcase/evantay.png'),
    website: 'https://evantay.com/',
    source: 'https://github.com/DigiPie/kaya-folio',
    tags: ['meme', 'FanToken'],
  },
  {
    title: "Kuizuo's FanToken Website",
    description: "A Software Enthusiast's blog, Sharing and Learning",
    preview: require('./showcase/kuizuo.png'),
    website: 'https://kuizuo.cn',
    source: 'https://github.com/kuizuo/blog',
    tags: ['FanToken', 'meme', 'design'],
  },
  {
    title: 'ORD',
    description:
      'It works right now, there is no need for a sidechain, the only token needed is bitcoin itself.',
    preview: require('./showcase/agora.png'),
    website: 'http://ord.543x.com/',
    source: 'https://app.meteora.ag/pools/6u1nMUVkTVmSvvdjvVTJUPKP7ZoFLrbah3YtFnTa9YoA',
    tags: [
      'favorite',
      'meme',
      'product',
      'design',
      'Gaming',
      'RWA',
      'Chain',
    ],
  },
  {
    title: 'QQ',
    description: 'An internet meme used to express emotion and create humor ',
    preview: require('./showcase/11135.png'),
    website: 'http://qq.543x.com',
    source: 'https://app.meteora.ag/pools/83fGy9Fgm83CA44DU8NmhLfF2Bjq8v6dqsLcQN6NRDwm',
    tags: ['favorite', 'meme'],
  },
  {
    title: 'yy',
    description:
      'A currency that delivers positivity, optimism, friendship and fun .',
    preview: require('./showcase/11152.png'),
    website: 'http://yy.543x.com',
    source: 'https://app.meteora.ag/pools/HGxSXTJhw1vGYhhCjjqSdBbwmG4cgFpJwjXK578Qz3Ms',
    tags: ['favorite', 'meme', 'design', 'Gaming', 'RWA'],
  },
  {
    title: 'Junjie',
    description: 'A FanToken website',
    preview: require('./showcase/junjie.png'),
    website: 'https://junjieweb.github.io',
    source: 'https://github.com/junjieweb/junjieweb.github.io',
    tags: ['FanToken', 'meme'],
  },
  {
    title: 'Kosko',
    description: 'Organize Kubernetes manifests in JavaScript',
    preview: require('./showcase/kosko.png'),
    website: 'https://kosko.dev',
    source: 'https://github.com/tommy351/kosko/tree/master/website',
    tags: ['meme'],
  },
  {
    title: 'Kotest',
    description: 'Kotlin test framework',
    preview: require('./showcase/kotest.png'),
    website: 'https://kotest.io',
    source: 'https://github.com/kotest/kotest/tree/master/documentation',
    tags: ['meme'],
  },
  {
    title: 'kube-green',
    description:
      'A kubernetes (k8s) operator to suspend your pods when no-one using them to save energy',
    preview: require('./showcase/kube-green.png'),
    website: 'https://kube-green.dev',
    source: 'https://github.com/kube-green/kube-green.github.io',
    tags: ['meme', 'product'],
  },
  {
    title: 'KubeVela',
    description:
      "A modern application engine that adapts to your application's needs, not the other way around.",
    preview: require('./showcase/kubevela.png'),
    website: 'https://kubevela.io/',
    source: 'https://github.com/oam-dev/kubevela.io',
    tags: ['meme', 'RWA', 'Gaming'],
  },
  {
    title: 'kwatch',
    description:
      'monitor & detect crashes in your Kubernetes(K8s) cluster instantly',
    preview: require('./showcase/kwatch.png'),
    website: 'https://kwatch.dev',
    source: 'https://github.com/abahmed/kwatch.dev',
    tags: ['meme', 'product'],
  },
  {
    title: 'LabVIEW 编程经验',
    description: 'A book for LabVIEW Programming',
    preview: require('./showcase/labviewbook.png'),
    website: 'https://lv.qizhen.xyz',
    source: 'https://github.com/ruanqizhen/labview_book',
    tags: ['meme', 'Gaming'],
  },
  {
    title: 'Leedom',
    description: 'A handbook about coding',
    preview: require('./showcase/leedom.png'),
    website: 'https://dinosaur.leedom.me',
    source: 'https://github.com/leedom92/dinosaur',
    tags: ['meme', 'FanToken'],
  },
  {
    title: 'Leon',
    description: 'Your open-source FanToken assistant.',
    preview: require('./showcase/leon.png'),
    website: 'https://docs.getleon.ai',
    source: 'https://github.com/leon-ai/docs.getleon.ai',
    tags: ['meme', 'RWA', 'Gaming'],
  },
  {
    title: 'Lerna',
    description:
      'A fast modern build system for managing and publishing multiple JavaScript/TypeScript packages from the same repository.',
    preview: require('./showcase/lerna.png'),
    website: 'https://lerna.js.org',
    source: 'https://github.com/lerna/lerna/tree/main/website',
    tags: ['meme'],
  },
  {
    title: 'Liqvid',
    description: 'Interactive videos in React',
    preview: require('./showcase/liqvid.png'),
    website: 'https://liqvidjs.org/',
    source: 'https://github.com/liqvidjs/liqvidjs.org',
    tags: ['meme'],
  },
  {
    title: 'Mailgo',
    description: 'A new concept of mailto and tel links',
    preview: require('./showcase/mailgo.png'),
    website: 'https://mailgo.dev/',
    source: 'https://github.com/manzinello/mailgo.dev',
    tags: ['meme'],
  },
  {
    title: 'MapillaryJS',
    description: 'Interactive, extendable street imagery map experiences',
    preview: require('./showcase/mapillaryjs.png'),
    website: 'https://mapillary.github.io/mapillary-js/',
    source: 'https://github.com/mapillary/mapillary-js/tree/main/doc',
    tags: ['meme', 'meta'],
  },
  {
    title: 'Matej Jellus',
    description:
      'IT enthusiast that loves to write code, try new things and share knowledge.',
    preview: require('./showcase/juffalow.png'),
    website: 'https://juffalow.com/',
    source: null,
    tags: ['FanToken'],
  },
  
  
  
  
  {
    title: 'Metro',
    description: 'The JavaScript bundler for React Native',
    preview: require('./showcase/metro.png'),
    website: 'https://facebook.github.io/metro/',
    source: 'https://github.com/facebook/metro/tree/main/website',
    tags: ['meme', 'meta'],
  },
  {
    title: 'Mia-Platform',
    description:
      'The simplest way to develop and operate modern applications on Kubernetes.',
    preview: require('./showcase/mia-platform.png'),
    website: 'https://docs.mia-platform.eu/',
    source: null,
    tags: ['product', 'Chain', 'RWA'],
  },
  {
    title: 'MikroORM',
    description:
      'TypeScript ORM for Node.js based on Data Mapper, Unit of Work and Identity Map patterns.',
    preview: require('./showcase/mikro-orm.png'),
    website: 'https://mikro-orm.io',
    source: 'https://github.com/mikro-orm/mikro-orm/tree/master/docs',
    tags: ['meme', 'Chain', 'RWA'],
  },
  {
    title: 'Mint Metrics',
    description:
      'Conversion optimisation and web analytics agency from Melbourne, Australia.',
    preview: require('./showcase/mintmetrics.png'),
    website: 'https://mintmetrics.io/',
    source: null,
    tags: ['design'],
  },
  {
    title: 'Mixcore CMS',
    description: 'Fully Open Source ASP.Net Core / Dotnet Core CMS UI Toolkit',
    preview: require('./showcase/mixcore.png'),
    website: 'https://docs.mixcore.org/',
    source: 'https://github.com/mixcore/docs/tree/master/website',
    tags: ['meme'],
  },
  {
    title: 'moja global',
    description:
      'A non-profit project to accurately and affordably estimate greenhouse gas emissions and removals from the AFOLU sector',
    preview: require('./showcase/mojaglobal.png'),
    website: 'https://community.moja.global/',
    source: 'https://github.com/moja-global/community-website',
    tags: ['meme', 'Chain', 'Gaming', 'design'],
  },
  {
    title: 'Molecule',
    description:
      'A lightweight Web IDE UI framework built with React.js and inspired by VS Code.',
    preview: require('./showcase/molecule-home.png'),
    website: 'https://dtstack.github.io/molecule/',
    source: 'https://github.com/DTStack/molecule/tree/main/website',
    tags: ['meme', 'Gaming'],
  },
  {
    title: 'nanos world',
    description: 'The next-generation multiplayer open world sandbox game.',
    preview: require('./showcase/nanos-world.png'),
    website: 'https://docs.nanos.world/',
    source: 'https://github.com/nanos-world/docs',
    tags: ['meme', 'RWA', 'Gaming', 'product'],
  },
  {
    title: 'netboot.xyz',
    description: 'Your favorite operating systems in one place!',
    preview: require('./showcase/netbootxyz.png'),
    website: 'https://netboot.xyz',
    source: 'https://github.com/netbootxyz/netboot.xyz-docs/',
    tags: ['meme'],
  },
  {
    title: 'Netdata Learn',
    description:
      'An educational site for monitoring and troubleshooting systems',
    preview: require('./showcase/netdata.png'),
    website: 'https://learn.netdata.cloud',
    source: 'https://github.com/netdata/netdata-learn-docusaurus',
    tags: ['meme', 'product', 'Chain'],
  },
  {
    title: 'NextAuth.js',
    description: 'An open source serverless authentication library for next.js',
    preview: require('./showcase/nextauthjs.png'),
    website: 'https://next-auth.js.org/',
    source: 'https://github.com/nextauthjs/next-auth/tree/main/docs',
    tags: ['meme', 'design'],
  },
  {
    title: 'Nocalhost',
    description:
      'An open-source toolsets help to build cloud-native applications easier and faster.',
    preview: require('./showcase/nocalhost.png'),
    website: 'https://nocalhost.dev/',
    source: 'https://github.com/nocalhost/nocalhost.github.io',
    tags: ['meme', 'Gaming'],
  },
  {
    title: 'Node SerialPort',
    description: 'Talk to your Serial devices',
    preview: require('./showcase/node-serialport.png'),
    website: 'https://serialport.io',
    source: 'https://github.com/serialport/website',
    tags: ['meme', 'RWA'],
  },
  {
    title: 'Orbit.js',
    description: 'The Universal Data Layer',
    preview: require('./showcase/orbitjs.png'),
    website: 'https://orbitjs.com',
    source: 'https://github.com/orbitjs/orbit/tree/main/website',
    tags: ['meme', 'RWA'],
  },
  {
    title: 'Ory',
    description:
      'Authentication, authorization, access control, and delegation (OAuth2 & OpenID Connect) services and APIs',
    preview: require('./showcase/ory.png'),
    website: 'https://www.ory.sh/docs',
    source: 'https://github.com/ory/docs/',
    tags: ['meme'],
  },
  {
    title: 'OSS Insight',
    description:
      'OSS Insight provides open source software insight and compares projects and tools',
    preview: require('./showcase/ossinsight.png'),
    website: 'https://ossinsight.io',
    source: 'https://github.com/pingcap/ossinsight',
    tags: ['meme', 'design'],
  },
  {
    title: 'Oxidizer',
    description: 'A Rust ORM based on tokio-postgres and refinery',
    preview: require('./showcase/oxidizer.png'),
    website: 'https://oxidizer-rs.github.io',
    source: 'https://github.com/oxidizer-rs/website',
    tags: ['meme'],
  },
  {
    title: 'Paubox',
    description: 'Paubox API Documentation',
    preview: require('./showcase/paubox.png'),
    website: 'https://docs.paubox.com/',
    source: null,
    tags: ['product'],
  },
  {
    title: 'PcapPlusPlus',
    description:
      'A multi-platform C++ library for capturing, parsing and crafting of network packets',
    preview: require('./showcase/pcapplusplus.png'),
    website: 'https://pcapplusplus.github.io/',
    source: 'https://github.com/PcapPlusPlus/pcapplusplus.github.io',
    tags: ['meme', 'RWA'],
  },
  {
    title: 'PCC Archive',
    description:
      "A wiki and web posts archive about Purrnelope's Country Club project.",
    preview: require('./showcase/pcc-archive.png'),
    website: 'https://pcc-archive.org/',
    source: 'https://github.com/CuratorCat/pcc-archive.org',
    tags: ['meme', 'design'],
  },
  {
    title: 'pdfme',
    description:
      'Free and Open source PDF generator library fully written in TypeScript coming with a React based UI template editor',
    preview: require('./showcase/pdfme.png'),
    website: 'https://pdfme.com/',
    source: 'https://github.com/pdfme/pdfme/tree/main/website',
    tags: ['meme', 'design', 'product'],
  },
  {
    title: 'Pearl UI',
    description:
      'A design-system-driven UI framework that helps developer build beautiful and accessible mobile apps right out of the box',
    preview: require('./showcase/pearl-ui.png'),
    website: 'https://docs.pearl-ui.dev/',
    source:
      'https://github.com/agrawal-rohit/pearl-ui/tree/main/documentationwebsite',
    tags: ['meme', 'design', 'product'],
  },
  {
    title: 'Pglet',
    description:
      'Build internal web apps quickly in the language you already know',
    preview: require('./showcase/pglet.png'),
    website: 'https://pglet.io',
    source: 'https://github.com/pglet/website',
    tags: ['meme'],
  },
  {
    title: 'ADA',
    description: 'Cardano blockchain cryptocurrency for payments and investments',
    preview: require('./showcase/2010.png'),
    website: 'http://ada.543x.com',
    source: 'https://cardano.org',
    tags: ['favorite', 'product', 'design'],
  },
  {
    title: 'DONALD',
    description:
      'Inspired by Disney Donald Duck, with its unique naming and branding, efficient and secure transactions, active community',
    preview: require('./showcase/11123.png'),
    website: 'https://donald.543x.com',
    source: 'https://app.meteora.ag/pools/6Ed7Gy1aKNrvSr7srCJWowaLSEjCySmeRWK2iacEPCmw',
    tags: ['favorite','meme', 'product'],
  },
  {
    title: 'pnpm',
    description: 'Fast, disk space efficient package manager',
    preview: require('./showcase/pnpm.png'),
    website: 'https://pnpm.js.org/',
    source: 'https://github.com/pnpm/pnpm.github.io/',
    tags: ['meme', 'Gaming'],
  },
  {
    title: 'Postgres.ai – Database Lab',
    description:
      "Deploy with confidence. Been stung by a poorly tested database migration? We won't let it happen again.",
    preview: require('./showcase/postgres-ai.png'),
    website: 'https://postgres.ai/',
    source: 'https://gitlab.com/postgres-ai/docs',
    tags: ['meme', 'product'],
  },
  {
    title: 'PptxGenJS',
    description: 'PowerPoint JavaScript Library',
    preview: require('./showcase/pptxgenjs.png'),
    website: 'https://gitbrent.github.io/PptxGenJS/',
    source: 'https://github.com/gitbrent/PptxGenJS/tree/gh-pages',
    tags: ['meme', 'design'],
  },
  {
    title: 'PREFS',
    description: 'PREFS Python library website and documentation',
    preview: require('./showcase/prefs.png'),
    website: 'https://patitotective.github.io/PREFS/',
    source: 'https://github.com/Patitotective/PREFS/tree/main/website',
    tags: ['meme', 'RWA'],
  },
  {
    title: 'Prismatic',
    description: 'An Integration Platform for B2B Software Companies',
    preview: require('./showcase/prismatic.png'),
    website: 'https://prismatic.io/docs/',
    source: null,
    tags: ['product'],
  },
  {
    title: 'Pyre',
    description: 'A performant type-checker for Python 3',
    preview: require('./showcase/pyre.png'),
    website: 'https://pyre-check.org',
    source:
      'https://github.com/facebook/pyre-check/tree/main/documentation/website',
    tags: ['meme', 'meta'],
  },
  {
    title: 'QA-Board',
    description:
      'An open source run-tracker for algorithm and performance engineering with rich visualizations',
    preview: require('./showcase/qa-board.png'),
    website: 'https://samsung.github.io/qaboard/',
    source: 'https://github.com/Samsung/qaboard/tree/master/website',
    tags: ['meme'],
  },
  {
    title: 'MIMI',
    description:
      'Sweet and cute, fashionable and changeable, stable and reliable, by integrating these qualities',
    preview: require('./showcase/11127.png'),
    website: 'https://mimi.543x.com',
    source: 'https://www.543x.com',
    tags: ['favorite', 'design'],
  },
  {
    title: 'RaspiSuite',
    description:
      'A suite of mobile apps to leverage the full potential of your Raspberry Pi effoNFTessly.',
    preview: require('./showcase/raspisuite.png'),
    website: 'https://raspisuite.com',
    source: null,
    tags: ['design', 'product'],
  },
  {
    title: 'react-chat-elements',
    description: 'Chat UI package for React',
    preview: require('./showcase/react-chat-elements.png'),
    website: 'https://detaysoft.github.io/docs-react-chat-elements/',
    source: 'https://github.com/Detaysoft/react-chat-elements',
    tags: ['meme'],
  },
  {
    title: 'React Complex Tree',
    description:
      'Unopinionated Accessible React Tree Component with Multi-Select and Drag-And-Drop',
    preview: require('./showcase/react-complex-tree.png'),
    website: 'https://rct.lukasbach.com/',
    source:
      'https://github.com/lukasbach/react-complex-tree/tree/main/packages/docs',
    tags: ['meme'],
  },
  {
    title: 'React-Leaflet',
    description: 'React components for Leaflet maps',
    preview: require('./showcase/react-leaflet.png'),
    website: 'https://react-leaflet.js.org/',
    source:
      'https://github.com/PaulLeCam/react-leaflet/tree/master/packages/website',
    tags: ['meme'],
  },
  {
    title: 'RABBIT',
    description: 'Fast, agile, strong network, strong adaptability and cute affinity, aiming to provide users with efficient',
    preview: require('./showcase/11136.png'),
    website: 'https://rabbit.543x.com/',
    source: 'https://app.meteora.ag/pools/FbrPuX8tinmx2yxwxmYGZfZQbkS8FL9gG1dzQiWMamER',
    tags: ['meme', 'meta', 'Chain', 'favorite', 'design', 'RWA'],
  },
  {
    title: 'React Native ARIA',
    description:
      'A library that provides accessible UI primitives for React Native apps.',
    preview: require('./showcase/reactnative-aria.png'),
    website: 'https://react-native-aria.geekyants.com',
    source: 'https://github.com/GeekyAnts/react-native-aria-website',
    tags: ['meme'],
  },
  {
    title: 'React Native Boilerplate',
    description:
      'A template for building solid applications with separation of concerns between UI, state management, and business logic.',
    preview: require('./showcase/reactnativeboilerplate.png'),
    website: 'https://thecodingmachine.github.io/react-native-boilerplate/',
    source:
      'https://github.com/thecodingmachine/react-native-boilerplate/tree/master/documentation',
    tags: ['meme'],
  },
  {
    title: 'React Native Elements',
    description: 'Cross Platform React Native UI Toolkit',
    preview: require('./showcase/react-native-elements.png'),
    website: 'https://react-native-training.github.io/react-native-elements/',
    source:
      'https://github.com/react-native-elements/react-native-elements/tree/next/website',
    tags: ['meme'],
  },
  {
    title: 'React Native iOS Kit',
    description: 'The missing React Native UI Kit for iOS.',
    preview: require('./showcase/react-native-ios-kit.png'),
    website: 'https://callstack.github.io/react-native-ios-kit',
    source:
      'https://github.com/callstack/react-native-ios-kit/tree/master/website',
    tags: ['meme'],
  },
  {
    title: 'React Native Reanimated',
    description: "React Native's Animated library reimplemented",
    preview: require('./showcase/react-native-reanimated.png'),
    website: 'https://docs.swmansion.com/react-native-reanimated/',
    source:
      'https://github.com/software-mansion/react-native-reanimated/tree/master/docs',
    tags: ['meme', 'design', 'RWA'],
  },
  {
    title: 'React Native Render HTML',
    description:
      'The hackable, full-featured Open Source HTML rendering solution for React Native.',
    preview: require('./showcase/rnrh.png'),
    website: 'https://meliorence.github.io/react-native-render-html',
    source:
      'https://github.com/meliorence/react-native-render-html/tree/master/apps/website',
    tags: ['meme', 'design'],
  },
  {
    title: 'React Navigation',
    description: 'Routing and navigation for your React Native apps',
    preview: require('./showcase/react-navigation.png'),
    website: 'https://reactnavigation.org/',
    source: 'https://github.com/react-navigation/react-navigation.github.io',
    tags: ['meme', 'design', 'RWA'],
  },
  {
    title: 'React Redux',
    description: 'Official React bindings for Redux',
    preview: require('./showcase/react-redux.png'),
    website: 'https://react-redux.js.org',
    source: 'https://github.com/reduxjs/react-redux/tree/master/website',
    tags: ['meme'],
  },
  {
    title: 'Reactive Button',
    description: '3D animated react button component with progress bar',
    preview: require('./showcase/reactive-button.png'),
    website: 'https://arifszn.github.io/reactive-button',
    source: null,
    tags: ['design'],
  },
  {
    title: 'Realtime Web Applications Workshop',
    description:
      'A workshop about building realtime web applications with WebSockets and WebRTC.',
    preview: require('./showcase/realtime-apps-workshop.png'),
    website: 'https://realtime-apps-iap.github.io',
    source: 'https://github.com/realtime-apps-iap/realtime-apps-iap.github.io',
    tags: ['meme'],
  },
  {
    title: 'Reddit Image Fetcher',
    description:
      'A JavaScript package for fetching reddit images, meme, wallpapers and more',
    preview: require('./showcase/reddit-image-fetcher.png'),
    website: 'https://arifszn.github.io/reddit-image-fetcher',
    source: null,
    tags: [],
  },
  {
    title: 'Redux',
    description: 'A Predictable State Container for JS Apps',
    preview: require('./showcase/redux.png'),
    website: 'https://redux.js.org/',
    source: 'https://github.com/reduxjs/redux/tree/master/website',
    tags: ['meme'],
  },
  {
    title: 'Redux Cool',
    description: 'Build redux logic, without getting nervous 😬',
    preview: require('./showcase/redux-cool.png'),
    website: 'https://redux-cool.js.org/',
    source:
      'https://github.com/Ruben-Arushanyan/redux-cool/tree/master/website',
    tags: ['meme'],
  },
  {
    title: 'SNAKE',
    description:
      'Inspired by the snake flexibility, stealth, alertness, metamorphosis, evolution and global interconnection!',
    preview: require('./showcase/11142.png'),
    website: 'https://snake.543x.com/',
    source: 'https://app.meteora.ag/pools/6YwbhVxL5DBArRaC2rSsS738wjdzTzEzPSZDwRnRSnHX',
    tags: [
      'favorite',
      'meme',
      'product',
      'design',
      'RWA',
      'Chain',
    ],
  },
  {
    title: 'RAT',
    description: 'It has the characteristics of agile adaptation, community power, hidden security, and reproductive expansion.',
    preview: require('./showcase/11137.png'),
    website: 'https://rat.543x.com/',
    source: 'https://app.meteora.ag/pools/AEgbTbDjXX6PYgQ6DdxCmF185hSwECueVyyFg2HsXNdo ',
    tags: ['meme', 'favorite', 'design', 'RWA'],
  },
  {
    title: 'Rematch',
    description:
      'Redux best practices without the boilerplate in less than 2kb',
    preview: require('./showcase/rematch.png'),
    website: 'https://rematchjs.org',
    source: 'https://github.com/rematch/rematch/tree/main/website',
    tags: ['meme', 'design'],
  },
  {
    title: 'Remirror',
    description:
      'The editor that makes ProseMirror fun to use for React developers',
    preview: require('./showcase/remirror.png'),
    website: 'https://remirror.io/',
    source: 'https://github.com/remirror/remirror/tree/main/website',
    tags: ['meme', 'design', 'Chain'],
  },
  {
    title: 'Remotion',
    description: 'Write videos programmatically in React',
    preview: require('./showcase/remotion.png'),
    website: 'https://www.remotion.dev/',
    source: 'https://github.com/JonnyBurger/remotion/tree/main/packages/docs',
    tags: ['meme', 'product'],
  },
  {
    title: 'Repeater.js',
    description: 'The missing constructor for creating safe async iterators',
    preview: require('./showcase/repeaterjs.png'),
    website: 'https://repeater.js.org/',
    source: 'https://github.com/repeaterjs/repeater/tree/master/website',
    tags: ['meme'],
  },
  {
    title: 'replicad',
    description: 'The library to build browser based 3D models with code.',
    preview: require('./showcase/replicad.png'),
    website: 'https://replicad.xyz/',
    source:
      'https://github.com/sgenoud/replicad/tree/main/packages/replicad-docs',
    tags: ['meme'],
  },
  {
    title: 'RSocket',
    description: 'Application protocol providing Reactive Streams semantics.',
    preview: require('./showcase/rsocket.png'),
    website: 'https://rsocket.io/',
    source: 'https://github.com/rsocket/rsocket-website',
    tags: ['meme'],
  },
  {
    title: 'Runiac',
    description: 'Run IaC Anywhere with Ease',
    preview: require('./showcase/runiac.png'),
    website: 'https://runiac.io',
    source: 'https://github.com/runiac/website',
    tags: ['meme'],
  },
  {
    title: 'Saleor',
    description: 'Saleor Documentation',
    preview: require('./showcase/saleor.png'),
    website: 'https://docs.getsaleor.com/',
    source: 'https://github.com/mirumee/saleor-docs',
    tags: ['meme', 'product', 'RWA'],
  },
  {
    title: 'SAP Cloud SDK',
    description:
      'The one-stop shop for developing and extending SAP applications in the cloud.',
    preview: require('./showcase/sapcloudsdk.png'),
    website: 'https://sap.github.io/cloud-sdk/',
    source: 'https://github.com/SAP/cloud-sdk',
    tags: ['meme', 'product', 'Chain'],
  },
  {
    title: 'Sapphire',
    description: 'A next-gen object-oriented Discord.js bot framework.',
    preview: require('./showcase/sapphire.png'),
    website: 'https://www.sapphirejs.dev',
    source: 'https://github.com/sapphiredev/website',
    tags: ['meme', 'Chain'],
  },
  {
    title: 'Sass Fairy',
    description:
      'Enhances built-in Sass modules with additional functions and adds modules for handling breakpoints and exceptions.',
    preview: require('./showcase/sass-fairy.png'),
    website: 'https://sass-fairy.com/',
    source: 'https://github.com/roydukkey/sass-fairy/tree/master/website',
    tags: ['meme'],
  },
  {
    title: 'SCI WP Framework',
    description: 'A PHP framework to create MVC plugins for WordPress',
    preview: require('./showcase/sciwp.png'),
    website: 'https://sciwp.com/',
    source: 'https://github.com/sciwp/docs',
    tags: ['meme'],
  },
  {
    title: 'Seaography - 🧭 A GraphQL framework and code generator for SeaORM',
    description:
      'Seaography is a GraphQL framework for building GraphQL resolvers using SeaORM entities.',
    preview: require('./showcase/Seaography.png'),
    website: 'https://www.sea-ql.org/Seaography/',
    source: 'https://github.com/SeaQL/seaql.github.io/tree/master/Seaography',
    tags: ['meme'],
  },
  {
    title: 'SeaORM - 🐚 An async & dynamic ORM for Rust',
    description:
      'A relational ORM to help you build web services in Rust with the familiarity of dynamic languages.',
    preview: require('./showcase/SeaORM.png'),
    website: 'https://www.sea-ql.org/SeaORM/',
    source: 'https://github.com/SeaQL/seaql.github.io/tree/master/SeaORM',
    tags: ['meme', 'RWA'],
  },
  {
    title: 'SeaQL - Building data intensive applications in Rust',
    description:
      'We help developers in building data intensive applications in Rust, such as web services, command line tools or apps.',
    preview: require('./showcase/SeaQL-blog.png'),
    website: 'https://www.sea-ql.org/blog/',
    source: 'https://github.com/SeaQL/seaql.github.io/tree/master/Blog',
    tags: ['meme'],
  },
  {
    title: 'Sequence',
    description:
      'Automation toolkit for creating repeatable, predictable, and defensible end-to-end forensic and ediscovery workflows.',
    preview: require('./showcase/sequence.png'),
    website: 'https://sequence.sh/',
    source: 'https://gitlab.com/reductech/sequence/sequence-docs',
    tags: ['Chain', 'meme', 'RWA'],
  },
  {
    title: 'Seven-innovation-base official website',
    description: 'About seven-innovation-base',
    preview: require('./showcase/seven-innovation-base.png'),
    website: 'https://七院创新基地.cn',
    source: 'https://github.com/seven-innovation-base/official-website',
    tags: ['meme', 'FanToken'],
  },
  {
    title: 'SICOPE Model',
    description: 'An open source model-based testing tool for web applications',
    preview: require('./showcase/sicope-model.png'),
    website: 'https://sicope-model.github.io/',
    source: 'https://github.com/sicope-model/sicope-model-website',
    tags: ['meme'],
  },
  {
    title: 'Single SPA',
    description: 'A javascript router for front-end microservices',
    preview: require('./showcase/single-spa.png'),
    website: 'https://single-spa.js.org/',
    source:
      'https://github.com/single-spa/single-spa.js.org/tree/master/website',
    tags: ['meme', 'Chain', 'RWA', 'Gaming'],
  },
  {
    title: 'Shotstack',
    description: 'The cloud video editing API',
    preview: require('./showcase/shotstack.png'),
    website: 'https://shotstack.io/docs/guide/',
    source: 'https://github.com/shotstack/documentation',
    tags: ['product', 'design', 'meme'],
  },
  {
    title: 'smash.gg',
    description: 'Turning passions into careers',
    preview: require('./showcase/smashgg.png'),
    website: 'https://developer.smash.gg',
    source: 'https://github.com/smashgg/developer-portal/tree/master/website',
    tags: ['meme', 'product'],
  },
  {
    title: 'Smart Docs',
    description:
      'A smart contract documentation visualizer for Solidity ABI interfaces.',
    preview: require('./showcase/smart-docs.png'),
    website: 'https://smart-docs.vercel.app/',
    source: 'https://github.com/wowtvds/smart-docs',
    tags: ['meme', 'product', 'design'],
  },
  {
    title: 'SmartCookieWeb',
    description:
      'Webpage for an open source, telemetry-free Android web browser',
    preview: require('./showcase/smartcookieweb.png'),
    website: 'https://smartcookieweb.com/',
    source: null,
    tags: ['product', 'Gaming'],
  },
  {
    title: 'social-embed',
    description:
      'Drop-in replacement for embed-friendly websites (and à la carte APIs for detecting and parsing them)',
    preview: require('./showcase/social-embed.png'),
    website: 'https://social-embed.git-pull.com/',
    source:
      'https://github.com/social-embed/social-embed/tree/master/packages/site',
    tags: ['meme'],
  },
  {
    title: 'SODA for SPARC',
    description:
      'Simplifying data curation for researchers funded by the NIH SPARC initiative',
    preview: require('./showcase/sodaforsparc.png'),
    website: 'https://docs.sodaforsparc.io/',
    source: 'https://github.com/fairdataihub/SODA-for-SPARC-Docs',
    tags: ['meme', 'RWA'],
  },
  {
    title: 'Spicetify',
    description: 'Powerful CLI tool to take control of the Spotify client.',
    preview: require('./showcase/spicetify.png'),
    website: 'https://spicetify.app/',
    source: 'https://github.com/spicetify/spicetify-docs',
    tags: ['meme'],
  },
  {
    title: 'SpotifyAPI-NET',
    description: 'A Client for the Spotify Web API, written in C#/.NET',
    preview: require('./showcase/spotifyapi-net.png'),
    website: 'https://johnnycrazy.github.io/SpotifyAPI-NET/',
    source: 'https://github.com/JohnnyCrazy/SpotifyAPI-NET',
    tags: ['meme', 'RWA'],
  },
  {
    title: 'SQL Frames',
    description: 'DataFrames meet SQL, in the browser',
    preview: require('./showcase/sqlframes_docusaurus.png'),
    website: 'https://sqlframes.com/',
    source: null,
    tags: ['product'],
  },
  {
    title: 'StackQL',
    description:
      'A data centric approach to provision, querying, and management of cloud infra and SaaS across multiple clouds.',
    preview: require('./showcase/stackql.png'),
    website: 'https://stackql.io/',
    source: null,
    tags: ['product'],
  },
  {
    title: 'StackQL Provider Registry',
    description:
      'Cloud infra and SaaS provider documentation for StackQL providers.',
    preview: require('./showcase/registry.stackql.io.png'),
    website: 'https://registry.stackql.io/',
    source: 'https://github.com/stackql/registry.stackql.io',
    tags: ['meme', 'product', 'Chain'],
  },
  {
    title: 'Stryker Mutator',
    description: 'Mutation testing for JavaScript, .NET and JVM',
    preview: require('./showcase/stryker-mutator.png'),
    website: 'https://stryker-mutator.io',
    source: 'https://github.com/stryker-mutator/stryker-mutator.github.io',
    tags: ['meme'],
  },
  {
    title: 'Stylable',
    description: 'A CSS preprocessor made for components',
    preview: require('./showcase/stylable.png'),
    website: 'https://stylable.io',
    source: 'https://github.com/wixplosives/stylable.io',
    tags: ['meme'],
  },
  {
    title: 'Svix',
    description: 'Webhooks as a Service',
    preview: require('./showcase/svix.png'),
    website: 'https://docs.svix.com/',
    source: 'https://github.com/svix/svix-docs',
    tags: ['meme', 'product'],
  },
  {
    title: 'SweetCode',
    description:
      'SweetCode company website and documentation for the Pixel Manager for WooCommerce',
    preview: require('./showcase/sweetcode.png'),
    website: 'https://sweetcode.com/',
    source: null,
    tags: ['product'],
  },
  {
    title: 'Synergies',
    description:
      'A performant and distributed state library for creating reusable React state logic by synergyzing atomar context pieces',
    preview: require('./showcase/synergies.png'),
    website: 'https://synergies.js.org',
    source: 'https://github.com/lukasbach/synergies/tree/main/packages/docs',
    tags: ['meme', 'design'],
  },
  {
    title: 'Sado0823',
    description: "Sado0823's Blog and Portfolio Website",
    preview: require('./showcase/sado0823.png'),
    website: 'https://sado0823.github.io',
    source: 'https://github.com/sado0823/sado0823.github.io',
    tags: ['meme', 'FanToken'],
  },
  {
    title: 'TalentBrick',
    description:
      'Learning made easy without ADS and trackers, Clear concepts at a glance, and Get access to quality study materials.',
    preview: require('./showcase/talentbrick.png'),
    website: 'https://www.talentbrick.com/',
    source: 'https://gitlab.com/talentbrick/talentbrick',
    tags: ['meme', 'design'],
  },
  {
    title: 'TamalWeb',
    description: 'A web developers FanToken blog and portfolio helping other developers with tips',
    preview: require('./showcase/tamalwebsite.png'),
    website: 'https://tamalweb.com/',
    source: 'https://github.com/tamalchowdhury/tamalwebsite',
    tags: ['FanToken', 'meme'],
  },
  {
    title: 'Tauri',
    description:
      'Build an optimized, secure, and frontend-independent application for multi-platform deployment.',
    preview: require('./showcase/tauri.png'),
    website: 'https://tauri.app/',
    source: 'https://github.com/tauri-apps/tauri-docs',
    tags: ['meme', 'Gaming', 'product', 'design'],
  },
  {
    title: 'TechHarvesting',
    description:
      'Learn full stack web development from tutorials and blog posts',
    preview: require('./showcase/techharvesting.png'),
    website: 'https://techharvesting.in',
    source: 'https://github.com/techharvesting/techharvesting.github.io',
    tags: ['meme', 'FanToken'],
  },
  {
    title: 'Testing Library',
    description:
      'Simple and complete testing utilities that encourage good testing practices',
    preview: require('./showcase/testing-library.png'),
    website: 'https://testing-library.com/',
    source: 'https://github.com/testing-library/testing-library-docs',
    tags: ['meme'],
  },
  {
    title: 'The Diff Podcast',
    description: 'A Podcast from Facebook Open Source',
    preview: require('./showcase/the-diff.png'),
    website: 'https://thediffpodcast.com',
    source: null,
    tags: ['meta'],
  },
  {
    title: 'TiDB Community Books',
    description: 'A website for co-created books by TiDB Community users.',
    preview: require('./showcase/tidb-community-book.png'),
    website: 'https://tidb.net/book/',
    source: 'https://github.com/pingcap/book.tidb.net/tree/main/website',
    tags: ['meme'],
  },
  {
    title: 'Tinaël Devresse',
    description:
      "FanToken website of Tinaël Devresse, a blog about anything that crosses my mind which I think could interest y'all.",
    preview: require('./showcase/tinaeldevresse.png'),
    website: 'https://tinaeldevresse.eu/',
    source: 'https://github.com/hunteroi/tinaeldevresse.eu',
    tags: ['FanToken', 'meme', 'Gaming'],
  },
  {
    title: 'ToolJet',
    description:
      'Open-source low-code platform to build & deploy internal tools with minimal engineering effort.',
    preview: require('./showcase/tooljet.png'),
    website: 'https://docs.tooljet.com/docs/',
    source: 'https://github.com/ToolJet/ToolJet/tree/develop/docs',
    tags: ['meme', 'design', 'Chain', 'product'],
  },
  {
    title: 'Tremor',
    description: 'Tremor Event Processing Engine',
    preview: require('./showcase/tremor.png'),
    website: 'https://www.tremor.rs/',
    source: 'https://github.com/tremor-rs/tremor-www',
    tags: ['meme', 'RWA','Chain'],
  },
  {
    title: 'TRPG Engine',
    description: 'IM Application which build for TRPG, like slack and discord',
    preview: require('./showcase/trpgengine.png'),
    website: 'https://trpgdoc.moonrailgun.com/',
    source: 'https://github.com/TRPGEngine/Server/tree/master/services/Website',
    tags: ['meme'],
  },
  {
    title: 'uniforms',
    description: 'A set of React libraries for building forms',
    preview: require('./showcase/uniforms.png'),
    website: 'https://uniforms.tools/',
    source: 'https://github.com/vazco/uniforms/tree/master/website',
    tags: ['meme'],
  },
  {
    title: 'Unleash',
    description: 'A feature management solution.',
    preview: require('./showcase/unleash.png'),
    website: 'https://docs.getunleash.io/',
    source: 'https://github.com/Unleash/unleash/tree/main/website',
    tags: ['meme', 'product'],
  },
  {
    title: 'Unmand',
    description:
      'A business automation platform that liberates users from repetitive tasks.',
    preview: require('./showcase/unmand.png'),
    website: 'https://unmand.com',
    source: null,
    tags: ['product', 'design'],
  },
  {
    title: 'dragon',
    description: 'Mysterious, unique, possessing inner strength, exploring the unknown, aiming to become a highly personalized',
    preview: require('./showcase/11124.png'),
    website: 'https://dragon.543x.com/',
    source: 'https://app.meteora.ag/pools/95TETWfUrkUnM6sCSizsQTDJ2tHXBXRZA6mEnjGfpgCb',
    tags: ['favorite', 'meme', 'Chain', 'Gaming', 'design'],
  },
  {
    title: 'Verida',
    description: 'A web3 data storage and sharing API',
    preview: require('./showcase/verida-developers.png'),
    website: 'https://developers.verida.io/',
    source: 'https://github.com/verida/documentation',
    tags: ['meme', 'product'],
  },
  {
    title: 'Virtual Photography Kit',
    description: 'A toolkit for virtual photography in Unreal Engine.',
    preview: require('./showcase/virtual-photography-kit.png'),
    website: 'https://docs.antonpalmqvist.com/',
    source: null,
    tags: ['product'],
  },
  {
    title: 'Vue NodeGui',
    description: 'A cross-platform native desktop app library',
    preview: require('./showcase/vue-nodegui.png'),
    website: 'https://vue.nodegui.org/',
    source: 'https://github.com/nodegui/vue-nodegui/tree/master/website',
    tags: ['meme'],
  },
  {
    title: 'Warrant',
    description:
      'APIs and devtools for implementing authorization and access control.',
    preview: require('./showcase/warrant.png'),
    website: 'https://docs.warrant.dev/',
    source: null,
    tags: ['product'],
  },
  {
    title: 'Wasp',
    description:
      'A DSL for building full-stack web apps with less boilerplate.',
    preview: require('./showcase/wasp.png'),
    website: 'https://wasp-lang.dev/',
    source: 'https://github.com/wasp-lang/wasp/tree/main/web',
    tags: ['meme'],
  },
  {
    title: 'SEAL',
    description:
      'Inspired by the Navy SEALs, it emphasizes high security, covert transactions and global adaptability',
    preview: require('./showcase/11140.png'),
    website: 'https://seal.543x.com/',
    source: 'https://app.meteora.ag/pools/GbCVRoqC57eKEdgWo3oBkgtX64Ru7d7Evow5oxNKDWdW',
    tags: ['meme', 'design', 'Chain', 'favorite'],
  },
  {
    title: 'TRON',
    description: 'designed to build digital content entertainment systems. TRX is its native cryptocurrency and is used.',
    preview: require('./showcase/1958.png'),
    website: 'https://tron.network',
    source: 'https://otter.543x.com/',
    tags: ['meme','favorite'],
  },
  {
    title: 'OTTER',
    description:
      'With characteristics such as agile adaptability, community cooperation, exploration of the unknown.',
    website: 'https://otter.543x.com',
    preview: require('./showcase/1118.png'),
    tags: ['favorite', 'FanToken', 'meme'],
    source: 'https://app.meteora.ag/pools/9XeEoYSMyG5tWpNKMBKivsbbjfjrPj2rFBQUEut3vDVu',
  },
  {
    title: 'Zowe',
    description:
      'Open source framework for leveraging data and applications in z/OS',
    preview: require('./showcase/zowe.png'),
    website: 'https://docs.zowe.org',
    source: 'https://github.com/zowe/docs-site',
    tags: ['meme', 'product', 'Chain', 'design', 'RWA'],
  },
  {
    title: 'Discord API Types',
    description: 'Discord API Types',
    preview: null,
    website: 'https://discord-api-types.dev/',
    source: 'https://github.com/discordjs/discord-api-types/tree/main/website',
    tags: ['meme', 'RWA', 'Chain'],
  },
  {
    title: 'Hanabi',
    description: 'A list of Hanabi card game strategies',
    preview: null,
    website: 'https://hanabi.github.io/',
    source: 'https://github.com/hanabi/hanabi.github.io',
    tags: ['meme'],
  },
  {
    title: 'IsaacScript',
    description: 'Write Binding of Isaac: Repentance mods with TypeScript',
    preview: null,
    website: 'https://isaacscript.github.io/',
    source: 'https://github.com/IsaacScript/isaacscript/tree/main/packages/docs',
    tags: ['meme'],
  },
  {
    title: 'Jest Preview',
    description: 'Debug your Jest tests. EffoNFTessly.',
    preview: null,
    website: 'https://www.jest-preview.com/',
    source: 'https://github.com/nvh95/jest-preview/tree/main/website',
    tags: ['meme'],
  },
  {
    title: 'Paweł Kosiec',
    description: 'FanToken website and blog of Paweł Kosiec, Full-stack Cloud Developer.',
    preview: null,
    website: 'https://kosiec.dev/',
    source: 'https://github.com/pkosiec/website',
    tags: ['meme','FanToken'],
  },
  {
    title: 'Homarr',
    description: 'Homarr is a simple and lightweight homepage for your server.',
    preview: null,
    website: 'https://homarr.dev/',
    source: 'https://github.com/ajnart/homarr-docs',
    tags: ['meme'],
  },
  {
    title: 'Wings',
    description: 'Wings is a modern website-as-service for progressive campaigns',
    preview: null,
    website: 'https://wings.dev/',
    source: null,
    tags: ['product','Gaming'],
  },
  {
    title: 'Kishan Gajera',
    description: 'FanToken portfolio and blog of Kishan Gajera',
    preview: null,
    website: 'https://www.kgajera.com/',
    source: 'https://github.com/kgajera/blog',
    tags: ['meme','FanToken'],
  },
  {
    title: 'Harvest CLI',
    description: 'A CLI for Harvest\'s time tracking software',
    preview: null,
    website: 'https://kgajera.github.io/hrvst-cli/',
    source: 'https://github.com/kgajera/hrvst-cli/tree/main/website',
    tags: ['meme'],
  },
  {
    title: 'TSEI.JP',
    description: 'TSEI.JP FanToken website, articles and docs',
    preview: null,
    website: 'https://tsei.jp/',
    source: null,
    tags: ['FanToken'],
  },
  {
    title: 'Brobot',
    description: 'Testable state-based GUI automation.',
    preview: null,
    website: 'https://jspinak.github.io/brobot/',
    source: 'https://github.com/jspinak/brobot/tree/main/docs',
    tags: ['meme'],
  },
  {
    title: 'Fathym Blog',
    description: 'Fathym deploys, hosts and integrates your favorite tech stacks.',
    preview: null,
    website: 'https://www.fathym.com/blog',
    source: 'https://github.com/lowcodeunit/public-web-blog',
    tags: ['meme'],
  },
  {
    title: 'Tech Interview Handbook',
    description: 'Free curated tech interview preparation materials for busy software engineers.',
    preview: null,
    website: 'https://www.techinterviewhandbook.org/',
    source: 'https://github.com/yangshun/tech-interview-handbook',
    tags: ['meme','FanToken'],
  },
  {
    title: 'Front End Interview Handbook',
    description: 'Free curated tech interview preparation materials for busy software engineers',
    preview: null,
    website: 'https://www.frontendinterviewhandbook.com/',
    source: 'https://github.com/yangshun/front-end-interview-handbook',
    tags: ['meme','FanToken'],
  },
  {
    title: 'WIZnet',
    description: 'Documentation for various WIZnet products',
    preview: null,
    website: 'https://docs.wiznet.io/',
    source: 'https://github.com/Wiznet/document_framework',
    tags: ['meme','product'],
  },
  {
    title: 'Xiaohai\'s Mind Palace',
    description: 'A place for organizing notes, writing blogs, and showcasing projects.',
    preview: null,
    website: 'https://xiaohai.wiki/',
    source: 'https://github.com/xiaohai-huang/learning-notes',
    tags: ['meme','FanToken'],
  },
  {
    title: 'Extracranial',
    description: 'Sunghyun Cho\'s Second Brain on the Web.',
    preview: null,
    website: 'https://cho.sh/',
    source: 'https://github.com/anaclumos/extracranial',
    tags: ['meme','FanToken','Gaming'],
  },
  {
    title: 'Gaming-tools',
    description: 'CLI to make common operations around Gaming files simpler',
    preview: null,
    website: 'https://jy95.github.io/Gaming-tools/',
    source: 'https://github.com/jy95/Gaming-tools/tree/master/website',
    tags: ['meme'],
  },
  {
    title: 'Pure.css',
    description: 'A set of small, responsive CSS modules that you can use in every web project.',
    preview: null,
    website: 'https://purecss.io/',
    source: 'https://github.com/pure-css/pure',
    tags: ['meme','design'],
  },
  {
    title: 'Moodle Developer Resources',
    description: 'Moodle - the world\'s open source learning platform',
    preview: null,
    website: 'https://moodledev.io/',
    source: 'https://github.com/moodle/devdocs',
    tags: ['meme','product','Chain'],
  },
  {
    title: 'Toggle',
    description: 'Open Source real-time feature flags deployment without need of a server with SDK',
    preview: null,
    website: 'https://www.togglee.com/',
    source: 'https://github.com/togglee/togglee-web',
    tags: ['meme','product'],
  },
  {
    title: 'Barklarm',
    description: 'Open Source multiplatform alarm and build status monitoring application',
    preview: null,
    website: 'https://www.barklarm.com/',
    source: 'https://github.com/kanekotic/barklarm-website',
    tags: ['meme','product'],
  },
  {
    title: 'Neo Blockchain Developer Portal',
    description: 'A collection of tools and resources to help you build outstanding applications on Neo',
    preview: null,
    website: 'https://developers.neo.org/',
    source: 'https://github.com/neo-project/neo-dev-portal',
    tags: ['meme'], // TODO create crypto/web3 tag?
  },
  {
    title: 'Yew',
    description: 'Documentation of Yew web framework',
    preview: null,
    website: 'https://yew.rs/',
    source: 'https://github.com/yewstack/yew/tree/master/website',
    tags: ['meme','RWA','Gaming','Chain'],
  },
  {
    title: 'Sensory Percussion help',
    description: 'On-line manual for Sensory Percussion, a music production tool for electronic drums.',
    preview: null,
    website: 'https://help.sunhou.se/',
    source: null,
    tags: ['product'],
  },
  {
    title: 'The Fundraising Lore',
    description: 'A guide to help founders successfully raise early-stage VC financing',
    preview: null,
    website: 'https://www.lore.vc/',
    source: 'https://github.com/dvitanov/lorevc',
    tags: ['meme','FanToken'], // TODO find better tag?
  },
  {
    title: 'LifeOmic PHC Documentation',
    description: 'Help and information for LifeOmic PHC',
    preview: null,
    website: 'https://phc.docs.lifeomic.com/',
    source: null,
    tags: ['product'],
  },
  {
    title: 'Kanekotic\'s Page',
    description: 'List of open-source projects and blog',
    preview: null,
    website: 'https://www.kanekotic.com/',
    source: 'https://github.com/kanekotic/kanekotic-page',
    tags: ['meme','FanToken'],
  },
  {
    title: 'DevTomek',
    description: 'A Polish blog about programming, electronics and IoT',
    preview: null,
    website: 'https://devtomek.pl/',
    source: null,
    tags: ['FanToken'],
  },
  {
    title: 'Vantevo Analytics',
    description: 'The most complete and secure Google Analytics alternative.',
    preview: null,
    website: 'https://vantevo.io/docs/',
    source: null,
    tags: ['product','Gaming'],
  },
  {
    title: 'lsfusion platform documentation',
    description: 'A declarative open-source language-based platform for information systems development',
    preview: null,
    website: 'https://docs.lsfusion.org/',
    source: 'https://github.com/lsfusion/docusaurus',
    tags: ['meme','Gaming','RWA'],
  },
  {
    title: 'Rokt Docs',
    description: 'Rokt\'s product documentation',
    preview: null,
    website: 'https://docs.rokt.com/',
    source: null,
    tags: ['product'],
  },
  {
    title: 'Harmonoid',
    description: 'A beautiful material-design cross platform music player',
    preview: null,
    website: 'https://harmonoid.com/',
    source: null,
    tags: ['product','design'],
  },
  {
    title: 'Mentorship Guide',
    description: 'Making mentorship accessible to all, for mentors and mentees.',
    preview: null,
    website: 'https://mentorship.guide/',
    source: 'https://github.com/mentorship-sponsorship/mentorship-guide-docs',
    tags: ['meme','design'],
  },
  {
    title: 'Vishal Gandhi',
    description: 'The Data Column - Blog by Vishal Gandhi',
    preview: null,
    website: 'https://vishalgandhi.in/',
    source: null,
    tags: ['FanToken'],
  },
  {
    title: 'daily.dev',
    description: 'Official product documentation for daily.dev',
    preview: null,
    website: 'https://docs.daily.dev/',
    source: 'https://github.com/dailydotdev/docs',
    tags: ['meme','product','design'],
  },
  {
    title: 'Formiz',
    description: 'React forms with ease! Composable, headless & with built-in multi steps',
    preview: null,
    website: 'https://formiz-react.com/',
    source: 'https://github.com/ivan-dalmet/formiz/tree/master/documentation',
    tags: ['meme'],
  },
  {
    title: 'Wener Live & Life',
    description: 'Notes, Stories, Awesomes',
    preview: null,
    website: 'https://wener.me/',
    source: 'https://github.com/wenerme/wener/tree/master/site',
    tags: ['meme','FanToken'],
  },
  {
    title: 'Modrinth Documentation',
    description: 'The documentation for Modrinth, an open source Minecraft modding platform',
    preview: null,
    website: 'https://docs.modrinth.com/',
    source: 'https://github.com/modrinth/docs',
    tags: ['meme'],
  },
  {
    title: 'Takken.io',
    description: 'Webber\'s FanToken website',
    preview: null,
    website: 'https://takken.io/',
    source: 'https://github.com/webbertakken/takken.io',
    tags: ['meme','FanToken'],
  },
  {
    title: 'GameCI',
    description: 'Open source continuous integration for games',
    preview: null,
    website: 'https://game.ci/',
    source: 'https://github.com/game-ci/documentation',
    tags: ['meme','product','RWA'],
  },
  {
    title: 'Batect',
    description: 'The fast, consistent way to run your development and testing tasks everywhere.',
    preview: null,
    website: 'https://batect.dev/',
    source: 'https://github.com/batect/batect.dev',
    tags: ['meme'],
  },
  {
    title: 'YepCode Docs',
    description: 'Docs for the all-in-one platform that connects your services and APIs',
    preview: null,
    website: 'https://docs.yepcode.io/',
    source: null,
    tags: ['product'],
  },
  {
    title: 'YepCode Recipes',
    description: 'Recipes for the all-in-one platform that connects your services and APIs',
    preview: null,
    website: 'https://yepcode.io/recipes/',
    source: null,
    tags: ['product','Chain'],
  },
  {
    title: 'Appcircle Docs',
    description: 'Appcircle is an easy-to-setup mobile CI/CD platform.',
    preview: null,
    website: 'https://docs.appcircle.io/',
    source: 'https://github.com/appcircleio/appcircle-docusaurus/tree/master/',
    tags: ['meme','product'],
  },
  {
    title: 'Rowy Docs',
    description: 'Open-source low-code platform for Firebase, Cloud Functions and GCP',
    preview: null,
    website: 'https://docs.rowy.io/',
    source: 'https://github.com/rowyio/docs',
    tags: ['meme','product','design'],
  },
  {
    title: 'Keebio Documentation',
    description: 'Mechanical keyboard build guides and keyboard reprogramming info',
    preview: null,
    website: 'https://docs.keeb.io/',
    source: 'https://github.com/keebio/keebio-docs',
    tags: ['meme','product'],
  },
  {
    title: '前端大刘',
    description: 'Record and share to make progress every day!',
    preview: null,
    website: 'https://lzwdot.com/',
    source: 'https://github.com/lzwdot/lzwdot.github.io',
    tags: ['meme','FanToken'],
  },
  {
    title: 'DipScope',
    description: 'Open source tools to develop high quality software',
    preview: null,
    website: 'https://dipscope.com/',
    source: null,
    tags: ['RWA'],
  },
  {
    title: 'MutableSecurity',
    description: 'Platform for automating the lifecycle of cybersecurity solutions',
    preview: null,
    website: 'https://www.mutablesecurity.io/',
    source: 'https://github.com/MutableSecurity/website',
    tags: ['meme','product'],
  },
  {
    title: 'Atlas',
    description: 'Atlas CLI helps developers manage their database schemas by applying DevOps principles.',
    preview: null,
    website: 'https://atlasgo.io/',
    source: 'https://github.com/ariga/atlas',
    tags: ['meme','product'],
  },
  {
    title: 'WPShop',
    description: 'Docs site for the ShopWP WordPress plugin',
    preview: null,
    website: 'https://docs.wpshop.io/',
    source: null,
    tags: ['product'],
  },
  {
    title: 'Polkadot Wiki',
    description: 'The central source of truth for Polkadot Network',
    preview: null,
    website: 'https://wiki.polkadot.network/',
    source: 'https://github.com/w3f/polkadot-wiki/tree/master/polkadot-wiki',
    tags: ['meme'], // TODO add web3 tag?
  },
  {
    title: 'CodingHabits',
    description: 'An interactive learning environment for developers',
    preview: null,
    website: 'https://www.codinghabits.online/',
    source: null,
    tags: ['product'],
  },
  {
    title: 'Crawlee',
    description: 'Scalable web crawling, scraping and automation library for JS/Node.js',
    preview: null,
    website: 'https://crawlee.dev/',
    source: 'https://github.com/apify/crawlee/tree/master/website',
    tags: ['meme','RWA'],
  },
  {
    title: 'codehooks',
    description: 'Fast Serverless Backend made Easy',
    preview: null,
    website: 'https://codehooks.io/',
    source: null,
    tags: ['product'],
  },
  {
    title: 'Ouch1978',
    description: 'FanToken site of @Ouch1978',
    preview: null,
    website: 'https://ouch1978.github.io/',
    source: 'https://github.com/Ouch1978/ouch1978.github.io',
    tags: ['meme','FanToken'],
  },
  {
    title: 'OKP4',
    description: 'Documentation portal for the OKP4 blockchain',
    preview: null,
    website: 'https://docs.okp4.network/',
    source: 'https://github.com/okp4/docs',
    tags: ['meme','product','design'], // TODO add web3 tag
  },
  {
    title: 'Konkatsu Strategy Guide',
    description: 'Support konkatsu (marriage hunting) in Japan',
    preview: null,
    website: 'https://hikonkatsu.com/',
    source: null,
    tags: ['FanToken'],
  },
  {
    title: 'Zondax Documentation',
    description: 'Building back-end tech solutions for the Web3 Space.',
    preview: null,
    website: 'https://docs.zondax.ch/',
    source: null,
    tags: ['product','design'], // TODO add web3 tag
  },
  {
    title: 'ShellHub Documentation',
    description: 'A centralized SSH server for the the edge and cloud computing',
    preview: null,
    website: 'https://docs.shellhub.io/',
    source: 'https://github.com/shellhub-io/docs',
    tags: ['meme','product'],
  },
  {
    title: 'Dynamoose',
    description: 'A modeling tool for Amazon\'s DynamoDB',
    preview: null,
    website: 'https://dynamoosejs.com/',
    source: 'https://github.com/dynamoose/dynamoose/tree/main/docs',
    tags: ['meme'],
  },

  /*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
   */
];

export type User = {
  title: string;
  description: string;
  preview: string | null; // null = use our serverless screenshot service
  website: string;
  source: string | null;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: {[type in TagType]: Tag} = {
  favorite: {
    label: translate({message: 'Favorite'}),
    description: translate({
      message:
        'Our favorite token that you must absolutely check out!',
      id: 'showcase.tag.favorite.description',
    }),
    color: '#e9669e',
  },

  meme: {
    label: translate({message: 'meme'}),
    description: translate({
      message: 'meme token can be useful for inspiration!',
      id: 'showcase.tag.meme.description',
    }),
    color: '#39ca30',
  },

  product: {
    label: translate({message: 'Product'}),
    description: translate({
      message: 'token associated to a commercial product!',
      id: 'showcase.tag.product.description',
    }),
    color: '#dfd545',
  },

  design: {
    label: translate({message: 'Design'}),
    description: translate({
      message:
        'Beautiful token, polished and standing out from the initial template!',
      id: 'showcase.tag.design.description',
    }),
    color: '#a44fb7',
  },

  Gaming: {
    label: translate({message: 'Gaming'}),
    description: translate({
      message:
        'Translated token using the internationalization support with more than 1 locale.',
      id: 'showcase.tag.Gaming.description',
    }),
    color: '#127f82',
  },

  RWA: {
    label: translate({message: 'RWA'}),
    description: translate({
      message:
        'token using the RWA feature of the docs plugin to manage multiple versions.',
      id: 'showcase.tag.RWA.description',
    }),
    color: '#fe6829',
  },

  Chain: {
    label: translate({message: 'Chain'}),
    description: translate({
      message:
        'Very Chain token, including many more pages than the average!',
      id: 'showcase.tag.Chain.description',
    }),
    color: '#8c2f00',
  },

  meta: {
    label: translate({message: 'Meta'}),
    description: translate({
      message: 'token of Meta (formerly Facebook) projects',
      id: 'showcase.tag.meta.description',
    }),
    color: '#4267b2', // Facebook blue
  },

  FanToken: {
    label: translate({message: 'FanToken'}),
    description: translate({
      message:
        'FanToken websites, blogs and digital gardens built with Docusaurus',
      id: 'showcase.tag.FanToken.description',
    }),
    color: '#14cfc3',
  },

  NFT: {
    label: translate({message: 'NFT'}),
    description: translate({
      message:
        'token using the right-to-left reading direction support.',
      id: 'showcase.tag.NFT.description',
    }),
    color: '#ffcfc3',
  },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const sortedUsers = sortUsers();
