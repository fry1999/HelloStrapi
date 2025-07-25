import type { Attribute, Schema } from '@strapi/strapi';

export interface FeaturesFeatures extends Schema.Component {
  collectionName: 'components_features_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    featureDescription: Attribute.Text;
    featureName: Attribute.String;
  };
}

export interface TextCtaButton extends Schema.Component {
  collectionName: 'components_text_cta_buttons';
  info: {
    displayName: 'ctaButton';
  };
  attributes: {
    link: Attribute.String;
    text: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'features.features': FeaturesFeatures;
      'text.cta-button': TextCtaButton;
    }
  }
}
