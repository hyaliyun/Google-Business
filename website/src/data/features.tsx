/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export type FeatureItem = {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  text: JSX.Element;
};

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      message: 'Free',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/amazon-shopping.png',
      width: 1009.54,
      height: 717.96,
    },
    text: (
      <Translate id="homepage.features.powered-by-mdx.text">
        Create a Business Profile at no cost
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Easy',
      id: 'homepage.features.built-using-react.title',
    }),
    image: {
      src: '/img/amazon-photos.png',
      width: 1108,
      height: 731.18,
    },
    text: (
      <Translate id="homepage.features.built-using-react.text">
      Manage your profile from Search and Maps
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Personalized',
      id: 'homepage.features.ready-for-translations.title',
    }),
    image: {
      src: '/img/baidu.png',
      width: 1137,
      height: 776.59,
    },
    text: (
      <Translate id="homepage.features.ready-for-translations.text">
          Add hours, photos, posts and more
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'first',
      id: 'homepage.features.document-versioning.title',
    }),
    image: {
      src: '/img/owner.png',
      width: 1038.23,
      height: 693.31,
    },
    text: (
      <Translate id="homepage.features.document-versioning.text">
            Take charge of your first impression
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'customers',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/spaces.png',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
           Easily connect with customers
      </Translate>
    ),
  },
];

export default FEATURES;
