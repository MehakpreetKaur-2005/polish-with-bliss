export interface PricingItem {
  name: string;
  price: string;
}

export interface PricingCategory {
  id: string;
  name: string;
  items: PricingItem[];
}
