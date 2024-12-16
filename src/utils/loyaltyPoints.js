// Point calculation tiers
export const POINT_TIERS = {
  TIER1: { min: 1, max: 20, points: 1 },
  TIER2: { min: 30, max: 50, points: 2 },
  TIER3: { min: 50, max: 100, points: 3 },
  TIER4: { min: 100, max: Infinity, points: 5 }
};

// Discount tiers based on points
export const DISCOUNT_TIERS = {
  TIER1: { points: 10, discount: 0.05 }, // 5%
  TIER2: { points: 20, discount: 0.10 }, // 10%
  TIER3: { points: 30, discount: 0.15 }, // 15%
  TIER4: { points: 40, discount: 0.20 }, // 20%
  TIER5: { points: 50, discount: 0.30 }  // 30%
};

export const calculateEarnedPoints = (totalAmount) => {
  if (totalAmount >= POINT_TIERS.TIER4.min) return POINT_TIERS.TIER4.points;
  if (totalAmount >= POINT_TIERS.TIER3.min) return POINT_TIERS.TIER3.points;
  if (totalAmount >= POINT_TIERS.TIER2.min) return POINT_TIERS.TIER2.points;
  if (totalAmount >= POINT_TIERS.TIER1.min) return POINT_TIERS.TIER1.points;
  return 0;
};

export const calculateAvailableDiscount = (points) => {
  if (points >= DISCOUNT_TIERS.TIER5.points) return DISCOUNT_TIERS.TIER5.discount;
  if (points >= DISCOUNT_TIERS.TIER4.points) return DISCOUNT_TIERS.TIER4.discount;
  if (points >= DISCOUNT_TIERS.TIER3.points) return DISCOUNT_TIERS.TIER3.discount;
  if (points >= DISCOUNT_TIERS.TIER2.points) return DISCOUNT_TIERS.TIER2.discount;
  if (points >= DISCOUNT_TIERS.TIER1.points) return DISCOUNT_TIERS.TIER1.discount;
  return 0;
};

export const getPointsInfo = () => {
  return [
    { range: 'GH₵1-20', points: 1 },
    { range: 'GH₵30-50', points: 2 },
    { range: 'GH₵50-100', points: 3 },
    { range: 'GH₵100+', points: 5 }
  ];
};

export const getDiscountInfo = () => {
  return [
    { points: 10, discount: '5%' },
    { points: 20, discount: '10%' },
    { points: 30, discount: '15%' },
    { points: 40, discount: '20%' },
    { points: 50, discount: '30%' }
  ];
};
