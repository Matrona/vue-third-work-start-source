export default [
  {
    name: 'Counter Base',
    path: '/counter-0',
    component: () => import('./demo0/DemoCounter.vue'),
  },
  {
    name: 'Counter 1',
    path: '/counter-1',
    component: () => import('./demo1/DemoCounter.vue'),
  },
  {
    name: 'Counter 4',
    path: '/counter-4',
    component: () => import('./demo4/DemoCounter.vue'),
  },
  {
    name: 'Counter 5',
    path: '/counter-5',
    component: () => import('./demo5/Server.vue'),
  },
  {
    name: 'Counter 6',
    path: '/counter-6',
    component: () => import('./demo6/BouncingBall.vue'),
  },
  {
    path: "/component-a",
    name: "ComponentA",
    component: () => import("./demo6/ComponentA.vue"),
  },
  {
    path: "/component-b",
    name: "ComponentB",
    component: () => import("./demo6/ComponentB.vue"),
  },
];
