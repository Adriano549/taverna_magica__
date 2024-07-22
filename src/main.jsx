import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/homePage.jsx'
import Sobre from './components/Sobre/sobre.jsx'
import ProdutosPage from './pages/ProdutosPage.jsx'
import ProductPurchase from './components/produtoCompra/index.jsx'
import LoginPage from './pages/loginPage.jsx'
import ForgetpasswordPage from './pages/passowrdForget.jsx'
import CreatContPage from './pages/creatContPage.jsx'
import PageCarrinho from './pages/compraPage.jsx'
import PagamentoPage from './pages/pagamentoPage.jsx'
import PagamentoComfirmadoPage from './pages/pagamentoComfirmadoPage.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/sobre",
          element: <Sobre />,
        },
        {
          path: "/produtos",
          element: <ProdutosPage />,
        },
        {
          path: "/produtos/:id",
          element: <ProductPurchase />
        },
        {
          path: "/login",
          element: <LoginPage />
        },
        {
          path: "/loginSenha",
          element: <ForgetpasswordPage />
        },
        {
          path: "/criar-conta",
          element: <CreatContPage />
        },
        {
          path: "/carrinho",
          element: <PageCarrinho />
        },
        {
          path:"/pagamento",
          element:<PagamentoPage/>
        },
        {
          path:"/pagamento-confirmado",
          element: <PagamentoComfirmadoPage/>
        }
      ]
    }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

