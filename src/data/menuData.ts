
export interface MenuItem {
  dish: string;
}

export interface MealType {
  lunch: MenuItem[];
  dinner: MenuItem[];
}

export interface DayMenu {
  day: string;
  meals: MealType;
}

export interface WeekMenu {
  weekNumber: number;
  days: DayMenu[];
}

const menuData: WeekMenu[] = [
  {
    weekNumber: 1,
    days: [
      {
        day: "Monday",
        meals: {
          lunch: [
            { dish: "Mot Masala" },
            { dish: "Chapati" },
            { dish: "Dal" },
            { dish: "Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ],
          dinner: [
            { dish: "Mix Veg. rassa" },
            { dish: "Chapati" },
            { dish: "Jeera Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ]
        }
      },
      {
        day: "Tuesday",
        meals: {
          lunch: [
            { dish: "Aloo Chatani" },
            { dish: "Chapati" },
            { dish: "Dal" },
            { dish: "Plain Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ],
          dinner: [
            { dish: "Patodi" },
            { dish: "Chapati" },
            { dish: "Jeera Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ]
        }
      },
      {
        day: "Wednesday",
        meals: {
          lunch: [
            { dish: "Dal Bhaji" },
            { dish: "Chapati" },
            { dish: "Masala Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ],
          dinner: [
            { dish: "Sawaji Anda Curry/ Soyabin" },
            { dish: "Chapati" },
            { dish: "Jeera Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ]
        }
      },
      {
        day: "Thursday",
        meals: {
          lunch: [
            { dish: "Masala Aloo" },
            { dish: "Dal" },
            { dish: "Chapati" },
            { dish: "Plain Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ],
          dinner: [
            { dish: "Sev Bhaji" },
            { dish: "Chapati" },
            { dish: "Jeera Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ]
        }
      },
      {
        day: "Friday",
        meals: {
          lunch: [
            { dish: "Zunka" },
            { dish: "Chapati" },
            { dish: "Dal Tadaka" },
            { dish: "Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ],
          dinner: [
            { dish: "Palak Paneer" },
            { dish: "Chapati" },
            { dish: "Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ]
        }
      },
      {
        day: "Saturday",
        meals: {
          lunch: [
            { dish: "Shengdana Bhaji" },
            { dish: "Chapati" },
            { dish: "Plain Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ],
          dinner: [
            { dish: "Veg kolhapuri" },
            { dish: "Rice" },
            { dish: "Chapati" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ]
        }
      },
      {
        day: "Sunday",
        meals: {
          lunch: [
            { dish: "Chikhan Varhadi / Kaju Curry" },
            { dish: "Chapati" },
            { dish: "Salad" },
            { dish: "Jeera Rice" },
            { dish: "Pickle" }
          ],
          dinner: [
            { dish: "Khichdi" },
            { dish: "Kadhi/Mattha" },
            { dish: "Salad" },
            { dish: "Pickle" },
            { dish: "Lal Mirch" },
            { dish: "Lal Mirchi Chatani" }
          ]
        }
      }
    ]
  },
  {
    weekNumber: 2,
    days: [
      {
        day: "Monday",
        meals: {
          lunch: [
            { dish: "Kabli Chana" },
            { dish: "Chapati" },
            { dish: "Dal" },
            { dish: "Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ],
          dinner: [
            { dish: "Aloo Palak" },
            { dish: "Chapati" },
            { dish: "Jeera Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ]
        }
      },
      {
        day: "Tuesday",
        meals: {
          lunch: [
            { dish: "Patta Gobi" },
            { dish: "Chapati" },
            { dish: "Jeera Rice" },
            { dish: "Dal Tadaka" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ],
          dinner: [
            { dish: "Soyabean" },
            { dish: "Chapati" },
            { dish: "Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ]
        }
      },
      {
        day: "Wednesday",
        meals: {
          lunch: [
            { dish: "Dal Bhaji" },
            { dish: "Chapati" },
            { dish: "Masala Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ],
          dinner: [
            { dish: "Sawaji Anda Curry / Sev Bhaji" },
            { dish: "Chapati" },
            { dish: "Jeera Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ]
        }
      },
      {
        day: "Thursday",
        meals: {
          lunch: [
            { dish: "Gobi" },
            { dish: "Chapati" },
            { dish: "Plain Rice" },
            { dish: "Dal" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ],
          dinner: [
            { dish: "Matar Rassa" },
            { dish: "Chapati" },
            { dish: "Jeera Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ]
        }
      },
      {
        day: "Friday",
        meals: {
          lunch: [
            { dish: "Moong Dal Tadaka" },
            { dish: "Chapati" },
            { dish: "Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ],
          dinner: [
            { dish: "Kadhai Paneer" },
            { dish: "Chapati" },
            { dish: "Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ]
        }
      },
      {
        day: "Saturday",
        meals: {
          lunch: [
            { dish: "Kadhi Pakoda" },
            { dish: "Dal tadaka" },
            { dish: "Chapati" },
            { dish: "Plain Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ],
          dinner: [
            { dish: "Palak Paratha" },
            { dish: "Dahi" },
            { dish: "Pulao" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ]
        }
      },
      {
        day: "Sunday",
        meals: {
          lunch: [
            { dish: "Veg Biryani / Non-Veg Biryani" },
            { dish: "Mattha" },
            { dish: "Gravy" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ],
          dinner: [
            { dish: "Close" }
          ]
        }
      }
    ]
  },
  {
    weekNumber: 3,
    days: [
      {
        day: "Monday",
        meals: {
          lunch: [
            { dish: "Aloo Chole" },
            { dish: "Chapati" },
            { dish: "Dal" },
            { dish: "Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ],
          dinner: [
            { dish: "Dal Makhani" },
            { dish: "Chapati" },
            { dish: "Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ]
        }
      },
      {
        day: "Tuesday",
        meals: {
          lunch: [
            { dish: "Gobi Tamatar" },
            { dish: "Chapati" },
            { dish: "Jeera Rice" },
            { dish: "Dal Tadaka" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ],
          dinner: [
            { dish: "Gatta Sabji" },
            { dish: "Chapati" },
            { dish: "Plain Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ]
        }
      },
      {
        day: "Wednesday",
        meals: {
          lunch: [
            { dish: "Dal Bhaji" },
            { dish: "Chapati" },
            { dish: "Masala Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ],
          dinner: [
            { dish: "Sawaji Anda Curry / Soyabin" },
            { dish: "Chapati" },
            { dish: "Jeera Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ]
        }
      },
      {
        day: "Thursday",
        meals: {
          lunch: [
            { dish: "Baigan" },
            { dish: "Chapati" },
            { dish: "Plain Rice" },
            { dish: "Dal" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ],
          dinner: [
            { dish: "Sev Bhaji" },
            { dish: "Chapati" },
            { dish: "Jeera Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ]
        }
      },
      {
        day: "Friday",
        meals: {
          lunch: [
            { dish: "Zunka" },
            { dish: "Chapati" },
            { dish: "Dal Tadaka" },
            { dish: "Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ],
          dinner: [
            { dish: "Masala Paneer" },
            { dish: "Chapati" },
            { dish: "Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ]
        }
      },
      {
        day: "Saturday",
        meals: {
          lunch: [
            { dish: "Dalvang" },
            { dish: "chapati" },
            { dish: "Plain Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ],
          dinner: [
            { dish: "Aloo Chatani K" },
            { dish: "Dal Tadaka" },
            { dish: "Chapati" },
            { dish: "Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ]
        }
      },
      {
        day: "Sunday",
        meals: {
          lunch: [
            { dish: "Masala Chicken / Masala Kaju" },
            { dish: "Salad" },
            { dish: "Plain Rice" },
            { dish: "Pickle" },
            { dish: "Mattha" },
            { dish: "Sweet" }
          ],
          dinner: [
            { dish: "Pulao" },
            { dish: "Kadhi/Mattha" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ]
        }
      }
    ]
  },
  {
    weekNumber: 4,
    days: [
      {
        day: "Monday",
        meals: {
          lunch: [
            { dish: "Masala Barbati" },
            { dish: "Chapati" },
            { dish: "Dal fry" },
            { dish: "Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ],
          dinner: [
            { dish: "Kopta Curry" },
            { dish: "Chapati" },
            { dish: "Rice" },
            { dish: "Salad" },
            { dish: "Pickle" },
            { dish: "Til Chatani" }
          ]
        }
      },
      {
        day: "Tuesday",
        meals: {
          lunch: [
            { dish: "Dal Makhani" },
            { dish: "Chapati" },
            { dish: "Plain Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ],
          dinner: [
            { dish: "Masala Gobi" },
            { dish: "Chapati" },
            { dish: "Jeera Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ]
        }
      },
      {
        day: "Wednesday",
        meals: {
          lunch: [
            { dish: "Dal Bhaji" },
            { dish: "Chapati" },
            { dish: "Masala Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ],
          dinner: [
            { dish: "Sawaji Anda Curry / Sev Bhaji" },
            { dish: "Chapati" },
            { dish: "Jeera Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ]
        }
      },
      {
        day: "Thursday",
        meals: {
          lunch: [
            { dish: "Tamatar Chatani" },
            { dish: "Chapati" },
            { dish: "Dal Tadaka" },
            { dish: "Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ],
          dinner: [
            { dish: "Matar Rassa" },
            { dish: "Chapati" },
            { dish: "Plain Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ]
        }
      },
      {
        day: "Friday",
        meals: {
          lunch: [
            { dish: "Baigan Bharta" },
            { dish: "Chapati" },
            { dish: "Dal Fry" },
            { dish: "Plain Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ],
          dinner: [
            { dish: "Varhadi Paneer" },
            { dish: "Chapati" },
            { dish: "Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ]
        }
      },
      {
        day: "Saturday",
        meals: {
          lunch: [
            { dish: "Koval" },
            { dish: "Chapati" },
            { dish: "Rice" },
            { dish: "Dal" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ],
          dinner: [
            { dish: "Dum Aloo" },
            { dish: "Chapati" },
            { dish: "Jeera Rice" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ]
        }
      },
      {
        day: "Sunday",
        meals: {
          lunch: [
            { dish: "Veg Biryani / Non-Veg Biryani" },
            { dish: "Mattha" },
            { dish: "Gravy" },
            { dish: "Salad" },
            { dish: "Pickle" }
          ],
          dinner: [
            { dish: "Close" }
          ]
        }
      }
    ]
  }
];

export const termsAndConditions = [
  "Monthly mess subscription is ₹3000 only.",
  "Lunch time is 12:00 PM to 3:00 PM and dinner time is 7:00 PM to 10:00 PM.",
  "Sunday dinner is closed.",
  "No delivery of food to rooms. Dining is only allowed in the mess area."
];

// Add pricing data for reference (this can be used in the future if needed)
export const pricingData = {
  monthlyTiffin: [
    { type: "Full Tiffin", mealType: "Veg", frequency: "2 time", roti: "5-7", price: 2300 },
    { type: "Full Tiffin", mealType: "Non-veg", frequency: "2 time", roti: "5-7", price: 2400 },
    { type: "Full Tiffin", mealType: "Veg", frequency: "1 time", roti: "5-7", price: 1300 },
    { type: "Full Tiffin", mealType: "Non-veg", frequency: "1 time", roti: "5-7", price: 1400 },
    { type: "Half Tiffin", mealType: "Veg", frequency: "2 time", roti: "3", price: 1600 },
    { type: "Half Tiffin", mealType: "Non-veg", frequency: "2 time", roti: "3", price: 1800 }
  ],
  monthlyDineIn: [
    { dineIn: "Veg Boys", unlimited: true, frequency: "2 time", price: 2300 },
    { dineIn: "Veg Girl", unlimited: true, frequency: "2 time", price: 1800 },
    { dineIn: "Non-veg Boy", unlimited: true, frequency: "2 time", price: 2400 },
    { dineIn: "Non-veg Girl", unlimited: true, frequency: "2 time", price: 2000 }
  ],
  monthlyDineIn1Time: [
    { dineIn: "Veg Boys", unlimited: true, frequency: "1 time", price: 1300 },
    { dineIn: "Veg Girl", unlimited: true, frequency: "1 time", price: 1200 },
    { dineIn: "Non-veg Boy", unlimited: true, frequency: "1 time", price: 1400 },
    { dineIn: "Non-veg Girl", unlimited: true, frequency: "1 time", price: 1300 }
  ],
  trialGuest: [
    { type: "Tiffin", mealType: "Veg", frequency: "1 time", price: 90 },
    { type: "Tiffin", mealType: "Non-veg", frequency: "1 time", price: 130 },
    { type: "Dine In", mealType: "Veg", frequency: "1 time", price: 100 },
    { type: "Dine In", mealType: "Non-veg", frequency: "1 time", price: 140 }
  ],
  tenDaysPlan: [
    { mealType: "Veg", type: "Full tiffin", frequency: "2 time", roti: "5-7", price: 800 },
    { mealType: "Non-Veg", type: "Full tiffin", frequency: "2 time", roti: "5-7", price: 900 },
    { mealType: "Veg", type: "Half tiffin", frequency: "2 time", roti: "3", price: 600 },
    { mealType: "Non-Veg", type: "Half tiffin", frequency: "2 time", roti: "3", price: 700 },
    { mealType: "Veg", type: "Full tiffin", frequency: "1 time", roti: "5-7", price: 400 },
    { mealType: "Non-Veg", type: "Full tiffin", frequency: "1 time", roti: "5-7", price: 450 }
  ],
  fifteenDaysPlan: [
    { mealType: "Veg", type: "Full tiffin", frequency: "2 time", roti: "5-7", price: 1200 },
    { mealType: "Non-Veg", type: "Full tiffin", frequency: "2 time", roti: "5-7", price: 1300 },
    { mealType: "Veg", type: "Half tiffin", frequency: "2 time", roti: "3", price: 800 },
    { mealType: "Non-Veg", type: "Half tiffin", frequency: "2 time", roti: "3", price: 900 },
    { mealType: "Veg", type: "Full tiffin", frequency: "1 time", roti: "5-7", price: 600 },
    { mealType: "Non-Veg", type: "Full tiffin", frequency: "1 time", roti: "5-7", price: 650 }
  ]
};

export default menuData;
