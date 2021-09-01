// Import stylesheets
import './style.css';
const appDiv: HTMLElement = document.getElementById('app');

appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const flattenWithLowerCaseKeys = (obj: any, path = ''): any => {
  if (!(obj instanceof Object)) return { [path.replace(/\.$/g, '')]: obj };

  return Object.keys(obj).reduce((output, key) => {
    return obj instanceof Array
      ? {
          ...output,
          ...flattenWithLowerCaseKeys(
            (<any>obj)[key],
            path + '[' + key.toLowerCase() + '].'
          )
        }
      : {
          ...output,
          ...flattenWithLowerCaseKeys(obj[key], path + key.toLowerCase() + '.')
        };
  }, {});
};
const flattenme:JSON = {
"ApiBaseUri": "TEST"
}

let flattenmew = {
  "ApiBaseUri": "TEST",
  "ApiGatewayBaseUri": "TEST",
  "ApplicationVersion": "TEST",
  "ApprovalEmailKey": "TEST",
  "CDN": {
    "Enabled": "TEST",
    "Endpoint": "TEST"
  },
  "ChangeTracking": {
    "ValidateOnSave": "TEST"
  },
  "ClientValidationEnabled": "TEST",
  "cpBlobStorageContainer": "TEST",
  "CPDataFieldCacheInMinutes": "TEST",
  "CPLayoutCacheInMinutes": "TEST",
  "CPM": {
    "CPLink": "TEST",
    "DownloadInvoiceLink":
      "https": "//contrcs-ui-tst-wa-we.azurewebsites.net/#/export/4/{0}/",
    "PwdResetLink":
      "https": "//contrcs-ui-tst-wa-we.azurewebsites.net/#/passwordreset?token={0}",
    "Registration": {
      "EmailAddresses": "TEST"
    }
  },
  "customTermsBlobStorageContainer": "TEST",
  "ContactUs": {
    "BillingMailTo": "TEST",
    "BillingTelNo": "TEST",
    "BillingTelText": "TEST",
    "BillingText": "TEST",
    "HelpGuideRM": "TEST",
    "HelpGuideCPM": "TEST",
    "HelpGuideText": "TEST",
    "SupportMailTo": "TEST"
  },
  "CurrentThresholdMinutes": "TEST",
  "Documentsign": {
    "BasePath": "TEST",
    "IntegratorKey": "TEST",
    "Password": "TEST",
    "Username": "TEST"
  },
  "Email": {
    "SendAttempts": "TEST",
    "ContactUsEmail": "TEST"
  },
  "Environment": "TEST",
  "EmailKey": "TEST",
  "ExternalRedirectEmail": "TEST",
  "ExportEndpointApiKey": "TEST",
  "ExternalExporterMaxRetry": "TEST",
  "GUI": {
    "PageSizeCappingStack": "TEST"
  },
  "ikey": "TEST",
  "ImageRootPath": "TEST",
  "ImagesContainer": "TEST",
  "ImagesQueue": "TEST",
  "IntegrateApiUri": "TEST",
  "IntegrateBaseUri": "TEST",
  "Integration": {
    "AdminEmail": "TEST"
  },
  "Intercom": {
    "AppId": "TEST",
    "Enabled": "TEST"
  },
  "Invoicing": {
    "SecondPersonApprovalEnabled": "TEST"
  },
  "JwtSub": "TEST",
  "JwtIssuer": "TEST",
  "JwtAudience": "TEST",
  "LoggingBlobContainer": "TEST",
  "LoggingBlobQueue": "TEST",
  "Login": {
    "VideoURL": "TEST"
  },

  "PageSize": "TEST",
  "PreserveLoginUrl": "TEST",
  "RealtimeThresholdMinutes": "TEST",
  "RecentThresholdMinutes": "TEST",
  "Security": {
    "Endpoints": {
      "Open": "TEST"
    },
    "PassPhrase": "TEST",
    "PasswordRegex":
      "(?!.*\\s)(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*#?&amp;]).*",
    "TokenExpiryDays": "TEST",
    "TokenExpiryMinutes": "TEST",
    "TokenExpiryMinutesesfsd": "TEST",
    "PasswordResetExpiryHours": "TEST",
    "CorsOrigin": "TEST",
    "TokenRefreshMS": "TEST",
    "Token": {
      "MinutesToAutoRenew": "TEST",
      "Cookie": {
        "ExpiryMinutes": "TEST"
      },
      "Header": {
        "Renewed": {
          "Token": "TEST"
        },
        "Token": {
          "Renewed": "TEST",
          "IPValidation": {
            "Ignore": "TEST"
          }
        }
      }
    }
  },
  "SiteName": "TEST",
  "SMTPServer": {
    "BCC": "TEST",
    "From": "TEST",
    "Password": "TEST",
    "Subject": {
      "CompanyInvoice": "TEST",
      "DeclarationsAlert": "TEST",
      "UserResetEmail": "TEST",
      "Value": "TEST"
    },
    "Username": "TEST",
    "Value": "TEST"
  },
  "UnobtrusiveJavaScriptEnabled": "TEST",
  "webpages": {
    "Version": "TEST",
    "Enabled": "TEST"
  },
  "SSO": {
    "Url": {
      "Base": "TEST",
      "GetCurrentUser": "TEST",
      "Login": "TEST",
      "Logout": "TEST",
      "NonCloudBase": "TEST",
      "NotificationHub": "TEST",
      "ValidateToken": "TEST"
    },
    "Token": {
      "Name": {
        "In": {
          "QueryString": "TEST",
          "Header": "TEST"
        }
      }
    },
    "Enabled": "TEST"
  },
  "Support": {
    "Passcode": "TEST"
  },
  "UnsupportedBrowser": {
    "MinSafariVersion": "TEST",
    "MinChromeVersion": "TEST",
    "WarningFrequency": "TEST"
  },
  "WebsiteShortName": "TEST",
  "WebsiteTitle": "TEST",
  "WebsiteVersion": "TEST"
}

var ft = flattenWithLowerCaseKeys(flattenme);
var ptag;
for (var k in ft) {
  ptag = document.createElement('P');
  ptag.innerHTML = k;
  appDiv.appendChild(ptag);
}
