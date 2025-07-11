import React from 'react';
import { X, Ruler } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const sizeData = {
    bras: [
      { size: '32A', bust: '32"', underbust: '28"' },
      { size: '32B', bust: '34"', underbust: '28"' },
      { size: '34A', bust: '34"', underbust: '30"' },
      { size: '34B', bust: '36"', underbust: '30"' },
      { size: '34C', bust: '38"', underbust: '30"' },
      { size: '36A', bust: '36"', underbust: '32"' },
      { size: '36B', bust: '38"', underbust: '32"' },
      { size: '36C', bust: '40"', underbust: '32"' },
      { size: '38B', bust: '40"', underbust: '34"' },
      { size: '38C', bust: '42"', underbust: '34"' }
    ],
    panties: [
      { size: 'XS', waist: '24-26"', hip: '34-36"' },
      { size: 'S', waist: '26-28"', hip: '36-38"' },
      { size: 'M', waist: '28-30"', hip: '38-40"' },
      { size: 'L', waist: '30-32"', hip: '40-42"' },
      { size: 'XL', waist: '32-34"', hip: '42-44"' },
      { size: 'XXL', waist: '34-36"', hip: '44-46"' }
    ],
    maxis: [
      { size: 'XS', bust: '32-34"', waist: '24-26"', length: '52"' },
      { size: 'S', bust: '34-36"', waist: '26-28"', length: '53"' },
      { size: 'M', bust: '36-38"', waist: '28-30"', length: '54"' },
      { size: 'L', bust: '38-40"', waist: '30-32"', length: '55"' },
      { size: 'XL', bust: '40-42"', waist: '32-34"', length: '56"' },
      { size: 'XXL', bust: '42-44"', waist: '34-36"', length: '57"' }
    ]
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Ruler className="mr-3" size={24} />
                <h2 className="text-2xl font-bold">Size Guide</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            {/* How to Measure */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">How to Measure</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-600 mb-2">Bust</h4>
                  <p className="text-sm text-gray-600">Measure around the fullest part of your bust, keeping the tape parallel to the floor.</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-600 mb-2">Waist</h4>
                  <p className="text-sm text-gray-600">Measure around your natural waistline, which is the narrowest part of your torso.</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-600 mb-2">Hip</h4>
                  <p className="text-sm text-gray-600">Measure around the fullest part of your hips, about 8 inches below your waist.</p>
                </div>
              </div>
            </div>

            {/* Size Charts */}
            <div className="space-y-8">
              {/* Bras */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Bras</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-pink-200 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-pink-100">
                        <th className="border border-pink-200 p-3 text-left font-semibold">Size</th>
                        <th className="border border-pink-200 p-3 text-left font-semibold">Bust</th>
                        <th className="border border-pink-200 p-3 text-left font-semibold">Underbust</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizeData.bras.map((item, index) => (
                        <tr key={index} className="hover:bg-pink-50">
                          <td className="border border-pink-200 p-3 font-medium">{item.size}</td>
                          <td className="border border-pink-200 p-3">{item.bust}</td>
                          <td className="border border-pink-200 p-3">{item.underbust}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Panties */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Panties</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-pink-200 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-pink-100">
                        <th className="border border-pink-200 p-3 text-left font-semibold">Size</th>
                        <th className="border border-pink-200 p-3 text-left font-semibold">Waist</th>
                        <th className="border border-pink-200 p-3 text-left font-semibold">Hip</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizeData.panties.map((item, index) => (
                        <tr key={index} className="hover:bg-pink-50">
                          <td className="border border-pink-200 p-3 font-medium">{item.size}</td>
                          <td className="border border-pink-200 p-3">{item.waist}</td>
                          <td className="border border-pink-200 p-3">{item.hip}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Maxis */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Maxis</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-pink-200 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-pink-100">
                        <th className="border border-pink-200 p-3 text-left font-semibold">Size</th>
                        <th className="border border-pink-200 p-3 text-left font-semibold">Bust</th>
                        <th className="border border-pink-200 p-3 text-left font-semibold">Waist</th>
                        <th className="border border-pink-200 p-3 text-left font-semibold">Length</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizeData.maxis.map((item, index) => (
                        <tr key={index} className="hover:bg-pink-50">
                          <td className="border border-pink-200 p-3 font-medium">{item.size}</td>
                          <td className="border border-pink-200 p-3">{item.bust}</td>
                          <td className="border border-pink-200 p-3">{item.waist}</td>
                          <td className="border border-pink-200 p-3">{item.length}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="mt-8 bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Sizing Tips</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• If you're between sizes, we recommend choosing the larger size for comfort</li>
                <li>• Our cotton blend fabric has slight stretch for a comfortable fit</li>
                <li>• For the best fit, measure yourself without clothing</li>
                <li>• If you need help with sizing, contact us at kulshresthaparul69@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SizeGuideModal;