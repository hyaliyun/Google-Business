/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

const QUOTES = [
  {
    thumbnail: require('./quotes/shop.png'),
    name: 'Claim',
    title: translate({
      id: 'homepage.quotes.christopher-chedeau.title',
      message: '',
      description: 'Title of quote of Christopher Chedeau on the home page',
    }),
    text: (
      <Translate
        id="homepage.quotes.christopher-chedeau"
        description="Quote of Christopher Chedeau on the home page">
Create a Business Profile, or manage an existing profile on Search and Maps
      </Translate>
    ),
  },
  {
    thumbnail: require('./quotes/wordpress.png'),
    name: 'Personalize',
    title: translate({
      id: 'homepage.quotes.hector-ramos.title',
      message: '',
      description: 'Title of quote of Hector Ramos on the home page',
    }),
    text: (
      <Translate
        id="homepage.quotes.hector-ramos"
        description="Quote of Hector Ramos on the home page">
Add hours, photos, and other details and get discovered by customers near you
      </Translate>
    ),
  },
  {
    thumbnail: require('./quotes/pos.png'),
    name: 'Manage',
    title: translate({
      id: 'homepage.quotes.risky-vetter.title',
      message: '',
      description: 'Title of quote of Ricky Vetter on the home page',
    }),
    text: (
      <Translate
        id="homepage.quotes.risky-vetter"
        description="Quote of Ricky Vetter on the home page">
Share updates, respond to reviews, and connect with customers on Google
      </Translate>
    ),
  },
];

export default QUOTES;
