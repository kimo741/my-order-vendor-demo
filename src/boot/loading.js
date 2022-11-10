import { Loading, QSpinnerGears, Cookies } from 'quasar'

export default async ({ router, app }) => {
  router.beforeEach((to, from, next) => {
    Loading.show({
      spinner: QSpinnerGears,
      spinnerColor: 'primary',
    })
    return next()
  });
  router.afterEach((to, from, next) => {

    Loading.hide()

  });
  // router.beforeEach((to, _, next) => {
  //   var canAccess = Cookies.get("tokken");
  //   if (to.meta.requiresAuth && !canAccess) {
  //     next("/auth");
  //   } else {
  //     next();
  //   }
  // });
};
