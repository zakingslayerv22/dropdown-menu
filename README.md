This package simply handles the dropdown show/hide logic.

To use, have the structure and name the classes like so:

```html
<div class="dropdown">
  <a href="#" class="dropdown-action"> Dropdown Action </a>
  <ul class="dropdown-menu">
    <li><a href="#">Menu Item 1</a></li>
    <li><a href="#">Menu Item 2</a></li>
    <li><a href="#">Menu Item 3</a></li>
  </ul>
</div>
```

The structure is a `.dropdown` parent with a `.dropdown-action` and a `.dropdown-menu` sibling.

Import the Dropdown class and create a new instance of it in the `index.js` or wherever you need to use the package:

```javascript
import { Dropdown } from "eriwe-dropdown-toggler";

const dropdown = new Dropdown();
```

Better to create the instance after the whole page has been loaded:

```javascript
import { Dropdown } from "eriwe-dropdown-toggler";

window.onload = () => {
  const dropdown = new Dropdown();
};
```

This was published as a package on npm.

[Install from npm](https://www.npmjs.com/package/eriwe-dropdown-toggler)

[Contribute on Github (the npm package)](https://github.com/zakingslayerv22/eriwe-dropdown-toggler)
