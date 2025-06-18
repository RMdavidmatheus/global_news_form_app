import { CarrouselWeb } from "./components/carrousel";
import { FormComponent } from "./components/form-component";
import { HeaderWeb } from "./components/header";
import { InfoCards } from "./components/info-cards";

function App() {
  return (
    <div className="bg-white text-gray-800">
      <HeaderWeb/>
      {/* Body content */}
      <div className="flex flex-col items-center justify-center">
        <InfoCards/>
        <CarrouselWeb />
        <FormComponent />
      </div>
    </div>
  );
}

export default App;
