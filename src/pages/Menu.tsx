
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import menuData from '../data/menuData';
import { Utensils, Coffee, Calendar, Info } from 'lucide-react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-10 space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Weekly Menu</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our 4-week rotating menu offers a variety of homemade meals prepared with fresh ingredients and authentic recipes.
            </p>
          </div>
          
          {/* Week Selector */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium flex items-center gap-2">
                <Calendar className="h-5 w-5 text-dabbewallah-orange" />
                Select Week
              </h2>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Info className="h-4 w-4 text-gray-500" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">Our menu rotates every 4 weeks. Select a week to view the meal plan.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((week) => (
                <Button
                  key={week}
                  onClick={() => handleWeekChange(week)}
                  variant={activeWeek === week ? "default" : "outline"}
                  className={activeWeek === week ? "bg-dabbewallah-orange hover:bg-dabbewallah-orange/90" : ""}
                >
                  Week {week}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentWeekData?.days.map((day) => (
              <Card key={day.day} className="overflow-hidden">
                <CardHeader className="bg-dabbewallah-soft-orange p-4">
                  <h3 className="font-bold text-xl text-gray-900">{day.day}</h3>
                </CardHeader>
                
                <CardContent className="p-0">
                  {/* Meal Toggle Buttons */}
                  <div className="flex border-b">
                    <button
                      onClick={() => toggleMeal(day.day, "lunch")}
                      className={`flex-1 py-3 flex items-center justify-center gap-2 transition-colors ${
                        activeMeals[day.day] === "lunch" || activeMeals[day.day] === "both"
                          ? 'bg-dabbewallah-peach text-gray-800 font-medium' 
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      <Utensils className="h-4 w-4" />
                      <span>Lunch</span>
                    </button>
                    <button
                      onClick={() => toggleMeal(day.day, "dinner")}
                      className={`flex-1 py-3 flex items-center justify-center gap-2 transition-colors ${
                        activeMeals[day.day] === "dinner" || activeMeals[day.day] === "both"
                          ? 'bg-dabbewallah-peach text-gray-800 font-medium' 
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      <Coffee className="h-4 w-4" />
                      <span>Dinner</span>
                    </button>
                  </div>
                  
                  <div className="p-5">
                    {/* Lunch Items */}
                    {(activeMeals[day.day] === "lunch" || activeMeals[day.day] === "both") && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2 text-dabbewallah-orange">
                          <Utensils className="h-4 w-4" />
                          Lunch
                        </h4>
                        <ul className="space-y-2">
                          {day.meals.lunch.map((item, index) => (
                            <li key={index} className="flex items-center pl-2 py-1 border-l-2 border-dabbewallah-orange">
                              <span className="text-gray-800">{item.dish}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Separator if both meal types are shown */}
                    {activeMeals[day.day] === "both" && <Separator className="my-4" />}
                    
                    {/* Dinner Items */}
                    {(activeMeals[day.day] === "dinner" || activeMeals[day.day] === "both") && (
                      <div>
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2 text-dabbewallah-orange">
                          <Coffee className="h-4 w-4" />
                          Dinner
                        </h4>
                        <ul className="space-y-2">
                          {day.meals.dinner.map((item, index) => (
                            <li key={index} className="flex items-center pl-2 py-1 border-l-2 border-dabbewallah-orange">
                              <span className="text-gray-800">{item.dish}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Subscription Info */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Monthly Subscription</h3>
            <p className="text-gray-700 mb-4">
              Enjoy our homely meals every day with our affordable monthly subscription plan.
            </p>
            <div className="inline-block bg-dabbewallah-orange text-white font-bold py-2 px-6 rounded-full text-xl">
              ₹3000 / month
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Menu;
