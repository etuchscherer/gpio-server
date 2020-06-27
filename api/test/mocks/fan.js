export default function getFan() {
  return {
    pin: 1,
    energized: false,
    isEnergized() {
      return this.energized;
    },
    on() {
      this.energized = !this.energized;
    }
  }
};