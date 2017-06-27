'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = amzn1.ask.skill.54970319-32da-4efe-ac8c-0d7a5f116c05;

var SKILL_NAME = "My Personal Trainer";
var GET_FACT_MESSAGE = "Here's your fact: ";
var GET_TODAY_MESSAGE = "Of course: ";
var GET_DISTANCE_MESSAGE = "All the way: ";
var HELP_MESSAGE = "You can ask if you're going running today, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "The best preparation for tomorrow is doing your best today.",
    "Put your heart, mind, and soul into even your smallest acts. This is the secret of success.",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. ",
    "My mission in life is not merely to survive, but to thrive. ",
    "Health is the greatest gift. ",
    "Keep your face toward the sunshine - and shadows will fall behind you. ",
    "What we think we become. ",
    "What lies behind you and what lies in front of you, pales in comparison to what lies inside you. ",
    "Believe you can and you're halfway there. ",
    "Start by doing what's necessary; then you do what's possible. And suddenly you are doing the impossible. ",
    "Perfection is not attainable. But if we chase perfection, we can catch excellence. "
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'GetTodayMessageIntent': function() {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_TODAY_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'GetDistanceMessageIntent': function() {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_DISTANCE_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};