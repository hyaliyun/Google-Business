/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import clsx from 'clsx';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';

import Image from '@theme/IdealImage';
import Layout from '@theme/Layout';

import Tweet from '@site/src/components/Tweet';
import Tweets, {type TweetItem} from '@site/src/data/tweets';
import Quotes from '@site/src/data/quotes';
import Features, {type FeatureItem} from '@site/src/data/features';
import Heading from '@theme/Heading';

import styles from './styles.module.css';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

function HeroBanner() {
	return (
	  <div className={styles.hero} data-theme="dark">
		<div className={styles.heroInner}>
		  <div className={styles.heroContent}> {/* Container for title and description */}
			<Heading as="h1" className={styles.heroTitle} >
			  <span
				className={styles.heroTitleTextHtml} style={{ marginBottom: '50px' }}
				dangerouslySetInnerHTML={{
				  __html: translate({
					id: 'homepage.hero.title',
					message: 'Fast Stand out on Google with a free <b>Business Profile</b>',
					description: 'Home page hero title, can contain simple html tags',
				  }),
				}}
			  />
			<div className={styles.heroSubtitle} style={{ marginBottom: '20px' }}>
			  <p>
				Turn people who find you on Google Search and Maps into new customers with a free Business Profile for your storefront or service area. Personalize your profile with photos, offers, posts, and more.
			  </p>
			</div>
			<div className="indexCtas">
			  <a className="button button--primary" href="https://business.google.com/?gmbsrc=ww-ww-ot-gs-z-gmb-l-z-h%7Ez-ogb-u&hl=en&skipLandingPage=true&skipPagesList=1&cbl=hr&cbp=hom&cbt=now&_gl=1*1am93x2*_ga*MTc5NDcwMDE2OS4xNzI2NTg2MTcx*_ga_V9K47ZG8NP*MTcyNjU4NjE3MC4xLjAuMTcyNjU4NjMxOS43LjAuMA.." target="_blank">
				Manage now
			  </a>
			  <a className="button button--secondary" href="https://www.543x.com" target="_blank">
				Learn more
			  </a>
			</div>
			</Heading>

		  </div>
		  <video
			className={styles['ion-hero-ambient-video__container']}
			autoPlay
			playsInline
			muted
			preload="auto"
			aria-label="Business owner with a construction helmet"
			style={{ width: '50%', maxHeight: '550px' }} // Adjusted width and max height
		  >
			<source
			  src="https://www.gstatic.com/marketing-cms/ads/d7/0f/10aef2f641dfa0244c28581ddf8e/hong-kong-en-hk-live-overview.mp4"
			  type="video/mp4"
			/>
		  </video>
		</div>
	  </div>
	);
}

