import Pin from '@/objects/pin';

/**
 * This pump cycles food to the plants in the tub.
 */
export default class FeedPump {

  constructor(pin) {
    this.pump = new Pin(pin);
  }
}
