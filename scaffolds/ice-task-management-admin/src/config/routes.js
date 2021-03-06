import UserLayout from '@/layouts/UserLayout';
import BasicLayout from '@/layouts/BasicLayout';
import NotFound from '@/pages/NotFound';

import UserLogin from '@/pages/UserLogin';
import UserRegister from '@/pages/UserRegister';
import Dashboard from '@/pages/Dashboard';
import Document from '@/pages/Document';
import Services from '@/pages/Services';
import Member from '@/pages/Member';
import Setting from '@/pages/Setting';
import AddDocument from '@/pages/AddDocument';
import AddMember from '@/pages/AddMember';
import Activities from '@/pages/Activities';

const routerConfig = [
  {
    path: '/user',
    component: UserLayout,
    children: [
      {
        path: '/login',
        component: UserLogin,
      },
      {
        path: '/register',
        component: UserRegister,
      },
      {
        path: '/',
        redirect: '/user/login',
      },
      {
        component: NotFound,
      },
    ],
  },
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/dashboard',
        component: Dashboard,
      },
      {
        path: '/document',
        component: Document,
      },
      {
        path: '/services',
        component: Services,
      },
      {
        path: '/activities',
        component: Activities,
      },
      {
        path: '/member',
        component: Member,
      },
      {
        path: '/add/document',
        component: AddDocument,
      },
      {
        path: '/add/member',
        component: AddMember,
      },
      {
        path: '/setting',
        component: Setting,
      },
      {
        path: '/',
        redirect: '/dashboard',
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;
