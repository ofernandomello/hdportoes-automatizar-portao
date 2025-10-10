import logoPpa from "@/assets/logo-ppa.png";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="bg-background border-b-4 border-primary sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src={logoPpa} 
              alt="Logo PPA" 
              className="h-12 md:h-14 object-contain"
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
          
          <div className="flex flex-col items-end">
            <p className="text-xs md:text-sm font-montserrat font-semibold text-primary uppercase tracking-wide">
              Preço Direto de Fábrica
            </p>
            <p className="text-xs text-muted-foreground hidden md:block">
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
