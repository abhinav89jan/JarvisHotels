const config={
    cognito:{
        identityPoolId:"us-east-1_4L7XKaNff",
        cognitoDomain:"jarvishotels.auth.us-east-1.amazoncognito.com",
        appId:"1rnhu9ofpddh3rfuholo3k8ij5"
    }
}

var cognitoApp={
    auth:{},
    Init: function()
    {

        var authData = {
            ClientId : config.cognito.appId,
            AppWebDomain : config.cognito.cognitoDomain,
            TokenScopesArray : ['email', 'openid','profile'],
            RedirectUriSignIn : 'https://localhost/jarvishotels/',
            RedirectUriSignOut : 'https://localhost/jarvishotels/',
            UserPoolId : config.cognito.identityPoolId, 
            AdvancedSecurityDataCollectionFlag : false,
                Storage: null
        };

        cognitoApp.auth = new AmazonCognitoIdentity.CognitoAuth(authData);
        cognitoApp.auth.userhandler = {
            onSuccess: function(result) {
              
            },
            onFailure: function(err) {
            }
        };
    }
}