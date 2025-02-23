## BLOG/MENTO

### Project Title
BLOG/MENTO

### Motivation
The motivation behind this project is to create a comprehensive blogging platform that allows users to share their thoughts, manage content, and interact with other users seamlessly.

### Screenshots
![imgrep.png](https://github.com/MostafaVT/blog-mento-intern/blob/main/frontend/public/imgrep.png)
![imgrepd.png](https://github.com/MostafaVT/blog-mento-intern/blob/main/frontend/public/imgrepd.png)
![imgrepa.png](https://github.com/MostafaVT/blog-mento-intern/blob/main/frontend/public/imgrepa.png)


### Code Style
The code style follows rules to maintain consistency, readability and scalability throughout the project.

### Tech/Framework Used
- [Payload CMS](https://payloadcms.com/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Axios](https://axios-http.com/)
- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com/)

### Features
- User authentication and authorization
- Content management with Payload CMS
- Responsive design
- Real-time updates
- RESTful API integration
- SEO optimization
- User profile management
- Commenting system

### Installation
To install the project, follow these steps:

1. **Clone the Repository**
    ```bash
    git clone https://github.com/YOUR_USERNAME/blog-mento-intern.git
    ```

2. **Install Dependencies**
    ```bash
    cd blog-mento-intern
    npm install
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

3. **Set Up Environment Variables**
    Create a `.env` file in the backend directory and add the necessary environment variables:
    ```env
    MONGODB_URI=your_mongodb_uri
    PAYLOAD_SECRET=your_payload_secret
    PORT=3000
    BLOB_READ_WRITE_TOKEN=your_read_write_token
    PAYLOAD_PUBLIC_FRONTEND_URL=http://localhost:4000
    ```

    Create a `.env` file in the frontend directory and add the necessary environment variables:
    ```env
    PORT=4000
    REACT_APP_API_URL=http://localhost:3000
    ```

4. **Run the Development Server**
    ```bash
    cd blog-mento-intern
    npm start
    ```

### How to Use
To use the blog-mento-intern project, follow these steps:

1. **Run the Development Server**
    - Make sure you have the necessary dependencies installed (see Installation section).
    - Start the development server using the following command:
      ```bash
        cd blog-mento-intern
        npm start
      ```

2. **Access the Application**
    - Open your browser and navigate to the local server URL, typically:
      ```bash
      http://localhost:4000/posts
      ```

3. **Explore the Features**
    - Use the navigation menu to explore different features of the application.
    - For example, you can view activities, manage wishlists, and more.

4. **User Interactions**
    - Interact with the application by creating posts, commenting, and managing your profile.

5. **Modify and Extend**
    - Feel free to modify the codebase to suit your needs.

### Contribute
We welcome contributions to the blog-mento-intern project! Here's how you can help:

1. **Fork the Repository**
    - Click on the "Fork" button at the top right corner of this page to create a copy of this repository in your GitHub account.

2. **Clone Your Fork**
    - Clone your forked repository to your local machine:
      ```bash
      git clone https://github.com/YOUR_USERNAME/blog-mento-intern.git
      cd blog-mento-intern
      ```

3. **Create a Branch**
    - Create a new branch for your feature or bug fix:
      ```bash
      git checkout -b feature-or-bugfix-name
      ```

4. **Make Changes**
    - Make your changes in the codebase using your preferred code editor.

5. **Commit Your Changes**
    - Commit your changes with a descriptive commit message:
      ```bash
      git add .
      git commit -m "Description of changes"
      ```

6. **Push to GitHub**
    - Push your changes to your forked repository:
      ```bash
      git push origin feature-or-bugfix-name
      ```

7. **Create a Pull Request**
    - Go to the original repository and create a pull request from your forked repository.
    - Provide a clear description of what you have done and why your changes should be merged.

### Credits
We would like to thank the following people and resources:
- **Additional Acknowledgements**
  - Special thanks to all the online resources and tutorials that helped us build this project.

### License
The project is licensed under the GNU General Public License v3.0.