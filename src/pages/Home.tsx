
import { Link } from 'react-router-dom';
import { ChefHat, Utensils, Phone, FileText } from 'lucide-react';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dabbewallah-peach to-dabbewallah-soft-orange py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-dabbewallah-red">
            Welcome to Dabbewallah
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Homely meals delivered with love. Experience authentic Indian flavors with our 4-week rotating menu.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/menu" 
              className="bg-dabbewallah-orange hover:bg-dabbewallah-red text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              View Menu
            </Link>
            <Link to="/contact" 
              className="bg-white hover:bg-gray-100 text-dabbewallah-orange font-semibold py-3 px-6 rounded-lg transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dabbewallah-peach rounded-lg p-6 text-center shadow-md transition-transform hover:scale-105">
              <div className="bg-white p-4 inline-block rounded-full mb-4">
                <Utensils className="h-8 w-8 text-dabbewallah-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Weekly Menu</h3>
              <p className="text-gray-700">
                We offer a 4-week rotating menu with delicious lunch and dinner options every day.
              </p>
              <Link to="/menu" 
                className="mt-4 inline-block text-dabbewallah-orange hover:text-dabbewallah-red font-medium">
                View Menu →
              </Link>
            </div>
            
            <div className="bg-dabbewallah-peach rounded-lg p-6 text-center shadow-md transition-transform hover:scale-105">
              <div className="bg-white p-4 inline-block rounded-full mb-4">
                <ChefHat className="h-8 w-8 text-dabbewallah-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Food</h3>
              <p className="text-gray-700">
                We prepare fresh, healthy, and tasty meals using quality ingredients and authentic recipes.
              </p>
              <p className="mt-4 inline-block text-dabbewallah-orange font-medium">
                Homemade Goodness
              </p>
            </div>
            
            <div className="bg-dabbewallah-peach rounded-lg p-6 text-center shadow-md transition-transform hover:scale-105">
              <div className="bg-white p-4 inline-block rounded-full mb-4">
                <Phone className="h-8 w-8 text-dabbewallah-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Subscription</h3>
              <p className="text-gray-700">
                Subscribe to our monthly mess service for just ₹3000 and enjoy delicious meals every day.
              </p>
              <Link to="/contact" 
                className="mt-4 inline-block text-dabbewallah-orange hover:text-dabbewallah-red font-medium">
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-dabbewallah-soft-orange">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Mess?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Enjoy homely food at affordable prices. Our monthly subscription is just ₹3000.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/terms" 
              className="flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 text-dabbewallah-orange font-semibold py-3 px-6 rounded-lg transition-colors">
              <FileText className="h-5 w-5" />
              <span>Terms & Conditions</span>
            </Link>
            <Link to="/contact" 
              className="bg-dabbewallah-orange hover:bg-dabbewallah-red text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Subscribe Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
