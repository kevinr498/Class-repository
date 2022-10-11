let callBack = {
  user: { name: "Tommy", phonenumber: "434-566-8608" },
  phoneCalls: [
    {
      nameOfCaller: "Fred",
      numberOfCaller: "424-880-9857",
      voiceMessage: `Greetings`,
    },
  ],
  messages: [
    {
      messenger: "Fred",
      email: "fred@email.com",
      message: "Greetings",
    },
  ],
};

const { user, phoneCalls, messages } = callBack;

function missedPhoneCall() {
  callBack.phoneCalls.push({
    nameOfCaller: "Fred",
    numberOfCaller: "424-880-9857",
    voiceMessage: `Greetings ${callBack.user.name} please call me back`,
  });
  readOutMessages();
}

function readOutMessages() {
  console.log(callBack.phoneCalls);
  console.log(callBack.messages);
}

function missedMessages() {
  callBack.phoneCalls.push({
    messenger: "Fred",
    email: "fred@email.com",
    message: `Greetings ${callBack.user.name} please email me back`,
  });
  readOutMessages();
}
