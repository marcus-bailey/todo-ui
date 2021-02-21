# Creating an azure api function
These steps are from [Azure's guide](https://docs.microsoft.com/en-us/azure/static-web-apps/add-api).
1. Press F1 to open the Command Palette
1. Type Azure Functions: Create New Project...
1. Press Enter
1. Choose Browse
1. Select the api folder as the directory for your project workspace
1. Choose Select
1. Provide the following information at the prompts:
   
   | item | action |
   | --- | --- |
   | Select a language | Choose JavaScript |
   | Select a template for your project's first function | Choose HTTP trigger
   | Provide a function name | Enter GetMessage
   | Authorization level | Choose Anonymous, which enables anyone to call your function endpoint.
   
   To learn about authorization levels, see Authorization keys.
   Visual Studio Code generates an Azure Functions project with an HTTP triggered function.
   
   Your app now has a project structure similar to the following example.

   ```
   ├── api
   │   ├── GetMessage
   │   │   ├── function.json
   │   │   ├── index.js
   │   │   └── sample.dat
   │   ├── host.json
   │   ├── local.settings.json
   │   ├── package.json
   │   └── proxies.json
   ├── index.html
   ├── readme.md
   └── styles.css
   ```

1. Update the GetMessage function to return a message to the front-end. Update the GetMessage function under api/GetMessage/index.js with the following code.

   ```javascript
   module.exports = async function (context, req) {
     context.res = {
       body: {
         text: "Hello from the API"
       }
     };
   };
   ```

1. Update the GetMessage configuration under api/GetMessage/function.json with the following settings.

   ```json
   {
     "bindings": [
       {
         "authLevel": "anonymous",
         "type": "httpTrigger",
         "direction": "in",
         "name": "req",
         "methods": [
           "get"
         ],
         "route": "message"
       },
       {
         "type": "http",
         "direction": "out",
         "name": "res"
       }
     ]
   }
   ```

With the above settings, the API endpoint is:

Triggered when an HTTP request is made to the function
Available to all requests regardless of authentication status
Exposed via the `/api/message` route