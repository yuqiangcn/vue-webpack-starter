export default [
  {
    path: "/",
    name: "Home"
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/about.vue"
      )
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(
        /* webpackChunkName: "contact" */ "../components/contact.vue"
      )
  }
];
