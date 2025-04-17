
import { ClipboardCheck } from 'lucide-react';
import { termsAndConditions } from '../data/menuData';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">Terms & Conditions</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-8">
                Please read and understand the following terms and conditions before subscribing to our mess service.
                These terms govern your subscription and use of our services.
              </p>
              
              <div className="space-y-6">
                {termsAndConditions.map((term, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-dabbewallah-peach p-2 rounded-full mr-4 mt-0.5">
                      <ClipboardCheck className="h-5 w-5 text-dabbewallah-red" />
                    </div>
                    <p className="text-gray-800 text-lg">{term}</p>
                  </div>
                ))}
              </div>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Additional Information</h2>
              
              <ul className="space-y-4 list-disc pl-5 text-gray-700">
                <li>Payment must be made in advance at the beginning of each month.</li>
                <li>No refunds for missed meals under any circumstances.</li>
                <li>Menu is subject to change based on ingredient availability.</li>
                <li>In case of any complaint, please contact the mess manager immediately.</li>
                <li>Proper conduct is expected from all subscribers in the mess area.</li>
              </ul>
              
              <div className="mt-10 p-4 bg-dabbewallah-peach rounded-lg">
                <p className="text-center text-gray-800">
                  By subscribing to our mess service, you agree to all the terms and conditions mentioned above.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
