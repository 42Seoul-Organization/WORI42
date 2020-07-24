<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better please fork the repo and create a pull request or simple open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->





<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for build-url, contributors-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![NPM](https://img.shields.io/npm/v/react-ion-slider.svg)](https://www.npmjs.com/package/react-ion-slider)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<!-- PROJECT LOGO -->
<br />
<p align="center">

  <a href="https://github.com/madist/react-ion-slider"><h3 align="center">react-ion-slider</h3></a>
    <a href="http://ionden.com/a/plugins/ion.rangeSlider/api.html"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="http://ionden.com/a/plugins/ion.rangeSlider/demo.html">View Demo</a>
    ·
    <a href="https://github.com/madist/react-ion-slider/issues">Report Bug</a>
    ·
    <a href="https://github.com/madist/react-ion-slider/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [1. Before using `react-ion-slider` please import module.](#1-before-using-react-ion-slider-please-import-module)
  - [2. Implement below codes in the react render method.](#2-implement-below-codes-in-the-react-render-method)
  - [Supported Props](#supported-props)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Reference](#reference)



<!-- ABOUT THE PROJECT -->
## About The Project

Ion-rangeslider react module, this module mapping `ion-rangeslider` properties to props.


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```
* react
```sh
npm install --save react react-dom
```

### Installation

1. Npm install
   ```sh
   npm install --save react-ion-slider
   ```

<!-- USAGE EXAMPLES -->
## Usage
### 1. Before using `react-ion-slider` please import module.
```js
import { IonRangeSlider } from 'react-ion-slider'
```
### 2. Implement below codes in the react render method.

```js
  <IonRangeSlider type={} min={} max={} from={} to={} step={} values={} keyboard={} {...} />
```

### 3. Update options manually without componentDidMount
```js
<IonRangeSlider ref={r => this.ionSlider = r} />

this.ionSlider.update({skin: 'flat', min: 100, max: 500, from: 120, to: 240, type: 'double'})
```

### Supported Props
| Option                 | Defaults | Type     | Description                                                                                                                                                              |
| ---------------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Basic setup            |          |          |                                                                                                                                                                          |
| type                   | "single" | string   | Choose slider type, could be single - for one handle, or double for two handles                                                                                          |
| min                    | 10       | number   | Set slider minimum value                                                                                                                                                 |
| max                    | 100      | number   | Set slider maximum value                                                                                                                                                 |
| from                   | min      | number   | Set start position for left handle (or for single handle)                                                                                                                |
| to                     | max      | number   | Set start position for right handle                                                                                                                                      |
| Advanced setup         |          |          |                                                                                                                                                                          |
| step                   | 1        | number   | Set sliders step. Always > 0. Could be fractional.                                                                                                                       |
| values                 | []       | array    | Set up your own array of possible slider values. They could be numbers or strings. If the values array is set up, min, max and step param, are no longer can be changed. |
| keyboard               | TRUE     | boolean  | Activates keyboard controls. Move left: ←, ↓, A, S. Move right: →, ↑, W, D.                                                                                              |
| Grid setup             |          |          |                                                                                                                                                                          |
| grid                   | FALSE    | boolean  | Enables grid of values.                                                                                                                                                  |
| grid_margin            | TRUE     | boolean  | Set left and right grid borders.                                                                                                                                         |
| grid_num               | 4        | number   | Number of grid units.                                                                                                                                                    |
| grid_snap              | FALSE    | boolean  | Snap grid to sliders step (step param). If activated, grid_num will not be used.                                                                                         |
| Interval control       |          |          |                                                                                                                                                                          |
| drag_interval          | FALSE    | boolean  | Allow user to drag whole range. Only in double type                                                                                                                      |
| min_interval           | —        | number   | Set minimum diapason between sliders. Only in double type                                                                                                                |
| max_interval           | —        | number   | Set maximum diapason between sliders. Only in double type                                                                                                                |
| Handles control        |          |          |                                                                                                                                                                          |
| from_fixed             | FALSE    | boolean  | Fix position of left (or single) handle.                                                                                                                                 |
| from_min               | min      | number   | Set minimum limit for left handle.                                                                                                                                       |
| from_max               | max      | number   | Set the maximum limit for left handle                                                                                                                                    |
| from_shadow            | FALSE    | boolean  | Highlight the limits for left handle                                                                                                                                     |
| to_fixed               | FALSE    | boolean  | Fix position of right handle.                                                                                                                                            |
| to_min                 | min      | number   | Set the minimum limit for right handle                                                                                                                                   |
| to_max                 | max      | number   | Set the maximum limit for right handle                                                                                                                                   |
| to_shadow              | FALSE    | boolean  | Highlight the limits for right handle                                                                                                                                    |
| UI control             |          |          |                                                                                                                                                                          |
| skin                   | "flat"   | string   | Choose UI skin to use                                                                                                                                                    |
| hide_min_max           | FALSE    | boolean  | Hides min and max labels                                                                                                                                                 |
| hide_from_to           | FALSE    | boolean  | Hide from and to labels                                                                                                                                                  |
| force_edges            | FALSE    | boolean  | Slider will be always inside it's container.                                                                                                                             |
| extra_classes          | —        | string   | Traverse extra CSS-classes to slider container                                                                                                                           |
| block                  | FALSE    | boolean  | Locks slider and makes it inactive (visually). input is NOT disabled. Can still be send with forms.                                                                      |
| Prettify numbers       |          |          |                                                                                                                                                                          |
| prettify_enabled       | TRUE     | boolean  | Improve readability of long numbers. 10000000 → 10 000 000                                                                                                               |
| prettify_separator     | " "      | string   | Set up your own separator for long numbers. 10 000, 10.000, 10-000 etc.                                                                                                  |
| prettify               | null     | function | Set up your own prettify function. Can be anything. For example, you can set up unix time as slider values and than transform them to cool looking dates.                |
| —                      |          |          |                                                                                                                                                                          |
| prefix                 | —        | string   | Set prefix for values. Will be set up right before the number: $100                                                                                                      |
| postfix                | —        | string   | Set postfix for values. Will be set up right after the number: 100k                                                                                                      |
| max_postfix            | —        | string   | Special postfix, used only for maximum value. Will be showed after handle will reach maximum right position. For example 0 — 100+                                        |
| decorate_both          | TRUE     | boolean  | Used for "double" type and only if prefix or postfix was set up. Determine how to decorate close values. For example: $10k — $100k or $10 — 100k                         |
| values_separator       | " — "    | string   | Set your own separator for close values. Used for double type. Default: 10 — 100. Or you may set: 10 to 100, 10 + 100, 10 → 100 etc.                                     |
| Data control           |          |          |                                                                                                                                                                          |
| input_values_separator | " ; "    | string   | Separator for double values in input value property. Default FROM;TO. Only for double type                                                                               |
| disable                | FALSE    | boolean  | Locks slider and makes it inactive. inputis disabled too. Invisible to forms.                                                                                            |
| Callbacks              |          |          |                                                                                                                                                                          |
| scope                  | null     | object   | Scope for callbacks. Pass any object. Callback will be executed like this: onChange.call(scope);                                                                         |
| onStart                | null     | function | Callback. Is called on slider start.                                                                                                                                     |
| onChange               | null     | function | Callback. IS called on each values change.                                                                                                                               |
| onFinish               | null     | function | Callback. Is called than user releases handle.                                                                                                                           |
| onUpdate               | null     | function | Callback. Is called than slider is modified by external methods update or reset.                                                                                         |

### Ref Functions
| Option            | Defaults | Type        | Description                                                                                                                                                              |
| ----------------- | -------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| update            |   null   |   function  |     You can update options manually                                                                                                                                      |

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/madist/react-ion-slider/issues) for a list of proposed features (and known issues).


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

GiPyeong Lee - [@gipyeong](https://linkedin.com/in/gipyeong-lee-85734396) - ocsoon.jin@gmail.com

Project Link: [https://github.com/madist/react-ion-slider](https://github.com/madist/react-ion-slider)

## Reference
[Best Readme Template](https://github.com/othneildrew/Best-README-Template)