function Herotoken() {
  return (
    <div className={styles.viewer} data-theme="dark">
	 <div className={styles.sectionContainer}>
   <h1><span className={styles.heroTitleTextHtml}>TOKEN SHOWCASE</span></h1>     
    <p>List of tokens people are building with Solana</p>
    <a className={styles.formButton} href="https://github.com/hyaliyun/vitejs/discussions/1" target="_blank">🙏 Please add your token</a>
    </div>
		<div className={styles.container}>
		  <div className={styles.showcase}>
			<div className={styles.appcard}>
			  <div className={styles.appicon}>
				<img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/facebook.png')} width="100" height="100"/>
			  </div>
			  <div className={styles.appinfo}>
				<div className={styles.appnameo}>BTC</div>
				<div className={styles.linkcontainer}>
					<a href="https://btc.543x.com/">Website</a>
					<span className={styles.separator}>•</span>
					<a href="https://app.meteora.ag/pools/83XaC2jg2FqHMVjcUnHZmcgRL5MvgD45B9FxbK8evosk">Swap</a>
				</div>
				<a href="https://bitcoin.org/" className={styles.learnmore}>Learn more</a>
			  </div>
			</div>
			
			<div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/adsmanager.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>solana</div>
				  <div className={styles.linkcontainer}>
					  <a href="http://sol.543x.com//">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://accounts.binance.com/en/register?ref=11131007">Swap</a>
				  </div>
				  <a href="http://sol.543x.com//" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/metaquest.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>USDC</div>
				  <div className={styles.linkcontainer}>
					  <a href="http://usdc.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/AizCbr94n73ykw7iefDbXc61AjQiQEULnTJs6m5Hdc6y">Swap</a>
				  </div>
				  <a href="http://usdc.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/messengerdesktop.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>BUSD</div>
				  <div className={styles.linkcontainer}>
					  <a href="http://busd.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/2EzPinaN1FcDu7jB5YxFYERbhxMYiT3bYNiP3sL5jfdB">Swap</a>
				  </div>
				  <a href="http://busd.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/eth.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>Eth</div>
				  <div className={styles.linkcontainer}>
					  <a href="https://eth.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/2EzPinaN1FcDu7jB5YxFYERbhxMYiT3bYNiP3sL5jfdB">Swap</a>
				  </div>
				  <a href="https://eth.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>

			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/officemobile.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>FDUSD</div>
				  <div className={styles.linkcontainer}>
					  <a href="https://fdusd.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/JBdMRhuxAtMW754NceSMFPLnpPc2XAwgYZwXNUawSah5">Swap</a>
				  </div>
				  <a href="https://fdusd.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>

			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/outlookmobile.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>PANDA</div>
				  <div className={styles.linkcontainer}>
					  <a href="http://panda.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/6xvVWCy9KtkA7DnVtVUJqmMorrYxUS3VUcUYAzM59gXe">Swap</a>
				  </div>
				  <a href="http://panda.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>

			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/teamsmobile.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>SATOSHI</div>
				  <div className={styles.linkcontainer}>
					  <a href="http://satoshi.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/5TMTjmESoG6Hqbwrv9AeweoFyCet8Min2G48oQbhbTp6">Swap</a>
				  </div>
				  <a href="http://satoshi.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/xboxgamepass.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>TON</div>
				  <div className={styles.linkcontainer}>
					  <a href="http://ton.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://accounts.binance.com/en/register?ref=11131007">Swap</a>
				  </div>
				  <a href="http://ton.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/skype.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>USDT</div>
				  <div className={styles.linkcontainer}>
					  <a href="https://usdt.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/BSo8Z58sYiAnmTkEX5XFQLPxGERD3pgDKdVQtHneSbkJ">Swap</a>
				  </div>
				  <a href="https://usdt.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/amazon-shopping.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>SHIB</div>
				  <div className={styles.linkcontainer}>
					  <a href="http://shib.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://accounts.binance.com/en/register?ref=11131007">Swap</a>
				  </div>
				  <a href="http://shib.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/jon-bloomer.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>NO</div>
				  <div className={styles.linkcontainer}>
					  <a href="http://no.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/Bz1kKXV74cznsVJSu4cPcdrD2ZbCv6raez9Bq5Edmtgw">Swap</a>
				  </div>
				  <a href="http://no.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/amazon-photos.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>CLOWN</div>
				  <div className={styles.linkcontainer}>
					  <a href="http://clown.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/5m7P7Ye2wHatH6TmFbzyNoaYvdPcnDTfzuZZPU9drbxW">Swap</a>
				  </div>
				  <a href="http://clown.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/amazon-kindle.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>BNB</div>
				  <div className={styles.linkcontainer}>
					  <a href="https://bnb.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/7CdHDxxdEFEM8MEHaEPNfzL18D8w35AkArWrd9SH7bC2">Swap</a>
				  </div>
				  <a href="https://bnb.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/amazon-appstore.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>SATS</div>
				  <div className={styles.linkcontainer}>
					  <a href="http://sats.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/83XaC2jg2FqHMVjcUnHZmcgRL5MvgD45B9FxbK8evosk">Swap</a>
				  </div>
				  <a href="http://sats.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/shopify.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>DOG•GO•TO</div>
				  <div className={styles.linkcontainer}>
					  <a href="http://dog.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/83XaC2jg2FqHMVjcUnHZmcgRL5MvgD45B9FxbK8evosk">Swap</a>
				  </div>
				  <a href="http://dog.543x.com//" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/shop.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>JUMP</div>
				  <div className={styles.linkcontainer}>
					  <a href="http://jump.543x.com">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/9JqQPaU6azN6yRjrRg3MSka4tLeMEKpZ2pe5D3CLnoc">Swap</a>
				  </div>
				  <a href="http://jump.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/shopify-inbox.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>A</div>
				  <div className={styles.linkcontainer}>
					  <a href="https://a.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/8NzwPPEQJFkjRqeBd1jpy3efnvYmgyCk18bqujqiqa4k">Swap</a>
				  </div>
				  <a href="https://a.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/pos.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>MIQI</div>
				  <div className={styles.linkcontainer}>
					  <a href="https://miqi.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/7gZYm4VQd4hTNgA9Eapdq37XLcuGjHYAq6CQ6NM2SXUu">Swap</a>
				  </div>
				  <a href="https://miqi.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/x.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>X</div>
				  <div className={styles.linkcontainer}>
					  <a href="https://x.543x.com//">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/2onAYHGyxUV4JuYeUQbFwbKmKUXyTA9v5aKiGx2TesR7">Swap</a>
				  </div>
				  <a href="https://x.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/spaces.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>SHEEP</div>
				  <div className={styles.linkcontainer}>
					  <a href="https://sheep.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/GYJkxTb1WLQELBFCXgLxPACuKA1Abd3bJFPKrEPsG5m9">Swap</a>
				  </div>
				  <a href="https://sheep.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/dine.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>PEACE</div>
				  <div className={styles.linkcontainer}>
					  <a href="https://peace.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/6YwbhVxL5DBArRaC2rSsS738wjdzTzEzPSZDwRnRSnHX">Swap</a>
				  </div>
				  <a href="https://peace.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/fit.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>XRP</div>
				  <div className={styles.linkcontainer}>
					  <a href="https://xrp.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://accounts.binance.com/en/register?ref=11131007">Swap</a>
				  </div>
				  <a href="https://xrp.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/owner.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>RATS</div>
				  <div className={styles.linkcontainer}>
					  <a href="http://rats.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://accounts.binance.com/en/register?ref=11131007">Swap</a>
				  </div>
				  <a href="http://rats.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/cow.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>cow</div>
				  <div className={styles.linkcontainer}>
					  <a href="https://cow.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/GHNBzjJe12m37Jj9JV4Jz6cunA34oCbXcgudCocPMJ4H">Swap</a>
				  </div>
				  <a href="https://cow.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/puma.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>DOGE</div>
				  <div className={styles.linkcontainer}>
					  <a href="http://doge.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/vVTYpKUvcZHr5EJJKRefamq7u8W8eDjz7gqERAvga3R">Swap</a>
				  </div>
				  <a href="http://doge.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/dave.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>AVAX</div>
				  <div className={styles.linkcontainer}>
					  <a href="http://cat.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://accounts.binance.com/en/register?ref=11131007">Swap</a>
				  </div>
				  <a href="https://www.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/discord.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>DONALD</div>
				  <div className={styles.linkcontainer}>
					  <a href="https://donald.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/6Ed7Gy1aKNrvSr7srCJWowaLSEjCySmeRWK2iacEPCmw">Swap</a>
				  </div>
				  <a href="https://donald.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/tesla.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>SNAKE</div>
				  <div className={styles.linkcontainer}>
					  <a href="https://snake.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/6YwbhVxL5DBArRaC2rSsS738wjdzTzEzPSZDwRnRSnHX">Swap</a>
				  </div>
				  <a href="https://snake.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/pinterest.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>RABBIT</div>
				  <div className={styles.linkcontainer}>
					  <a href="https://rabbit.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/FbrPuX8tinmx2yxwxmYGZfZQbkS8FL9gG1dzQiWMamER">Swap</a>
				  </div>
				  <a href="https://rabbit.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/mercari.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>YY</div>
				  <div className={styles.linkcontainer}>
					  <a href="http://yy.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/HGxSXTJhw1vGYhhCjjqSdBbwmG4cgFpJwjXK578Qz3Ms">Swap</a>
				  </div>
				  <a href="http://yy.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/playstation.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>GF</div>
				  <div className={styles.linkcontainer}>
					  <a href="http://gf.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/5zz1MnzBxhozPoGDGysdu4CeeMEVeJ1cay8gpgw6Motb">Swap</a>
				  </div>
				  <a href="http://gf.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/openvpn.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>YAYA</div>
				  <div className={styles.linkcontainer}>
					  <a href="https://yaya.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/Di9aeHFYeczWysnQsbNpxFgqTzJYyU9pKCovSdrhFXHQ">Swap</a>
				  </div>
				  <a href="https://yaya.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/tableau.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>ORD</div>
				  <div className={styles.linkcontainer}>
					  <a href="http://ord.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/6u1nMUVkTVmSvvdjvVTJUPKP7ZoFLrbah3YtFnTa9YoA">Swap</a>
				  </div>
				  <a href="http://ord.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/wordpress.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>CAT</div>
				  <div className={styles.linkcontainer}>
					  <a href="http://cat.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/9oRdiNMEPegLEmczr55zhTygRymQn44D7Ry5Cduj4VXv">Swap</a>
				  </div>
				  <a href="http://cat.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/flipkart.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>QQ</div>
				  <div className={styles.linkcontainer}>
					  <a href="http://qq.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/83fGy9Fgm83CA44DU8NmhLfF2Bjq8v6dqsLcQN6NRDwm">Swap</a>
				  </div>
				  <a href="http://qq.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/bloomberg.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>MIMI</div>
				  <div className={styles.linkcontainer}>
					  <a href="https://mimi.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/6Ed7Gy1aKNrvSr7srCJWowaLSEjCySmeRWK2iacEPCmw">Swap</a>
				  </div>
				  <a href="https://mimi.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/walmart.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>RAT</div>
				  <div className={styles.linkcontainer}>
					  <a href="https://rat.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/AEgbTbDjXX6PYgQ6DdxCmF185hSwECueVyyFg2HsXNdo">Swap</a>
				  </div>
				  <a href="https://rat.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/baidu.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>monkey</div>
				  <div className={styles.linkcontainer}>
					  <a href="https://monkey.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/6JZ53cKczUmwAqz8F59TZ7ur84AjAgLFWqWNauhsdhFY">Swap</a>
				  </div>
				  <a href="https://monkey.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/callofduty_companion.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>SEAL</div>
				  <div className={styles.linkcontainer}>
					  <a href="https://seal.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/GbCVRoqC57eKEdgWo3oBkgtX64Ru7d7Evow5oxNKDWdW">Swap</a>
				  </div>
				  <a href="https://seal.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/Chicken.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>Chicken</div>
				  <div className={styles.linkcontainer}>
					  <a href="https://ord.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/6u1nMUVkTVmSvvdjvVTJUPKP7ZoFLrbah3YtFnTa9YoA">Swap</a>
				  </div>
				  <a href="https://ord.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/words2.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>dragon</div>
				  <div className={styles.linkcontainer}>
					  <a href="https://dragon.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/95TETWfUrkUnM6sCSizsQTDJ2tHXBXRZA6mEnjGfpgCb">Swap</a>
				  </div>
				  <a href="https://dragon.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/foreca.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>TRON</div>
				  <div className={styles.linkcontainer}>
					  <a href="https://seal.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/GbCVRoqC57eKEdgWo3oBkgtX64Ru7d7Evow5oxNKDWdW">Swap</a>
				  </div>
				  <a href="https://seal.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/nerdwallet.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>ADA</div>
				  <div className={styles.linkcontainer}>
					  <a href="http://ada.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/HGxSXTJhw1vGYhhCjjqSdBbwmG4cgFpJwjXK578Qz3Ms">Swap</a>
				  </div>
				  <a href="http://ada.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/lendmn.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>OTTER</div>
				  <div className={styles.linkcontainer}>
					  <a href="https://otter.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/9XeEoYSMyG5tWpNKMBKivsbbjfjrPj2rFBQUEut3vDVu">Swap</a>
				  </div>
				  <a href="https://otter.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/artsy.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>pepe</div>
				  <div className={styles.linkcontainer}>
					  <a href="https://pepe.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/eZ4L3WKdaCHWbocvuA5QhMvR3AwdmhpNfPW9ynHJGx6">Swap</a>
				  </div>
				  <a href="https://pepe.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/1831.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>BCH</div>
				  <div className={styles.linkcontainer}>
					  <a href="http://bch.info/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/JBdMRhuxAtMW754NceSMFPLnpPc2XAwgYZwXNUawSah5">Swap</a>
				  </div>
				  <a href="https://www.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
			  <div className={styles.appcard}>
				<div className={styles.appicon}>
				  <img
            alt={translate({message: 'Docusaurus with Keytar'})}
            className={styles.heroLogo}
            src={useBaseUrl('/img/4195.png')} width="100" height="100"/>
				</div>
				<div className={styles.appinfo}>
				  <div className={styles.appnameo}>FTX</div>
				  <div className={styles.linkcontainer}>
					  <a href="https://www.543x.com/">Website</a>
					  <span className={styles.separator}>•</span>
					  <a href="https://app.meteora.ag/pools/JBdMRhuxAtMW754NceSMFPLnpPc2XAwgYZwXNUawSah5">Swap</a>
				  </div>
				  <a href="https://fdusd.543x.com/" className={styles.learnmore}>Learn more</a>
				</div>
			  </div>
		  </div>
		</div>
    </div>
  );
}


