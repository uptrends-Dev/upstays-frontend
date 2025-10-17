// Enums / literal unions
export type PropertyType = "apartment" | "house" | "villa" | "room";
export type PropertyTag = "shortTerm" | "longTerm" | "forSale";
export type PricePeriod = "perNight" | "perWeek" | "perMonth";
export type CurrencyCode = "USD" | "EUR" | "EGP" | "GBP" | "SAR"; // extend as needed

export interface PropertyGuests {
  adult: number;
  children: number;
  infants: number;
}

export interface PropertyLocation {
  country: string;
  city: string;
  address: string;
}

export interface PropertyInfo {
  bedrooms: number;
  bathrooms: number;
}

export interface PropertyPricing {
  period: PricePeriod;
  priceValue: number;
  priceDetails?: string;
  currency: CurrencyCode;
}

export interface Property {
  _id: string; // MongoDB ObjectId as string
  title: string;
  propertyGuests: PropertyGuests;
  propertyType: PropertyType;
  location: PropertyLocation;
  description: string;
  tag: PropertyTag;
  propertyImages: string[]; 
  propertyInfo: PropertyInfo;
  propertyPricing: PropertyPricing;
  isActive?: boolean;
  createdAt: string | Date; // ISO string from API or Date when hydrated
  updatedAt: string | Date;
  __v?: number;
}

export type NewProperty = Omit<
  Property,
  "_id" | "createdAt" | "updatedAt" | "__v" | "isActive"
> & {
  isActive?: boolean;
};
