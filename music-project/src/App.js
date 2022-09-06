// import logo from './logo.svg';
import './App.css';
import FileUploader from './Components/FIleUploader/FileUploader';
import Home from './Components/Home/Home';
import WalletCard from './Components/Metamask/WalletCard';
// import Meta from './Components/Metamask/WalletCard';

function App() {

  return (
    <>
      <Home />
      {/* <Meta /> */}
      <WalletCard />
      <FileUploader />
    </>
  );
}

export default App;
