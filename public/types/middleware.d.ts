import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "detail"
declare module "/Users/daihefang/Desktop/usually/cetus-cmm-app/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}