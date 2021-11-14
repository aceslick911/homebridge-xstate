// const log = require('loglevel');

import { createMachine, assign, actions, interpret } from 'xstate'


const send = (data,data2)=>{
  console.log('send',data,data2);
  return{
    payload: 'OK',
    topic: 'off',
  };
}
const cancel = (data)=>{
  console.log('cancel',data);
  return{
    payload: 'OK',
    topic: 'off',
  };
}

const log ={ info:(data,data2?)=>{
  console.log(data,data2)
},log:(data,data2?)=>{
  console.log(data,data2)
}
}

export const LightMachine = {
  reqired: ['services/mqtt'],
  create: ({ services, lightTopic }) => {
    // lightOnActions
    const CANCEL_timeoutDelay = cancel('motionTimeoutDelay'),
      SEND_TimeoutEvent = send('MOTION_TIMEOUT', {
        id: 'motionTimeoutDelay',
        delay: context => context.motion_timeout,
      }),
      ASSIGN_LastMotionNewDate = assign(() => ({
        last_motion: new Date(),
      })),
      CALLBACK_ReplyOkOn = context => {
        log.info(
          `Lights: Received motion event at ${context.last_motion}`,
        );
        return {
          payload: 'OK',
          topic: 'on',
        };
      };

    // lightOffActions
    const CALLBACK_ReplyOkOff = context => {
      log.info('Lights: No motion received, lights off');
      return{
        payload: 'OK',
        topic: 'off',
      };
    };

    return createMachine(
      {
        id: `actor/${lightTopic}`,
        initial: 'light_connecting',
        context: {
          motion_timeout: 3 * 60 * 1000,
          last_motion: 0,
          lightMachine:{on:false},
        },
        states: {
          light_connecting: {
            invoke: {
              src: 'waitForLightConnected',
              onDone: '#light_off',
            },
          },
          light_on: {
            initial: 'turning_on',
            states: {
              turning_on: {
                entry: [
                  CALLBACK_ReplyOkOn,
                ],

                invoke: [
                  {
                    src: 'then',
                    onDone: 'awaitingOffTimeout',
                  },
                ],
              },
              awaitingOffTimeout: {
                on: {
                  MOTION: {
                    actions: [
                        CALLBACK_ReplyOkOn,
                    ],
                  },
                  MOTION_TIMEOUT: {
                    target: '#light_off',
                  },
                },
              },
            },
          },
          light_off: {
            id: 'light_off',
            entry: CALLBACK_ReplyOkOff,
            on: {
              MOTION: 'light_on',
            },
          },
        },
      },
      {
        services: {
          ...services,
          waitForLightConnected: ()=>true
        },
      },
    );
  },
};
