import "./App.css";
import { Card } from './components/card/card';
import { useMenuData } from './hooks/useMenuData';

function App() {
  const { data } = useMenuData();

  return (
    <>
    <div className="conteiner">
      <h1>Menu</h1>
      <div className="card-grid">
        {data?.map(wineData =>
          <Card
            price={wineData.price}
            title={wineData.title}
            image={wineData.image}
          />
        )}
      </div>
    </div>
    <footer className="rodape">
      <div>
        @eyetech
      </div>
    </footer>
    </>
  );
}

export default App;
