import LED from '@/objects/led';

/**
 * This pump cycles food to the plants in the tub.
 */
export default class FeedPump {

  constructor(pin) {
    this.pump = new LED(pin);
  }
}
