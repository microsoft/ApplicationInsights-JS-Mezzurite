# Introduction
    
    This is the applicationinsights Plugin for the Mezzurite Timing tool.  This plugin enables mezzurite timings to be sent to your Application Insight log storage.

# Getting Started

    1. Enable application insights in your azure subscriptioin
    2. Include the Applicaiton Insights Web Sku in your page @microsoft/applicationinsights-web
    3. Pull in Mezzurite and instrement your site with it @microsoft/mezzurite
    4. Update your Applicaiton insights setup code with:

        ```
        var aIMz = new ApplicationInsightsMezzurite.MezzuritePlugIn();

        // Next you create a config object to pass to application insights.
        var config { instrumentationKey: "YOUR_KEY_GOES_HERE",
                     extension : [aIMz]
                    };

        // Finally replace the { instrumentationKey: "YOUR_KEY_GOES_HERE" } object in the Application Insights code with the above config object.  This works for either the npm version or the snippet version.
        ```
    
    Once hooked in, you can see your data in the BrowserTimings Object in Azure's Applicaiton Insights data tables.  
    

# Build

    ```
    npm run build
    ```

# Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
