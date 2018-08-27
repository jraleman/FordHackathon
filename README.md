# MetroCube App Store :: FordHackathon

[![RN-Version](https://img.shields.io/badge/react.js-16.4.2-01babc.svg)](https://github.com/facebook/react/releases/tag/v16.4.2)
[![GitHub Stars](https://img.shields.io/github/stars/jraleman/FordHackathon.svg)](https://github.com/jraleman/FordHackathon/stars)
[![GitHub Issues](https://img.shields.io/github/issues/jraleman/FordHackathon.svg)](https://github.com/jraleman/FordHackathon/issues)

![ford-motors-logo](resources/ford-motors-logo.png)

## Setup

Clone the repository

```
git clone https://github.com/jraleman/FordHackathon.git ford-app-store
cd ford-app-store/
```

Install all the dependencies

```
npm install
```

And start the server in the background

```
npm start &
```

## Project Structure

The idea of having a good project structure is to have a cross platform
project, to maximize code reuse, keep the configurations out of the code,
and minimize the component state.

This is the main idea:

```
./
├── Gruntfile.js
├── README.md
├── package-lock.json
├── package.json
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── favicon.ico
│   ├── index.html
│   ├── js/
│   │   ├── cubeportfolio.js
│   │   └── scripts.js
│   ├── login.html
│   ├── manifest.json
│   └── plugins/
│       ├── animate/
│       │   └── animate.css
│       ├── bootstrap/
|      ...
│       └── smooth-scroll/
│           └── smooth-scroll.js
├── resources/
│   ├── build-up/
│   │   ├── photos/
│   │   │   ├── mounting-phone-holder.jpg
│   │   │   ├── mounting-secure-top.jpg
│   │   │   └── mounting-top.jpg
│   │   ├── stuff-to-buy.pdf
│   │   └── videos/
│   │       ├── cutting-pc-case.mp4
│   │       └── mounting-overview.mp4
│   ├── ford-motors-logo.png
│   └── sketches/
│       ├── app-info-page.pdf
│       ├── ford-platform.pdf
│       ├── metrocube-logo.pdf
│       └── platform-ui.pdf
├── src/
│   ├── App.js
│   ├── components/
│   │   ├── FilterItem/
│   │   │   ├── FilterItem.js
│   │   │   └── index.js
│   │   ├── GridFilters/
│   │   │   ├── GridFilters.js
│   │   │   └── index.js
│   │   ├── GridItem/
│   │   │   ├── GridItem.js
│   │   │   └── index.js
│   │   └── GridTitle/
│   │       ├── GridTitle.js
│   │       └── index.js
│   ├── containers/
│   │   ├── FilterContainer/
│   │   │   ├── FilterContainer.js
│   │   │   └── index.js
│   │   ├── GridContainer/
│   │   │   ├── GridContainer.js
│   │   │   └── index.js
│   │   └── RootContainer/
│   │       ├── RootContainer.js
│   │       └── index.js
│   ├── fixtures/
│   │   ├── apps/
│   │   │   ├── index.js
│   │   │   ├── json/
│   │   │   │   ├── appItemEight.json
│   │   │   │   ├── appItemEleven.json
│   │   │   │   ├── appItemFifthteen.json
│   │   │   │   ├── appItemFive.json
│   │   │   │   ├── appItemFour.json
│   │   │   │   ├── appItemFourteen.json
│   │   │   │   ├── appItemNine.json
│   │   │   │   ├── appItemOne.json
│   │   │   │   ├── appItemSeven.json
│   │   │   │   ├── appItemSix.json
│   │   │   │   ├── appItemSixteen.json
│   │   │   │   ├── appItemTen.json
│   │   │   │   ├── appItemThirteen.json
│   │   │   │   ├── appItemThree.json
│   │   │   │   ├── appItemTwelve.json
│   │   │   │   └── appItemTwo.json
│   │   │   └── png/
│   │   │       ├── app-item-eight.png
│   │   │       ├── app-item-eleven.png
│   │   │       ├── app-item-fifthteen.png
│   │   │       ├── app-item-five.png
│   │   │       ├── app-item-four.png
│   │   │       ├── app-item-fourteen.png
│   │   │       ├── app-item-nine.png
│   │   │       ├── app-item-one.png
│   │   │       ├── app-item-seven.png
│   │   │       ├── app-item-six.png
│   │   │       ├── app-item-sixteen.png
│   │   │       ├── app-item-ten.png
│   │   │       ├── app-item-thirteen.png
│   │   │       ├── app-item-three.png
│   │   │       ├── app-item-twelve.png
│   │   │       └── app-item-two.png
│   │   └── index.js
│   ├── index.js
│   └── libs/
│       ├── getResponse.js
│       └── registerServiceWorker.js
└── yarn.lock
```

### Walkthrough

Basic walkthrough of the project structure, describing the directories
in more detail.

#### `public/`

Divides what is *static* vs *dynamic* logic...
Pretty much anything that is not used by the app when it compiles.

#### `resources/`

Project resources, such as videos, photos, sketches, etc...

#### `src/`

React app source code.

- #### `src/components/`

All the stateless components will go here.
These components should only take props.

- #### `src/containers/`

The Container components go here.
These are the stateful ones, and the ones that make the API calls.
These are the ones that are connected to the Redux store.

- #### `src/fixtures/`

Contains JSON files that mimic API responses, used for quicker development.

## Style Guide

This is a set of standards, principles and rules every developer or
designer should follow in order to improve this product.

### Design

Good design is not just what looks good.
It also needs to perform, convert, astonish, and fulfill its purpose.
It can be innovative or it might just get the job done.

#### Color Palette

**Primary Colors**

![#005596](http://via.placeholder.com/150/005596/ffffff?text=005596)
![#0067B2](http://via.placeholder.com/150/0067B2/ffffff?text=0067B2)

**Alternative Colors**

![#F78F1E](http://via.placeholder.com/150/F78F1E/ffffff?text=F78F1E)
![#949599](http://via.placeholder.com/150/949599/ffffff?text=949599)
![#D2D3D5](http://via.placeholder.com/150/D2D3D5/000000?text=D2D3D5)

**Dark / Light**

![#231F20](http://via.placeholder.com/150/231F20/ffffff?text=231F20)
![#FFFFFF](http://via.placeholder.com/150/FFFFFF/000000?text=FFFFFF)

**Success / Error / Warning / Info**

![#1EF78F](http://via.placeholder.com/150/1ef78f/000000?text=1EF78F)
![#F7221E](http://via.placeholder.com/150/f7221e/000000?text=F7221E)
![#D6DA08](http://via.placeholder.com/150/d6da08/000000?text=D6DA08)
![#1EF3F7](http://via.placeholder.com/150/1ef3f7/000000?text=1EF3F7)

## TODO

- [ ] Integrate `settings` option, save offline data
- [ ] `gh-pages`
- [ ] Setup domain for GoogleCloud app
- [ ] Modal, include `terms of services` and `privacy policy`
- [ ] Implement `FilterItem` and `FilterContainer`
- [ ] Setup `RSPI`, install Raspbian and dependencies
- [ ] Swagger API for documentation
- [ ] EagleCAD electronic schematics

## Sources

- [Forbes - Brand Style Guides ](https://www.forbes.com/sites/propointgraphics/2016/07/24/brand-style-guides/#18d35a2b61a5)
- [Ford Motors - Basic Elements](http://www.lookandstyle.ford.com/cs/BlobServer?blobtable=MungoBlobs&blobcol=urldata&blobheadervalue1=attachment%3Bfilename%3D%22BasicElements_Aug_09a.pdf%22&blobheadervalue2=abinary%3Bcharset%3DUTF-8&blobheadername1=Content-Disposition&blobheadername2=MDT-Type&blobheader=application%2Fpdf&blobwhere=1214346775318&blobkey=id)
- [Ford Motors - Brand Book](https://issuu.com/willzanette/docs/brandbook_ford)
- [Ford Motors - Guidelines](https://logoblink.com/ford-guidelines-brand-book-pdf)
- [MetroCube - HTML5 Theme](https://github.com/jraleman/MetroCube)

## Dependencies

This project uses the following technologies:

- Animate
- Axios
- Bootstrap
- Cubeportfolio
- FontAwesome
- JQuery
- SmoothScroll

## License

This project is under the Apache License, a permissive license whose main
conditions require preservation of copyright and license notices.
Contributors provide an express grant of patent rights.
Licensed works, modifications, and larger works may be distributed under
different terms and without source code.

See [LICENSE](LICENSE) for more info.
