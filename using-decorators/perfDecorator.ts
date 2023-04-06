import { Performance } from "perf_hooks"

export function timing(){
  return function(
    target: any, 
    propertykey: string, 
    descriptor: PropertyDescriptor
  ) {
    const value = descriptor.value
    descriptor.value = async function(...args: any[]){
      const start = performance.now()
      const out = await value.apply(this, args)
      const end = performance.now()
      console.log('Delta time: ' + (end - start))
      return out
    }
  }
}