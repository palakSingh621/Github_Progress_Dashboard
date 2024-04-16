# Github_Progress_Dashboard           
<br>
### A)	DEPENDENCIES USED ALONG WITH DESCRIPTION       <br><br>               

*1.	"@ant-design/icons": "^5.3.6"*
-	Package providing icons for Ant Design framework primarily used for building web applications with React.js. It provides a comprehensive set of ready-to-use components, styles, and design patterns.
-	Effect of "@ant-design/icons": "^5.3.6": Allows installation of compatible updates up to version 5.x.x without breaking changes.

*2.	"@testing-library/jest-dom": "^5.17.0"*
-	Package Role: Jest-DOM extends the functionality of the Jest testing framework, particularly for React applications. It provides custom matchers and utilities tailored for testing DOM elements and their behaviors. 
-	These enhancements make it easier for developers to write effective and readable tests for React components by offering a set of intuitive assertions and utilities designed specifically for testing DOM-related functionality.

*3.	"@testing-library/react": "^13.4.0"*
-	React Testing Library provides utilities for testing React components in a way that simulates user interactions and ensures that components behave as expected from the user's perspective.
-	It encourages writing tests that focus on the rendered output of components, promoting better testing practices and more robust test suites.

*4.	"@testing-library/user-event": "^13.5.0"*
-	The User Event Testing Library complements React Testing Library by providing utilities for simulating user interactions with DOM elements, such as typing into input fields, clicking buttons, selecting options from dropdowns, and more.
-	It enables developers to create more realistic and thorough tests by simulating user behavior accurately.

*5.	"antd": "^5.16.1"*
-	Ant Design is a UI library for React applications, providing a wide range of pre-designed and customizable components for building modern user interfaces.

*6.	"chart.js": "^4.4.2"*
-	Chart.js is a powerful JavaScript library designed to create a wide variety of interactive and visually appealing charts and graphs for web applications. It offers a range of chart types, including line charts, bar charts, pie charts, and more, with extensive customization options to tailor the appearance and behavior of the charts to specific needs.

*7.	"npm": "^10.5.2"*
-	npm is the default package manager for Node.js, used for installing, managing, and publishing packages/modules for JavaScript projects. It provides a vast ecosystem of open-source libraries and tools that developers can leverage to build applications.

*8.	"react": "^18.2.0"*
-	React is a popular JavaScript library for building user interfaces, commonly used in web development.

*9.	"react-chartjs-2": "^5.2.0"*
-	A React wrapper for Chart.js, a JavaScript library for creating charts and graphs. It allows React developers to easily integrate Chart.js functionality into their React applications, providing a set of React components that simplify the process of creating and customizing charts.

*10.	 "react-dom": "^18.2.0"*
-	Responsible for rendering React components into the DOM (Document Object Model) and managing interactions with the browser. It facilitates the creation of dynamic and interactive user interfaces in web applications.

*11.	 "react-router-dom": "^6.22.3"*
-	A routing library for React applications, facilitating client-side routing and enabling the creation of single-page applications.

12.	 "react-scripts": "^3.0.1"
-	Provides scripts and configuration for Create React App.

*13.	 "web-vitals": "^2.1.4"*
-	Library for measuring essential web performance metrics, such as First Contentful Paint (FCP) and Largest Contentful Paint (LCP), providing insights into user experience.


<br><br><br>




### B)	MIDDLEWARE FUNCTION ALONG WITH DESCRIPTION<br><br>

*1.	useNavigate*
-	A hook provided by React Router for programmatic navigation in React applications. It returns a navigate function that can be used to navigate to different routes within the application, typically in response to user actions or other events.

*2.	useState*
-	A hook that enables functional components to manage state. It allows declaring state variables and their update functions within functional components. This Hook initializes state with an initial value and returns the current state value along with a function to update it. 

*3.	useEffec*t
-	A hook in React.js, facilitating side effects within functional components. It allows you to perform tasks such as data fetching, subscriptions, or DOM manipulations in response to component lifecycle events. With useEffect, you can encapsulate side effects, improving code organization and readability. By specifying dependencies, you control when the effect runs, ensuring optimal performance and avoiding unnecessary re-renders.

*4.	useDispatch*
-	Enhances the modularity and maintainability of React Redux applications by enabling components to trigger Redux actions directly without relying on traditional action creators or mapDispatchToProps functions.

*5.	useSelector*
-	A React Redux Hook that allows components to extract data from the Redux store state. It accepts a selector function as an argument, which specifies the part of the state to be accessed. With useSelector, components can subscribe to updates in the Redux store state and re-render whenever the selected data changes, ensuring efficient and reactive UI updates based on the application's state.


<br><br><br>




### C) APIs USED<br><br>

1. (https://api.github.com/users/)
2. (https://api.github.com/users/USERNAME/repos)
3. (https://api.github.com/repos/USERNAME/REPO/contributors)
4. https://api.github.com/repos/OWNER/REPO/stats/commit_activity
<br><br><br>
<br>


### D)	RATE LIMITS FOR THE REST API<br><br>

*1.	Primary Rate Limits*
-	GitHub imposes rate limits on REST API requests to prevent abuse and ensure availability for all users.
-	Some endpoints, such as search endpoints, have more restrictive limits.
-	Unauthenticated users have a primary rate limit of 60 requests per hour, associated with the originating IP address.
-	Authenticated users, using personal access tokens, GitHub Apps, or OAuth apps, have a primary rate limit of 5,000 requests per hour. Requests made by a GitHub App owned by a GitHub Enterprise Cloud organization have a higher rate limit of 15,000 requests per hour.

*2.	Secondary Rate Limits*
-	Certain endpoints may have additional rate limits that are more restrictive than the primary rate limits. For more details, refer to the "REST API endpoints for rate limits."
-	The GraphQL API has its own separate primary rate limit. For specific information, consult "Rate limits and node limits for the GraphQL API."

*3.	Checking Status of Rate Limit*
-	To monitor our rate limit status, we can inspect the response headers of API requests, which contain information about our current rate limit.

*4.	Exceeding the Rate Limit*
-	If the rate limit is exceeded, subsequent requests will be met with an HTTP 403 Forbidden response. The response headers provide details about the remaining rate limit.

*5.	Staying Under the Rate Limit*
-	To avoid exceeding the rate limit, you can implement strategies such as caching API responses, optimizing requests, and batching multiple operations into a single request to minimize the usage of the API.

*6.	Getting a Higher Rate Limit*
-	If your application requires a higher rate limit, consider using authorized GitHub Apps or OAuth apps, especially those associated with GitHub Enterprise Cloud organizations, to benefit from a higher rate limit of 15,000 requests per hour.
<br><br>

By understanding the primary and secondary rate limits, monitoring the rate limit status, and implementing best practices to stay within the limits, we can ensure efficient and uninterrupted usage of the GitHub REST API.
