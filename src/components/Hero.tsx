
import { ArrowRight } from 'lucide-react';
import BlurContainer from './ui/BlurContainer';

const Hero = () => {
  return <section id="home" className="relative pt-20 pb-16 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50 to-white opacity-70"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-townly-orange opacity-5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-townly-orangeLight opacity-5 rounded-full blur-3xl animate-float" style={{
      animationDelay: '2s'
    }}></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
                Ottimizza costi ed <span className="text-townly-orange">ESG</span> con il welfare integrato
              </h1>
              <p className="mt-6 text-lg text-gray-700 md:text-xl max-w-xl">
                Riduci il turnover, taglia i costi di formazione e raggiungi i tuoi obiettivi ESG attraverso un'esperienza integrata che connette dipendenti, azienda e territorio.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 bg-townly-orange text-white font-medium rounded-lg hover:bg-townly-orangeDark transition duration-300 ease-in-out hover-glow">
                Scopri il ROI
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#benefits" className="inline-flex items-center justify-center px-6 py-3 bg-white text-townly-orange font-medium rounded-lg border border-townly-orange/30 hover:bg-townly-orange/5 transition duration-300 ease-in-out">
                Vantaggi Aziendali
              </a>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>;
};
export default Hero;
