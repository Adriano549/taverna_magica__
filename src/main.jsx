import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage.jsx';
import Sobre from './components/Sobre/sobre.jsx';
import ProdutosPage from './pages/ProdutosPage.jsx';
import ProductPurchase from './components/produtoCompra/index.jsx';
import LoginPage from './pages/loginPage.jsx';
import ForgetpasswordPage from './pages/passowrdForget.jsx';
import CreatContPage from './pages/creatContPage.jsx';
import PageCarrinho from './pages/compraPage.jsx';
import PagamentoPage from './pages/pagamentoPage.jsx';
import PagamentoComfirmadoPage from './pages/pagamentoComfirmadoPage.jsx';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/produtos" element={<ProdutosPage />} />
      <Route path="/produtos/:id" element={<ProductPurchase />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/loginSenha" element={<ForgetpasswordPage />} />
      <Route path="/criar-conta" element={<CreatContPage />} />
      <Route path="/carrinho" element={<PageCarrinho />} />
      <Route path="/pagamento" element={<PagamentoPage />} />
      <Route path="/pagamento-confirmado" element={<PagamentoComfirmadoPage />} />
    </Route>
  </Routes>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  </React.StrictMode>,
);
