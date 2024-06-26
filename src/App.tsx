import { useState } from 'react';
import "./App.css";
import { Card } from './components/card/card';
import { useMenuData } from './hooks/useMenuData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const { data } = useMenuData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () =>{
    setIsModalOpen(prev => !prev)
  }

  return (
    <>
    <div className="container">
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
      {isModalOpen && <CreateModal />}
      <button onClick={handleOpenModal}>novo</button>
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
