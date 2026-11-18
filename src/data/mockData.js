export const stats = [
  { label: "Total users", value: "1,240", note: "+8% this month", trend: [900, 940, 925, 990, 1030, 1000, 1070, 1120, 1095, 1170, 1210, 1240] },
  { label: "Landlords", value: "86", note: "14 / 50 free slots left", trend: [60, 64, 62, 68, 72, 70, 75, 80, 78, 83, 82, 86] },
  { label: "Tenants", value: "1,154", note: "+6% this month", trend: [840, 880, 865, 920, 960, 935, 1000, 1050, 1030, 1100, 1125, 1154] },
  { label: "Active listings", value: "312", note: "24 pending review", trend: [240, 252, 246, 262, 275, 268, 285, 296, 290, 305, 301, 312] },
  { label: "Enquiries this month", value: "486", note: "Monthly tickets", trend: [310, 345, 330, 380, 410, 395, 430, 465, 445, 480, 470, 486] },
  { label: "Successful deals", value: "9", note: "Primary KPI", trend: [2, 3, 2, 4, 5, 4, 6, 7, 6, 8, 7, 9] },
  { label: "Commission revenue", value: "₦270,000", note: "5% of annual rent", trend: [60000, 90000, 80000, 130000, 160000, 145000, 190000, 225000, 210000, 250000, 245000, 270000] },
  { label: "Site traffic", value: "18.4k", note: "Visits this month", trend: [9.2, 10.5, 10, 11.8, 13.2, 12.6, 14.4, 15.8, 15.2, 17.1, 16.8, 18.4] },
];

export const chartColors = [
   "#8B5CF6",
  "#8B5CF6",
  "#8B5CF6",
   "#8B5CF6",
   "#8B5CF6",
  "#8B5CF6",
   "#8B5CF6",
   "#8B5CF6",
];



export const traffic = [
  { month: "Jun", visits: 7 },
  { month: "Jul", visits: 9.7 },
  { month: "Aug", visits: 10.4 },
  { month: "Sep", visits: 12.9 },
  { month: "Oct", visits: 14 },
  { month: "Nov", visits: 18.4 },
];



export const freeListing = {
  used: 36,
  total: 50,
  conversion: "1.9%",
};



export const approvals = [
  { id: 1, property: "3 Bedroom Flat", landlord: "[Landlord A]", area: "Marian Road" },
  { id: 2, property: "Duplex", landlord: "[Landlord B]", area: "Atimbo" },
  { id: 3, property: "Studio", landlord: "[Landlord C]", area: "8 Miles" },
];

export const reports = [
  { id: 1, reason: "Fake photos", listing: "2 Bed, 8 Miles", status: "Open" },
  { id: 2, reason: "Already rented", listing: "Studio, Ekorinim", status: "Open" },
  { id: 3, reason: "Wrong price", listing: "3 Bed, Marian Rd", status: "Resolved" },
];


export const topLandlords = [
  { id: 1, landlord: "[Landlord A]", listings: 6, rented: 3, enquiries: 12 },
  { id: 2, landlord: "[Landlord B]", listings: 4, rented: 2, enquiries: 9 },
  { id: 3, landlord: "[Landlord C]", listings: 3, rented: 3, enquiries: 7 },
];