// BÁSICOS //
import Vue from 'vue';
import Router from 'vue-router';
import store from './store';
// INTRO - HOMEPAGE //
import Intro from './views/1. HomePage/Intro.vue';
import HomePage from './views/1. HomePage/HomePage.vue';
// USERS PAGES //
import UserDashboard from './views/2. UserPages/UserDashboard.vue';
import UserProfile from './views/2. UserPages/UserProfile.vue';
import UserAccount from './views/2. UserPages/UserAccount.vue';
import UserStore from './views/2. UserPages/UserStore.vue';
import UserSkillTree from './views/2. UserPages/UserSkillTree.vue';
import UserExperienceTree from './views/2. UserPages/UserExperienceTree.vue';
import UserHighlights from './views/2. UserPages/UserHighlights.vue';
import UserPortfolio from './views/2. UserPages/UserPortfolio.vue';
import UserSettings from './views/2. UserPages/UserSettings.vue';
import ServicesPages from './views/2. UserPages/UserServices/ServicesPages.vue';
import CreateServicePage from './views/2. UserPages/UserServices/CreateServicePage.vue';
// MARKETPLACE //
import MarketplacePage from './views/4. MarketplacePages/MarketplacePage.vue';
// STORE //
import StorePage from './views/5. StorePages/StorePage.vue';
// EXPLORE //
import ExplorePage from './views/6. ExplorePages/ExplorePage.vue';

// SEARCH PAGES //
import SearchPage from './views/3. SearchPages/SearchPage.vue';
import RecommendedPage from './views/3. SearchPages/RecommendedPage.vue';
import NotFoundPage from './views/3. SearchPages/NotFoundPage.vue';


Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/intro',
      name: 'Intro',
      component: Intro,
    },
    {
      path: '/marketplace',
      name: 'MarketplacePage',
      component: MarketplacePage,
    },
    {
      path: '/store',
      name: 'StorePage',
      component: StorePage,
    },
    {
      path: '/explore',
      name: 'ExplorePage',
      component: ExplorePage,
    },
    {
      path: '/search',
      name: 'SearchPage',
      component: SearchPage,
    },
    {
      path: '/recommended',
      name: 'RecommendedPage',
      component: RecommendedPage,
    },
    {
      path: '/user',
      redirect: { name: 'Dashboard' },
    },
    {
      path: '/user/dashboard',
      name: 'UserDashboard',
      component: UserDashboard,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/user/profile',
      name: 'UserProfile',
      component: UserProfile,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/user/account',
      name: 'UserAccount',
      component: UserAccount,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/user/store',
      name: 'UserStore',
      component: UserStore,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/user/skills',
      name: 'UserSkillTree',
      component: UserSkillTree,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/user/experience',
      name: 'UserExperienceTree',
      component: UserExperienceTree,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/user/highlights',
      name: 'UserHighlights',
      component: UserHighlights,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/user/portfolio',
      name: 'UserPortfolio',
      component: UserPortfolio,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/user/settings',
      name: 'UserSettings',
      component: UserSettings,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/user/services',
      name: 'ServicesPages',
      component: ServicesPages,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/service',
      redirect: { name: 'Dashboard' },
    },
    {
      path: '/service/new',
      name: 'CreateServicePage',
      component: CreateServicePage,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '*',
      name: 'NotFoundPage',
      component: NotFoundPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (store.state.authId) {
      next();
    } else {
      next({ name: 'HomePage' });
    }
  } else {
    next();
  }
});

export default router;
