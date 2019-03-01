[![npm version](https://badge.fury.io/js/%40microsoft%2Fapplicationinsights-mezzurite.svg)](https://badge.fury.io/js/%40microsoft%2Fapplicationinsights-mezzurite)

# Introduction
    
This is the Application Insights Plugin for the Mezzurite Timing tool. This plugin enables Mezzurite timings to be sent to your Application Insights log storage.

Below is an example of the data sent into Applicaiton Insights
![Mezzurite Application Insights Workbook](https://github.com/Microsoft/ApplicationInsights-JS-Mezzurite/blob/master/exampleReport.png?raw=true)


# Getting Started

This logger is designed to forward [Mezzurite Metrics](https://github.com/Microsoft/Mezzurite/blob/master/README.md) to [Application Insights](https://github.com/Microsoft/ApplicationInsights-JS/blob/master/README.md) for monitoring and analytics.

## Prerequisites
### Install and Configure the Applicaiton Insights JS SDK 1.0.20 or Greater
Follow the [Applicaiton Insights JS SDK Getting Started](https://www.npmjs.com/package/applicationinsights-js/v/1.0.20#get-started) documentation to enable Application Insights.

### Install and Instrument your Applicaiton with Mezzurite
Follow the [Mezzurite Framework Documentation](https://github.com/Microsoft/Mezzurite#framework-specific-documentation) for your specific framework to install and instrument your applicaiton.

## Setup
### Install the Extension
Install the Application Insights Mezzurite Extension via NPM:

https://www.npmjs.com/package/@microsoft/applicationinsights-mezzurite

### Include the Extension in your Application
#### For EMS:
Inside the file which contains the added application insights sku:
```javascript
import {withMezzuriteRouter} from '@microsoft/mezzurite-react';
    const mzLog = new MezzuritePlugIn();
    const iKey = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"; // Replace this with your instrumenationKey for Application Insights. 
    const ai = new ApplicationInsights({config: {extensions: [mzLog], instrumentationKey: iKey, maxBatchInterval: 100, disableFetchTracking: false}});
        ai.loadAppInsights();
```
#### For UMD:
```html
    <script type="text/javascript" src="<PathToNpmPackage>/browser/applicationInsight.mezzurite.umd.js"></script>
    <!-- the snippet below assumes that JS SDK script has already loaded -->
    <script type="text/javascript" src="/pathToAIJSSDK.js"></script>   
    <script type="text/javascript">   
        var mzLog = new ApplicationInsightsMezzurite.MezzuritePlugIn();

        var snippet = {   
                config: {   
                    extensions: [mzLog],
                    instrumentationKey: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx"   
                }   
            };   
        var init = new Microsoft.ApplicationInsights.Initialization(snippet);   
        var appInsights = init.loadAppInsights();   
```

# Build
```
 npm run build
```
# Test

In the Test folder of the repo there is a Test.html page. Build the project, then open test.html. This html uses the logger from the build and sends fake data to the subscription.

You can validate the output either in Azure or by opening dev tools and looking at the network trace. The data will be in the track calls.


# Mezzurite Ecosystem
| Projects | |
| ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [ApplicationInsights-JS-Mezzurite](https://github.com/Microsoft/ApplicationInsights-JS-Mezzurite) | [Application insights](https://github.com/Microsoft/ApplicationInsights-JS) extension of Mezzurite |
| [Mezzurite](https://github.com/Microsoft/Mezzurite) | Base SDK for Mezzurite with Angular, AngularJS and React integration |
| [Mezzurite DevTools](https://github.com/Microsoft/Mezzurite-DevTools) | See Mezzurite metrics being captured with a browser extension |
| [VSCode Mezzurite](https://github.com/Microsoft/vscode-mezzurite) | Check which components and modules are instrumented within VS Code |

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
