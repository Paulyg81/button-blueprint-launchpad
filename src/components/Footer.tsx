
const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4 text-amber-400">The Benjamin Button Blueprint</h3>
          <p className="text-stone-300 max-w-2xl mx-auto">
            Transform your body and reverse your biological age with science-backed strategies that actually work.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-stone-300">
          <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-amber-400 transition-colors">Refund Policy</a>
          <a href="#" className="hover:text-amber-400 transition-colors">Contact Support</a>
        </div>
        
        <div className="border-t border-stone-700 pt-8 text-center text-stone-400">
          <p className="mb-4 text-sm">
            <strong>Disclaimer:</strong> This program is for educational purposes only and is not medical advice. 
            Consult your healthcare provider before beginning any new exercise or wellness program.
          </p>
          <p className="text-sm">
            © 2025 Paul G Coaching. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
