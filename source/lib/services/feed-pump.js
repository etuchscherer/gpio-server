import LED from '@/lib/objects/led';

/**
 * This pump cycles food to the plants in the tub.
 */
class FeedPump {

  constructor(pin) {
    this.pump = new LED(pin);
  }

}