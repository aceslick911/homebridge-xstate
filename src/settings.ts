/**
 * This is the name of the platform that users will use to register the plugin in the Homebridge config.json
 */
export const PLATFORM_NAME = 'XStatePlatform';

/**
 * This must match the name of your plugin as defined the package.json
 */
export const PLUGIN_NAME = 'homebridge-xstate';

export const DEFAULTS = {
  Characteristics:{
        
    Manufacturer:'Default-Manufacturer',
    Model:'Default-Model',
    SerialNumber:'Default-Serial'
  }
}

export const xstateDevices = [
  {
    id: 'ABCD',
    name: 'TestLight1'
  },
  {
    id: 'EFGH',
    name: 'TestLight2'
  }
];

export const MotionDevices = {
  m1:    {
    name:'Motion Sensor One Name',
    id:'YourUniqueIdentifier-1'
  },
  m2: {
    name:'Motion Sensor Two Name',
    id:'YourUniqueIdentifier-2'
  }
}
