# FordHackathon

...

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
├── README.md
├── package-lock.json
├── package.json
├── public/
│   ├── css/
│   │   └── styles.js
│   ├── favicon.ico
│   ├── index.html
│   ├── js/
│   │   └── scripts.js
│   └── manifest.json
├── resources/
│   └── sketches/
│       ├── ford-platform.pdf
│       └── platform-ui.pdf
├── src/
│   ├── App.js
│   ├── components/
│   │   └── GridItem/
│   │       ├── GridItem.js
│   │       └── index.js
│   ├── config/
│   ├── containers/
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
│   │   │   │   └── appItemOne.json
│   │   │   └── png/
│   │   │       └── app-item-one.png
│   │   └── index.js
│   ├── index.js
│   └── registerServiceWorker.js
└── yarn.lock
```

### Walkthrough

Basic walkthrough of the project structure, describing the directories
in more detail.

```
... wip
```

## Guidelines

...

### Design

...

#### Palette

![#005596](http://via.placeholder.com/150/005596/ffffff?text=005596)
![#0067B2](http://via.placeholder.com/150/0067B2/ffffff?text=0067B2)

![#F78F1E](http://via.placeholder.com/150/F78F1E/ffffff?text=F78F1E)
![#949599](http://via.placeholder.com/150/949599/ffffff?text=949599)
![#D2D3D5](http://via.placeholder.com/150/D2D3D5/000000?text=D2D3D5)

#### Dark / Light

![#231F20](http://via.placeholder.com/150/231F20/ffffff?text=231F20)
![#FFFFFF](http://via.placeholder.com/150/FFFFFF/000000?text=FFFFFF)

#### Success / Error / Warning / Info

![#1EF78F](http://via.placeholder.com/150/1ef78f/000000?text=1EF78F)
![#F7221E](http://via.placeholder.com/150/f7221e/000000?text=F7221E)
![#D6DA08](http://via.placeholder.com/150/d6da08/000000?text=D6DA08)
![#1EF3F7](http://via.placeholder.com/150/1ef3f7/000000?text=1EF3F7)

## Sources

- [Based on Jevelin's Mansory template](https://jevelin.shufflehound.com/portfolio1/masonry-side-header/)
- [Brand Book Ford](https://issuu.com/willzanette/docs/brandbook_ford)
- [Ford Guidelines](https://logoblink.com/ford-guidelines-brand-book-pdf/)
