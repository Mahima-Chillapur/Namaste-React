# Namaste React

...

# Parcel

- Dev Build
- Local server
- HMR= hot module replacement
- File watching Algorithm - written in c++
- Caching - Faster builds
- Image optimization
- Minification
- Bundling
- Compress
- differential Bundling - support older bundlers
- Diagnostics
- code splitting
- consistent hosting
- https
- tree shaking - remove unused code
- different dev and prod bundles
- ***
  --Notes--

// REact.createElement craetes an object => renders=> then becomes html element
//console.log(heading)
// JSX is not HTML its HTML like syntax
// parcel - babel traspiles the code before it reaches the JS

// REact element
// const jsxHeading= (<h1
// id="index"
// className="head"
// tabIndex="5">Namaste REact from JSX</h1>)

-- two types of export and import
--Default export/import
export default component;
import component from "Path"

--Named export/import
export const component
import {component} from "path"

REACT HOOKs
--Normal JS functions
--written by facebook developers inside React library.
--Most Important-- UseState()-superpowerful state variables in react,
UseEffect()
