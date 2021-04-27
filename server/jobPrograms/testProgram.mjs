import { JobProgram } from "node-background-job";

export default class TestProgram extends JobProgram {

  async run(applicationLog) {
    console.log("start running testJobProgram...");
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        console.log(this.name, this.parameters);
        if (this.parameters.PARAM1 === 'value1'){
          applicationLog.info('application log 1');
          reject(new Error('error happened in testJobProgram'));
        } else {
          console.log('testJobProgram finished!');
        }
        resolve(this.name);
      }, 500);
    })
  }
}

JobProgram.registerJobProgram('TestProgram', {
  className: 'TestProgram',
  class: TestProgram,
  description: {
    DEFAULT: 'Test job program',
    EN: 'Test job program'
  },
  parameterDefinitions: {
    GROUP1: {
      text: 'Group One',
      parameters: {
        PARAM1: {
          type: 1,
          text: 'Parameter 1',
          mandatory: true,
        },
        PARAM2: {
          dataElement: 'USER_ID',
        }
      }
    }
  }
});
