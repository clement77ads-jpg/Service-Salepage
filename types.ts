export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  price: number;
  promoPrice: number;
  features: string[];
  bonuses: string[];
  isPopular?: boolean;
  valueTotal: string;
  ctaText: string;
  buttonVariant?: 'primary' | 'secondary' | 'whatsapp';
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface BonusItem {
  title: string;
  description: string;
  value: string;
  image: string;
  displayMode?: 'standard' | 'image-only';
}