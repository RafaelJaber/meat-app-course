
export interface RestaurantModel {
  id: number;
  slug: string;
  name: string;
  category: string;
  deliveryEstimate: string;
  rating: number;
  imagePath: string;
  about?: string;
  hours?: string;
}