function TweetsSection() {
  const tweetColumns: TweetItem[][] = [[], [], []];
  Tweets.filter((tweet) => tweet.showOnHomepage).forEach((tweet, i) =>
    tweetColumns[i % 3]!.push(tweet),
  );

  return (
    <div className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <Heading as="h2" className={clsx('margin-bottom--lg', 'text--center')}>
          <Translate>Loved by many website</Translate>
        </Heading>
        <div className={clsx('row', styles.tweetsSection)}>
          {tweetColumns.map((tweetItems, i) => (
            <div className="col col--4" key={i}>
              {tweetItems.map((tweet) => (
                <Tweet {...tweet} key={tweet.url} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function QuotesSection() {
  return (
    <div className={clsx(styles.section)}>
      <div className="container">
        <div className="row">
          {Quotes.map((quote) => (
            <div className="col" key={quote.name}>
              <div className="avatar avatar--vertical margin-bottom--sm">
                <Image
                  alt={quote.name}
                  className="avatar__photo avatar__photo--xl"
                  img={quote.thumbnail}
                  style={{overflow: 'hidden'}}
                />
                <div className="avatar__intro padding-top--sm">
                  <div className="avatar__name">{quote.name}</div>
                  <small className="avatar__subtitle">{quote.title}</small>
                </div>
              </div>
              <p className="text--center text--italic padding-horiz--md">
                {quote.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VideoContainer() {
  return (
    <div className="container text--center margin-top--xl">
      <div className="row">
        <div className="col">
          <Heading as="h2">
            <Translate>Check it out in the intro video</Translate>
          </Heading>
          <div className="video-container">
            <LiteYouTubeEmbed
              id="BdQ43G8eR2s"
              params="autoplay=1&autohide=1&showinfo=0&rel=0"
              title="Explain Like I'm 5: Docusaurus"
              poster="maxresdefault"
              webp
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({
  feature,
  className,
}: {
  feature: FeatureItem;
  className?: string;
}) {
  const {withBaseUrl} = useBaseUrlUtils();

  return (
    <div className={clsx('col', className)}>
      <img
        className={styles.featureImage}
        alt={feature.title}
        width={Math.floor(feature.image.width)}
        height={Math.floor(feature.image.height)}
        src={withBaseUrl(feature.image.src)}
        loading="lazy"
      />
      <Heading as="h3" className={clsx(styles.featureHeading)}>
        {feature.title}
      </Heading>
      <p className="padding-horiz--md">{feature.text}</p>
    </div>
  );
}

function FeaturesContainer() {
  const firstRow = Features.slice(0, 3);
  const secondRow = Features.slice(3);

  return (
    <div className="container text--center">
      <div className="row margin-top--lg margin-bottom--lg">
        {firstRow.map((feature, idx) => (
          <Feature feature={feature} key={idx} />
        ))}
      </div>
      <div className="row">
        {secondRow.map((feature, idx) => (
          <Feature
            feature={feature}
            key={idx}
            className={clsx('col--4', idx === 0 && 'col--offset-2')}
          />
        ))}
      </div>
    </div>
  );
}

function TopBanner() {
  // TODO We should be able to strongly type customFields
  //  Refactor to use a CustomFields interface + TS declaration merging
  const announcedVersion = useDocusaurusContext().siteConfig.customFields
    ?.announcedVersion as string;

  return (
    <div className={styles.topBanner}>
      <div className={styles.topBannerTitle}>
        {'🎉\xa0'}
        <Link
          to={`https://www.543x.com`}
          className={styles.topBannerTitleText}>
          <Translate
            id="homepage.banner.launch.newVersion"
            values={{newVersion: announcedVersion}}>
            {'google Join us now!'}
          </Translate>
        </Link>
        {'\xa0🥳'}
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {
    siteConfig: {customFields, tagline},
  } = useDocusaurusContext();
  const {description} = customFields as {description: string};
  return (
    <Layout title={tagline} description={description}>
      <main>
        <TopBanner />
        <HeroBanner />
        <div className={styles.section}>
          <FeaturesContainer />
          <VideoContainer />
        </div>
        <TweetsSection />
        <QuotesSection />
        <Herotoken />
      </main>
    </Layout>
  );
}
