#Introduction
    
    This is the applicationinsights Plugin for the Mezzurite Timing tool.  This plugin enables mezzurtie timings to be sent to your Applicaiton Insight log storage. 

#Getting Started
    1. Enable application insights in your azure subscriptioing (TODO Add link to doc)
    2. Pull in Mezzurite and instrement your site with it (TODO Add Link to mezzurite)
    3. Include the plugin in a script tag (TODO add link to plugin cdn drop).
    4. Update your Applicaiton insights setup code with:

        ```
        var aIM = new ApplicationInsightsMezzurite.MezzuritePlugIn();
        var sdkInstance ...
        {
            instrumentationKey: "Use your key here",
            extensions : [aIM]
        }
        ...
        ```
    5. You can find your data in your Azure Telemetry in the PageviewPerformance event, in the properties tag under data.baseData.

#Build

    ```
    npm run build
    ```

#Test

    TODO Add tests
    ```
    npm run test
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
