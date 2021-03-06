import VueRouter from 'vue-router';
import routes from './routes';

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});


// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!localStorage.token) {
//       next({
//         name: "Home",
//       });
//     } else {
//       next();
//     }
//     //need
//   } else {
//     next();
//   }
// });
// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth1)) {
//     if (localStorage.token) {
//       next({
//         name: "Dashboard",
//       });
//     } else {
//       next();
//     }
//     //need
//   } else {
//     next();
//   }
// });
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth2)) {
    if (!localStorage.usertoken) {
      next({
        name: "Login",
      });
      alert("login_okkk")
    } else {
      next();
    }
    //need
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth3)) {
    if (localStorage.usertoken && localStorage.getItem("usertype") == 'admin') {
      next();
      // alert("dash")
    } else {
      next({
        name: "Dashboard",
      });
      alert("client")
    }
    //need
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth2)) {
    if (localStorage.usertoken && localStorage.getItem("usertype") == 'admin') {
      next();
    } else {
      next({
        name: "Dashboard",
      });
     
    }
    //need
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuthuser)) {
    if (localStorage.usertoken && localStorage.getItem("usertype") == 'user') {
      next();
     
    } else {
      next({
        name:"Dashboard Admin"
      });
    }
    //need
  } else {
    next();
  }
});




export default router;
