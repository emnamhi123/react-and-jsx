import "./App.css";
import Product from "./components/Product";
import Price from "./components/Price";
import Name from "./components/Name";
import Description from "./components/Description";
import Image from "./components/Image";
import Carte from "./components/Carte";
import Prenom from "./components/Prenom";

function App() {
  const user = {
    prenom: "Emna",
    photo:
      "https://static.vecteezy.com/ti/photos-gratuite/t2/26770033-mignonne-a-la-mode-bonhomme-de-neige-isole-sur-hiver-contexte-photo.jpg",
  };

  return (
    <div className="App">
      <Name pcName={Product.name} />
      <Image pcImage={Product.imageUrl} />
      <Description pcDescription={Product.description} />
      <Price pcPrice={Product.price} />
      <Carte
        pcName={Product.name}
        pcImage={Product.imageUrl}
        pcDescription={Product.description}
        pcPrice={Product.price}
        userPrenom={user.prenom}
      />
      <Prenom userPrenom={user.prenom} userImage={user.photo} />
    </div>
  );
}

export default App;
