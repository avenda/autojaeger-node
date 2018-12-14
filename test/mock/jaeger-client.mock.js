class JaegerClient {
  constructor() {
    this.sender = '';
  }

  RemoteReporter(sender) {
    this.sender = sender;
  }
}

export default JaegerClient;
