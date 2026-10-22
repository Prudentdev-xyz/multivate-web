export type FeaturedCourse = {
  id: "a1Foundations" | "absoluteBeginners" | "pronounsFamily" | "a2Practical";
  level: "A1" | "A2";
  lessons: number;
  /** Price in whole Naira */
  priceNgn: number;
  /** Horizontal offset of the arc motif on the card cover */
  arcLeft: string;
};

export const featuredCourses: FeaturedCourse[] = [
  { id: "a1Foundations", level: "A1", lessons: 32, priceNgn: 45000, arcLeft: "-12%" },
  { id: "absoluteBeginners", level: "A1", lessons: 18, priceNgn: 25000, arcLeft: "30%" },
  { id: "pronounsFamily", level: "A1", lessons: 12, priceNgn: 15000, arcLeft: "8%" },
  { id: "a2Practical", level: "A2", lessons: 36, priceNgn: 55000, arcLeft: "22%" },
];
