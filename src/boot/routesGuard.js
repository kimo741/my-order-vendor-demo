
import { boot } from 'quasar/wrappers'
export default boot(({ router }) => {

  // /////////////////////////////
router.beforeEach((to, _, next) => {
  var canAccess = localStorage.getItem("first_view");
  if (to.meta.firstView && !canAccess) {
    next("/welcome/slider");
  } else {
    next();
  }
});
  // Set i18n instance on app
})
