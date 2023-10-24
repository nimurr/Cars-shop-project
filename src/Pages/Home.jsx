import About from "../Components/About";
import Banner from "../Components/Banner";
import CarBrandLogo from "../Components/CarBrandLogo"; 
import CarCare from "../Components/ExtraComponents/CarCare";
import FindRegineon from "../Components/ExtraComponents/FindRegineon";
import PorulerCars from "../Components/ExtraComponents/PorulerCars";
import Review from "../Components/ExtraComponents/Review";

 

export default function Home() {
        
  return (
    <div>
      <Banner></Banner>
      <CarBrandLogo></CarBrandLogo>
      <PorulerCars></PorulerCars>
      <About></About>
      <CarCare></CarCare>
      <Review></Review>
      <FindRegineon></FindRegineon>
    </div>
  )
}
