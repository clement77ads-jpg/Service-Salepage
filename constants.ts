import { PricingPlan, BonusItem } from './types';

export const WHATSAPP_LINK = "https://wa.me/601117703243?text=Salam,%20saya%20berminat%20nak%20tahu%20lebih%20lanjut%20tentang%20Pakej%20Visual%20Bisnes.";

export const BONUSES: BonusItem[] = [
  {
    title: "Bonus 1: Template Ayat Follow Up",
    description: "Ayat WhatsApp untuk follow up customer supaya tak kena 'ghosting'.",
    value: "RM79",
    image: "https://i.ibb.co/Q3tf0sFC/Gemini-Generated-Image-xz34acxz34acxz34.png",
    displayMode: 'image-only'
  },
  {
    title: "Bonus 2: Checklist Visual Kemas",
    description: "Panduan visual nampak professional tanpa perlu hire designer mahal.",
    value: "RM59",
    image: "https://i.ibb.co/5gWnJJ5Y/Gemini-Generated-Image-lynkhhlynkhhlynk.png",
    displayMode: 'image-only'
  },
  {
    title: "Bonus 3: Template Promo Cepat",
    description: "Template promo mingguan & offer untuk blast di story atau status.",
    value: "RM89",
    image: "https://i.ibb.co/Kp04RxX2/Gemini-Generated-Image-4nblii4nblii4nbl.png",
    displayMode: 'image-only'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Pakej Basic",
    price: 400,
    promoPrice: 39,
    valueTotal: "RM400+",
    features: [
      "Poster Promosi Professional",
      "Ayat Copywriting Padu"
    ],
    bonuses: ["Bonus 1: Template Ayat Follow Up"],
    ctaText: "Berminat? WhatsApp Sekarang",
    isPopular: false,
    buttonVariant: 'whatsapp'
  },
  {
    name: "Pakej Pro",
    price: 1500,
    promoPrice: 59,
    valueTotal: "RM1,500+",
    features: [
      "Poster Promosi Premium",
      "Salespage Khas (1 Link)",
      "Ayat Copywriting Lengkap",
      "Format Lengkap (IG/FB/Story)",
      "Susunan Strategik & Psikologi"
    ],
    bonuses: [
      "Bonus 1: Template Ayat Follow Up",
      "Bonus 2: Checklist Visual Kemas",
      "Bonus 3: Template Promo Cepat"
    ],
    ctaText: "Nak Pakej PRO (RM59)",
    isPopular: true,
    buttonVariant: 'whatsapp'
  }
];