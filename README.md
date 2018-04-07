# Portal
One single APP cannot always fulfill your business requirements, 
you need multiple APPs work together to form an application system and support the business processes. 
Among all the important components of an application system, a navigation component is always the key.
Portal provides such navigation functionalities that are purely based on Angular, 
and is designed for combining Angular APPs(as well as APPs built on other web technologies) 
to form a business application system. 

Inspired by other successful navigation systems (like Window10, OSX, Amazon's hover submenu, bootstrap, and so on), 
Portal provides following features:
1. Role-based.
2. Fuzzy search.
3. Recent access.
4. Hover submenu.
5. APP lazy loading  

![Portal Demo](Portal.gif)

You can also experience yourself in (http://darkhouse.com.cn/portal/dashboard). 

## To Begin
1. Install it:
   ```bash
   $ npm install angular-portal
   ```
2. Start a server in development mode
   ```bash
   $ npm run start
   ```
   Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
3. Start a server in production mode
   ```bash
   $ npm run build
   ```
   It creates a `dist` folder under the project root. After that, run following command to start a
   Express web server.
   ```bash
   $ npm run prod
   ```
   Navigate to `http://localhost:3000/`. The production mode engages a lot of optimizations on performance.
   Like Bundling, Ahead-of-time compilation, Minification, and so on. 

## How to Use
Portal is not designed as an out-of-box service, you need to do some customizations or even enhancements. 
First of all, it does not have a backend database service, instead it uses "angular-in-memory-web-api" 
to mockup the database. You may need to implement a real database service to store the role information.
Secondly, it still lacks an authentication module(in the plan). 
Last but not least, although current theme can collocate with many APPs in different color styles,
but you may still want to add your own style sheets. 

### Implement a Database Service
Open `./src/app/role.service.ts`, re-implement the 3 methods: 'getRoleDetail()', 'searchApp(term: string)', 
and 'getApp(routeLink: string)' to connect with your backend service.
You need first familiar yourself with the data structures of role which are depicted in `./src/app/role.ts`. 

A role is assigned to a login identification and contains multiple catalogs. 
While a catalog is a group of related APPs. Detail of each properties can be found in `./src/app/role.ts`,
and data examples can be find in `./src/app/in-memory-data.service.ts`.

### Implement an Authentication Module
This is a planned feature. A login page will be added with [Passport](http://www.passportjs.org/) as the authentication middleware.
However, you may still want to implement your own. Just remember to bind the role information to the identification.  

### Change the Theme
Portal doesn't leverage any existing CSS frameworks(like Bootstrap), which conversely means you 
can use any of the existing CSS frameworks without introducing much conflicts. 

The existing CSS resides in 4 places:
+ `./styles.css`: Global styles and other styles used in dependent modules.
+ `./src/app/app.component.css`: Portal framework styles.
+ `./src/app/head-bar/head-bar.component.css`: Head bar styles.
+ `./src/app/side-menu/side-menu.component.css`: Side menu styles.

## Add APPs 
You add your Angular components to the folder `src/app`. It is recommended to use
[routing module](https://angular.io/guide/router#milestone-2-routing-module) to separate routing concerns.
Then you have 2 options to add your routes to Portal: 1)Synchronous routing and 2)Asynchronous routing.

For those framework modules(like personalization, notification, login, and so on), it is recommended to use synchronous routing.
You need to add the module references to `./src/app/app.modules.ts`, in the `imports` section of `@NgModule`.
Please refer demo modules `external-app` and `mockup`. 

For other APP modules, use asynchronous routing as much as possible. 
You then need to add the module references to `./src/app/app-routing.module.ts`, in the constants array `route`.
Please refer demo modules `dashboard` and `handsontable`. `dashboard` tests the integration with [D3](https://d3js.org/); 
`handsontable` tests the integration with [Handsontable](https://handsontable.com/). 

If your APP is not an Angular APP, you can try to integrate it as a remote APP that is accessed using URL.
Please refer the demo modules `external-app`, which uses `<iframe>` to embed an external URL. 

As already indicated, `dashboard`, `external-app`, `handsontable`, and `mockup` are demo APPs.
You can safely delete them. The left 3 components `head-bar`, `side-menu`, and `not-found`
belong to the Portal framework. 
 
## License
[The MIT License](http://opensource.org/licenses/MIT)
