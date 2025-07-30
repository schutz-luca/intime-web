<h1 align="center">inTime Webapp 🕒</h1>

Digital tool where service providers can increase their visibility to customers and better manage their schedule slots. Also allowing the customers to find any kind of service through catalog sorted by service category. All of this in a centralized app.

Coded with **[React](https://react.dev/)** and generated with **[Vite](https://vite.dev/)**.

## 🚀 Technical Features
- Centralized global states with **[Redux](https://redux.js.org/)**
- Animated transitions with **[Framer Motion](https://motion.dev/)**
- Styling with Typescript using **[Styled Components](https://styled-components.com/)**
- Form schema validation with **[Yup](https://github.com/jquense/yup)**

## 🛠️ Installation and Setup

Follow the steps below to set up the project locally:

### 1. Prerequisites
Before starting, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [Git](https://git-scm.com/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 2. Clone the repository
Clone this repository to your local machine using:

```bash
git clone https://github.com/schutz-luca/intime-web.git
```

### 3. Navigate to the project folder
Move into the project's directory:

```bash
cd intime-web
```

### 4. Install dependencies
Install all required dependencies for the project.

```bash
npm install
```

or

```bash
yarn
```

### 5. Create environment file
Create a `.env` file in the root directory of the project and configure the required variables. Use the provided `.env.example` file as a reference:

```bash
cp .env.example .env
```

### 6. Start the Development Server
Run the development server to start the application.

```bash
npm run dev
```

or

```bash
yarn dev
```

### 7. Setup API
To run the web app properly you will have to setup the [inTime API](https://github.com/schutz-luca/intime-api).

## 📄 License

This project is licensed under a **custom MIT-based license**

See [LICENSE](./LICENSE) for full terms.