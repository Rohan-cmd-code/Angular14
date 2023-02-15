
***Angular is a modular framework i.e. everything in anguar is module***

*** ng serve  or npm run start ***

--> It is going to build or Angular Project and finally after successful compilation and building process it is going to start the server on localhost:4200

--> If the "ng" is not globally installed then it will use the "ng" from the node_module.

--> As we have Angular CLI included this means it doesn't matter if we have ng in our system or not. Our project will going to start with the command:

                -- npm run start

*** Directory Structure and Files In Our Angular App ***

1. tsconfig.json -->

    --> ts stand for TypeScript. 
    --> Angular is written on TypeScript therefore we need tsconfig file.

    *** What is tsconfig file ***
    --> A tsconfig file holds all the information or settings for the TypeScript.

2. tsconfig.app.json -->

    --> It holds the application related information.

3. tsconfig.spec.json -->

    --> It holds the testing related information.

4. angular.json -->

    --> It takes the angular cli that where you need to generate something.

5. source directory(src) -->

    --> All the development happens in source directory.
    --> All the module, components, templates, style etc. will be available in source module.

6. main.ts -->

    --> In angular the project starts from main.ts
    --> Firstly it will check for enviornment i.e. what type of enviornment we have.

    *** Method ***
    --> platformBrowseDynamic().bootstrapModule(AppModule)
            .catch(err => console.error(err))

            --> means how we can initiate the angular project that starts with App module.

*** App Module ***

1. app module.ts -->

    --> This is the file which is first loaded.
    --> It include AppComponent.

    *** Making any module as an Angular Module ***

    --> By adding Decorator in app.module.ts

            - @NgModule()

    *** Making Component ***
    ERROR: The class 'AppComponent' is listed in the declarations of the NgModule 'AppModule', but is not a directive, a component, or a pipe. Either remove it from the NgModule's declarations, or add an appropriate Angular decorator.

    --> The above error means that the angular can't find the component.
    --> So we have to declare the component as

        @Component()

    --> But whenever we have to define the component we need atleast one property. The property is "selector".

    import { Component } from "@angular/core";

    @Component({
        selector: 'app-root',
    })
    export class AppComponent {}

    --> Even we decalare the selector we are getting an error about template :

        ERROR: component is missing template

    --> To remove the error we have to add one more property i.e. template

    
        ```
        import { Component } from "@angular/core";
        @Component({
            selector: 'app-root',
            template: "<h1>My App</h1>",
        })
        export class AppComponent {}
        ```

        --> Even after running the file we will get the white screen with no information display. It is because we don't add any browser related information for the angular.

        --> Even after importing the browser module we are not getting anything in the browser window because we didn't add sonething which is just important for the root module i.e bootstrap component which is the first ever component to load.

            import { NgModule } from "@angular/core";
            import { BrowserModule } from "@angular/platform-browser";
            import { AppComponent } from "./app.component";

            @NgModule({
                declarations: [AppComponent],
                imports: [BrowserModule],
                bootstrap: [AppComponent],

            })

            export class AppModule {}

            --> We are getting Hello Template text which is coming from the template in app.module.ts


*** Creating Component From CLI ***

--> We can generate a new component in angular by running the command:

    ng generate component [name]

    Ex: ng generate component books

--> Whenever we create a component it wil automatically decalre inside the AppModule.

*** Interpolation ***
 
 --> It only works with string values.

 --> It refers to embedding expressions into marked up text.

 --> It is basically used for displaying the dynamic data in our html web page.

 --> By default, interpolation uses the double curly braces {{ and }} as delimiters.

 --> What ever we are defining inside the app. component.ts or book.component.ts whatever will be the name but it should be component.ts

 --> So whatever we will define whether it will be function or property that will be our dynamic data.

 --> Suppose we decalre any property in app.component.ts

 import { Component} from '@angular/core';

 @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls:[./app.component.css']
 })
export class AppComponent {
    title = 'blog';
    data = "hello code"
}

--> We can use the interpolation only in app.component.html

Ex: <h1>Hello Angular {{data}} </h1>

--> We can't use it in app.component.ts

--> Using Interpolation we can show the property data, function data. We can do airthmetic operations also. We can do comparison also.

*** What we can't do with Interpolation ***

--> We can't assign the value.
--> We can't make new keyword.
--> We can't add incement operator.

*** Property Binding ***

 *** Difference Between Attribute And Property ***
   
    --> Attributes vs Property

        --> Attributes - HTML
        --> Properties - DOM
    
    --> Attributes initialzes the DOM properties and they are done. Attribute values doesn't change once    they are initialized.

    --> Property values however can change.

    --> It helps to set values for the properties for HTML elements and directives.

    --> It is used ot toogle button functionality, set paths programmatically, and share values between components.

    --> Property binding works on boolean values also.

    --> Interpolation works on number and string values. 

** Event Binding **