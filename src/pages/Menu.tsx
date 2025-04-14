
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import menuData from '../data/menuData';
import { Utensils, Coffee } from 'lucide-react';

const Menu = () => {
  const [activeWeek, setActiveWeek] = useState(1);
  const [activeMeals, setActiveMeals] = useState<Record<string, string>>({
    "Monday": "both",
    "Tuesday": "both",
    "Wednesday": "both",
    "Thursday": "both",
    "Friday": "both",
    "Saturday": "both",
    "Sunday": "both"
  });

  const handleWeekChange = (weekNumber: number) => {
    setActiveWeek(weekNumber);
  };

  const toggleMeal = (day: string, meal: string) => {
    setActiveMeals(prev => {
      const current = prev[day];
      if (current === meal) {
        return { ...prev, [day]: "both" };
      } else if (current === "both") {
        return { ...prev, [day]: meal === "lunch" ? "dinner" : "lunch" };
      } else {
        return { ...prev, [day]: meal };
      }
    });
  };

  const currentWeekData = menuData.find(week => week.weekNumber === activeWeek);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <section className="py-10 px-4">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Weekly Menu</h1>
            
            {/* Week Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {[1, 2, 3, 4].map((week) => (
                <button
                  key={week}
                  onClick={() => handleWeekChange(week)}
                  className={`px-5 py-2 rounded-md font-medium ${
                    activeWeek === week 
                      ? 'bg-dabbewallah-orange text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  } transition-colors`}
                >
                  Week {week}
                </button>
              ))}
            </div>
            
            {/* Menu Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentWeekData?.days.map((day) => (
                <div key={day.day} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="bg-dabbewallah-soft-orange px-4 py-3">
                    <h3 className="font-bold text-xl">{day.day}</h3>
                  </div>
                  
                  <div className="p-4">
                    {/* Meal Toggle Buttons */}
                    <div className="flex mb-4 border rounded-md overflow-hidden">
                      <button
                        onClick={() => toggleMeal(day.day, "lunch")}
                        className={`flex-1 py-2 flex items-center justify-center gap-2 ${
                          activeMeals[day.day] === "lunch" || activeMeals[day.day] === "both"
                            ? 'bg-dabbewallah-peach text-gray-800' 
                            : 'bg-gray-100 text-gray-500'
                        }`}
                      >
                        <Utensils className="h-4 w-4" />
                        <span>Lunch</span>
                      </button>
                      <button
                        onClick={() => toggleMeal(day.day, "dinner")}
                        className={`flex-1 py-2 flex items-center justify-center gap-2 ${
                          activeMeals[day.day] === "dinner" || activeMeals[day.day] === "both"
                            ? 'bg-dabbewallah-peach text-gray-800' 
                            : 'bg-gray-100 text-gray-500'
                        }`}
                      >
                        <Coffee className="h-4 w-4" />
                        <span>Dinner</span>
                      </button>
                    </div>
                    
                    {/* Lunch Items */}
                    {(activeMeals[day.day] === "lunch" || activeMeals[day.day] === "both") && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-lg mb-2 text-dabbewallah-orange">Lunch</h4>
                        <ul className="space-y-1">
                          {day.meals.lunch.map((item, index) => (
                            <li key={index} className="flex items-center">
                              <span className="text-dabbewallah-orange mr-2">•</span>
                              {item.dish}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Dinner Items */}
                    {(activeMeals[day.day] === "dinner" || activeMeals[day.day] === "both") && (
                      <div>
                        <h4 className="font-semibold text-lg mb-2 text-dabbewallah-orange">Dinner</h4>
                        <ul className="space-y-1">
                          {day.meals.dinner.map((item, index) => (
                            <li key={index} className="flex items-center">
                              <span className="text-dabbewallah-orange mr-2">•</span>
                              {item.dish}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Menu;
