<div id="top"></div>


<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Pipeline][pipeline-shield]][pipeline-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Joseacasado/freedemy-backend">
    <img src="public/logo.png" alt="Logo" width="80" height="80">
  </a>
  <a href="https://www.ironhack.com/en/web-development/madrid">
    <img src="https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Freedemy API</h3>

  <p align="center">
    This is the version 2 of the REST API for the Freedemy React client
    <br />
    <a href="https://github.com/Joseacasado/freedemy-backend"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://freedemy-backend.herokuapp.com/api">View Demo</a>
    ·
    <a href="https://github.com/Joseacasado/freedemy-backend/issues">Report Bug</a>
    ·
    <a href="https://github.com/Joseacasado/freedemy-backend/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is version 2 of the final project of the Ironhack Madrid web development bootcamp. Developed from scratch a year later with the idea of applying what we learned and deepen in new concepts.

You could check the documentation to find the endpoint list and options:

[Documentation](https://example.com) (Work in progress)

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://mongodb.com/)
* [JWT](https://npmjs.com/package/jsonwebtoken)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

You will need Node 16+ installed and MongoDB cluster set and ready. This project is prepared to handle a development DDBB and a production DDBB.
Be careful with GitHub actions pipeline, you may need to delete it or adjust the configuration to your needs.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Joseacasado/freedemy-backend.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create .env file and set the following variables
   ```js
   PORT, PORT_DEV, DB_REMOTE_DEV, DB_REMOTE_PROD, DOMAIN_LOCAL, DOMAIN_REMOTE, AUTH_JWT_SECRET, AUTH_JWT_EXPIRES_IN, AUTH_JWT_EXPIRES_IN_REMEMBER, HASS_KEY
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

To find the available scripts, open your terminal and run
  ```sh
  npm run
  ```
To run the development server run:
  ```sh
  npm run dev
  ```
To run the production server run:
  ```sh
  npm run start
  ```
To run eslint run:
  ```sh
  npm run lint
  ```


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Config and add Swagger
- [ ] Set ECMASCRIPT Modules
- [ ] Add endpoints
    - [ ] Auth
    - [ ] User
    - [ ] Teacher
    - [ ] Course
    - [ ] Comment
    - [ ] File

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Jose A. Casado - [LinkedIn profile][linkedin-url-jose]
Marisa Vitale - [LinkedIn profile][linkedin-url-marisa]

Project Link: [https://github.com/Joseacasado/freedemy-backend](https://github.com/Joseacasado/freedemy-backend)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [README template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[pipeline-shield]: https://github.com/Joseacasado/freedemy-backend/actions/workflows/pipeline.yml/badge.svg?branch=main
[pipeline-url]: https://github.com/Joseacasado/freedemy-backend/actions/workflows/pipeline.yml

[forks-shield]: https://img.shields.io/github/forks/Joseacasado/freedemy-backend.svg
[forks-url]: https://github.com/Joseacasado/freedemy-backend/network/members

[stars-shield]: https://img.shields.io/github/stars/Joseacasado/freedemy-backend.svg
[stars-url]: https://github.com/Joseacasado/freedemy-backend/stargazers

[issues-shield]: https://img.shields.io/github/issues/Joseacasado/freedemy-backend.svg
[issues-url]: https://github.com/Joseacasado/freedemy-backend/issues

[license-shield]: https://img.shields.io/github/license/Joseacasado/freedemy-backend.svg
[license-url]: https://github.com/Joseacasado/freedemy-backend/blob/master/LICENSE.txt

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg
[linkedin-url-marisa]: https://linkedin.com/in/marisa-vitale/
[linkedin-url-jose]: https://linkedin.com/in/joseantonio-casado/

[ironhack-logo-url]: https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png