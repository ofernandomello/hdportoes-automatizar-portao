import logoPpa from "@/assets/logo-ppa.webp";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="bg-background border-b-4 border-primary sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 md:gap-4">
            <img 
              src={logoPpa} 
              alt="Logo PPA" 
              className="h-10 md:h-12 lg:h-14 object-contain"
            />
            <div className="hidden sm:flex items-center gap-2">
              <Badge 
                variant="outline" 
                className="bg-primary/10 text-primary border-primary/30 font-montserrat font-bold text-xs md:text-sm px-3 py-1.5"
              >
                REPRESENTANTE OFICIAL
              </Badge>
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-0.5">
            <p className="text-[10px] sm:text-xs md:text-sm font-montserrat font-semibold text-primary uppercase tracking-wide whitespace-nowrap">
              Preço Direto de Fábrica
            </p>
            <p className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground hidden sm:block whitespace-nowrap">
              Parcelamento em até 10x sem juros
            </p>
          </div>
        </div>
        
        {/* Mobile badge */}
        <div className="flex sm:hidden mt-2">
          <Badge 
            variant="outline" 
            className="bg-primary/10 text-primary border-primary/30 font-montserrat font-bold text-xs px-2 py-1"
          >
            REPRESENTANTE OFICIAL
          </Badge>
        </div>
      </div>
    </header>
  );
};

export default Header;
