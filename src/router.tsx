import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { SaleDealsPage } from './pages/SaleDealsPage';
import { VirtualAssistantPage } from './pages/VirtualAssistantPage';
import { TemplatesPage } from './pages/TemplatesPage';
import { PromotionsPage } from './pages/PromotionsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'dich-vu',
        element: <ServiceDetailPage />,
      },
      {
        path: 'dich-vu/:slug',
        element: <ServiceDetailPage />,
      },
      {
        path: 'sale-gia-tot',
        element: <SaleDealsPage />,
      },
      {
        path: 'tro-ly-ao',
        element: <VirtualAssistantPage />,
      },
      {
        path: 'kho-giao-dien',
        element: <TemplatesPage />,
      },
      // Note: "Tin tức" has been excluded per user request ("bỏ tin tức đi")
      {
        path: 'uu-dai',
        element: <PromotionsPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
