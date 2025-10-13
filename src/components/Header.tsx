import logoPpa from "@/assets/logo-ppa.webp";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-yellow-400 via-primary to-yellow-400 border-b-4 border-foreground sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-2 md:py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 md:gap-4">
            <img 
              src={logoPpa} 
              alt="Logo PPA" 
              className="h-10 md:h-12 lg:h-14 object-contain bg-background rounded px-2 py-1"
            />
            <div className="hidden sm:flex items-center gap-2">
              <Badge 
                variant="outline" 
                className="bg-foreground text-background border-foreground font-montserrat font-black text-xs md:text-sm px-3 py-1.5 shadow-md"
              >
                ✓ REPRESENTANTE OFICIAL
              </Badge>
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-0.5">
            <p className="text-xs sm:text-sm md:text-base font-montserrat font-black text-foreground uppercase tracking-wide whitespace-nowrap bg-yellow-400 px-2 py-1 rounded">
              💰 PREÇO DE FÁBRICA
            </p>
            <p className="text-[9px] sm:text-[10px] md:text-xs text-foreground font-bold hidden sm:block whitespace-nowrap">
              Parcelamento em até 10x sem juros
            </p>
          </div>
        </div>
        
        {/* Mobile badge */}
        <div className="flex sm:hidden mt-2">
          <Badge 
            variant="outline" 
            className="bg-foreground text-background border-foreground font-montserrat font-black text-xs px-2 py-1"
          >
            ✓ REPRESENTANTE OFICIAL
          </Badge>
        </div>
      </div>
    </header>
  );
};

export default Header;
